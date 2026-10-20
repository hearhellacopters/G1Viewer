/**
 * WMA Pro, and XMA2 - the Xbox 360's codec, WMA Pro in 2048-byte packets of
 * interleaved streams: the X360 games' music (Warriors Orochi 3's and Dynasty
 * Warriors 8's 5.1 BGM, RIFF XMA2 in G1Ls), Warriors Orochi 3's voices (RIFF
 * XMA2) and its xWMA (WMA Pro in a RIFF "XWMA"). A port of FFmpeg's decoder
 * (libavcodec/wmaprodec.c, wma.c's run-level decoding, wma_common.c; the tables
 * are wmaprotables.ts, generated from wmaprodata.h by
 * scripts/gen_wmapro_tables.py), its XMA stream interleave and output as
 * FFmpeg gives it, with vgmstream's RIFF setup (src/meta/xma.c, xwma.c,
 * coding/coding_utils.c: the samples a file plays, its loop).
 *
 * THIS FILE (and wmaprotables.ts) IS LGPL 2.1 (or later), as the FFmpeg code it
 * ports, and stays its own module with this notice:
 *
 *   Wmapro compatible decoder
 *   Copyright (c) 2007 Baptiste Coudurier, Benjamin Larsson, Ulion
 *   Copyright (c) 2008 - 2011 Sascha Sommer, Benjamin Larsson
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
 * THE CODEC. Packets of block align bytes carry frames that may cross into the
 * next packet (a bit reservoir); a frame is the same number of samples a
 * channel (2048 for WMA Pro at 48 kHz, 512 for XMA), each channel tiled into
 * subframes of 64 to 8192 samples, channels grouped for a decorrelating
 * transform (M/S stereo, or a rotation matrix), coefficients Huffman-coded as
 * vectors of 4, 2 and 1 or run-level coded, scaled per band, through an IMDCT
 * (mdct.ts), sine windowed and overlapped. XMA2 interleaves streams of one or
 * two channels a 2048-byte packet at a time, each packet saying how many to
 * skip before that stream's next.
 */
import * as T from './wmaprotables';
import { imdctHalf } from './mdct';
import { Bits, Vlc } from './msbits';
import { readXmaRiff, readXwmaRiff } from './msriff';

export { isXmaRiff, isXwmaRiff, readXmaRiff, readXwmaRiff, type XmaRiff, type XwmaRiff } from './msriff';

const MAX_CHANNELS = 8, MAX_SUBFRAMES = 32, MAX_BANDS = 29, MAX_FRAMESIZE = 32768;
const XMA_MAX_STREAMS = 8, XMA_MAX_CHANNELS_STREAM = 2;
const BLOCK_MIN_BITS = 6, BLOCK_MAX_BITS = 13, BLOCK_MAX_SIZE = 1 << BLOCK_MAX_BITS, BLOCK_SIZES = BLOCK_MAX_BITS - BLOCK_MIN_BITS + 1;
const f32 = Math.fround;
const log2 = (v: number) => (v > 0 ? 31 - Math.clz32(v) : 0);

const pairs = (t: number[], k: 0 | 1) => t.filter((_, i) => i % 2 === k);
const SF_VLC = Vlc.fromLengths(pairs(T.scale_table, 1), pairs(T.scale_table, 0), -60);
const SF_RL_VLC = Vlc.fromLengths(pairs(T.scale_rl_table, 1), pairs(T.scale_rl_table, 0));
const COEF_VLC = [Vlc.fromLengths(T.coef0_lens, T.coef0_syms), Vlc.fromLengths(pairs(T.coef1_table, 1), pairs(T.coef1_table, 0))];
const VEC4_VLC = Vlc.fromLengths(T.vec4_lens, T.vec4_syms, -1);
const VEC2_VLC = Vlc.fromLengths(pairs(T.vec2_table, 1), pairs(T.vec2_table, 0), -1);
const VEC1_VLC = Vlc.fromLengths(pairs(T.vec1_table, 1), pairs(T.vec1_table, 0));
const COEF_RUN = [T.coef0_run, T.coef1_run];
const COEF_LEVEL = [new Float32Array(T.coef0_level.map(Number)), new Float32Array(T.coef1_level.map(Number))];
const HUFF_VEC1_SIZE = 101;
const SIN64 = Float32Array.from({ length: 33 }, (_, i) => Math.sin(i * Math.PI / 64));
const DECORR = new Float32Array(T.default_decorrelation_matrices.map(Number));
const DECORR_AT = [-1, 0, 1, 5, 14, 30, 55];
// ff_sine_windows[k]: 2^k long, sinf((i + 0.5) * (M_PI / (2.0 * n)))
const SINE: Float32Array[] = [];
for (let k = BLOCK_MIN_BITS; k <= BLOCK_MAX_BITS; k++) { const n = 1 << k; SINE[k] = Float32Array.from({ length: n }, (_, i) => Math.sin((i + 0.5) * (Math.PI / (2 * n)))); }

function getLargeVal(g: Bits): number {
  let n = 8;
  if (g.get1()) { n += 8; if (g.get1()) { n += 8; if (g.get1()) n += 7; } }
  return g.get(n);
}

/** ff_wma_get_frame_len_bits, version 3 */
function frameLenBits(sampleRate: number, decodeFlags: number): number {
  let bits = sampleRate <= 16000 ? 9 : sampleRate <= 22050 ? 10 : sampleRate <= 48000 ? 11 : sampleRate <= 96000 ? 12 : 13;
  const tmp = decodeFlags & 6;
  if (tmp === 2) bits++; else if (tmp === 4) bits--; else if (tmp === 6) bits -= 2;
  return bits;
}

