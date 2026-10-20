/**
 * ATRAC3, Sony's transform codec of the PS3 era: the sound of Koei Tecmo's
 * PS3 wave banks (K3HD: Fist of the North Star - Ken's Rage, One Piece Pirate
 * Warriors), inside Sony MSF files. A port of FFmpeg's ATRAC3 decoder
 * (libavcodec/atrac3.c, atrac3data.h, atrac.c), with vgmstream's MSF setup
 * (src/meta/msf.c, coding/ffmpeg_decoder_utils.c: the frame size, joint
 * stereo, the encoder delay and the inverted waveform).
 *
 * THIS FILE IS LGPL 2.1 (or later), as the FFmpeg code it ports, and stays
 * its own module with this notice:
 *
 *   ATRAC3 compatible decoder
 *   Copyright (c) 2006-2008 Maxim Poliakovski
 *   Copyright (c) 2006-2008 Benjamin Larsson
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
 * THE CODEC. A frame is 1024 samples a channel, `blockAlign / channels` bytes a
 * channel's sound unit (0x60, 0x98 or 0xC0: 66, 105, 132 kbps at 44.1 kHz). A
 * unit is: id 0x28 (6 bits), the coded QMF bands (2 bits), each band's gain
 * control points, tonal components, then the spectrum - up to 32 subbands, each
 * a VLC or fixed-length selector, a scale factor and its mantissas. Each of the
 * four QMF bands is a 256-line IMDCT (the odd ones reversed), windowed, gain
 * compensated and overlapped with the previous frame, and the three QMF
 * syntheses put the four bands back into 1024 samples. Joint stereo (only at
 * the lowest frame size) codes the second unit byte-reversed after the first,
 * matrixed and weighted against it.
 */

const SAMPLES = 1024;

// ---------------------------------------------------------------- tables --
const HUFF: [number, number][] = [
  // spectral coefficient 1 - 9 entries
  [31, 1], [32, 3], [33, 3], [34, 4], [35, 4], [36, 5], [37, 5], [38, 5], [39, 5],
  // 2 - 5
  [31, 1], [32, 3], [30, 3], [33, 3], [29, 3],
  // 3 - 7
  [31, 1], [32, 3], [30, 3], [33, 4], [29, 4], [34, 4], [28, 4],
  // 4 - 9
  [31, 1], [32, 3], [30, 3], [33, 4], [29, 4], [34, 5], [28, 5], [35, 5], [27, 5],
  // 5 - 15
  [31, 2], [32, 3], [30, 3], [33, 4], [29, 4], [34, 4], [28, 4], [38, 4], [24, 4], [35, 5],
  [27, 5], [36, 6], [26, 6], [37, 6], [25, 6],
  // 6 - 31
  [31, 3], [32, 4], [30, 4], [33, 4], [29, 4], [34, 4], [28, 4], [46, 4], [16, 4], [35, 5], [27, 5], [36, 5],
  [26, 5], [37, 5], [25, 5], [38, 6], [24, 6], [39, 6], [23, 6], [40, 6], [22, 6], [41, 6], [21, 6], [42, 7],
  [20, 7], [43, 7], [19, 7], [44, 7], [18, 7], [45, 7], [17, 7],
  // 7 - 63
  [31, 3], [62, 4], [0, 4], [32, 5], [30, 5], [33, 5], [29, 5], [34, 5], [28, 5], [35, 5], [27, 5], [36, 5],
  [26, 5], [37, 6], [25, 6], [38, 6], [24, 6], [39, 6], [23, 6], [40, 6], [22, 6], [41, 6], [21, 6], [42, 6],
  [20, 6], [43, 6], [19, 6], [44, 6], [18, 6], [45, 7], [17, 7], [46, 7], [16, 7], [47, 7], [15, 7], [48, 7],
  [14, 7], [49, 7], [13, 7], [50, 7], [12, 7], [51, 7], [11, 7], [52, 8], [10, 8], [53, 8], [9, 8], [54, 8],
  [8, 8], [55, 8], [7, 8], [56, 8], [6, 8], [57, 8], [5, 8], [58, 8], [4, 8], [59, 8], [3, 8], [60, 8],
  [2, 8], [61, 8], [1, 8],
];
const HUFF_SIZES = [9, 5, 7, 9, 15, 31, 63];
const CLC_LENGTH = [0, 4, 3, 3, 4, 4, 5, 6];
const MANTISSA_CLC = [0, 1, -2, -1];
const MANTISSA_VLC = [0, 0, 0, 1, 0, -1, 1, 0, -1, 0, 1, 1, 1, -1, -1, 1, -1, -1];
const f32 = Math.fround;
const INV_MAX_QUANT = [0, 1 / 1.5, 1 / 2.5, 1 / 3.5, 1 / 4.5, 1 / 7.5, 1 / 15.5, 1 / 31.5].map(f32);
const SUBBAND = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 288, 320, 352, 384, 416, 448, 480, 512, 576, 640, 704, 768, 896, 1024];
const MATRIX_COEFFS = [0, 2, 2, 2, 0, 0, 1, 1];
const QMF_48TAP_HALF = [
  -0.00001461907, -0.00009205479, -0.000056157569, 0.00030117269, 0.0002422519, -0.00085293897, -0.0005205574, 0.0020340169,
  0.00078333891, -0.0042153862, -0.00075614988, 0.0078402944, -0.000061169922, -0.01344162, 0.0024626821, 0.021736089,
  -0.007801671, -0.034090221, 0.01880949, 0.054326009, -0.043596379, -0.099384367, 0.13207909, 0.46424159,
];

