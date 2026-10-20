/**
 * ATRAC3plus, Sony's transform codec of the PSP and PS3: the sound of Koei
 * Tecmo's PS3 games in RIFF .at3 files - Dynasty Warriors 7's voices, Dead or
 * Alive 5's and Trinity's G1L banks, Yoru no Nai Kuni's music and voices. A
 * port of FFmpeg's ATRAC3+ decoder (libavcodec/atrac3plusdec.c, atrac3plus.c,
 * atrac3plusdsp.c, atrac.c; the tables are atrac3plustables.ts, generated from
 * atrac3plus_data.h and atrac3plusdsp.c by scripts/gen_atrac3plus_tables.py),
 * with vgmstream's RIFF setup (src/meta/riff.c, coding/ffmpeg_decoder_utils.c:
 * the "fact" chunk's samples and skip, and the decoder's implicit 184).
 *
 * THIS FILE (and atrac3plustables.ts) IS LGPL 2.1 (or later), as the FFmpeg
 * code it ports, and stays its own module with this notice:
 *
 *   ATRAC3+ compatible decoder
 *   Copyright (c) 2010-2013 Maxim Poliakovski
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
 * THE CODEC. A frame is 2048 samples a channel in `blockAlign` bytes: a zero
 * bit, then channel units (2 bits: 0 mono, 1 stereo, 3 the end) as the channel
 * count lays them out. A unit codes up to 32 quant units of its spectrum - word
 * lengths, scale factors, code tables, Huffman-coded lines - with power
 * compensation (noise), and per subband window shapes, gain control and tones
 * (sine waves synthesized over the residual). Each of the 16 subbands is a
 * 128-line IMDCT (the odd ones reversed), windowed (sine, or steep), gain
 * compensated and overlapped; a 384-tap polyphase filter bank puts the 16
 * subbands back into 2048 samples.
 */
import * as T from './atrac3plustables';
import { isAt3pRiff } from './sonyriff';

export { isAt3pRiff };

const SUBBANDS = 16, SB_SAMPLES = 128, FRAME = SUBBANDS * SB_SAMPLES, PQF_FIR_LEN = 12, POWER_COMP_OFF = 15;
const f32 = Math.fround;
const CH_MONO = 0, CH_STEREO = 1, CH_EXTENSION = 2, CH_TERMINATOR = 3;

// ---------------------------------------------------------------- tables --
const QU_TO_SPEC = T.ff_atrac3p_qu_to_spec_pos;
const SF_TAB = new Float32Array(T.ff_atrac3p_sf_tab.map(Number));
const MANT_TAB = new Float32Array(T.ff_atrac3p_mant_tab.map(Number));
const NOISE = new Float32Array(T.noise_tab.map(Number));
const PWC_LEVS = new Float32Array(T.pwc_levs.map(Number));
const IPQF1 = new Float32Array(T.ipqf_coeffs1.map(Number));
const IPQF2 = new Float32Array(T.ipqf_coeffs2.map(Number));
const MOD23 = T.mod23_lut;

// ff_atrac3p_init_dsp_static
const SINE_TABLE = new Float32Array(2048), HANN = new Float32Array(256), AMP_SF = new Float32Array(64);
for (let i = 0; i < 2048; i++) SINE_TABLE[i] = Math.sin(2 * Math.PI * i / 2048);
for (let i = 0; i < 256; i++) HANN[i] = (1 - Math.cos(2 * Math.PI * i / f32(256))) * 0.5;
for (let i = 0; i < 64; i++) AMP_SF[i] = 2 ** ((i - 3) / 4);
// ff_sine_128, ff_sine_64: sinf((i + 0.5) * (M_PI / (2.0 * n)))
const sineWindow = (n: number) => Float32Array.from({ length: n }, (_, i) => Math.sin((i + 0.5) * (Math.PI / (2 * n))));
const SINE_128 = sineWindow(128), SINE_64 = sineWindow(64);
// ff_atrac_init_gain_compensation(6, 2)
const GAIN_TAB1 = Float32Array.from({ length: 16 }, (_, i) => 2 ** (6 - i));
const GAIN_TAB2 = Float32Array.from({ length: 31 }, (_, i) => 2 ** (f32(-1 / 4) * (i - 15)));
const GC_LOC_SCALE = 2, GC_LOC_SIZE = 4, GC_ID2EXP = 6;

/**
 * av_tx's inverse MDCT of `len` coefficients, as its reference (naive)
 * codelet defines it: the half output's len values, dst[i] = scale * sum
 * cos((2j + 1)(2 len - 2i - 1) pi / 4 len) x[j] and dst[i + len / 2] = -scale *
 * sum cos((2j + 1)(3 len + 2i + 1) pi / 4 len) x[j], i < len / 2 - as a matrix
 */
function imdctMatrix(len: number, scale: number): Float64Array {
  const m = new Float64Array(len * len), phase = Math.PI / (4 * len), half = len >> 1;
  for (let i = 0; i < half; i++) {
    for (let j = 0; j < len; j++) {
      m[i * len + j] = Math.cos((2 * j + 1) * phase * (2 * len - 2 * i - 1)) * scale;
      m[(i + half) * len + j] = -Math.cos((2 * j + 1) * phase * (3 * len + 2 * i + 1)) * scale;
    }
  }
  return m;
}
// the subbands' IMDCT (128 lines, scale -1, full: 256 out) and the IPQF's DCT-IV (16, scale 32 / 32768, half)
const MDCT_M = imdctMatrix(128, -1), IPQF_M = imdctMatrix(16, 32 / 32768);

// ------------------------------------------------------------------ VLCs --
/** a VLC as a lookup of maxLen bits: (symbol << 8) | length, 0 where no code is */
interface Vlc { bits: number; table: Int32Array }

/** build_canonical_huff: per length 1..12 a count of codes, the symbols in `xlat` from `at`, codes canonical in that order */
function canonical(cbs: number[], row: number, xlat: number[], at: number): [Vlc, number] {
  const lens: number[] = [];
  for (let b = 1; b <= 12; b++) for (let i = cbs[row * 12 + b - 1]; i > 0; i--) lens.push(b);
  const maxLen = lens[lens.length - 1], table = new Int32Array(1 << maxLen);
  let code = 0;
  lens.forEach((len, i) => {
    const c = Math.floor(code / 2 ** (32 - len)), sym = xlat[at + i];
    for (let k = 0; k < 1 << (maxLen - len); k++) table[(c << (maxLen - len)) | k] = (sym << 8) | len;
    code += 2 ** (32 - len);
  });
  return [{ bits: maxLen, table }, at + lens.length];
}

const WL_VLC: Vlc[] = [], CT_VLC: Vlc[] = [], SF_VLC: Vlc[] = [], SPEC_VLC: Vlc[] = [], GAIN_VLC: Vlc[] = [], TONE_VLC: Vlc[] = [];
{
  let x = 0, v: Vlc;
  for (let i = 0; i < 4; i++) {
    [v, x] = canonical(T.atrac3p_wl_cbs, i, T.atrac3p_wl_ct_xlats, x); WL_VLC.push(v);
    [v, x] = canonical(T.atrac3p_ct_cbs, i, T.atrac3p_wl_ct_xlats, x); CT_VLC.push(v);
  }
  x = 0;
  for (let i = 0; i < 8; i++) { [v, x] = canonical(T.atrac3p_sf_cbs, i, T.atrac3p_sf_xlats, x); SF_VLC.push(v); }
  x = 0;
  for (let i = 0; i < 112; i++) {
    const first = T.atrac3p_spectra_cbs[i * 12];
    if (first >= 0) { [v, x] = canonical(T.atrac3p_spectra_cbs, i, T.atrac3p_spectra_xlats, x); SPEC_VLC.push(v); }
    else SPEC_VLC.push(SPEC_VLC[-first]); // reuse an already built one
  }
  // (the table ends with 18 more sets of symbols, 621, that FFmpeg's decoder never reads)
  if (x > T.atrac3p_spectra_xlats.length) throw new Error('ATRAC3+: spectra tables misread');
  x = 0;
  for (let i = 0; i < 11; i++) { [v, x] = canonical(T.atrac3p_gain_cbs, i, T.atrac3p_gain_xlats, x); GAIN_VLC.push(v); }
  x = 0;
  for (let i = 0; i < 7; i++) { [v, x] = canonical(T.atrac3p_tone_cbs, i, T.atrac3p_tone_xlats, x); TONE_VLC.push(v); }
}

