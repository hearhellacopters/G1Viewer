const $eddb2b=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",2695128471,"\u0000");export const VERSION = $eddb2b[0];
export const TexFormat = Object.freeze({
    [$eddb2b[1]]: 0,
    [$eddb2b[2]]: 1,
    [$eddb2b[3]]: 2, [$eddb2b[4]]: 3, [$eddb2b[5]]: 4,
    [$eddb2b[6]]: 5, [$eddb2b[7]]: 6, [$eddb2b[8]]: 7, [$eddb2b[9]]: 8,
    [$eddb2b[10]]: 9, [$eddb2b[11]]: 10, [$eddb2b[12]]: 11,
    [$eddb2b[13]]: 12, [$eddb2b[14]]: 13, [$eddb2b[15]]: 14, [$eddb2b[16]]: 15,
    [$eddb2b[17]]: 16, [$eddb2b[18]]: 17, [$eddb2b[19]]: 18, [$eddb2b[20]]: 19,
    [$eddb2b[21]]: 20, [$eddb2b[22]]: 21,
    [$eddb2b[23]]: 22, [$eddb2b[24]]: 23,
    [$eddb2b[25]]: 24, [$eddb2b[26]]: 25,
    [$eddb2b[27]]: 26, [$eddb2b[28]]: 27, [$eddb2b[29]]: 28, [$eddb2b[30]]: 29, [$eddb2b[31]]: 30,
    [$eddb2b[32]]: 31, [$eddb2b[33]]: 32, [$eddb2b[34]]: 33, [$eddb2b[35]]: 34, [$eddb2b[36]]: 35,
    [$eddb2b[37]]: 36, [$eddb2b[38]]: 37, [$eddb2b[39]]: 38, [$eddb2b[40]]: 39,
    [$eddb2b[41]]: 40, [$eddb2b[42]]: 41, [$eddb2b[43]]: 42,
    [$eddb2b[44]]: 43, [$eddb2b[45]]: 44, [$eddb2b[46]]: 45,
    [$eddb2b[47]]: 46, [$eddb2b[48]]: 47,
    [$eddb2b[49]]: 48, [$eddb2b[50]]: 49, [$eddb2b[51]]: 50, [$eddb2b[52]]: 51, [$eddb2b[53]]: 52,
    [$eddb2b[54]]: 53, [$eddb2b[55]]: 54, [$eddb2b[56]]: 55,
    [$eddb2b[57]]: 56, [$eddb2b[58]]: 57, [$eddb2b[59]]: 58,
});
export const SwizzleMode = Object.freeze({
    [$eddb2b[60]]: 0,
    [$eddb2b[61]]: 1,
    [$eddb2b[62]]: 2,
    [$eddb2b[63]]: 3,
    [$eddb2b[64]]: 4,
    [$eddb2b[65]]: 5,
    [$eddb2b[66]]: 6,
    [$eddb2b[67]]: 7,
    [$eddb2b[68]]: 8,
    [$eddb2b[69]]: 9,
});
export const PS5TileMode = Object.freeze({
    [$eddb2b[70]]: 0,
    [$eddb2b[71]]: 1,
    [$eddb2b[72]]: 5,
    [$eddb2b[73]]: 9,
    [$eddb2b[74]]: 0x100,
});
export const SwitchBlockHeightAuto = 0xFFFFFFFF;
export const PaletteFormat = Object.freeze({
    [$eddb2b[75]]: 0, [$eddb2b[76]]: 1, [$eddb2b[77]]: 2,
});
export const PixelProfile = Object.freeze({
    [$eddb2b[1]]: 0,
    [$eddb2b[78]]: 1, [$eddb2b[79]]: 2, [$eddb2b[80]]: 3, [$eddb2b[81]]: 4,
    [$eddb2b[82]]: 5, [$eddb2b[83]]: 6, [$eddb2b[84]]: 7, [$eddb2b[85]]: 8, [$eddb2b[86]]: 9, [$eddb2b[87]]: 10,
    [$eddb2b[88]]: 11, [$eddb2b[89]]: 12, [$eddb2b[90]]: 13, [$eddb2b[91]]: 14, [$eddb2b[92]]: 15, [$eddb2b[93]]: 16,
    [$eddb2b[94]]: 17, [$eddb2b[95]]: 18, [$eddb2b[96]]: 19, [$eddb2b[97]]: 20, [$eddb2b[98]]: 21, [$eddb2b[99]]: 22,
    [$eddb2b[2]]: 23, [$eddb2b[100]]: 24, [$eddb2b[101]]: 25, [$eddb2b[102]]: 26, [$eddb2b[103]]: 27, [$eddb2b[104]]: 28,
    [$eddb2b[76]]: 29, [$eddb2b[105]]: 30, [$eddb2b[106]]: 31, [$eddb2b[107]]: 32,
    [$eddb2b[108]]: 33, [$eddb2b[109]]: 34,
    [$eddb2b[110]]: 35, [$eddb2b[111]]: 36, [$eddb2b[112]]: 37, [$eddb2b[113]]: 38, [$eddb2b[114]]: 39, [$eddb2b[115]]: 40,
    [$eddb2b[116]]: 41, [$eddb2b[117]]: 42, [$eddb2b[118]]: 43,
    [$eddb2b[119]]: 44, [$eddb2b[120]]: 45, [$eddb2b[121]]: 46, [$eddb2b[122]]: 47, [$eddb2b[123]]: 48, [$eddb2b[124]]: 49,
    [$eddb2b[125]]: 50, [$eddb2b[126]]: 51, [$eddb2b[127]]: 52, [$eddb2b[128]]: 53,
    [$eddb2b[129]]: 54, [$eddb2b[130]]: 55, [$eddb2b[131]]: 56, [$eddb2b[132]]: 57, [$eddb2b[133]]: 58,
    [$eddb2b[134]]: 59, [$eddb2b[135]]: 60, [$eddb2b[136]]: 61, [$eddb2b[137]]: 62, [$eddb2b[138]]: 63,
    [$eddb2b[139]]: 64, [$eddb2b[140]]: 65, [$eddb2b[141]]: 66, [$eddb2b[142]]: 67, [$eddb2b[143]]: 68,
    [$eddb2b[144]]: 69, [$eddb2b[145]]: 70, [$eddb2b[146]]: 71, [$eddb2b[147]]: 72,
});
export const TexResult = Object.freeze({
    [$eddb2b[148]]: 0,
    [$eddb2b[149]]: -1,
    [$eddb2b[150]]: -2,
    [$eddb2b[151]]: -3,
    [$eddb2b[152]]: -4,
    [$eddb2b[153]]: -5,
    [$eddb2b[154]]: -6,
    [$eddb2b[155]]: -7,
});
export class TexCodecError extends Error {
    constructor(operation, code, detail) {
        super(`${$eddb2b[156]}${operation}${$eddb2b[157]}${detail ?? $eddb2b[160]}${$eddb2b[158]}${code}${$eddb2b[159]}`);
        this.name = $eddb2b[161];
        this.code = code;
    }
}
let defaultModulePromise = null;
function withInput(mod, bytes, fn) {
    const ptr = mod._malloc(bytes.byteLength);
    if (!ptr)
        throw new TexCodecError($eddb2b[162], TexResult.OUT_OF_MEMORY, $eddb2b[163]);
    try {
        mod.HEAPU8.set(bytes, ptr);
        return fn(ptr);
    }
    finally {
        mod._free(ptr);
    }
}
function throwResult(mod, operation, code) {
    const strPtr = mod._texc_result_str(code);
    throw new TexCodecError(operation, code, strPtr ? mod.UTF8ToString(strPtr) : undefined);
}
function formatName(fmt) {
    for (const [k, v] of Object.entries(TexFormat))
        if (v === fmt)
            return k;
    return `${$eddb2b[164]}${fmt}`;
}
export class TexDecoder {
    constructor(owner) { this._owner = owner; }
    async decode(format, data, width, height) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const out = mod._texc_decode_alloc(format, src, data.byteLength, width, height);
            if (!out)
                throwResult(mod, `${$eddb2b[165]}${formatName(format)}${$eddb2b[159]}`, mod._texc_last_error());
            const rgba = mod.HEAPU8.slice(out, out + width * height * 4);
            mod._texc_free(out);
            return rgba;
        });
    }
    async decodeF32(format, data, width, height) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const out = mod._texc_decode_f32_alloc(format, src, data.byteLength, width, height);
            if (!out)
                throwResult(mod, `${$eddb2b[166]}${formatName(format)}${$eddb2b[159]}`, mod._texc_last_error());
            const px = new Float32Array(mod.HEAPF32.buffer.slice(out, out + width * height * 16));
            mod._texc_free(out);
            return px;
        });
    }
    async decodeSwizzled(mode, format, data, width, height, arg = 0) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const out = mod._texc_decode_swizzled_alloc(mode, format, src, data.byteLength, width, height, arg);
            if (!out)
                throwResult(mod, `${$eddb2b[167]}${formatName(format)}${$eddb2b[159]}`, mod._texc_last_error());
            const rgba = mod.HEAPU8.slice(out, out + width * height * 4);
            mod._texc_free(out);
            return rgba;
        });
    }
    async paletteSize(format) {
        return (await this._owner._mod())._texc_palette_size(format);
    }
    async decodePaletted(format, data, width, height, palette, paletteFormat) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => withInput(mod, palette, (pal) => {
            const out = mod._texc_decode_paletted_alloc(format, src, data.byteLength, width, height, pal, palette.byteLength, paletteFormat);
            if (!out)
                throwResult(mod, `${$eddb2b[168]}${formatName(format)}${$eddb2b[159]}`, mod._texc_last_error());
            const rgba = mod.HEAPU8.slice(out, out + width * height * 4);
            mod._texc_free(out);
            return rgba;
        }));
    }
}
export class TexEncoder {
    constructor(owner) { this._owner = owner; }
    async encodedSize(format, width, height) {
        const mod = await this._owner._mod();
        return mod._texc_encoded_size(format, width, height);
    }
    async encode(format, rgba, width, height, options = {}) {
        const mod = await this._owner._mod();
        const threshold = options.alphaThreshold ?? 128;
        return withInput(mod, rgba, (src) => {
            const encSize = mod._texc_encoded_size(format, width, height);
            if (!encSize)
                throwResult(mod, `${$eddb2b[169]}${formatName(format)}${$eddb2b[159]}`, TexResult.INVALID_ARG);
            const dst = mod._malloc(encSize);
            if (!dst)
                throwResult(mod, $eddb2b[162], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_encode_with_options(format, src, rgba.byteLength, width, height, dst, encSize, threshold);
                if (rc !== TexResult.OK)
                    throwResult(mod, `${$eddb2b[169]}${formatName(format)}${$eddb2b[159]}`, rc);
                return mod.HEAPU8.slice(dst, dst + encSize);
            }
            finally {
                mod._free(dst);
            }
        });
    }
}
export class TexSwizzler {
    constructor(owner) { this._owner = owner; }
    async swizzledSize(mode, format, width, height, arg = 0) {
        const mod = await this._owner._mod();
        return mod._texc_swizzled_size(mode, format, width, height, arg);
    }
    async unswizzledSize(mode, format, width, height, arg = 0) {
        const mod = await this._owner._mod();
        return mod._texc_unswizzled_size(mode, format, width, height, arg);
    }
    async unswizzle(mode, format, data, width, height, arg = 0) {
        return this._convert(mode, format, data, width, height, arg, 1);
    }
    async reswizzle(mode, format, data, width, height, arg = 0) {
        return this._convert(mode, format, data, width, height, arg, 0);
    }
    async swizzle(mode, format, data, width, height, arg = 0) {
        return this.reswizzle(mode, format, data, width, height, arg);
    }
    async surfaceLayout(mode, format, width, height, mipCount, { sliceCount = 1, arg = 0 } = {}) {
        const mod = await this._owner._mod();
        const ptr = mod._malloc(k_layoutSize);
        try {
            const rc = mod._texc_get_surface_layout(mode, format, width, height, mipCount, sliceCount, arg, ptr);
            if (rc !== 0)
                throwResult(mod, $eddb2b[170], rc);
            return readLayout(mod, ptr);
        }
        finally {
            mod._free(ptr);
        }
    }
    async detectPS5TileMode(format, width, height, mipCount, dataSize, { sliceCount = 1 } = {}) {
        const mod = await this._owner._mod();
        const ptr = mod._malloc(4);
        try {
            const rc = mod._texc_ps5_detect_tile_mode(format, width, height, mipCount, sliceCount, BigInt(dataSize), ptr);
            if (rc !== 0)
                throwResult(mod, $eddb2b[171], rc);
            return mod.getValue(ptr, $eddb2b[172]) >>> 0;
        }
        finally {
            mod._free(ptr);
        }
    }
    async defaultPS5TileMode(format, width, height) {
        const mod = await this._owner._mod();
        return mod._texc_ps5_default_tile_mode(format, width, height) >>> 0;
    }
    async unswizzleMip(mode, format, surface, width, height, mipCount, mip, { sliceCount = 1, slice = 0, arg = 0 } = {}) {
        const mod = await this._owner._mod();
        return withInput(mod, surface, (src) => {
            const sizePtr = mod._malloc(4);
            try {
                const out = mod._texc_unswizzle_mip_alloc(mode, format, src, surface.byteLength, width, height, mipCount, sliceCount, arg, mip, slice, sizePtr);
                if (!out)
                    throwResult(mod, $eddb2b[173], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $eddb2b[172]) >>> 0;
                const bytes = mod.HEAPU8.slice(out, out + size);
                mod._texc_free(out);
                return bytes;
            }
            finally {
                mod._free(sizePtr);
            }
        });
    }
    async reswizzleMip(mode, format, surface, mipData, width, height, mipCount, mip, { sliceCount = 1, slice = 0, arg = 0 } = {}) {
        const mod = await this._owner._mod();
        return withInput(mod, mipData, (src) => {
            const surf = mod._malloc(surface.byteLength || 1);
            try {
                mod.HEAPU8.set(surface, surf);
                const rc = mod._texc_reswizzle_mip(mode, format, width, height, mipCount, sliceCount, arg, mip, slice, src, mipData.byteLength, surf, surface.byteLength);
                if (rc !== 0)
                    throwResult(mod, $eddb2b[174], rc);
                return mod.HEAPU8.slice(surf, surf + surface.byteLength);
            }
            finally {
                mod._free(surf);
            }
        });
    }
    async _convert(mode, format, data, width, height, arg, toLinear) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const sizePtr = mod._malloc(4);
            try {
                const out = mod._texc_swizzle_alloc(mode, format, src, data.byteLength, width, height, arg, toLinear, sizePtr);
                if (!out)
                    throwResult(mod, toLinear ? $eddb2b[175] : $eddb2b[176], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $eddb2b[172]) >>> 0;
                const bytes = mod.HEAPU8.slice(out, out + size);
                mod._texc_free(out);
                return bytes;
            }
            finally {
                mod._free(sizePtr);
            }
        });
    }
}
const k_mipLayoutSize = 48;
const k_layoutSize = 48 + 16 * k_mipLayoutSize;
function readU32(mod, ptr) { return mod.getValue(ptr, $eddb2b[172]) >>> 0; }
function readU64(mod, ptr) {
    return readU32(mod, ptr + 4) * 4294967296 + readU32(mod, ptr);
}
function readLayout(mod, p) {
    const u32 = (o) => readU32(mod, p + o);
    const mipCount = u32(0);
    const mips = [];
    for (let i = 0; i < mipCount; i++) {
        const m = p + 48 + i * k_mipLayoutSize;
        const mu = (o) => readU32(mod, m + o);
        mips.push({
            width: mu(0), height: mu(4), paddedWidth: mu(8), paddedHeight: mu(12),
            offset: readU64(mod, m + 16), size: readU64(mod, m + 24),
            inTail: mu(32) !== 0, tailX: mu(36), tailY: mu(40),
        });
    }
    return {
        mipCount, sliceCount: u32(4), firstMipInTail: u32(8),
        blockWidth: u32(12), blockHeight: u32(16), blockBytes: u32(20),
        elementBytes: u32(24), sliceSize: readU64(mod, p + 32),
        totalSize: readU64(mod, p + 40), mips,
    };
}
export class TexImage {
    constructor(owner) { this._owner = owner; }
    async profileBytesPerPixel(profile) {
        const mod = await this._owner._mod();
        return mod._texc_profile_bytes_per_pixel(profile);
    }
    async convertProfile(srcProfile, dstProfile, data, pixelCount) {
        const mod = await this._owner._mod();
        const sbpp = mod._texc_profile_bytes_per_pixel(srcProfile);
        const dbpp = mod._texc_profile_bytes_per_pixel(dstProfile);
        if (!sbpp || !dbpp)
            throwResult(mod, $eddb2b[177], TexResult.INVALID_ARG);
        const count = pixelCount ?? Math.floor(data.byteLength / sbpp);
        return withInput(mod, data, (src) => {
            const outSize = count * dbpp;
            const dst = mod._malloc(outSize);
            if (!dst)
                throwResult(mod, $eddb2b[162], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_convert_profile(srcProfile, src, data.byteLength, dstProfile, dst, outSize, count);
                if (rc !== TexResult.OK)
                    throwResult(mod, $eddb2b[177], rc);
                return mod.HEAPU8.slice(dst, dst + outSize);
            }
            finally {
                mod._free(dst);
            }
        });
    }
    async flipY(data, width, height, bytesPerPixel = 4) {
        return this._flip($eddb2b[178], data, width, height, bytesPerPixel);
    }
    async flipX(data, width, height, bytesPerPixel = 4) {
        return this._flip($eddb2b[179], data, width, height, bytesPerPixel);
    }
    async _flip(fn, data, width, height, bytesPerPixel) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const size = width * height * bytesPerPixel;
            const dst = mod._malloc(size);
            if (!dst)
                throwResult(mod, $eddb2b[162], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod[fn](src, data.byteLength, dst, size, width, height, bytesPerPixel);
                if (rc !== TexResult.OK)
                    throwResult(mod, fn.slice(6), rc);
                return mod.HEAPU8.slice(dst, dst + size);
            }
            finally {
                mod._free(dst);
            }
        });
    }
    async crop(data, width, height, bytesPerPixel, x, y, cropWidth, cropHeight) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const size = cropWidth * cropHeight * bytesPerPixel;
            const dst = mod._malloc(size);
            if (!dst)
                throwResult(mod, $eddb2b[162], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_crop(src, data.byteLength, width, height, bytesPerPixel, x, y, cropWidth, cropHeight, dst, size);
                if (rc !== TexResult.OK)
                    throwResult(mod, $eddb2b[180], rc);
                return mod.HEAPU8.slice(dst, dst + size);
            }
            finally {
                mod._free(dst);
            }
        });
    }
}
export class TexCodec {
    constructor(module) {
        this.module = module;
        this.decoder = new TexDecoder(this);
        this.encoder = new TexEncoder(this);
        this.swizzler = new TexSwizzler(this);
        this.image = new TexImage(this);
    }
    static async load(options = {}) {
        if (options.factory)
            return new TexCodec(await options.factory());
        if (options.moduleUrl) {
            const factory = (await import(options.moduleUrl.toString())).default;
            return new TexCodec(await factory());
        }
        defaultModulePromise ??= import(new URL($eddb2b[181], import.meta.url).href)
            .then((m) => m.default());
        return new TexCodec(await defaultModulePromise);
    }
    async version() {
        const mod = await this._mod();
        const v = mod._texc_version();
        return {
            major: v >>> 16,
            minor: (v >>> 8) & 0xff,
            patch: v & 0xff,
            string: mod.UTF8ToString(mod._texc_version_string()),
            wrapper: VERSION,
        };
    }
    async buildInfo() {
        const mod = await this._mod();
        return mod.UTF8ToString(mod._texc_build_info());
    }
    async checkVersion(options = {}) {
        const { string: binary } = await this.version();
        const ok = binary === VERSION;
        if (!ok && options.throwOnMismatch)
            throw new TexCodecError($eddb2b[182], TexResult.UNSUPPORTED, `${$eddb2b[183]}${VERSION}${$eddb2b[184]}${binary}`);
        return ok;
    }
    async formatName(format) {
        const mod = await this._mod();
        const p = mod._texc_format_name(format);
        return p ? mod.UTF8ToString(p) : null;
    }
    async blockDims(format) {
        const mod = await this._mod();
        const buf = mod._malloc(12);
        try {
            const rc = mod._texc_block_dims(format, buf, buf + 4, buf + 8);
            if (rc !== TexResult.OK)
                throwResult(mod, $eddb2b[185], rc);
            return {
                width: mod.getValue(buf, $eddb2b[172]),
                height: mod.getValue(buf + 4, $eddb2b[172]),
                bytes: mod.getValue(buf + 8, $eddb2b[172]),
            };
        }
        finally {
            mod._free(buf);
        }
    }
    async _mod() { return this.module; }
}
for (const [name, fmt] of Object.entries(TexFormat)) {
    if (fmt === TexFormat.INVALID)
        continue;
    TexDecoder.prototype[`${$eddb2b[186]}${name}`] = function (data, width, height) {
        return this.decode(fmt, data, width, height);
    };
    TexDecoder.prototype[`${$eddb2b[187]}${name}`] = function (data, width, height) {
        return this.decodeF32(fmt, data, width, height);
    };
    TexEncoder.prototype[`${$eddb2b[188]}${name}`] =
        function (rgba, width, height, options) {
            return this.encode(fmt, rgba, width, height, options);
        };
    TexEncoder.prototype[`${$eddb2b[189]}${name}`] = function (width, height) {
        return this.encodedSize(fmt, width, height);
    };
}
const k_modeNames = Object.freeze({
    [$eddb2b[61]]: $eddb2b[61], [$eddb2b[62]]: $eddb2b[62], [$eddb2b[63]]: $eddb2b[190], [$eddb2b[64]]: $eddb2b[191], [$eddb2b[65]]: $eddb2b[65],
    [$eddb2b[66]]: $eddb2b[66], [$eddb2b[67]]: $eddb2b[67], [$eddb2b[68]]: $eddb2b[192], [$eddb2b[69]]: $eddb2b[69],
});
for (const [key, pretty] of Object.entries(k_modeNames)) {
    const mode = SwizzleMode[key];
    TexSwizzler.prototype[`${$eddb2b[175]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.unswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$eddb2b[176]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.reswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$eddb2b[193]}${pretty}`] =
        function (format, width, height, arg = 0) {
            return this.swizzledSize(mode, format, width, height, arg);
        };
    TexDecoder.prototype[`${$eddb2b[194]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.decodeSwizzled(mode, format, data, width, height, arg);
        };
}