/** the VLC tables: [length][code] -> symbol, codes assigned in the listed order (FFmpeg's ff_vlc_init_from_lengths) */
const VLC: Map<number, number>[][] = [];
{
  let at = 0;
  for (const size of HUFF_SIZES) {
    const byLen: Map<number, number>[] = Array.from({ length: 9 }, () => new Map());
    let code = 0;
    for (let i = 0; i < size; i++) {
      const [sym, len] = HUFF[at + i];
      byLen[len].set(code >>> (32 - len), sym - 31);
      code = (code + 2 ** (32 - len)) >>> 0;
    }
    VLC.push(byLen);
    at += size;
  }
}
const SF = Array.from({ length: 64 }, (_, i) => f32(2 ** ((i - 15) / 3)));
const QMF_WINDOW = new Float32Array(48);
for (let i = 0; i < 24; i++) QMF_WINDOW[i] = QMF_WINDOW[47 - i] = f32(QMF_48TAP_HALF[i] * 2);
const MDCT_WINDOW = new Float32Array(512);
for (let i = 0, j = 255; i < 128; i++, j--) {
  const wi = Math.sin(((i + 0.5) / 256 - 0.5) * Math.PI) + 1, wj = Math.sin(((j + 0.5) / 256 - 0.5) * Math.PI) + 1;
  const w = 0.5 * (wi * wi + wj * wj);
  MDCT_WINDOW[i] = MDCT_WINDOW[511 - i] = wi / w;
  MDCT_WINDOW[j] = MDCT_WINDOW[511 - j] = wj / w;
}
// gain compensation (ff_atrac_init_gain_compensation(4, 3)): level 2^(4 - i), interpolation 2^(-i / 8) over 8 samples
const GAIN_LEV = Array.from({ length: 16 }, (_, i) => f32(2 ** (4 - i)));
const GAIN_INC = Array.from({ length: 31 }, (_, i) => f32(2 ** (-(i - 15) / 8)));

// ------------------------------------------------------------------ IMDCT --
/**
 * The full 256-line inverse MDCT, scale 1 / 32768: y[n] = s * sum_k X[k]
 * cos(pi / 256 (n + 0.5 + 128)(k + 0.5)), n = 0..511 - here as one 512-point
 * complex FFT of X[k] e^(i theta n0 k), turned by e^(i theta (n + n0) / 2), its
 * real part. FFmpeg's av_tx IMDCT is this negated; so the waveform here is
 * FFmpeg's inverted, which is vgmstream's (it inverts FFmpeg's ATRAC3, as Sony's
 * own tools give it).
 */