// ------------------------------------------------------------ bit reader --
class Bits {
  pos = 0;
  readonly size: number;
  constructor(private b: Uint8Array, private start: number, bytes: number) { this.size = bytes * 8; }
  left(): number { return this.size - this.pos; }
  private peek(n: number): number {
    // up to 24 bits from the byte the position is in
    const at = this.start + (this.pos >> 3);
    const w = ((this.b[at] ?? 0) << 24 | (this.b[at + 1] ?? 0) << 16 | (this.b[at + 2] ?? 0) << 8 | (this.b[at + 3] ?? 0)) >>> 0;
    return ((w << (this.pos & 7)) >>> 0) >>> (32 - n);
  }
  get(n: number): number {
    if (!n) return 0;
    const v = this.peek(n);
    this.pos += n;
    return v;
  }
  get1(): number { return this.get(1); }
  vlc(v: Vlc): number {
    const e = v.table[this.peek(v.bits)];
    this.pos += e & 0xff;
    return e >> 8;
  }
}

const signExtend = (v: number, bits: number) => (v << (32 - bits)) >> (32 - bits);
const log2 = (v: number) => (v > 0 ? 31 - Math.clz32(v) : 0);

// ----------------------------------------------------------------- state --
interface Gain { n: number; lev: Int32Array; loc: Int32Array }
const newGain = (): Gain => ({ n: 0, lev: new Int32Array(7), loc: new Int32Array(7) });
const copyGain = (d: Gain, s: Gain) => { d.n = s.n; d.lev.set(s.lev); d.loc.set(s.loc); };
interface Env { hasStart: number; hasStop: number; start: number; stop: number }
const newEnv = (): Env => ({ hasStart: 0, hasStop: 0, start: 0, stop: 0 });
interface Waves { pend: Env; curr: Env; num: number; startIndex: number }
const newWaves = (): Waves => ({ pend: newEnv(), curr: newEnv(), num: 0, startIndex: 0 });
const copyWaves = (d: Waves, s: Waves) => { Object.assign(d.pend, s.pend); Object.assign(d.curr, s.curr); d.num = s.num; d.startIndex = s.startIndex; };
const clearWaves = (w: Waves) => { Object.assign(w.pend, newEnv()); Object.assign(w.curr, newEnv()); w.num = 0; w.startIndex = 0; };
interface WaveParam { freq: number; ampSf: number; ampIndex: number; phase: number }
interface Synth {
  present: number; ampMode: number; bands: number;
  sharing: Uint8Array; master: Uint8Array; invert: Uint8Array; index: number; waves: WaveParam[];
}
const newSynth = (): Synth => ({
  present: 0, ampMode: 0, bands: 0, sharing: new Uint8Array(SUBBANDS), master: new Uint8Array(SUBBANDS), invert: new Uint8Array(SUBBANDS), index: 0,
  waves: Array.from({ length: 48 }, () => ({ freq: 0, ampSf: 0, ampIndex: 0, phase: 0 })),
});

class Chan {
  numCodedVals = 0; fillMode = 0; splitPoint = 0; tableType = 0;
  wl = new Int32Array(32); sf = new Int32Array(32); ct = new Int32Array(32);
  spectrum = new Int16Array(FRAME);
  powerLevs = new Uint8Array(5);
  wnd = new Uint8Array(SUBBANDS); wndPrev = new Uint8Array(SUBBANDS);
  gain = Array.from({ length: SUBBANDS }, newGain); gainPrev = Array.from({ length: SUBBANDS }, newGain);
  numGainSubbands = 0;
  tones = Array.from({ length: SUBBANDS }, newWaves); tonesPrev = Array.from({ length: SUBBANDS }, newWaves);
  constructor(readonly chNum: number) {}
}

class Unit {
  type = 0; numQuantUnits = 0; numSubbands = 0; usedQuantUnits = 0; numCodedSubbands = 0;
  mute = 0; useFullTable = 0; noisePresent = 0; noiseLevel = 0; noiseTable = 0;
  swap = new Uint8Array(SUBBANDS); negate = new Uint8Array(SUBBANDS);
  ch = [new Chan(0), new Chan(1)];
  waves = newSynth(); wavesPrev = newSynth();
  ipqf = [0, 1].map(() => ({ buf1: new Float32Array(PQF_FIR_LEN * 2 * 8), buf2: new Float32Array(PQF_FIR_LEN * 2 * 8), pos: 0 }));
  prev = [new Float32Array(FRAME), new Float32Array(FRAME)];
}

class Invalid extends Error {}
const fail = (m: string): never => { throw new Invalid(m); };

// --------------------------------------------------------- bitstream: WL --
function numCodedUnits(g: Bits, c: Chan, u: Unit): void {
  c.fillMode = g.get(2);
  if (!c.fillMode) c.numCodedVals = u.numQuantUnits;
  else {
    c.numCodedVals = g.get(5);
    if (c.numCodedVals > u.numQuantUnits) fail('invalid number of transmitted units');
    if (c.fillMode === 3) c.splitPoint = g.get(2) + (c.chNum << 1) + 1;
  }
}

function unpackVqShape(start: number, shape: number[], at: number, dst: Int32Array, num: number): void {
  if (!num) return;
  dst[0] = dst[1] = dst[2] = start;
  for (let i = 3; i < num; i++) dst[i] = start - shape[at + T.atrac3p_qu_num_to_seg[i] - 1];
}

function decodeChannelWordlen(g: Bits, u: Unit, chNum: number): void {
  const c = u.ch[chNum], ref = u.ch[0];
  let weightIdx = 0;
  c.fillMode = 0;
  switch (g.get(2)) {
    case 0:
      for (let i = 0; i < u.numQuantUnits; i++) c.wl[i] = g.get(3);
      break;
    case 1:
      if (chNum) {
        numCodedUnits(g, c, u);
        if (c.numCodedVals) {
          const v = WL_VLC[g.get(2)];
          for (let i = 0; i < c.numCodedVals; i++) c.wl[i] = (ref.wl[i] + g.vlc(v)) & 7;
        }
      } else {
        weightIdx = g.get(2);
        numCodedUnits(g, c, u);
        if (c.numCodedVals) {
          const pos = g.get(5);
          if (pos > c.numCodedVals) fail('WL mode 1: invalid position');
          const deltaBits = g.get(2), minVal = g.get(3);
          for (let i = 0; i < pos; i++) c.wl[i] = g.get(3);
          for (let i = pos; i < c.numCodedVals; i++) c.wl[i] = (minVal + g.get(deltaBits)) & 7;
        }
      }
      break;
    case 2:
      numCodedUnits(g, c, u);
      if (chNum && c.numCodedVals) {
        const v = WL_VLC[g.get(2)];
        c.wl[0] = (ref.wl[0] + g.vlc(v)) & 7;
        for (let i = 1; i < c.numCodedVals; i++) {
          const diff = ref.wl[i] - ref.wl[i - 1];
          c.wl[i] = (c.wl[i - 1] + diff + g.vlc(v)) & 7;
        }
      } else if (c.numCodedVals) {
        const flag = g.get1(), v = WL_VLC[g.get1()];
        const start = g.get(3);
        unpackVqShape(start, T.atrac3p_wl_shapes, (start * 16 + g.get(4)) * 9, c.wl, c.numCodedVals);
        if (!flag) {
          for (let i = 0; i < c.numCodedVals; i++) c.wl[i] = (c.wl[i] + g.vlc(v)) & 7;
        } else {
          let i = 0;
          for (; i < (c.numCodedVals & -2); i += 2) {
            if (!g.get1()) {
              c.wl[i] = (c.wl[i] + g.vlc(v)) & 7;
              c.wl[i + 1] = (c.wl[i + 1] + g.vlc(v)) & 7;
            }
          }
          if (c.numCodedVals & 1) c.wl[i] = (c.wl[i] + g.vlc(v)) & 7;
        }
      }
      break;
    case 3:
      weightIdx = g.get(2);
      numCodedUnits(g, c, u);
      if (c.numCodedVals) {
        const v = WL_VLC[g.get(2)];
        c.wl[0] = g.get(3);
        for (let i = 1; i < c.numCodedVals; i++) c.wl[i] = (c.wl[i - 1] + g.vlc(v)) & 7;
      }
      break;
  }
  if (c.fillMode === 2) {
    for (let i = c.numCodedVals; i < u.numQuantUnits; i++) c.wl[i] = chNum ? g.get1() : 1;
  } else if (c.fillMode === 3) {
    const pos = Math.min(32, chNum ? c.numCodedVals + c.splitPoint : u.numQuantUnits - c.splitPoint);
    for (let i = c.numCodedVals; i < pos; i++) c.wl[i] = 1;
  }
  if (weightIdx) {
    const w = (c.chNum * 3 + weightIdx - 1) * 32;
    for (let i = 0; i < u.numQuantUnits; i++) {
      c.wl[i] += T.atrac3p_wl_weights[w + i];
      if (c.wl[i] < 0 || c.wl[i] > 7) fail('WL index out of range');
    }
  }
}

