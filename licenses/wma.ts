/**
 * WMA v1 / v2 - Dynasty Warriors 8's X360 voices, WMA v2 in RIFF "XWMA"
 * (xWMA). A port of FFmpeg's decoder (libavcodec/wmadec.c, wma.c, the run-level
 * decoding, wma_freqs.c; the tables are wmatables.ts, generated from wmadata.h,
 * wma_freqs.c and aactab.c's scale factor code by scripts/gen_wma_tables.py),
 * with FFmpeg's xWMA setup (libavformat/xwma.c: the extradata it makes, flags
 * 0x1F; the bit rate it corrects) and vgmstream's samples (src/meta/xwma.c: the
 * dpds table's last entry).
 *
 * THIS FILE (and wmatables.ts) IS LGPL 2.1 (or later), as the FFmpeg code it
 * ports, and stays its own module with this notice:
 *
 *   WMA compatible decoder
 *   Copyright (c) 2002 The FFmpeg Project
 *
 *   This file is part of FFmpeg.
 *
 *   FFmpeg is free software; you can redistribute it and/or
 *   modify it under the terms of the GNU Lesser General Public
 *   License as published by the Free Software Foundation; either
 *   version 2.1 of the License, or (at your option) any later version.
 *
 *   FFmpeg is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *   Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public
 *   License along with FFmpeg; if not, write to the Free Software
 *   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 *
 * THE CODEC. A superframe (block align bytes) holds frames of 2048 samples a
 * channel (at 44.1 kHz), the last one carried on into the next superframe (a
 * bit reservoir); a frame is blocks of 128 to 2048 samples, each with
 * exponents (VLC-coded deltas, or LSP coefficients), run-level coded
 * coefficients over noise, high bands coded as noise of a given power, M/S
 * stereo, through an IMDCT (mdct.ts), sine windowed and overlapped.
 */
import * as T from './wmatables';
import { imdctFull } from './mdct';
import { Bits, Vlc } from './msbits';
import { readXwmaRiff } from './msriff';

const BLOCK_MIN_BITS = 7, BLOCK_MAX_BITS = 11, BLOCK_MAX_SIZE = 1 << BLOCK_MAX_BITS, BLOCK_NB_SIZES = BLOCK_MAX_BITS - BLOCK_MIN_BITS + 1;
const HIGH_BAND_MAX_SIZE = 16, NB_LSP_COEFS = 10, MAX_CODED_SUPERFRAME_SIZE = 32768, MAX_CHANNELS = 2, NOISE_TAB_SIZE = 8192, LSP_POW_BITS = 7;
const f32 = Math.fround;
const log2 = (v: number) => (v > 0 ? 31 - Math.clz32(v) : 0);

// pow(10, i / 16.0) for i in -60..95
const POW_TAB = Float32Array.from({ length: 156 }, (_, i) => 10 ** ((i - 60) / 16));
const HGAIN_VLC = Vlc.fromLengths(T.ff_wma_hgain_hufftab.filter((_, i) => i % 2 === 1), T.ff_wma_hgain_hufftab.filter((_, i) => i % 2 === 0), -18);
const EXP_VLC = Vlc.fromCodes(T.ff_aac_scalefactor_bits, T.ff_aac_scalefactor_code);
const LSP_CODEBOOK = new Float32Array(T.ff_wma_lsp_codebook.map(Number));
const COEF_TABLES = [
  [T.coef0_huffcodes, T.coef0_huffbits, T.levels0], [T.coef1_huffcodes, T.coef1_huffbits, T.levels1], [T.coef2_huffcodes, T.coef2_huffbits, T.levels2],
  [T.coef3_huffcodes, T.coef3_huffbits, T.levels3], [T.coef4_huffcodes, T.coef4_huffbits, T.levels4], [T.coef5_huffcodes, T.coef5_huffbits, T.levels5],
];
// ff_sine_windows[k]
const SINE: Float32Array[] = [];
for (let k = BLOCK_MIN_BITS; k <= BLOCK_MAX_BITS; k++) { const n = 1 << k; SINE[k] = Float32Array.from({ length: n }, (_, i) => Math.sin((i + 0.5) * (Math.PI / (2 * n)))); }

/** init_coef_vlc: the VLC, and each code's run and level */
function coefVlc(t: number) {
  const [codes, bits, levels] = COEF_TABLES[t], n = bits.length;
  const run = new Uint16Array(n), level = new Float32Array(n);
  for (let i = 2, lv = 1, k = 0; i < n; lv++) {
    const l = levels[k++];
    for (let j = 0; j < l; j++) { run[i] = j; level[i] = lv; i++; }
  }
  return { vlc: Vlc.fromCodes(bits, codes), run, level };
}