const N = 512, THETA = Math.PI / 256, N0 = 128.5, SCALE = 1 / 32768;
const PRE_RE = new Float64Array(256), PRE_IM = new Float64Array(256), POST_RE = new Float64Array(N), POST_IM = new Float64Array(N);
for (let k = 0; k < 256; k++) { const a = THETA * N0 * k; PRE_RE[k] = Math.cos(a); PRE_IM[k] = Math.sin(a); }
for (let n = 0; n < N; n++) { const a = THETA * (n + N0) / 2; POST_RE[n] = Math.cos(a) * SCALE; POST_IM[n] = Math.sin(a) * SCALE; }
const REV = new Uint16Array(N);
for (let i = 0; i < N; i++) { let r = 0; for (let b = 0; b < 9; b++) if (i & (1 << b)) r |= 1 << (8 - b); REV[i] = r; }
const TW_RE = new Float64Array(N / 2), TW_IM = new Float64Array(N / 2);
for (let i = 0; i < N / 2; i++) { TW_RE[i] = Math.cos(2 * Math.PI * i / N); TW_IM[i] = Math.sin(2 * Math.PI * i / N); }
const FRE = new Float64Array(N), FIM = new Float64Array(N);

function imdct(input: Float32Array, at: number, out: Float32Array): void {
  FRE.fill(0); FIM.fill(0);
  for (let k = 0; k < 256; k++) { const x = input[at + k], r = REV[k]; FRE[r] = x * PRE_RE[k]; FIM[r] = x * PRE_IM[k]; }
  // radix-2, e^(+2 pi i n k / N)
  for (let size = 2; size <= N; size <<= 1) {
    const half = size >> 1, step = N / size;
    for (let s = 0; s < N; s += size) {
      for (let j = 0; j < half; j++) {
        const wr = TW_RE[j * step], wi = TW_IM[j * step];
        const a = s + j, b = a + half;
        const br = FRE[b] * wr - FIM[b] * wi, bi = FRE[b] * wi + FIM[b] * wr;
        FRE[b] = FRE[a] - br; FIM[b] = FIM[a] - bi;
        FRE[a] += br; FIM[a] += bi;
      }
    }
  }
  for (let n = 0; n < N; n++) out[n] = FRE[n] * POST_RE[n] - FIM[n] * POST_IM[n];
}

// ------------------------------------------------------------ bit reader --
class Bits {
  pos = 0;
  constructor(private b: Uint8Array, private start: number, private end: number) {}
  get(n: number): number {
    let v = 0;
    for (let i = 0; i < n; i++) {
      const at = this.start + (this.pos >> 3);
      const bit = at < this.end ? (this.b[at] >> (7 - (this.pos & 7))) & 1 : 0;
      v = (v << 1) | bit;
      this.pos++;
    }
    return v >>> 0;
  }
  sget(n: number): number { const v = this.get(n); return v & (1 << (n - 1)) ? v - (1 << n) : v; }
  vlc(t: Map<number, number>[]): number {
    let code = 0;
    for (let len = 1; len <= 8; len++) {
      code = (code << 1) | this.get(1);
      const s = t[len].get(code);
      if (s !== undefined) return s;
    }
    return 0;
  }
}

// ---------------------------------------------------------------- decode --
interface Gain { points: number; lev: number[]; loc: number[] }
const newGains = (): Gain[] => Array.from({ length: 4 }, () => ({ points: 0, lev: [0, 0, 0, 0, 0, 0, 0], loc: [0, 0, 0, 0, 0, 0, 0] }));
interface Tonal { pos: number; coefs: Float32Array; count: number }

class Unit {
  prev = new Float32Array(SAMPLES);
  gainSwitch = 0;
  gains = [newGains(), newGains()];
  spectrum = new Float32Array(SAMPLES);
  imdctBuf = new Float32Array(512);
  delay1 = new Float32Array(46);
  delay2 = new Float32Array(46);
  delay3 = new Float32Array(46);
  tonal: Tonal[] = Array.from({ length: 64 }, () => ({ pos: 0, coefs: new Float32Array(8), count: 0 }));
}

function readMantissas(g: Bits, selector: number, clc: number, out: Int32Array, count: number): void {
  if (selector === 1) count >>= 1;
  if (clc) {
    const bits = CLC_LENGTH[selector];
    if (selector > 1) for (let i = 0; i < count; i++) out[i] = bits ? g.sget(bits) : 0;
    else for (let i = 0; i < count; i++) { const c = bits ? g.get(bits) : 0; out[i * 2] = MANTISSA_CLC[c >> 2]; out[i * 2 + 1] = MANTISSA_CLC[c & 3]; }
  } else if (selector !== 1) {
    for (let i = 0; i < count; i++) out[i] = g.vlc(VLC[selector - 1]);
  } else {
    for (let i = 0; i < count; i++) { const h = g.vlc(VLC[0]); out[i * 2] = MANTISSA_VLC[h * 2]; out[i * 2 + 1] = MANTISSA_VLC[h * 2 + 1]; }
  }
}