// --------------------------------------------------------- bitstream: SF --
function unpackSfVq(g: Bits, dst: Int32Array, num: number): void {
  const start = g.get(6);
  unpackVqShape(start, T.atrac3p_sf_shapes, g.get(6) * 9, dst, num);
}

function decodeChannelSfIdx(g: Bits, u: Unit, chNum: number): void {
  const c = u.ch[chNum], ref = u.ch[0], n = u.usedQuantUnits;
  let weightIdx = 0;
  switch (g.get(2)) {
    case 0:
      for (let i = 0; i < n; i++) c.sf[i] = g.get(6);
      break;
    case 1:
      if (chNum) {
        const v = SF_VLC[g.get(2)];
        for (let i = 0; i < n; i++) c.sf[i] = (ref.sf[i] + g.vlc(v)) & 0x3f;
      } else {
        weightIdx = g.get(2);
        if (weightIdx === 3) {
          unpackSfVq(g, c.sf, n);
          const numLong = g.get(5), deltaBits = g.get(2), minVal = g.get(4) - 7;
          for (let i = 0; i < numLong; i++) c.sf[i] = (c.sf[i] + g.get(4) - 7) & 0x3f;
          for (let i = numLong; i < n; i++) c.sf[i] = (c.sf[i] + minVal + g.get(deltaBits)) & 0x3f;
        } else {
          const numLong = g.get(5), deltaBits = g.get(3), minVal = g.get(6);
          if (numLong > n || deltaBits === 7) fail('SF mode 1: invalid parameters');
          for (let i = 0; i < numLong; i++) c.sf[i] = g.get(6);
          for (let i = numLong; i < n; i++) c.sf[i] = (minVal + g.get(deltaBits)) & 0x3f;
        }
      }
      break;
    case 2:
      if (chNum) {
        const v = SF_VLC[g.get(2)];
        c.sf[0] = (ref.sf[0] + g.vlc(v)) & 0x3f;
        for (let i = 1; i < n; i++) {
          const diff = ref.sf[i] - ref.sf[i - 1];
          c.sf[i] = (c.sf[i - 1] + diff + g.vlc(v)) & 0x3f;
        }
      } else {
        const v = SF_VLC[g.get(2) + 4];
        unpackSfVq(g, c.sf, n);
        for (let i = 0; i < n; i++) c.sf[i] = (c.sf[i] + signExtend(g.vlc(v), 4)) & 0x3f;
      }
      break;
    case 3:
      if (chNum) {
        for (let i = 0; i < n; i++) c.sf[i] = ref.sf[i];
      } else {
        weightIdx = g.get(2);
        const sel = g.get(2);
        if (weightIdx === 3) {
          const v = SF_VLC[sel + 4];
          unpackSfVq(g, c.sf, n);
          let diff = (g.get(4) + 56) & 0x3f;
          c.sf[0] = (c.sf[0] + diff) & 0x3f;
          for (let i = 1; i < n; i++) {
            diff = (diff + signExtend(g.vlc(v), 4)) & 0x3f;
            c.sf[i] = (diff + c.sf[i]) & 0x3f;
          }
        } else {
          const v = SF_VLC[sel];
          c.sf[0] = g.get(6);
          for (let i = 1; i < n; i++) c.sf[i] = (c.sf[i - 1] + g.vlc(v)) & 0x3f;
        }
      }
      break;
  }
  if (weightIdx && weightIdx < 3) {
    const w = (weightIdx - 1) * 32;
    for (let i = 0; i < n; i++) {
      c.sf[i] -= T.atrac3p_sf_weights[w + i];
      if (c.sf[i] < 0 || c.sf[i] > 63) fail('SF index out of range');
    }
  }
}

// --------------------------------------------------- bitstream: code tabs --
function decodeChannelCodeTab(g: Bits, u: Unit, chNum: number): void {
  const c = u.ch[chNum], ref = u.ch[0], mask = u.useFullTable ? 7 : 3;
  c.tableType = g.get1();
  const common = (op: (i: number) => number) => {
    let num = u.usedQuantUnits;
    if (g.get1()) {
      num = g.get(5);
      if (num > u.usedQuantUnits) fail('invalid number of code table indexes');
    }
    for (let i = 0; i < num; i++) {
      if (c.wl[i]) c.ct[i] = op(i);
      else if (chNum && ref.wl[i]) c.ct[i] = g.get1(); // clone master flag
    }
  };
  switch (g.get(2)) {
    case 0: {
      const bits = u.useFullTable + 2;
      common(() => g.get(bits));
      break;
    }
    case 1: {
      const v = u.useFullTable ? CT_VLC[1] : CT_VLC[0];
      common(() => g.vlc(v));
      break;
    }
    case 2: {
      const v = u.useFullTable ? CT_VLC[1] : CT_VLC[0], delta = u.useFullTable ? CT_VLC[2] : CT_VLC[0];
      let pred = 0;
      common((i) => { const r = !i ? g.vlc(v) : (pred + g.vlc(delta)) & mask; pred = r; return r; });
      break;
    }
    case 3:
      if (chNum) {
        const v = u.useFullTable ? CT_VLC[3] : CT_VLC[0];
        common((i) => (ref.ct[i] + g.vlc(v)) & mask);
      }
      break;
  }
}

// --------------------------------------------------- bitstream: spectrum --
function decodeQuSpectra(g: Bits, tab: number, v: Vlc, out: Int16Array, at: number, numSpecs: number): void {
  const groupSize = T.atrac3p_spectra_tabs[tab * 4], numCoeffs = T.atrac3p_spectra_tabs[tab * 4 + 1];
  const bits = T.atrac3p_spectra_tabs[tab * 4 + 2], isSigned = T.atrac3p_spectra_tabs[tab * 4 + 3], mask = (1 << bits) - 1;
  for (let pos = 0; pos < numSpecs;) {
    if (groupSize === 1 || g.get1()) {
      for (let j = 0; j < groupSize; j++) {
        let val = g.vlc(v);
        for (let i = 0; i < numCoeffs; i++) {
          let cf = val & mask;
          if (isSigned) cf = signExtend(cf, bits);
          else if (cf && g.get1()) cf = -cf;
          out[at + pos++] = cf;
          val >>>= bits;
        }
      }
    } else pos += groupSize * numCoeffs; // group skipped
  }
}

function decodeSpectrum(g: Bits, u: Unit, numChannels: number): void {
  for (let chNum = 0; chNum < numChannels; chNum++) {
    const c = u.ch[chNum];
    c.spectrum.fill(0);
    c.powerLevs.fill(POWER_COMP_OFF);
    for (let qu = 0; qu < u.usedQuantUnits; qu++) {
      const numSpecs = QU_TO_SPEC[qu + 1] - QU_TO_SPEC[qu], wordlen = c.wl[qu];
      let codetab = c.ct[qu];
      if (wordlen) {
        if (!u.useFullTable) codetab = T.atrac3p_ct_restricted_to_full[(c.tableType * 7 + wordlen - 1) * 4 + codetab];
        const tab = (c.tableType * 8 + codetab) * 7 + wordlen - 1;
        decodeQuSpectra(g, tab, SPEC_VLC[tab], c.spectrum, QU_TO_SPEC[qu], numSpecs);
      } else if (chNum && u.ch[0].wl[qu] && !codetab) {
        // copy coefficients from master
        c.spectrum.set(u.ch[0].spectrum.subarray(QU_TO_SPEC[qu], QU_TO_SPEC[qu] + numSpecs), QU_TO_SPEC[qu]);
        c.wl[qu] = u.ch[0].wl[qu];
      }
    }
    if (u.usedQuantUnits > 2) {
      const n = T.atrac3p_subband_to_num_powgrps[u.numCodedSubbands - 1];
      for (let i = 0; i < n; i++) c.powerLevs[i] = g.get(4);
    }
  }
}