const totalGainToBits = (g: number) => (g < 15 ? 13 : g < 32 ? 12 : g < 40 ? 11 : g < 45 ? 10 : 9);

export interface WmaParams { version: 1 | 2; sampleRate: number; channels: number; bitRate: number; blockAlign: number; flags2: number }

/** one WMA v1 / v2 stream - FFmpeg's WMACodecContext */
export class WmaStream {
  readonly frameLen: number;
  private version: number; private channels: number; private blockAlign: number;
  private useExpVlc: number; private useBitReservoir: number; private useVariableBlockLen: number; private useNoiseCoding = 1;
  private byteOffsetBits: number;
  private exponentSizes = new Int32Array(BLOCK_NB_SIZES); private exponentBands: Uint16Array[] = [];
  private highBandStart = new Int32Array(BLOCK_NB_SIZES); private coefsStart: number; private coefsEnd = new Int32Array(BLOCK_NB_SIZES);
  private exponentHighSizes = new Int32Array(BLOCK_NB_SIZES); private exponentHighBands: Int32Array[] = [];
  private highBandCoded = [new Int32Array(HIGH_BAND_MAX_SIZE), new Int32Array(HIGH_BAND_MAX_SIZE)];
  private highBandValues = [new Int32Array(HIGH_BAND_MAX_SIZE), new Int32Array(HIGH_BAND_MAX_SIZE)];
  private coef: ReturnType<typeof coefVlc>[];
  private frameLenBits: number; private nbBlockSizes: number;
  private resetBlockLengths = 1; private blockLenBits: number; private nextBlockLenBits: number; private prevBlockLenBits: number;
  private blockLen = 0; private blockPos = 0; private msStereo = 0;
  private channelCoded = new Uint8Array(MAX_CHANNELS); private exponentsBsize = new Int32Array(MAX_CHANNELS);
  private exponents = [new Float32Array(BLOCK_MAX_SIZE), new Float32Array(BLOCK_MAX_SIZE)];
  private maxExponent = new Float32Array([1, 1]);
  private coefs1 = [new Float32Array(BLOCK_MAX_SIZE), new Float32Array(BLOCK_MAX_SIZE)];
  private coefs = [new Float32Array(BLOCK_MAX_SIZE), new Float32Array(BLOCK_MAX_SIZE)];
  private output = new Float32Array(BLOCK_MAX_SIZE * 2);
  private frameOut = [new Float32Array(BLOCK_MAX_SIZE * 2), new Float32Array(BLOCK_MAX_SIZE * 2)];
  private lastSuperframe = new Uint8Array(MAX_CODED_SUPERFRAME_SIZE + 64); private lastBitoffset = 0; private lastSuperframeLen = 0;
  private exponentsInitialized = new Uint8Array(MAX_CHANNELS);
  private noiseTable = new Float32Array(NOISE_TAB_SIZE); private noiseIndex = 0; private noiseMult = 0;
  private lspCos = new Float32Array(BLOCK_MAX_SIZE); private lspPowE = new Float32Array(256);
  private lspPowM1 = new Float32Array(1 << LSP_POW_BITS); private lspPowM2 = new Float32Array(1 << LSP_POW_BITS);
  eofDone = 0;
  private gb = new Bits(new Uint8Array(0), 0, 0);