const mant = new Int32Array(128);

function decodeSpectrum(g: Bits, out: Float32Array): number {
  const subbands = g.get(5), clc = g.get(1);
  const sel: number[] = [], sf: number[] = [];
  for (let i = 0; i <= subbands; i++) sel[i] = g.get(3);
  for (let i = 0; i <= subbands; i++) if (sel[i]) sf[i] = g.get(6);
  let i = 0;
  for (; i <= subbands; i++) {
    let first = SUBBAND[i];
    const last = SUBBAND[i + 1], size = last - first;
    if (sel[i]) {
      readMantissas(g, sel[i], clc, mant, size);
      const scale = f32(SF[sf[i]] * INV_MAX_QUANT[sel[i]]);
      for (let j = 0; first < last; first++, j++) out[first] = mant[j] * scale;
    } else out.fill(0, first, last);
  }
  out.fill(0, SUBBAND[i]);
  return subbands;
}

function decodeTonal(g: Bits, tonal: Tonal[], bands: number): number {
  const n = g.get(5);
  if (!n) return 0;
  const selector = g.get(2);
  if (selector === 2) throw new Error('ATRAC3: tonal coding mode 2');
  let mode = selector & 1, count = 0;
  const flags = [0, 0, 0, 0], m = new Int32Array(8);
  for (let i = 0; i < n; i++) {
    for (let b = 0; b <= bands; b++) flags[b] = g.get(1);
    const perComponent = g.get(3), step = g.get(3);
    if (step <= 1) throw new Error('ATRAC3: tonal quant step ' + step);
    if (selector === 3) mode = g.get(1);
    for (let b = 0; b < (bands + 1) * 4; b++) {
      if (!flags[b >> 2]) continue;
      const coded = g.get(3);
      for (let c = 0; c < coded; c++) {
        const sfi = g.get(6);
        if (count >= 64) throw new Error('ATRAC3: more than 64 tonal components');
        const t = tonal[count];
        t.pos = b * 64 + g.get(6);
        const values = Math.min(SAMPLES - t.pos, perComponent + 1);
        const scale = f32(SF[sfi] * INV_MAX_QUANT[step]);
        readMantissas(g, step, mode, m, values);
        t.count = values;
        for (let k = 0; k < values; k++) t.coefs[k] = m[k] * scale;
        count++;
      }
    }
  }
  return count;
}

function decodeGains(g: Bits, gains: Gain[], bands: number): void {
  let b = 0;
  for (; b <= bands; b++) {
    const k = gains[b];
    k.points = g.get(3);
    for (let j = 0; j < k.points; j++) {
      k.lev[j] = g.get(4); k.loc[j] = g.get(5);
      if (j && k.loc[j] <= k.loc[j - 1]) throw new Error('ATRAC3: gain points out of order');
    }
  }
  for (; b < 4; b++) gains[b].points = 0;
}

/** ff_atrac_gain_compensation: 256 samples of `out` from the IMDCT's first half and the delay, the second half kept */
function gainCompensation(inp: Float32Array, prev: Float32Array, prevAt: number, now: Gain, next: Gain, out: Float32Array, outAt: number): void {
  const scale = next.points ? GAIN_LEV[next.lev[0]] : 1;
  let pos = 0;
  if (!now.points) {
    for (; pos < 256; pos++) out[outAt + pos] = inp[pos] * scale + prev[prevAt + pos];
  } else {
    for (let i = 0; i < now.points; i++) {
      const lastpos = now.loc[i] << 3;
      let lev = GAIN_LEV[now.lev[i]];
      const inc = GAIN_INC[(i + 1 < now.points ? now.lev[i + 1] : 4) - now.lev[i] + 15];
      for (; pos < lastpos; pos++) out[outAt + pos] = f32((inp[pos] * scale + prev[prevAt + pos]) * lev);
      for (; pos < lastpos + 8; pos++) { out[outAt + pos] = f32((inp[pos] * scale + prev[prevAt + pos]) * lev); lev = f32(lev * inc); }
    }
    for (; pos < 256; pos++) out[outAt + pos] = inp[pos] * scale + prev[prevAt + pos];
  }
  for (let i = 0; i < 256; i++) prev[prevAt + i] = inp[256 + i];
}