function subbandFlags(g: Bits, out: Uint8Array, num: number): number {
  out.fill(0, 0, num);
  const result = g.get1();
  if (result) {
    if (g.get1()) for (let i = 0; i < num; i++) out[i] = g.get1();
    else out.fill(1, 0, num);
  }
  return result;
}

// ------------------------------------------------------- bitstream: gain --
function decodeGaincNpoints(g: Bits, u: Unit, chNum: number, coded: number): void {
  const c = u.ch[chNum], ref = u.ch[0];
  switch (g.get(2)) {
    case 0:
      for (let i = 0; i < coded; i++) c.gain[i].n = g.get(3);
      break;
    case 1:
      for (let i = 0; i < coded; i++) c.gain[i].n = g.vlc(GAIN_VLC[0]);
      break;
    case 2:
      if (chNum) {
        for (let i = 0; i < coded; i++) c.gain[i].n = (ref.gain[i].n + g.vlc(GAIN_VLC[1])) & 7;
      } else {
        c.gain[0].n = g.vlc(GAIN_VLC[0]);
        for (let i = 1; i < coded; i++) c.gain[i].n = (c.gain[i - 1].n + g.vlc(GAIN_VLC[1])) & 7;
      }
      break;
    case 3:
      if (chNum) {
        for (let i = 0; i < coded; i++) c.gain[i].n = ref.gain[i].n;
      } else {
        const deltaBits = g.get(2), minVal = g.get(3);
        for (let i = 0; i < coded; i++) {
          c.gain[i].n = minVal + g.get(deltaBits);
          if (c.gain[i].n > 7) fail('gain points');
        }
      }
      break;
  }
}

const levelMode3s = (dst: Gain, ref: Gain) => { for (let i = 0; i < dst.n; i++) dst.lev[i] = i >= ref.n ? 7 : ref.lev[i]; };
function levelMode1m(g: Bits, dst: Gain): void {
  if (dst.n > 0) dst.lev[0] = g.vlc(GAIN_VLC[2]);
  for (let i = 1; i < dst.n; i++) dst.lev[i] = (dst.lev[i - 1] + g.vlc(GAIN_VLC[3])) & 0xf;
}

function decodeGaincLevels(g: Bits, u: Unit, chNum: number, coded: number): void {
  const c = u.ch[chNum], ref = u.ch[0];
  switch (g.get(2)) {
    case 0:
      for (let sb = 0; sb < coded; sb++) for (let i = 0; i < c.gain[sb].n; i++) c.gain[sb].lev[i] = g.get(4);
      break;
    case 1:
      if (chNum) {
        for (let sb = 0; sb < coded; sb++) {
          for (let i = 0; i < c.gain[sb].n; i++) {
            const delta = g.vlc(GAIN_VLC[5]);
            const pred = i >= ref.gain[sb].n ? 7 : ref.gain[sb].lev[i];
            c.gain[sb].lev[i] = (pred + delta) & 0xf;
          }
        }
      } else for (let sb = 0; sb < coded; sb++) levelMode1m(g, c.gain[sb]);
      break;
    case 2:
      if (chNum) {
        for (let sb = 0; sb < coded; sb++) {
          if (c.gain[sb].n > 0) {
            if (g.get1()) levelMode1m(g, c.gain[sb]);
            else levelMode3s(c.gain[sb], ref.gain[sb]);
          }
        }
      } else {
        if (c.gain[0].n > 0) levelMode1m(g, c.gain[0]);
        for (let sb = 1; sb < coded; sb++) {
          for (let i = 0; i < c.gain[sb].n; i++) {
            const delta = g.vlc(GAIN_VLC[4]);
            const pred = i >= c.gain[sb - 1].n ? 7 : c.gain[sb - 1].lev[i];
            c.gain[sb].lev[i] = (pred + delta) & 0xf;
          }
        }
      }
      break;
    case 3:
      if (chNum) {
        for (let sb = 0; sb < coded; sb++) levelMode3s(c.gain[sb], ref.gain[sb]);
      } else {
        const deltaBits = g.get(2), minVal = g.get(4);
        for (let sb = 0; sb < coded; sb++) {
          for (let i = 0; i < c.gain[sb].n; i++) {
            c.gain[sb].lev[i] = minVal + g.get(deltaBits);
            if (c.gain[sb].lev[i] > 15) fail('gain level');
          }
        }
      }
      break;
  }
}

function locMode0(g: Bits, dst: Gain, pos: number): void {
  if (!pos || dst.loc[pos - 1] < 15) dst.loc[pos] = g.get(5);
  else if (dst.loc[pos - 1] >= 30) dst.loc[pos] = 31;
  else {
    const deltaBits = log2(30 - dst.loc[pos - 1]) + 1;
    dst.loc[pos] = dst.loc[pos - 1] + g.get(deltaBits) + 1;
  }
}

function locMode1(g: Bits, dst: Gain): void {
  if (dst.n > 0) {
    dst.loc[0] = g.get(5);
    for (let i = 1; i < dst.n; i++) {
      const v = dst.lev[i] <= dst.lev[i - 1] ? GAIN_VLC[7] : GAIN_VLC[9];
      dst.loc[i] = dst.loc[i - 1] + g.vlc(v);
    }
  }
}

function decodeGaincLocCodes(g: Bits, u: Unit, chNum: number, coded: number): void {
  const c = u.ch[chNum], refc = u.ch[0];
  switch (g.get(2)) {
    case 0:
      for (let sb = 0; sb < coded; sb++) for (let i = 0; i < c.gain[sb].n; i++) locMode0(g, c.gain[sb], i);
      break;
    case 1:
      if (chNum) {
        for (let sb = 0; sb < coded; sb++) {
          if (c.gain[sb].n <= 0) continue;
          const dst = c.gain[sb], ref = refc.gain[sb];
          const delta = g.vlc(GAIN_VLC[10]);
          const pred = ref.n > 0 ? ref.loc[0] : 0;
          dst.loc[0] = (pred + delta) & 0x1f;
          for (let i = 1; i < dst.n; i++) {
            const moreThanRef = i >= ref.n;
            if (dst.lev[i] > dst.lev[i - 1]) { // ascending curve
              if (moreThanRef) dst.loc[i] = dst.loc[i - 1] + g.vlc(GAIN_VLC[9]);
              else if (g.get1()) locMode0(g, dst, i); // direct coding
              else dst.loc[i] = ref.loc[i]; // clone master
            } else { // descending curve
              const d = g.vlc(moreThanRef ? GAIN_VLC[7] : GAIN_VLC[10]);
              if (moreThanRef) dst.loc[i] = dst.loc[i - 1] + d;
              else dst.loc[i] = (ref.loc[i] + d) & 0x1f;
            }
          }
        }
      } else for (let sb = 0; sb < coded; sb++) locMode1(g, c.gain[sb]);
      break;
    case 2:
      if (chNum) {
        for (let sb = 0; sb < coded; sb++) {
          if (c.gain[sb].n <= 0) continue;
          const dst = c.gain[sb], ref = refc.gain[sb];
          if (dst.n > ref.n || g.get1()) locMode1(g, dst);
          else for (let i = 0; i < dst.n; i++) dst.loc[i] = ref.loc[i]; // clone master for the whole subband
        }
      } else {
        for (let i = 0; i < c.gain[0].n; i++) locMode0(g, c.gain[0], i);
        for (let sb = 1; sb < coded; sb++) {
          if (c.gain[sb].n <= 0) continue;
          const dst = c.gain[sb], prev = c.gain[sb - 1];
          const delta = g.vlc(GAIN_VLC[6]);
          const pred = prev.n > 0 ? prev.loc[0] : 0;
          dst.loc[0] = (pred + delta) & 0x1f;
          for (let i = 1; i < dst.n; i++) {
            const moreThanRef = i >= prev.n ? 1 : 0;
            const v = GAIN_VLC[(dst.lev[i] > dst.lev[i - 1] ? 1 : 0) * 2 + moreThanRef + 6];
            const d = g.vlc(v);
            if (moreThanRef) dst.loc[i] = dst.loc[i - 1] + d;
            else dst.loc[i] = (prev.loc[i] + d) & 0x1f;
          }
        }
      }
      break;
    case 3:
      if (chNum) {
        for (let sb = 0; sb < coded; sb++) {
          for (let i = 0; i < c.gain[sb].n; i++) {
            if (i >= refc.gain[sb].n) locMode0(g, c.gain[sb], i);
            else c.gain[sb].loc[i] = refc.gain[sb].loc[i];
          }
        }
      } else {
        const deltaBits = g.get(2) + 1, minVal = g.get(5);
        for (let sb = 0; sb < coded; sb++) for (let i = 0; i < c.gain[sb].n; i++) c.gain[sb].loc[i] = minVal + i + g.get(deltaBits);
      }
      break;
  }
  for (let sb = 0; sb < coded; sb++) {
    const dst = c.gain[sb];
    for (let i = 0; i < dst.n; i++) {
      if (dst.loc[i] < 0 || dst.loc[i] > 31 || (i && dst.loc[i] <= dst.loc[i - 1])) fail('invalid gain location');
    }
  }
}

