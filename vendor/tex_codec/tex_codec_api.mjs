const $76f54a=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",813138765,"\u0000");export const VERSION = $76f54a[0];
export const TexFormat = Object.freeze({
    [$76f54a[1]]: 0,
    [$76f54a[2]]: 1,
    [$76f54a[3]]: 2, [$76f54a[4]]: 3, [$76f54a[5]]: 4,
    [$76f54a[6]]: 5, [$76f54a[7]]: 6, [$76f54a[8]]: 7, [$76f54a[9]]: 8,
    [$76f54a[10]]: 9, [$76f54a[11]]: 10, [$76f54a[12]]: 11,
    [$76f54a[13]]: 12, [$76f54a[14]]: 13, [$76f54a[15]]: 14, [$76f54a[16]]: 15,
    [$76f54a[17]]: 16, [$76f54a[18]]: 17, [$76f54a[19]]: 18, [$76f54a[20]]: 19,
    [$76f54a[21]]: 20, [$76f54a[22]]: 21,
    [$76f54a[23]]: 22, [$76f54a[24]]: 23,
    [$76f54a[25]]: 24, [$76f54a[26]]: 25,
    [$76f54a[27]]: 26, [$76f54a[28]]: 27, [$76f54a[29]]: 28, [$76f54a[30]]: 29, [$76f54a[31]]: 30,
    [$76f54a[32]]: 31, [$76f54a[33]]: 32, [$76f54a[34]]: 33, [$76f54a[35]]: 34, [$76f54a[36]]: 35,
    [$76f54a[37]]: 36, [$76f54a[38]]: 37, [$76f54a[39]]: 38, [$76f54a[40]]: 39,
    [$76f54a[41]]: 40, [$76f54a[42]]: 41, [$76f54a[43]]: 42,
    [$76f54a[44]]: 43, [$76f54a[45]]: 44, [$76f54a[46]]: 45,
    [$76f54a[47]]: 46, [$76f54a[48]]: 47,
    [$76f54a[49]]: 48, [$76f54a[50]]: 49, [$76f54a[51]]: 50, [$76f54a[52]]: 51, [$76f54a[53]]: 52,
    [$76f54a[54]]: 53, [$76f54a[55]]: 54, [$76f54a[56]]: 55,
    [$76f54a[57]]: 56, [$76f54a[58]]: 57, [$76f54a[59]]: 58,
});
export const SwizzleMode = Object.freeze({
    [$76f54a[60]]: 0,
    [$76f54a[61]]: 1,
    [$76f54a[62]]: 2,
    [$76f54a[63]]: 3,
    [$76f54a[64]]: 4,
    [$76f54a[65]]: 5,
    [$76f54a[66]]: 6,
    [$76f54a[67]]: 7,
    [$76f54a[68]]: 8,
    [$76f54a[69]]: 9,
});
export const PS5TileMode = Object.freeze({
    [$76f54a[70]]: 0,
    [$76f54a[71]]: 1,
    [$76f54a[72]]: 5,
    [$76f54a[73]]: 9,
    [$76f54a[74]]: 0x100,
});
export const SwitchBlockHeightAuto = 0xFFFFFFFF;
export const PaletteFormat = Object.freeze({
    [$76f54a[75]]: 0, [$76f54a[76]]: 1, [$76f54a[77]]: 2,
});
export const PixelProfile = Object.freeze({
    [$76f54a[1]]: 0,
    [$76f54a[78]]: 1, [$76f54a[79]]: 2, [$76f54a[80]]: 3, [$76f54a[81]]: 4,
    [$76f54a[82]]: 5, [$76f54a[83]]: 6, [$76f54a[84]]: 7, [$76f54a[85]]: 8, [$76f54a[86]]: 9, [$76f54a[87]]: 10,
    [$76f54a[88]]: 11, [$76f54a[89]]: 12, [$76f54a[90]]: 13, [$76f54a[91]]: 14, [$76f54a[92]]: 15, [$76f54a[93]]: 16,
    [$76f54a[94]]: 17, [$76f54a[95]]: 18, [$76f54a[96]]: 19, [$76f54a[97]]: 20, [$76f54a[98]]: 21, [$76f54a[99]]: 22,
    [$76f54a[2]]: 23, [$76f54a[100]]: 24, [$76f54a[101]]: 25, [$76f54a[102]]: 26, [$76f54a[103]]: 27, [$76f54a[104]]: 28,
    [$76f54a[76]]: 29, [$76f54a[105]]: 30, [$76f54a[106]]: 31, [$76f54a[107]]: 32,
    [$76f54a[108]]: 33, [$76f54a[109]]: 34,
    [$76f54a[110]]: 35, [$76f54a[111]]: 36, [$76f54a[112]]: 37, [$76f54a[113]]: 38, [$76f54a[114]]: 39, [$76f54a[115]]: 40,
    [$76f54a[116]]: 41, [$76f54a[117]]: 42, [$76f54a[118]]: 43,
    [$76f54a[119]]: 44, [$76f54a[120]]: 45, [$76f54a[121]]: 46, [$76f54a[122]]: 47, [$76f54a[123]]: 48, [$76f54a[124]]: 49,
    [$76f54a[125]]: 50, [$76f54a[126]]: 51, [$76f54a[127]]: 52, [$76f54a[128]]: 53,
    [$76f54a[129]]: 54, [$76f54a[130]]: 55, [$76f54a[131]]: 56, [$76f54a[132]]: 57, [$76f54a[133]]: 58,
    [$76f54a[134]]: 59, [$76f54a[135]]: 60, [$76f54a[136]]: 61, [$76f54a[137]]: 62, [$76f54a[138]]: 63,
    [$76f54a[139]]: 64, [$76f54a[140]]: 65, [$76f54a[141]]: 66, [$76f54a[142]]: 67, [$76f54a[143]]: 68,
    [$76f54a[144]]: 69, [$76f54a[145]]: 70, [$76f54a[146]]: 71, [$76f54a[147]]: 72,
});
export const TexResult = Object.freeze({
    [$76f54a[148]]: 0,
    [$76f54a[149]]: -1,
    [$76f54a[150]]: -2,
    [$76f54a[151]]: -3,
    [$76f54a[152]]: -4,
    [$76f54a[153]]: -5,
    [$76f54a[154]]: -6,
    [$76f54a[155]]: -7,
});
export class TexCodecError extends Error {
    constructor(operation, code, detail) {
        super(`${$76f54a[156]}${operation}${$76f54a[157]}${detail ?? $76f54a[160]}${$76f54a[158]}${code}${$76f54a[159]}`);
        this.name = $76f54a[161];
        this.code = code;
    }
}
let defaultModulePromise = null;
function withInput(mod, bytes, fn) {
    const ptr = mod._malloc(bytes.byteLength);
    if (!ptr)
        throw new TexCodecError($76f54a[162], TexResult.OUT_OF_MEMORY, $76f54a[163]);
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
    return `${$76f54a[164]}${fmt}`;
}
export class TexDecoder {
    constructor(owner) { this._owner = owner; }
    async decode(format, data, width, height) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const out = mod._texc_decode_alloc(format, src, data.byteLength, width, height);
            if (!out)
                throwResult(mod, `${$76f54a[165]}${formatName(format)}${$76f54a[159]}`, mod._texc_last_error());
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
                throwResult(mod, `${$76f54a[166]}${formatName(format)}${$76f54a[159]}`, mod._texc_last_error());
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
                throwResult(mod, `${$76f54a[167]}${formatName(format)}${$76f54a[159]}`, mod._texc_last_error());
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
                throwResult(mod, `${$76f54a[168]}${formatName(format)}${$76f54a[159]}`, mod._texc_last_error());
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
                throwResult(mod, `${$76f54a[169]}${formatName(format)}${$76f54a[159]}`, TexResult.INVALID_ARG);
            const dst = mod._malloc(encSize);
            if (!dst)
                throwResult(mod, $76f54a[162], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_encode_with_options(format, src, rgba.byteLength, width, height, dst, encSize, threshold);
                if (rc !== TexResult.OK)
                    throwResult(mod, `${$76f54a[169]}${formatName(format)}${$76f54a[159]}`, rc);
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
                throwResult(mod, $76f54a[170], rc);
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
                throwResult(mod, $76f54a[171], rc);
            return mod.getValue(ptr, $76f54a[172]) >>> 0;
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
                    throwResult(mod, $76f54a[173], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $76f54a[172]) >>> 0;
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
                    throwResult(mod, $76f54a[174], rc);
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
                    throwResult(mod, toLinear ? $76f54a[175] : $76f54a[176], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $76f54a[172]) >>> 0;
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
function readU32(mod, ptr) { return mod.getValue(ptr, $76f54a[172]) >>> 0; }
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
            throwResult(mod, $76f54a[177], TexResult.INVALID_ARG);
        const count = pixelCount ?? Math.floor(data.byteLength / sbpp);
        return withInput(mod, data, (src) => {
            const outSize = count * dbpp;
            const dst = mod._malloc(outSize);
            if (!dst)
                throwResult(mod, $76f54a[162], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_convert_profile(srcProfile, src, data.byteLength, dstProfile, dst, outSize, count);
                if (rc !== TexResult.OK)
                    throwResult(mod, $76f54a[177], rc);
                return mod.HEAPU8.slice(dst, dst + outSize);
            }
            finally {
                mod._free(dst);
            }
        });
    }
    async flipY(data, width, height, bytesPerPixel = 4) {
        return this._flip($76f54a[178], data, width, height, bytesPerPixel);
    }
    async flipX(data, width, height, bytesPerPixel = 4) {
        return this._flip($76f54a[179], data, width, height, bytesPerPixel);
    }
    async _flip(fn, data, width, height, bytesPerPixel) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const size = width * height * bytesPerPixel;
            const dst = mod._malloc(size);
            if (!dst)
                throwResult(mod, $76f54a[162], TexResult.OUT_OF_MEMORY);
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
                throwResult(mod, $76f54a[162], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_crop(src, data.byteLength, width, height, bytesPerPixel, x, y, cropWidth, cropHeight, dst, size);
                if (rc !== TexResult.OK)
                    throwResult(mod, $76f54a[180], rc);
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
        defaultModulePromise ??= import(new URL($76f54a[181], import.meta.url).href)
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
            throw new TexCodecError($76f54a[182], TexResult.UNSUPPORTED, `${$76f54a[183]}${VERSION}${$76f54a[184]}${binary}`);
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
                throwResult(mod, $76f54a[185], rc);
            return {
                width: mod.getValue(buf, $76f54a[172]),
                height: mod.getValue(buf + 4, $76f54a[172]),
                bytes: mod.getValue(buf + 8, $76f54a[172]),
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
    TexDecoder.prototype[`${$76f54a[186]}${name}`] = function (data, width, height) {
        return this.decode(fmt, data, width, height);
    };
    TexDecoder.prototype[`${$76f54a[187]}${name}`] = function (data, width, height) {
        return this.decodeF32(fmt, data, width, height);
    };
    TexEncoder.prototype[`${$76f54a[188]}${name}`] =
        function (rgba, width, height, options) {
            return this.encode(fmt, rgba, width, height, options);
        };
    TexEncoder.prototype[`${$76f54a[189]}${name}`] = function (width, height) {
        return this.encodedSize(fmt, width, height);
    };
}
const k_modeNames = Object.freeze({
    [$76f54a[61]]: $76f54a[61], [$76f54a[62]]: $76f54a[62], [$76f54a[63]]: $76f54a[190], [$76f54a[64]]: $76f54a[191], [$76f54a[65]]: $76f54a[65],
    [$76f54a[66]]: $76f54a[66], [$76f54a[67]]: $76f54a[67], [$76f54a[68]]: $76f54a[192], [$76f54a[69]]: $76f54a[69],
});
for (const [key, pretty] of Object.entries(k_modeNames)) {
    const mode = SwizzleMode[key];
    TexSwizzler.prototype[`${$76f54a[175]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.unswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$76f54a[176]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.reswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$76f54a[193]}${pretty}`] =
        function (format, width, height, arg = 0) {
            return this.swizzledSize(mode, format, width, height, arg);
        };
    TexDecoder.prototype[`${$76f54a[194]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.decodeSwizzled(mode, format, data, width, height, arg);
        };
}
