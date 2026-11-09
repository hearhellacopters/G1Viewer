const $a20464=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",1564188484,"\u0000");var TexCodec = (() => {
    var _scriptName = globalThis.document?.currentScript?.src;
    return async function (moduleArg = {}) {
        var Module = moduleArg;
        var ENVIRONMENT_IS_WEB = !!globalThis.window;
        var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
        var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != $a20464[0];
        var programArgs = [];
        var thisProgram = $a20464[1];
        var quit_ = (status, toThrow) => { throw toThrow; };
        if (typeof __filename != $a20464[2]) {
            _scriptName = __filename;
        }
        else if (ENVIRONMENT_IS_WORKER) {
            _scriptName = self.location.href;
        }
        var scriptDirectory = "";
        function locateFile(path) { if (Module[$a20464[3]]) {
            return Module[$a20464[3]](path, scriptDirectory);
        } return scriptDirectory + path; }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
            var fs = require($a20464[4]);
            scriptDirectory = __dirname + $a20464[5];
            readBinary = filename => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename); return ret; };
            readAsync = async (filename, binary = true) => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename, binary ? undefined : $a20464[6]); return ret; };
            if (process.argv.length > 1) {
                thisProgram = process.argv[1].replace(/\\/g, $a20464[5]);
            }
            programArgs = process.argv.slice(2);
            quit_ = (status, toThrow) => { process.exitCode = status; throw toThrow; };
        }
        else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            try {
                scriptDirectory = new URL($a20464[7], _scriptName).href;
            }
            catch { }
            {
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = url => { var xhr = new XMLHttpRequest; xhr.open($a20464[8], url, false); xhr.responseType = $a20464[9]; xhr.send(null); return new Uint8Array(xhr.response); };
                }
                readAsync = async (url) => { var response = await fetch(url, { credentials: $a20464[10] }); if (response.ok) {
                    return response.arrayBuffer();
                } throw new Error(response.status + $a20464[11] + response.url); };
            }
        }
        else { }
        var out = console.log.bind(console);
        var err = console.error.bind(console);
        var wasmBinary;
        var ABORT = false;
        var isFileURI = filename => filename.startsWith($a20464[12]);
        class EmscriptenEH {
        }
        class EmscriptenSjLj extends EmscriptenEH {
        }
        var runtimeInitialized = false;
        function getMemoryBuffer() { return wasmMemory.buffer; }
        function updateMemoryViews() { if (HEAP8?.buffer?.resizable)
            return; var b = getMemoryBuffer(); HEAP8 = new Int8Array(b); HEAP16 = new Int16Array(b); Module[$a20464[13]] = HEAPU8 = new Uint8Array(b); HEAP32 = new Int32Array(b); HEAPU32 = new Uint32Array(b); Module[$a20464[14]] = HEAPF32 = new Float32Array(b); HEAPF64 = new Float64Array(b); HEAP64 = new BigInt64Array(b); }
        function preRun() { var preRun = Module[$a20464[15]]; if (preRun) {
            if (typeof preRun == $a20464[16])
                preRun = [preRun];
            onPreRuns.push(...preRun);
        } callRuntimeCallbacks(onPreRuns); }
        function initRuntime() { runtimeInitialized = true; wasmExports[$a20464[17]](); }
        function postRun() { var postRun = Module[$a20464[18]]; if (postRun) {
            if (typeof postRun == $a20464[16])
                postRun = [postRun];
            onPostRuns.push(...postRun);
        } callRuntimeCallbacks(onPostRuns); }
        function abort(what) { Module[$a20464[19]]?.(what); what = `${$a20464[20]}${what}${$a20464[21]}`; err(what); ABORT = true; what += $a20464[22]; var e = new WebAssembly.RuntimeError(what); throw e; }
        var wasmBinaryFile;
        function findWasmBinary() { return locateFile($a20464[23]); }
        function getBinarySync(file) { if (readBinary) {
            return readBinary(file);
        } throw $a20464[24]; }
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
            err(`${$a20464[25]}${reason}`);
            abort(reason);
        } }
        async function instantiateAsync(binary, binaryFile, imports) { if (!binary && !ENVIRONMENT_IS_NODE) {
            try {
                var response = fetch(binaryFile, { credentials: $a20464[10] });
                var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
                return instantiationResult;
            }
            catch (reason) {
                err(`${$a20464[26]}${reason}`);
                err($a20464[27]);
            }
        } return instantiateArrayBuffer(binaryFile, imports); }
        function getWasmImports() { var imports = { a: wasmImports }; return imports; }
        async function createWasm() { function receiveInstance(instance) { wasmExports = instance.exports; assignWasmExports(wasmExports); updateMemoryViews(); return wasmExports; } function receiveInstantiationResult(result) { return receiveInstance(result[$a20464[28]]); } var info = getWasmImports(); var instantiateWasm = Module[$a20464[29]]; if (instantiateWasm) {
            return new Promise(resolve => { instantiateWasm(info, inst => resolve(receiveInstance(inst))); });
        } wasmBinaryFile ??= findWasmBinary(); var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info); var exports = receiveInstantiationResult(result); return exports; }
        class ExitStatus {
            name = $a20464[30];
            constructor(status) { this.message = `${$a20464[31]}${status}${$a20464[21]}`; this.status = status; }
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
        var getCFunc = ident => { var func = Module[$a20464[32] + ident]; return func; };
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
            } return ret; }, array: arr => { var ret = stackAlloc(arr.length); writeArrayToMemory(arr, ret); return ret; } }; function convertReturnValue(ret) { if (returnType === $a20464[33]) {
            return UTF8ToString(ret);
        } if (returnType === $a20464[34])
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
        var cwrap = (ident, returnType, argTypes, opts) => { var numericArgs = !argTypes || argTypes.every(type => type === $a20464[35] || type === $a20464[34]); var numericRet = returnType !== $a20464[33]; if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
        } return (...args) => ccall(ident, returnType, argTypes, args, opts); };
        var HEAPF32;
        var HEAP16;
        var HEAP32;
        var HEAPF64;
        var HEAP64;
        function getValue(ptr, type = $a20464[36]) { if (type.endsWith($a20464[37]))
            type = $a20464[37]; switch (type) {
            case $a20464[38]: return HEAP8[ptr];
            case $a20464[36]: return HEAP8[ptr];
            case $a20464[39]: return HEAP16[ptr >> 1];
            case $a20464[40]: return HEAP32[ptr >> 2];
            case $a20464[41]: return HEAP64[ptr >> 3];
            case $a20464[42]: return HEAPF32[ptr >> 2];
            case $a20464[43]: return HEAPF64[ptr >> 3];
            case $a20464[37]: return HEAPU32[ptr >> 2];
            default: abort(`${$a20464[44]}${type}`);
        } }
        function setValue(ptr, value, type = $a20464[36]) { if (type.endsWith($a20464[37]))
            type = $a20464[37]; switch (type) {
            case $a20464[38]:
                HEAP8[ptr] = value;
                break;
            case $a20464[36]:
                HEAP8[ptr] = value;
                break;
            case $a20464[39]:
                HEAP16[ptr >> 1] = value;
                break;
            case $a20464[40]:
                HEAP32[ptr >> 2] = value;
                break;
            case $a20464[41]:
                HEAP64[ptr >> 3] = BigInt(value);
                break;
            case $a20464[42]:
                HEAPF32[ptr >> 2] = value;
                break;
            case $a20464[43]:
                HEAPF64[ptr >> 3] = value;
                break;
            case $a20464[37]:
                HEAPU32[ptr >> 2] = value;
                break;
            default: abort(`${$a20464[45]}${type}`);
        } }
        {
            if (Module[$a20464[46]])
                noExitRuntime = Module[$a20464[46]];
            if (Module[$a20464[47]])
                out = Module[$a20464[47]];
            if (Module[$a20464[48]])
                err = Module[$a20464[48]];
            if (Module[$a20464[49]])
                programArgs = Module[$a20464[49]];
            if (Module[$a20464[50]])
                thisProgram = Module[$a20464[50]];
            var preInit = Module[$a20464[51]];
            if (preInit) {
                if (typeof preInit == $a20464[16])
                    Module[$a20464[51]] = preInit = [preInit];
                while (preInit.length > 0) {
                    preInit.shift()();
                }
            }
        }
        Module[$a20464[52]] = ccall;
        Module[$a20464[53]] = cwrap;
        Module[$a20464[54]] = setValue;
        Module[$a20464[55]] = getValue;
        Module[$a20464[56]] = UTF8ToString;
        var _texc_version, _texc_version_string, _texc_build_info, _texc_format_name, _texc_result_str, _texc_block_dims, _texc_encoded_size, _texc_decoded_size, _texc_can_decode, _texc_can_encode, _texc_is_paletted, _texc_palette_size, _texc_decode_paletted, _texc_decode, _malloc, _free, _texc_decode_f32, _texc_encode_options_init, _texc_encode_ex, _texc_encode, _texc_encode_f32, _texc_swizzled_size, _texc_unswizzled_size, _texc_unswizzle, _texc_swizzle, _texc_reswizzle, _texc_get_surface_layout, _texc_ps5_detect_tile_mode, _texc_ps5_default_tile_mode, _texc_unswizzle_mip, _texc_reswizzle_mip, _texc_get_volume_layout, _texc_unswizzle_volume_mip, _texc_reswizzle_volume_mip, _texc_decode_swizzled, _texc_alloc, _texc_free, _texc_profile_name, _texc_profile_bytes_per_pixel, _texc_convert_profile, _texc_flip_y, _texc_flip_x, _texc_crop, _texc_last_error, _texc_encode_with_options, _texc_decode_alloc, _texc_decode_f32_alloc, _texc_decode_swizzled_alloc, _texc_decode_paletted_alloc, _texc_encode_alloc, _texc_swizzle_alloc, _texc_unswizzle_mip_alloc, _texc_unswizzle_volume_mip_alloc, _texc_decode_rgba8, _texc_encode_rgba8, _texc_encoded_size_rgba8, _texc_decode_bc1, _texc_encode_bc1, _texc_encoded_size_bc1, _texc_decode_bc2, _texc_encode_bc2, _texc_encoded_size_bc2, _texc_decode_bc3, _texc_encode_bc3, _texc_encoded_size_bc3, _texc_decode_bc4, _texc_encode_bc4, _texc_encoded_size_bc4, _texc_decode_bc4_snorm, _texc_encode_bc4_snorm, _texc_encoded_size_bc4_snorm, _texc_decode_bc5, _texc_encode_bc5, _texc_encoded_size_bc5, _texc_decode_bc5_snorm, _texc_encode_bc5_snorm, _texc_encoded_size_bc5_snorm, _texc_decode_bc6h_uf16, _texc_encode_bc6h_uf16, _texc_encoded_size_bc6h_uf16, _texc_decode_bc6h_sf16, _texc_encode_bc6h_sf16, _texc_encoded_size_bc6h_sf16, _texc_decode_bc7, _texc_encode_bc7, _texc_encoded_size_bc7, _texc_decode_etc1_rgb, _texc_encode_etc1_rgb, _texc_encoded_size_etc1_rgb, _texc_decode_etc2_rgb, _texc_encode_etc2_rgb, _texc_encoded_size_etc2_rgb, _texc_decode_etc2_rgba1, _texc_encode_etc2_rgba1, _texc_encoded_size_etc2_rgba1, _texc_decode_etc2_rgba8, _texc_encode_etc2_rgba8, _texc_encoded_size_etc2_rgba8, _texc_decode_eac_r11, _texc_encode_eac_r11, _texc_encoded_size_eac_r11, _texc_decode_eac_r11_signed, _texc_encode_eac_r11_signed, _texc_encoded_size_eac_r11_signed, _texc_decode_eac_rg11, _texc_encode_eac_rg11, _texc_encoded_size_eac_rg11, _texc_decode_eac_rg11_signed, _texc_encode_eac_rg11_signed, _texc_encoded_size_eac_rg11_signed, _texc_decode_pvrtc1_2bpp_rgb, _texc_encode_pvrtc1_2bpp_rgb, _texc_encoded_size_pvrtc1_2bpp_rgb, _texc_decode_pvrtc1_2bpp_rgba, _texc_encode_pvrtc1_2bpp_rgba, _texc_encoded_size_pvrtc1_2bpp_rgba, _texc_decode_pvrtc1_4bpp_rgb, _texc_encode_pvrtc1_4bpp_rgb, _texc_encoded_size_pvrtc1_4bpp_rgb, _texc_decode_pvrtc1_4bpp_rgba, _texc_encode_pvrtc1_4bpp_rgba, _texc_encoded_size_pvrtc1_4bpp_rgba, _texc_decode_pvrtc2_2bpp, _texc_encode_pvrtc2_2bpp, _texc_encoded_size_pvrtc2_2bpp, _texc_decode_pvrtc2_4bpp, _texc_encode_pvrtc2_4bpp, _texc_encoded_size_pvrtc2_4bpp, _texc_decode_astc_4x4, _texc_encode_astc_4x4, _texc_encoded_size_astc_4x4, _texc_decode_astc_5x4, _texc_encode_astc_5x4, _texc_encoded_size_astc_5x4, _texc_decode_astc_5x5, _texc_encode_astc_5x5, _texc_encoded_size_astc_5x5, _texc_decode_astc_6x5, _texc_encode_astc_6x5, _texc_encoded_size_astc_6x5, _texc_decode_astc_6x6, _texc_encode_astc_6x6, _texc_encoded_size_astc_6x6, _texc_decode_astc_8x5, _texc_encode_astc_8x5, _texc_encoded_size_astc_8x5, _texc_decode_astc_8x6, _texc_encode_astc_8x6, _texc_encoded_size_astc_8x6, _texc_decode_astc_8x8, _texc_encode_astc_8x8, _texc_encoded_size_astc_8x8, _texc_decode_astc_10x5, _texc_encode_astc_10x5, _texc_encoded_size_astc_10x5, _texc_decode_astc_10x6, _texc_encode_astc_10x6, _texc_encoded_size_astc_10x6, _texc_decode_astc_10x8, _texc_encode_astc_10x8, _texc_encoded_size_astc_10x8, _texc_decode_astc_10x10, _texc_encode_astc_10x10, _texc_encoded_size_astc_10x10, _texc_decode_astc_12x10, _texc_encode_astc_12x10, _texc_encoded_size_astc_12x10, _texc_decode_astc_12x12, _texc_encode_astc_12x12, _texc_encoded_size_astc_12x12, _texc_decode_atc_rgb, _texc_encode_atc_rgb, _texc_encoded_size_atc_rgb, _texc_decode_atc_rgba_explicit, _texc_encode_atc_rgba_explicit, _texc_encoded_size_atc_rgba_explicit, _texc_decode_atc_rgba_interpolated, _texc_encode_atc_rgba_interpolated, _texc_encoded_size_atc_rgba_interpolated, _texc_decode_etc1_rgb_a_atlas, _texc_encode_etc1_rgb_a_atlas, _texc_encoded_size_etc1_rgb_a_atlas, _texc_decode_pvrtc1_4bpp_rgb_a_atlas, _texc_encode_pvrtc1_4bpp_rgb_a_atlas, _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas, _texc_decode_etc2_rgb_a_atlas, _texc_encode_etc2_rgb_a_atlas, _texc_encoded_size_etc2_rgb_a_atlas, _texc_decode_pica_etc1_rgb8, _texc_encode_pica_etc1_rgb8, _texc_encoded_size_pica_etc1_rgb8, _texc_decode_pica_etc1_rgb8a4, _texc_encode_pica_etc1_rgb8a4, _texc_encoded_size_pica_etc1_rgb8a4, _texc_decode_wii_i4, _texc_encode_wii_i4, _texc_encoded_size_wii_i4, _texc_decode_wii_i8, _texc_encode_wii_i8, _texc_encoded_size_wii_i8, _texc_decode_wii_ia4, _texc_encode_wii_ia4, _texc_encoded_size_wii_ia4, _texc_decode_wii_ia8, _texc_encode_wii_ia8, _texc_encoded_size_wii_ia8, _texc_decode_wii_rgb565, _texc_encode_wii_rgb565, _texc_encoded_size_wii_rgb565, _texc_decode_wii_rgb5a3, _texc_encode_wii_rgb5a3, _texc_encoded_size_wii_rgb5a3, _texc_decode_wii_rgba8, _texc_encode_wii_rgba8, _texc_encoded_size_wii_rgba8, _texc_decode_wii_cmpr, _texc_encode_wii_cmpr, _texc_encoded_size_wii_cmpr, _texc_decode_wii_c4, _texc_encode_wii_c4, _texc_encoded_size_wii_c4, _texc_decode_wii_c8, _texc_encode_wii_c8, _texc_encoded_size_wii_c8, _texc_decode_wii_c14x2, _texc_encode_wii_c14x2, _texc_encoded_size_wii_c14x2, _texc_unswizzle_ps4, _texc_reswizzle_ps4, _texc_swizzle_ps4, _texc_swizzled_size_ps4, _texc_unswizzle_ps5, _texc_reswizzle_ps5, _texc_swizzle_ps5, _texc_swizzled_size_ps5, _texc_unswizzle_switch, _texc_reswizzle_switch, _texc_swizzle_switch, _texc_swizzled_size_switch, _texc_unswizzle_psvita, _texc_reswizzle_psvita, _texc_swizzle_psvita, _texc_swizzled_size_psvita, _texc_unswizzle_x360, _texc_reswizzle_x360, _texc_swizzle_x360, _texc_swizzled_size_x360, _texc_unswizzle_psp, _texc_reswizzle_psp, _texc_swizzle_psp, _texc_swizzled_size_psp, _texc_unswizzle_n3ds, _texc_reswizzle_n3ds, _texc_swizzle_n3ds, _texc_swizzled_size_n3ds, _texc_unswizzle_wiiu, _texc_reswizzle_wiiu, _texc_swizzle_wiiu, _texc_swizzled_size_wiiu, _texc_unswizzle_dx12_64kb, _texc_reswizzle_dx12_64kb, _texc_swizzle_dx12_64kb, _texc_swizzled_size_dx12_64kb, _texc_unswizzle_switch2, _texc_reswizzle_switch2, _texc_swizzle_switch2, _texc_swizzled_size_switch2, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, memory, __indirect_function_table, wasmMemory;
        function assignWasmExports(wasmExports) { _texc_version = Module[$a20464[57]] = wasmExports[$a20464[58]]; _texc_version_string = Module[$a20464[59]] = wasmExports[$a20464[60]]; _texc_build_info = Module[$a20464[61]] = wasmExports[$a20464[62]]; _texc_format_name = Module[$a20464[63]] = wasmExports[$a20464[64]]; _texc_result_str = Module[$a20464[65]] = wasmExports[$a20464[66]]; _texc_block_dims = Module[$a20464[67]] = wasmExports[$a20464[68]]; _texc_encoded_size = Module[$a20464[69]] = wasmExports[$a20464[70]]; _texc_decoded_size = Module[$a20464[71]] = wasmExports[$a20464[72]]; _texc_can_decode = Module[$a20464[73]] = wasmExports[$a20464[74]]; _texc_can_encode = Module[$a20464[75]] = wasmExports[$a20464[76]]; _texc_is_paletted = Module[$a20464[77]] = wasmExports[$a20464[78]]; _texc_palette_size = Module[$a20464[79]] = wasmExports[$a20464[80]]; _texc_decode_paletted = Module[$a20464[81]] = wasmExports[$a20464[82]]; _texc_decode = Module[$a20464[83]] = wasmExports[$a20464[84]]; _malloc = Module[$a20464[85]] = wasmExports[$a20464[86]]; _free = Module[$a20464[87]] = wasmExports[$a20464[88]]; _texc_decode_f32 = Module[$a20464[89]] = wasmExports[$a20464[90]]; _texc_encode_options_init = Module[$a20464[91]] = wasmExports[$a20464[92]]; _texc_encode_ex = Module[$a20464[93]] = wasmExports[$a20464[94]]; _texc_encode = Module[$a20464[95]] = wasmExports[$a20464[96]]; _texc_encode_f32 = Module[$a20464[97]] = wasmExports[$a20464[98]]; _texc_swizzled_size = Module[$a20464[99]] = wasmExports[$a20464[100]]; _texc_unswizzled_size = Module[$a20464[101]] = wasmExports[$a20464[102]]; _texc_unswizzle = Module[$a20464[103]] = wasmExports[$a20464[104]]; _texc_swizzle = Module[$a20464[105]] = wasmExports[$a20464[106]]; _texc_reswizzle = Module[$a20464[107]] = wasmExports[$a20464[108]]; _texc_get_surface_layout = Module[$a20464[109]] = wasmExports[$a20464[110]]; _texc_ps5_detect_tile_mode = Module[$a20464[111]] = wasmExports[$a20464[112]]; _texc_ps5_default_tile_mode = Module[$a20464[113]] = wasmExports[$a20464[114]]; _texc_unswizzle_mip = Module[$a20464[115]] = wasmExports[$a20464[116]]; _texc_reswizzle_mip = Module[$a20464[117]] = wasmExports[$a20464[118]]; _texc_get_volume_layout = Module[$a20464[119]] = wasmExports[$a20464[120]]; _texc_unswizzle_volume_mip = Module[$a20464[121]] = wasmExports[$a20464[122]]; _texc_reswizzle_volume_mip = Module[$a20464[123]] = wasmExports[$a20464[124]]; _texc_decode_swizzled = Module[$a20464[125]] = wasmExports[$a20464[126]]; _texc_alloc = Module[$a20464[127]] = wasmExports[$a20464[128]]; _texc_free = Module[$a20464[129]] = wasmExports[$a20464[130]]; _texc_profile_name = Module[$a20464[131]] = wasmExports[$a20464[132]]; _texc_profile_bytes_per_pixel = Module[$a20464[133]] = wasmExports[$a20464[134]]; _texc_convert_profile = Module[$a20464[135]] = wasmExports[$a20464[136]]; _texc_flip_y = Module[$a20464[137]] = wasmExports[$a20464[138]]; _texc_flip_x = Module[$a20464[139]] = wasmExports[$a20464[140]]; _texc_crop = Module[$a20464[141]] = wasmExports[$a20464[142]]; _texc_last_error = Module[$a20464[143]] = wasmExports[$a20464[144]]; _texc_encode_with_options = Module[$a20464[145]] = wasmExports[$a20464[146]]; _texc_decode_alloc = Module[$a20464[147]] = wasmExports[$a20464[148]]; _texc_decode_f32_alloc = Module[$a20464[149]] = wasmExports[$a20464[150]]; _texc_decode_swizzled_alloc = Module[$a20464[151]] = wasmExports[$a20464[32]]; _texc_decode_paletted_alloc = Module[$a20464[152]] = wasmExports[$a20464[153]]; _texc_encode_alloc = Module[$a20464[154]] = wasmExports[$a20464[155]]; _texc_swizzle_alloc = Module[$a20464[156]] = wasmExports[$a20464[157]]; _texc_unswizzle_mip_alloc = Module[$a20464[158]] = wasmExports[$a20464[159]]; _texc_unswizzle_volume_mip_alloc = Module[$a20464[160]] = wasmExports[$a20464[161]]; _texc_decode_rgba8 = Module[$a20464[162]] = wasmExports[$a20464[163]]; _texc_encode_rgba8 = Module[$a20464[164]] = wasmExports[$a20464[165]]; _texc_encoded_size_rgba8 = Module[$a20464[166]] = wasmExports[$a20464[167]]; _texc_decode_bc1 = Module[$a20464[168]] = wasmExports[$a20464[169]]; _texc_encode_bc1 = Module[$a20464[170]] = wasmExports[$a20464[171]]; _texc_encoded_size_bc1 = Module[$a20464[172]] = wasmExports[$a20464[173]]; _texc_decode_bc2 = Module[$a20464[174]] = wasmExports[$a20464[175]]; _texc_encode_bc2 = Module[$a20464[176]] = wasmExports[$a20464[177]]; _texc_encoded_size_bc2 = Module[$a20464[178]] = wasmExports[$a20464[179]]; _texc_decode_bc3 = Module[$a20464[180]] = wasmExports[$a20464[181]]; _texc_encode_bc3 = Module[$a20464[182]] = wasmExports[$a20464[183]]; _texc_encoded_size_bc3 = Module[$a20464[184]] = wasmExports[$a20464[185]]; _texc_decode_bc4 = Module[$a20464[186]] = wasmExports[$a20464[187]]; _texc_encode_bc4 = Module[$a20464[188]] = wasmExports[$a20464[189]]; _texc_encoded_size_bc4 = Module[$a20464[190]] = wasmExports[$a20464[191]]; _texc_decode_bc4_snorm = Module[$a20464[192]] = wasmExports[$a20464[193]]; _texc_encode_bc4_snorm = Module[$a20464[194]] = wasmExports[$a20464[195]]; _texc_encoded_size_bc4_snorm = Module[$a20464[196]] = wasmExports[$a20464[197]]; _texc_decode_bc5 = Module[$a20464[198]] = wasmExports[$a20464[199]]; _texc_encode_bc5 = Module[$a20464[200]] = wasmExports[$a20464[201]]; _texc_encoded_size_bc5 = Module[$a20464[202]] = wasmExports[$a20464[203]]; _texc_decode_bc5_snorm = Module[$a20464[204]] = wasmExports[$a20464[205]]; _texc_encode_bc5_snorm = Module[$a20464[206]] = wasmExports[$a20464[207]]; _texc_encoded_size_bc5_snorm = Module[$a20464[208]] = wasmExports[$a20464[209]]; _texc_decode_bc6h_uf16 = Module[$a20464[210]] = wasmExports[$a20464[211]]; _texc_encode_bc6h_uf16 = Module[$a20464[212]] = wasmExports[$a20464[213]]; _texc_encoded_size_bc6h_uf16 = Module[$a20464[214]] = wasmExports[$a20464[215]]; _texc_decode_bc6h_sf16 = Module[$a20464[216]] = wasmExports[$a20464[217]]; _texc_encode_bc6h_sf16 = Module[$a20464[218]] = wasmExports[$a20464[219]]; _texc_encoded_size_bc6h_sf16 = Module[$a20464[220]] = wasmExports[$a20464[221]]; _texc_decode_bc7 = Module[$a20464[222]] = wasmExports[$a20464[223]]; _texc_encode_bc7 = Module[$a20464[224]] = wasmExports[$a20464[225]]; _texc_encoded_size_bc7 = Module[$a20464[226]] = wasmExports[$a20464[227]]; _texc_decode_etc1_rgb = Module[$a20464[228]] = wasmExports[$a20464[229]]; _texc_encode_etc1_rgb = Module[$a20464[230]] = wasmExports[$a20464[231]]; _texc_encoded_size_etc1_rgb = Module[$a20464[232]] = wasmExports[$a20464[233]]; _texc_decode_etc2_rgb = Module[$a20464[234]] = wasmExports[$a20464[235]]; _texc_encode_etc2_rgb = Module[$a20464[236]] = wasmExports[$a20464[237]]; _texc_encoded_size_etc2_rgb = Module[$a20464[238]] = wasmExports[$a20464[239]]; _texc_decode_etc2_rgba1 = Module[$a20464[240]] = wasmExports[$a20464[241]]; _texc_encode_etc2_rgba1 = Module[$a20464[242]] = wasmExports[$a20464[243]]; _texc_encoded_size_etc2_rgba1 = Module[$a20464[244]] = wasmExports[$a20464[245]]; _texc_decode_etc2_rgba8 = Module[$a20464[246]] = wasmExports[$a20464[247]]; _texc_encode_etc2_rgba8 = Module[$a20464[248]] = wasmExports[$a20464[249]]; _texc_encoded_size_etc2_rgba8 = Module[$a20464[250]] = wasmExports[$a20464[251]]; _texc_decode_eac_r11 = Module[$a20464[252]] = wasmExports[$a20464[253]]; _texc_encode_eac_r11 = Module[$a20464[254]] = wasmExports[$a20464[255]]; _texc_encoded_size_eac_r11 = Module[$a20464[256]] = wasmExports[$a20464[257]]; _texc_decode_eac_r11_signed = Module[$a20464[258]] = wasmExports[$a20464[259]]; _texc_encode_eac_r11_signed = Module[$a20464[260]] = wasmExports[$a20464[261]]; _texc_encoded_size_eac_r11_signed = Module[$a20464[262]] = wasmExports[$a20464[263]]; _texc_decode_eac_rg11 = Module[$a20464[264]] = wasmExports[$a20464[265]]; _texc_encode_eac_rg11 = Module[$a20464[266]] = wasmExports[$a20464[267]]; _texc_encoded_size_eac_rg11 = Module[$a20464[268]] = wasmExports[$a20464[269]]; _texc_decode_eac_rg11_signed = Module[$a20464[270]] = wasmExports[$a20464[271]]; _texc_encode_eac_rg11_signed = Module[$a20464[272]] = wasmExports[$a20464[273]]; _texc_encoded_size_eac_rg11_signed = Module[$a20464[274]] = wasmExports[$a20464[275]]; _texc_decode_pvrtc1_2bpp_rgb = Module[$a20464[276]] = wasmExports[$a20464[277]]; _texc_encode_pvrtc1_2bpp_rgb = Module[$a20464[278]] = wasmExports[$a20464[279]]; _texc_encoded_size_pvrtc1_2bpp_rgb = Module[$a20464[280]] = wasmExports[$a20464[281]]; _texc_decode_pvrtc1_2bpp_rgba = Module[$a20464[282]] = wasmExports[$a20464[283]]; _texc_encode_pvrtc1_2bpp_rgba = Module[$a20464[284]] = wasmExports[$a20464[285]]; _texc_encoded_size_pvrtc1_2bpp_rgba = Module[$a20464[286]] = wasmExports[$a20464[287]]; _texc_decode_pvrtc1_4bpp_rgb = Module[$a20464[288]] = wasmExports[$a20464[289]]; _texc_encode_pvrtc1_4bpp_rgb = Module[$a20464[290]] = wasmExports[$a20464[291]]; _texc_encoded_size_pvrtc1_4bpp_rgb = Module[$a20464[292]] = wasmExports[$a20464[293]]; _texc_decode_pvrtc1_4bpp_rgba = Module[$a20464[294]] = wasmExports[$a20464[295]]; _texc_encode_pvrtc1_4bpp_rgba = Module[$a20464[296]] = wasmExports[$a20464[297]]; _texc_encoded_size_pvrtc1_4bpp_rgba = Module[$a20464[298]] = wasmExports[$a20464[299]]; _texc_decode_pvrtc2_2bpp = Module[$a20464[300]] = wasmExports[$a20464[301]]; _texc_encode_pvrtc2_2bpp = Module[$a20464[302]] = wasmExports[$a20464[303]]; _texc_encoded_size_pvrtc2_2bpp = Module[$a20464[304]] = wasmExports[$a20464[305]]; _texc_decode_pvrtc2_4bpp = Module[$a20464[306]] = wasmExports[$a20464[307]]; _texc_encode_pvrtc2_4bpp = Module[$a20464[308]] = wasmExports[$a20464[309]]; _texc_encoded_size_pvrtc2_4bpp = Module[$a20464[310]] = wasmExports[$a20464[311]]; _texc_decode_astc_4x4 = Module[$a20464[312]] = wasmExports[$a20464[313]]; _texc_encode_astc_4x4 = Module[$a20464[314]] = wasmExports[$a20464[315]]; _texc_encoded_size_astc_4x4 = Module[$a20464[316]] = wasmExports[$a20464[317]]; _texc_decode_astc_5x4 = Module[$a20464[318]] = wasmExports[$a20464[319]]; _texc_encode_astc_5x4 = Module[$a20464[320]] = wasmExports[$a20464[321]]; _texc_encoded_size_astc_5x4 = Module[$a20464[322]] = wasmExports[$a20464[323]]; _texc_decode_astc_5x5 = Module[$a20464[324]] = wasmExports[$a20464[325]]; _texc_encode_astc_5x5 = Module[$a20464[326]] = wasmExports[$a20464[327]]; _texc_encoded_size_astc_5x5 = Module[$a20464[328]] = wasmExports[$a20464[329]]; _texc_decode_astc_6x5 = Module[$a20464[330]] = wasmExports[$a20464[331]]; _texc_encode_astc_6x5 = Module[$a20464[332]] = wasmExports[$a20464[333]]; _texc_encoded_size_astc_6x5 = Module[$a20464[334]] = wasmExports[$a20464[335]]; _texc_decode_astc_6x6 = Module[$a20464[336]] = wasmExports[$a20464[337]]; _texc_encode_astc_6x6 = Module[$a20464[338]] = wasmExports[$a20464[339]]; _texc_encoded_size_astc_6x6 = Module[$a20464[340]] = wasmExports[$a20464[341]]; _texc_decode_astc_8x5 = Module[$a20464[342]] = wasmExports[$a20464[343]]; _texc_encode_astc_8x5 = Module[$a20464[344]] = wasmExports[$a20464[345]]; _texc_encoded_size_astc_8x5 = Module[$a20464[346]] = wasmExports[$a20464[347]]; _texc_decode_astc_8x6 = Module[$a20464[348]] = wasmExports[$a20464[349]]; _texc_encode_astc_8x6 = Module[$a20464[350]] = wasmExports[$a20464[351]]; _texc_encoded_size_astc_8x6 = Module[$a20464[352]] = wasmExports[$a20464[353]]; _texc_decode_astc_8x8 = Module[$a20464[354]] = wasmExports[$a20464[355]]; _texc_encode_astc_8x8 = Module[$a20464[356]] = wasmExports[$a20464[357]]; _texc_encoded_size_astc_8x8 = Module[$a20464[358]] = wasmExports[$a20464[359]]; _texc_decode_astc_10x5 = Module[$a20464[360]] = wasmExports[$a20464[361]]; _texc_encode_astc_10x5 = Module[$a20464[362]] = wasmExports[$a20464[363]]; _texc_encoded_size_astc_10x5 = Module[$a20464[364]] = wasmExports[$a20464[365]]; _texc_decode_astc_10x6 = Module[$a20464[366]] = wasmExports[$a20464[367]]; _texc_encode_astc_10x6 = Module[$a20464[368]] = wasmExports[$a20464[369]]; _texc_encoded_size_astc_10x6 = Module[$a20464[370]] = wasmExports[$a20464[371]]; _texc_decode_astc_10x8 = Module[$a20464[372]] = wasmExports[$a20464[373]]; _texc_encode_astc_10x8 = Module[$a20464[374]] = wasmExports[$a20464[375]]; _texc_encoded_size_astc_10x8 = Module[$a20464[376]] = wasmExports[$a20464[377]]; _texc_decode_astc_10x10 = Module[$a20464[378]] = wasmExports[$a20464[379]]; _texc_encode_astc_10x10 = Module[$a20464[380]] = wasmExports[$a20464[381]]; _texc_encoded_size_astc_10x10 = Module[$a20464[382]] = wasmExports[$a20464[383]]; _texc_decode_astc_12x10 = Module[$a20464[384]] = wasmExports[$a20464[385]]; _texc_encode_astc_12x10 = Module[$a20464[386]] = wasmExports[$a20464[387]]; _texc_encoded_size_astc_12x10 = Module[$a20464[388]] = wasmExports[$a20464[389]]; _texc_decode_astc_12x12 = Module[$a20464[390]] = wasmExports[$a20464[391]]; _texc_encode_astc_12x12 = Module[$a20464[392]] = wasmExports[$a20464[393]]; _texc_encoded_size_astc_12x12 = Module[$a20464[394]] = wasmExports[$a20464[395]]; _texc_decode_atc_rgb = Module[$a20464[396]] = wasmExports[$a20464[397]]; _texc_encode_atc_rgb = Module[$a20464[398]] = wasmExports[$a20464[399]]; _texc_encoded_size_atc_rgb = Module[$a20464[400]] = wasmExports[$a20464[401]]; _texc_decode_atc_rgba_explicit = Module[$a20464[402]] = wasmExports[$a20464[403]]; _texc_encode_atc_rgba_explicit = Module[$a20464[404]] = wasmExports[$a20464[405]]; _texc_encoded_size_atc_rgba_explicit = Module[$a20464[406]] = wasmExports[$a20464[407]]; _texc_decode_atc_rgba_interpolated = Module[$a20464[408]] = wasmExports[$a20464[409]]; _texc_encode_atc_rgba_interpolated = Module[$a20464[410]] = wasmExports[$a20464[411]]; _texc_encoded_size_atc_rgba_interpolated = Module[$a20464[412]] = wasmExports[$a20464[413]]; _texc_decode_etc1_rgb_a_atlas = Module[$a20464[414]] = wasmExports[$a20464[415]]; _texc_encode_etc1_rgb_a_atlas = Module[$a20464[416]] = wasmExports[$a20464[417]]; _texc_encoded_size_etc1_rgb_a_atlas = Module[$a20464[418]] = wasmExports[$a20464[419]]; _texc_decode_pvrtc1_4bpp_rgb_a_atlas = Module[$a20464[420]] = wasmExports[$a20464[421]]; _texc_encode_pvrtc1_4bpp_rgb_a_atlas = Module[$a20464[422]] = wasmExports[$a20464[423]]; _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas = Module[$a20464[424]] = wasmExports[$a20464[425]]; _texc_decode_etc2_rgb_a_atlas = Module[$a20464[426]] = wasmExports[$a20464[427]]; _texc_encode_etc2_rgb_a_atlas = Module[$a20464[428]] = wasmExports[$a20464[429]]; _texc_encoded_size_etc2_rgb_a_atlas = Module[$a20464[430]] = wasmExports[$a20464[431]]; _texc_decode_pica_etc1_rgb8 = Module[$a20464[432]] = wasmExports[$a20464[433]]; _texc_encode_pica_etc1_rgb8 = Module[$a20464[434]] = wasmExports[$a20464[435]]; _texc_encoded_size_pica_etc1_rgb8 = Module[$a20464[436]] = wasmExports[$a20464[437]]; _texc_decode_pica_etc1_rgb8a4 = Module[$a20464[438]] = wasmExports[$a20464[439]]; _texc_encode_pica_etc1_rgb8a4 = Module[$a20464[440]] = wasmExports[$a20464[441]]; _texc_encoded_size_pica_etc1_rgb8a4 = Module[$a20464[442]] = wasmExports[$a20464[443]]; _texc_decode_wii_i4 = Module[$a20464[444]] = wasmExports[$a20464[445]]; _texc_encode_wii_i4 = Module[$a20464[446]] = wasmExports[$a20464[447]]; _texc_encoded_size_wii_i4 = Module[$a20464[448]] = wasmExports[$a20464[449]]; _texc_decode_wii_i8 = Module[$a20464[450]] = wasmExports[$a20464[451]]; _texc_encode_wii_i8 = Module[$a20464[452]] = wasmExports[$a20464[453]]; _texc_encoded_size_wii_i8 = Module[$a20464[454]] = wasmExports[$a20464[455]]; _texc_decode_wii_ia4 = Module[$a20464[456]] = wasmExports[$a20464[457]]; _texc_encode_wii_ia4 = Module[$a20464[458]] = wasmExports[$a20464[459]]; _texc_encoded_size_wii_ia4 = Module[$a20464[460]] = wasmExports[$a20464[461]]; _texc_decode_wii_ia8 = Module[$a20464[462]] = wasmExports[$a20464[463]]; _texc_encode_wii_ia8 = Module[$a20464[464]] = wasmExports[$a20464[465]]; _texc_encoded_size_wii_ia8 = Module[$a20464[466]] = wasmExports[$a20464[467]]; _texc_decode_wii_rgb565 = Module[$a20464[468]] = wasmExports[$a20464[469]]; _texc_encode_wii_rgb565 = Module[$a20464[470]] = wasmExports[$a20464[471]]; _texc_encoded_size_wii_rgb565 = Module[$a20464[472]] = wasmExports[$a20464[473]]; _texc_decode_wii_rgb5a3 = Module[$a20464[474]] = wasmExports[$a20464[475]]; _texc_encode_wii_rgb5a3 = Module[$a20464[476]] = wasmExports[$a20464[477]]; _texc_encoded_size_wii_rgb5a3 = Module[$a20464[478]] = wasmExports[$a20464[479]]; _texc_decode_wii_rgba8 = Module[$a20464[480]] = wasmExports[$a20464[481]]; _texc_encode_wii_rgba8 = Module[$a20464[482]] = wasmExports[$a20464[483]]; _texc_encoded_size_wii_rgba8 = Module[$a20464[484]] = wasmExports[$a20464[485]]; _texc_decode_wii_cmpr = Module[$a20464[486]] = wasmExports[$a20464[487]]; _texc_encode_wii_cmpr = Module[$a20464[488]] = wasmExports[$a20464[489]]; _texc_encoded_size_wii_cmpr = Module[$a20464[490]] = wasmExports[$a20464[491]]; _texc_decode_wii_c4 = Module[$a20464[492]] = wasmExports[$a20464[493]]; _texc_encode_wii_c4 = Module[$a20464[494]] = wasmExports[$a20464[495]]; _texc_encoded_size_wii_c4 = Module[$a20464[496]] = wasmExports[$a20464[497]]; _texc_decode_wii_c8 = Module[$a20464[498]] = wasmExports[$a20464[499]]; _texc_encode_wii_c8 = Module[$a20464[500]] = wasmExports[$a20464[501]]; _texc_encoded_size_wii_c8 = Module[$a20464[502]] = wasmExports[$a20464[503]]; _texc_decode_wii_c14x2 = Module[$a20464[504]] = wasmExports[$a20464[505]]; _texc_encode_wii_c14x2 = Module[$a20464[506]] = wasmExports[$a20464[507]]; _texc_encoded_size_wii_c14x2 = Module[$a20464[508]] = wasmExports[$a20464[509]]; _texc_unswizzle_ps4 = Module[$a20464[510]] = wasmExports[$a20464[511]]; _texc_reswizzle_ps4 = Module[$a20464[512]] = wasmExports[$a20464[513]]; _texc_swizzle_ps4 = Module[$a20464[514]] = wasmExports[$a20464[515]]; _texc_swizzled_size_ps4 = Module[$a20464[516]] = wasmExports[$a20464[517]]; _texc_unswizzle_ps5 = Module[$a20464[518]] = wasmExports[$a20464[519]]; _texc_reswizzle_ps5 = Module[$a20464[520]] = wasmExports[$a20464[521]]; _texc_swizzle_ps5 = Module[$a20464[522]] = wasmExports[$a20464[523]]; _texc_swizzled_size_ps5 = Module[$a20464[524]] = wasmExports[$a20464[525]]; _texc_unswizzle_switch = Module[$a20464[526]] = wasmExports[$a20464[527]]; _texc_reswizzle_switch = Module[$a20464[528]] = wasmExports[$a20464[529]]; _texc_swizzle_switch = Module[$a20464[530]] = wasmExports[$a20464[531]]; _texc_swizzled_size_switch = Module[$a20464[532]] = wasmExports[$a20464[533]]; _texc_unswizzle_psvita = Module[$a20464[534]] = wasmExports[$a20464[535]]; _texc_reswizzle_psvita = Module[$a20464[536]] = wasmExports[$a20464[537]]; _texc_swizzle_psvita = Module[$a20464[538]] = wasmExports[$a20464[539]]; _texc_swizzled_size_psvita = Module[$a20464[540]] = wasmExports[$a20464[541]]; _texc_unswizzle_x360 = Module[$a20464[542]] = wasmExports[$a20464[543]]; _texc_reswizzle_x360 = Module[$a20464[544]] = wasmExports[$a20464[545]]; _texc_swizzle_x360 = Module[$a20464[546]] = wasmExports[$a20464[547]]; _texc_swizzled_size_x360 = Module[$a20464[548]] = wasmExports[$a20464[549]]; _texc_unswizzle_psp = Module[$a20464[550]] = wasmExports[$a20464[551]]; _texc_reswizzle_psp = Module[$a20464[552]] = wasmExports[$a20464[553]]; _texc_swizzle_psp = Module[$a20464[554]] = wasmExports[$a20464[555]]; _texc_swizzled_size_psp = Module[$a20464[556]] = wasmExports[$a20464[557]]; _texc_unswizzle_n3ds = Module[$a20464[558]] = wasmExports[$a20464[559]]; _texc_reswizzle_n3ds = Module[$a20464[560]] = wasmExports[$a20464[561]]; _texc_swizzle_n3ds = Module[$a20464[562]] = wasmExports[$a20464[563]]; _texc_swizzled_size_n3ds = Module[$a20464[564]] = wasmExports[$a20464[565]]; _texc_unswizzle_wiiu = Module[$a20464[566]] = wasmExports[$a20464[567]]; _texc_reswizzle_wiiu = Module[$a20464[568]] = wasmExports[$a20464[569]]; _texc_swizzle_wiiu = Module[$a20464[570]] = wasmExports[$a20464[571]]; _texc_swizzled_size_wiiu = Module[$a20464[572]] = wasmExports[$a20464[573]]; _texc_unswizzle_dx12_64kb = Module[$a20464[574]] = wasmExports[$a20464[575]]; _texc_reswizzle_dx12_64kb = Module[$a20464[576]] = wasmExports[$a20464[577]]; _texc_swizzle_dx12_64kb = Module[$a20464[578]] = wasmExports[$a20464[579]]; _texc_swizzled_size_dx12_64kb = Module[$a20464[580]] = wasmExports[$a20464[581]]; _texc_unswizzle_switch2 = Module[$a20464[582]] = wasmExports[$a20464[583]]; _texc_reswizzle_switch2 = Module[$a20464[584]] = wasmExports[$a20464[585]]; _texc_swizzle_switch2 = Module[$a20464[586]] = wasmExports[$a20464[587]]; _texc_swizzled_size_switch2 = Module[$a20464[588]] = wasmExports[$a20464[589]]; __emscripten_stack_restore = wasmExports[$a20464[590]]; __emscripten_stack_alloc = wasmExports[$a20464[591]]; _emscripten_stack_get_current = wasmExports[$a20464[592]]; memory = wasmMemory = wasmExports[$a20464[593]]; __indirect_function_table = wasmExports[$a20464[594]]; }
        var wasmImports = { c: __abort_js, b: _emscripten_resize_heap, a: _fd_write };
        async function run() { preRun(); var setStatus = Module[$a20464[595]]; if (setStatus) {
            setStatus($a20464[596]);
            await new Promise(resolve => setTimeout(resolve, 1));
            setTimeout(setStatus, 1, "");
        } if (ABORT)
            return; initRuntime(); Module[$a20464[597]]?.(); postRun(); }
        var wasmExports;
        wasmExports = await createWasm();
        await run();
        ;
        return Module;
    };
})();
if (typeof exports === $a20464[598] && typeof module === $a20464[598]) {
    module.exports = TexCodec;
    module.exports.default = TexCodec;
}
else if (typeof define === $a20464[16] && define[$a20464[599]])
    define([], () => TexCodec);