  constructor(p: WmaParams) {
    const flags2 = p.flags2;
    this.version = p.version; this.channels = p.channels; this.blockAlign = p.blockAlign;
    if (!p.blockAlign) throw new Error('WMA: block_align is not set');
    this.useExpVlc = flags2 & 1; this.useBitReservoir = flags2 & 2; this.useVariableBlockLen = flags2 & 4;
    // ff_wma_init
    if (p.sampleRate > 50000 || p.channels > 2 || p.bitRate <= 0) throw new Error('WMA: unsupported stream');
    this.frameLenBits = p.sampleRate <= 16000 ? 9 : p.sampleRate <= 22050 || (p.sampleRate <= 32000 && this.version === 1) ? 10 : 11;
    this.nextBlockLenBits = this.prevBlockLenBits = this.blockLenBits = this.frameLenBits;
    this.frameLen = 1 << this.frameLenBits;
    if (this.useVariableBlockLen) {
      let nb = ((flags2 >> 3) & 3) + 1;
      if (p.bitRate / p.channels >= 32000) nb += 2;
      const nbMax = this.frameLenBits - BLOCK_MIN_BITS;
      if (nb > nbMax) nb = nbMax;
      this.nbBlockSizes = nb + 1;
    } else this.nbBlockSizes = 1;
    let highFreq = f32(p.sampleRate * 0.5);
    let sr1 = p.sampleRate;
    if (this.version === 2) sr1 = sr1 >= 44100 ? 44100 : sr1 >= 22050 ? 22050 : sr1 >= 16000 ? 16000 : sr1 >= 11025 ? 11025 : sr1 >= 8000 ? 8000 : sr1;
    const bps = f32(f32(p.bitRate) / f32(p.channels * p.sampleRate));
    this.byteOffsetBits = log2(Math.trunc(bps * this.frameLen / 8 + 0.5)) + 2;
    if (this.byteOffsetBits + 3 > 25) throw new Error('WMA: byte_offset_bits too large');
    let bps1 = bps;
    if (p.channels === 2) bps1 = f32(bps * 1.6);
    if (sr1 === 44100) { if (bps1 >= 0.61) this.useNoiseCoding = 0; else highFreq = f32(highFreq * 0.4); }
    else if (sr1 === 22050) { if (bps1 >= 1.16) this.useNoiseCoding = 0; else if (bps1 >= 0.72) highFreq = f32(highFreq * 0.7); else highFreq = f32(highFreq * 0.6); }
    else if (sr1 === 16000) { highFreq = f32(highFreq * (bps > 0.5 ? 0.5 : 0.3)); }
    else if (sr1 === 11025) highFreq = f32(highFreq * 0.7);
    else if (sr1 === 8000) { if (bps <= 0.625) highFreq = f32(highFreq * 0.5); else if (bps > 0.75) this.useNoiseCoding = 0; else highFreq = f32(highFreq * 0.65); }
    else { highFreq = f32(highFreq * (bps >= 0.8 ? 0.75 : bps >= 0.6 ? 0.6 : 0.5)); }
    this.coefsStart = this.version === 1 ? 3 : 0;
    for (let k = 0; k < this.nbBlockSizes; k++) {
      const blockLen = this.frameLen >> k, bands = new Uint16Array(25);
      this.exponentBands[k] = bands;
      if (this.version === 1) {
        let lpos = 0, i = 0;
        for (; i < 25; i++) {
          const a = T.ff_wma_critical_freqs[i], b = p.sampleRate;
          let pos = Math.trunc((blockLen * 2 * a + (b >> 1)) / b);
          if (pos > blockLen) pos = blockLen;
          this.exponentBands[0][i] = pos - lpos;
          if (pos >= blockLen) { i++; break; }
          lpos = pos;
        }
        this.exponentSizes[0] = i;
      } else {
        const a = this.frameLenBits - BLOCK_MIN_BITS - k;
        let table: number[] | null = null;
        if (a < 3) {
          if (p.sampleRate >= 44100) table = T.exponent_band_44100.slice(a * 25, a * 25 + 25);
          else if (p.sampleRate >= 32000) table = T.exponent_band_32000.slice(a * 25, a * 25 + 25);
          else if (p.sampleRate >= 22050) table = T.exponent_band_22050.slice(a * 25, a * 25 + 25);
        }
        if (table) {
          const n = table[0];
          for (let i = 0; i < n; i++) bands[i] = table[1 + i];
          this.exponentSizes[k] = n;
        } else {
          let j = 0, lpos = 0;
          for (let i = 0; i < 25; i++) {
            const fa = T.ff_wma_critical_freqs[i], b = p.sampleRate;
            let pos = Math.trunc((blockLen * 2 * fa + (b << 1)) / (4 * b));
            pos <<= 2;
            if (pos > blockLen) pos = blockLen;
            if (pos > lpos) bands[j++] = pos - lpos;
            if (pos >= blockLen) break;
            lpos = pos;
          }
          this.exponentSizes[k] = j;
        }
      }
      this.coefsEnd[k] = (this.frameLen - Math.trunc((this.frameLen * 9) / 100)) >> k;
      this.highBandStart[k] = Math.trunc(f32(f32(blockLen * 2 * highFreq) / p.sampleRate) + 0.5);
      const n = this.exponentSizes[k], high = new Int32Array(HIGH_BAND_MAX_SIZE);
      let j = 0, pos = 0;
      for (let i = 0; i < n; i++) {
        let start = pos;
        pos += this.exponentBands[k][i];
        let end = pos;
        if (start < this.highBandStart[k]) start = this.highBandStart[k];
        if (end > this.coefsEnd[k]) end = this.coefsEnd[k];
        if (end > start) high[j++] = end - start;
      }
      this.exponentHighBands[k] = high;
      this.exponentHighSizes[k] = j;
    }
    if (this.useNoiseCoding) {
      this.noiseMult = f32(this.useExpVlc ? 0.02 : 0.04);
      const norm = f32((1 / f32(2 ** 31)) * Math.sqrt(3) * this.noiseMult);
      let seed = 1;
      for (let i = 0; i < NOISE_TAB_SIZE; i++) {
        seed = (Math.imul(seed, 314159) + 1) >>> 0;
        this.noiseTable[i] = f32((seed | 0) * norm);
      }
    }
    let t = 2;
    if (p.sampleRate >= 32000) { if (bps1 < 0.72) t = 0; else if (bps1 < 1.16) t = 1; }
    this.coef = [coefVlc(t * 2), coefVlc(t * 2 + 1)];
    if (!this.useExpVlc) this.lspInit();
  }

