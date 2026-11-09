const $06a8fe=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",292489687,"\u0000");var TexCodec = (() => {
    var _scriptName = globalThis.document?.currentScript?.src;
    return async function (moduleArg = {}) {
        var Module = moduleArg;
        var ENVIRONMENT_IS_WEB = !!globalThis.window;
        var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
        var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != $06a8fe[0];
        var programArgs = [];
        var thisProgram = $06a8fe[1];
        var quit_ = (status, toThrow) => { throw toThrow; };
        if (typeof __filename != $06a8fe[2]) {
            _scriptName = __filename;
        }
        else if (ENVIRONMENT_IS_WORKER) {
            _scriptName = self.location.href;
        }
        var scriptDirectory = "";
        function locateFile(path) { if (Module[$06a8fe[3]]) {
            return Module[$06a8fe[3]](path, scriptDirectory);
        } return scriptDirectory + path; }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
            var fs = require($06a8fe[4]);
            scriptDirectory = __dirname + $06a8fe[5];
            readBinary = filename => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename); return ret; };
            readAsync = async (filename, binary = true) => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename, binary ? undefined : $06a8fe[6]); return ret; };
            if (process.argv.length > 1) {
                thisProgram = process.argv[1].replace(/\\/g, $06a8fe[5]);
            }
            programArgs = process.argv.slice(2);
            quit_ = (status, toThrow) => { process.exitCode = status; throw toThrow; };
        }
        else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            try {
                scriptDirectory = new URL($06a8fe[7], _scriptName).href;
            }
            catch { }
            {
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = url => { var xhr = new XMLHttpRequest; xhr.open($06a8fe[8], url, false); xhr.responseType = $06a8fe[9]; xhr.send(null); return new Uint8Array(xhr.response); };
                }
                readAsync = async (url) => { var response = await fetch(url, { credentials: $06a8fe[10] }); if (response.ok) {
                    return response.arrayBuffer();
                } throw new Error(response.status + $06a8fe[11] + response.url); };
            }
        }
        else { }
        var out = console.log.bind(console);
        var err = console.error.bind(console);
        var wasmBinary;
        var ABORT = false;
        var isFileURI = filename => filename.startsWith($06a8fe[12]);
        class EmscriptenEH {
        }
        class EmscriptenSjLj extends EmscriptenEH {
        }
        var runtimeInitialized = false;
        function getMemoryBuffer() { return wasmMemory.buffer; }
        function updateMemoryViews() { if (HEAP8?.buffer?.resizable)
            return; var b = getMemoryBuffer(); HEAP8 = new Int8Array(b); HEAP16 = new Int16Array(b); Module[$06a8fe[13]] = HEAPU8 = new Uint8Array(b); HEAP32 = new Int32Array(b); HEAPU32 = new Uint32Array(b); Module[$06a8fe[14]] = HEAPF32 = new Float32Array(b); HEAPF64 = new Float64Array(b); HEAP64 = new BigInt64Array(b); }
        function preRun() { var preRun = Module[$06a8fe[15]]; if (preRun) {
            if (typeof preRun == $06a8fe[16])
                preRun = [preRun];
            onPreRuns.push(...preRun);
        } callRuntimeCallbacks(onPreRuns); }
        function initRuntime() { runtimeInitialized = true; wasmExports[$06a8fe[17]](); }
        function postRun() { var postRun = Module[$06a8fe[18]]; if (postRun) {
            if (typeof postRun == $06a8fe[16])
                postRun = [postRun];
            onPostRuns.push(...postRun);
        } callRuntimeCallbacks(onPostRuns); }
        function abort(what) { Module[$06a8fe[19]]?.(what); what = `${$06a8fe[20]}${what}${$06a8fe[21]}`; err(what); ABORT = true; what += $06a8fe[22]; var e = new WebAssembly.RuntimeError(what); throw e; }
        var wasmBinaryFile;
        function findWasmBinary() { return locateFile($06a8fe[23]); }
        function getBinarySync(file) { if (readBinary) {
            return readBinary(file);
        } throw $06a8fe[24]; }
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
            err(`${$06a8fe[25]}${reason}`);
            abort(reason);
        } }
        async function instantiateAsync(binary, binaryFile, imports) { if (!binary && !ENVIRONMENT_IS_NODE) {
            try {
                var response = fetch(binaryFile, { credentials: $06a8fe[10] });
                var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
                return instantiationResult;
            }
            catch (reason) {
                err(`${$06a8fe[26]}${reason}`);
                err($06a8fe[27]);
            }
        } return instantiateArrayBuffer(binaryFile, imports); }
        function getWasmImports() { var imports = { a: wasmImports }; return imports; }
        async function createWasm() { function receiveInstance(instance) { wasmExports = instance.exports; assignWasmExports(wasmExports); updateMemoryViews(); return wasmExports; } function receiveInstantiationResult(result) { return receiveInstance(result[$06a8fe[28]]); } var info = getWasmImports(); var instantiateWasm = Module[$06a8fe[29]]; if (instantiateWasm) {
            return new Promise(resolve => { instantiateWasm(info, inst => resolve(receiveInstance(inst))); });
        } wasmBinaryFile ??= findWasmBinary(); var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info); var exports = receiveInstantiationResult(result); return exports; }
        class ExitStatus {
            name = $06a8fe[30];
            constructor(status) { this.message = `${$06a8fe[31]}${status}${$06a8fe[21]}`; this.status = status; }
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
        var getCFunc = ident => { var func = Module[$06a8fe[32] + ident]; return func; };
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
            } return ret; }, array: arr => { var ret = stackAlloc(arr.length); writeArrayToMemory(arr, ret); return ret; } }; function convertReturnValue(ret) { if (returnType === $06a8fe[33]) {
            return UTF8ToString(ret);
        } if (returnType === $06a8fe[34])
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
        var cwrap = (ident, returnType, argTypes, opts) => { var numericArgs = !argTypes || argTypes.every(type => type === $06a8fe[35] || type === $06a8fe[34]); var numericRet = returnType !== $06a8fe[33]; if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
        } return (...args) => ccall(ident, returnType, argTypes, args, opts); };
        var HEAPF32;
        var HEAP16;
        var HEAP32;
        var HEAPF64;
        var HEAP64;
        function getValue(ptr, type = $06a8fe[36]) { if (type.endsWith($06a8fe[37]))
            type = $06a8fe[37]; switch (type) {
            case $06a8fe[38]: return HEAP8[ptr];
            case $06a8fe[36]: return HEAP8[ptr];
            case $06a8fe[39]: return HEAP16[ptr >> 1];
            case $06a8fe[40]: return HEAP32[ptr >> 2];
            case $06a8fe[41]: return HEAP64[ptr >> 3];
            case $06a8fe[42]: return HEAPF32[ptr >> 2];
            case $06a8fe[43]: return HEAPF64[ptr >> 3];
            case $06a8fe[37]: return HEAPU32[ptr >> 2];
            default: abort(`${$06a8fe[44]}${type}`);
        } }
        function setValue(ptr, value, type = $06a8fe[36]) { if (type.endsWith($06a8fe[37]))
            type = $06a8fe[37]; switch (type) {
            case $06a8fe[38]:
                HEAP8[ptr] = value;
                break;
            case $06a8fe[36]:
                HEAP8[ptr] = value;
                break;
            case $06a8fe[39]:
                HEAP16[ptr >> 1] = value;
                break;
            case $06a8fe[40]:
                HEAP32[ptr >> 2] = value;
                break;
            case $06a8fe[41]:
                HEAP64[ptr >> 3] = BigInt(value);
                break;
            case $06a8fe[42]:
                HEAPF32[ptr >> 2] = value;
                break;
            case $06a8fe[43]:
                HEAPF64[ptr >> 3] = value;
                break;
            case $06a8fe[37]:
                HEAPU32[ptr >> 2] = value;
                break;
            default: abort(`${$06a8fe[45]}${type}`);
        } }
        {
            if (Module[$06a8fe[46]])
                noExitRuntime = Module[$06a8fe[46]];
            if (Module[$06a8fe[47]])
                out = Module[$06a8fe[47]];
            if (Module[$06a8fe[48]])
                err = Module[$06a8fe[48]];
            if (Module[$06a8fe[49]])
                programArgs = Module[$06a8fe[49]];
            if (Module[$06a8fe[50]])
                thisProgram = Module[$06a8fe[50]];
            var preInit = Module[$06a8fe[51]];
            if (preInit) {
                if (typeof preInit == $06a8fe[16])
                    Module[$06a8fe[51]] = preInit = [preInit];
                while (preInit.length > 0) {
                    preInit.shift()();
                }
            }
        }
        Module[$06a8fe[52]] = ccall;
        Module[$06a8fe[53]] = cwrap;
        Module[$06a8fe[54]] = setValue;
        Module[$06a8fe[55]] = getValue;
        Module[$06a8fe[56]] = UTF8ToString;
        var _texc_version, _texc_version_string, _texc_build_info, _texc_format_name, _texc_result_str, _texc_block_dims, _texc_encoded_size, _texc_decoded_size, _texc_can_decode, _texc_can_encode, _texc_is_paletted, _texc_palette_size, _texc_decode_paletted, _texc_decode, _malloc, _free, _texc_decode_f32, _texc_encode_options_init, _texc_encode_ex, _texc_encode, _texc_encode_f32, _texc_swizzled_size, _texc_unswizzled_size, _texc_unswizzle, _texc_swizzle, _texc_reswizzle, _texc_get_surface_layout, _texc_ps5_detect_tile_mode, _texc_ps5_default_tile_mode, _texc_unswizzle_mip, _texc_reswizzle_mip, _texc_get_volume_layout, _texc_unswizzle_volume_mip, _texc_reswizzle_volume_mip, _texc_decode_swizzled, _texc_alloc, _texc_free, _texc_profile_name, _texc_profile_bytes_per_pixel, _texc_convert_profile, _texc_flip_y, _texc_flip_x, _texc_crop, _texc_last_error, _texc_encode_with_options, _texc_decode_alloc, _texc_decode_f32_alloc, _texc_decode_swizzled_alloc, _texc_decode_paletted_alloc, _texc_encode_alloc, _texc_swizzle_alloc, _texc_unswizzle_mip_alloc, _texc_unswizzle_volume_mip_alloc, _texc_decode_rgba8, _texc_encode_rgba8, _texc_encoded_size_rgba8, _texc_decode_bc1, _texc_encode_bc1, _texc_encoded_size_bc1, _texc_decode_bc2, _texc_encode_bc2, _texc_encoded_size_bc2, _texc_decode_bc3, _texc_encode_bc3, _texc_encoded_size_bc3, _texc_decode_bc4, _texc_encode_bc4, _texc_encoded_size_bc4, _texc_decode_bc4_snorm, _texc_encode_bc4_snorm, _texc_encoded_size_bc4_snorm, _texc_decode_bc5, _texc_encode_bc5, _texc_encoded_size_bc5, _texc_decode_bc5_snorm, _texc_encode_bc5_snorm, _texc_encoded_size_bc5_snorm, _texc_decode_bc6h_uf16, _texc_encode_bc6h_uf16, _texc_encoded_size_bc6h_uf16, _texc_decode_bc6h_sf16, _texc_encode_bc6h_sf16, _texc_encoded_size_bc6h_sf16, _texc_decode_bc7, _texc_encode_bc7, _texc_encoded_size_bc7, _texc_decode_etc1_rgb, _texc_encode_etc1_rgb, _texc_encoded_size_etc1_rgb, _texc_decode_etc2_rgb, _texc_encode_etc2_rgb, _texc_encoded_size_etc2_rgb, _texc_decode_etc2_rgba1, _texc_encode_etc2_rgba1, _texc_encoded_size_etc2_rgba1, _texc_decode_etc2_rgba8, _texc_encode_etc2_rgba8, _texc_encoded_size_etc2_rgba8, _texc_decode_eac_r11, _texc_encode_eac_r11, _texc_encoded_size_eac_r11, _texc_decode_eac_r11_signed, _texc_encode_eac_r11_signed, _texc_encoded_size_eac_r11_signed, _texc_decode_eac_rg11, _texc_encode_eac_rg11, _texc_encoded_size_eac_rg11, _texc_decode_eac_rg11_signed, _texc_encode_eac_rg11_signed, _texc_encoded_size_eac_rg11_signed, _texc_decode_pvrtc1_2bpp_rgb, _texc_encode_pvrtc1_2bpp_rgb, _texc_encoded_size_pvrtc1_2bpp_rgb, _texc_decode_pvrtc1_2bpp_rgba, _texc_encode_pvrtc1_2bpp_rgba, _texc_encoded_size_pvrtc1_2bpp_rgba, _texc_decode_pvrtc1_4bpp_rgb, _texc_encode_pvrtc1_4bpp_rgb, _texc_encoded_size_pvrtc1_4bpp_rgb, _texc_decode_pvrtc1_4bpp_rgba, _texc_encode_pvrtc1_4bpp_rgba, _texc_encoded_size_pvrtc1_4bpp_rgba, _texc_decode_pvrtc2_2bpp, _texc_encode_pvrtc2_2bpp, _texc_encoded_size_pvrtc2_2bpp, _texc_decode_pvrtc2_4bpp, _texc_encode_pvrtc2_4bpp, _texc_encoded_size_pvrtc2_4bpp, _texc_decode_astc_4x4, _texc_encode_astc_4x4, _texc_encoded_size_astc_4x4, _texc_decode_astc_5x4, _texc_encode_astc_5x4, _texc_encoded_size_astc_5x4, _texc_decode_astc_5x5, _texc_encode_astc_5x5, _texc_encoded_size_astc_5x5, _texc_decode_astc_6x5, _texc_encode_astc_6x5, _texc_encoded_size_astc_6x5, _texc_decode_astc_6x6, _texc_encode_astc_6x6, _texc_encoded_size_astc_6x6, _texc_decode_astc_8x5, _texc_encode_astc_8x5, _texc_encoded_size_astc_8x5, _texc_decode_astc_8x6, _texc_encode_astc_8x6, _texc_encoded_size_astc_8x6, _texc_decode_astc_8x8, _texc_encode_astc_8x8, _texc_encoded_size_astc_8x8, _texc_decode_astc_10x5, _texc_encode_astc_10x5, _texc_encoded_size_astc_10x5, _texc_decode_astc_10x6, _texc_encode_astc_10x6, _texc_encoded_size_astc_10x6, _texc_decode_astc_10x8, _texc_encode_astc_10x8, _texc_encoded_size_astc_10x8, _texc_decode_astc_10x10, _texc_encode_astc_10x10, _texc_encoded_size_astc_10x10, _texc_decode_astc_12x10, _texc_encode_astc_12x10, _texc_encoded_size_astc_12x10, _texc_decode_astc_12x12, _texc_encode_astc_12x12, _texc_encoded_size_astc_12x12, _texc_decode_atc_rgb, _texc_encode_atc_rgb, _texc_encoded_size_atc_rgb, _texc_decode_atc_rgba_explicit, _texc_encode_atc_rgba_explicit, _texc_encoded_size_atc_rgba_explicit, _texc_decode_atc_rgba_interpolated, _texc_encode_atc_rgba_interpolated, _texc_encoded_size_atc_rgba_interpolated, _texc_decode_etc1_rgb_a_atlas, _texc_encode_etc1_rgb_a_atlas, _texc_encoded_size_etc1_rgb_a_atlas, _texc_decode_pvrtc1_4bpp_rgb_a_atlas, _texc_encode_pvrtc1_4bpp_rgb_a_atlas, _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas, _texc_decode_etc2_rgb_a_atlas, _texc_encode_etc2_rgb_a_atlas, _texc_encoded_size_etc2_rgb_a_atlas, _texc_decode_pica_etc1_rgb8, _texc_encode_pica_etc1_rgb8, _texc_encoded_size_pica_etc1_rgb8, _texc_decode_pica_etc1_rgb8a4, _texc_encode_pica_etc1_rgb8a4, _texc_encoded_size_pica_etc1_rgb8a4, _texc_decode_wii_i4, _texc_encode_wii_i4, _texc_encoded_size_wii_i4, _texc_decode_wii_i8, _texc_encode_wii_i8, _texc_encoded_size_wii_i8, _texc_decode_wii_ia4, _texc_encode_wii_ia4, _texc_encoded_size_wii_ia4, _texc_decode_wii_ia8, _texc_encode_wii_ia8, _texc_encoded_size_wii_ia8, _texc_decode_wii_rgb565, _texc_encode_wii_rgb565, _texc_encoded_size_wii_rgb565, _texc_decode_wii_rgb5a3, _texc_encode_wii_rgb5a3, _texc_encoded_size_wii_rgb5a3, _texc_decode_wii_rgba8, _texc_encode_wii_rgba8, _texc_encoded_size_wii_rgba8, _texc_decode_wii_cmpr, _texc_encode_wii_cmpr, _texc_encoded_size_wii_cmpr, _texc_decode_wii_c4, _texc_encode_wii_c4, _texc_encoded_size_wii_c4, _texc_decode_wii_c8, _texc_encode_wii_c8, _texc_encoded_size_wii_c8, _texc_decode_wii_c14x2, _texc_encode_wii_c14x2, _texc_encoded_size_wii_c14x2, _texc_unswizzle_ps4, _texc_reswizzle_ps4, _texc_swizzle_ps4, _texc_swizzled_size_ps4, _texc_unswizzle_ps5, _texc_reswizzle_ps5, _texc_swizzle_ps5, _texc_swizzled_size_ps5, _texc_unswizzle_switch, _texc_reswizzle_switch, _texc_swizzle_switch, _texc_swizzled_size_switch, _texc_unswizzle_psvita, _texc_reswizzle_psvita, _texc_swizzle_psvita, _texc_swizzled_size_psvita, _texc_unswizzle_x360, _texc_reswizzle_x360, _texc_swizzle_x360, _texc_swizzled_size_x360, _texc_unswizzle_psp, _texc_reswizzle_psp, _texc_swizzle_psp, _texc_swizzled_size_psp, _texc_unswizzle_n3ds, _texc_reswizzle_n3ds, _texc_swizzle_n3ds, _texc_swizzled_size_n3ds, _texc_unswizzle_wiiu, _texc_reswizzle_wiiu, _texc_swizzle_wiiu, _texc_swizzled_size_wiiu, _texc_unswizzle_dx12_64kb, _texc_reswizzle_dx12_64kb, _texc_swizzle_dx12_64kb, _texc_swizzled_size_dx12_64kb, _texc_unswizzle_switch2, _texc_reswizzle_switch2, _texc_swizzle_switch2, _texc_swizzled_size_switch2, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, memory, __indirect_function_table, wasmMemory;
        function assignWasmExports(wasmExports) { _texc_version = Module[$06a8fe[57]] = wasmExports[$06a8fe[58]]; _texc_version_string = Module[$06a8fe[59]] = wasmExports[$06a8fe[60]]; _texc_build_info = Module[$06a8fe[61]] = wasmExports[$06a8fe[62]]; _texc_format_name = Module[$06a8fe[63]] = wasmExports[$06a8fe[64]]; _texc_result_str = Module[$06a8fe[65]] = wasmExports[$06a8fe[66]]; _texc_block_dims = Module[$06a8fe[67]] = wasmExports[$06a8fe[68]]; _texc_encoded_size = Module[$06a8fe[69]] = wasmExports[$06a8fe[70]]; _texc_decoded_size = Module[$06a8fe[71]] = wasmExports[$06a8fe[72]]; _texc_can_decode = Module[$06a8fe[73]] = wasmExports[$06a8fe[74]]; _texc_can_encode = Module[$06a8fe[75]] = wasmExports[$06a8fe[76]]; _texc_is_paletted = Module[$06a8fe[77]] = wasmExports[$06a8fe[78]]; _texc_palette_size = Module[$06a8fe[79]] = wasmExports[$06a8fe[80]]; _texc_decode_paletted = Module[$06a8fe[81]] = wasmExports[$06a8fe[82]]; _texc_decode = Module[$06a8fe[83]] = wasmExports[$06a8fe[84]]; _malloc = Module[$06a8fe[85]] = wasmExports[$06a8fe[86]]; _free = Module[$06a8fe[87]] = wasmExports[$06a8fe[88]]; _texc_decode_f32 = Module[$06a8fe[89]] = wasmExports[$06a8fe[90]]; _texc_encode_options_init = Module[$06a8fe[91]] = wasmExports[$06a8fe[92]]; _texc_encode_ex = Module[$06a8fe[93]] = wasmExports[$06a8fe[94]]; _texc_encode = Module[$06a8fe[95]] = wasmExports[$06a8fe[96]]; _texc_encode_f32 = Module[$06a8fe[97]] = wasmExports[$06a8fe[98]]; _texc_swizzled_size = Module[$06a8fe[99]] = wasmExports[$06a8fe[100]]; _texc_unswizzled_size = Module[$06a8fe[101]] = wasmExports[$06a8fe[102]]; _texc_unswizzle = Module[$06a8fe[103]] = wasmExports[$06a8fe[104]]; _texc_swizzle = Module[$06a8fe[105]] = wasmExports[$06a8fe[106]]; _texc_reswizzle = Module[$06a8fe[107]] = wasmExports[$06a8fe[108]]; _texc_get_surface_layout = Module[$06a8fe[109]] = wasmExports[$06a8fe[110]]; _texc_ps5_detect_tile_mode = Module[$06a8fe[111]] = wasmExports[$06a8fe[112]]; _texc_ps5_default_tile_mode = Module[$06a8fe[113]] = wasmExports[$06a8fe[114]]; _texc_unswizzle_mip = Module[$06a8fe[115]] = wasmExports[$06a8fe[116]]; _texc_reswizzle_mip = Module[$06a8fe[117]] = wasmExports[$06a8fe[118]]; _texc_get_volume_layout = Module[$06a8fe[119]] = wasmExports[$06a8fe[120]]; _texc_unswizzle_volume_mip = Module[$06a8fe[121]] = wasmExports[$06a8fe[122]]; _texc_reswizzle_volume_mip = Module[$06a8fe[123]] = wasmExports[$06a8fe[124]]; _texc_decode_swizzled = Module[$06a8fe[125]] = wasmExports[$06a8fe[126]]; _texc_alloc = Module[$06a8fe[127]] = wasmExports[$06a8fe[128]]; _texc_free = Module[$06a8fe[129]] = wasmExports[$06a8fe[130]]; _texc_profile_name = Module[$06a8fe[131]] = wasmExports[$06a8fe[132]]; _texc_profile_bytes_per_pixel = Module[$06a8fe[133]] = wasmExports[$06a8fe[134]]; _texc_convert_profile = Module[$06a8fe[135]] = wasmExports[$06a8fe[136]]; _texc_flip_y = Module[$06a8fe[137]] = wasmExports[$06a8fe[138]]; _texc_flip_x = Module[$06a8fe[139]] = wasmExports[$06a8fe[140]]; _texc_crop = Module[$06a8fe[141]] = wasmExports[$06a8fe[142]]; _texc_last_error = Module[$06a8fe[143]] = wasmExports[$06a8fe[144]]; _texc_encode_with_options = Module[$06a8fe[145]] = wasmExports[$06a8fe[146]]; _texc_decode_alloc = Module[$06a8fe[147]] = wasmExports[$06a8fe[148]]; _texc_decode_f32_alloc = Module[$06a8fe[149]] = wasmExports[$06a8fe[150]]; _texc_decode_swizzled_alloc = Module[$06a8fe[151]] = wasmExports[$06a8fe[32]]; _texc_decode_paletted_alloc = Module[$06a8fe[152]] = wasmExports[$06a8fe[153]]; _texc_encode_alloc = Module[$06a8fe[154]] = wasmExports[$06a8fe[155]]; _texc_swizzle_alloc = Module[$06a8fe[156]] = wasmExports[$06a8fe[157]]; _texc_unswizzle_mip_alloc = Module[$06a8fe[158]] = wasmExports[$06a8fe[159]]; _texc_unswizzle_volume_mip_alloc = Module[$06a8fe[160]] = wasmExports[$06a8fe[161]]; _texc_decode_rgba8 = Module[$06a8fe[162]] = wasmExports[$06a8fe[163]]; _texc_encode_rgba8 = Module[$06a8fe[164]] = wasmExports[$06a8fe[165]]; _texc_encoded_size_rgba8 = Module[$06a8fe[166]] = wasmExports[$06a8fe[167]]; _texc_decode_bc1 = Module[$06a8fe[168]] = wasmExports[$06a8fe[169]]; _texc_encode_bc1 = Module[$06a8fe[170]] = wasmExports[$06a8fe[171]]; _texc_encoded_size_bc1 = Module[$06a8fe[172]] = wasmExports[$06a8fe[173]]; _texc_decode_bc2 = Module[$06a8fe[174]] = wasmExports[$06a8fe[175]]; _texc_encode_bc2 = Module[$06a8fe[176]] = wasmExports[$06a8fe[177]]; _texc_encoded_size_bc2 = Module[$06a8fe[178]] = wasmExports[$06a8fe[179]]; _texc_decode_bc3 = Module[$06a8fe[180]] = wasmExports[$06a8fe[181]]; _texc_encode_bc3 = Module[$06a8fe[182]] = wasmExports[$06a8fe[183]]; _texc_encoded_size_bc3 = Module[$06a8fe[184]] = wasmExports[$06a8fe[185]]; _texc_decode_bc4 = Module[$06a8fe[186]] = wasmExports[$06a8fe[187]]; _texc_encode_bc4 = Module[$06a8fe[188]] = wasmExports[$06a8fe[189]]; _texc_encoded_size_bc4 = Module[$06a8fe[190]] = wasmExports[$06a8fe[191]]; _texc_decode_bc4_snorm = Module[$06a8fe[192]] = wasmExports[$06a8fe[193]]; _texc_encode_bc4_snorm = Module[$06a8fe[194]] = wasmExports[$06a8fe[195]]; _texc_encoded_size_bc4_snorm = Module[$06a8fe[196]] = wasmExports[$06a8fe[197]]; _texc_decode_bc5 = Module[$06a8fe[198]] = wasmExports[$06a8fe[199]]; _texc_encode_bc5 = Module[$06a8fe[200]] = wasmExports[$06a8fe[201]]; _texc_encoded_size_bc5 = Module[$06a8fe[202]] = wasmExports[$06a8fe[203]]; _texc_decode_bc5_snorm = Module[$06a8fe[204]] = wasmExports[$06a8fe[205]]; _texc_encode_bc5_snorm = Module[$06a8fe[206]] = wasmExports[$06a8fe[207]]; _texc_encoded_size_bc5_snorm = Module[$06a8fe[208]] = wasmExports[$06a8fe[209]]; _texc_decode_bc6h_uf16 = Module[$06a8fe[210]] = wasmExports[$06a8fe[211]]; _texc_encode_bc6h_uf16 = Module[$06a8fe[212]] = wasmExports[$06a8fe[213]]; _texc_encoded_size_bc6h_uf16 = Module[$06a8fe[214]] = wasmExports[$06a8fe[215]]; _texc_decode_bc6h_sf16 = Module[$06a8fe[216]] = wasmExports[$06a8fe[217]]; _texc_encode_bc6h_sf16 = Module[$06a8fe[218]] = wasmExports[$06a8fe[219]]; _texc_encoded_size_bc6h_sf16 = Module[$06a8fe[220]] = wasmExports[$06a8fe[221]]; _texc_decode_bc7 = Module[$06a8fe[222]] = wasmExports[$06a8fe[223]]; _texc_encode_bc7 = Module[$06a8fe[224]] = wasmExports[$06a8fe[225]]; _texc_encoded_size_bc7 = Module[$06a8fe[226]] = wasmExports[$06a8fe[227]]; _texc_decode_etc1_rgb = Module[$06a8fe[228]] = wasmExports[$06a8fe[229]]; _texc_encode_etc1_rgb = Module[$06a8fe[230]] = wasmExports[$06a8fe[231]]; _texc_encoded_size_etc1_rgb = Module[$06a8fe[232]] = wasmExports[$06a8fe[233]]; _texc_decode_etc2_rgb = Module[$06a8fe[234]] = wasmExports[$06a8fe[235]]; _texc_encode_etc2_rgb = Module[$06a8fe[236]] = wasmExports[$06a8fe[237]]; _texc_encoded_size_etc2_rgb = Module[$06a8fe[238]] = wasmExports[$06a8fe[239]]; _texc_decode_etc2_rgba1 = Module[$06a8fe[240]] = wasmExports[$06a8fe[241]]; _texc_encode_etc2_rgba1 = Module[$06a8fe[242]] = wasmExports[$06a8fe[243]]; _texc_encoded_size_etc2_rgba1 = Module[$06a8fe[244]] = wasmExports[$06a8fe[245]]; _texc_decode_etc2_rgba8 = Module[$06a8fe[246]] = wasmExports[$06a8fe[247]]; _texc_encode_etc2_rgba8 = Module[$06a8fe[248]] = wasmExports[$06a8fe[249]]; _texc_encoded_size_etc2_rgba8 = Module[$06a8fe[250]] = wasmExports[$06a8fe[251]]; _texc_decode_eac_r11 = Module[$06a8fe[252]] = wasmExports[$06a8fe[253]]; _texc_encode_eac_r11 = Module[$06a8fe[254]] = wasmExports[$06a8fe[255]]; _texc_encoded_size_eac_r11 = Module[$06a8fe[256]] = wasmExports[$06a8fe[257]]; _texc_decode_eac_r11_signed = Module[$06a8fe[258]] = wasmExports[$06a8fe[259]]; _texc_encode_eac_r11_signed = Module[$06a8fe[260]] = wasmExports[$06a8fe[261]]; _texc_encoded_size_eac_r11_signed = Module[$06a8fe[262]] = wasmExports[$06a8fe[263]]; _texc_decode_eac_rg11 = Module[$06a8fe[264]] = wasmExports[$06a8fe[265]]; _texc_encode_eac_rg11 = Module[$06a8fe[266]] = wasmExports[$06a8fe[267]]; _texc_encoded_size_eac_rg11 = Module[$06a8fe[268]] = wasmExports[$06a8fe[269]]; _texc_decode_eac_rg11_signed = Module[$06a8fe[270]] = wasmExports[$06a8fe[271]]; _texc_encode_eac_rg11_signed = Module[$06a8fe[272]] = wasmExports[$06a8fe[273]]; _texc_encoded_size_eac_rg11_signed = Module[$06a8fe[274]] = wasmExports[$06a8fe[275]]; _texc_decode_pvrtc1_2bpp_rgb = Module[$06a8fe[276]] = wasmExports[$06a8fe[277]]; _texc_encode_pvrtc1_2bpp_rgb = Module[$06a8fe[278]] = wasmExports[$06a8fe[279]]; _texc_encoded_size_pvrtc1_2bpp_rgb = Module[$06a8fe[280]] = wasmExports[$06a8fe[281]]; _texc_decode_pvrtc1_2bpp_rgba = Module[$06a8fe[282]] = wasmExports[$06a8fe[283]]; _texc_encode_pvrtc1_2bpp_rgba = Module[$06a8fe[284]] = wasmExports[$06a8fe[285]]; _texc_encoded_size_pvrtc1_2bpp_rgba = Module[$06a8fe[286]] = wasmExports[$06a8fe[287]]; _texc_decode_pvrtc1_4bpp_rgb = Module[$06a8fe[288]] = wasmExports[$06a8fe[289]]; _texc_encode_pvrtc1_4bpp_rgb = Module[$06a8fe[290]] = wasmExports[$06a8fe[291]]; _texc_encoded_size_pvrtc1_4bpp_rgb = Module[$06a8fe[292]] = wasmExports[$06a8fe[293]]; _texc_decode_pvrtc1_4bpp_rgba = Module[$06a8fe[294]] = wasmExports[$06a8fe[295]]; _texc_encode_pvrtc1_4bpp_rgba = Module[$06a8fe[296]] = wasmExports[$06a8fe[297]]; _texc_encoded_size_pvrtc1_4bpp_rgba = Module[$06a8fe[298]] = wasmExports[$06a8fe[299]]; _texc_decode_pvrtc2_2bpp = Module[$06a8fe[300]] = wasmExports[$06a8fe[301]]; _texc_encode_pvrtc2_2bpp = Module[$06a8fe[302]] = wasmExports[$06a8fe[303]]; _texc_encoded_size_pvrtc2_2bpp = Module[$06a8fe[304]] = wasmExports[$06a8fe[305]]; _texc_decode_pvrtc2_4bpp = Module[$06a8fe[306]] = wasmExports[$06a8fe[307]]; _texc_encode_pvrtc2_4bpp = Module[$06a8fe[308]] = wasmExports[$06a8fe[309]]; _texc_encoded_size_pvrtc2_4bpp = Module[$06a8fe[310]] = wasmExports[$06a8fe[311]]; _texc_decode_astc_4x4 = Module[$06a8fe[312]] = wasmExports[$06a8fe[313]]; _texc_encode_astc_4x4 = Module[$06a8fe[314]] = wasmExports[$06a8fe[315]]; _texc_encoded_size_astc_4x4 = Module[$06a8fe[316]] = wasmExports[$06a8fe[317]]; _texc_decode_astc_5x4 = Module[$06a8fe[318]] = wasmExports[$06a8fe[319]]; _texc_encode_astc_5x4 = Module[$06a8fe[320]] = wasmExports[$06a8fe[321]]; _texc_encoded_size_astc_5x4 = Module[$06a8fe[322]] = wasmExports[$06a8fe[323]]; _texc_decode_astc_5x5 = Module[$06a8fe[324]] = wasmExports[$06a8fe[325]]; _texc_encode_astc_5x5 = Module[$06a8fe[326]] = wasmExports[$06a8fe[327]]; _texc_encoded_size_astc_5x5 = Module[$06a8fe[328]] = wasmExports[$06a8fe[329]]; _texc_decode_astc_6x5 = Module[$06a8fe[330]] = wasmExports[$06a8fe[331]]; _texc_encode_astc_6x5 = Module[$06a8fe[332]] = wasmExports[$06a8fe[333]]; _texc_encoded_size_astc_6x5 = Module[$06a8fe[334]] = wasmExports[$06a8fe[335]]; _texc_decode_astc_6x6 = Module[$06a8fe[336]] = wasmExports[$06a8fe[337]]; _texc_encode_astc_6x6 = Module[$06a8fe[338]] = wasmExports[$06a8fe[339]]; _texc_encoded_size_astc_6x6 = Module[$06a8fe[340]] = wasmExports[$06a8fe[341]]; _texc_decode_astc_8x5 = Module[$06a8fe[342]] = wasmExports[$06a8fe[343]]; _texc_encode_astc_8x5 = Module[$06a8fe[344]] = wasmExports[$06a8fe[345]]; _texc_encoded_size_astc_8x5 = Module[$06a8fe[346]] = wasmExports[$06a8fe[347]]; _texc_decode_astc_8x6 = Module[$06a8fe[348]] = wasmExports[$06a8fe[349]]; _texc_encode_astc_8x6 = Module[$06a8fe[350]] = wasmExports[$06a8fe[351]]; _texc_encoded_size_astc_8x6 = Module[$06a8fe[352]] = wasmExports[$06a8fe[353]]; _texc_decode_astc_8x8 = Module[$06a8fe[354]] = wasmExports[$06a8fe[355]]; _texc_encode_astc_8x8 = Module[$06a8fe[356]] = wasmExports[$06a8fe[357]]; _texc_encoded_size_astc_8x8 = Module[$06a8fe[358]] = wasmExports[$06a8fe[359]]; _texc_decode_astc_10x5 = Module[$06a8fe[360]] = wasmExports[$06a8fe[361]]; _texc_encode_astc_10x5 = Module[$06a8fe[362]] = wasmExports[$06a8fe[363]]; _texc_encoded_size_astc_10x5 = Module[$06a8fe[364]] = wasmExports[$06a8fe[365]]; _texc_decode_astc_10x6 = Module[$06a8fe[366]] = wasmExports[$06a8fe[367]]; _texc_encode_astc_10x6 = Module[$06a8fe[368]] = wasmExports[$06a8fe[369]]; _texc_encoded_size_astc_10x6 = Module[$06a8fe[370]] = wasmExports[$06a8fe[371]]; _texc_decode_astc_10x8 = Module[$06a8fe[372]] = wasmExports[$06a8fe[373]]; _texc_encode_astc_10x8 = Module[$06a8fe[374]] = wasmExports[$06a8fe[375]]; _texc_encoded_size_astc_10x8 = Module[$06a8fe[376]] = wasmExports[$06a8fe[377]]; _texc_decode_astc_10x10 = Module[$06a8fe[378]] = wasmExports[$06a8fe[379]]; _texc_encode_astc_10x10 = Module[$06a8fe[380]] = wasmExports[$06a8fe[381]]; _texc_encoded_size_astc_10x10 = Module[$06a8fe[382]] = wasmExports[$06a8fe[383]]; _texc_decode_astc_12x10 = Module[$06a8fe[384]] = wasmExports[$06a8fe[385]]; _texc_encode_astc_12x10 = Module[$06a8fe[386]] = wasmExports[$06a8fe[387]]; _texc_encoded_size_astc_12x10 = Module[$06a8fe[388]] = wasmExports[$06a8fe[389]]; _texc_decode_astc_12x12 = Module[$06a8fe[390]] = wasmExports[$06a8fe[391]]; _texc_encode_astc_12x12 = Module[$06a8fe[392]] = wasmExports[$06a8fe[393]]; _texc_encoded_size_astc_12x12 = Module[$06a8fe[394]] = wasmExports[$06a8fe[395]]; _texc_decode_atc_rgb = Module[$06a8fe[396]] = wasmExports[$06a8fe[397]]; _texc_encode_atc_rgb = Module[$06a8fe[398]] = wasmExports[$06a8fe[399]]; _texc_encoded_size_atc_rgb = Module[$06a8fe[400]] = wasmExports[$06a8fe[401]]; _texc_decode_atc_rgba_explicit = Module[$06a8fe[402]] = wasmExports[$06a8fe[403]]; _texc_encode_atc_rgba_explicit = Module[$06a8fe[404]] = wasmExports[$06a8fe[405]]; _texc_encoded_size_atc_rgba_explicit = Module[$06a8fe[406]] = wasmExports[$06a8fe[407]]; _texc_decode_atc_rgba_interpolated = Module[$06a8fe[408]] = wasmExports[$06a8fe[409]]; _texc_encode_atc_rgba_interpolated = Module[$06a8fe[410]] = wasmExports[$06a8fe[411]]; _texc_encoded_size_atc_rgba_interpolated = Module[$06a8fe[412]] = wasmExports[$06a8fe[413]]; _texc_decode_etc1_rgb_a_atlas = Module[$06a8fe[414]] = wasmExports[$06a8fe[415]]; _texc_encode_etc1_rgb_a_atlas = Module[$06a8fe[416]] = wasmExports[$06a8fe[417]]; _texc_encoded_size_etc1_rgb_a_atlas = Module[$06a8fe[418]] = wasmExports[$06a8fe[419]]; _texc_decode_pvrtc1_4bpp_rgb_a_atlas = Module[$06a8fe[420]] = wasmExports[$06a8fe[421]]; _texc_encode_pvrtc1_4bpp_rgb_a_atlas = Module[$06a8fe[422]] = wasmExports[$06a8fe[423]]; _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas = Module[$06a8fe[424]] = wasmExports[$06a8fe[425]]; _texc_decode_etc2_rgb_a_atlas = Module[$06a8fe[426]] = wasmExports[$06a8fe[427]]; _texc_encode_etc2_rgb_a_atlas = Module[$06a8fe[428]] = wasmExports[$06a8fe[429]]; _texc_encoded_size_etc2_rgb_a_atlas = Module[$06a8fe[430]] = wasmExports[$06a8fe[431]]; _texc_decode_pica_etc1_rgb8 = Module[$06a8fe[432]] = wasmExports[$06a8fe[433]]; _texc_encode_pica_etc1_rgb8 = Module[$06a8fe[434]] = wasmExports[$06a8fe[435]]; _texc_encoded_size_pica_etc1_rgb8 = Module[$06a8fe[436]] = wasmExports[$06a8fe[437]]; _texc_decode_pica_etc1_rgb8a4 = Module[$06a8fe[438]] = wasmExports[$06a8fe[439]]; _texc_encode_pica_etc1_rgb8a4 = Module[$06a8fe[440]] = wasmExports[$06a8fe[441]]; _texc_encoded_size_pica_etc1_rgb8a4 = Module[$06a8fe[442]] = wasmExports[$06a8fe[443]]; _texc_decode_wii_i4 = Module[$06a8fe[444]] = wasmExports[$06a8fe[445]]; _texc_encode_wii_i4 = Module[$06a8fe[446]] = wasmExports[$06a8fe[447]]; _texc_encoded_size_wii_i4 = Module[$06a8fe[448]] = wasmExports[$06a8fe[449]]; _texc_decode_wii_i8 = Module[$06a8fe[450]] = wasmExports[$06a8fe[451]]; _texc_encode_wii_i8 = Module[$06a8fe[452]] = wasmExports[$06a8fe[453]]; _texc_encoded_size_wii_i8 = Module[$06a8fe[454]] = wasmExports[$06a8fe[455]]; _texc_decode_wii_ia4 = Module[$06a8fe[456]] = wasmExports[$06a8fe[457]]; _texc_encode_wii_ia4 = Module[$06a8fe[458]] = wasmExports[$06a8fe[459]]; _texc_encoded_size_wii_ia4 = Module[$06a8fe[460]] = wasmExports[$06a8fe[461]]; _texc_decode_wii_ia8 = Module[$06a8fe[462]] = wasmExports[$06a8fe[463]]; _texc_encode_wii_ia8 = Module[$06a8fe[464]] = wasmExports[$06a8fe[465]]; _texc_encoded_size_wii_ia8 = Module[$06a8fe[466]] = wasmExports[$06a8fe[467]]; _texc_decode_wii_rgb565 = Module[$06a8fe[468]] = wasmExports[$06a8fe[469]]; _texc_encode_wii_rgb565 = Module[$06a8fe[470]] = wasmExports[$06a8fe[471]]; _texc_encoded_size_wii_rgb565 = Module[$06a8fe[472]] = wasmExports[$06a8fe[473]]; _texc_decode_wii_rgb5a3 = Module[$06a8fe[474]] = wasmExports[$06a8fe[475]]; _texc_encode_wii_rgb5a3 = Module[$06a8fe[476]] = wasmExports[$06a8fe[477]]; _texc_encoded_size_wii_rgb5a3 = Module[$06a8fe[478]] = wasmExports[$06a8fe[479]]; _texc_decode_wii_rgba8 = Module[$06a8fe[480]] = wasmExports[$06a8fe[481]]; _texc_encode_wii_rgba8 = Module[$06a8fe[482]] = wasmExports[$06a8fe[483]]; _texc_encoded_size_wii_rgba8 = Module[$06a8fe[484]] = wasmExports[$06a8fe[485]]; _texc_decode_wii_cmpr = Module[$06a8fe[486]] = wasmExports[$06a8fe[487]]; _texc_encode_wii_cmpr = Module[$06a8fe[488]] = wasmExports[$06a8fe[489]]; _texc_encoded_size_wii_cmpr = Module[$06a8fe[490]] = wasmExports[$06a8fe[491]]; _texc_decode_wii_c4 = Module[$06a8fe[492]] = wasmExports[$06a8fe[493]]; _texc_encode_wii_c4 = Module[$06a8fe[494]] = wasmExports[$06a8fe[495]]; _texc_encoded_size_wii_c4 = Module[$06a8fe[496]] = wasmExports[$06a8fe[497]]; _texc_decode_wii_c8 = Module[$06a8fe[498]] = wasmExports[$06a8fe[499]]; _texc_encode_wii_c8 = Module[$06a8fe[500]] = wasmExports[$06a8fe[501]]; _texc_encoded_size_wii_c8 = Module[$06a8fe[502]] = wasmExports[$06a8fe[503]]; _texc_decode_wii_c14x2 = Module[$06a8fe[504]] = wasmExports[$06a8fe[505]]; _texc_encode_wii_c14x2 = Module[$06a8fe[506]] = wasmExports[$06a8fe[507]]; _texc_encoded_size_wii_c14x2 = Module[$06a8fe[508]] = wasmExports[$06a8fe[509]]; _texc_unswizzle_ps4 = Module[$06a8fe[510]] = wasmExports[$06a8fe[511]]; _texc_reswizzle_ps4 = Module[$06a8fe[512]] = wasmExports[$06a8fe[513]]; _texc_swizzle_ps4 = Module[$06a8fe[514]] = wasmExports[$06a8fe[515]]; _texc_swizzled_size_ps4 = Module[$06a8fe[516]] = wasmExports[$06a8fe[517]]; _texc_unswizzle_ps5 = Module[$06a8fe[518]] = wasmExports[$06a8fe[519]]; _texc_reswizzle_ps5 = Module[$06a8fe[520]] = wasmExports[$06a8fe[521]]; _texc_swizzle_ps5 = Module[$06a8fe[522]] = wasmExports[$06a8fe[523]]; _texc_swizzled_size_ps5 = Module[$06a8fe[524]] = wasmExports[$06a8fe[525]]; _texc_unswizzle_switch = Module[$06a8fe[526]] = wasmExports[$06a8fe[527]]; _texc_reswizzle_switch = Module[$06a8fe[528]] = wasmExports[$06a8fe[529]]; _texc_swizzle_switch = Module[$06a8fe[530]] = wasmExports[$06a8fe[531]]; _texc_swizzled_size_switch = Module[$06a8fe[532]] = wasmExports[$06a8fe[533]]; _texc_unswizzle_psvita = Module[$06a8fe[534]] = wasmExports[$06a8fe[535]]; _texc_reswizzle_psvita = Module[$06a8fe[536]] = wasmExports[$06a8fe[537]]; _texc_swizzle_psvita = Module[$06a8fe[538]] = wasmExports[$06a8fe[539]]; _texc_swizzled_size_psvita = Module[$06a8fe[540]] = wasmExports[$06a8fe[541]]; _texc_unswizzle_x360 = Module[$06a8fe[542]] = wasmExports[$06a8fe[543]]; _texc_reswizzle_x360 = Module[$06a8fe[544]] = wasmExports[$06a8fe[545]]; _texc_swizzle_x360 = Module[$06a8fe[546]] = wasmExports[$06a8fe[547]]; _texc_swizzled_size_x360 = Module[$06a8fe[548]] = wasmExports[$06a8fe[549]]; _texc_unswizzle_psp = Module[$06a8fe[550]] = wasmExports[$06a8fe[551]]; _texc_reswizzle_psp = Module[$06a8fe[552]] = wasmExports[$06a8fe[553]]; _texc_swizzle_psp = Module[$06a8fe[554]] = wasmExports[$06a8fe[555]]; _texc_swizzled_size_psp = Module[$06a8fe[556]] = wasmExports[$06a8fe[557]]; _texc_unswizzle_n3ds = Module[$06a8fe[558]] = wasmExports[$06a8fe[559]]; _texc_reswizzle_n3ds = Module[$06a8fe[560]] = wasmExports[$06a8fe[561]]; _texc_swizzle_n3ds = Module[$06a8fe[562]] = wasmExports[$06a8fe[563]]; _texc_swizzled_size_n3ds = Module[$06a8fe[564]] = wasmExports[$06a8fe[565]]; _texc_unswizzle_wiiu = Module[$06a8fe[566]] = wasmExports[$06a8fe[567]]; _texc_reswizzle_wiiu = Module[$06a8fe[568]] = wasmExports[$06a8fe[569]]; _texc_swizzle_wiiu = Module[$06a8fe[570]] = wasmExports[$06a8fe[571]]; _texc_swizzled_size_wiiu = Module[$06a8fe[572]] = wasmExports[$06a8fe[573]]; _texc_unswizzle_dx12_64kb = Module[$06a8fe[574]] = wasmExports[$06a8fe[575]]; _texc_reswizzle_dx12_64kb = Module[$06a8fe[576]] = wasmExports[$06a8fe[577]]; _texc_swizzle_dx12_64kb = Module[$06a8fe[578]] = wasmExports[$06a8fe[579]]; _texc_swizzled_size_dx12_64kb = Module[$06a8fe[580]] = wasmExports[$06a8fe[581]]; _texc_unswizzle_switch2 = Module[$06a8fe[582]] = wasmExports[$06a8fe[583]]; _texc_reswizzle_switch2 = Module[$06a8fe[584]] = wasmExports[$06a8fe[585]]; _texc_swizzle_switch2 = Module[$06a8fe[586]] = wasmExports[$06a8fe[587]]; _texc_swizzled_size_switch2 = Module[$06a8fe[588]] = wasmExports[$06a8fe[589]]; __emscripten_stack_restore = wasmExports[$06a8fe[590]]; __emscripten_stack_alloc = wasmExports[$06a8fe[591]]; _emscripten_stack_get_current = wasmExports[$06a8fe[592]]; memory = wasmMemory = wasmExports[$06a8fe[593]]; __indirect_function_table = wasmExports[$06a8fe[594]]; }
        var wasmImports = { c: __abort_js, b: _emscripten_resize_heap, a: _fd_write };
        async function run() { preRun(); var setStatus = Module[$06a8fe[595]]; if (setStatus) {
            setStatus($06a8fe[596]);
            await new Promise(resolve => setTimeout(resolve, 1));
            setTimeout(setStatus, 1, "");
        } if (ABORT)
            return; initRuntime(); Module[$06a8fe[597]]?.(); postRun(); }
        var wasmExports;
        wasmExports = await createWasm();
        await run();
        ;
        return Module;
    };
})();
if (typeof exports === $06a8fe[598] && typeof module === $06a8fe[598]) {
    module.exports = TexCodec;
    module.exports.default = TexCodec;
}
else if (typeof define === $06a8fe[16] && define[$06a8fe[599]])
    define([], () => TexCodec);