function decodeGaincData(g: Bits, u: Unit, numChannels: number): void {
  for (let chNum = 0; chNum < numChannels; chNum++) {
    const c = u.ch[chNum];
    for (const x of c.gain) { x.n = 0; x.lev.fill(0); x.loc.fill(0); }
    if (g.get1()) {
      const coded = g.get(4) + 1;
      c.numGainSubbands = g.get1() ? g.get(4) + 1 : coded;
      decodeGaincNpoints(g, u, chNum, coded);
      decodeGaincLevels(g, u, chNum, coded);
      decodeGaincLocCodes(g, u, chNum, coded);
      for (let sb = coded; sb < c.numGainSubbands; sb++) copyGain(c.gain[sb], c.gain[sb - 1]);
    } else c.numGainSubbands = 0;
  }
}

// ------------------------------------------------------ bitstream: tones --
function decodeTonesEnvelope(g: Bits, u: Unit, chNum: number, has: number[]): void {
  const dst = u.ch[chNum].tones, ref = u.ch[0].tones;
  if (!chNum || !g.get1()) {
    for (let sb = 0; sb < u.waves.bands; sb++) {
      if (!has[sb]) continue;
      const e = dst[sb].pend;
      e.hasStart = g.get1(); e.start = e.hasStart ? g.get(5) : -1;
      e.hasStop = g.get1(); e.stop = e.hasStop ? g.get(5) : 32;
    }
  } else {
    for (let sb = 0; sb < u.waves.bands; sb++) if (has[sb]) Object.assign(dst[sb].pend, ref[sb].pend);
  }
}

function decodeBandNumwavs(g: Bits, u: Unit, chNum: number, has: number[]): void {
  const dst = u.ch[chNum].tones, ref = u.ch[0].tones, w = u.waves;
  switch (g.get(chNum + 1)) {
    case 0:
      for (let sb = 0; sb < w.bands; sb++) if (has[sb]) dst[sb].num = g.get(4);
      break;
    case 1:
      for (let sb = 0; sb < w.bands; sb++) if (has[sb]) dst[sb].num = g.vlc(TONE_VLC[1]);
      break;
    case 2:
      for (let sb = 0; sb < w.bands; sb++) if (has[sb]) dst[sb].num = (ref[sb].num + signExtend(g.vlc(TONE_VLC[2]), 3)) & 0xf;
      break;
    case 3:
      for (let sb = 0; sb < w.bands; sb++) if (has[sb]) dst[sb].num = ref[sb].num;
      break;
  }
  for (let sb = 0; sb < w.bands; sb++) {
    if (!has[sb]) continue;
    if (w.index + dst[sb].num > 48) fail('too many tones');
    dst[sb].startIndex = w.index;
    w.index += dst[sb].num;
  }
}

function decodeTonesFrequency(g: Bits, u: Unit, chNum: number, has: number[]): void {
  const dst = u.ch[chNum].tones, ref = u.ch[0].tones, waves = u.waves.waves;
  if (!chNum || !g.get1()) {
    for (let sb = 0; sb < u.waves.bands; sb++) {
      if (!has[sb] || !dst[sb].num) continue;
      const at = dst[sb].startIndex, n = dst[sb].num;
      const direction = n > 1 ? g.get1() : 0;
      if (direction) { // descending
        waves[at + n - 1].freq = g.get(10);
        for (let i = n - 2; i >= 0; i--) waves[at + i].freq = g.get(log2(waves[at + i + 1].freq) + 1);
      } else { // ascending
        for (let i = 0; i < n; i++) {
          if (!i || waves[at + i - 1].freq < 512) waves[at + i].freq = g.get(10);
          else {
            const nbits = log2(1023 - waves[at + i - 1].freq) + 1;
            waves[at + i].freq = g.get(nbits) + 1024 - (1 << nbits);
          }
        }
      }
    }
  } else {
    for (let sb = 0; sb < u.waves.bands; sb++) {
      if (!has[sb] || !dst[sb].num) continue;
      const iw = ref[sb].startIndex, ow = dst[sb].startIndex;
      for (let i = 0; i < dst[sb].num; i++) {
        const delta = signExtend(g.vlc(TONE_VLC[6]), 8);
        const pred = i < ref[sb].num ? waves[iw + i].freq : ref[sb].num ? waves[iw + ref[sb].num - 1].freq : 0;
        waves[ow + i].freq = (pred + delta) & 0x3ff;
      }
    }
  }
}

function decodeTonesAmplitude(g: Bits, u: Unit, chNum: number, has: number[]): void {
  const dst = u.ch[chNum].tones, ref = u.ch[0].tones, w = u.waves, waves = w.waves;
  const refwaves = new Int32Array(48);
  if (chNum) {
    for (let sb = 0; sb < w.bands; sb++) {
      if (!has[sb] || !dst[sb].num) continue;
      const ws = dst[sb].startIndex, wr = ref[sb].startIndex;
      for (let j = 0; j < dst[sb].num; j++) {
        let fi = 0, maxdiff = 1024;
        for (let i = 0; i < ref[sb].num; i++) {
          const diff = Math.abs(waves[ws + j].freq - waves[wr + i].freq);
          if (diff < maxdiff) { maxdiff = diff; fi = i; }
        }
        refwaves[ws + j] = maxdiff < 8 ? fi + wr : j < ref[sb].num ? j + wr : -1;
      }
    }
  }
  switch (g.get(chNum + 1)) {
    case 0:
      for (let sb = 0; sb < w.bands; sb++) {
        if (!has[sb] || !dst[sb].num) continue;
        if (w.ampMode) for (let i = 0; i < dst[sb].num; i++) waves[dst[sb].startIndex + i].ampSf = g.get(6);
        else waves[dst[sb].startIndex].ampSf = g.get(6);
      }
      break;
    case 1:
      for (let sb = 0; sb < w.bands; sb++) {
        if (!has[sb] || !dst[sb].num) continue;
        if (w.ampMode) for (let i = 0; i < dst[sb].num; i++) waves[dst[sb].startIndex + i].ampSf = g.vlc(TONE_VLC[3]) + 20;
        else waves[dst[sb].startIndex].ampSf = g.vlc(TONE_VLC[4]) + 24;
      }
      break;
    case 2:
      for (let sb = 0; sb < w.bands; sb++) {
        if (!has[sb] || !dst[sb].num) continue;
        for (let i = 0; i < dst[sb].num; i++) {
          const delta = signExtend(g.vlc(TONE_VLC[5]), 5), r = refwaves[dst[sb].startIndex + i];
          const pred = r >= 0 ? waves[r].ampSf : 34;
          waves[dst[sb].startIndex + i].ampSf = (pred + delta) & 0x3f;
        }
      }
      break;
    case 3:
      for (let sb = 0; sb < w.bands; sb++) {
        if (!has[sb]) continue;
        for (let i = 0; i < dst[sb].num; i++) {
          const r = refwaves[dst[sb].startIndex + i];
          waves[dst[sb].startIndex + i].ampSf = r >= 0 ? waves[r].ampSf : 32;
        }
      }
      break;
  }
}