  // ---------------------------------------------------------- exponents --
  private lspInit(): void {
    const wdel = Math.PI / this.frameLen;
    for (let i = 0; i < this.frameLen; i++) this.lspCos[i] = 2 * Math.cos(wdel * i);
    for (let i = 0; i < 256; i++) this.lspPowE[i] = 2 ** ((i - 126) * -0.25);
    let b = f32(1);
    for (let i = (1 << LSP_POW_BITS) - 1; i >= 0; i--) {
      const m = (1 << LSP_POW_BITS) + i;
      let a = f32(m * (0.5 / (1 << LSP_POW_BITS)));
      a = f32(1 / Math.sqrt(Math.sqrt(a)));
      this.lspPowM1[i] = 2 * a - b;
      this.lspPowM2[i] = b - a;
      b = a;
    }
  }

  private powM1_4(x: number): number {
    const fb = new Float32Array([x]), u = new Uint32Array(fb.buffer)[0];
    const e = u >>> 23, m = (u >>> (23 - LSP_POW_BITS)) & ((1 << LSP_POW_BITS) - 1);
    const tv = new Uint32Array([((u << LSP_POW_BITS) & ((1 << 23) - 1)) | (127 << 23)]), t = new Float32Array(tv.buffer)[0];
    return f32(this.lspPowE[e] * f32(this.lspPowM1[m] + f32(this.lspPowM2[m] * t)));
  }

  private expLsp(ch: number): void {
    const lsp = new Float32Array(NB_LSP_COEFS);
    for (let i = 0; i < NB_LSP_COEFS; i++) lsp[i] = LSP_CODEBOOK[i * 16 + this.gb.get(i === 0 || i >= 8 ? 3 : 4)];
    let valMax = 0;
    const out = this.exponents[ch];
    for (let i = 0; i < this.blockLen; i++) {
      let p = f32(0.5), q = f32(0.5);
      const w = this.lspCos[i];
      for (let j = 1; j < NB_LSP_COEFS; j += 2) { q = f32(q * f32(w - lsp[j - 1])); p = f32(p * f32(w - lsp[j])); }
      p = f32(p * f32(p * f32(2 - w)));
      q = f32(q * f32(q * f32(2 + w)));
      const v = this.powM1_4(f32(p + q));
      if (v > valMax) valMax = v;
      out[i] = v;
    }
    this.maxExponent[ch] = valMax;
  }

  private expVlc(ch: number): boolean {
    const bands = this.exponentBands[this.frameLenBits - this.blockLenBits], q = this.exponents[ch];
    let qi = 0, bi = 0, maxScale = 0, lastExp: number;
    if (this.version === 1) {
      lastExp = this.gb.get(5) + 10;
      const v = POW_TAB[lastExp + 60];
      maxScale = v;
      const n = bands[bi++];
      q.fill(v, qi, qi + n); qi += n;
    } else lastExp = 36;
    while (qi < this.blockLen) {
      const code = EXP_VLC.read(this.gb);
      lastExp += code - 60;
      if (lastExp + 60 < 0 || lastExp + 60 >= POW_TAB.length) return false;
      const v = POW_TAB[lastExp + 60];
      if (v > maxScale) maxScale = v;
      const n = bands[bi++];
      q.fill(v, qi, qi + n); qi += n;
    }
    this.maxExponent[ch] = maxScale;
    return true;
  }