// ----------------------------------------------------------------- state --
class Channel {
  prevBlockLen = 0; transmitCoefs = 0; numSubframes = 0;
  subframeLen = new Uint16Array(MAX_SUBFRAMES); subframeOffset = new Uint16Array(MAX_SUBFRAMES);
  curSubframe = 0; decodedSamples = 0; grouped = 0; quantStep = 0; reuseSf = 0; sfStep = 0; maxSf = 0;
  savedSf = [new Int32Array(MAX_BANDS), new Int32Array(MAX_BANDS)]; sfIdx = 0; sf = this.savedSf[0]; tableIdx = 0;
  coeffs = 0; // where in `out` the subframe's coefficients are
  numVecCoeffs = 0;
  out = new Float32Array(BLOCK_MAX_SIZE + BLOCK_MAX_SIZE / 2);
}
interface Group { numChannels: number; transform: number; transformBand: Int8Array; matrix: Float32Array; data: number[] }

class Invalid extends Error {}

export interface WmaProParams {
  /** 'wmapro' (xWMA) or 'xma2' */
  codec: 'wmapro' | 'xma1' | 'xma2';
  sampleRate: number;
  /** the stream's (XMA: 1 or 2; WMA Pro: the file's) */
  channels: number;
  blockAlign: number;
  decodeFlags: number;
  bitsPerSample: number;
  channelMask: number;
}

/** one WMA Pro stream (an XMA stream) - FFmpeg's WMAProDecodeCtx */
export class WmaProStream {
  readonly xma: boolean;
  /** XMA2's packet header (a frame count) rather than XMA1's and WMA Pro's (a sequence number) */
  private xma2: boolean;
  readonly nb: number;
  readonly samplesPerFrame: number;
  private decodeFlags: number; private bps: number; private log2FrameSize: number;
  private lenPrefix: number; private drc: number; private maxNumSubframes: number; private subframeLenBits: number;
  private maxSubframeLenBit = 0; private minSamplesPerSubframe: number;
  private numSfb = new Int8Array(BLOCK_SIZES); private sfbOffsets: Int16Array[] = []; private sfOffsets: Int8Array[][] = [];
  private subwooferCutoffs = new Int16Array(BLOCK_SIZES); private lfe = -1;
  private mdctScale: number[] = [];
  private blockAlign: number;
  // the bit reservoir
  private frameData = new Uint8Array(MAX_FRAMESIZE + 64); private pbBits = 0;
  // packet state
  private pgb = new Bits(new Uint8Array(0), 0, 0);
  private nextPacketStart = 0; private packetOffset = 0; private packetSeq = 0; private numSavedBits = 0; private frameOffset = 0;
  packetLoss = 1; packetDone = 0; eofDone = 0;
  // frame state
  private gb = new Bits(this.frameData, 0, 0); private bufBitSize = 0;
  skipFrame = 1; private parsedAll = 0; skipPackets = 0;
  trimStart = 0; trimEnd = 0;
  // subframe state
  private subframeLen = 0; private chForCur = 0; private chIdx = new Int8Array(MAX_CHANNELS); private numBands = 0;
  private transmitNumVecCoeffs = 0; private curSfb: Int16Array = new Int16Array(MAX_BANDS); private tableIdx = 0; private escLen = 0;
  private numChgroups = 0; private groups: Group[];
  private ch: Channel[];
  private tmp = new Float32Array(BLOCK_MAX_SIZE);

  constructor(p: WmaProParams) {
    this.xma = p.codec !== 'wmapro';
    this.xma2 = p.codec === 'xma2';
    this.decodeFlags = p.decodeFlags; this.bps = p.bitsPerSample; this.nb = p.channels; this.blockAlign = p.blockAlign;
    if (this.bps > 32 || this.bps < 1) throw new Error('WMA Pro: bits per sample ' + this.bps);
    this.log2FrameSize = log2(p.blockAlign) + 4;
    if (this.log2FrameSize > 25) throw new Error('WMA Pro: large block align');
    this.lenPrefix = this.decodeFlags & 0x40;
    this.samplesPerFrame = this.xma ? 512 : 1 << frameLenBits(p.sampleRate, this.decodeFlags);
    if (!this.xma && Math.log2(this.samplesPerFrame) > BLOCK_MAX_BITS) throw new Error('WMA Pro: 14-bit block sizes');
    const log2MaxSub = (this.decodeFlags & 0x38) >> 3;
    this.maxNumSubframes = 1 << log2MaxSub;
    if (this.maxNumSubframes === 16 || this.maxNumSubframes === 4) this.maxSubframeLenBit = 1;
    this.subframeLenBits = log2(log2MaxSub) + 1;
    const blockSizes = log2MaxSub + 1;
    this.minSamplesPerSubframe = this.samplesPerFrame / this.maxNumSubframes;
    this.drc = this.decodeFlags & 0x80;
    if (this.maxNumSubframes > MAX_SUBFRAMES) throw new Error('WMA Pro: ' + this.maxNumSubframes + ' subframes');
    if (this.minSamplesPerSubframe < 1 << BLOCK_MIN_BITS) throw new Error('WMA Pro: min samples per subframe ' + this.minSamplesPerSubframe);
    if (this.nb <= 0 || this.nb > MAX_CHANNELS || (this.xma && this.nb > XMA_MAX_CHANNELS_STREAM)) throw new Error('WMA Pro: ' + this.nb + ' channels');
    this.ch = Array.from({ length: this.nb }, () => new Channel());
    for (const c of this.ch) c.prevBlockLen = this.samplesPerFrame;
    this.groups = Array.from({ length: MAX_CHANNELS }, () => ({ numChannels: 0, transform: 0, transformBand: new Int8Array(MAX_BANDS), matrix: new Float32Array(MAX_CHANNELS * MAX_CHANNELS), data: [] }));
    if (p.channelMask & 8) for (let mask = 1; mask < 16; mask <<= 1) if (p.channelMask & mask) this.lfe++;
    // get_rate: XMA's normalized, WMA Pro's its own
    const rate = this.xma ? (p.sampleRate > 44100 ? 48000 : p.sampleRate > 32000 ? 44100 : p.sampleRate > 24000 ? 32000 : 24000) : p.sampleRate;
    for (let i = 0; i < blockSizes; i++) {
      const subLen = this.samplesPerFrame >> i, off = new Int16Array(MAX_BANDS);
      let band = 1;
      for (let x = 0; x < MAX_BANDS - 1 && off[band - 1] < subLen; x++) {
        let offset = Math.trunc((subLen * 2 * T.critical_freq[x]) / rate) + 2;
        offset &= ~3;
        if (offset > off[band - 1]) off[band++] = offset;
        if (offset >= subLen) break;
      }
      off[band - 1] = subLen;
      this.sfbOffsets[i] = off;
      this.numSfb[i] = band - 1;
      if (this.numSfb[i] <= 0) throw new Error('WMA Pro: num_sfb invalid');
    }
    for (let i = 0; i < blockSizes; i++) {
      this.sfOffsets[i] = Array.from({ length: BLOCK_SIZES }, () => new Int8Array(MAX_BANDS));
      for (let b = 0; b < this.numSfb[i]; b++) {
        const offset = ((this.sfbOffsets[i][b] + this.sfbOffsets[i][b + 1] - 1) << i) >> 1;
        for (let x = 0; x < blockSizes; x++) {
          let v = 0;
          while (this.sfbOffsets[x][v + 1] << x < offset) { v++; if (v >= MAX_BANDS) throw new Error('WMA Pro: sf offsets'); }
          this.sfOffsets[i][x][b] = v;
        }
      }
    }
    for (let i = 0; i < BLOCK_SIZES; i++) this.mdctScale[i] = f32(1 / (1 << (BLOCK_MIN_BITS + i - 1)) / 2 ** (this.bps - 1));
    for (let i = 0; i < blockSizes; i++) {
      const blockSize = this.samplesPerFrame >> i;
      const cutoff = Math.floor((440 * blockSize + 3 * (p.sampleRate >> 1) - 1) / p.sampleRate);
      this.subwooferCutoffs[i] = Math.min(Math.max(cutoff, 4), blockSize);
    }
  }

