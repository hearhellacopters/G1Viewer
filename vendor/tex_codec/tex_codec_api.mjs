const $3d9a46=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("i0xNVGwMPf9qCa+ZQeECX86PzNLbVEpOeeCoGwte3CLIr7YH40rZhONuuVQuNnNG8OOlFiWWCesmlWAyZnBNqkyrt0rPmKdfIrQQ7i8cL3MHUReyVdaz8DO6vHBJhLu+fKcP05vSiEwu3lQpAcJqDnyz9VbtIyDRPVBwzzkfsADyBJ1tm85gzvlIJP6AbVGuAW61TbTqe2GA+hWWaZ/+0YtLIkuLMSQh5OxnbMUaRTilc6lesuwEmgVdKfMlB1//e+BQvPLIENFguPe0vzWlxkCMeduqYwvCci2Cbx9TZSUxkV2Ion9ucKcrXHNvGVD0vwue26gy465j9PUwzy9FeSpvAo+DGFAdz9MxxBN6G8GvL3LKKkesiH+nGNxQSZQo6fW92KD0RBydPdKz+GbvhUGfDZ07Kv6TKgnxsQFbg8PwJ10WbHd0mNawBfLr/PkIUirZXX5iqYEajrMX92hz2ynboWoV8qE6+e/RUyw/4HBtCcwrSxzLOuZ3FEVa1UNhzyQngzSWi/Wg5dBJtA3g1abDWbu/xrjq+vnCMRY6FrUvfQB/vEGT8nqqY3LK7BQoS6a2ZXLu4lvcDuju6oD5PgxpOmgWwWztgoiXe9je7DAy+szbmCiLvazPhKIIb7bAAzWj9lFc4eIlZjTNrSXB0M0R4Z5O+AU8RWmVdw9EKrxcjxN/lPVUmFTsOEXATQjg0X9wiDobNqFLNhgbWAefVCuNE7Aumy14nPJU3R+CEBzWhWyAvH5xT18221/sw1LB/S1G5dy4qCsB4YaUhLMJBi4pWkOvgr96SWtEcDj3dMDc7oxk/j2Ptgv8oNTdv1oHEUWKu24tNXFqoZKd4zNVKUmGAHPuljQG7prDCPHSv87sDRs5tqvCiFquW0yyn3L8VrYBJ+K9Nby8kUWwHMgUtSAVkiKzPiX1DyhCFXNfkyPv9wvlDrqr2aCrceMsaZWWJCftnO63ffD6faFBPEjfzppY5EUEPs7yWeY35HVHLWbqNpIwTRwFcBu9SQ+YA0B5oGMpxhhduGyhTtnv88QPjFAxn1qSZDOL8I10arweM1QVgTylguhze3AzLF2q9ent0rulnHkNO3dlTltmTVPc0g09HQCNN6Y7REabYIff93egz9P1YGH//s14Vr+/Xnrj2eiIi3hW16Rtl//wicylpApbxfON7rTjFdupnQECXIav9b8bw1LzcnYrve67buOYcp11+49i8bYYch/TObPVQM3QqsVHyokzV51WrrYfR4ZJIbEmKwBdDTSeaYBCzwMw6rNBKPKCBHbjfD2mibQwqFnWr8hGJDyORNGAd/0H51UmXjmmkYa7OhWl/1JuNSscjmeUMjXCUEJrnq/4Ma/JVxt7IepGn+sZH2lo7bQacEXdoADvNXGOfYlE7DPsW4/aVpTw9tp3ex4iz88GdQyvNdOuXnIkKnV1MLCMPnPsoOwtKvKLzpCIXNJ0r3gBc1NunnPZY6JzMxuHyq8o5j4L2WG0gaB9K7Lg+3ge3GfxVbLLpgD+tqAa9UVzHgCfuhlJJgcpGYXK+BJ7I/Y4Eo0UC8IAhWox6CjcXIgGtuFNEopa5f+e6gBekZxA9+zwa4jv5lBYnKOiIVpkjYWttvPTVIkJxx6U9Zh69Gs9a9AipJUsGQbiD7fwdNeZW+c5sABjQpad29CudQhPp0EiYkAFXhFPMwYW4dJ5l3ZtNFjW80javGzVK4yPbkgBzm3J5jWZN2f1ID1Ot63+4ZmjrkElxhXSNuZ11OGSs4ShKDagSzfr40yQHSR95TcruG9ykR3V1gmLgujtJCFqCg0l+iZ0cwe6hJ4bcoYinwCThYM2jk3YP23RejL9WtLmD9jp1GtFYjE+tu8BjYrG0k+su5MsJ+ugGEp1+wyvFiy4NtSjrLPkBclQay8KwggtPbTf2NzPg+UNlf4pwccPYeSujDFQUoacryv0lSxVIafPuxR4+0XfoFAm4J4z9iMJG/5GTmAc2A3isb/Fk6Nsv/Hh28yvvUzI8MC9jfJorEZcYiMeqUoNFQTGfWbyKBnlmS7M83wwOYwoTqkmgfCdRhYr8WLYtVboxkigBx7/Mui92e3p8nUENLC8Fpt4tyMuv8co5TxWRMs2bbNXrgllp1WruwJXiWCj+QvR7bjvKVqbyXHt5axklnbITruRB7xZD7V7UrgJ0GIciZj2/79ta05Se3TN+cms/GJNGlqwPUOcOHLI4tINu9/0M4gnVZy5rRRsw8txm+d1d7prTIQH4Ee21UgI6WVn1ifRGvX8pJ7m6Ocb5ujRzeyTGpuvz2yzdB9L/JmAcgIygR6/LddKJTdi9PPpVupyVnZR/KnXTH3HvPeY",1876845603,"\u0000");export const VERSION = $3d9a46[0];
export const TexFormat = Object.freeze({
    [$3d9a46[1]]: 0,
    [$3d9a46[2]]: 1,
    [$3d9a46[3]]: 2, [$3d9a46[4]]: 3, [$3d9a46[5]]: 4,
    [$3d9a46[6]]: 5, [$3d9a46[7]]: 6, [$3d9a46[8]]: 7, [$3d9a46[9]]: 8,
    [$3d9a46[10]]: 9, [$3d9a46[11]]: 10, [$3d9a46[12]]: 11,
    [$3d9a46[13]]: 12, [$3d9a46[14]]: 13, [$3d9a46[15]]: 14, [$3d9a46[16]]: 15,
    [$3d9a46[17]]: 16, [$3d9a46[18]]: 17, [$3d9a46[19]]: 18, [$3d9a46[20]]: 19,
    [$3d9a46[21]]: 20, [$3d9a46[22]]: 21,
    [$3d9a46[23]]: 22, [$3d9a46[24]]: 23,
    [$3d9a46[25]]: 24, [$3d9a46[26]]: 25,
    [$3d9a46[27]]: 26, [$3d9a46[28]]: 27, [$3d9a46[29]]: 28, [$3d9a46[30]]: 29, [$3d9a46[31]]: 30,
    [$3d9a46[32]]: 31, [$3d9a46[33]]: 32, [$3d9a46[34]]: 33, [$3d9a46[35]]: 34, [$3d9a46[36]]: 35,
    [$3d9a46[37]]: 36, [$3d9a46[38]]: 37, [$3d9a46[39]]: 38, [$3d9a46[40]]: 39,
    [$3d9a46[41]]: 40, [$3d9a46[42]]: 41, [$3d9a46[43]]: 42,
    [$3d9a46[44]]: 43, [$3d9a46[45]]: 44, [$3d9a46[46]]: 45,
    [$3d9a46[47]]: 46, [$3d9a46[48]]: 47,
    [$3d9a46[49]]: 48, [$3d9a46[50]]: 49, [$3d9a46[51]]: 50, [$3d9a46[52]]: 51, [$3d9a46[53]]: 52,
    [$3d9a46[54]]: 53, [$3d9a46[55]]: 54, [$3d9a46[56]]: 55,
    [$3d9a46[57]]: 56, [$3d9a46[58]]: 57, [$3d9a46[59]]: 58,
    [$3d9a46[60]]: 59, [$3d9a46[61]]: 60, [$3d9a46[62]]: 61, [$3d9a46[63]]: 62, [$3d9a46[64]]: 63,
});
export const SwizzleMode = Object.freeze({
    [$3d9a46[65]]: 0,
    [$3d9a46[66]]: 1,
    [$3d9a46[67]]: 2,
    [$3d9a46[68]]: 3,
    [$3d9a46[69]]: 4,
    [$3d9a46[70]]: 5,
    [$3d9a46[71]]: 6,
    [$3d9a46[72]]: 7,
    [$3d9a46[73]]: 8,
    [$3d9a46[74]]: 9,
    [$3d9a46[75]]: 10,
});
export const PS5TileMode = Object.freeze({
    [$3d9a46[76]]: 0,
    [$3d9a46[77]]: 1,
    [$3d9a46[78]]: 5,
    [$3d9a46[79]]: 9,
    [$3d9a46[80]]: 0x100,
});
export const SwitchBlockHeightAuto = 0xFFFFFFFF;
export const X360Endian = Object.freeze({
    [$3d9a46[81]]: 0,
    [$3d9a46[65]]: 0x100,
    [$3d9a46[82]]: 0x200,
    [$3d9a46[83]]: 0x300,
    [$3d9a46[84]]: 0x400,
});
export const X360LoaderRows = 0x10000;
export const PaletteFormat = Object.freeze({
    [$3d9a46[85]]: 0, [$3d9a46[86]]: 1, [$3d9a46[87]]: 2,
});
export const PixelProfile = Object.freeze({
    [$3d9a46[1]]: 0,
    [$3d9a46[88]]: 1, [$3d9a46[89]]: 2, [$3d9a46[90]]: 3, [$3d9a46[91]]: 4,
    [$3d9a46[92]]: 5, [$3d9a46[93]]: 6, [$3d9a46[94]]: 7, [$3d9a46[95]]: 8, [$3d9a46[96]]: 9, [$3d9a46[97]]: 10,
    [$3d9a46[98]]: 11, [$3d9a46[99]]: 12, [$3d9a46[100]]: 13, [$3d9a46[101]]: 14, [$3d9a46[102]]: 15, [$3d9a46[103]]: 16,
    [$3d9a46[104]]: 17, [$3d9a46[105]]: 18, [$3d9a46[106]]: 19, [$3d9a46[107]]: 20, [$3d9a46[108]]: 21, [$3d9a46[109]]: 22,
    [$3d9a46[2]]: 23, [$3d9a46[110]]: 24, [$3d9a46[111]]: 25, [$3d9a46[112]]: 26, [$3d9a46[113]]: 27, [$3d9a46[114]]: 28,
    [$3d9a46[86]]: 29, [$3d9a46[115]]: 30, [$3d9a46[116]]: 31, [$3d9a46[117]]: 32,
    [$3d9a46[118]]: 33, [$3d9a46[119]]: 34,
    [$3d9a46[120]]: 35, [$3d9a46[121]]: 36, [$3d9a46[122]]: 37, [$3d9a46[123]]: 38, [$3d9a46[124]]: 39, [$3d9a46[125]]: 40,
    [$3d9a46[126]]: 41, [$3d9a46[127]]: 42, [$3d9a46[128]]: 43,
    [$3d9a46[129]]: 44, [$3d9a46[130]]: 45, [$3d9a46[131]]: 46, [$3d9a46[132]]: 47, [$3d9a46[133]]: 48, [$3d9a46[134]]: 49,
    [$3d9a46[135]]: 50, [$3d9a46[136]]: 51, [$3d9a46[137]]: 52, [$3d9a46[138]]: 53,
    [$3d9a46[139]]: 54, [$3d9a46[140]]: 55, [$3d9a46[141]]: 56, [$3d9a46[142]]: 57, [$3d9a46[143]]: 58,
    [$3d9a46[144]]: 59, [$3d9a46[145]]: 60, [$3d9a46[146]]: 61, [$3d9a46[147]]: 62, [$3d9a46[148]]: 63,
    [$3d9a46[149]]: 64, [$3d9a46[150]]: 65, [$3d9a46[151]]: 66, [$3d9a46[152]]: 67, [$3d9a46[153]]: 68,
    [$3d9a46[154]]: 69, [$3d9a46[155]]: 70, [$3d9a46[156]]: 71, [$3d9a46[157]]: 72,
});
export const TexResult = Object.freeze({
    [$3d9a46[158]]: 0,
    [$3d9a46[159]]: -1,
    [$3d9a46[160]]: -2,
    [$3d9a46[161]]: -3,
    [$3d9a46[162]]: -4,
    [$3d9a46[163]]: -5,
    [$3d9a46[164]]: -6,
    [$3d9a46[165]]: -7,
});
export class TexCodecError extends Error {
    constructor(operation, code, detail) {
        super(`${$3d9a46[166]}${operation}${$3d9a46[167]}${detail ?? $3d9a46[170]}${$3d9a46[168]}${code}${$3d9a46[169]}`);
        this.name = $3d9a46[171];
        this.code = code;
    }
}
let defaultModulePromise = null;
function withInput(mod, bytes, fn) {
    const ptr = mod._malloc(bytes.byteLength);
    if (!ptr)
        throw new TexCodecError($3d9a46[172], TexResult.OUT_OF_MEMORY, $3d9a46[173]);
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
    return `${$3d9a46[174]}${fmt}`;
}
export class TexDecoder {
    constructor(owner) { this._owner = owner; }
    async decode(format, data, width, height) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const out = mod._texc_decode_alloc(format, src, data.byteLength, width, height);
            if (!out)
                throwResult(mod, `${$3d9a46[175]}${formatName(format)}${$3d9a46[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$3d9a46[176]}${formatName(format)}${$3d9a46[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$3d9a46[177]}${formatName(format)}${$3d9a46[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$3d9a46[178]}${formatName(format)}${$3d9a46[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$3d9a46[179]}${formatName(format)}${$3d9a46[169]}`, TexResult.INVALID_ARG);
            const dst = mod._malloc(encSize);
            if (!dst)
                throwResult(mod, $3d9a46[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_encode_with_options(format, src, rgba.byteLength, width, height, dst, encSize, threshold);
                if (rc !== TexResult.OK)
                    throwResult(mod, `${$3d9a46[179]}${formatName(format)}${$3d9a46[169]}`, rc);
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
                throwResult(mod, $3d9a46[180], rc);
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
                throwResult(mod, $3d9a46[181], rc);
            return mod.getValue(ptr, $3d9a46[182]) >>> 0;
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
                    throwResult(mod, $3d9a46[183], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $3d9a46[182]) >>> 0;
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
                    throwResult(mod, $3d9a46[184], rc);
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
                    throwResult(mod, toLinear ? $3d9a46[185] : $3d9a46[186], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $3d9a46[182]) >>> 0;
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
function readU32(mod, ptr) { return mod.getValue(ptr, $3d9a46[182]) >>> 0; }
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
            throwResult(mod, $3d9a46[187], TexResult.INVALID_ARG);
        const count = pixelCount ?? Math.floor(data.byteLength / sbpp);
        return withInput(mod, data, (src) => {
            const outSize = count * dbpp;
            const dst = mod._malloc(outSize);
            if (!dst)
                throwResult(mod, $3d9a46[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_convert_profile(srcProfile, src, data.byteLength, dstProfile, dst, outSize, count);
                if (rc !== TexResult.OK)
                    throwResult(mod, $3d9a46[187], rc);
                return mod.HEAPU8.slice(dst, dst + outSize);
            }
            finally {
                mod._free(dst);
            }
        });
    }
    async flipY(data, width, height, bytesPerPixel = 4) {
        return this._flip($3d9a46[188], data, width, height, bytesPerPixel);
    }
    async flipX(data, width, height, bytesPerPixel = 4) {
        return this._flip($3d9a46[189], data, width, height, bytesPerPixel);
    }
    async _flip(fn, data, width, height, bytesPerPixel) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const size = width * height * bytesPerPixel;
            const dst = mod._malloc(size);
            if (!dst)
                throwResult(mod, $3d9a46[172], TexResult.OUT_OF_MEMORY);
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
                throwResult(mod, $3d9a46[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_crop(src, data.byteLength, width, height, bytesPerPixel, x, y, cropWidth, cropHeight, dst, size);
                if (rc !== TexResult.OK)
                    throwResult(mod, $3d9a46[190], rc);
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
        defaultModulePromise ??= import(new URL($3d9a46[191], import.meta.url).href)
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
            throw new TexCodecError($3d9a46[192], TexResult.UNSUPPORTED, `${$3d9a46[193]}${VERSION}${$3d9a46[194]}${binary}`);
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
                throwResult(mod, $3d9a46[195], rc);
            return {
                width: mod.getValue(buf, $3d9a46[182]),
                height: mod.getValue(buf + 4, $3d9a46[182]),
                bytes: mod.getValue(buf + 8, $3d9a46[182]),
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
    TexEncoder.prototype[`${$3d9a46[196]}${name}`] = function (width, height) {
        return this.encodedSize(fmt, width, height);
    };
    if (name.startsWith($3d9a46[197]))
        continue;
    TexDecoder.prototype[`${$3d9a46[198]}${name}`] = function (data, width, height) {
        return this.decode(fmt, data, width, height);
    };
    TexDecoder.prototype[`${$3d9a46[199]}${name}`] = function (data, width, height) {
        return this.decodeF32(fmt, data, width, height);
    };
    TexEncoder.prototype[`${$3d9a46[200]}${name}`] =
        function (rgba, width, height, options) {
            return this.encode(fmt, rgba, width, height, options);
        };
}
const k_modeNames = Object.freeze({
    [$3d9a46[66]]: $3d9a46[66], [$3d9a46[67]]: $3d9a46[67], [$3d9a46[68]]: $3d9a46[201], [$3d9a46[75]]: $3d9a46[202],
    [$3d9a46[69]]: $3d9a46[203], [$3d9a46[70]]: $3d9a46[70],
    [$3d9a46[71]]: $3d9a46[71], [$3d9a46[72]]: $3d9a46[72], [$3d9a46[73]]: $3d9a46[204], [$3d9a46[74]]: $3d9a46[74],
});
for (const [key, pretty] of Object.entries(k_modeNames)) {
    const mode = SwizzleMode[key];
    TexSwizzler.prototype[`${$3d9a46[185]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.unswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$3d9a46[186]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.reswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$3d9a46[205]}${pretty}`] =
        function (format, width, height, arg = 0) {
            return this.swizzledSize(mode, format, width, height, arg);
        };
    TexDecoder.prototype[`${$3d9a46[206]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.decodeSwizzled(mode, format, data, width, height, arg);
        };
}