  // -------------------------------------------------------------- blocks --
  private window(out: Float32Array, at: number): void {
    const inp = this.output;
    if (this.blockLenBits <= this.prevBlockLenBits) {
      const win = SINE[this.blockLenBits];
      for (let i = 0; i < this.blockLen; i++) out[at + i] = f32(inp[i] * win[i]) + out[at + i];
    } else {
      const bl = 1 << this.prevBlockLenBits, n = (this.blockLen - bl) / 2, win = SINE[this.prevBlockLenBits];
      for (let i = 0; i < bl; i++) out[at + n + i] = f32(inp[n + i] * win[i]) + out[at + n + i];
      out.set(inp.subarray(n + bl, n + bl + n), at + n + bl);
    }
    at += this.blockLen;
    const io = this.blockLen;
    if (this.blockLenBits <= this.nextBlockLenBits) {
      const win = SINE[this.blockLenBits], bl = this.blockLen;
      for (let i = 0; i < bl; i++) out[at + i] = inp[io + i] * win[bl - 1 - i];
    } else {
      const bl = 1 << this.nextBlockLenBits, n = (this.blockLen - bl) / 2, win = SINE[this.nextBlockLenBits];
      out.set(inp.subarray(io, io + n), at);
      for (let i = 0; i < bl; i++) out[at + n + i] = inp[io + n + i] * win[bl - 1 - i];
      out.fill(0, at + n + bl, at + n + bl + n);
    }
  }

  /** 0: more blocks, 1: the frame's last; throws when invalid */
  private block(): number {
    const g = this.gb, channels = this.channels;
    if (this.useVariableBlockLen) {
      const n = log2(this.nbBlockSizes - 1) + 1;
      if (this.resetBlockLengths) {
        this.resetBlockLengths = 0;
        let v = g.get(n);
        if (v >= this.nbBlockSizes) throw new Error('prev_block_len_bits out of range');
        this.prevBlockLenBits = this.frameLenBits - v;
        v = g.get(n);
        if (v >= this.nbBlockSizes) throw new Error('block_len_bits out of range');
        this.blockLenBits = this.frameLenBits - v;
      } else { this.prevBlockLenBits = this.blockLenBits; this.blockLenBits = this.nextBlockLenBits; }
      const v = g.get(n);
      if (v >= this.nbBlockSizes) throw new Error('next_block_len_bits out of range');
      this.nextBlockLenBits = this.frameLenBits - v;
    } else { this.nextBlockLenBits = this.prevBlockLenBits = this.blockLenBits = this.frameLenBits; }
    if (this.frameLenBits - this.blockLenBits >= this.nbBlockSizes) throw new Error('block_len_bits invalid');
    this.blockLen = 1 << this.blockLenBits;
    if (this.blockPos + this.blockLen > this.frameLen) throw new Error('frame_len overflow');
    if (channels === 2) this.msStereo = g.get1();
    let any = 0;
    for (let ch = 0; ch < channels; ch++) { const a = g.get1(); this.channelCoded[ch] = a; any |= a; }
    const bsize = this.frameLenBits - this.blockLenBits;
    if (any) this.coded(bsize);
    // next:
    const n4 = this.blockLen / 2;
    for (let ch = 0; ch < channels; ch++) {
      if (this.channelCoded[ch]) imdctFull(this.blockLen, f32(1 / 32768), this.coefs[ch], 0, this.output, 0);
      else if (!(this.msStereo && ch === 1)) this.output.fill(0);
      this.window(this.frameOut[ch], this.frameLen / 2 + this.blockPos - n4);
    }
    this.blockPos += this.blockLen;
    return this.blockPos >= this.frameLen ? 1 : 0;
  }