  // ------------------------------------------------------------ tiling --
  private subframeLength(offset: number): number {
    if (offset === this.samplesPerFrame - this.minSamplesPerSubframe) return this.minSamplesPerSubframe;
    if (this.gb.left() < 1) throw new Invalid('subframe length');
    let shift = 0;
    if (this.maxSubframeLenBit) { if (this.gb.get1()) shift = 1 + this.gb.get(this.subframeLenBits - 1); }
    else shift = this.gb.get(this.subframeLenBits);
    const len = this.samplesPerFrame >> shift;
    if (len < this.minSamplesPerSubframe || len > this.samplesPerFrame) throw new Invalid('broken frame: subframe_len ' + len);
    return len;
  }

  private tileHeader(): void {
    const numSamples = new Uint16Array(MAX_CHANNELS), contains = new Uint8Array(MAX_CHANNELS);
    let chForCur = this.nb, fixed = 0, minLen = 0;
    for (const c of this.ch) c.numSubframes = 0;
    if (this.maxNumSubframes === 1 || this.gb.get1()) fixed = 1;
    do {
      for (let c = 0; c < this.nb; c++) {
        if (numSamples[c] === minLen) {
          contains[c] = fixed || chForCur === 1 || minLen === this.samplesPerFrame - this.minSamplesPerSubframe ? 1 : this.gb.get1();
        } else contains[c] = 0;
      }
      const len = this.subframeLength(minLen);
      if (len <= 0) throw new Invalid('subframe length');
      minLen += len;
      for (let c = 0; c < this.nb; c++) {
        const ch = this.ch[c];
        if (contains[c]) {
          if (ch.numSubframes >= MAX_SUBFRAMES) throw new Invalid('num subframes > 31');
          ch.subframeLen[ch.numSubframes] = len;
          numSamples[c] += len;
          ch.numSubframes++;
          if (numSamples[c] > this.samplesPerFrame) throw new Invalid('channel len > samples_per_frame');
        } else if (numSamples[c] <= minLen) {
          if (numSamples[c] < minLen) { chForCur = 0; minLen = numSamples[c]; }
          chForCur++;
        }
      }
    } while (minLen < this.samplesPerFrame);
    for (const ch of this.ch) {
      let offset = 0;
      for (let i = 0; i < ch.numSubframes; i++) { ch.subframeOffset[i] = offset; offset += ch.subframeLen[i]; }
    }
  }

  // --------------------------------------------------- channel transform --
  private decorrelationMatrix(g: Group): void {
    const n = g.numChannels, rot = new Int8Array(MAX_CHANNELS * MAX_CHANNELS);
    g.matrix.fill(0, 0, this.nb * this.nb);
    for (let i = 0; i < (n * (n - 1)) >> 1; i++) rot[i] = this.gb.get(6);
    for (let i = 0; i < n; i++) g.matrix[n * i + i] = this.gb.get1() ? 1 : -1;
    let offset = 0;
    for (let i = 1; i < n; i++) {
      for (let x = 0; x < i; x++) {
        for (let y = 0; y < i + 1; y++) {
          const v1 = g.matrix[x * n + y], v2 = g.matrix[i * n + y], k = rot[offset + x];
          let sinv: number, cosv: number;
          if (k < 32) { sinv = SIN64[k]; cosv = SIN64[32 - k]; } else { sinv = SIN64[64 - k]; cosv = -SIN64[k - 32]; }
          g.matrix[y + x * n] = f32(v1 * sinv) - f32(v2 * cosv);
          g.matrix[y + i * n] = f32(v1 * cosv) + f32(v2 * sinv);
        }
      }
      offset += i;
    }
  }