function decodeTonesPhase(g: Bits, u: Unit, chNum: number, has: number[]): void {
  const dst = u.ch[chNum].tones, waves = u.waves.waves;
  for (let sb = 0; sb < u.waves.bands; sb++) {
    if (!has[sb]) continue;
    for (let i = 0; i < dst[sb].num; i++) waves[dst[sb].startIndex + i].phase = g.get(5);
  }
}

function decodeTonesInfo(g: Bits, u: Unit, numChannels: number): void {
  for (let chNum = 0; chNum < numChannels; chNum++) for (const t of u.ch[chNum].tones) clearWaves(t);
  const w = u.waves;
  w.present = g.get1();
  if (!w.present) return;
  for (const x of w.waves) { x.freq = 0; x.ampSf = 0; x.ampIndex = 0; x.phase = 0; }
  w.ampMode = g.get1();
  if (!w.ampMode) fail('GHA amplitude mode 0 is not supported (as in FFmpeg)');
  w.bands = g.vlc(TONE_VLC[0]) + 1;
  if (numChannels === 2) {
    subbandFlags(g, w.sharing, w.bands);
    subbandFlags(g, w.master, w.bands);
    subbandFlags(g, w.invert, w.bands);
  }
  w.index = 0;
  const has = new Array<number>(SUBBANDS).fill(0);
  for (let chNum = 0; chNum < numChannels; chNum++) {
    for (let i = 0; i < w.bands; i++) has[i] = !chNum ? 1 : w.sharing[i] ? 0 : 1;
    decodeTonesEnvelope(g, u, chNum, has);
    decodeBandNumwavs(g, u, chNum, has);
    decodeTonesFrequency(g, u, chNum, has);
    decodeTonesAmplitude(g, u, chNum, has);
    decodeTonesPhase(g, u, chNum, has);
  }
  if (numChannels === 2) {
    for (let i = 0; i < w.bands; i++) {
      if (w.sharing[i]) copyWaves(u.ch[1].tones[i], u.ch[0].tones[i]);
      if (w.master[i]) { const t = u.ch[0].tones[i]; u.ch[0].tones[i] = u.ch[1].tones[i]; u.ch[1].tones[i] = t; }
    }
  }
}

function decodeChannelUnit(g: Bits, u: Unit, numChannels: number): void {
  u.numQuantUnits = g.get(5) + 1;
  if (u.numQuantUnits > 28 && u.numQuantUnits < 32) fail('invalid number of quantization units');
  u.mute = g.get1();
  for (let chNum = 0; chNum < numChannels; chNum++) { u.ch[chNum].wl.fill(0); decodeChannelWordlen(g, u, chNum); }
  let i = u.numQuantUnits - 1;
  for (; i >= 0; i--) if (u.ch[0].wl[i] || (numChannels === 2 && u.ch[1].wl[i])) break;
  u.usedQuantUnits = i + 1;
  u.numSubbands = T.atrac3p_qu_to_subband[u.numQuantUnits - 1] + 1;
  u.numCodedSubbands = u.usedQuantUnits ? T.atrac3p_qu_to_subband[u.usedQuantUnits - 1] + 1 : 0;
  if (u.usedQuantUnits) for (let chNum = 0; chNum < numChannels; chNum++) { u.ch[chNum].sf.fill(0); decodeChannelSfIdx(g, u, chNum); }
  if (u.usedQuantUnits) {
    u.useFullTable = g.get1();
    for (let chNum = 0; chNum < numChannels; chNum++) { u.ch[chNum].ct.fill(0); decodeChannelCodeTab(g, u, chNum); }
  }
  decodeSpectrum(g, u, numChannels);
  if (numChannels === 2) {
    subbandFlags(g, u.swap, u.numCodedSubbands);
    subbandFlags(g, u.negate, u.numCodedSubbands);
  }
  for (let chNum = 0; chNum < numChannels; chNum++) subbandFlags(g, u.ch[chNum].wnd, u.numSubbands);
  decodeGaincData(g, u, numChannels);
  decodeTonesInfo(g, u, numChannels);
  u.noisePresent = g.get1();
  if (u.noisePresent) { u.noiseLevel = g.get(4); u.noiseTable = g.get(4); }
}

// -------------------------------------------------------------------- DSP --
function powerCompensation(u: Unit, chIndex: number, sp: Float32Array, rngIndex: number, sb: number): void {
  const swap = u.type === CH_STEREO && u.swap[sb] ? 1 : 0, src = u.ch[chIndex ^ swap], c = u.ch[chIndex];
  const grp = T.subband_to_powgrp[sb];
  if (src.powerLevs[grp] === POWER_COMP_OFF) return;
  const g1 = src.gain[sb], g2 = src.gainPrev[sb];
  const gainLev = g1.n > 0 ? 6 - g1.lev[0] : 0;
  let gcv = 0;
  for (let i = 0; i < g2.n; i++) gcv = Math.max(gcv, gainLev - (g2.lev[i] - 6));
  for (let i = 0; i < g1.n; i++) gcv = Math.max(gcv, 6 - g1.lev[i]);
  const grpLev = f32(PWC_LEVS[src.powerLevs[grp]] / (1 << gcv));
  for (let qu = T.subband_to_qu[sb] + (!sb ? 2 : 0); qu < T.subband_to_qu[sb + 1]; qu++) {
    if (c.wl[qu] <= 0) continue;
    const quLev = f32(f32(f32(SF_TAB[c.sf[qu]] * MANT_TAB[c.wl[qu]]) / (1 << c.wl[qu])) * grpLev);
    const at = QU_TO_SPEC[qu], nsp = QU_TO_SPEC[qu + 1] - at;
    for (let i = 0; i < nsp; i++) sp[at + i] += NOISE[(rngIndex + i) & 0x3ff] * quLev;
  }
}

function residualSpectrum(u: Unit, out: Float32Array[], numChannels: number): void {
  if (u.mute) { for (let ch = 0; ch < numChannels; ch++) out[ch].fill(0); return; }
  const sbRng = new Int32Array(SUBBANDS);
  let rng = 0;
  for (let qu = 0; qu < u.usedQuantUnits; qu++) rng += u.ch[0].sf[qu] + u.ch[1].sf[qu];
  for (let sb = 0; sb < u.numCodedSubbands; sb++, rng += 128) sbRng[sb] = rng & 0x3fc;
  for (let ch = 0; ch < numChannels; ch++) {
    const c = u.ch[ch], o = out[ch];
    o.fill(0);
    for (let qu = 0; qu < u.usedQuantUnits; qu++) {
      if (c.wl[qu] > 0) {
        const q = f32(SF_TAB[c.sf[qu]] * MANT_TAB[c.wl[qu]]);
        for (let i = QU_TO_SPEC[qu]; i < QU_TO_SPEC[qu + 1]; i++) o[i] = c.spectrum[i] * q;
      }
    }
    for (let sb = 0; sb < u.numCodedSubbands; sb++) powerCompensation(u, ch, o, sbRng[sb], sb);
  }
  if (u.type === CH_STEREO) {
    for (let sb = 0; sb < u.numCodedSubbands; sb++) {
      const a = sb * SB_SAMPLES;
      if (u.swap[sb]) for (let i = 0; i < SB_SAMPLES; i++) { const t = out[0][a + i]; out[0][a + i] = out[1][a + i]; out[1][a + i] = t; }
      if (u.negate[sb]) for (let i = 0; i < SB_SAMPLES; i++) out[1][a + i] = -out[1][a + i];
    }
  }
}

const HALF = new Float64Array(128);
/** ff_atrac3p_imdct: the subband's 128 lines (reversed in the odd ones) to 256 samples, windowed */
function imdct(inp: Float32Array, inAt: number, out: Float32Array, outAt: number, windId: number, sb: number): void {
  if (sb & 1) for (let i = 0; i < SB_SAMPLES / 2; i++) { const t = inp[inAt + i]; inp[inAt + i] = inp[inAt + SB_SAMPLES - 1 - i]; inp[inAt + SB_SAMPLES - 1 - i] = t; }
  for (let n = 0; n < 128; n++) {
    let s = 0;
    const row = n * 128;
    for (let j = 0; j < 128; j++) s += MDCT_M[row + j] * inp[inAt + j];
    HALF[n] = s;
  }
  // the full output: the half in the middle, its mirror (negated) before, its mirror after
  for (let n = 0; n < 128; n++) out[outAt + 64 + n] = HALF[n];
  for (let i = 0; i < 64; i++) { out[outAt + i] = -out[outAt + 127 - i]; out[outAt + 255 - i] = out[outAt + 128 + i]; }
  if (windId & 2) { // 1st half: steep window
    out.fill(0, outAt, outAt + 32);
    for (let i = 0; i < 64; i++) out[outAt + 32 + i] *= SINE_64[i];
  } else for (let i = 0; i < 128; i++) out[outAt + i] *= SINE_128[i];
  if (windId & 1) { // 2nd half: steep window
    for (let i = 0; i < 64; i++) out[outAt + 160 + i] *= SINE_64[63 - i];
    out.fill(0, outAt + 224, outAt + 256);
  } else for (let i = 0; i < 128; i++) out[outAt + 128 + i] *= SINE_128[127 - i];
}