  private coded(bsize: number): void {
    const g = this.gb, channels = this.channels;
    let totalGain = 1;
    for (;;) {
      if (g.left() < 7) throw new Error('total_gain overread');
      const a = g.get(7);
      totalGain += a;
      if (a !== 127) break;
    }
    const coefNbBits = totalGainToBits(totalGain);
    const nbCoefs = [0, 0];
    const n0 = this.coefsEnd[bsize] - this.coefsStart;
    for (let ch = 0; ch < channels; ch++) nbCoefs[ch] = n0;
    if (this.useNoiseCoding) {
      for (let ch = 0; ch < channels; ch++) {
        if (!this.channelCoded[ch]) continue;
        const n = this.exponentHighSizes[bsize];
        for (let i = 0; i < n; i++) {
          const a = g.get1();
          this.highBandCoded[ch][i] = a;
          if (a) nbCoefs[ch] -= this.exponentHighBands[bsize][i];
        }
      }
      for (let ch = 0; ch < channels; ch++) {
        if (!this.channelCoded[ch]) continue;
        const n = this.exponentHighSizes[bsize];
        let val = -0x80000000;
        for (let i = 0; i < n; i++) {
          if (this.highBandCoded[ch][i]) {
            if (val === -0x80000000) val = g.get(7) - 19;
            else val += HGAIN_VLC.read(g);
            this.highBandValues[ch][i] = val;
          }
        }
      }
    }
    if (this.blockLenBits === this.frameLenBits || g.get1()) {
      for (let ch = 0; ch < channels; ch++) {
        if (!this.channelCoded[ch]) continue;
        if (this.useExpVlc) { if (!this.expVlc(ch)) throw new Error('exponent out of range'); }
        else this.expLsp(ch);
        this.exponentsBsize[ch] = bsize;
        this.exponentsInitialized[ch] = 1;
      }
    }
    for (let ch = 0; ch < channels; ch++) if (this.channelCoded[ch] && !this.exponentsInitialized[ch]) throw new Error('exponents not initialized');
    for (let ch = 0; ch < channels; ch++) {
      if (this.channelCoded[ch]) {
        const t = ch === 1 && this.msStereo ? 1 : 0, ptr = this.coefs1[ch];
        ptr.fill(0, 0, this.blockLen);
        this.runLevel(this.coef[t], ptr, nbCoefs[ch], coefNbBits);
      }
      if (this.version === 1 && channels >= 2) g.align();
    }
    const n4 = this.blockLen / 2;
    let mdctNorm = f32(1 / n4);
    if (this.version === 1) mdctNorm = f32(mdctNorm * Math.sqrt(n4));
    for (let ch = 0; ch < channels; ch++) {
      if (!this.channelCoded[ch]) continue;
      const c1 = this.coefs1[ch], exps = this.exponents[ch], esize = this.exponentsBsize[ch], out = this.coefs[ch];
      let mult = f32(10 ** (totalGain * 0.05) / this.maxExponent[ch]);
      mult = f32(mult * mdctNorm);
      let o = 0;
      if (this.useNoiseCoding) {
        let mult1 = mult;
        for (let i = 0; i < this.coefsStart; i++) {
          out[o++] = f32(f32(this.noiseTable[this.noiseIndex] * exps[(i << bsize) >> esize]) * mult1);
          this.noiseIndex = (this.noiseIndex + 1) & (NOISE_TAB_SIZE - 1);
        }
        const n1 = this.exponentHighSizes[bsize], expPower = new Float32Array(HIGH_BAND_MAX_SIZE);
        let e = (this.highBandStart[bsize] << bsize) >> esize, lastHigh = 0;
        for (let j = 0; j < n1; j++) {
          const n = this.exponentHighBands[this.frameLenBits - this.blockLenBits][j];
          if (this.highBandCoded[ch][j]) {
            let e2 = 0;
            for (let i = 0; i < n; i++) { const v = exps[e + ((i << bsize) >> esize)]; e2 = f32(e2 + f32(v * v)); }
            expPower[j] = f32(e2 / n);
            lastHigh = j;
          }
          e += (n << bsize) >> esize;
        }
        e = (this.coefsStart << bsize) >> esize;
        let ci = 0;
        for (let j = -1; j < n1; j++) {
          const n = j < 0 ? this.highBandStart[bsize] - this.coefsStart : this.exponentHighBands[this.frameLenBits - this.blockLenBits][j];
          if (j >= 0 && this.highBandCoded[ch][j]) {
            mult1 = f32(Math.sqrt(f32(expPower[j] / expPower[lastHigh])));
            mult1 = f32(mult1 * 10 ** (this.highBandValues[ch][j] * 0.05));
            mult1 = f32(mult1 / f32(this.maxExponent[ch] * this.noiseMult));
            mult1 = f32(mult1 * mdctNorm);
            for (let i = 0; i < n; i++) {
              const noise = this.noiseTable[this.noiseIndex];
              this.noiseIndex = (this.noiseIndex + 1) & (NOISE_TAB_SIZE - 1);
              out[o++] = f32(f32(noise * exps[e + ((i << bsize) >> esize)]) * mult1);
            }
          } else {
            for (let i = 0; i < n; i++) {
              const noise = this.noiseTable[this.noiseIndex];
              this.noiseIndex = (this.noiseIndex + 1) & (NOISE_TAB_SIZE - 1);
              out[o++] = f32(f32(f32(c1[ci++] + noise) * exps[e + ((i << bsize) >> esize)]) * mult);
            }
          }
          e += (n << bsize) >> esize;
        }
        const n = this.blockLen - this.coefsEnd[bsize];
        mult1 = f32(mult * exps[e + ((-(1 << bsize)) >> esize)]);
        for (let i = 0; i < n; i++) {
          out[o++] = f32(this.noiseTable[this.noiseIndex] * mult1);
          this.noiseIndex = (this.noiseIndex + 1) & (NOISE_TAB_SIZE - 1);
        }
      } else {
        for (let i = 0; i < this.coefsStart; i++) out[o++] = 0;
        const n = nbCoefs[ch];
        for (let i = 0; i < n; i++) out[o++] = f32(f32(c1[i] * exps[(i << bsize) >> esize]) * mult);
        const m = this.blockLen - this.coefsEnd[bsize];
        for (let i = 0; i < m; i++) out[o++] = 0;
      }
    }
    if (this.msStereo && this.channelCoded[1]) {
      if (!this.channelCoded[0]) { this.coefs[0].fill(0, 0, this.blockLen); this.channelCoded[0] = 1; }
      const a = this.coefs[0], b = this.coefs[1];
      for (let i = 0; i < this.blockLen; i++) { const t = f32(a[i] - b[i]); a[i] = f32(a[i] + b[i]); b[i] = t; }
    }
  }