  private channelTransform(): void {
    this.numChgroups = 0;
    if (this.nb <= 1) return;
    let remaining = this.chForCur;
    if (this.gb.get1()) throw new Invalid('channel transform bit');
    for (this.numChgroups = 0; remaining && this.numChgroups < this.chForCur; this.numChgroups++) {
      const g = this.groups[this.numChgroups];
      g.numChannels = 0; g.transform = 0; g.data = [];
      if (remaining > 2) {
        for (let i = 0; i < this.chForCur; i++) {
          const ci = this.chIdx[i];
          if (!this.ch[ci].grouped && this.gb.get1()) { g.numChannels++; this.ch[ci].grouped = 1; g.data.push(ci); }
        }
      } else {
        g.numChannels = remaining;
        for (let i = 0; i < this.chForCur; i++) {
          const ci = this.chIdx[i];
          if (!this.ch[ci].grouped) g.data.push(ci);
          this.ch[ci].grouped = 1;
        }
      }
      if (g.numChannels === 2) {
        if (this.gb.get1()) {
          if (this.gb.get1()) throw new Invalid('unknown channel transform type');
        } else {
          g.transform = 1;
          if (this.nb === 2) { g.matrix[0] = 1; g.matrix[1] = -1; g.matrix[2] = 1; g.matrix[3] = 1; }
          else { const c = f32(0.70703125); g.matrix[0] = c; g.matrix[1] = -c; g.matrix[2] = c; g.matrix[3] = c; }
        }
      } else if (g.numChannels > 2) {
        if (this.gb.get1()) {
          g.transform = 1;
          if (this.gb.get1()) this.decorrelationMatrix(g);
          else if (g.numChannels <= 6) g.matrix.set(DECORR.subarray(DECORR_AT[g.numChannels], DECORR_AT[g.numChannels] + g.numChannels * g.numChannels));
        }
      }
      if (g.transform) {
        if (!this.gb.get1()) for (let i = 0; i < this.numBands; i++) g.transformBand[i] = this.gb.get1();
        else g.transformBand.fill(1, 0, this.numBands);
      }
      remaining -= g.numChannels;
    }
  }

  // --------------------------------------------------------- coefficients --
  private coefficients(c: number): void {
    const ci = this.ch[c], g = this.gb, out = ci.out, at = ci.coeffs;
    const table = g.get1(), vlc = COEF_VLC[table], run = COEF_RUN[table], level = COEF_LEVEL[table];
    let rl = 0, cur = 0, zeros = 0;
    const vals = [0, 0, 0, 0];
    while ((this.transmitNumVecCoeffs || !rl) && cur + 3 < ci.numVecCoeffs) {
      const idx = VEC4_VLC.read(g);
      if (idx < 0) {
        for (let i = 0; i < 4; i += 2) {
          const i2 = VEC2_VLC.read(g);
          if (i2 < 0) {
            let v0 = VEC1_VLC.read(g);
            if (v0 === HUFF_VEC1_SIZE - 1) v0 += getLargeVal(g);
            let v1 = VEC1_VLC.read(g);
            if (v1 === HUFF_VEC1_SIZE - 1) v1 += getLargeVal(g);
            vals[i] = f32(v0 >>> 0); vals[i + 1] = f32(v1 >>> 0);
          } else { vals[i] = i2 >> 4; vals[i + 1] = i2 & 0xf; }
        }
      } else { vals[0] = idx >> 12; vals[1] = (idx >> 8) & 0xf; vals[2] = (idx >> 4) & 0xf; vals[3] = idx & 0xf; }
      for (let i = 0; i < 4; i++) {
        if (vals[i]) { out[at + cur] = g.get1() ? vals[i] : -vals[i]; zeros = 0; }
        else { out[at + cur] = 0; if (++zeros > this.subframeLen >> 8) rl = 1; }
        cur++;
      }
    }
    if (cur < this.subframeLen) {
      out.fill(0, at + cur, at + this.subframeLen);
      // ff_wma_run_level_decode, version 1 (WMA Pro)
      const mask = this.subframeLen - 1, num = this.subframeLen;
      let offset = cur;
      for (; offset < num; offset++) {
        const code = vlc.read(g);
        if (code > 1) {
          offset += run[code];
          out[at + (offset & mask)] = g.get1() ? level[code] : -level[code];
        } else if (code === 1) break; // EOB
        else {
          const lv = getLargeVal(g);
          if (g.get1()) {
            if (g.get1()) {
              if (g.get1()) return; // broken escape sequence (ignored, as FFmpeg's caller does)
              offset += g.get(this.escLen) + 4;
            } else offset += g.get(2) + 1;
          }
          out[at + (offset & mask)] = g.get1() ? lv : -lv;
        }
      }
    }
  }

  private scaleFactors(): void {
    const g = this.gb;
    for (let i = 0; i < this.chForCur; i++) {
      const c = this.chIdx[i], ch = this.ch[c];
      ch.sf = ch.savedSf[ch.sfIdx ? 0 : 1];
      if (ch.reuseSf) {
        const offs = this.sfOffsets[this.tableIdx][ch.tableIdx];
        for (let b = 0; b < this.numBands; b++) ch.sf[b] = ch.savedSf[ch.sfIdx][offs[b]];
      }
      if (!ch.curSubframe || g.get1()) {
        if (!ch.reuseSf) {
          ch.sfStep = g.get(2) + 1;
          let val = Math.trunc(45 / ch.sfStep);
          for (let b = 0; b < this.numBands; b++) { val += SF_VLC.read(g); ch.sf[b] = val; }
        } else {
          for (let b = 0; b < this.numBands; b++) {
            const idx = SF_RL_VLC.read(g);
            let skip: number, val: number, sign: number;
            if (!idx) {
              const code = g.get(14);
              val = code >> 6; sign = (code & 1) - 1; skip = (code & 0x3f) >> 1;
            } else if (idx === 1) break;
            else { skip = T.scale_rl_run[idx]; val = T.scale_rl_level[idx]; sign = g.get1() - 1; }
            b += skip;
            if (b >= this.numBands) throw new Invalid('invalid scale factor coding');
            ch.sf[b] += (val ^ sign) - sign;
          }
        }
        ch.sfIdx = ch.sfIdx ? 0 : 1;
        ch.tableIdx = this.tableIdx;
        ch.reuseSf = 1;
      }
      ch.maxSf = ch.sf[0];
      for (let b = 1; b < this.numBands; b++) ch.maxSf = Math.max(ch.maxSf, ch.sf[b]);
    }
  }

