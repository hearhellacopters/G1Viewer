const $1f78dc=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",558301413,"\u0000");var TexCodec = (() => {
    var _scriptName = globalThis.document?.currentScript?.src;
    return async function (moduleArg = {}) {
        var Module = moduleArg;
        var ENVIRONMENT_IS_WEB = !!globalThis.window;
        var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
        var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != $1f78dc[0];
        var programArgs = [];
        var thisProgram = $1f78dc[1];
        var quit_ = (status, toThrow) => { throw toThrow; };
        if (typeof __filename != $1f78dc[2]) {
            _scriptName = __filename;
        }
        else if (ENVIRONMENT_IS_WORKER) {
            _scriptName = self.location.href;
        }
        var scriptDirectory = "";
        function locateFile(path) { if (Module[$1f78dc[3]]) {
            return Module[$1f78dc[3]](path, scriptDirectory);
        } return scriptDirectory + path; }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
            var fs = require($1f78dc[4]);
            scriptDirectory = __dirname + $1f78dc[5];
            readBinary = filename => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename); return ret; };
            readAsync = async (filename, binary = true) => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename, binary ? undefined : $1f78dc[6]); return ret; };
            if (process.argv.length > 1) {
                thisProgram = process.argv[1].replace(/\\/g, $1f78dc[5]);
            }
            programArgs = process.argv.slice(2);
            quit_ = (status, toThrow) => { process.exitCode = status; throw toThrow; };
        }
        else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            try {
                scriptDirectory = new URL($1f78dc[7], _scriptName).href;
            }
            catch { }
            {
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = url => { var xhr = new XMLHttpRequest; xhr.open($1f78dc[8], url, false); xhr.responseType = $1f78dc[9]; xhr.send(null); return new Uint8Array(xhr.response); };
                }
                readAsync = async (url) => { var response = await fetch(url, { credentials: $1f78dc[10] }); if (response.ok) {
                    return response.arrayBuffer();
                } throw new Error(response.status + $1f78dc[11] + response.url); };
            }
        }
        else { }
        var out = console.log.bind(console);
        var err = console.error.bind(console);
        var wasmBinary;
        var ABORT = false;
        var isFileURI = filename => filename.startsWith($1f78dc[12]);
        class EmscriptenEH {
        }
        class EmscriptenSjLj extends EmscriptenEH {
        }
        var runtimeInitialized = false;
        function getMemoryBuffer() { return wasmMemory.buffer; }
        function updateMemoryViews() { if (HEAP8?.buffer?.resizable)
            return; var b = getMemoryBuffer(); HEAP8 = new Int8Array(b); HEAP16 = new Int16Array(b); Module[$1f78dc[13]] = HEAPU8 = new Uint8Array(b); HEAP32 = new Int32Array(b); HEAPU32 = new Uint32Array(b); Module[$1f78dc[14]] = HEAPF32 = new Float32Array(b); HEAPF64 = new Float64Array(b); HEAP64 = new BigInt64Array(b); }
        function preRun() { var preRun = Module[$1f78dc[15]]; if (preRun) {
            if (typeof preRun == $1f78dc[16])
                preRun = [preRun];
            onPreRuns.push(...preRun);
        } callRuntimeCallbacks(onPreRuns); }
        function initRuntime() { runtimeInitialized = true; wasmExports[$1f78dc[17]](); }
        function postRun() { var postRun = Module[$1f78dc[18]]; if (postRun) {
            if (typeof postRun == $1f78dc[16])
                postRun = [postRun];
            onPostRuns.push(...postRun);
        } callRuntimeCallbacks(onPostRuns); }
        function abort(what) { Module[$1f78dc[19]]?.(what); what = `${$1f78dc[20]}${what}${$1f78dc[21]}`; err(what); ABORT = true; what += $1f78dc[22]; var e = new WebAssembly.RuntimeError(what); throw e; }
        var wasmBinaryFile;
        function findWasmBinary() { return locateFile($1f78dc[23]); }
        function getBinarySync(file) { if (readBinary) {
            return readBinary(file);
        } throw $1f78dc[24]; }
        async function getWasmBinary(binaryFile) { if (!wasmBinary) {
            try {
                var response = await readAsync(binaryFile);
                return new Uint8Array(response);
            }
            catch { }
        } return getBinarySync(binaryFile); }
        async function instantiateArrayBuffer(binaryFile, imports) { try {
            var binary = await getWasmBinary(binaryFile);
            var instance = await WebAssembly.instantiate(binary, imports);
            return instance;
        }
        catch (reason) {
            err(`${$1f78dc[25]}${reason}`);
            abort(reason);
        } }
        async function instantiateAsync(binary, binaryFile, imports) { if (!binary && !ENVIRONMENT_IS_NODE) {
            try {
                var response = fetch(binaryFile, { credentials: $1f78dc[10] });
                var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
                return instantiationResult;
            }
            catch (reason) {
                err(`${$1f78dc[26]}${reason}`);
                err($1f78dc[27]);
            }
        } return instantiateArrayBuffer(binaryFile, imports); }
        function getWasmImports() { var imports = { a: wasmImports }; return imports; }
        async function createWasm() { function receiveInstance(instance) { wasmExports = instance.exports; assignWasmExports(wasmExports); updateMemoryViews(); return wasmExports; } function receiveInstantiationResult(result) { return receiveInstance(result[$1f78dc[28]]); } var info = getWasmImports(); var instantiateWasm = Module[$1f78dc[29]]; if (instantiateWasm) {
            return new Promise(resolve => { instantiateWasm(info, inst => resolve(receiveInstance(inst))); });
        } wasmBinaryFile ??= findWasmBinary(); var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info); var exports = receiveInstantiationResult(result); return exports; }
        class ExitStatus {
            name = $1f78dc[30];
            constructor(status) { this.message = `${$1f78dc[31]}${status}${$1f78dc[21]}`; this.status = status; }
        }
        var HEAP8;
        var callRuntimeCallbacks = callbacks => { while (callbacks.length > 0) {
            callbacks.shift()(Module);
        } };
        var onPostRuns = [];
        var onPreRuns = [];
        var noExitRuntime = true;
        var stackRestore = val => __emscripten_stack_restore(val);
        var stackSave = () => _emscripten_stack_get_current();
        var __abort_js = () => abort("");
        var getHeapMax = () => 2147483648;
        var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
        var growMemory = size => { var oldHeapSize = wasmMemory.buffer.byteLength; var pages = (size - oldHeapSize + 65535) / 65536 | 0; try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
        }
        catch (e) { } };
        var HEAPU8;
        var _emscripten_resize_heap = requestedSize => { var oldSize = HEAPU8.length; requestedSize >>>= 0; var maxHeapSize = getHeapMax(); if (requestedSize > maxHeapSize) {
            return false;
        } for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = growMemory(newSize);
            if (replacement) {
                return true;
            }
        } return false; };
        var printCharBuffers = [null, [], []];
        var UTF8Decoder = globalThis.TextDecoder && new TextDecoder;
        var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => { var maxIdx = idx + maxBytesToRead; if (ignoreNul)
            return maxIdx; while (heapOrArray[idx] && !(idx >= maxIdx))
            ++idx; return idx; };
        var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => { var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul); if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
        } var str = ""; while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            }
            else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
                str += String.fromCharCode(u0);
            }
            else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
        } return str; };
        var printChar = (stream, curr) => { var buffer = printCharBuffers[stream]; if (!curr || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
            buffer.length = 0;
        }
        else {
            buffer.push(curr);
        } };
        var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : "";
        var HEAPU32;
        var _fd_write = (fd, iov, iovcnt, pnum) => { var num = 0; for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
                printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
        } HEAPU32[pnum >> 2] = num; return 0; };
        var getCFunc = ident => { var func = Module[$1f78dc[32] + ident]; return func; };
        var writeArrayToMemory = (array, buffer) => { HEAP8.set(array, buffer); };
        var lengthBytesUTF8 = str => { var len = 0; for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
                len++;
            }
            else if (c <= 2047) {
                len += 2;
            }
            else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
            }
            else {
                len += 3;
            }
        } return len; };
        var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => { if (!(maxBytesToWrite > 0))
            return 0; var startIdx = outIdx; var endIdx = outIdx + maxBytesToWrite - 1; for (var i = 0; i < str.length; ++i) {
            var u = str.codePointAt(i);
            if (u <= 127) {
                if (outIdx >= endIdx)
                    break;
                heap[outIdx++] = u;
            }
            else if (u <= 2047) {
                if (outIdx + 1 >= endIdx)
                    break;
                heap[outIdx++] = 192 | u >> 6;
                heap[outIdx++] = 128 | u & 63;
            }
            else if (u <= 65535) {
                if (outIdx + 2 >= endIdx)
                    break;
                heap[outIdx++] = 224 | u >> 12;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
            }
            else {
                if (outIdx + 3 >= endIdx)
                    break;
                heap[outIdx++] = 240 | u >> 18;
                heap[outIdx++] = 128 | u >> 12 & 63;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
                i++;
            }
        } heap[outIdx] = 0; return outIdx - startIdx; };
        var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        var stackAlloc = sz => __emscripten_stack_alloc(sz);
        var stringToUTF8OnStack = str => { var size = lengthBytesUTF8(str) + 1; var ret = stackAlloc(size); stringToUTF8(str, ret, size); return ret; };
        var ccall = (ident, returnType, argTypes, args, opts) => { var toC = { string: str => { var ret = 0; if (str !== null && str !== undefined && str !== 0) {
                ret = stringToUTF8OnStack(str);
            } return ret; }, array: arr => { var ret = stackAlloc(arr.length); writeArrayToMemory(arr, ret); return ret; } }; function convertReturnValue(ret) { if (returnType === $1f78dc[33]) {
            return UTF8ToString(ret);
        } if (returnType === $1f78dc[34])
            return Boolean(ret); return ret; } var func = getCFunc(ident); var cArgs = []; var stack = 0; if (args) {
            for (var i = 0; i < args.length; i++) {
                var converter = toC[argTypes[i]];
                if (converter) {
                    if (!stack)
                        stack = stackSave();
                    cArgs[i] = converter(args[i]);
                }
                else {
                    cArgs[i] = args[i];
                }
            }
        } var ret = func(...cArgs); function onDone(ret) { if (stack)
            stackRestore(stack); return convertReturnValue(ret); } ret = onDone(ret); return ret; };
        var cwrap = (ident, returnType, argTypes, opts) => { var numericArgs = !argTypes || argTypes.every(type => type === $1f78dc[35] || type === $1f78dc[34]); var numericRet = returnType !== $1f78dc[33]; if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
        } return (...args) => ccall(ident, returnType, argTypes, args, opts); };
        var HEAPF32;
        var HEAP16;
        var HEAP32;
        var HEAPF64;
        var HEAP64;
        function getValue(ptr, type = $1f78dc[36]) { if (type.endsWith($1f78dc[37]))
            type = $1f78dc[37]; switch (type) {
            case $1f78dc[38]: return HEAP8[ptr];
            case $1f78dc[36]: return HEAP8[ptr];
            case $1f78dc[39]: return HEAP16[ptr >> 1];
            case $1f78dc[40]: return HEAP32[ptr >> 2];
            case $1f78dc[41]: return HEAP64[ptr >> 3];
            case $1f78dc[42]: return HEAPF32[ptr >> 2];
            case $1f78dc[43]: return HEAPF64[ptr >> 3];
            case $1f78dc[37]: return HEAPU32[ptr >> 2];
            default: abort(`${$1f78dc[44]}${type}`);
        } }
        function setValue(ptr, value, type = $1f78dc[36]) { if (type.endsWith($1f78dc[37]))
            type = $1f78dc[37]; switch (type) {
            case $1f78dc[38]:
                HEAP8[ptr] = value;
                break;
            case $1f78dc[36]:
                HEAP8[ptr] = value;
                break;
            case $1f78dc[39]:
                HEAP16[ptr >> 1] = value;
                break;
            case $1f78dc[40]:
                HEAP32[ptr >> 2] = value;
                break;
            case $1f78dc[41]:
                HEAP64[ptr >> 3] = BigInt(value);
                break;
            case $1f78dc[42]:
                HEAPF32[ptr >> 2] = value;
                break;
            case $1f78dc[43]:
                HEAPF64[ptr >> 3] = value;
                break;
            case $1f78dc[37]:
                HEAPU32[ptr >> 2] = value;
                break;
            default: abort(`${$1f78dc[45]}${type}`);
        } }
        {
            if (Module[$1f78dc[46]])
                noExitRuntime = Module[$1f78dc[46]];
            if (Module[$1f78dc[47]])
                out = Module[$1f78dc[47]];
            if (Module[$1f78dc[48]])
                err = Module[$1f78dc[48]];
            if (Module[$1f78dc[49]])
                programArgs = Module[$1f78dc[49]];
            if (Module[$1f78dc[50]])
                thisProgram = Module[$1f78dc[50]];
            var preInit = Module[$1f78dc[51]];
            if (preInit) {
                if (typeof preInit == $1f78dc[16])
                    Module[$1f78dc[51]] = preInit = [preInit];
                while (preInit.length > 0) {
                    preInit.shift()();
                }
            }
        }
        Module[$1f78dc[52]] = ccall;
        Module[$1f78dc[53]] = cwrap;
        Module[$1f78dc[54]] = setValue;
        Module[$1f78dc[55]] = getValue;
        Module[$1f78dc[56]] = UTF8ToString;
        var _texc_version, _texc_version_string, _texc_build_info, _texc_format_name, _texc_result_str, _texc_block_dims, _texc_encoded_size, _texc_decoded_size, _texc_can_decode, _texc_can_encode, _texc_is_paletted, _texc_palette_size, _texc_decode_paletted, _texc_decode, _malloc, _free, _texc_decode_f32, _texc_encode_options_init, _texc_encode_ex, _texc_encode, _texc_encode_f32, _texc_swizzled_size, _texc_unswizzled_size, _texc_unswizzle, _texc_swizzle, _texc_reswizzle, _texc_get_surface_layout, _texc_ps5_detect_tile_mode, _texc_ps5_default_tile_mode, _texc_unswizzle_mip, _texc_reswizzle_mip, _texc_get_volume_layout, _texc_unswizzle_volume_mip, _texc_reswizzle_volume_mip, _texc_decode_swizzled, _texc_alloc, _texc_free, _texc_profile_name, _texc_profile_bytes_per_pixel, _texc_convert_profile, _texc_flip_y, _texc_flip_x, _texc_crop, _texc_last_error, _texc_encode_with_options, _texc_decode_alloc, _texc_decode_f32_alloc, _texc_decode_swizzled_alloc, _texc_decode_paletted_alloc, _texc_encode_alloc, _texc_swizzle_alloc, _texc_unswizzle_mip_alloc, _texc_unswizzle_volume_mip_alloc, _texc_decode_rgba8, _texc_encode_rgba8, _texc_encoded_size_rgba8, _texc_decode_bc1, _texc_encode_bc1, _texc_encoded_size_bc1, _texc_decode_bc2, _texc_encode_bc2, _texc_encoded_size_bc2, _texc_decode_bc3, _texc_encode_bc3, _texc_encoded_size_bc3, _texc_decode_bc4, _texc_encode_bc4, _texc_encoded_size_bc4, _texc_decode_bc4_snorm, _texc_encode_bc4_snorm, _texc_encoded_size_bc4_snorm, _texc_decode_bc5, _texc_encode_bc5, _texc_encoded_size_bc5, _texc_decode_bc5_snorm, _texc_encode_bc5_snorm, _texc_encoded_size_bc5_snorm, _texc_decode_bc6h_uf16, _texc_encode_bc6h_uf16, _texc_encoded_size_bc6h_uf16, _texc_decode_bc6h_sf16, _texc_encode_bc6h_sf16, _texc_encoded_size_bc6h_sf16, _texc_decode_bc7, _texc_encode_bc7, _texc_encoded_size_bc7, _texc_decode_etc1_rgb, _texc_encode_etc1_rgb, _texc_encoded_size_etc1_rgb, _texc_decode_etc2_rgb, _texc_encode_etc2_rgb, _texc_encoded_size_etc2_rgb, _texc_decode_etc2_rgba1, _texc_encode_etc2_rgba1, _texc_encoded_size_etc2_rgba1, _texc_decode_etc2_rgba8, _texc_encode_etc2_rgba8, _texc_encoded_size_etc2_rgba8, _texc_decode_eac_r11, _texc_encode_eac_r11, _texc_encoded_size_eac_r11, _texc_decode_eac_r11_signed, _texc_encode_eac_r11_signed, _texc_encoded_size_eac_r11_signed, _texc_decode_eac_rg11, _texc_encode_eac_rg11, _texc_encoded_size_eac_rg11, _texc_decode_eac_rg11_signed, _texc_encode_eac_rg11_signed, _texc_encoded_size_eac_rg11_signed, _texc_decode_pvrtc1_2bpp_rgb, _texc_encode_pvrtc1_2bpp_rgb, _texc_encoded_size_pvrtc1_2bpp_rgb, _texc_decode_pvrtc1_2bpp_rgba, _texc_encode_pvrtc1_2bpp_rgba, _texc_encoded_size_pvrtc1_2bpp_rgba, _texc_decode_pvrtc1_4bpp_rgb, _texc_encode_pvrtc1_4bpp_rgb, _texc_encoded_size_pvrtc1_4bpp_rgb, _texc_decode_pvrtc1_4bpp_rgba, _texc_encode_pvrtc1_4bpp_rgba, _texc_encoded_size_pvrtc1_4bpp_rgba, _texc_decode_pvrtc2_2bpp, _texc_encode_pvrtc2_2bpp, _texc_encoded_size_pvrtc2_2bpp, _texc_decode_pvrtc2_4bpp, _texc_encode_pvrtc2_4bpp, _texc_encoded_size_pvrtc2_4bpp, _texc_decode_astc_4x4, _texc_encode_astc_4x4, _texc_encoded_size_astc_4x4, _texc_decode_astc_5x4, _texc_encode_astc_5x4, _texc_encoded_size_astc_5x4, _texc_decode_astc_5x5, _texc_encode_astc_5x5, _texc_encoded_size_astc_5x5, _texc_decode_astc_6x5, _texc_encode_astc_6x5, _texc_encoded_size_astc_6x5, _texc_decode_astc_6x6, _texc_encode_astc_6x6, _texc_encoded_size_astc_6x6, _texc_decode_astc_8x5, _texc_encode_astc_8x5, _texc_encoded_size_astc_8x5, _texc_decode_astc_8x6, _texc_encode_astc_8x6, _texc_encoded_size_astc_8x6, _texc_decode_astc_8x8, _texc_encode_astc_8x8, _texc_encoded_size_astc_8x8, _texc_decode_astc_10x5, _texc_encode_astc_10x5, _texc_encoded_size_astc_10x5, _texc_decode_astc_10x6, _texc_encode_astc_10x6, _texc_encoded_size_astc_10x6, _texc_decode_astc_10x8, _texc_encode_astc_10x8, _texc_encoded_size_astc_10x8, _texc_decode_astc_10x10, _texc_encode_astc_10x10, _texc_encoded_size_astc_10x10, _texc_decode_astc_12x10, _texc_encode_astc_12x10, _texc_encoded_size_astc_12x10, _texc_decode_astc_12x12, _texc_encode_astc_12x12, _texc_encoded_size_astc_12x12, _texc_decode_atc_rgb, _texc_encode_atc_rgb, _texc_encoded_size_atc_rgb, _texc_decode_atc_rgba_explicit, _texc_encode_atc_rgba_explicit, _texc_encoded_size_atc_rgba_explicit, _texc_decode_atc_rgba_interpolated, _texc_encode_atc_rgba_interpolated, _texc_encoded_size_atc_rgba_interpolated, _texc_decode_etc1_rgb_a_atlas, _texc_encode_etc1_rgb_a_atlas, _texc_encoded_size_etc1_rgb_a_atlas, _texc_decode_pvrtc1_4bpp_rgb_a_atlas, _texc_encode_pvrtc1_4bpp_rgb_a_atlas, _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas, _texc_decode_etc2_rgb_a_atlas, _texc_encode_etc2_rgb_a_atlas, _texc_encoded_size_etc2_rgb_a_atlas, _texc_decode_pica_etc1_rgb8, _texc_encode_pica_etc1_rgb8, _texc_encoded_size_pica_etc1_rgb8, _texc_decode_pica_etc1_rgb8a4, _texc_encode_pica_etc1_rgb8a4, _texc_encoded_size_pica_etc1_rgb8a4, _texc_decode_wii_i4, _texc_encode_wii_i4, _texc_encoded_size_wii_i4, _texc_decode_wii_i8, _texc_encode_wii_i8, _texc_encoded_size_wii_i8, _texc_decode_wii_ia4, _texc_encode_wii_ia4, _texc_encoded_size_wii_ia4, _texc_decode_wii_ia8, _texc_encode_wii_ia8, _texc_encoded_size_wii_ia8, _texc_decode_wii_rgb565, _texc_encode_wii_rgb565, _texc_encoded_size_wii_rgb565, _texc_decode_wii_rgb5a3, _texc_encode_wii_rgb5a3, _texc_encoded_size_wii_rgb5a3, _texc_decode_wii_rgba8, _texc_encode_wii_rgba8, _texc_encoded_size_wii_rgba8, _texc_decode_wii_cmpr, _texc_encode_wii_cmpr, _texc_encoded_size_wii_cmpr, _texc_decode_wii_c4, _texc_encode_wii_c4, _texc_encoded_size_wii_c4, _texc_decode_wii_c8, _texc_encode_wii_c8, _texc_encoded_size_wii_c8, _texc_decode_wii_c14x2, _texc_encode_wii_c14x2, _texc_encoded_size_wii_c14x2, _texc_unswizzle_ps4, _texc_reswizzle_ps4, _texc_swizzle_ps4, _texc_swizzled_size_ps4, _texc_unswizzle_ps5, _texc_reswizzle_ps5, _texc_swizzle_ps5, _texc_swizzled_size_ps5, _texc_unswizzle_switch, _texc_reswizzle_switch, _texc_swizzle_switch, _texc_swizzled_size_switch, _texc_unswizzle_psvita, _texc_reswizzle_psvita, _texc_swizzle_psvita, _texc_swizzled_size_psvita, _texc_unswizzle_x360, _texc_reswizzle_x360, _texc_swizzle_x360, _texc_swizzled_size_x360, _texc_unswizzle_psp, _texc_reswizzle_psp, _texc_swizzle_psp, _texc_swizzled_size_psp, _texc_unswizzle_n3ds, _texc_reswizzle_n3ds, _texc_swizzle_n3ds, _texc_swizzled_size_n3ds, _texc_unswizzle_wiiu, _texc_reswizzle_wiiu, _texc_swizzle_wiiu, _texc_swizzled_size_wiiu, _texc_unswizzle_dx12_64kb, _texc_reswizzle_dx12_64kb, _texc_swizzle_dx12_64kb, _texc_swizzled_size_dx12_64kb, _texc_unswizzle_switch2, _texc_reswizzle_switch2, _texc_swizzle_switch2, _texc_swizzled_size_switch2, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, memory, __indirect_function_table, wasmMemory;
        function assignWasmExports(wasmExports) { _texc_version = Module[$1f78dc[57]] = wasmExports[$1f78dc[58]]; _texc_version_string = Module[$1f78dc[59]] = wasmExports[$1f78dc[60]]; _texc_build_info = Module[$1f78dc[61]] = wasmExports[$1f78dc[62]]; _texc_format_name = Module[$1f78dc[63]] = wasmExports[$1f78dc[64]]; _texc_result_str = Module[$1f78dc[65]] = wasmExports[$1f78dc[66]]; _texc_block_dims = Module[$1f78dc[67]] = wasmExports[$1f78dc[68]]; _texc_encoded_size = Module[$1f78dc[69]] = wasmExports[$1f78dc[70]]; _texc_decoded_size = Module[$1f78dc[71]] = wasmExports[$1f78dc[72]]; _texc_can_decode = Module[$1f78dc[73]] = wasmExports[$1f78dc[74]]; _texc_can_encode = Module[$1f78dc[75]] = wasmExports[$1f78dc[76]]; _texc_is_paletted = Module[$1f78dc[77]] = wasmExports[$1f78dc[78]]; _texc_palette_size = Module[$1f78dc[79]] = wasmExports[$1f78dc[80]]; _texc_decode_paletted = Module[$1f78dc[81]] = wasmExports[$1f78dc[82]]; _texc_decode = Module[$1f78dc[83]] = wasmExports[$1f78dc[84]]; _malloc = Module[$1f78dc[85]] = wasmExports[$1f78dc[86]]; _free = Module[$1f78dc[87]] = wasmExports[$1f78dc[88]]; _texc_decode_f32 = Module[$1f78dc[89]] = wasmExports[$1f78dc[90]]; _texc_encode_options_init = Module[$1f78dc[91]] = wasmExports[$1f78dc[92]]; _texc_encode_ex = Module[$1f78dc[93]] = wasmExports[$1f78dc[94]]; _texc_encode = Module[$1f78dc[95]] = wasmExports[$1f78dc[96]]; _texc_encode_f32 = Module[$1f78dc[97]] = wasmExports[$1f78dc[98]]; _texc_swizzled_size = Module[$1f78dc[99]] = wasmExports[$1f78dc[100]]; _texc_unswizzled_size = Module[$1f78dc[101]] = wasmExports[$1f78dc[102]]; _texc_unswizzle = Module[$1f78dc[103]] = wasmExports[$1f78dc[104]]; _texc_swizzle = Module[$1f78dc[105]] = wasmExports[$1f78dc[106]]; _texc_reswizzle = Module[$1f78dc[107]] = wasmExports[$1f78dc[108]]; _texc_get_surface_layout = Module[$1f78dc[109]] = wasmExports[$1f78dc[110]]; _texc_ps5_detect_tile_mode = Module[$1f78dc[111]] = wasmExports[$1f78dc[112]]; _texc_ps5_default_tile_mode = Module[$1f78dc[113]] = wasmExports[$1f78dc[114]]; _texc_unswizzle_mip = Module[$1f78dc[115]] = wasmExports[$1f78dc[116]]; _texc_reswizzle_mip = Module[$1f78dc[117]] = wasmExports[$1f78dc[118]]; _texc_get_volume_layout = Module[$1f78dc[119]] = wasmExports[$1f78dc[120]]; _texc_unswizzle_volume_mip = Module[$1f78dc[121]] = wasmExports[$1f78dc[122]]; _texc_reswizzle_volume_mip = Module[$1f78dc[123]] = wasmExports[$1f78dc[124]]; _texc_decode_swizzled = Module[$1f78dc[125]] = wasmExports[$1f78dc[126]]; _texc_alloc = Module[$1f78dc[127]] = wasmExports[$1f78dc[128]]; _texc_free = Module[$1f78dc[129]] = wasmExports[$1f78dc[130]]; _texc_profile_name = Module[$1f78dc[131]] = wasmExports[$1f78dc[132]]; _texc_profile_bytes_per_pixel = Module[$1f78dc[133]] = wasmExports[$1f78dc[134]]; _texc_convert_profile = Module[$1f78dc[135]] = wasmExports[$1f78dc[136]]; _texc_flip_y = Module[$1f78dc[137]] = wasmExports[$1f78dc[138]]; _texc_flip_x = Module[$1f78dc[139]] = wasmExports[$1f78dc[140]]; _texc_crop = Module[$1f78dc[141]] = wasmExports[$1f78dc[142]]; _texc_last_error = Module[$1f78dc[143]] = wasmExports[$1f78dc[144]]; _texc_encode_with_options = Module[$1f78dc[145]] = wasmExports[$1f78dc[146]]; _texc_decode_alloc = Module[$1f78dc[147]] = wasmExports[$1f78dc[148]]; _texc_decode_f32_alloc = Module[$1f78dc[149]] = wasmExports[$1f78dc[150]]; _texc_decode_swizzled_alloc = Module[$1f78dc[151]] = wasmExports[$1f78dc[32]]; _texc_decode_paletted_alloc = Module[$1f78dc[152]] = wasmExports[$1f78dc[153]]; _texc_encode_alloc = Module[$1f78dc[154]] = wasmExports[$1f78dc[155]]; _texc_swizzle_alloc = Module[$1f78dc[156]] = wasmExports[$1f78dc[157]]; _texc_unswizzle_mip_alloc = Module[$1f78dc[158]] = wasmExports[$1f78dc[159]]; _texc_unswizzle_volume_mip_alloc = Module[$1f78dc[160]] = wasmExports[$1f78dc[161]]; _texc_decode_rgba8 = Module[$1f78dc[162]] = wasmExports[$1f78dc[163]]; _texc_encode_rgba8 = Module[$1f78dc[164]] = wasmExports[$1f78dc[165]]; _texc_encoded_size_rgba8 = Module[$1f78dc[166]] = wasmExports[$1f78dc[167]]; _texc_decode_bc1 = Module[$1f78dc[168]] = wasmExports[$1f78dc[169]]; _texc_encode_bc1 = Module[$1f78dc[170]] = wasmExports[$1f78dc[171]]; _texc_encoded_size_bc1 = Module[$1f78dc[172]] = wasmExports[$1f78dc[173]]; _texc_decode_bc2 = Module[$1f78dc[174]] = wasmExports[$1f78dc[175]]; _texc_encode_bc2 = Module[$1f78dc[176]] = wasmExports[$1f78dc[177]]; _texc_encoded_size_bc2 = Module[$1f78dc[178]] = wasmExports[$1f78dc[179]]; _texc_decode_bc3 = Module[$1f78dc[180]] = wasmExports[$1f78dc[181]]; _texc_encode_bc3 = Module[$1f78dc[182]] = wasmExports[$1f78dc[183]]; _texc_encoded_size_bc3 = Module[$1f78dc[184]] = wasmExports[$1f78dc[185]]; _texc_decode_bc4 = Module[$1f78dc[186]] = wasmExports[$1f78dc[187]]; _texc_encode_bc4 = Module[$1f78dc[188]] = wasmExports[$1f78dc[189]]; _texc_encoded_size_bc4 = Module[$1f78dc[190]] = wasmExports[$1f78dc[191]]; _texc_decode_bc4_snorm = Module[$1f78dc[192]] = wasmExports[$1f78dc[193]]; _texc_encode_bc4_snorm = Module[$1f78dc[194]] = wasmExports[$1f78dc[195]]; _texc_encoded_size_bc4_snorm = Module[$1f78dc[196]] = wasmExports[$1f78dc[197]]; _texc_decode_bc5 = Module[$1f78dc[198]] = wasmExports[$1f78dc[199]]; _texc_encode_bc5 = Module[$1f78dc[200]] = wasmExports[$1f78dc[201]]; _texc_encoded_size_bc5 = Module[$1f78dc[202]] = wasmExports[$1f78dc[203]]; _texc_decode_bc5_snorm = Module[$1f78dc[204]] = wasmExports[$1f78dc[205]]; _texc_encode_bc5_snorm = Module[$1f78dc[206]] = wasmExports[$1f78dc[207]]; _texc_encoded_size_bc5_snorm = Module[$1f78dc[208]] = wasmExports[$1f78dc[209]]; _texc_decode_bc6h_uf16 = Module[$1f78dc[210]] = wasmExports[$1f78dc[211]]; _texc_encode_bc6h_uf16 = Module[$1f78dc[212]] = wasmExports[$1f78dc[213]]; _texc_encoded_size_bc6h_uf16 = Module[$1f78dc[214]] = wasmExports[$1f78dc[215]]; _texc_decode_bc6h_sf16 = Module[$1f78dc[216]] = wasmExports[$1f78dc[217]]; _texc_encode_bc6h_sf16 = Module[$1f78dc[218]] = wasmExports[$1f78dc[219]]; _texc_encoded_size_bc6h_sf16 = Module[$1f78dc[220]] = wasmExports[$1f78dc[221]]; _texc_decode_bc7 = Module[$1f78dc[222]] = wasmExports[$1f78dc[223]]; _texc_encode_bc7 = Module[$1f78dc[224]] = wasmExports[$1f78dc[225]]; _texc_encoded_size_bc7 = Module[$1f78dc[226]] = wasmExports[$1f78dc[227]]; _texc_decode_etc1_rgb = Module[$1f78dc[228]] = wasmExports[$1f78dc[229]]; _texc_encode_etc1_rgb = Module[$1f78dc[230]] = wasmExports[$1f78dc[231]]; _texc_encoded_size_etc1_rgb = Module[$1f78dc[232]] = wasmExports[$1f78dc[233]]; _texc_decode_etc2_rgb = Module[$1f78dc[234]] = wasmExports[$1f78dc[235]]; _texc_encode_etc2_rgb = Module[$1f78dc[236]] = wasmExports[$1f78dc[237]]; _texc_encoded_size_etc2_rgb = Module[$1f78dc[238]] = wasmExports[$1f78dc[239]]; _texc_decode_etc2_rgba1 = Module[$1f78dc[240]] = wasmExports[$1f78dc[241]]; _texc_encode_etc2_rgba1 = Module[$1f78dc[242]] = wasmExports[$1f78dc[243]]; _texc_encoded_size_etc2_rgba1 = Module[$1f78dc[244]] = wasmExports[$1f78dc[245]]; _texc_decode_etc2_rgba8 = Module[$1f78dc[246]] = wasmExports[$1f78dc[247]]; _texc_encode_etc2_rgba8 = Module[$1f78dc[248]] = wasmExports[$1f78dc[249]]; _texc_encoded_size_etc2_rgba8 = Module[$1f78dc[250]] = wasmExports[$1f78dc[251]]; _texc_decode_eac_r11 = Module[$1f78dc[252]] = wasmExports[$1f78dc[253]]; _texc_encode_eac_r11 = Module[$1f78dc[254]] = wasmExports[$1f78dc[255]]; _texc_encoded_size_eac_r11 = Module[$1f78dc[256]] = wasmExports[$1f78dc[257]]; _texc_decode_eac_r11_signed = Module[$1f78dc[258]] = wasmExports[$1f78dc[259]]; _texc_encode_eac_r11_signed = Module[$1f78dc[260]] = wasmExports[$1f78dc[261]]; _texc_encoded_size_eac_r11_signed = Module[$1f78dc[262]] = wasmExports[$1f78dc[263]]; _texc_decode_eac_rg11 = Module[$1f78dc[264]] = wasmExports[$1f78dc[265]]; _texc_encode_eac_rg11 = Module[$1f78dc[266]] = wasmExports[$1f78dc[267]]; _texc_encoded_size_eac_rg11 = Module[$1f78dc[268]] = wasmExports[$1f78dc[269]]; _texc_decode_eac_rg11_signed = Module[$1f78dc[270]] = wasmExports[$1f78dc[271]]; _texc_encode_eac_rg11_signed = Module[$1f78dc[272]] = wasmExports[$1f78dc[273]]; _texc_encoded_size_eac_rg11_signed = Module[$1f78dc[274]] = wasmExports[$1f78dc[275]]; _texc_decode_pvrtc1_2bpp_rgb = Module[$1f78dc[276]] = wasmExports[$1f78dc[277]]; _texc_encode_pvrtc1_2bpp_rgb = Module[$1f78dc[278]] = wasmExports[$1f78dc[279]]; _texc_encoded_size_pvrtc1_2bpp_rgb = Module[$1f78dc[280]] = wasmExports[$1f78dc[281]]; _texc_decode_pvrtc1_2bpp_rgba = Module[$1f78dc[282]] = wasmExports[$1f78dc[283]]; _texc_encode_pvrtc1_2bpp_rgba = Module[$1f78dc[284]] = wasmExports[$1f78dc[285]]; _texc_encoded_size_pvrtc1_2bpp_rgba = Module[$1f78dc[286]] = wasmExports[$1f78dc[287]]; _texc_decode_pvrtc1_4bpp_rgb = Module[$1f78dc[288]] = wasmExports[$1f78dc[289]]; _texc_encode_pvrtc1_4bpp_rgb = Module[$1f78dc[290]] = wasmExports[$1f78dc[291]]; _texc_encoded_size_pvrtc1_4bpp_rgb = Module[$1f78dc[292]] = wasmExports[$1f78dc[293]]; _texc_decode_pvrtc1_4bpp_rgba = Module[$1f78dc[294]] = wasmExports[$1f78dc[295]]; _texc_encode_pvrtc1_4bpp_rgba = Module[$1f78dc[296]] = wasmExports[$1f78dc[297]]; _texc_encoded_size_pvrtc1_4bpp_rgba = Module[$1f78dc[298]] = wasmExports[$1f78dc[299]]; _texc_decode_pvrtc2_2bpp = Module[$1f78dc[300]] = wasmExports[$1f78dc[301]]; _texc_encode_pvrtc2_2bpp = Module[$1f78dc[302]] = wasmExports[$1f78dc[303]]; _texc_encoded_size_pvrtc2_2bpp = Module[$1f78dc[304]] = wasmExports[$1f78dc[305]]; _texc_decode_pvrtc2_4bpp = Module[$1f78dc[306]] = wasmExports[$1f78dc[307]]; _texc_encode_pvrtc2_4bpp = Module[$1f78dc[308]] = wasmExports[$1f78dc[309]]; _texc_encoded_size_pvrtc2_4bpp = Module[$1f78dc[310]] = wasmExports[$1f78dc[311]]; _texc_decode_astc_4x4 = Module[$1f78dc[312]] = wasmExports[$1f78dc[313]]; _texc_encode_astc_4x4 = Module[$1f78dc[314]] = wasmExports[$1f78dc[315]]; _texc_encoded_size_astc_4x4 = Module[$1f78dc[316]] = wasmExports[$1f78dc[317]]; _texc_decode_astc_5x4 = Module[$1f78dc[318]] = wasmExports[$1f78dc[319]]; _texc_encode_astc_5x4 = Module[$1f78dc[320]] = wasmExports[$1f78dc[321]]; _texc_encoded_size_astc_5x4 = Module[$1f78dc[322]] = wasmExports[$1f78dc[323]]; _texc_decode_astc_5x5 = Module[$1f78dc[324]] = wasmExports[$1f78dc[325]]; _texc_encode_astc_5x5 = Module[$1f78dc[326]] = wasmExports[$1f78dc[327]]; _texc_encoded_size_astc_5x5 = Module[$1f78dc[328]] = wasmExports[$1f78dc[329]]; _texc_decode_astc_6x5 = Module[$1f78dc[330]] = wasmExports[$1f78dc[331]]; _texc_encode_astc_6x5 = Module[$1f78dc[332]] = wasmExports[$1f78dc[333]]; _texc_encoded_size_astc_6x5 = Module[$1f78dc[334]] = wasmExports[$1f78dc[335]]; _texc_decode_astc_6x6 = Module[$1f78dc[336]] = wasmExports[$1f78dc[337]]; _texc_encode_astc_6x6 = Module[$1f78dc[338]] = wasmExports[$1f78dc[339]]; _texc_encoded_size_astc_6x6 = Module[$1f78dc[340]] = wasmExports[$1f78dc[341]]; _texc_decode_astc_8x5 = Module[$1f78dc[342]] = wasmExports[$1f78dc[343]]; _texc_encode_astc_8x5 = Module[$1f78dc[344]] = wasmExports[$1f78dc[345]]; _texc_encoded_size_astc_8x5 = Module[$1f78dc[346]] = wasmExports[$1f78dc[347]]; _texc_decode_astc_8x6 = Module[$1f78dc[348]] = wasmExports[$1f78dc[349]]; _texc_encode_astc_8x6 = Module[$1f78dc[350]] = wasmExports[$1f78dc[351]]; _texc_encoded_size_astc_8x6 = Module[$1f78dc[352]] = wasmExports[$1f78dc[353]]; _texc_decode_astc_8x8 = Module[$1f78dc[354]] = wasmExports[$1f78dc[355]]; _texc_encode_astc_8x8 = Module[$1f78dc[356]] = wasmExports[$1f78dc[357]]; _texc_encoded_size_astc_8x8 = Module[$1f78dc[358]] = wasmExports[$1f78dc[359]]; _texc_decode_astc_10x5 = Module[$1f78dc[360]] = wasmExports[$1f78dc[361]]; _texc_encode_astc_10x5 = Module[$1f78dc[362]] = wasmExports[$1f78dc[363]]; _texc_encoded_size_astc_10x5 = Module[$1f78dc[364]] = wasmExports[$1f78dc[365]]; _texc_decode_astc_10x6 = Module[$1f78dc[366]] = wasmExports[$1f78dc[367]]; _texc_encode_astc_10x6 = Module[$1f78dc[368]] = wasmExports[$1f78dc[369]]; _texc_encoded_size_astc_10x6 = Module[$1f78dc[370]] = wasmExports[$1f78dc[371]]; _texc_decode_astc_10x8 = Module[$1f78dc[372]] = wasmExports[$1f78dc[373]]; _texc_encode_astc_10x8 = Module[$1f78dc[374]] = wasmExports[$1f78dc[375]]; _texc_encoded_size_astc_10x8 = Module[$1f78dc[376]] = wasmExports[$1f78dc[377]]; _texc_decode_astc_10x10 = Module[$1f78dc[378]] = wasmExports[$1f78dc[379]]; _texc_encode_astc_10x10 = Module[$1f78dc[380]] = wasmExports[$1f78dc[381]]; _texc_encoded_size_astc_10x10 = Module[$1f78dc[382]] = wasmExports[$1f78dc[383]]; _texc_decode_astc_12x10 = Module[$1f78dc[384]] = wasmExports[$1f78dc[385]]; _texc_encode_astc_12x10 = Module[$1f78dc[386]] = wasmExports[$1f78dc[387]]; _texc_encoded_size_astc_12x10 = Module[$1f78dc[388]] = wasmExports[$1f78dc[389]]; _texc_decode_astc_12x12 = Module[$1f78dc[390]] = wasmExports[$1f78dc[391]]; _texc_encode_astc_12x12 = Module[$1f78dc[392]] = wasmExports[$1f78dc[393]]; _texc_encoded_size_astc_12x12 = Module[$1f78dc[394]] = wasmExports[$1f78dc[395]]; _texc_decode_atc_rgb = Module[$1f78dc[396]] = wasmExports[$1f78dc[397]]; _texc_encode_atc_rgb = Module[$1f78dc[398]] = wasmExports[$1f78dc[399]]; _texc_encoded_size_atc_rgb = Module[$1f78dc[400]] = wasmExports[$1f78dc[401]]; _texc_decode_atc_rgba_explicit = Module[$1f78dc[402]] = wasmExports[$1f78dc[403]]; _texc_encode_atc_rgba_explicit = Module[$1f78dc[404]] = wasmExports[$1f78dc[405]]; _texc_encoded_size_atc_rgba_explicit = Module[$1f78dc[406]] = wasmExports[$1f78dc[407]]; _texc_decode_atc_rgba_interpolated = Module[$1f78dc[408]] = wasmExports[$1f78dc[409]]; _texc_encode_atc_rgba_interpolated = Module[$1f78dc[410]] = wasmExports[$1f78dc[411]]; _texc_encoded_size_atc_rgba_interpolated = Module[$1f78dc[412]] = wasmExports[$1f78dc[413]]; _texc_decode_etc1_rgb_a_atlas = Module[$1f78dc[414]] = wasmExports[$1f78dc[415]]; _texc_encode_etc1_rgb_a_atlas = Module[$1f78dc[416]] = wasmExports[$1f78dc[417]]; _texc_encoded_size_etc1_rgb_a_atlas = Module[$1f78dc[418]] = wasmExports[$1f78dc[419]]; _texc_decode_pvrtc1_4bpp_rgb_a_atlas = Module[$1f78dc[420]] = wasmExports[$1f78dc[421]]; _texc_encode_pvrtc1_4bpp_rgb_a_atlas = Module[$1f78dc[422]] = wasmExports[$1f78dc[423]]; _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas = Module[$1f78dc[424]] = wasmExports[$1f78dc[425]]; _texc_decode_etc2_rgb_a_atlas = Module[$1f78dc[426]] = wasmExports[$1f78dc[427]]; _texc_encode_etc2_rgb_a_atlas = Module[$1f78dc[428]] = wasmExports[$1f78dc[429]]; _texc_encoded_size_etc2_rgb_a_atlas = Module[$1f78dc[430]] = wasmExports[$1f78dc[431]]; _texc_decode_pica_etc1_rgb8 = Module[$1f78dc[432]] = wasmExports[$1f78dc[433]]; _texc_encode_pica_etc1_rgb8 = Module[$1f78dc[434]] = wasmExports[$1f78dc[435]]; _texc_encoded_size_pica_etc1_rgb8 = Module[$1f78dc[436]] = wasmExports[$1f78dc[437]]; _texc_decode_pica_etc1_rgb8a4 = Module[$1f78dc[438]] = wasmExports[$1f78dc[439]]; _texc_encode_pica_etc1_rgb8a4 = Module[$1f78dc[440]] = wasmExports[$1f78dc[441]]; _texc_encoded_size_pica_etc1_rgb8a4 = Module[$1f78dc[442]] = wasmExports[$1f78dc[443]]; _texc_decode_wii_i4 = Module[$1f78dc[444]] = wasmExports[$1f78dc[445]]; _texc_encode_wii_i4 = Module[$1f78dc[446]] = wasmExports[$1f78dc[447]]; _texc_encoded_size_wii_i4 = Module[$1f78dc[448]] = wasmExports[$1f78dc[449]]; _texc_decode_wii_i8 = Module[$1f78dc[450]] = wasmExports[$1f78dc[451]]; _texc_encode_wii_i8 = Module[$1f78dc[452]] = wasmExports[$1f78dc[453]]; _texc_encoded_size_wii_i8 = Module[$1f78dc[454]] = wasmExports[$1f78dc[455]]; _texc_decode_wii_ia4 = Module[$1f78dc[456]] = wasmExports[$1f78dc[457]]; _texc_encode_wii_ia4 = Module[$1f78dc[458]] = wasmExports[$1f78dc[459]]; _texc_encoded_size_wii_ia4 = Module[$1f78dc[460]] = wasmExports[$1f78dc[461]]; _texc_decode_wii_ia8 = Module[$1f78dc[462]] = wasmExports[$1f78dc[463]]; _texc_encode_wii_ia8 = Module[$1f78dc[464]] = wasmExports[$1f78dc[465]]; _texc_encoded_size_wii_ia8 = Module[$1f78dc[466]] = wasmExports[$1f78dc[467]]; _texc_decode_wii_rgb565 = Module[$1f78dc[468]] = wasmExports[$1f78dc[469]]; _texc_encode_wii_rgb565 = Module[$1f78dc[470]] = wasmExports[$1f78dc[471]]; _texc_encoded_size_wii_rgb565 = Module[$1f78dc[472]] = wasmExports[$1f78dc[473]]; _texc_decode_wii_rgb5a3 = Module[$1f78dc[474]] = wasmExports[$1f78dc[475]]; _texc_encode_wii_rgb5a3 = Module[$1f78dc[476]] = wasmExports[$1f78dc[477]]; _texc_encoded_size_wii_rgb5a3 = Module[$1f78dc[478]] = wasmExports[$1f78dc[479]]; _texc_decode_wii_rgba8 = Module[$1f78dc[480]] = wasmExports[$1f78dc[481]]; _texc_encode_wii_rgba8 = Module[$1f78dc[482]] = wasmExports[$1f78dc[483]]; _texc_encoded_size_wii_rgba8 = Module[$1f78dc[484]] = wasmExports[$1f78dc[485]]; _texc_decode_wii_cmpr = Module[$1f78dc[486]] = wasmExports[$1f78dc[487]]; _texc_encode_wii_cmpr = Module[$1f78dc[488]] = wasmExports[$1f78dc[489]]; _texc_encoded_size_wii_cmpr = Module[$1f78dc[490]] = wasmExports[$1f78dc[491]]; _texc_decode_wii_c4 = Module[$1f78dc[492]] = wasmExports[$1f78dc[493]]; _texc_encode_wii_c4 = Module[$1f78dc[494]] = wasmExports[$1f78dc[495]]; _texc_encoded_size_wii_c4 = Module[$1f78dc[496]] = wasmExports[$1f78dc[497]]; _texc_decode_wii_c8 = Module[$1f78dc[498]] = wasmExports[$1f78dc[499]]; _texc_encode_wii_c8 = Module[$1f78dc[500]] = wasmExports[$1f78dc[501]]; _texc_encoded_size_wii_c8 = Module[$1f78dc[502]] = wasmExports[$1f78dc[503]]; _texc_decode_wii_c14x2 = Module[$1f78dc[504]] = wasmExports[$1f78dc[505]]; _texc_encode_wii_c14x2 = Module[$1f78dc[506]] = wasmExports[$1f78dc[507]]; _texc_encoded_size_wii_c14x2 = Module[$1f78dc[508]] = wasmExports[$1f78dc[509]]; _texc_unswizzle_ps4 = Module[$1f78dc[510]] = wasmExports[$1f78dc[511]]; _texc_reswizzle_ps4 = Module[$1f78dc[512]] = wasmExports[$1f78dc[513]]; _texc_swizzle_ps4 = Module[$1f78dc[514]] = wasmExports[$1f78dc[515]]; _texc_swizzled_size_ps4 = Module[$1f78dc[516]] = wasmExports[$1f78dc[517]]; _texc_unswizzle_ps5 = Module[$1f78dc[518]] = wasmExports[$1f78dc[519]]; _texc_reswizzle_ps5 = Module[$1f78dc[520]] = wasmExports[$1f78dc[521]]; _texc_swizzle_ps5 = Module[$1f78dc[522]] = wasmExports[$1f78dc[523]]; _texc_swizzled_size_ps5 = Module[$1f78dc[524]] = wasmExports[$1f78dc[525]]; _texc_unswizzle_switch = Module[$1f78dc[526]] = wasmExports[$1f78dc[527]]; _texc_reswizzle_switch = Module[$1f78dc[528]] = wasmExports[$1f78dc[529]]; _texc_swizzle_switch = Module[$1f78dc[530]] = wasmExports[$1f78dc[531]]; _texc_swizzled_size_switch = Module[$1f78dc[532]] = wasmExports[$1f78dc[533]]; _texc_unswizzle_psvita = Module[$1f78dc[534]] = wasmExports[$1f78dc[535]]; _texc_reswizzle_psvita = Module[$1f78dc[536]] = wasmExports[$1f78dc[537]]; _texc_swizzle_psvita = Module[$1f78dc[538]] = wasmExports[$1f78dc[539]]; _texc_swizzled_size_psvita = Module[$1f78dc[540]] = wasmExports[$1f78dc[541]]; _texc_unswizzle_x360 = Module[$1f78dc[542]] = wasmExports[$1f78dc[543]]; _texc_reswizzle_x360 = Module[$1f78dc[544]] = wasmExports[$1f78dc[545]]; _texc_swizzle_x360 = Module[$1f78dc[546]] = wasmExports[$1f78dc[547]]; _texc_swizzled_size_x360 = Module[$1f78dc[548]] = wasmExports[$1f78dc[549]]; _texc_unswizzle_psp = Module[$1f78dc[550]] = wasmExports[$1f78dc[551]]; _texc_reswizzle_psp = Module[$1f78dc[552]] = wasmExports[$1f78dc[553]]; _texc_swizzle_psp = Module[$1f78dc[554]] = wasmExports[$1f78dc[555]]; _texc_swizzled_size_psp = Module[$1f78dc[556]] = wasmExports[$1f78dc[557]]; _texc_unswizzle_n3ds = Module[$1f78dc[558]] = wasmExports[$1f78dc[559]]; _texc_reswizzle_n3ds = Module[$1f78dc[560]] = wasmExports[$1f78dc[561]]; _texc_swizzle_n3ds = Module[$1f78dc[562]] = wasmExports[$1f78dc[563]]; _texc_swizzled_size_n3ds = Module[$1f78dc[564]] = wasmExports[$1f78dc[565]]; _texc_unswizzle_wiiu = Module[$1f78dc[566]] = wasmExports[$1f78dc[567]]; _texc_reswizzle_wiiu = Module[$1f78dc[568]] = wasmExports[$1f78dc[569]]; _texc_swizzle_wiiu = Module[$1f78dc[570]] = wasmExports[$1f78dc[571]]; _texc_swizzled_size_wiiu = Module[$1f78dc[572]] = wasmExports[$1f78dc[573]]; _texc_unswizzle_dx12_64kb = Module[$1f78dc[574]] = wasmExports[$1f78dc[575]]; _texc_reswizzle_dx12_64kb = Module[$1f78dc[576]] = wasmExports[$1f78dc[577]]; _texc_swizzle_dx12_64kb = Module[$1f78dc[578]] = wasmExports[$1f78dc[579]]; _texc_swizzled_size_dx12_64kb = Module[$1f78dc[580]] = wasmExports[$1f78dc[581]]; _texc_unswizzle_switch2 = Module[$1f78dc[582]] = wasmExports[$1f78dc[583]]; _texc_reswizzle_switch2 = Module[$1f78dc[584]] = wasmExports[$1f78dc[585]]; _texc_swizzle_switch2 = Module[$1f78dc[586]] = wasmExports[$1f78dc[587]]; _texc_swizzled_size_switch2 = Module[$1f78dc[588]] = wasmExports[$1f78dc[589]]; __emscripten_stack_restore = wasmExports[$1f78dc[590]]; __emscripten_stack_alloc = wasmExports[$1f78dc[591]]; _emscripten_stack_get_current = wasmExports[$1f78dc[592]]; memory = wasmMemory = wasmExports[$1f78dc[593]]; __indirect_function_table = wasmExports[$1f78dc[594]]; }
        var wasmImports = { c: __abort_js, b: _emscripten_resize_heap, a: _fd_write };
        async function run() { preRun(); var setStatus = Module[$1f78dc[595]]; if (setStatus) {
            setStatus($1f78dc[596]);
            await new Promise(resolve => setTimeout(resolve, 1));
            setTimeout(setStatus, 1, "");
        } if (ABORT)
            return; initRuntime(); Module[$1f78dc[597]]?.(); postRun(); }
        var wasmExports;
        wasmExports = await createWasm();
        await run();
        ;
        return Module;
    };
})();
if (typeof exports === $1f78dc[598] && typeof module === $1f78dc[598]) {
    module.exports = TexCodec;
    module.exports.default = TexCodec;
}
else if (typeof define === $1f78dc[16] && define[$1f78dc[599]])
    define([], () => TexCodec);