function decodeUnit(g: Bits, u: Unit, out: Float32Array, jsSecond: boolean): void {
  if (jsSecond) { if (g.get(2) !== 3) throw new Error('ATRAC3: joint stereo unit id is not 3'); }
  else if (g.get(6) !== 0x28) throw new Error('ATRAC3: sound unit id is not 0x28');
  const now = u.gains[u.gainSwitch], next = u.gains[1 - u.gainSwitch];
  const coded = g.get(2);
  decodeGains(g, next, coded);
  const components = decodeTonal(g, u.tonal, coded);
  const subbands = decodeSpectrum(g, u.spectrum);
  let lastTonal = -1;
  for (let i = 0; i < components; i++) {
    const t = u.tonal[i];
    lastTonal = Math.max(lastTonal, t.pos + t.count);
    for (let j = 0; j < t.count; j++) u.spectrum[t.pos + j] += t.coefs[j];
  }
  let bands = (SUBBAND[subbands + 1] - 1) >> 8;
  if (lastTonal >= 0) bands = Math.max((lastTonal + 256) >> 8, bands);
  for (let band = 0; band < 4; band++) {
    if (band <= bands) {
      if (band & 1) {
        // the odd bands reversed before the IMDCT (the QMF's mirrored spectrum)
        const s = u.spectrum, o = band * 256;
        for (let i = 0; i < 128; i++) { const t = s[o + i]; s[o + i] = s[o + 255 - i]; s[o + 255 - i] = t; }
      }
      imdct(u.spectrum, band * 256, u.imdctBuf);
      for (let i = 0; i < 512; i++) u.imdctBuf[i] = f32(u.imdctBuf[i] * MDCT_WINDOW[i]);
    } else u.imdctBuf.fill(0);
    gainCompensation(u.imdctBuf, u.prev, band * 256, now[band], next[band], out, band * 256);
  }
  u.gainSwitch ^= 1;
}

/** ff_atrac_iqmf: the two halves of a band pair back into one, delay kept */
const temp = new Float32Array(46 + 2 * 512);
function iqmf(lo: Float32Array, loAt: number, hi: Float32Array, hiAt: number, n: number, out: Float32Array, outAt: number, delay: Float32Array): void {
  temp.set(delay, 0);
  for (let i = 0; i < n; i += 2) {
    temp[46 + 2 * i] = lo[loAt + i] + hi[hiAt + i];
    temp[46 + 2 * i + 1] = lo[loAt + i] - hi[hiAt + i];
    temp[46 + 2 * i + 2] = lo[loAt + i + 1] + hi[hiAt + i + 1];
    temp[46 + 2 * i + 3] = lo[loAt + i + 1] - hi[hiAt + i + 1];
  }
  for (let j = 0, p = 0; j < n; j++, p += 2) {
    let s1 = 0, s2 = 0;
    for (let i = 0; i < 48; i += 2) { s1 = f32(s1 + temp[p + i] * QMF_WINDOW[i]); s2 = f32(s2 + temp[p + i + 1] * QMF_WINDOW[i + 1]); }
    out[outAt + 2 * j] = s2;
    out[outAt + 2 * j + 1] = s1;
  }
  delay.set(temp.subarray(n * 2, n * 2 + 46));
}

const INTERP = (a: number, b: number, n: number) => a + n * 0.125 * (b - a);

