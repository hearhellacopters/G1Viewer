const $7b9beb=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("gTAG/pVIeGjgwVyxgf2VX/z7pmM3vIwfo4PtRh55cxJ8uLHJuAcy89comSv6lSKdzVM6qGA9Ew2SumCZnnEenwYQPdDaIFGS8isTaMz4cK8n1E2iEadQRPyDBGsqn9hZlt3s/QYybHIdBW1F+ZkYsBWkC7C6H1UrCJKGUpErTutOVZoHr4HVVUphsTAiMzHbMf+gFmeAN/yBwEX9QMYGk06NZ7KDqm/i34IoNAqUJSMJ6C12P7Kv1recOKLTFZ6CGY7MxHiqTbEbJCWhzmlnUu9Y9wnMrV9JDb9YfbFKY8KyOsBqCYlu98nGZjj80yUDFdoLEH8aGxbFLaAy36JMN25v+HBqX4kN+zrdo8zaEKmZPiEPosAtxFAC52rtGZ65ArWm8ODHQhOR2/EFiBWTRQQjN9FP4ERMO85ZNBQvFITdxR2OBAEqoyBwNRnBQi9RpVz2k7xmYn/JOQj2FCSR3gZeyDFcU9bAg+8O8CsG4qtGdWU379W7XsZ3vjQxvPBS3Crb4iHvjSkJmjf1Lt83hWA/1S0logmUXxdP3cGyNN2/0tiBY/H/ty/Ezmeb2mzWReEiocONqRQ0izRhceGFnP55TfllKXS/kfpmVPsrmTzWHpGqMrM4TdDxNCdX0F/OPgP/mdeHXa03FQCcI+q1r1jqZtxgLro9wVoVYgmjhTUTpz4STy2UZzkxphEokwq5Ai2d8G5/wgqYerx8upJkpqmwH0xS/5xwi/q8E/eZLicmBZxuOTJghCfusQ/BtvpWFhenw9NkIpQO9q8GMnFNvbQAr2D4eEwgJVzgRn1Prc6Y1twYj+Cw/8prsmoeW5dA01m6oXf2t+b7TWP9zKAnK062xcMTWqzFaF5/oTuZKapNNc5vWrqYiMLR4vX6jy/K0l8jGaNlTC09ELTLmHxJgA2lKvwiAg/pAoEu0/yBzCmBzEWywf9XGaoRxWtc5l4T+OWZ78lYwJjmaMmu5k/C8WBaKLFZFwwol4H2TfSWJnFgZUiW4BTKEWve1t2iB4K5xyihU02u0g9G1rzfSobjjECsvTJh2RGbV66pV9Gpman0Kl6ixJeajkUnLs6/bpRL6SmIqtmSVxEtaQKV9VVDcr6XxwRSq324egfgggKc9h9bdvpOiBTZ22lg4cXG608sTjMjioBv6GGgWqUzDgAQ7mw/KOeWpLTyLMNgjz6QZKszgoocmxuTdpal+LGJcbCpSYA6Q6N7Awb+l5xTMbTYufQCL+Qx6/e+FhPPjVizfCvQ9p55UFXcrx3WlFkUSBBbYtWdKtdoRsqWmb/TsL28d1AhhUF50f286X9nnz3e5ZSHxP088OxaxvnsKw3y1HWAuXAhSJat+CTvsmgfDUHADla8RFur7egIfl63qhV1tBbAGIVYwO2BZcXoKLDbeNUCkuqo68TxBYUkHfQm/petUMqc3EcDn3jAUXnu+VFCSBMR6a9JOrREctNcEAxMbJMIX1k2mh3EG6xz67hKzrRwCkLMQdDrIJW1/qjWtVtGF/3bhb+8CFxtyL3jMUu5GignzcY3hJhev+oQ6Y9SVLk9ATiCltk/gyTc9kYyR/lixsuLJbZV+VVRQ24thoyEsyrYgwr+CxpS+VuP12M7mkL+iRrcxG7k/tOkg9HMdw5t0FR7idrE3ENAe7Kp2NU2ZdcrG0iBEDmIWKCxAFUNRVlUPtie1XdZF/Ho8H0u2V2kMkHDgedczIcwWXVx3lwAvzycVWtJGnVIp4yKnrFp6x09LDuPNMmxc0reUReDbg8y1/z4splwifp5NHaSiVEN5YjDCTb5UrJpgvs4UFLJ27I1T1hf/s2y4pA1kLxTeq2wk2PswWVCZGNprsK0pxgBywOHa1NeyyXnriR3Or8yvtOkciDIHgIgMA2pPc3lxccHH89Zc1HLocLRMMakhminuS6zJYUN3NfzDnuwFztq/ocFa7dHHo0zL/pouIGIGdNXY+SYR2zcsLdOeV+4wXKH+tMDNY9lTmOGzkin1zHtLleRXvLHNAk6QN8pG1p4xmEkVbeaC2nqlrILzTjW+O5F8JGr+8Or8MAuH0XskrlGmPIcFoAvqNqjqEF0Xvtk128e4yQK7Y1zdm/ArpnTBu7Hjwh3ug87Ve7amON61KkB+uxJ5Kw0iwJSY7lTvuCn2mjNIm4k0/JrGlTgsYX3hNlo1L5BmlrTBZuKdnQjaMcjVBJKkdw0pRZxNZCJ2f5XaSJ7sDs0d81+tUuf7uw+GiYd1W3dxFLNYIMWqT+ML451/ZwdCsboITS3WevSFbzzH/TMhGNVAeq/1aDB032FTnpokbWmXv6jNgcRKbY/xNyLiCJF8/qesfYZRu/OGLTaCVqc",976583998,"\u0000");export const VERSION = $7b9beb[0];
export const TexFormat = Object.freeze({
    [$7b9beb[1]]: 0,
    [$7b9beb[2]]: 1,
    [$7b9beb[3]]: 2, [$7b9beb[4]]: 3, [$7b9beb[5]]: 4,
    [$7b9beb[6]]: 5, [$7b9beb[7]]: 6, [$7b9beb[8]]: 7, [$7b9beb[9]]: 8,
    [$7b9beb[10]]: 9, [$7b9beb[11]]: 10, [$7b9beb[12]]: 11,
    [$7b9beb[13]]: 12, [$7b9beb[14]]: 13, [$7b9beb[15]]: 14, [$7b9beb[16]]: 15,
    [$7b9beb[17]]: 16, [$7b9beb[18]]: 17, [$7b9beb[19]]: 18, [$7b9beb[20]]: 19,
    [$7b9beb[21]]: 20, [$7b9beb[22]]: 21,
    [$7b9beb[23]]: 22, [$7b9beb[24]]: 23,
    [$7b9beb[25]]: 24, [$7b9beb[26]]: 25,
    [$7b9beb[27]]: 26, [$7b9beb[28]]: 27, [$7b9beb[29]]: 28, [$7b9beb[30]]: 29, [$7b9beb[31]]: 30,
    [$7b9beb[32]]: 31, [$7b9beb[33]]: 32, [$7b9beb[34]]: 33, [$7b9beb[35]]: 34, [$7b9beb[36]]: 35,
    [$7b9beb[37]]: 36, [$7b9beb[38]]: 37, [$7b9beb[39]]: 38, [$7b9beb[40]]: 39,
    [$7b9beb[41]]: 40, [$7b9beb[42]]: 41, [$7b9beb[43]]: 42,
    [$7b9beb[44]]: 43, [$7b9beb[45]]: 44, [$7b9beb[46]]: 45,
    [$7b9beb[47]]: 46, [$7b9beb[48]]: 47,
    [$7b9beb[49]]: 48, [$7b9beb[50]]: 49, [$7b9beb[51]]: 50, [$7b9beb[52]]: 51, [$7b9beb[53]]: 52,
    [$7b9beb[54]]: 53, [$7b9beb[55]]: 54, [$7b9beb[56]]: 55,
    [$7b9beb[57]]: 56, [$7b9beb[58]]: 57, [$7b9beb[59]]: 58,
    [$7b9beb[60]]: 59, [$7b9beb[61]]: 60, [$7b9beb[62]]: 61, [$7b9beb[63]]: 62, [$7b9beb[64]]: 63,
});
export const SwizzleMode = Object.freeze({
    [$7b9beb[65]]: 0,
    [$7b9beb[66]]: 1,
    [$7b9beb[67]]: 2,
    [$7b9beb[68]]: 3,
    [$7b9beb[69]]: 4,
    [$7b9beb[70]]: 5,
    [$7b9beb[71]]: 6,
    [$7b9beb[72]]: 7,
    [$7b9beb[73]]: 8,
    [$7b9beb[74]]: 9,
    [$7b9beb[75]]: 10,
});
export const PS5TileMode = Object.freeze({
    [$7b9beb[76]]: 0,
    [$7b9beb[77]]: 1,
    [$7b9beb[78]]: 5,
    [$7b9beb[79]]: 9,
    [$7b9beb[80]]: 0x100,
});
export const SwitchBlockHeightAuto = 0xFFFFFFFF;
export const X360Endian = Object.freeze({
    [$7b9beb[81]]: 0,
    [$7b9beb[65]]: 0x100,
    [$7b9beb[82]]: 0x200,
    [$7b9beb[83]]: 0x300,
    [$7b9beb[84]]: 0x400,
});
export const X360LoaderRows = 0x10000;
export const PaletteFormat = Object.freeze({
    [$7b9beb[85]]: 0, [$7b9beb[86]]: 1, [$7b9beb[87]]: 2,
});
export const PixelProfile = Object.freeze({
    [$7b9beb[1]]: 0,
    [$7b9beb[88]]: 1, [$7b9beb[89]]: 2, [$7b9beb[90]]: 3, [$7b9beb[91]]: 4,
    [$7b9beb[92]]: 5, [$7b9beb[93]]: 6, [$7b9beb[94]]: 7, [$7b9beb[95]]: 8, [$7b9beb[96]]: 9, [$7b9beb[97]]: 10,
    [$7b9beb[98]]: 11, [$7b9beb[99]]: 12, [$7b9beb[100]]: 13, [$7b9beb[101]]: 14, [$7b9beb[102]]: 15, [$7b9beb[103]]: 16,
    [$7b9beb[104]]: 17, [$7b9beb[105]]: 18, [$7b9beb[106]]: 19, [$7b9beb[107]]: 20, [$7b9beb[108]]: 21, [$7b9beb[109]]: 22,
    [$7b9beb[2]]: 23, [$7b9beb[110]]: 24, [$7b9beb[111]]: 25, [$7b9beb[112]]: 26, [$7b9beb[113]]: 27, [$7b9beb[114]]: 28,
    [$7b9beb[86]]: 29, [$7b9beb[115]]: 30, [$7b9beb[116]]: 31, [$7b9beb[117]]: 32,
    [$7b9beb[118]]: 33, [$7b9beb[119]]: 34,
    [$7b9beb[120]]: 35, [$7b9beb[121]]: 36, [$7b9beb[122]]: 37, [$7b9beb[123]]: 38, [$7b9beb[124]]: 39, [$7b9beb[125]]: 40,
    [$7b9beb[126]]: 41, [$7b9beb[127]]: 42, [$7b9beb[128]]: 43,
    [$7b9beb[129]]: 44, [$7b9beb[130]]: 45, [$7b9beb[131]]: 46, [$7b9beb[132]]: 47, [$7b9beb[133]]: 48, [$7b9beb[134]]: 49,
    [$7b9beb[135]]: 50, [$7b9beb[136]]: 51, [$7b9beb[137]]: 52, [$7b9beb[138]]: 53,
    [$7b9beb[139]]: 54, [$7b9beb[140]]: 55, [$7b9beb[141]]: 56, [$7b9beb[142]]: 57, [$7b9beb[143]]: 58,
    [$7b9beb[144]]: 59, [$7b9beb[145]]: 60, [$7b9beb[146]]: 61, [$7b9beb[147]]: 62, [$7b9beb[148]]: 63,
    [$7b9beb[149]]: 64, [$7b9beb[150]]: 65, [$7b9beb[151]]: 66, [$7b9beb[152]]: 67, [$7b9beb[153]]: 68,
    [$7b9beb[154]]: 69, [$7b9beb[155]]: 70, [$7b9beb[156]]: 71, [$7b9beb[157]]: 72,
});
export const TexResult = Object.freeze({
    [$7b9beb[158]]: 0,
    [$7b9beb[159]]: -1,
    [$7b9beb[160]]: -2,
    [$7b9beb[161]]: -3,
    [$7b9beb[162]]: -4,
    [$7b9beb[163]]: -5,
    [$7b9beb[164]]: -6,
    [$7b9beb[165]]: -7,
});
export class TexCodecError extends Error {
    constructor(operation, code, detail) {
        super(`${$7b9beb[166]}${operation}${$7b9beb[167]}${detail ?? $7b9beb[170]}${$7b9beb[168]}${code}${$7b9beb[169]}`);
        this.name = $7b9beb[171];
        this.code = code;
    }
}
let defaultModulePromise = null;
function withInput(mod, bytes, fn) {
    const ptr = mod._malloc(bytes.byteLength);
    if (!ptr)
        throw new TexCodecError($7b9beb[172], TexResult.OUT_OF_MEMORY, $7b9beb[173]);
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
    return `${$7b9beb[174]}${fmt}`;
}
export class TexDecoder {
    constructor(owner) { this._owner = owner; }
    async decode(format, data, width, height) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const out = mod._texc_decode_alloc(format, src, data.byteLength, width, height);
            if (!out)
                throwResult(mod, `${$7b9beb[175]}${formatName(format)}${$7b9beb[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$7b9beb[176]}${formatName(format)}${$7b9beb[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$7b9beb[177]}${formatName(format)}${$7b9beb[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$7b9beb[178]}${formatName(format)}${$7b9beb[169]}`, mod._texc_last_error());
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
                throwResult(mod, `${$7b9beb[179]}${formatName(format)}${$7b9beb[169]}`, TexResult.INVALID_ARG);
            const dst = mod._malloc(encSize);
            if (!dst)
                throwResult(mod, $7b9beb[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_encode_with_options(format, src, rgba.byteLength, width, height, dst, encSize, threshold);
                if (rc !== TexResult.OK)
                    throwResult(mod, `${$7b9beb[179]}${formatName(format)}${$7b9beb[169]}`, rc);
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
                throwResult(mod, $7b9beb[180], rc);
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
                throwResult(mod, $7b9beb[181], rc);
            return mod.getValue(ptr, $7b9beb[182]) >>> 0;
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
                    throwResult(mod, $7b9beb[183], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $7b9beb[182]) >>> 0;
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
                    throwResult(mod, $7b9beb[184], rc);
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
                    throwResult(mod, toLinear ? $7b9beb[185] : $7b9beb[186], mod._texc_last_error());
                const size = mod.getValue(sizePtr, $7b9beb[182]) >>> 0;
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
function readU32(mod, ptr) { return mod.getValue(ptr, $7b9beb[182]) >>> 0; }
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
            throwResult(mod, $7b9beb[187], TexResult.INVALID_ARG);
        const count = pixelCount ?? Math.floor(data.byteLength / sbpp);
        return withInput(mod, data, (src) => {
            const outSize = count * dbpp;
            const dst = mod._malloc(outSize);
            if (!dst)
                throwResult(mod, $7b9beb[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_convert_profile(srcProfile, src, data.byteLength, dstProfile, dst, outSize, count);
                if (rc !== TexResult.OK)
                    throwResult(mod, $7b9beb[187], rc);
                return mod.HEAPU8.slice(dst, dst + outSize);
            }
            finally {
                mod._free(dst);
            }
        });
    }
    async flipY(data, width, height, bytesPerPixel = 4) {
        return this._flip($7b9beb[188], data, width, height, bytesPerPixel);
    }
    async flipX(data, width, height, bytesPerPixel = 4) {
        return this._flip($7b9beb[189], data, width, height, bytesPerPixel);
    }
    async _flip(fn, data, width, height, bytesPerPixel) {
        const mod = await this._owner._mod();
        return withInput(mod, data, (src) => {
            const size = width * height * bytesPerPixel;
            const dst = mod._malloc(size);
            if (!dst)
                throwResult(mod, $7b9beb[172], TexResult.OUT_OF_MEMORY);
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
                throwResult(mod, $7b9beb[172], TexResult.OUT_OF_MEMORY);
            try {
                const rc = mod._texc_crop(src, data.byteLength, width, height, bytesPerPixel, x, y, cropWidth, cropHeight, dst, size);
                if (rc !== TexResult.OK)
                    throwResult(mod, $7b9beb[190], rc);
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
        defaultModulePromise ??= import(new URL($7b9beb[191], import.meta.url).href)
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
            throw new TexCodecError($7b9beb[192], TexResult.UNSUPPORTED, `${$7b9beb[193]}${VERSION}${$7b9beb[194]}${binary}`);
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
                throwResult(mod, $7b9beb[195], rc);
            return {
                width: mod.getValue(buf, $7b9beb[182]),
                height: mod.getValue(buf + 4, $7b9beb[182]),
                bytes: mod.getValue(buf + 8, $7b9beb[182]),
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
    TexEncoder.prototype[`${$7b9beb[196]}${name}`] = function (width, height) {
        return this.encodedSize(fmt, width, height);
    };
    if (name.startsWith($7b9beb[197]))
        continue;
    TexDecoder.prototype[`${$7b9beb[198]}${name}`] = function (data, width, height) {
        return this.decode(fmt, data, width, height);
    };
    TexDecoder.prototype[`${$7b9beb[199]}${name}`] = function (data, width, height) {
        return this.decodeF32(fmt, data, width, height);
    };
    TexEncoder.prototype[`${$7b9beb[200]}${name}`] =
        function (rgba, width, height, options) {
            return this.encode(fmt, rgba, width, height, options);
        };
}
const k_modeNames = Object.freeze({
    [$7b9beb[66]]: $7b9beb[66], [$7b9beb[67]]: $7b9beb[67], [$7b9beb[68]]: $7b9beb[201], [$7b9beb[75]]: $7b9beb[202],
    [$7b9beb[69]]: $7b9beb[203], [$7b9beb[70]]: $7b9beb[70],
    [$7b9beb[71]]: $7b9beb[71], [$7b9beb[72]]: $7b9beb[72], [$7b9beb[73]]: $7b9beb[204], [$7b9beb[74]]: $7b9beb[74],
});
for (const [key, pretty] of Object.entries(k_modeNames)) {
    const mode = SwizzleMode[key];
    TexSwizzler.prototype[`${$7b9beb[185]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.unswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$7b9beb[186]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.reswizzle(mode, format, data, width, height, arg);
        };
    TexSwizzler.prototype[`${$7b9beb[205]}${pretty}`] =
        function (format, width, height, arg = 0) {
            return this.swizzledSize(mode, format, width, height, arg);
        };
    TexDecoder.prototype[`${$7b9beb[206]}${pretty}`] =
        function (format, data, width, height, arg = 0) {
            return this.decodeSwizzled(mode, format, data, width, height, arg);
        };
}
