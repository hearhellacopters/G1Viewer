const $edae1f=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",3453453658,"\u0000");export const VERSION = $edae1f[0];
export const TexFormat = Object.freeze({
    [$edae1f[1]]: 0,
    [$edae1f[2]]: 1,
    [$edae1f[3]]: 2, [$edae1f[4]]: 3, [$edae1f[5]]: 4,
    [$edae1f[6]]: 5, [$edae1f[7]]: 6, [$edae1f[8]]: 7, [$edae1f[9]]: 8,
    [$edae1f[10]]: 9, [$edae1f[11]]: 10, [$edae1f[12]]: 11,
    [$edae1f[13]]: 12, [$edae1f[14]]: 13, [$edae1f[15]]: 14, [$edae1f[16]]: 15,
    [$edae1f[17]]: 16, [$edae1f[18]]: 17, [$edae1f[19]]: 18, [$edae1f[20]]: 19,
    [$edae1f[21]]: 20, [$edae1f[22]]: 21,
    [$edae1f[23]]: 22, [$edae1f[24]]: 23,
    [$edae1f[25]]: 24, [$edae1f[26]]: 25,
    [$edae1f[27]]: 26, [$edae1f[28]]: 27, [$edae1f[29]]: 28, [$edae1f[30]]: 29, [$edae1f[31]]: 30,
    [$edae1f[32]]: 31, [$edae1f[33]]: 32, [$edae1f[34]]: 33, [$edae1f[35]]: 34, [$edae1f[36]]: 35,
    [$edae1f[37]]: 36, [$edae1f[38]]: 37, [$edae1f[39]]: 38, [$edae1f[40]]: 39,
    [$edae1f[41]]: 40, [$edae1f[42]]: 41, [$edae1f[43]]: 42,
    [$edae1f[44]]: 43, [$edae1f[45]]: 44, [$edae1f[46]]: 45,
    [$edae1f[47]]: 46, [$edae1f[48]]: 47,
    [$edae1f[49]]: 48, [$edae1f[50]]: 49, [$edae1f[51]]: 50, [$edae1f[52]]: 51, [$edae1f[53]]: 52,
    [$edae1f[54]]: 53, [$edae1f[55]]: 54, [$edae1f[56]]: 55,
    [$edae1f[57]]: 56, [$edae1f[58]]: 57, [$edae1f[59]]: 58,
    [$edae1f[60]]: 59, [$edae1f[61]]: 60, [$edae1f[62]]: 61, [$edae1f[63]]: 62, [$edae1f[64]]: 63,
});
export const SwizzleMode = Object.freeze({
    [$edae1f[65]]: 0,
    [$edae1f[66]]: 1,
    [$edae1f[67]]: 2,
    [$edae1f[68]]: 3,
    [$edae1f[69]]: 4,
    [$edae1f[70]]: 5,
    [$edae1f[71]]: 6,
    [$edae1f[72]]: 7,
    [$edae1f[73]]: 8,
    [$edae1f[74]]: 9,
    [$edae1f[75]]: 10,
});
export const PS5TileMode = Object.freeze({
    [$edae1f[76]]: 0,
    [$edae1f[77]]: 1,
    [$edae1f[78]]: 5,
    [$edae1f[79]]: 9,
    [$edae1f[80]]: 0x100,
});
export const SwitchBlockHeightAuto = 0xFFFFFFFF;
export const X360Endian = Object.freeze({
    [$edae1f[81]]: 0,
    [$edae1f[65]]: 0x100,
    [$edae1f[82]]: 0x200,
    [$edae1f[83]]: 0x300,
    [$edae1f[84]]: 0x400,
});
export const X360LoaderRows = 0x10000;
export const PaletteFormat = Object.freeze({
    [$edae1f[85]]: 0, [$edae1f[86]]: 1, [$edae1f[87]]: 2,
});
export const PixelProfile = Object.freeze({
    [$edae1f[1]]: 0,
    [$edae1f[88]]: 1, [$edae1f[89]]: 2, [$edae1f[90]]: 3, [$edae1f[91]]: 4,
    [$edae1f[92]]: 5, [$edae1f[93]]: 6, [$edae1f[94]]: 7, [$edae1f[95]]: 8, [$edae1f[96]]: 9, [$edae1f[97]]: 10,
    [$edae1f[98]]: 11, [$edae1f[99]]: 12, [$edae1f[100]]: 13, [$edae1f[101]]: 14, [$edae1f[102]]: 15, [$edae1f[103]]: 16,
    [$edae1f[104]]: 17, [$edae1f[105]]: 18, [$edae1f[106]]: 19, [$edae1f[107]]: 20, [$edae1f[108]]: 21, [$edae1f[109]]: 22,
    [$edae1f[2]]: 23, [$edae1f[110]]: 24, [$edae1f[111]]: 25, [$edae1f[112]]: 26, [$edae1f[113]]: 27, [$edae1f[114]]: 28,
    [$edae1f[86]]: 29, [$edae1f[115]]: 30, [$edae1f[116]]: 31, [$edae1f[117]]: 32,
    [$edae1f[118]]: 33, [$edae1f[119]]: 34,
    [$edae1f[120]]: 35, [$edae1f[121]]: 36, [$edae1f[122]]: 37, [$edae1f[123]]: 38, [$edae1f[124]]: 39, [$edae1f[125]]: 40,
    [$edae1f[126]]: 41, [$edae1f[127]]: 42, [$edae1f[128]]: 43,
    [$edae1f[129]]: 44, [$edae1f[130]]: 45, [$edae1f[131]]: 46, [$edae1f[132]]: 47, [$edae1f[133]]: 48, [$edae1f[134]]: 49,
    [$edae1f[135]]: 50, [$edae1f[136]]: 51, [$edae1f[137]]: 52, [$edae1f[138]]: 53,
    [$edae1f[139]]: 54, [$edae1f[140]]: 55, [$edae1f[141]]: 56, [$edae1f[142]]: 57, [$edae1f[143]]: 58,
    [$edae1f[144]]: 59, [$edae1f[145]]: 60, [$edae1f[146]]: 61, [$edae1f[147]]: 62, [$edae1f[148]]: 63,
    [$edae1f[149]]: 64, [$edae1f[150]]: 65, [$edae1f[151]]: 66, [$edae1f[152]]: 67, [$edae1f[153]]: 68,
    [$edae1f[154]]: 69, [$edae1f[155]]: 70, [$edae1f[156]]: 71, [$edae1f[157]]: 72,
});
export const TexResult = Object.freeze({
    [$edae1f[158]]: 0,
    [$edae1f[159]]: -1,
    [$edae1f[160]]: -2,
    [$edae1f[161]]: -3,
    [$edae1f[162]]: -4,
    [$edae1f[163]]: -5,
    [$edae1f[164]]: -6,
    [$edae1f[165]]: -7,
});
export class TexCodecError extends Error {
    constructor(operation, code, detail) {
        super(`${$edae1f[166]}${operation}${$edae1f[167]}${detail ?? $edae1f[170]}${$edae1f[168]}${code}${$edae1f[169]}`);
        this.name = $edae1f[171];
        this.code = code;
    }
}
let defaultModulePromise = null;
function withInput(mod, bytes, fn) {
    const ptr = mod._malloc(bytes.byteLength);
    if (!ptr)
        throw new TexCodecError($edae1f[172], TexResult.OUT_OF_MEMORY, $edae1f[173]);
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
    return `${$edae1f[174]}${fmt}`;
}
export class TexDecoder {
    constructor(owner) { this._owner = owner; }
    async decode(format, data, width, height) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const out = mod._texc_decode_alloc(format, src, data.byteLength, width, height);
            if (!out)
                throwResult(mod, `${$edae1f[175]}${formatName(format)}${$edae1f[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$edae1f[176]}${formatName(format)}${$edae1f[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$edae1f[177]}${formatName(format)}${$edae1f[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$edae1f[178]}${formatName(format)}${$edae1f[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$edae1f[179]}${formatName(format)}${$edae1f[169]}`, TexResult.INVALID_ARG);
            const dst = mod._malloc(encSize);
            if (!dst)
                throwResult(mod, $edae1f[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_encode_with_options(format, src, rgba.byteLength, width, height, dst, encSize, threshold);
                if (rc !== TexResult.OK)
                    throwResult(mod, `${$edae1f[179]}${formatName(format)}${$edae1f[169]}`, rc);
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
    async surfaceLayout(mode, format, width, height, mipCount, { sliceCount = 1, arg = 0, depth = 1 } = {}) {
        const mod = await this._owner._mod();
        const ptr = mod._malloc(k_layoutSize);
        try {
            const rc = depth > 1
                ? mod._texc_get_volume_layout(mode, format, width, height, depth, mipCount, arg, ptr)
                : mod._texc_get_surface_layout(mode, format, width, height, mipCount, sliceCount, arg, ptr);
            if (rc !== 0)
                throwResult(mod, $edae1f[180], rc);
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
                throwResult(mod, $edae1f[181], rc);
            return mod.getValue(ptr, $edae1f[182]) >>> 0;
        }
        finally {
            mod._free(ptr);
        }
    }
    async defaultPS5TileMode(format, width, height) {
        const mod = await this._owner._mod();
        return mod._texc_ps5_default_tile_mode(format, width, height) >>> 0;
    }
    async unswizzleMip(mode, format, surface, width, height, mipCount, mip, { sliceCount = 1, slice = 0, arg = 0, depth = 1 } = {}) {
        const mod = await this._owner._mod();
        return withInput(mod, surface, (src) => {
            const sizePtr = mod._malloc(4);
            try {
                const out = depth > 1
                    ? mod._texc_unswizzle_volume_mip_alloc(mode, format, src, surface.byteLength, width, height, depth, mipCount, arg, mip, sizePtr)
                    : mod._texc_unswizzle_mip_alloc(mode, format, src, surface.byteLength, width, height, mipCount, sliceCount, arg, mip, slice, sizePtr);
                if (!out)
                    throwResult(mod, $edae1f[183], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $edae1f[182]) >>> 0;
                const bytes = mod.HEAPU8.slice(out, out + size);
                mod._texc_free(out);
                return bytes;
            }
            finally {
                mod._free(sizePtr);
            }
        });
    }
    async reswizzleMip(mode, format, surface, mipData, width, height, mipCount, mip, { sliceCount = 1, slice = 0, arg = 0, depth = 1 } = {}) {
        const mod = await this._owner._mod();
        return withInput(mod, mipData, (src) => {
            const surf = mod._malloc(surface.byteLength || 1);
            try {
                mod.HEAPU8.set(surface, surf);
                const rc = depth > 1
                    ? mod._texc_reswizzle_volume_mip(mode, format, width, height, depth, mipCount, arg, mip, src, mipData.byteLength, surf, surface.byteLength)
                    : mod._texc_reswizzle_mip(mode, format, width, height, mipCount, sliceCount, arg, mip, slice, src, mipData.byteLength, surf, surface.byteLength);
                if (rc !== 0)
                    throwResult(mod, $edae1f[184], rc);
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
                    throwResult(mod, toLinear ? $edae1f[185] : $edae1f[186], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $edae1f[182]) >>> 0;
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
function readU32(mod, ptr) { return mod.getValue(ptr, $edae1f[182]) >>> 0; }
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
            depth: mu(44) || 1,
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
            throwResult(mod, $edae1f[187], TexResult.INVALID_ARG);
        const count = pixelCount ?? Math.floor(data.byteLength / sbpp);
        return withInput(mod, data, (src) => {
            const outSize = count * dbpp;
            const dst = mod._malloc(outSize);
            if (!dst)
                throwResult(mod, $edae1f[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_convert_profile(srcProfile, src, data.byteLength, dstProfile, dst, outSize, count);
                if (rc !== TexResult.OK)
                    throwResult(mod, $edae1f[187], rc);
                return mod.HEAPU8.slice(dst, dst + outSize);
            }
            finally {
                mod._free(dst);
            }
        });
    }
    async flipY(data, width, height, bytesPerPixel = 4) {
        return this._flip($edae1f[188], data, width, height, bytesPerPixel);
    }
    async flipX(data, width, height, bytesPerPixel = 4) {
        return this._flip($edae1f[189], data, width, height, bytesPerPixel);
    }
    async _flip(fn, data, width, height, bytesPerPixel) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const size = width * height * bytesPerPixel;
            const dst = mod._malloc(size);
            if (!dst)
                throwResult(mod, $edae1f[172], TexResult.OUT_OF_MEMORY);
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
                throwResult(mod, $edae1f[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_crop(src, data.byteLength, width, height, bytesPerPixel, x, y, cropWidth, cropHeight, dst, size);
                if (rc !== TexResult.OK)
                    throwResult(mod, $edae1f[190], rc);
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
        defaultModulePromise ??= import(new URL($edae1f[191], import.meta.url).href)
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
            throw new TexCodecError($edae1f[192], TexResult.UNSUPPORTED, `${$edae1f[193]}${VERSION}${$edae1f[194]}${binary}`);
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
                throwResult(mod, $edae1f[195], rc);
            return {
                width: mod.getValue(buf, $edae1f[182]),
                height: mod.getValue(buf + 4, $edae1f[182]),
                bytes: mod.getValue(buf + 8, $edae1f[182]),
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
    TexEncoder.prototype[`${$edae1f[196]}${name}`] = function (width, height) {
        return this.encodedSize(fmt, width, height);
    };
    if (name.startsWith($edae1f[197]))
        continue;
    TexDecoder.prototype[`${$edae1f[198]}${name}`] = function (data, width, height) {
        return this.decode(fmt, data, width, height);
    };
    TexDecoder.prototype[`${$edae1f[199]}${name}`] = function (data, width, height) {
        return this.decodeF32(fmt, data, width, height);
    };
    TexEncoder.prototype[`${$edae1f[200]}${name}`] =
        function (rgba, width, height, options) {
            return this.encode(fmt, rgba, width, height, options);
        };
}
const k_modeNames = Object.freeze({
    [$edae1f[66]]: $edae1f[66], [$edae1f[67]]: $edae1f[67], [$edae1f[68]]: $edae1f[201], [$edae1f[75]]: $edae1f[202],
    [$edae1f[69]]: $edae1f[203], [$edae1f[70]]: $edae1f[70],
    [$edae1f[71]]: $edae1f[71], [$edae1f[72]]: $edae1f[72], [$edae1f[73]]: $edae1f[204], [$edae1f[74]]: $edae1f[74],
});
for (const [key, pretty] of Object.entries(k_modeNames)) {
    const mode = SwizzleMode[key];
    TexSwizzler.prototype[`${$edae1f[185]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.unswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$edae1f[186]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.reswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$edae1f[205]}${pretty}`] =
        function (format, width, height, arg = 0) {
            return this.swizzledSize(mode, format, width, height, arg);
        };
    TexDecoder.prototype[`${$edae1f[206]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.decodeSwizzled(mode, format, data, width, height, arg);
        };
}