function reverseMatrixing(su1: Float32Array, su2: Float32Array, prev: number[], cur: number[]): void {
  for (let i = 0, band = 0; band < 1024; band += 256, i++) {
    const s1 = prev[i], s2 = cur[i];
    let n = band;
    if (s1 !== s2) {
      const m1l = MATRIX_COEFFS[s1 * 2], m1r = MATRIX_COEFFS[s1 * 2 + 1], m2l = MATRIX_COEFFS[s2 * 2], m2r = MATRIX_COEFFS[s2 * 2 + 1];
      for (; n < band + 8; n++) {
        const c1 = su1[n], c2 = su2[n];
        const v = c1 * INTERP(m1l, m2l, n - band) + c2 * INTERP(m1r, m2r, n - band);
        su1[n] = v; su2[n] = c1 * 2 - v;
      }
    }
    for (; n < band + 256; n++) {
      const c1 = su1[n], c2 = su2[n];
      if (s2 === 0) { su1[n] = c2 * 2; su2[n] = (c1 - c2) * 2; }
      else if (s2 === 1) { su1[n] = (c1 + c2) * 2; su2[n] = c2 * -2; }
      else { su1[n] = c1 + c2; su2[n] = c1 - c2; }
    }
  }
}

function weights(index: number, flag: number): [number, number] {
  if (index === 7) return [1, 1];
  const a = (index & 7) / 7, b = Math.sqrt(2 - a * a);
  return flag ? [b, a] : [a, b];
}

function channelWeighting(su1: Float32Array, su2: Float32Array, p: number[]): void {
  if (p[1] === 7 && p[3] === 7) return;
  const w0 = weights(p[1], p[0]), w1 = weights(p[3], p[2]);
  for (let band = 256; band < 1024; band += 256) {
    let n = band;
    for (; n < band + 8; n++) { su1[n] *= INTERP(w0[0], w0[1], n - band); su2[n] *= INTERP(w1[0], w1[1], n - band); }
    for (; n < band + 256; n++) { su1[n] *= w1[0]; su2[n] *= w1[1]; }
  }
}

export interface Atrac3Config {
  channels: number;
  /** a frame's bytes, all channels (0x60, 0x98 or 0xC0 a channel) */
  blockAlign: number;
  jointStereo: boolean;
}

/**
 * Decode `data` (whole frames back to back), every channel's samples from the
 * first frame on - the encoder's delay is the caller's to skip. The waveform
 * is vgmstream's: FFmpeg's inverted (see the IMDCT).
 */
export function decodeAtrac3(data: Uint8Array, cfg: Atrac3Config): Float32Array[] {
  const { channels, blockAlign, jointStereo } = cfg;
  if (channels < 1 || channels > 8 || blockAlign <= 0 || blockAlign > 4096) throw new Error('ATRAC3: ' + channels + ' channels, ' + blockAlign + ' byte frames');
  if (jointStereo && channels % 2) throw new Error('ATRAC3: joint stereo of ' + channels + ' channels');
  const frames = Math.floor(data.length / blockAlign);
  const out = Array.from({ length: channels }, () => new Float32Array(frames * SAMPLES));
  const units = Array.from({ length: channels }, () => new Unit());
  const frame = Array.from({ length: channels }, () => new Float32Array(SAMPLES));
  const pairs = Array.from({ length: Math.max(1, channels >> 1) }, () => ({
    weighting: [0, 7, 0, 7, 0, 7], prev: [3, 3, 3, 3], now: [3, 3, 3, 3], next: [3, 3, 3, 3],
  }));
  const rev = new Uint8Array(blockAlign);
  for (let f = 0; f < frames; f++) {
    const base = f * blockAlign;
    if (jointStereo) {
      const pairAlign = (blockAlign / channels) * 2;
      for (let ch = 0; ch < channels; ch += 2) {
        const js = pairs[ch >> 1], at = base + (ch >> 1) * pairAlign;
        decodeUnit(new Bits(data, at, at + pairAlign), units[ch], frame[ch], false);
        // the second unit is written byte-reversed from the pair's end, after sync bytes 0xF8
        for (let i = 0; i < pairAlign; i++) rev[i] = data[at + pairAlign - 1 - i];
        let p = 0;
        for (let i = 4; rev[p] === 0xf8; i++, p++) if (i >= pairAlign) throw new Error('ATRAC3: joint stereo sync runs past the frame');
        const g = new Bits(rev, p, pairAlign);
        js.weighting.copyWithin(0, 2);
        js.weighting[4] = g.get(1);
        js.weighting[5] = g.get(3);
        for (let i = 0; i < 4; i++) { js.prev[i] = js.now[i]; js.now[i] = js.next[i]; js.next[i] = g.get(2); }
        decodeUnit(g, units[ch + 1], frame[ch + 1], true);
        reverseMatrixing(frame[ch], frame[ch + 1], js.prev, js.now);
        channelWeighting(frame[ch], frame[ch + 1], js.weighting);
      }
    } else {
      const unitSize = blockAlign / channels;
      for (let ch = 0; ch < channels; ch++) {
        const at = base + ch * unitSize;
        decodeUnit(new Bits(data, at, at + unitSize), units[ch], frame[ch], false);
      }
    }
    for (let ch = 0; ch < channels; ch++) {
      const p = frame[ch], u = units[ch];
      iqmf(p, 0, p, 256, 256, p, 0, u.delay1);
      iqmf(p, 768, p, 512, 256, p, 512, u.delay2);
      iqmf(p, 0, p, 512, 512, p, 0, u.delay3);
      const o = out[ch];
      o.set(p, f * SAMPLES);
    }
  }
  return out;
}

