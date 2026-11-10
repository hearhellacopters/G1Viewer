const $0ab2da=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",1435237748,"\u0000");export const VERSION = $0ab2da[0];
export const TexFormat = Object.freeze({
    [$0ab2da[1]]: 0,
    [$0ab2da[2]]: 1,
    [$0ab2da[3]]: 2, [$0ab2da[4]]: 3, [$0ab2da[5]]: 4,
    [$0ab2da[6]]: 5, [$0ab2da[7]]: 6, [$0ab2da[8]]: 7, [$0ab2da[9]]: 8,
    [$0ab2da[10]]: 9, [$0ab2da[11]]: 10, [$0ab2da[12]]: 11,
    [$0ab2da[13]]: 12, [$0ab2da[14]]: 13, [$0ab2da[15]]: 14, [$0ab2da[16]]: 15,
    [$0ab2da[17]]: 16, [$0ab2da[18]]: 17, [$0ab2da[19]]: 18, [$0ab2da[20]]: 19,
    [$0ab2da[21]]: 20, [$0ab2da[22]]: 21,
    [$0ab2da[23]]: 22, [$0ab2da[24]]: 23,
    [$0ab2da[25]]: 24, [$0ab2da[26]]: 25,
    [$0ab2da[27]]: 26, [$0ab2da[28]]: 27, [$0ab2da[29]]: 28, [$0ab2da[30]]: 29, [$0ab2da[31]]: 30,
    [$0ab2da[32]]: 31, [$0ab2da[33]]: 32, [$0ab2da[34]]: 33, [$0ab2da[35]]: 34, [$0ab2da[36]]: 35,
    [$0ab2da[37]]: 36, [$0ab2da[38]]: 37, [$0ab2da[39]]: 38, [$0ab2da[40]]: 39,
    [$0ab2da[41]]: 40, [$0ab2da[42]]: 41, [$0ab2da[43]]: 42,
    [$0ab2da[44]]: 43, [$0ab2da[45]]: 44, [$0ab2da[46]]: 45,
    [$0ab2da[47]]: 46, [$0ab2da[48]]: 47,
    [$0ab2da[49]]: 48, [$0ab2da[50]]: 49, [$0ab2da[51]]: 50, [$0ab2da[52]]: 51, [$0ab2da[53]]: 52,
    [$0ab2da[54]]: 53, [$0ab2da[55]]: 54, [$0ab2da[56]]: 55,
    [$0ab2da[57]]: 56, [$0ab2da[58]]: 57, [$0ab2da[59]]: 58,
    [$0ab2da[60]]: 59, [$0ab2da[61]]: 60, [$0ab2da[62]]: 61, [$0ab2da[63]]: 62, [$0ab2da[64]]: 63,
});
export const SwizzleMode = Object.freeze({
    [$0ab2da[65]]: 0,
    [$0ab2da[66]]: 1,
    [$0ab2da[67]]: 2,
    [$0ab2da[68]]: 3,
    [$0ab2da[69]]: 4,
    [$0ab2da[70]]: 5,
    [$0ab2da[71]]: 6,
    [$0ab2da[72]]: 7,
    [$0ab2da[73]]: 8,
    [$0ab2da[74]]: 9,
    [$0ab2da[75]]: 10,
});
export const PS5TileMode = Object.freeze({
    [$0ab2da[76]]: 0,
    [$0ab2da[77]]: 1,
    [$0ab2da[78]]: 5,
    [$0ab2da[79]]: 9,
    [$0ab2da[80]]: 0x100,
});
export const SwitchBlockHeightAuto = 0xFFFFFFFF;
export const X360Endian = Object.freeze({
    [$0ab2da[81]]: 0,
    [$0ab2da[65]]: 0x100,
    [$0ab2da[82]]: 0x200,
    [$0ab2da[83]]: 0x300,
    [$0ab2da[84]]: 0x400,
});
export const X360LoaderRows = 0x10000;
export const PaletteFormat = Object.freeze({
    [$0ab2da[85]]: 0, [$0ab2da[86]]: 1, [$0ab2da[87]]: 2,
});
export const PixelProfile = Object.freeze({
    [$0ab2da[1]]: 0,
    [$0ab2da[88]]: 1, [$0ab2da[89]]: 2, [$0ab2da[90]]: 3, [$0ab2da[91]]: 4,
    [$0ab2da[92]]: 5, [$0ab2da[93]]: 6, [$0ab2da[94]]: 7, [$0ab2da[95]]: 8, [$0ab2da[96]]: 9, [$0ab2da[97]]: 10,
    [$0ab2da[98]]: 11, [$0ab2da[99]]: 12, [$0ab2da[100]]: 13, [$0ab2da[101]]: 14, [$0ab2da[102]]: 15, [$0ab2da[103]]: 16,
    [$0ab2da[104]]: 17, [$0ab2da[105]]: 18, [$0ab2da[106]]: 19, [$0ab2da[107]]: 20, [$0ab2da[108]]: 21, [$0ab2da[109]]: 22,
    [$0ab2da[2]]: 23, [$0ab2da[110]]: 24, [$0ab2da[111]]: 25, [$0ab2da[112]]: 26, [$0ab2da[113]]: 27, [$0ab2da[114]]: 28,
    [$0ab2da[86]]: 29, [$0ab2da[115]]: 30, [$0ab2da[116]]: 31, [$0ab2da[117]]: 32,
    [$0ab2da[118]]: 33, [$0ab2da[119]]: 34,
    [$0ab2da[120]]: 35, [$0ab2da[121]]: 36, [$0ab2da[122]]: 37, [$0ab2da[123]]: 38, [$0ab2da[124]]: 39, [$0ab2da[125]]: 40,
    [$0ab2da[126]]: 41, [$0ab2da[127]]: 42, [$0ab2da[128]]: 43,
    [$0ab2da[129]]: 44, [$0ab2da[130]]: 45, [$0ab2da[131]]: 46, [$0ab2da[132]]: 47, [$0ab2da[133]]: 48, [$0ab2da[134]]: 49,
    [$0ab2da[135]]: 50, [$0ab2da[136]]: 51, [$0ab2da[137]]: 52, [$0ab2da[138]]: 53,
    [$0ab2da[139]]: 54, [$0ab2da[140]]: 55, [$0ab2da[141]]: 56, [$0ab2da[142]]: 57, [$0ab2da[143]]: 58,
    [$0ab2da[144]]: 59, [$0ab2da[145]]: 60, [$0ab2da[146]]: 61, [$0ab2da[147]]: 62, [$0ab2da[148]]: 63,
    [$0ab2da[149]]: 64, [$0ab2da[150]]: 65, [$0ab2da[151]]: 66, [$0ab2da[152]]: 67, [$0ab2da[153]]: 68,
    [$0ab2da[154]]: 69, [$0ab2da[155]]: 70, [$0ab2da[156]]: 71, [$0ab2da[157]]: 72,
});
export const TexResult = Object.freeze({
    [$0ab2da[158]]: 0,
    [$0ab2da[159]]: -1,
    [$0ab2da[160]]: -2,
    [$0ab2da[161]]: -3,
    [$0ab2da[162]]: -4,
    [$0ab2da[163]]: -5,
    [$0ab2da[164]]: -6,
    [$0ab2da[165]]: -7,
});
export class TexCodecError extends Error {
    constructor(operation, code, detail) {
        super(`${$0ab2da[166]}${operation}${$0ab2da[167]}${detail ?? $0ab2da[170]}${$0ab2da[168]}${code}${$0ab2da[169]}`);
        this.name = $0ab2da[171];
        this.code = code;
    }
}
let defaultModulePromise = null;
function withInput(mod, bytes, fn) {
    const ptr = mod._malloc(bytes.byteLength);
    if (!ptr)
        throw new TexCodecError($0ab2da[172], TexResult.OUT_OF_MEMORY, $0ab2da[173]);
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
    return `${$0ab2da[174]}${fmt}`;
}
export class TexDecoder {
    constructor(owner) { this._owner = owner; }
    async decode(format, data, width, height) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const out = mod._texc_decode_alloc(format, src, data.byteLength, width, height);
            if (!out)
                throwResult(mod, `${$0ab2da[175]}${formatName(format)}${$0ab2da[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$0ab2da[176]}${formatName(format)}${$0ab2da[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$0ab2da[177]}${formatName(format)}${$0ab2da[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$0ab2da[178]}${formatName(format)}${$0ab2da[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$0ab2da[179]}${formatName(format)}${$0ab2da[169]}`, TexResult.INVALID_ARG);
            const dst = mod._malloc(encSize);
            if (!dst)
                throwResult(mod, $0ab2da[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_encode_with_options(format, src, rgba.byteLength, width, height, dst, encSize, threshold);
                if (rc !== TexResult.OK)
                    throwResult(mod, `${$0ab2da[179]}${formatName(format)}${$0ab2da[169]}`, rc);
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
                throwResult(mod, $0ab2da[180], rc);
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
                throwResult(mod, $0ab2da[181], rc);
            return mod.getValue(ptr, $0ab2da[182]) >>> 0;
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
                    throwResult(mod, $0ab2da[183], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $0ab2da[182]) >>> 0;
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
                    throwResult(mod, $0ab2da[184], rc);
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
                    throwResult(mod, toLinear ? $0ab2da[185] : $0ab2da[186], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $0ab2da[182]) >>> 0;
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
function readU32(mod, ptr) { return mod.getValue(ptr, $0ab2da[182]) >>> 0; }
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
            throwResult(mod, $0ab2da[187], TexResult.INVALID_ARG);
        const count = pixelCount ?? Math.floor(data.byteLength / sbpp);
        return withInput(mod, data, (src) => {
            const outSize = count * dbpp;
            const dst = mod._malloc(outSize);
            if (!dst)
                throwResult(mod, $0ab2da[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_convert_profile(srcProfile, src, data.byteLength, dstProfile, dst, outSize, count);
                if (rc !== TexResult.OK)
                    throwResult(mod, $0ab2da[187], rc);
                return mod.HEAPU8.slice(dst, dst + outSize);
            }
            finally {
                mod._free(dst);
            }
        });
    }
    async flipY(data, width, height, bytesPerPixel = 4) {
        return this._flip($0ab2da[188], data, width, height, bytesPerPixel);
    }
    async flipX(data, width, height, bytesPerPixel = 4) {
        return this._flip($0ab2da[189], data, width, height, bytesPerPixel);
    }
    async _flip(fn, data, width, height, bytesPerPixel) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const size = width * height * bytesPerPixel;
            const dst = mod._malloc(size);
            if (!dst)
                throwResult(mod, $0ab2da[172], TexResult.OUT_OF_MEMORY);
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
                throwResult(mod, $0ab2da[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_crop(src, data.byteLength, width, height, bytesPerPixel, x, y, cropWidth, cropHeight, dst, size);
                if (rc !== TexResult.OK)
                    throwResult(mod, $0ab2da[190], rc);
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
        defaultModulePromise ??= import(new URL($0ab2da[191], import.meta.url).href)
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
            throw new TexCodecError($0ab2da[192], TexResult.UNSUPPORTED, `${$0ab2da[193]}${VERSION}${$0ab2da[194]}${binary}`);
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
                throwResult(mod, $0ab2da[195], rc);
            return {
                width: mod.getValue(buf, $0ab2da[182]),
                height: mod.getValue(buf + 4, $0ab2da[182]),
                bytes: mod.getValue(buf + 8, $0ab2da[182]),
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
    TexEncoder.prototype[`${$0ab2da[196]}${name}`] = function (width, height) {
        return this.encodedSize(fmt, width, height);
    };
    if (name.startsWith($0ab2da[197]))
        continue;
    TexDecoder.prototype[`${$0ab2da[198]}${name}`] = function (data, width, height) {
        return this.decode(fmt, data, width, height);
    };
    TexDecoder.prototype[`${$0ab2da[199]}${name}`] = function (data, width, height) {
        return this.decodeF32(fmt, data, width, height);
    };
    TexEncoder.prototype[`${$0ab2da[200]}${name}`] =
        function (rgba, width, height, options) {
            return this.encode(fmt, rgba, width, height, options);
        };
}
const k_modeNames = Object.freeze({
    [$0ab2da[66]]: $0ab2da[66], [$0ab2da[67]]: $0ab2da[67], [$0ab2da[68]]: $0ab2da[201], [$0ab2da[75]]: $0ab2da[202],
    [$0ab2da[69]]: $0ab2da[203], [$0ab2da[70]]: $0ab2da[70],
    [$0ab2da[71]]: $0ab2da[71], [$0ab2da[72]]: $0ab2da[72], [$0ab2da[73]]: $0ab2da[204], [$0ab2da[74]]: $0ab2da[74],
});
for (const [key, pretty] of Object.entries(k_modeNames)) {
    const mode = SwizzleMode[key];
    TexSwizzler.prototype[`${$0ab2da[185]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.unswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$0ab2da[186]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.reswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$0ab2da[205]}${pretty}`] =
        function (format, width, height, arg = 0) {
            return this.swizzledSize(mode, format, width, height, arg);
        };
    TexDecoder.prototype[`${$0ab2da[206]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.decodeSwizzled(mode, format, data, width, height, arg);
        };
}