/** ff_atrac_gain_compensation over a subband's 128 samples, the next 128 kept as the overlap */
function gainCompensation(inp: Float32Array, inAt: number, prev: Float32Array, prevAt: number, now: Gain, next: Gain, out: Float32Array, outAt: number): void {
  const scale = next.n ? GAIN_TAB1[next.lev[0]] : 1;
  if (!now.n) {
    for (let pos = 0; pos < SB_SAMPLES; pos++) out[outAt + pos] = f32(inp[inAt + pos] * scale) + prev[prevAt + pos];
  } else {
    let pos = 0;
    for (let i = 0; i < now.n; i++) {
      const lastpos = now.loc[i] << GC_LOC_SCALE;
      let lev = GAIN_TAB1[now.lev[i]];
      const inc = GAIN_TAB2[(i + 1 < now.n ? now.lev[i + 1] : GC_ID2EXP) - now.lev[i] + 15];
      for (; pos < lastpos; pos++) out[outAt + pos] = f32(f32(inp[inAt + pos] * scale) + prev[prevAt + pos]) * lev;
      for (; pos < lastpos + GC_LOC_SIZE; pos++) { out[outAt + pos] = f32(f32(inp[inAt + pos] * scale) + prev[prevAt + pos]) * lev; lev = f32(lev * inc); }
    }
    for (; pos < SB_SAMPLES; pos++) out[outAt + pos] = f32(inp[inAt + pos] * scale) + prev[prevAt + pos];
  }
  prev.set(inp.subarray(inAt + SB_SAMPLES, inAt + 2 * SB_SAMPLES), prevAt);
}

function wavesSynth(synth: Synth, w: Waves, env: Env, invert: number, regOffset: number, out: Float32Array): void {
  for (let wn = 0; wn < w.num; wn++) {
    const p = synth.waves[w.startIndex + wn];
    const amp = AMP_SF[p.ampSf] * (!synth.ampMode ? f32((p.ampIndex + 1) / f32(15.13)) : 1);
    const inc = p.freq;
    let pos = (((p.phase & 0x1f) << 6) - (regOffset ^ 128) * inc) & 2047;
    for (let i = 0; i < 128; i++) { out[i] += SINE_TABLE[pos] * amp; pos = (pos + inc) & 2047; }
  }
  if (invert) for (let i = 0; i < 128; i++) out[i] = -out[i];
  if (env.hasStart) {
    const pos = (env.start << 2) - regOffset;
    if (pos > 0 && pos <= 128) {
      out.fill(0, 0, pos);
      if (!env.hasStop || env.start !== env.stop) {
        out[pos] *= HANN[0]; out[pos + 1] *= HANN[32]; out[pos + 2] *= HANN[64]; out[pos + 3] *= HANN[96];
      }
    }
  }
  if (env.hasStop) {
    const pos = ((env.stop + 1) << 2) - regOffset;
    if (pos > 0 && pos <= 128) {
      out[pos - 4] *= HANN[96]; out[pos - 3] *= HANN[64]; out[pos - 2] *= HANN[32]; out[pos - 1] *= HANN[0];
      out.fill(0, pos, 128);
    }
  }
}

const WAVREG1 = new Float32Array(128 + 4), WAVREG2 = new Float32Array(128 + 4);
function generateTones(u: Unit, chNum: number, sb: number, out: Float32Array, outAt: number): void {
  const r1 = WAVREG1.subarray(0, 128), r2 = WAVREG2.subarray(0, 128);
  WAVREG1.fill(0); WAVREG2.fill(0);
  const now = u.ch[chNum].tonesPrev[sb], next = u.ch[chNum].tones[sb];
  // the full envelopes of both overlapping regions, from what the bitstream kept
  if (next.pend.hasStart && next.pend.start < next.pend.stop) { next.curr.hasStart = 1; next.curr.start = next.pend.start + 32; }
  else if (now.pend.hasStart) { next.curr.hasStart = 1; next.curr.start = now.pend.start; }
  else { next.curr.hasStart = 0; next.curr.start = 0; }
  if (now.pend.hasStop && now.pend.stop >= next.curr.start) { next.curr.hasStop = 1; next.curr.stop = now.pend.stop; }
  else if (next.pend.hasStop) { next.curr.hasStop = 1; next.curr.stop = next.pend.stop + 32; }
  else { next.curr.hasStop = 0; next.curr.stop = 64; }
  const reg1 = now.curr.stop < 32 ? 0 : 1, reg2 = next.curr.start >= 32 ? 0 : 1;
  if (now.num && reg1) wavesSynth(u.wavesPrev, now, now.curr, u.wavesPrev.invert[sb] & chNum, 128, WAVREG1);
  if (next.num && reg2) wavesSynth(u.waves, next, next.curr, u.waves.invert[sb] & chNum, 0, WAVREG2);
  if (now.num && next.num && reg1 && reg2) {
    for (let i = 0; i < 128; i++) { r1[i] *= HANN[128 + i]; r2[i] *= HANN[i]; }
  } else {
    if (now.num && !now.curr.hasStop) for (let i = 0; i < 128; i++) r1[i] *= HANN[128 + i];
    if (next.num && !next.curr.hasStart) for (let i = 0; i < 128; i++) r2[i] *= HANN[i];
  }
  for (let i = 0; i < 128; i++) out[outAt + i] += r1[i] + r2[i];
}

const IDCT_IN = new Float32Array(SUBBANDS), IDCT_OUT = new Float32Array(SUBBANDS);
/** ff_atrac3p_ipqf: the 16 subbands' samples through the 384-tap synthesis filter bank */
function ipqf(hist: Unit['ipqf'][number], inp: Float32Array, out: Float32Array): void {
  out.fill(0);
  for (let s = 0; s < SB_SAMPLES; s++) {
    for (let sb = 0; sb < SUBBANDS; sb++) IDCT_IN[sb] = inp[sb * SB_SAMPLES + s];
    for (let n = 0; n < 16; n++) {
      let v = 0;
      for (let j = 0; j < 16; j++) v += IPQF_M[n * 16 + j] * IDCT_IN[j];
      IDCT_OUT[n] = v;
    }
    for (let i = 0; i < 8; i++) { hist.buf1[hist.pos * 8 + i] = IDCT_OUT[i + 8]; hist.buf2[hist.pos * 8 + i] = IDCT_OUT[7 - i]; }
    let posNow = hist.pos, posNext = MOD23[posNow + 2];
    for (let t = 0; t < PQF_FIR_LEN; t++) {
      for (let i = 0; i < 8; i++) {
        out[s * 16 + i] += f32(hist.buf1[posNow * 8 + i] * IPQF1[t * 16 + i]) + f32(hist.buf2[posNext * 8 + i] * IPQF2[t * 16 + i]);
        out[s * 16 + i + 8] += f32(hist.buf1[posNow * 8 + 7 - i] * IPQF1[t * 16 + i + 8]) + f32(hist.buf2[posNext * 8 + 7 - i] * IPQF2[t * 16 + i + 8]);
      }
      posNow = MOD23[posNext + 2];
      posNext = MOD23[posNow + 2];
    }
    hist.pos = MOD23[hist.pos];
  }
}