// -------------------------------------------------------------------- MSF --
/** Sony's MSF (vgmstream's msf.c): "MSF" + a version, codec, channels, data size, rate, flags, loop; data from 0x40 */
export interface MsfInfo {
  version: string;
  codec: number;
  channels: number;
  sampleRate: number;
  dataSize: number;
  /** ATRAC3: the frame's bytes, all channels */
  blockAlign: number;
  /** samples after the encoder delay (ATRAC3) */
  samples: number;
  /** -1: does not loop */
  loopStart: number;
  loopEnd: number;
  /** ATRAC3: the samples skipped at the start (1,162, or 0 where a loop starts before it) */
  delay: number;
}

export const MSF_CODECS: Record<number, string> = { 0: 'PCM16 BE', 1: 'PCM16 LE', 2: 'PCM float', 3: 'PS-ADPCM', 4: 'ATRAC3', 5: 'ATRAC3', 6: 'ATRAC3', 7: 'MP3' };

export const isMsf = (b: Uint8Array) => b.length >= 0x40 && b[0] === 0x4d && b[1] === 0x53 && b[2] === 0x46;

export function readMsf(b: Uint8Array): MsfInfo {
  if (!isMsf(b)) throw new Error('not an MSF');
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const codec = dv.getUint32(4, false), channels = dv.getInt32(8, false);
  let dataSize = dv.getUint32(0x0c, false);
  if (dataSize === 0xffffffff) dataSize = b.length - 0x40;
  let sampleRate = dv.getInt32(0x10, false);
  const flags = dv.getUint32(0x14, false);
  const loops = flags !== 0xffffffff && (flags & 3) !== 0;
  const loopStartBytes = loops ? dv.getUint32(0x18, false) : 0, loopEndBytes = loops ? loopStartBytes + dv.getUint32(0x1c, false) : 0;
  let blockAlign = 0, samples = 0, loopStart = -1, loopEnd = -1, delay = 0;
  if (codec >= 4 && codec <= 6) {
    if (sampleRate === -1) sampleRate = 44100;
    blockAlign = (codec === 4 ? 0x60 : codec === 5 ? 0x98 : 0xc0) * channels;
    const toSamples = (n: number) => Math.floor(n / blockAlign) * SAMPLES;
    delay = SAMPLES + 69 * 2;
    if (loops && delay > toSamples(loopStartBytes)) delay = 0;
    samples = toSamples(dataSize) - delay;
    if (loops) { loopStart = toSamples(loopStartBytes) - delay; loopEnd = toSamples(loopEndBytes) - delay; }
  }
  return { version: String.fromCharCode(b[3]), codec, channels, sampleRate: sampleRate || 48000, dataSize, blockAlign, samples, loopStart, loopEnd, delay };
}

/** an ATRAC3 MSF decoded, the encoder's delay skipped, cut to its samples */
export function decodeMsfAtrac3(b: Uint8Array): Float32Array[] {
  const m = readMsf(b);
  if (m.codec < 4 || m.codec > 6) throw new Error('MSF codec ' + m.codec + ' (' + (MSF_CODECS[m.codec] ?? '?') + ') is not ATRAC3');
  const pcm = decodeAtrac3(b.subarray(0x40, 0x40 + m.dataSize), { channels: m.channels, blockAlign: m.blockAlign, jointStereo: m.codec === 4 && m.channels > 1 });
  return pcm.map((c) => c.slice(m.delay, m.delay + Math.max(0, m.samples)));
}
