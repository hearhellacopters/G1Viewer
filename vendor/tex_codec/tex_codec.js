const $3b6273=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",640946596,"\u0000");var TexCodec = (() => {
    var _scriptName = globalThis.document?.currentScript?.src;
    return async function (moduleArg = {}) {
        var Module = moduleArg;
        var ENVIRONMENT_IS_WEB = !!globalThis.window;
        var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
        var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != $3b6273[0];
        var programArgs = [];
        var thisProgram = $3b6273[1];
        var quit_ = (status, toThrow) => { throw toThrow; };
        if (typeof __filename != $3b6273[2]) {
            _scriptName = __filename;
        }
        else if (ENVIRONMENT_IS_WORKER) {
            _scriptName = self.location.href;
        }
        var scriptDirectory = "";
        function locateFile(path) { if (Module[$3b6273[3]]) {
            return Module[$3b6273[3]](path, scriptDirectory);
        } return scriptDirectory + path; }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
            var fs = require($3b6273[4]);
            scriptDirectory = __dirname + $3b6273[5];
            readBinary = filename => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename); return ret; };
            readAsync = async (filename, binary = true) => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename, binary ? undefined : $3b6273[6]); return ret; };
            if (process.argv.length > 1) {
                thisProgram = process.argv[1].replace(/\\/g, $3b6273[5]);
            }
            programArgs = process.argv.slice(2);
            quit_ = (status, toThrow) => { process.exitCode = status; throw toThrow; };
        }
        else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            try {
                scriptDirectory = new URL($3b6273[7], _scriptName).href;
            }
            catch { }
            {
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = url => { var xhr = new XMLHttpRequest; xhr.open($3b6273[8], url, false); xhr.responseType = $3b6273[9]; xhr.send(null); return new Uint8Array(xhr.response); };
                }
                readAsync = async (url) => { var response = await fetch(url, { credentials: $3b6273[10] }); if (response.ok) {
                    return response.arrayBuffer();
                } throw new Error(response.status + $3b6273[11] + response.url); };
            }
        }
        else { }
        var out = console.log.bind(console);
        var err = console.error.bind(console);
        var wasmBinary;
        var ABORT = false;
        var isFileURI = filename => filename.startsWith($3b6273[12]);
        class EmscriptenEH {
        }
        class EmscriptenSjLj extends EmscriptenEH {
        }
        var runtimeInitialized = false;
        function getMemoryBuffer() { return wasmMemory.buffer; }
        function updateMemoryViews() { if (HEAP8?.buffer?.resizable)
            return; var b = getMemoryBuffer(); HEAP8 = new Int8Array(b); HEAP16 = new Int16Array(b); Module[$3b6273[13]] = HEAPU8 = new Uint8Array(b); HEAP32 = new Int32Array(b); HEAPU32 = new Uint32Array(b); Module[$3b6273[14]] = HEAPF32 = new Float32Array(b); HEAPF64 = new Float64Array(b); HEAP64 = new BigInt64Array(b); }
        function preRun() { var preRun = Module[$3b6273[15]]; if (preRun) {
            if (typeof preRun == $3b6273[16])
                preRun = [preRun];
            onPreRuns.push(...preRun);
        } callRuntimeCallbacks(onPreRuns); }
        function initRuntime() { runtimeInitialized = true; wasmExports[$3b6273[17]](); }
        function postRun() { var postRun = Module[$3b6273[18]]; if (postRun) {
            if (typeof postRun == $3b6273[16])
                postRun = [postRun];
            onPostRuns.push(...postRun);
        } callRuntimeCallbacks(onPostRuns); }
        function abort(what) { Module[$3b6273[19]]?.(what); what = `${$3b6273[20]}${what}${$3b6273[21]}`; err(what); ABORT = true; what += $3b6273[22]; var e = new WebAssembly.RuntimeError(what); throw e; }
        var wasmBinaryFile;
        function findWasmBinary() { return locateFile($3b6273[23]); }
        function getBinarySync(file) { if (readBinary) {
            return readBinary(file);
        } throw $3b6273[24]; }
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
            err(`${$3b6273[25]}${reason}`);
            abort(reason);
        } }
        async function instantiateAsync(binary, binaryFile, imports) { if (!binary && !ENVIRONMENT_IS_NODE) {
            try {
                var response = fetch(binaryFile, { credentials: $3b6273[10] });
                var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
                return instantiationResult;
            }
            catch (reason) {
                err(`${$3b6273[26]}${reason}`);
                err($3b6273[27]);
            }
        } return instantiateArrayBuffer(binaryFile, imports); }
        function getWasmImports() { var imports = { a: wasmImports }; return imports; }
        async function createWasm() { function receiveInstance(instance) { wasmExports = instance.exports; assignWasmExports(wasmExports); updateMemoryViews(); return wasmExports; } function receiveInstantiationResult(result) { return receiveInstance(result[$3b6273[28]]); } var info = getWasmImports(); var instantiateWasm = Module[$3b6273[29]]; if (instantiateWasm) {
            return new Promise(resolve => { instantiateWasm(info, inst => resolve(receiveInstance(inst))); });
        } wasmBinaryFile ??= findWasmBinary(); var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info); var exports = receiveInstantiationResult(result); return exports; }
        class ExitStatus {
            name = $3b6273[30];
            constructor(status) { this.message = `${$3b6273[31]}${status}${$3b6273[21]}`; this.status = status; }
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
        var getCFunc = ident => { var func = Module[$3b6273[32] + ident]; return func; };
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
            } return ret; }, array: arr => { var ret = stackAlloc(arr.length); writeArrayToMemory(arr, ret); return ret; } }; function convertReturnValue(ret) { if (returnType === $3b6273[33]) {
            return UTF8ToString(ret);
        } if (returnType === $3b6273[34])
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
        var cwrap = (ident, returnType, argTypes, opts) => { var numericArgs = !argTypes || argTypes.every(type => type === $3b6273[35] || type === $3b6273[34]); var numericRet = returnType !== $3b6273[33]; if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
        } return (...args) => ccall(ident, returnType, argTypes, args, opts); };
        var HEAPF32;
        var HEAP16;
        var HEAP32;
        var HEAPF64;
        var HEAP64;
        function getValue(ptr, type = $3b6273[36]) { if (type.endsWith($3b6273[37]))
            type = $3b6273[37]; switch (type) {
            case $3b6273[38]: return HEAP8[ptr];
            case $3b6273[36]: return HEAP8[ptr];
            case $3b6273[39]: return HEAP16[ptr >> 1];
            case $3b6273[40]: return HEAP32[ptr >> 2];
            case $3b6273[41]: return HEAP64[ptr >> 3];
            case $3b6273[42]: return HEAPF32[ptr >> 2];
            case $3b6273[43]: return HEAPF64[ptr >> 3];
            case $3b6273[37]: return HEAPU32[ptr >> 2];
            default: abort(`${$3b6273[44]}${type}`);
        } }
        function setValue(ptr, value, type = $3b6273[36]) { if (type.endsWith($3b6273[37]))
            type = $3b6273[37]; switch (type) {
            case $3b6273[38]:
                HEAP8[ptr] = value;
                break;
            case $3b6273[36]:
                HEAP8[ptr] = value;
                break;
            case $3b6273[39]:
                HEAP16[ptr >> 1] = value;
                break;
            case $3b6273[40]:
                HEAP32[ptr >> 2] = value;
                break;
            case $3b6273[41]:
                HEAP64[ptr >> 3] = BigInt(value);
                break;
            case $3b6273[42]:
                HEAPF32[ptr >> 2] = value;
                break;
            case $3b6273[43]:
                HEAPF64[ptr >> 3] = value;
                break;
            case $3b6273[37]:
                HEAPU32[ptr >> 2] = value;
                break;
            default: abort(`${$3b6273[45]}${type}`);
        } }
        {
            if (Module[$3b6273[46]])
                noExitRuntime = Module[$3b6273[46]];
            if (Module[$3b6273[47]])
                out = Module[$3b6273[47]];
            if (Module[$3b6273[48]])
                err = Module[$3b6273[48]];
            if (Module[$3b6273[49]])
                programArgs = Module[$3b6273[49]];
            if (Module[$3b6273[50]])
                thisProgram = Module[$3b6273[50]];
            var preInit = Module[$3b6273[51]];
            if (preInit) {
                if (typeof preInit == $3b6273[16])
                    Module[$3b6273[51]] = preInit = [preInit];
                while (preInit.length > 0) {
                    preInit.shift()();
                }
            }
        }
        Module[$3b6273[52]] = ccall;
        Module[$3b6273[53]] = cwrap;
        Module[$3b6273[54]] = setValue;
        Module[$3b6273[55]] = getValue;
        Module[$3b6273[56]] = UTF8ToString;
        var _texc_version, _texc_version_string, _texc_build_info, _texc_format_name, _texc_result_str, _texc_block_dims, _texc_encoded_size, _texc_decoded_size, _texc_can_decode, _texc_can_encode, _texc_is_paletted, _texc_palette_size, _texc_decode_paletted, _texc_decode, _malloc, _free, _texc_decode_f32, _texc_encode_options_init, _texc_encode_ex, _texc_encode, _texc_encode_f32, _texc_swizzled_size, _texc_unswizzled_size, _texc_unswizzle, _texc_swizzle, _texc_reswizzle, _texc_get_surface_layout, _texc_ps5_detect_tile_mode, _texc_ps5_default_tile_mode, _texc_unswizzle_mip, _texc_reswizzle_mip, _texc_decode_swizzled, _texc_alloc, _texc_free, _texc_profile_name, _texc_profile_bytes_per_pixel, _texc_convert_profile, _texc_flip_y, _texc_flip_x, _texc_crop, _texc_last_error, _texc_encode_with_options, _texc_decode_alloc, _texc_decode_f32_alloc, _texc_decode_swizzled_alloc, _texc_decode_paletted_alloc, _texc_encode_alloc, _texc_swizzle_alloc, _texc_unswizzle_mip_alloc, _texc_decode_rgba8, _texc_encode_rgba8, _texc_encoded_size_rgba8, _texc_decode_bc1, _texc_encode_bc1, _texc_encoded_size_bc1, _texc_decode_bc2, _texc_encode_bc2, _texc_encoded_size_bc2, _texc_decode_bc3, _texc_encode_bc3, _texc_encoded_size_bc3, _texc_decode_bc4, _texc_encode_bc4, _texc_encoded_size_bc4, _texc_decode_bc4_snorm, _texc_encode_bc4_snorm, _texc_encoded_size_bc4_snorm, _texc_decode_bc5, _texc_encode_bc5, _texc_encoded_size_bc5, _texc_decode_bc5_snorm, _texc_encode_bc5_snorm, _texc_encoded_size_bc5_snorm, _texc_decode_bc6h_uf16, _texc_encode_bc6h_uf16, _texc_encoded_size_bc6h_uf16, _texc_decode_bc6h_sf16, _texc_encode_bc6h_sf16, _texc_encoded_size_bc6h_sf16, _texc_decode_bc7, _texc_encode_bc7, _texc_encoded_size_bc7, _texc_decode_etc1_rgb, _texc_encode_etc1_rgb, _texc_encoded_size_etc1_rgb, _texc_decode_etc2_rgb, _texc_encode_etc2_rgb, _texc_encoded_size_etc2_rgb, _texc_decode_etc2_rgba1, _texc_encode_etc2_rgba1, _texc_encoded_size_etc2_rgba1, _texc_decode_etc2_rgba8, _texc_encode_etc2_rgba8, _texc_encoded_size_etc2_rgba8, _texc_decode_eac_r11, _texc_encode_eac_r11, _texc_encoded_size_eac_r11, _texc_decode_eac_r11_signed, _texc_encode_eac_r11_signed, _texc_encoded_size_eac_r11_signed, _texc_decode_eac_rg11, _texc_encode_eac_rg11, _texc_encoded_size_eac_rg11, _texc_decode_eac_rg11_signed, _texc_encode_eac_rg11_signed, _texc_encoded_size_eac_rg11_signed, _texc_decode_pvrtc1_2bpp_rgb, _texc_encode_pvrtc1_2bpp_rgb, _texc_encoded_size_pvrtc1_2bpp_rgb, _texc_decode_pvrtc1_2bpp_rgba, _texc_encode_pvrtc1_2bpp_rgba, _texc_encoded_size_pvrtc1_2bpp_rgba, _texc_decode_pvrtc1_4bpp_rgb, _texc_encode_pvrtc1_4bpp_rgb, _texc_encoded_size_pvrtc1_4bpp_rgb, _texc_decode_pvrtc1_4bpp_rgba, _texc_encode_pvrtc1_4bpp_rgba, _texc_encoded_size_pvrtc1_4bpp_rgba, _texc_decode_pvrtc2_2bpp, _texc_encode_pvrtc2_2bpp, _texc_encoded_size_pvrtc2_2bpp, _texc_decode_pvrtc2_4bpp, _texc_encode_pvrtc2_4bpp, _texc_encoded_size_pvrtc2_4bpp, _texc_decode_astc_4x4, _texc_encode_astc_4x4, _texc_encoded_size_astc_4x4, _texc_decode_astc_5x4, _texc_encode_astc_5x4, _texc_encoded_size_astc_5x4, _texc_decode_astc_5x5, _texc_encode_astc_5x5, _texc_encoded_size_astc_5x5, _texc_decode_astc_6x5, _texc_encode_astc_6x5, _texc_encoded_size_astc_6x5, _texc_decode_astc_6x6, _texc_encode_astc_6x6, _texc_encoded_size_astc_6x6, _texc_decode_astc_8x5, _texc_encode_astc_8x5, _texc_encoded_size_astc_8x5, _texc_decode_astc_8x6, _texc_encode_astc_8x6, _texc_encoded_size_astc_8x6, _texc_decode_astc_8x8, _texc_encode_astc_8x8, _texc_encoded_size_astc_8x8, _texc_decode_astc_10x5, _texc_encode_astc_10x5, _texc_encoded_size_astc_10x5, _texc_decode_astc_10x6, _texc_encode_astc_10x6, _texc_encoded_size_astc_10x6, _texc_decode_astc_10x8, _texc_encode_astc_10x8, _texc_encoded_size_astc_10x8, _texc_decode_astc_10x10, _texc_encode_astc_10x10, _texc_encoded_size_astc_10x10, _texc_decode_astc_12x10, _texc_encode_astc_12x10, _texc_encoded_size_astc_12x10, _texc_decode_astc_12x12, _texc_encode_astc_12x12, _texc_encoded_size_astc_12x12, _texc_decode_atc_rgb, _texc_encode_atc_rgb, _texc_encoded_size_atc_rgb, _texc_decode_atc_rgba_explicit, _texc_encode_atc_rgba_explicit, _texc_encoded_size_atc_rgba_explicit, _texc_decode_atc_rgba_interpolated, _texc_encode_atc_rgba_interpolated, _texc_encoded_size_atc_rgba_interpolated, _texc_decode_etc1_rgb_a_atlas, _texc_encode_etc1_rgb_a_atlas, _texc_encoded_size_etc1_rgb_a_atlas, _texc_decode_pvrtc1_4bpp_rgb_a_atlas, _texc_encode_pvrtc1_4bpp_rgb_a_atlas, _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas, _texc_decode_etc2_rgb_a_atlas, _texc_encode_etc2_rgb_a_atlas, _texc_encoded_size_etc2_rgb_a_atlas, _texc_decode_pica_etc1_rgb8, _texc_encode_pica_etc1_rgb8, _texc_encoded_size_pica_etc1_rgb8, _texc_decode_pica_etc1_rgb8a4, _texc_encode_pica_etc1_rgb8a4, _texc_encoded_size_pica_etc1_rgb8a4, _texc_decode_wii_i4, _texc_encode_wii_i4, _texc_encoded_size_wii_i4, _texc_decode_wii_i8, _texc_encode_wii_i8, _texc_encoded_size_wii_i8, _texc_decode_wii_ia4, _texc_encode_wii_ia4, _texc_encoded_size_wii_ia4, _texc_decode_wii_ia8, _texc_encode_wii_ia8, _texc_encoded_size_wii_ia8, _texc_decode_wii_rgb565, _texc_encode_wii_rgb565, _texc_encoded_size_wii_rgb565, _texc_decode_wii_rgb5a3, _texc_encode_wii_rgb5a3, _texc_encoded_size_wii_rgb5a3, _texc_decode_wii_rgba8, _texc_encode_wii_rgba8, _texc_encoded_size_wii_rgba8, _texc_decode_wii_cmpr, _texc_encode_wii_cmpr, _texc_encoded_size_wii_cmpr, _texc_decode_wii_c4, _texc_encode_wii_c4, _texc_encoded_size_wii_c4, _texc_decode_wii_c8, _texc_encode_wii_c8, _texc_encoded_size_wii_c8, _texc_decode_wii_c14x2, _texc_encode_wii_c14x2, _texc_encoded_size_wii_c14x2, _texc_unswizzle_ps4, _texc_reswizzle_ps4, _texc_swizzle_ps4, _texc_swizzled_size_ps4, _texc_unswizzle_ps5, _texc_reswizzle_ps5, _texc_swizzle_ps5, _texc_swizzled_size_ps5, _texc_unswizzle_switch, _texc_reswizzle_switch, _texc_swizzle_switch, _texc_swizzled_size_switch, _texc_unswizzle_psvita, _texc_reswizzle_psvita, _texc_swizzle_psvita, _texc_swizzled_size_psvita, _texc_unswizzle_x360, _texc_reswizzle_x360, _texc_swizzle_x360, _texc_swizzled_size_x360, _texc_unswizzle_psp, _texc_reswizzle_psp, _texc_swizzle_psp, _texc_swizzled_size_psp, _texc_unswizzle_n3ds, _texc_reswizzle_n3ds, _texc_swizzle_n3ds, _texc_swizzled_size_n3ds, _texc_unswizzle_wiiu, _texc_reswizzle_wiiu, _texc_swizzle_wiiu, _texc_swizzled_size_wiiu, _texc_unswizzle_dx12_64kb, _texc_reswizzle_dx12_64kb, _texc_swizzle_dx12_64kb, _texc_swizzled_size_dx12_64kb, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, memory, __indirect_function_table, wasmMemory;
        function assignWasmExports(wasmExports) { _texc_version = Module[$3b6273[57]] = wasmExports[$3b6273[58]]; _texc_version_string = Module[$3b6273[59]] = wasmExports[$3b6273[60]]; _texc_build_info = Module[$3b6273[61]] = wasmExports[$3b6273[62]]; _texc_format_name = Module[$3b6273[63]] = wasmExports[$3b6273[64]]; _texc_result_str = Module[$3b6273[65]] = wasmExports[$3b6273[66]]; _texc_block_dims = Module[$3b6273[67]] = wasmExports[$3b6273[68]]; _texc_encoded_size = Module[$3b6273[69]] = wasmExports[$3b6273[70]]; _texc_decoded_size = Module[$3b6273[71]] = wasmExports[$3b6273[72]]; _texc_can_decode = Module[$3b6273[73]] = wasmExports[$3b6273[74]]; _texc_can_encode = Module[$3b6273[75]] = wasmExports[$3b6273[76]]; _texc_is_paletted = Module[$3b6273[77]] = wasmExports[$3b6273[78]]; _texc_palette_size = Module[$3b6273[79]] = wasmExports[$3b6273[80]]; _texc_decode_paletted = Module[$3b6273[81]] = wasmExports[$3b6273[82]]; _texc_decode = Module[$3b6273[83]] = wasmExports[$3b6273[84]]; _malloc = Module[$3b6273[85]] = wasmExports[$3b6273[86]]; _free = Module[$3b6273[87]] = wasmExports[$3b6273[88]]; _texc_decode_f32 = Module[$3b6273[89]] = wasmExports[$3b6273[90]]; _texc_encode_options_init = Module[$3b6273[91]] = wasmExports[$3b6273[92]]; _texc_encode_ex = Module[$3b6273[93]] = wasmExports[$3b6273[94]]; _texc_encode = Module[$3b6273[95]] = wasmExports[$3b6273[96]]; _texc_encode_f32 = Module[$3b6273[97]] = wasmExports[$3b6273[98]]; _texc_swizzled_size = Module[$3b6273[99]] = wasmExports[$3b6273[100]]; _texc_unswizzled_size = Module[$3b6273[101]] = wasmExports[$3b6273[102]]; _texc_unswizzle = Module[$3b6273[103]] = wasmExports[$3b6273[104]]; _texc_swizzle = Module[$3b6273[105]] = wasmExports[$3b6273[106]]; _texc_reswizzle = Module[$3b6273[107]] = wasmExports[$3b6273[108]]; _texc_get_surface_layout = Module[$3b6273[109]] = wasmExports[$3b6273[110]]; _texc_ps5_detect_tile_mode = Module[$3b6273[111]] = wasmExports[$3b6273[112]]; _texc_ps5_default_tile_mode = Module[$3b6273[113]] = wasmExports[$3b6273[114]]; _texc_unswizzle_mip = Module[$3b6273[115]] = wasmExports[$3b6273[116]]; _texc_reswizzle_mip = Module[$3b6273[117]] = wasmExports[$3b6273[118]]; _texc_decode_swizzled = Module[$3b6273[119]] = wasmExports[$3b6273[120]]; _texc_alloc = Module[$3b6273[121]] = wasmExports[$3b6273[122]]; _texc_free = Module[$3b6273[123]] = wasmExports[$3b6273[124]]; _texc_profile_name = Module[$3b6273[125]] = wasmExports[$3b6273[126]]; _texc_profile_bytes_per_pixel = Module[$3b6273[127]] = wasmExports[$3b6273[128]]; _texc_convert_profile = Module[$3b6273[129]] = wasmExports[$3b6273[130]]; _texc_flip_y = Module[$3b6273[131]] = wasmExports[$3b6273[132]]; _texc_flip_x = Module[$3b6273[133]] = wasmExports[$3b6273[134]]; _texc_crop = Module[$3b6273[135]] = wasmExports[$3b6273[136]]; _texc_last_error = Module[$3b6273[137]] = wasmExports[$3b6273[138]]; _texc_encode_with_options = Module[$3b6273[139]] = wasmExports[$3b6273[140]]; _texc_decode_alloc = Module[$3b6273[141]] = wasmExports[$3b6273[142]]; _texc_decode_f32_alloc = Module[$3b6273[143]] = wasmExports[$3b6273[144]]; _texc_decode_swizzled_alloc = Module[$3b6273[145]] = wasmExports[$3b6273[146]]; _texc_decode_paletted_alloc = Module[$3b6273[147]] = wasmExports[$3b6273[148]]; _texc_encode_alloc = Module[$3b6273[149]] = wasmExports[$3b6273[150]]; _texc_swizzle_alloc = Module[$3b6273[151]] = wasmExports[$3b6273[32]]; _texc_unswizzle_mip_alloc = Module[$3b6273[152]] = wasmExports[$3b6273[153]]; _texc_decode_rgba8 = Module[$3b6273[154]] = wasmExports[$3b6273[155]]; _texc_encode_rgba8 = Module[$3b6273[156]] = wasmExports[$3b6273[157]]; _texc_encoded_size_rgba8 = Module[$3b6273[158]] = wasmExports[$3b6273[159]]; _texc_decode_bc1 = Module[$3b6273[160]] = wasmExports[$3b6273[161]]; _texc_encode_bc1 = Module[$3b6273[162]] = wasmExports[$3b6273[163]]; _texc_encoded_size_bc1 = Module[$3b6273[164]] = wasmExports[$3b6273[165]]; _texc_decode_bc2 = Module[$3b6273[166]] = wasmExports[$3b6273[167]]; _texc_encode_bc2 = Module[$3b6273[168]] = wasmExports[$3b6273[169]]; _texc_encoded_size_bc2 = Module[$3b6273[170]] = wasmExports[$3b6273[171]]; _texc_decode_bc3 = Module[$3b6273[172]] = wasmExports[$3b6273[173]]; _texc_encode_bc3 = Module[$3b6273[174]] = wasmExports[$3b6273[175]]; _texc_encoded_size_bc3 = Module[$3b6273[176]] = wasmExports[$3b6273[177]]; _texc_decode_bc4 = Module[$3b6273[178]] = wasmExports[$3b6273[179]]; _texc_encode_bc4 = Module[$3b6273[180]] = wasmExports[$3b6273[181]]; _texc_encoded_size_bc4 = Module[$3b6273[182]] = wasmExports[$3b6273[183]]; _texc_decode_bc4_snorm = Module[$3b6273[184]] = wasmExports[$3b6273[185]]; _texc_encode_bc4_snorm = Module[$3b6273[186]] = wasmExports[$3b6273[187]]; _texc_encoded_size_bc4_snorm = Module[$3b6273[188]] = wasmExports[$3b6273[189]]; _texc_decode_bc5 = Module[$3b6273[190]] = wasmExports[$3b6273[191]]; _texc_encode_bc5 = Module[$3b6273[192]] = wasmExports[$3b6273[193]]; _texc_encoded_size_bc5 = Module[$3b6273[194]] = wasmExports[$3b6273[195]]; _texc_decode_bc5_snorm = Module[$3b6273[196]] = wasmExports[$3b6273[197]]; _texc_encode_bc5_snorm = Module[$3b6273[198]] = wasmExports[$3b6273[199]]; _texc_encoded_size_bc5_snorm = Module[$3b6273[200]] = wasmExports[$3b6273[201]]; _texc_decode_bc6h_uf16 = Module[$3b6273[202]] = wasmExports[$3b6273[203]]; _texc_encode_bc6h_uf16 = Module[$3b6273[204]] = wasmExports[$3b6273[205]]; _texc_encoded_size_bc6h_uf16 = Module[$3b6273[206]] = wasmExports[$3b6273[207]]; _texc_decode_bc6h_sf16 = Module[$3b6273[208]] = wasmExports[$3b6273[209]]; _texc_encode_bc6h_sf16 = Module[$3b6273[210]] = wasmExports[$3b6273[211]]; _texc_encoded_size_bc6h_sf16 = Module[$3b6273[212]] = wasmExports[$3b6273[213]]; _texc_decode_bc7 = Module[$3b6273[214]] = wasmExports[$3b6273[215]]; _texc_encode_bc7 = Module[$3b6273[216]] = wasmExports[$3b6273[217]]; _texc_encoded_size_bc7 = Module[$3b6273[218]] = wasmExports[$3b6273[219]]; _texc_decode_etc1_rgb = Module[$3b6273[220]] = wasmExports[$3b6273[221]]; _texc_encode_etc1_rgb = Module[$3b6273[222]] = wasmExports[$3b6273[223]]; _texc_encoded_size_etc1_rgb = Module[$3b6273[224]] = wasmExports[$3b6273[225]]; _texc_decode_etc2_rgb = Module[$3b6273[226]] = wasmExports[$3b6273[227]]; _texc_encode_etc2_rgb = Module[$3b6273[228]] = wasmExports[$3b6273[229]]; _texc_encoded_size_etc2_rgb = Module[$3b6273[230]] = wasmExports[$3b6273[231]]; _texc_decode_etc2_rgba1 = Module[$3b6273[232]] = wasmExports[$3b6273[233]]; _texc_encode_etc2_rgba1 = Module[$3b6273[234]] = wasmExports[$3b6273[235]]; _texc_encoded_size_etc2_rgba1 = Module[$3b6273[236]] = wasmExports[$3b6273[237]]; _texc_decode_etc2_rgba8 = Module[$3b6273[238]] = wasmExports[$3b6273[239]]; _texc_encode_etc2_rgba8 = Module[$3b6273[240]] = wasmExports[$3b6273[241]]; _texc_encoded_size_etc2_rgba8 = Module[$3b6273[242]] = wasmExports[$3b6273[243]]; _texc_decode_eac_r11 = Module[$3b6273[244]] = wasmExports[$3b6273[245]]; _texc_encode_eac_r11 = Module[$3b6273[246]] = wasmExports[$3b6273[247]]; _texc_encoded_size_eac_r11 = Module[$3b6273[248]] = wasmExports[$3b6273[249]]; _texc_decode_eac_r11_signed = Module[$3b6273[250]] = wasmExports[$3b6273[251]]; _texc_encode_eac_r11_signed = Module[$3b6273[252]] = wasmExports[$3b6273[253]]; _texc_encoded_size_eac_r11_signed = Module[$3b6273[254]] = wasmExports[$3b6273[255]]; _texc_decode_eac_rg11 = Module[$3b6273[256]] = wasmExports[$3b6273[257]]; _texc_encode_eac_rg11 = Module[$3b6273[258]] = wasmExports[$3b6273[259]]; _texc_encoded_size_eac_rg11 = Module[$3b6273[260]] = wasmExports[$3b6273[261]]; _texc_decode_eac_rg11_signed = Module[$3b6273[262]] = wasmExports[$3b6273[263]]; _texc_encode_eac_rg11_signed = Module[$3b6273[264]] = wasmExports[$3b6273[265]]; _texc_encoded_size_eac_rg11_signed = Module[$3b6273[266]] = wasmExports[$3b6273[267]]; _texc_decode_pvrtc1_2bpp_rgb = Module[$3b6273[268]] = wasmExports[$3b6273[269]]; _texc_encode_pvrtc1_2bpp_rgb = Module[$3b6273[270]] = wasmExports[$3b6273[271]]; _texc_encoded_size_pvrtc1_2bpp_rgb = Module[$3b6273[272]] = wasmExports[$3b6273[273]]; _texc_decode_pvrtc1_2bpp_rgba = Module[$3b6273[274]] = wasmExports[$3b6273[275]]; _texc_encode_pvrtc1_2bpp_rgba = Module[$3b6273[276]] = wasmExports[$3b6273[277]]; _texc_encoded_size_pvrtc1_2bpp_rgba = Module[$3b6273[278]] = wasmExports[$3b6273[279]]; _texc_decode_pvrtc1_4bpp_rgb = Module[$3b6273[280]] = wasmExports[$3b6273[281]]; _texc_encode_pvrtc1_4bpp_rgb = Module[$3b6273[282]] = wasmExports[$3b6273[283]]; _texc_encoded_size_pvrtc1_4bpp_rgb = Module[$3b6273[284]] = wasmExports[$3b6273[285]]; _texc_decode_pvrtc1_4bpp_rgba = Module[$3b6273[286]] = wasmExports[$3b6273[287]]; _texc_encode_pvrtc1_4bpp_rgba = Module[$3b6273[288]] = wasmExports[$3b6273[289]]; _texc_encoded_size_pvrtc1_4bpp_rgba = Module[$3b6273[290]] = wasmExports[$3b6273[291]]; _texc_decode_pvrtc2_2bpp = Module[$3b6273[292]] = wasmExports[$3b6273[293]]; _texc_encode_pvrtc2_2bpp = Module[$3b6273[294]] = wasmExports[$3b6273[295]]; _texc_encoded_size_pvrtc2_2bpp = Module[$3b6273[296]] = wasmExports[$3b6273[297]]; _texc_decode_pvrtc2_4bpp = Module[$3b6273[298]] = wasmExports[$3b6273[299]]; _texc_encode_pvrtc2_4bpp = Module[$3b6273[300]] = wasmExports[$3b6273[301]]; _texc_encoded_size_pvrtc2_4bpp = Module[$3b6273[302]] = wasmExports[$3b6273[303]]; _texc_decode_astc_4x4 = Module[$3b6273[304]] = wasmExports[$3b6273[305]]; _texc_encode_astc_4x4 = Module[$3b6273[306]] = wasmExports[$3b6273[307]]; _texc_encoded_size_astc_4x4 = Module[$3b6273[308]] = wasmExports[$3b6273[309]]; _texc_decode_astc_5x4 = Module[$3b6273[310]] = wasmExports[$3b6273[311]]; _texc_encode_astc_5x4 = Module[$3b6273[312]] = wasmExports[$3b6273[313]]; _texc_encoded_size_astc_5x4 = Module[$3b6273[314]] = wasmExports[$3b6273[315]]; _texc_decode_astc_5x5 = Module[$3b6273[316]] = wasmExports[$3b6273[317]]; _texc_encode_astc_5x5 = Module[$3b6273[318]] = wasmExports[$3b6273[319]]; _texc_encoded_size_astc_5x5 = Module[$3b6273[320]] = wasmExports[$3b6273[321]]; _texc_decode_astc_6x5 = Module[$3b6273[322]] = wasmExports[$3b6273[323]]; _texc_encode_astc_6x5 = Module[$3b6273[324]] = wasmExports[$3b6273[325]]; _texc_encoded_size_astc_6x5 = Module[$3b6273[326]] = wasmExports[$3b6273[327]]; _texc_decode_astc_6x6 = Module[$3b6273[328]] = wasmExports[$3b6273[329]]; _texc_encode_astc_6x6 = Module[$3b6273[330]] = wasmExports[$3b6273[331]]; _texc_encoded_size_astc_6x6 = Module[$3b6273[332]] = wasmExports[$3b6273[333]]; _texc_decode_astc_8x5 = Module[$3b6273[334]] = wasmExports[$3b6273[335]]; _texc_encode_astc_8x5 = Module[$3b6273[336]] = wasmExports[$3b6273[337]]; _texc_encoded_size_astc_8x5 = Module[$3b6273[338]] = wasmExports[$3b6273[339]]; _texc_decode_astc_8x6 = Module[$3b6273[340]] = wasmExports[$3b6273[341]]; _texc_encode_astc_8x6 = Module[$3b6273[342]] = wasmExports[$3b6273[343]]; _texc_encoded_size_astc_8x6 = Module[$3b6273[344]] = wasmExports[$3b6273[345]]; _texc_decode_astc_8x8 = Module[$3b6273[346]] = wasmExports[$3b6273[347]]; _texc_encode_astc_8x8 = Module[$3b6273[348]] = wasmExports[$3b6273[349]]; _texc_encoded_size_astc_8x8 = Module[$3b6273[350]] = wasmExports[$3b6273[351]]; _texc_decode_astc_10x5 = Module[$3b6273[352]] = wasmExports[$3b6273[353]]; _texc_encode_astc_10x5 = Module[$3b6273[354]] = wasmExports[$3b6273[355]]; _texc_encoded_size_astc_10x5 = Module[$3b6273[356]] = wasmExports[$3b6273[357]]; _texc_decode_astc_10x6 = Module[$3b6273[358]] = wasmExports[$3b6273[359]]; _texc_encode_astc_10x6 = Module[$3b6273[360]] = wasmExports[$3b6273[361]]; _texc_encoded_size_astc_10x6 = Module[$3b6273[362]] = wasmExports[$3b6273[363]]; _texc_decode_astc_10x8 = Module[$3b6273[364]] = wasmExports[$3b6273[365]]; _texc_encode_astc_10x8 = Module[$3b6273[366]] = wasmExports[$3b6273[367]]; _texc_encoded_size_astc_10x8 = Module[$3b6273[368]] = wasmExports[$3b6273[369]]; _texc_decode_astc_10x10 = Module[$3b6273[370]] = wasmExports[$3b6273[371]]; _texc_encode_astc_10x10 = Module[$3b6273[372]] = wasmExports[$3b6273[373]]; _texc_encoded_size_astc_10x10 = Module[$3b6273[374]] = wasmExports[$3b6273[375]]; _texc_decode_astc_12x10 = Module[$3b6273[376]] = wasmExports[$3b6273[377]]; _texc_encode_astc_12x10 = Module[$3b6273[378]] = wasmExports[$3b6273[379]]; _texc_encoded_size_astc_12x10 = Module[$3b6273[380]] = wasmExports[$3b6273[381]]; _texc_decode_astc_12x12 = Module[$3b6273[382]] = wasmExports[$3b6273[383]]; _texc_encode_astc_12x12 = Module[$3b6273[384]] = wasmExports[$3b6273[385]]; _texc_encoded_size_astc_12x12 = Module[$3b6273[386]] = wasmExports[$3b6273[387]]; _texc_decode_atc_rgb = Module[$3b6273[388]] = wasmExports[$3b6273[389]]; _texc_encode_atc_rgb = Module[$3b6273[390]] = wasmExports[$3b6273[391]]; _texc_encoded_size_atc_rgb = Module[$3b6273[392]] = wasmExports[$3b6273[393]]; _texc_decode_atc_rgba_explicit = Module[$3b6273[394]] = wasmExports[$3b6273[395]]; _texc_encode_atc_rgba_explicit = Module[$3b6273[396]] = wasmExports[$3b6273[397]]; _texc_encoded_size_atc_rgba_explicit = Module[$3b6273[398]] = wasmExports[$3b6273[399]]; _texc_decode_atc_rgba_interpolated = Module[$3b6273[400]] = wasmExports[$3b6273[401]]; _texc_encode_atc_rgba_interpolated = Module[$3b6273[402]] = wasmExports[$3b6273[403]]; _texc_encoded_size_atc_rgba_interpolated = Module[$3b6273[404]] = wasmExports[$3b6273[405]]; _texc_decode_etc1_rgb_a_atlas = Module[$3b6273[406]] = wasmExports[$3b6273[407]]; _texc_encode_etc1_rgb_a_atlas = Module[$3b6273[408]] = wasmExports[$3b6273[409]]; _texc_encoded_size_etc1_rgb_a_atlas = Module[$3b6273[410]] = wasmExports[$3b6273[411]]; _texc_decode_pvrtc1_4bpp_rgb_a_atlas = Module[$3b6273[412]] = wasmExports[$3b6273[413]]; _texc_encode_pvrtc1_4bpp_rgb_a_atlas = Module[$3b6273[414]] = wasmExports[$3b6273[415]]; _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas = Module[$3b6273[416]] = wasmExports[$3b6273[417]]; _texc_decode_etc2_rgb_a_atlas = Module[$3b6273[418]] = wasmExports[$3b6273[419]]; _texc_encode_etc2_rgb_a_atlas = Module[$3b6273[420]] = wasmExports[$3b6273[421]]; _texc_encoded_size_etc2_rgb_a_atlas = Module[$3b6273[422]] = wasmExports[$3b6273[423]]; _texc_decode_pica_etc1_rgb8 = Module[$3b6273[424]] = wasmExports[$3b6273[425]]; _texc_encode_pica_etc1_rgb8 = Module[$3b6273[426]] = wasmExports[$3b6273[427]]; _texc_encoded_size_pica_etc1_rgb8 = Module[$3b6273[428]] = wasmExports[$3b6273[429]]; _texc_decode_pica_etc1_rgb8a4 = Module[$3b6273[430]] = wasmExports[$3b6273[431]]; _texc_encode_pica_etc1_rgb8a4 = Module[$3b6273[432]] = wasmExports[$3b6273[433]]; _texc_encoded_size_pica_etc1_rgb8a4 = Module[$3b6273[434]] = wasmExports[$3b6273[435]]; _texc_decode_wii_i4 = Module[$3b6273[436]] = wasmExports[$3b6273[437]]; _texc_encode_wii_i4 = Module[$3b6273[438]] = wasmExports[$3b6273[439]]; _texc_encoded_size_wii_i4 = Module[$3b6273[440]] = wasmExports[$3b6273[441]]; _texc_decode_wii_i8 = Module[$3b6273[442]] = wasmExports[$3b6273[443]]; _texc_encode_wii_i8 = Module[$3b6273[444]] = wasmExports[$3b6273[445]]; _texc_encoded_size_wii_i8 = Module[$3b6273[446]] = wasmExports[$3b6273[447]]; _texc_decode_wii_ia4 = Module[$3b6273[448]] = wasmExports[$3b6273[449]]; _texc_encode_wii_ia4 = Module[$3b6273[450]] = wasmExports[$3b6273[451]]; _texc_encoded_size_wii_ia4 = Module[$3b6273[452]] = wasmExports[$3b6273[453]]; _texc_decode_wii_ia8 = Module[$3b6273[454]] = wasmExports[$3b6273[455]]; _texc_encode_wii_ia8 = Module[$3b6273[456]] = wasmExports[$3b6273[457]]; _texc_encoded_size_wii_ia8 = Module[$3b6273[458]] = wasmExports[$3b6273[459]]; _texc_decode_wii_rgb565 = Module[$3b6273[460]] = wasmExports[$3b6273[461]]; _texc_encode_wii_rgb565 = Module[$3b6273[462]] = wasmExports[$3b6273[463]]; _texc_encoded_size_wii_rgb565 = Module[$3b6273[464]] = wasmExports[$3b6273[465]]; _texc_decode_wii_rgb5a3 = Module[$3b6273[466]] = wasmExports[$3b6273[467]]; _texc_encode_wii_rgb5a3 = Module[$3b6273[468]] = wasmExports[$3b6273[469]]; _texc_encoded_size_wii_rgb5a3 = Module[$3b6273[470]] = wasmExports[$3b6273[471]]; _texc_decode_wii_rgba8 = Module[$3b6273[472]] = wasmExports[$3b6273[473]]; _texc_encode_wii_rgba8 = Module[$3b6273[474]] = wasmExports[$3b6273[475]]; _texc_encoded_size_wii_rgba8 = Module[$3b6273[476]] = wasmExports[$3b6273[477]]; _texc_decode_wii_cmpr = Module[$3b6273[478]] = wasmExports[$3b6273[479]]; _texc_encode_wii_cmpr = Module[$3b6273[480]] = wasmExports[$3b6273[481]]; _texc_encoded_size_wii_cmpr = Module[$3b6273[482]] = wasmExports[$3b6273[483]]; _texc_decode_wii_c4 = Module[$3b6273[484]] = wasmExports[$3b6273[485]]; _texc_encode_wii_c4 = Module[$3b6273[486]] = wasmExports[$3b6273[487]]; _texc_encoded_size_wii_c4 = Module[$3b6273[488]] = wasmExports[$3b6273[489]]; _texc_decode_wii_c8 = Module[$3b6273[490]] = wasmExports[$3b6273[491]]; _texc_encode_wii_c8 = Module[$3b6273[492]] = wasmExports[$3b6273[493]]; _texc_encoded_size_wii_c8 = Module[$3b6273[494]] = wasmExports[$3b6273[495]]; _texc_decode_wii_c14x2 = Module[$3b6273[496]] = wasmExports[$3b6273[497]]; _texc_encode_wii_c14x2 = Module[$3b6273[498]] = wasmExports[$3b6273[499]]; _texc_encoded_size_wii_c14x2 = Module[$3b6273[500]] = wasmExports[$3b6273[501]]; _texc_unswizzle_ps4 = Module[$3b6273[502]] = wasmExports[$3b6273[503]]; _texc_reswizzle_ps4 = Module[$3b6273[504]] = wasmExports[$3b6273[505]]; _texc_swizzle_ps4 = Module[$3b6273[506]] = wasmExports[$3b6273[507]]; _texc_swizzled_size_ps4 = Module[$3b6273[508]] = wasmExports[$3b6273[509]]; _texc_unswizzle_ps5 = Module[$3b6273[510]] = wasmExports[$3b6273[511]]; _texc_reswizzle_ps5 = Module[$3b6273[512]] = wasmExports[$3b6273[513]]; _texc_swizzle_ps5 = Module[$3b6273[514]] = wasmExports[$3b6273[515]]; _texc_swizzled_size_ps5 = Module[$3b6273[516]] = wasmExports[$3b6273[517]]; _texc_unswizzle_switch = Module[$3b6273[518]] = wasmExports[$3b6273[519]]; _texc_reswizzle_switch = Module[$3b6273[520]] = wasmExports[$3b6273[521]]; _texc_swizzle_switch = Module[$3b6273[522]] = wasmExports[$3b6273[523]]; _texc_swizzled_size_switch = Module[$3b6273[524]] = wasmExports[$3b6273[525]]; _texc_unswizzle_psvita = Module[$3b6273[526]] = wasmExports[$3b6273[527]]; _texc_reswizzle_psvita = Module[$3b6273[528]] = wasmExports[$3b6273[529]]; _texc_swizzle_psvita = Module[$3b6273[530]] = wasmExports[$3b6273[531]]; _texc_swizzled_size_psvita = Module[$3b6273[532]] = wasmExports[$3b6273[533]]; _texc_unswizzle_x360 = Module[$3b6273[534]] = wasmExports[$3b6273[535]]; _texc_reswizzle_x360 = Module[$3b6273[536]] = wasmExports[$3b6273[537]]; _texc_swizzle_x360 = Module[$3b6273[538]] = wasmExports[$3b6273[539]]; _texc_swizzled_size_x360 = Module[$3b6273[540]] = wasmExports[$3b6273[541]]; _texc_unswizzle_psp = Module[$3b6273[542]] = wasmExports[$3b6273[543]]; _texc_reswizzle_psp = Module[$3b6273[544]] = wasmExports[$3b6273[545]]; _texc_swizzle_psp = Module[$3b6273[546]] = wasmExports[$3b6273[547]]; _texc_swizzled_size_psp = Module[$3b6273[548]] = wasmExports[$3b6273[549]]; _texc_unswizzle_n3ds = Module[$3b6273[550]] = wasmExports[$3b6273[551]]; _texc_reswizzle_n3ds = Module[$3b6273[552]] = wasmExports[$3b6273[553]]; _texc_swizzle_n3ds = Module[$3b6273[554]] = wasmExports[$3b6273[555]]; _texc_swizzled_size_n3ds = Module[$3b6273[556]] = wasmExports[$3b6273[557]]; _texc_unswizzle_wiiu = Module[$3b6273[558]] = wasmExports[$3b6273[559]]; _texc_reswizzle_wiiu = Module[$3b6273[560]] = wasmExports[$3b6273[561]]; _texc_swizzle_wiiu = Module[$3b6273[562]] = wasmExports[$3b6273[563]]; _texc_swizzled_size_wiiu = Module[$3b6273[564]] = wasmExports[$3b6273[565]]; _texc_unswizzle_dx12_64kb = Module[$3b6273[566]] = wasmExports[$3b6273[567]]; _texc_reswizzle_dx12_64kb = Module[$3b6273[568]] = wasmExports[$3b6273[569]]; _texc_swizzle_dx12_64kb = Module[$3b6273[570]] = wasmExports[$3b6273[571]]; _texc_swizzled_size_dx12_64kb = Module[$3b6273[572]] = wasmExports[$3b6273[573]]; __emscripten_stack_restore = wasmExports[$3b6273[574]]; __emscripten_stack_alloc = wasmExports[$3b6273[575]]; _emscripten_stack_get_current = wasmExports[$3b6273[576]]; memory = wasmMemory = wasmExports[$3b6273[577]]; __indirect_function_table = wasmExports[$3b6273[578]]; }
        var wasmImports = { c: __abort_js, b: _emscripten_resize_heap, a: _fd_write };
        async function run() { preRun(); var setStatus = Module[$3b6273[579]]; if (setStatus) {
            setStatus($3b6273[580]);
            await new Promise(resolve => setTimeout(resolve, 1));
            setTimeout(setStatus, 1, "");
        } if (ABORT)
            return; initRuntime(); Module[$3b6273[581]]?.(); postRun(); }
        var wasmExports;
        wasmExports = await createWasm();
        await run();
        ;
        return Module;
    };
})();
if (typeof exports === $3b6273[582] && typeof module === $3b6273[582]) {
    module.exports = TexCodec;
    module.exports.default = TexCodec;
}
else if (typeof define === $3b6273[16] && define[$3b6273[583]])
    define([], () => TexCodec);