  /** ff_wma_run_level_decode, version 0 */
  private runLevel(c: ReturnType<typeof coefVlc>, ptr: Float32Array, numCoefs: number, coefNbBits: number): void {
    const g = this.gb, mask = this.blockLen - 1;
    let offset = 0;
    for (; offset < numCoefs; offset++) {
      const code = c.vlc.read(g);
      if (code > 1) {
        offset += c.run[code];
        ptr[offset & mask] = g.get1() ? c.level[code] : -c.level[code];
      } else if (code === 1) break;
      else {
        const level = g.get(coefNbBits);
        offset += g.get(this.frameLenBits);
        ptr[offset & mask] = g.get1() ? level : -level;
      }
    }
    if (offset > numCoefs) throw new Error('overflow in spectral RLE');
  }

  private frame(out: Float32Array[], at: number): void {
    this.blockPos = 0;
    for (;;) if (this.block()) break;
    for (let ch = 0; ch < this.channels; ch++) {
      out[ch].set(this.frameOut[ch].subarray(0, this.frameLen), at);
      this.frameOut[ch].copyWithin(0, this.frameLen, 2 * this.frameLen);
    }
  }

  /**
   * wma_decode_superframe: a superframe (block align bytes of `data` from
   * `at`; 0 bytes at the end), its frames appended to `pcm`. False when it
   * fails (its frames dropped, the reservoir reset)
   */
  decodeSuperframe(data: Uint8Array, at: number, size: number, pcm: (frames: Float32Array[], count: number) => void): boolean {
    if (!size) {
      if (this.eofDone) return true;
      pcm(this.frameOut.slice(0, this.channels).map((c) => c.subarray(0, this.frameLen)), this.frameLen);
      this.lastSuperframeLen = 0;
      this.eofDone = 1;
      return true;
    }
    if (size < this.blockAlign) return false;
    const bufSize = this.blockAlign;
    let g = this.gb = new Bits(data, at, bufSize * 8);
    let nbFrames: number;
    if (this.useBitReservoir) {
      g.skip(4);
      nbFrames = g.get(4) - (this.lastSuperframeLen <= 0 ? 1 : 0);
      if (nbFrames <= 0) {
        const isError = nbFrames < 0 || g.left() <= 8;
        if (isError) return false;
        if (this.lastSuperframeLen + bufSize - 1 > MAX_CODED_SUPERFRAME_SIZE) { this.lastSuperframeLen = 0; return false; }
        let q = this.lastSuperframeLen;
        for (let len = bufSize - 1; len > 0; len--) this.lastSuperframe[q++] = g.get(8);
        this.lastSuperframe.fill(0, q, q + 64);
        this.lastSuperframeLen += 8 * bufSize - 8;
        return true;
      }
    } else nbFrames = 1;
    const out = Array.from({ length: this.channels }, () => new Float32Array(nbFrames * this.frameLen));
    let offset = 0;
    try {
      if (this.useBitReservoir) {
        const bitOffset = g.get(this.byteOffsetBits + 3);
        if (bitOffset > g.left()) throw new Error('invalid last frame bit offset');
        if (this.lastSuperframeLen > 0) {
          if (this.lastSuperframeLen + ((bitOffset + 7) >> 3) > MAX_CODED_SUPERFRAME_SIZE) throw new Error('superframe too large');
          let q = this.lastSuperframeLen, len = bitOffset;
          while (len > 7) { this.lastSuperframe[q++] = g.get(8); len -= 8; }
          if (len > 0) this.lastSuperframe[q++] = g.get(len) << (8 - len);
          this.lastSuperframe.fill(0, q, q + 64);
          this.gb = new Bits(this.lastSuperframe, 0, this.lastSuperframeLen * 8 + bitOffset);
          if (this.lastBitoffset > 0) this.gb.skip(this.lastBitoffset);
          this.frame(out, offset);
          offset += this.frameLen;
          nbFrames--;
        }
        let pos = bitOffset + 4 + 4 + this.byteOffsetBits + 3;
        if (pos >= MAX_CODED_SUPERFRAME_SIZE * 8 || pos > bufSize * 8) throw new Error('invalid frame position');
        g = this.gb = new Bits(data, at + (pos >> 3), (bufSize - (pos >> 3)) * 8);
        if (pos & 7) g.skip(pos & 7);
        this.resetBlockLengths = 1;
        for (let i = 0; i < nbFrames; i++) { this.frame(out, offset); offset += this.frameLen; }
        pos = this.gb.count() + ((bitOffset + 4 + 4 + this.byteOffsetBits + 3) & ~7);
        this.lastBitoffset = pos & 7;
        pos >>= 3;
        const len = bufSize - pos;
        if (len > MAX_CODED_SUPERFRAME_SIZE || len < 0) throw new Error('len invalid');
        this.lastSuperframeLen = len;
        this.lastSuperframe.set(data.subarray(at + pos, at + pos + len));
      } else {
        this.frame(out, offset);
        offset += this.frameLen;
      }
    } catch {
      this.lastSuperframeLen = 0;
      return false;
    }
    pcm(out, offset);
    return true;
  }
}