  private inverseChannelTransform(): void {
    const data = new Float32Array(MAX_CHANNELS);
    for (let i = 0; i < this.numChgroups; i++) {
      const g = this.groups[i];
      if (!g.transform) continue;
      const n = g.numChannels;
      for (let b = 0; b < this.numBands; b++) {
        const s0 = this.curSfb[b], s1 = Math.min(this.curSfb[b + 1], this.subframeLen);
        if (g.transformBand[b] === 1) {
          for (let y = s0; y < s1; y++) {
            for (let k = 0; k < n; k++) { const ch = this.ch[g.data[k]]; data[k] = ch.out[ch.coeffs + y]; }
            let m = 0;
            for (let k = 0; k < n; k++) {
              let sum = 0;
              for (let d = 0; d < n; d++) sum = f32(sum + f32(data[d] * g.matrix[m++]));
              const ch = this.ch[g.data[k]];
              ch.out[ch.coeffs + y] = sum;
            }
          }
        } else if (this.nb === 2) {
          const mul = f32(181 / 128);
          for (const k of [0, 1]) { const ch = this.ch[g.data[k]]; for (let y = s0; y < s1; y++) ch.out[ch.coeffs + y] *= mul; }
        }
      }
    }
  }

  private window(): void {
    for (let i = 0; i < this.chForCur; i++) {
      const c = this.chIdx[i], ch = this.ch[c];
      let winlen = ch.prevBlockLen, start = ch.coeffs - (winlen >> 1);
      if (this.subframeLen < winlen) { start += (winlen - this.subframeLen) >> 1; winlen = this.subframeLen; }
      const win = SINE[log2(winlen)], len = winlen >> 1, out = ch.out;
      // vector_fmul_window(start, start, start + len, win, len)
      for (let a = -len, j = len - 1; a < 0; a++, j--) {
        const s0 = out[start + len + a], s1 = out[start + len + j], wi = win[len + a], wj = win[len + j];
        out[start + len + a] = f32(s0 * wj) - f32(s1 * wi);
        out[start + len + j] = f32(s0 * wi) + f32(s1 * wj);
      }
      ch.prevBlockLen = this.subframeLen;
    }
  }

  private subframe(): void {
    const g = this.gb;
    let offset = this.samplesPerFrame, subLen = this.samplesPerFrame, total = this.samplesPerFrame * this.nb, transmit = 0;
    for (const c of this.ch) {
      c.grouped = 0;
      if (offset > c.decodedSamples) { offset = c.decodedSamples; subLen = c.subframeLen[c.curSubframe]; }
    }
    this.chForCur = 0;
    for (let i = 0; i < this.nb; i++) {
      const c = this.ch[i], cur = c.curSubframe;
      total -= c.decodedSamples;
      if (offset === c.decodedSamples && subLen === c.subframeLen[cur]) {
        total -= c.subframeLen[cur];
        c.decodedSamples += c.subframeLen[cur];
        this.chIdx[this.chForCur++] = i;
      }
    }
    if (!total) this.parsedAll = 1;
    this.tableIdx = log2(this.samplesPerFrame / subLen);
    this.numBands = this.numSfb[this.tableIdx];
    this.curSfb = this.sfbOffsets[this.tableIdx];
    const cutoff = this.subwooferCutoffs[this.tableIdx];
    offset += this.samplesPerFrame >> 1;
    for (let i = 0; i < this.chForCur; i++) this.ch[this.chIdx[i]].coeffs = offset;
    this.subframeLen = subLen;
    this.escLen = log2(subLen - 1) + 1;
    if (g.get1()) { // extended header
      let fill = g.get(2);
      if (!fill) { const len = g.get(4); fill = g.get(len) + 1; }
      if (fill >= 0) {
        if (g.count() + fill > this.numSavedBits) throw new Invalid('invalid number of fill bits');
        g.skip(fill);
      }
    }
    if (g.get1()) throw new Invalid('reserved bit');
    this.channelTransform();
    for (let i = 0; i < this.chForCur; i++) { const c = this.ch[this.chIdx[i]]; if ((c.transmitCoefs = g.get1())) transmit = 1; }
    if (transmit) {
      let quantStep = (90 * this.bps) >> 4;
      if ((this.transmitNumVecCoeffs = g.get1())) {
        const bits = log2(Math.trunc((subLen + 3) / 4)) + 1;
        for (let i = 0; i < this.chForCur; i++) {
          const n = g.get(bits) << 2;
          if (n > subLen) throw new Invalid('num_vec_coeffs too large');
          this.ch[this.chIdx[i]].numVecCoeffs = n;
        }
      } else for (let i = 0; i < this.chForCur; i++) this.ch[this.chIdx[i]].numVecCoeffs = subLen;
      let step = g.sget(6);
      quantStep += step;
      if (step === -32 || step === 31) {
        const sign = (step === 31 ? 1 : 0) - 1;
        let quant = 0;
        while (g.count() + 5 < this.numSavedBits && (step = g.get(5)) === 31) quant += 31;
        quantStep += ((quant + step) ^ sign) - sign;
      }
      if (this.chForCur === 1) this.ch[this.chIdx[0]].quantStep = quantStep;
      else {
        const modLen = g.get(3);
        for (let i = 0; i < this.chForCur; i++) {
          const c = this.ch[this.chIdx[i]];
          c.quantStep = quantStep;
          if (g.get1()) c.quantStep += modLen ? g.get(modLen) + 1 : 1;
        }
      }
      this.scaleFactors();
    }
    for (let i = 0; i < this.chForCur; i++) {
      const ci = this.chIdx[i], c = this.ch[ci];
      if (c.transmitCoefs && g.count() < this.numSavedBits) this.coefficients(ci);
      else c.out.fill(0, c.coeffs, c.coeffs + subLen);
    }
    if (transmit) {
      const bi = log2(subLen) - BLOCK_MIN_BITS;
      this.inverseChannelTransform();
      for (let i = 0; i < this.chForCur; i++) {
        const ci = this.chIdx[i], c = this.ch[ci];
        if (ci === this.lfe) this.tmp.fill(0, cutoff, subLen);
        for (let b = 0; b < this.numBands; b++) {
          const end = Math.min(this.curSfb[b + 1], subLen), exp = c.quantStep - (c.maxSf - c.sf[b]) * c.sfStep;
          const quant = f32(10 ** (exp / 20));
          for (let k = this.curSfb[b]; k < end; k++) this.tmp[k] = c.out[c.coeffs + k] * quant;
        }
        imdctHalf(subLen, this.mdctScale[bi], this.tmp, 0, c.out, c.coeffs);
      }
    }
    this.window();
    for (let i = 0; i < this.chForCur; i++) {
      const c = this.ch[this.chIdx[i]];
      if (c.curSubframe >= c.numSubframes) throw new Invalid('broken subframe');
      c.curSubframe++;
    }
  }