// ---------------------------------------------------------------- decoder --
const CHANNEL_BLOCKS: Record<number, number[]> = {
  1: [CH_MONO], 2: [CH_STEREO], 3: [CH_STEREO, CH_MONO], 4: [CH_STEREO, CH_MONO, CH_MONO],
  6: [CH_STEREO, CH_MONO, CH_STEREO, CH_MONO], 7: [CH_STEREO, CH_MONO, CH_STEREO, CH_MONO, CH_MONO], 8: [CH_STEREO, CH_MONO, CH_STEREO, CH_STEREO, CH_MONO],
};
const CHANNEL_MAP = [[0], [0, 1], [0, 1, 2], [0, 1, 2, 3], [0], [0, 1, 2, 4, 5, 3], [0, 1, 2, 4, 5, 6, 3], [0, 1, 2, 4, 5, 6, 7, 3]];

/** one ATRAC3+ stream's decoder: its units' state runs from frame to frame */
export class Atrac3plusDecoder {
  private blocks: number[];
  private map: number[];
  private units: Unit[];
  private samples = [new Float32Array(FRAME), new Float32Array(FRAME)];
  private mdct = [new Float32Array(FRAME + SB_SAMPLES), new Float32Array(FRAME + SB_SAMPLES)];
  private time = [new Float32Array(FRAME), new Float32Array(FRAME)];
  private outp = [new Float32Array(FRAME), new Float32Array(FRAME)];

  constructor(readonly channels: number) {
    const b = CHANNEL_BLOCKS[channels];
    if (!b) throw new Error('ATRAC3+: ' + channels + ' channels are not supported');
    this.blocks = b;
    this.map = CHANNEL_MAP[channels - 1];
    this.units = b.map(() => new Unit());
  }

  /**
   * a frame (`bytes` of `data` from `at`) decoded into `out`'s channels from
   * `to`: 2048 samples each. False when the frame is invalid (FFmpeg drops it;
   * here it is left as it was, silence)
   */
  decodeFrame(data: Uint8Array, at: number, bytes: number, out: Float32Array[], to: number): boolean {
    const g = new Bits(data, at, bytes);
    try {
      if (g.get1()) fail('invalid start bit');
      let block = 0, outCh = 0, id: number;
      while (g.left() >= 2 && (id = g.get(2)) !== CH_TERMINATOR) {
        if (id === CH_EXTENSION) fail('channel unit extension');
        if (block >= this.blocks.length || this.blocks[block] !== id) fail('frame data does not match the channel configuration');
        const u = this.units[block], n = id + 1;
        u.type = id;
        decodeChannelUnit(g, u, n);
        residualSpectrum(u, this.samples, n);
        this.reconstruct(u, n);
        for (let i = 0; i < n; i++) out[this.map[outCh + i]].set(this.outp[i], to);
        block++;
        outCh += n;
      }
      return true;
    } catch (e) {
      if (e instanceof Invalid) return false;
      throw e;
    }
  }

  private reconstruct(u: Unit, numChannels: number): void {
    for (let ch = 0; ch < numChannels; ch++) {
      const c = u.ch[ch], time = this.time[ch], mdct = this.mdct[ch];
      for (let sb = 0; sb < u.numSubbands; sb++) {
        imdct(this.samples[ch], sb * SB_SAMPLES, mdct, sb * SB_SAMPLES, (c.wndPrev[sb] << 1) + c.wnd[sb], sb);
        gainCompensation(mdct, sb * SB_SAMPLES, u.prev[ch], sb * SB_SAMPLES, c.gainPrev[sb], c.gain[sb], time, sb * SB_SAMPLES);
      }
      u.prev[ch].fill(0, u.numSubbands * SB_SAMPLES);
      time.fill(0, u.numSubbands * SB_SAMPLES);
      if (u.waves.present || u.wavesPrev.present) {
        for (let sb = 0; sb < u.numSubbands; sb++) {
          if (c.tones[sb].num || c.tonesPrev[sb].num) generateTones(u, ch, sb, time, sb * 128);
        }
      }
      ipqf(u.ipqf[ch], time, this.outp[ch]);
    }
    for (let ch = 0; ch < numChannels; ch++) {
      const c = u.ch[ch];
      [c.wnd, c.wndPrev] = [c.wndPrev, c.wnd];
      [c.gain, c.gainPrev] = [c.gainPrev, c.gain];
      [c.tones, c.tonesPrev] = [c.tonesPrev, c.tones];
    }
    [u.waves, u.wavesPrev] = [u.wavesPrev, u.waves];
  }
}

/** a run of frames decoded: 2048 samples a channel a frame */
export function decodeAtrac3plus(data: Uint8Array, channels: number, blockAlign: number): { pcm: Float32Array[]; bad: number } {
  const frames = Math.floor(data.length / blockAlign), dec = new Atrac3plusDecoder(channels);
  const pcm = Array.from({ length: channels }, () => new Float32Array(frames * FRAME));
  let bad = 0;
  for (let f = 0; f < frames; f++) if (!dec.decodeFrame(data, f * blockAlign, blockAlign, pcm, f * FRAME)) bad++;
  return { pcm, bad };
}

// ------------------------------------------------------------- RIFF .at3 --
/**
 * A RIFF of ATRAC3plus (Sony's .at3: vgmstream's riff.c): "fmt " of
 * WAVE_FORMAT_EXTENSIBLE with the ATRAC3plus GUID (E923AABF-CB58-4471-A119-
 * FFFA01E4CE62), its block align a frame's bytes; "fact" the samples and the
 * encoder's delay to skip (at 4 when the chunk is 8 bytes, at 8 when 0x0C);
 * "smpl" a loop, its points counted with the skip; "data" the frames. Decoded,
 * the skip and the decoder's own 184 (twice that with an 8 byte fact) are cut
 * from the start, as vgmstream does.
 */
export interface At3pRiff {
  channels: number;
  sampleRate: number;
  blockAlign: number;
  samples: number;
  /** samples cut from the decoded start */
  skip: number;
  data: number;
  dataSize: number;
  /** -1: does not loop */
  loopStart: number;
  loopEnd: number;
}

export function readAt3pRiff(b: Uint8Array): At3pRiff {
  if (!isAt3pRiff(b)) throw new Error('not an ATRAC3plus RIFF');
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const r: At3pRiff = { channels: 0, sampleRate: 0, blockAlign: 0, samples: 0, skip: 2048 + 184, data: 0, dataSize: 0, loopStart: -1, loopEnd: -1 };
  let factSkip = 2048;
  for (let o = 12; o + 8 <= b.length;) {
    const id = String.fromCharCode(b[o], b[o + 1], b[o + 2], b[o + 3]), n = dv.getUint32(o + 4, true), c = o + 8;
    if (id === 'fmt ') { r.channels = dv.getUint16(c + 2, true); r.sampleRate = dv.getUint32(c + 4, true); r.blockAlign = dv.getUint16(c + 0x0c, true); }
    else if (id === 'fact') {
      if (n === 8) { r.samples = dv.getInt32(c, true); factSkip = dv.getInt32(c + 4, true); r.skip = factSkip + 184 * 2; }
      else if (n === 0x0c) { r.samples = dv.getInt32(c, true); factSkip = dv.getInt32(c + 8, true); r.skip = factSkip + 184; }
      else if (n === 4) { r.samples = dv.getInt32(c, true); }
    } else if (id === 'smpl' && n >= 0x3c && dv.getUint32(c + 0x1c, true) > 0) {
      r.loopStart = dv.getInt32(c + 0x24 + 0x08, true); r.loopEnd = dv.getInt32(c + 0x24 + 0x0c, true) + 1;
    } else if (id === 'data') { r.data = c; r.dataSize = Math.min(n, b.length - c); break; }
    o += 8 + n + (n & 1);
  }
  if (!r.blockAlign) throw new Error('ATRAC3plus RIFF: no block align');
  // the loop's points count the fact chunk's skip (vgmstream's riff.c), not the decoder's 184
  if (r.loopStart >= 0) { r.loopStart -= factSkip; r.loopEnd -= factSkip; }
  const total = Math.floor(r.dataSize / r.blockAlign) * FRAME;
  if (!r.samples || r.samples > total - r.skip) r.samples = Math.max(0, total - r.skip);
  return r;
}

/** a RIFF .at3 (ATRAC3plus) decoded: its skip cut, its samples kept */
export function decodeAt3pRiff(b: Uint8Array): Float32Array[] {
  const r = readAt3pRiff(b);
  const { pcm } = decodeAtrac3plus(b.subarray(r.data, r.data + r.dataSize), r.channels, r.blockAlign);
  return pcm.map((ch) => ch.slice(r.skip, r.skip + r.samples));
}