/**
 * WMA superframes (block align bytes each) decoded as FFmpeg's wmav2 decoder
 * gives them: its last frame at the end, and its delay - two frames - cut
 * from the start. `bad`: superframes refused
 */
export function decodeWma(data: Uint8Array, p: WmaParams): { pcm: Float32Array[]; bad: number } {
  const s = new WmaStream(p), parts: Float32Array[][] = [];
  let total = 0, bad = 0;
  const take = (frames: Float32Array[], count: number) => { parts.push(frames.map((c) => c.slice(0, count))); total += count; };
  for (let at = 0; at < data.length; at += p.blockAlign) if (!s.decodeSuperframe(data, at, Math.min(p.blockAlign, data.length - at), take)) bad++;
  s.decodeSuperframe(data, data.length, 0, take);
  const all = Array.from({ length: p.channels }, () => new Float32Array(total));
  let o = 0;
  for (const part of parts) { part.forEach((c, i) => all[i].set(c, o)); o += part[0].length; }
  // avctx->delay: FFmpeg skips the first two frames
  const skip = Math.min(total, s.frameLen * 2);
  return { pcm: all.map((c) => c.slice(skip)), bad };
}

/** FFmpeg's xwma.c: the bit rate a WMA v2 xWMA's fmt gives, corrected where the encoder wrote a wrong one */
export function xwmaBitRate(channels: number, sampleRate: number, avgBytes: number): number {
  let br = avgBytes * 8;
  if (channels === 1) {
    if (sampleRate === 22050 && (br === 48000 || br === 192000)) br = 20000;
    else if (sampleRate === 32000 && (br === 48000 || br === 192000)) br = 20000;
    else if (sampleRate === 44100 && (br === 96000 || br === 192000)) br = 48000;
  } else if (channels === 2) {
    if (sampleRate === 22050 && (br === 48000 || br === 192000)) br = 32000;
    else if (sampleRate === 32000 && br === 192000) br = 48000;
  }
  return br;
}

/** a WMA v2 xWMA (RIFF "XWMA", fmt 0x161) decoded and cut as vgmstream plays it: FFmpeg's own extradata (flags 0x1F), its samples the dpds table's */
export function decodeXwmaV2(b: Uint8Array): Float32Array[] {
  const r = readXwmaRiff(b);
  if (r.format !== 0x161) throw new Error('xWMA codec 0x' + r.format.toString(16) + ' is not WMA v2');
  const { pcm } = decodeWma(b.subarray(r.data, r.data + r.dataSize), {
    version: 2, sampleRate: r.sampleRate, channels: r.channels, bitRate: xwmaBitRate(r.channels, r.sampleRate, r.avgBytes), blockAlign: r.blockAlign, flags2: 0x1f,
  });
  // the dpds count (vgmstream's), made up with silence where FFmpeg gives fewer
  if (!r.samples) return pcm;
  return pcm.map((c) => { const o = new Float32Array(r.samples); o.set(c.subarray(0, Math.min(c.length, r.samples))); return o; });
}