  /** decode_frame: the frame's samples into `out` (when it outputs); whether more frames follow in the packet */
  private frame(out: Float32Array[], got: { v: number }): number {
    const g = this.gb;
    let len = 0;
    if (this.lenPrefix) len = g.get(this.log2FrameSize);
    try { this.tileHeader(); } catch (e) { if (e instanceof Invalid) { this.packetLoss = 1; return 0; } throw e; }
    if (this.nb > 1 && g.get1()) { if (g.get1()) for (let i = 0; i < this.nb * this.nb; i++) g.skip(4); }
    if (this.drc) g.get(8);
    if (g.get1()) {
      if (g.get1()) this.trimStart = g.get(log2(this.samplesPerFrame * 2));
      if (g.get1()) this.trimEnd = g.get(log2(this.samplesPerFrame * 2));
    } else this.trimStart = this.trimEnd = 0;
    this.parsedAll = 0;
    for (const c of this.ch) { c.decodedSamples = 0; c.curSubframe = 0; c.reuseSf = 0; }
    while (!this.parsedAll) {
      try { this.subframe(); } catch (e) { if (e instanceof Invalid) { this.packetLoss = 1; return 0; } throw e; }
    }
    for (let i = 0; i < this.nb; i++) out[i].set(this.ch[i].out.subarray(0, this.samplesPerFrame));
    for (const c of this.ch) c.out.copyWithin(0, this.samplesPerFrame, this.samplesPerFrame + (this.samplesPerFrame >> 1));
    if (this.skipFrame) { this.skipFrame = 0; got.v = 0; } else got.v = 1;
    if (this.lenPrefix) {
      if (len !== g.count() - this.frameOffset + 2) { this.packetLoss = 1; return 0; }
      g.skip(len - (g.count() - this.frameOffset) - 1);
    } else {
      while (g.count() < this.numSavedBits && g.get1() === 0) { /* */ }
    }
    return g.get1();
  }

  // ------------------------------------------------------ bit reservoir --
  private putBits(n: number, v: number): void {
    for (let i = n - 1; i >= 0; i--) {
      const bit = Math.floor(v / 2 ** i) & 1, at = this.pbBits >> 3;
      if (bit) this.frameData[at] |= 0x80 >> (this.pbBits & 7); else this.frameData[at] &= ~(0x80 >> (this.pbBits & 7));
      this.pbBits++;
    }
  }
  private copyBits(src: Uint8Array, srcByte: number, n: number): void {
    // ff_copy_bits: the first n bits from a byte-aligned source
    let i = 0;
    if (!(this.pbBits & 7)) {
      const whole = n >> 3;
      for (; i < whole; i++) this.frameData[(this.pbBits >> 3) + i] = src[srcByte + i] ?? 0;
      this.pbBits += whole * 8;
      n -= whole * 8;
    }
    for (; n >= 8; n -= 8, i++) this.putBits(8, src[srcByte + i] ?? 0);
    if (n > 0) this.putBits(n, (src[srcByte + i] ?? 0) >> (8 - n));
  }
  private saveBits(gb: Bits, len: number, append: boolean): void {
    let buflen: number;
    if (!append) {
      this.frameOffset = gb.count() & 7;
      this.numSavedBits = this.frameOffset;
      this.pbBits = 0;
      buflen = (this.numSavedBits + len + 7) >> 3;
    } else buflen = (this.pbBits + len + 7) >> 3;
    if (len <= 0 || buflen > MAX_FRAMESIZE) { this.packetLoss = 1; return; }
    this.numSavedBits += len;
    if (!append) {
      this.copyBits(gb.b, gb.start + (gb.count() >> 3), this.numSavedBits);
    } else {
      const align = Math.min(8 - (gb.count() & 7), len);
      this.putBits(align, gb.get(align));
      len -= align;
      this.copyBits(gb.b, gb.start + (gb.count() >> 3), len);
    }
    gb.skip(len);
    this.gb = new Bits(this.frameData, 0, this.numSavedBits);
    this.gb.skip(this.frameOffset);
  }

  /**
   * decode_packet: `pkt` (bytes from `at`, `size` long; size 0 at the end);
   * a frame into `out` when `got.v` comes back 1. The bytes consumed, or -1
   * (the packet is lost)
   */
  decodePacket(data: Uint8Array, at: number, size: number, out: Float32Array[], got: { v: number; samples: number; from: number }): number {
    got.v = 0; got.from = 0; got.samples = this.samplesPerFrame;
    let gb = this.pgb;
    if (!size) {
      this.packetDone = 0;
      if (this.eofDone) return 0;
      for (let i = 0; i < this.nb; i++) { out[i].fill(0); out[i].set(this.ch[i].out.subarray(0, this.samplesPerFrame >> 1)); }
      this.eofDone = 1; this.packetDone = 1; got.v = 1;
      return 0;
    } else if (this.packetDone || this.packetLoss) {
      this.packetDone = 0;
      if (!this.xma && size < this.blockAlign) { this.packetLoss = 1; return -1; }
      let bufSize: number;
      if (!this.xma) { this.nextPacketStart = size - this.blockAlign; bufSize = this.blockAlign; }
      else { this.nextPacketStart = size - Math.min(size, this.blockAlign); bufSize = Math.min(size, this.blockAlign); }
      this.bufBitSize = bufSize << 3;
      gb = this.pgb = new Bits(data, at, bufSize << 3);
      let seq: number;
      if (!this.xma2) { seq = gb.get(4); gb.skip(2); } else { gb.get(6); seq = 0; }
      let prevBits = gb.get(this.log2FrameSize);
      if (this.xma) { gb.skip(3); this.skipPackets = gb.get(8); }
      if (!this.xma && !this.packetLoss && ((this.packetSeq + 1) & 0xf) !== seq) this.packetLoss = 1;
      this.packetSeq = seq;
      if (prevBits > 0) {
        const remaining = this.bufBitSize - gb.count();
        if (prevBits >= remaining) { prevBits = remaining; this.packetDone = 1; }
        this.saveBits(gb, prevBits, true);
        if (!this.packetLoss) this.frame(out, got);
      }
      if (this.packetLoss) { this.numSavedBits = 0; this.packetLoss = 0; }
    } else {
      if (size < this.nextPacketStart) { this.packetLoss = 1; return -1; }
      this.bufBitSize = (size - this.nextPacketStart) << 3;
      gb = this.pgb = new Bits(data, at, (size - this.nextPacketStart) << 3);
      gb.skip(this.packetOffset);
      let frameSize: number;
      if (this.lenPrefix && this.bufBitSize - gb.count() > this.log2FrameSize && (frameSize = gb.peek(this.log2FrameSize)) && frameSize <= this.bufBitSize - gb.count()) {
        this.saveBits(gb, frameSize, false);
        if (!this.packetLoss) this.packetDone = this.frame(out, got) ? 0 : 1;
      } else if (!this.lenPrefix && this.numSavedBits > this.gb.count()) {
        this.packetDone = this.frame(out, got) ? 0 : 1;
      } else this.packetDone = 1;
    }
    if (this.bufBitSize - gb.count() < 0) this.packetLoss = 1;
    if (this.packetDone && !this.packetLoss && this.bufBitSize - gb.count() > 0) this.saveBits(gb, this.bufBitSize - gb.count(), false);
    this.packetOffset = gb.count() & 7;
    if (this.packetLoss) return -1;
    if (this.trimStart && !this.xma) {
      if (this.trimStart < got.samples) { got.from = this.trimStart; got.samples -= this.trimStart; } else got.v = 0;
      this.trimStart = 0;
    }
    if (this.trimEnd && !this.xma) {
      if (this.trimEnd < got.samples) got.samples -= this.trimEnd; else got.v = 0;
      this.trimEnd = 0;
    }
    return gb.count() >> 3;
  }
}

// ------------------------------------------------------------- decoding --
/** a growing run of samples, a channel each */
class Pcm {
  ch: Float32Array[];
  n = 0;
  constructor(channels: number) { this.ch = Array.from({ length: channels }, () => new Float32Array(1 << 16)); }
  push(src: Float32Array[], from: number, count: number, first = 0): void {
    if (this.n + count > this.ch[0].length) {
      const size = Math.max(this.ch[0].length * 2, this.n + count);
      this.ch = this.ch.map((c) => { const d = new Float32Array(size); d.set(c.subarray(0, this.n)); return d; });
    }
    src.forEach((s, i) => this.ch[first + i].set(s.subarray(from, from + count), this.n));
  }
  done(count: number): void { this.n += count; }
  result(): Float32Array[] { return this.ch.map((c) => c.slice(0, this.n)); }
}

/**
 * WMA Pro packets (xWMA: `blockAlign` bytes each) decoded as FFmpeg's wmapro
 * decoder gives them: the first frame not output, a frame's trims applied.
 * `bad`: packets refused
 */
export function decodeWmaPro(data: Uint8Array, p: Omit<WmaProParams, 'codec'>): { pcm: Float32Array[]; bad: number } {
  const s = new WmaProStream({ ...p, codec: 'wmapro' }), out = Array.from({ length: s.nb }, () => new Float32Array(s.samplesPerFrame));
  const pcm = new Pcm(s.nb), got = { v: 0, samples: 0, from: 0 };
  let bad = 0;
  for (let at = 0; at < data.length; at += p.blockAlign) {
    let size = Math.min(p.blockAlign, data.length - at), off = at;
    while (size > 0) {
      const ret = s.decodePacket(data, off, size, out, got);
      if (ret < 0) { bad++; break; } // (a frame with it is dropped too)
      if (got.v) { pcm.push(out, got.from, got.samples); pcm.done(got.samples); }
      if (ret === 0 && !got.v) break;
      off += ret; size -= ret;
    }
  }
  return { pcm: pcm.result(), bad };
}

/**
 * The bytes FFmpeg's WAV demuxer hands its decoder at a time (wavdec.c,
 * ff_pcm_default_packet_size) for XMA: 2048 times the largest power of two
 * within the header's bytes a second / 10 / 2048 (at least one), or 4096 when
 * it gives none (XMA1's header). It matters: a frame that ends a packet exactly
 * ends it only when another packet follows in the same handful - in the last
 * of one, the decoder reads the next packet's header as a frame and loses it.
 */
export function ffmpegXmaPacketSize(avgBytes: number): number {
  if (!(avgBytes > 0)) return 4096;
  return 2048 * 2 ** Math.floor(Math.log2(Math.max(1, Math.floor(avgBytes / 10 / 2048))));
}

/**
 * XMA2 packets (2048 bytes, interleaved streams of one or two channels) - or
 * XMA1's (`version` 1: a packet header with a sequence number in place of the
 * frame count) - decoded as FFmpeg's xma2 / xma1 decoder gives them (xma_decode_packet): each
 * stream's packets found by their skip counts, its first frame not output,
 * the streams' samples gathered, the first 64 of the output skipped, and at
 * the end its trims. `streams`: the channels of each stream; `packetSize` the
 * bytes the decoder is handed at a time (ffmpegXmaPacketSize; by default what
 * vgmstream's own header for raw XMA2 gives, its bytes a second the rate × the
 * channels / 2), a packet refused losing the rest of them, as in FFmpeg
 */
export function decodeXma2(data: Uint8Array, p: { sampleRate: number; streams: number[]; version?: 1 | 2; packetSize?: number }): { pcm: Float32Array[]; bad: number } {
  const total = p.streams.reduce((a, b) => a + b, 0);
  const handed = p.packetSize ?? ffmpegXmaPacketSize((p.sampleRate * total) / 2);
  if (p.streams.length > XMA_MAX_STREAMS || p.streams.length < 1) throw new Error('XMA2: ' + p.streams.length + ' streams');
  const st = p.streams.map((n) => new WmaProStream({ codec: p.version === 1 ? 'xma1' : 'xma2', sampleRate: p.sampleRate, channels: n, blockAlign: 2048, decodeFlags: 0x10d6, bitsPerSample: 16, channelMask: 0 }));
  const start: number[] = [];
  p.streams.reduce((a, n, i) => { start[i] = a; return a + n; }, 0);
  const frames = st.map((s) => Array.from({ length: s.nb }, () => new Float32Array(512)));
  const fifo = st.map((s) => new Pcm(s.nb)), out = new Pcm(total);
  let current = 0, trimStart = 0, trimEnd = 0, flushed = 0, skipSamples = 64, bad = 0;
  const got = { v: 0, samples: 0, from: 0 };
  const emit = (n: number) => {
    // FFmpeg's decode.c: the first skip_samples of the output dropped
    let from = 0;
    if (skipSamples > 0) { const k = Math.min(skipSamples, n); skipSamples -= k; from = k; }
    for (let i = 0; i < st.length; i++) {
      const f = fifo[i];
      if (n - from > 0) { out.push(f.ch.map((c) => c.subarray(from, n)), 0, n - from, start[i]); }
      // read n from the fifo
      f.ch.forEach((c) => c.copyWithin(0, n, f.n));
      f.n -= n;
    }
    if (n - from > 0) out.done(n - from);
  };
  /** xma_decode_packet on (data, at, size); its consumed bytes or -1 */
  const call = (at: number, size: number): number => {
    let gotStream = 0, ret = 0, eof = 0;
    if (!st[current].eofDone) {
      ret = st[current].decodePacket(data, at, size, frames[current], got);
      gotStream = got.v;
    }
    let flushStream = current;
    if (!size) {
      eof = 1;
      for (let i = 0; i < st.length; i++) {
        if (!st[i].eofDone) { ret = st[i].decodePacket(data, at, 0, frames[i], got); gotStream = got.v; }
        eof &= st[i].eofDone;
      }
      flushStream = current;
    }
    if (st[0].trimStart) trimStart = st[0].trimStart;
    if (st[0].trimEnd) trimEnd = st[0].trimEnd;
    if (gotStream) { fifo[flushStream].push(frames[flushStream], 0, 512); fifo[flushStream].done(512); }
    else if (ret < 0) { current = 0; return ret; }
    if (st[current].packetDone || st[current].packetLoss) {
      let nb = Infinity;
      if (st[current].skipPackets !== 0) {
        let min = st[0].skipPackets, which = 0;
        for (let i = 1; i < st.length; i++) if (st[i].skipPackets < min) { min = st[i].skipPackets; which = i; }
        current = which;
      }
      for (let i = 0; i < st.length; i++) { st[i].skipPackets = Math.max(0, st[i].skipPackets - 1); nb = Math.min(nb, fifo[i].n); }
      if (!eof && size) nb -= Math.min(nb, 4096);
      if ((nb > 0 || eof || !size) && !flushed) {
        if (eof) { nb -= Math.min(Math.max(trimEnd + trimStart - 128 - 64, 0), nb); flushed = 1; }
        if (nb > 0) emit(nb);
      }
    }
    return ret;
  };
  for (let at = 0; at < data.length; at += handed) {
    let size = Math.min(handed, data.length - at), off = at, idle = 0;
    while (size > 0) {
      const ret = call(off, size);
      if (ret < 0) { bad++; break; }
      // nothing consumed: FFmpeg's decode.c hands the same bytes again (a packet a frame filled to its end is only now done)
      if (ret === 0) { if (++idle > 2) break; continue; }
      idle = 0;
      off += ret; size -= ret;
    }
  }
  // the end: empty packets until nothing more comes out
  for (let k = 0; k < 4 && !flushed; k++) call(data.length, 0);
  return { pcm: out.result(), bad };
}

// ------------------------------------------------------------ containers --
/**
 * the samples a file plays (vgmstream's count): FFmpeg's output cut to them,
 * or made up with silence where FFmpeg gives fewer (its multi-stream XMA end
 * flushes one stream; it does not flush WMA Pro), as vgmstream does
 */
export function toLength(pcm: Float32Array[], samples: number): Float32Array[] {
  if (samples <= 0) return pcm;
  return pcm.map((c) => { const o = new Float32Array(samples); o.set(c.subarray(0, Math.min(c.length, samples))); return o; });
}

/** a RIFF XMA2 decoded and cut as vgmstream plays it */
export function decodeXmaRiff(b: Uint8Array): Float32Array[] {
  const r = readXmaRiff(b);
  const { pcm } = decodeXma2(b.subarray(r.data, r.data + r.dataSize), { sampleRate: r.sampleRate, streams: r.streams, version: r.version, packetSize: r.packetSize });
  return toLength(pcm, r.samples);
}

/** a WMA Pro xWMA decoded and cut as vgmstream plays it (WMA v2: wma.ts) */
export function decodeXwmaPro(b: Uint8Array): Float32Array[] {
  const r = readXwmaRiff(b);
  if (r.format !== 0x162) throw new Error('xWMA codec 0x' + r.format.toString(16) + ' is not WMA Pro');
  const { pcm } = decodeWmaPro(b.subarray(r.data, r.data + r.dataSize), { sampleRate: r.sampleRate, channels: r.channels, blockAlign: r.blockAlign, decodeFlags: 0xe0, bitsPerSample: 16, channelMask: 0 });
  return toLength(pcm, r.samples);
}
