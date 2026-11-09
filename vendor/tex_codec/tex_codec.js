const $ce34da=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",2821103415,"\u0000");var TexCodec = (() => {
    var _scriptName = globalThis.document?.currentScript?.src;
    return async function (moduleArg = {}) {
        var Module = moduleArg;
        var ENVIRONMENT_IS_WEB = !!globalThis.window;
        var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
        var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != $ce34da[0];
        var programArgs = [];
        var thisProgram = $ce34da[1];
        var quit_ = (status, toThrow) => { throw toThrow; };
        if (typeof __filename != $ce34da[2]) {
            _scriptName = __filename;
        }
        else if (ENVIRONMENT_IS_WORKER) {
            _scriptName = self.location.href;
        }
        var scriptDirectory = "";
        function locateFile(path) { if (Module[$ce34da[3]]) {
            return Module[$ce34da[3]](path, scriptDirectory);
        } return scriptDirectory + path; }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
            var fs = require($ce34da[4]);
            scriptDirectory = __dirname + $ce34da[5];
            readBinary = filename => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename); return ret; };
            readAsync = async (filename, binary = true) => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename, binary ? undefined : $ce34da[6]); return ret; };
            if (process.argv.length > 1) {
                thisProgram = process.argv[1].replace(/\\/g, $ce34da[5]);
            }
            programArgs = process.argv.slice(2);
            quit_ = (status, toThrow) => { process.exitCode = status; throw toThrow; };
        }
        else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            try {
                scriptDirectory = new URL($ce34da[7], _scriptName).href;
            }
            catch { }
            {
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = url => { var xhr = new XMLHttpRequest; xhr.open($ce34da[8], url, false); xhr.responseType = $ce34da[9]; xhr.send(null); return new Uint8Array(xhr.response); };
                }
                readAsync = async (url) => { var response = await fetch(url, { credentials: $ce34da[10] }); if (response.ok) {
                    return response.arrayBuffer();
                } throw new Error(response.status + $ce34da[11] + response.url); };
            }
        }
        else { }
        var out = console.log.bind(console);
        var err = console.error.bind(console);
        var wasmBinary;
        var ABORT = false;
        var isFileURI = filename => filename.startsWith($ce34da[12]);
        class EmscriptenEH {
        }
        class EmscriptenSjLj extends EmscriptenEH {
        }
        var runtimeInitialized = false;
        function getMemoryBuffer() { return wasmMemory.buffer; }
        function updateMemoryViews() { if (HEAP8?.buffer?.resizable)
            return; var b = getMemoryBuffer(); HEAP8 = new Int8Array(b); HEAP16 = new Int16Array(b); Module[$ce34da[13]] = HEAPU8 = new Uint8Array(b); HEAP32 = new Int32Array(b); HEAPU32 = new Uint32Array(b); Module[$ce34da[14]] = HEAPF32 = new Float32Array(b); HEAPF64 = new Float64Array(b); HEAP64 = new BigInt64Array(b); }
        function preRun() { var preRun = Module[$ce34da[15]]; if (preRun) {
            if (typeof preRun == $ce34da[16])
                preRun = [preRun];
            onPreRuns.push(...preRun);
        } callRuntimeCallbacks(onPreRuns); }
        function initRuntime() { runtimeInitialized = true; wasmExports[$ce34da[17]](); }
        function postRun() { var postRun = Module[$ce34da[18]]; if (postRun) {
            if (typeof postRun == $ce34da[16])
                postRun = [postRun];
            onPostRuns.push(...postRun);
        } callRuntimeCallbacks(onPostRuns); }
        function abort(what) { Module[$ce34da[19]]?.(what); what = `${$ce34da[20]}${what}${$ce34da[21]}`; err(what); ABORT = true; what += $ce34da[22]; var e = new WebAssembly.RuntimeError(what); throw e; }
        var wasmBinaryFile;
        function findWasmBinary() { return locateFile($ce34da[23]); }
        function getBinarySync(file) { if (readBinary) {
            return readBinary(file);
        } throw $ce34da[24]; }
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
            err(`${$ce34da[25]}${reason}`);
            abort(reason);
        } }
        async function instantiateAsync(binary, binaryFile, imports) { if (!binary && !ENVIRONMENT_IS_NODE) {
            try {
                var response = fetch(binaryFile, { credentials: $ce34da[10] });
                var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
                return instantiationResult;
            }
            catch (reason) {
                err(`${$ce34da[26]}${reason}`);
                err($ce34da[27]);
            }
        } return instantiateArrayBuffer(binaryFile, imports); }
        function getWasmImports() { var imports = { a: wasmImports }; return imports; }
        async function createWasm() { function receiveInstance(instance) { wasmExports = instance.exports; assignWasmExports(wasmExports); updateMemoryViews(); return wasmExports; } function receiveInstantiationResult(result) { return receiveInstance(result[$ce34da[28]]); } var info = getWasmImports(); var instantiateWasm = Module[$ce34da[29]]; if (instantiateWasm) {
            return new Promise(resolve => { instantiateWasm(info, inst => resolve(receiveInstance(inst))); });
        } wasmBinaryFile ??= findWasmBinary(); var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info); var exports = receiveInstantiationResult(result); return exports; }
        class ExitStatus {
            name = $ce34da[30];
            constructor(status) { this.message = `${$ce34da[31]}${status}${$ce34da[21]}`; this.status = status; }
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
        var getCFunc = ident => { var func = Module[$ce34da[32] + ident]; return func; };
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
            } return ret; }, array: arr => { var ret = stackAlloc(arr.length); writeArrayToMemory(arr, ret); return ret; } }; function convertReturnValue(ret) { if (returnType === $ce34da[33]) {
            return UTF8ToString(ret);
        } if (returnType === $ce34da[34])
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
        var cwrap = (ident, returnType, argTypes, opts) => { var numericArgs = !argTypes || argTypes.every(type => type === $ce34da[35] || type === $ce34da[34]); var numericRet = returnType !== $ce34da[33]; if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
        } return (...args) => ccall(ident, returnType, argTypes, args, opts); };
        var HEAPF32;
        var HEAP16;
        var HEAP32;
        var HEAPF64;
        var HEAP64;
        function getValue(ptr, type = $ce34da[36]) { if (type.endsWith($ce34da[37]))
            type = $ce34da[37]; switch (type) {
            case $ce34da[38]: return HEAP8[ptr];
            case $ce34da[36]: return HEAP8[ptr];
            case $ce34da[39]: return HEAP16[ptr >> 1];
            case $ce34da[40]: return HEAP32[ptr >> 2];
            case $ce34da[41]: return HEAP64[ptr >> 3];
            case $ce34da[42]: return HEAPF32[ptr >> 2];
            case $ce34da[43]: return HEAPF64[ptr >> 3];
            case $ce34da[37]: return HEAPU32[ptr >> 2];
            default: abort(`${$ce34da[44]}${type}`);
        } }
        function setValue(ptr, value, type = $ce34da[36]) { if (type.endsWith($ce34da[37]))
            type = $ce34da[37]; switch (type) {
            case $ce34da[38]:
                HEAP8[ptr] = value;
                break;
            case $ce34da[36]:
                HEAP8[ptr] = value;
                break;
            case $ce34da[39]:
                HEAP16[ptr >> 1] = value;
                break;
            case $ce34da[40]:
                HEAP32[ptr >> 2] = value;
                break;
            case $ce34da[41]:
                HEAP64[ptr >> 3] = BigInt(value);
                break;
            case $ce34da[42]:
                HEAPF32[ptr >> 2] = value;
                break;
            case $ce34da[43]:
                HEAPF64[ptr >> 3] = value;
                break;
            case $ce34da[37]:
                HEAPU32[ptr >> 2] = value;
                break;
            default: abort(`${$ce34da[45]}${type}`);
        } }
        {
            if (Module[$ce34da[46]])
                noExitRuntime = Module[$ce34da[46]];
            if (Module[$ce34da[47]])
                out = Module[$ce34da[47]];
            if (Module[$ce34da[48]])
                err = Module[$ce34da[48]];
            if (Module[$ce34da[49]])
                programArgs = Module[$ce34da[49]];
            if (Module[$ce34da[50]])
                thisProgram = Module[$ce34da[50]];
            var preInit = Module[$ce34da[51]];
            if (preInit) {
                if (typeof preInit == $ce34da[16])
                    Module[$ce34da[51]] = preInit = [preInit];
                while (preInit.length > 0) {
                    preInit.shift()();
                }
            }
        }
        Module[$ce34da[52]] = ccall;
        Module[$ce34da[53]] = cwrap;
        Module[$ce34da[54]] = setValue;
        Module[$ce34da[55]] = getValue;
        Module[$ce34da[56]] = UTF8ToString;
        var _texc_version, _texc_version_string, _texc_build_info, _texc_format_name, _texc_result_str, _texc_block_dims, _texc_encoded_size, _texc_decoded_size, _texc_can_decode, _texc_can_encode, _texc_is_paletted, _texc_palette_size, _texc_decode_paletted, _texc_decode, _malloc, _free, _texc_decode_f32, _texc_encode_options_init, _texc_encode_ex, _texc_encode, _texc_encode_f32, _texc_swizzled_size, _texc_unswizzled_size, _texc_unswizzle, _texc_swizzle, _texc_reswizzle, _texc_get_surface_layout, _texc_ps5_detect_tile_mode, _texc_ps5_default_tile_mode, _texc_unswizzle_mip, _texc_reswizzle_mip, _texc_get_volume_layout, _texc_unswizzle_volume_mip, _texc_reswizzle_volume_mip, _texc_decode_swizzled, _texc_alloc, _texc_free, _texc_profile_name, _texc_profile_bytes_per_pixel, _texc_convert_profile, _texc_flip_y, _texc_flip_x, _texc_crop, _texc_last_error, _texc_encode_with_options, _texc_decode_alloc, _texc_decode_f32_alloc, _texc_decode_swizzled_alloc, _texc_decode_paletted_alloc, _texc_encode_alloc, _texc_swizzle_alloc, _texc_unswizzle_mip_alloc, _texc_unswizzle_volume_mip_alloc, _texc_decode_rgba8, _texc_encode_rgba8, _texc_encoded_size_rgba8, _texc_decode_bc1, _texc_encode_bc1, _texc_encoded_size_bc1, _texc_decode_bc2, _texc_encode_bc2, _texc_encoded_size_bc2, _texc_decode_bc3, _texc_encode_bc3, _texc_encoded_size_bc3, _texc_decode_bc4, _texc_encode_bc4, _texc_encoded_size_bc4, _texc_decode_bc4_snorm, _texc_encode_bc4_snorm, _texc_encoded_size_bc4_snorm, _texc_decode_bc5, _texc_encode_bc5, _texc_encoded_size_bc5, _texc_decode_bc5_snorm, _texc_encode_bc5_snorm, _texc_encoded_size_bc5_snorm, _texc_decode_bc6h_uf16, _texc_encode_bc6h_uf16, _texc_encoded_size_bc6h_uf16, _texc_decode_bc6h_sf16, _texc_encode_bc6h_sf16, _texc_encoded_size_bc6h_sf16, _texc_decode_bc7, _texc_encode_bc7, _texc_encoded_size_bc7, _texc_decode_etc1_rgb, _texc_encode_etc1_rgb, _texc_encoded_size_etc1_rgb, _texc_decode_etc2_rgb, _texc_encode_etc2_rgb, _texc_encoded_size_etc2_rgb, _texc_decode_etc2_rgba1, _texc_encode_etc2_rgba1, _texc_encoded_size_etc2_rgba1, _texc_decode_etc2_rgba8, _texc_encode_etc2_rgba8, _texc_encoded_size_etc2_rgba8, _texc_decode_eac_r11, _texc_encode_eac_r11, _texc_encoded_size_eac_r11, _texc_decode_eac_r11_signed, _texc_encode_eac_r11_signed, _texc_encoded_size_eac_r11_signed, _texc_decode_eac_rg11, _texc_encode_eac_rg11, _texc_encoded_size_eac_rg11, _texc_decode_eac_rg11_signed, _texc_encode_eac_rg11_signed, _texc_encoded_size_eac_rg11_signed, _texc_decode_pvrtc1_2bpp_rgb, _texc_encode_pvrtc1_2bpp_rgb, _texc_encoded_size_pvrtc1_2bpp_rgb, _texc_decode_pvrtc1_2bpp_rgba, _texc_encode_pvrtc1_2bpp_rgba, _texc_encoded_size_pvrtc1_2bpp_rgba, _texc_decode_pvrtc1_4bpp_rgb, _texc_encode_pvrtc1_4bpp_rgb, _texc_encoded_size_pvrtc1_4bpp_rgb, _texc_decode_pvrtc1_4bpp_rgba, _texc_encode_pvrtc1_4bpp_rgba, _texc_encoded_size_pvrtc1_4bpp_rgba, _texc_decode_pvrtc2_2bpp, _texc_encode_pvrtc2_2bpp, _texc_encoded_size_pvrtc2_2bpp, _texc_decode_pvrtc2_4bpp, _texc_encode_pvrtc2_4bpp, _texc_encoded_size_pvrtc2_4bpp, _texc_decode_astc_4x4, _texc_encode_astc_4x4, _texc_encoded_size_astc_4x4, _texc_decode_astc_5x4, _texc_encode_astc_5x4, _texc_encoded_size_astc_5x4, _texc_decode_astc_5x5, _texc_encode_astc_5x5, _texc_encoded_size_astc_5x5, _texc_decode_astc_6x5, _texc_encode_astc_6x5, _texc_encoded_size_astc_6x5, _texc_decode_astc_6x6, _texc_encode_astc_6x6, _texc_encoded_size_astc_6x6, _texc_decode_astc_8x5, _texc_encode_astc_8x5, _texc_encoded_size_astc_8x5, _texc_decode_astc_8x6, _texc_encode_astc_8x6, _texc_encoded_size_astc_8x6, _texc_decode_astc_8x8, _texc_encode_astc_8x8, _texc_encoded_size_astc_8x8, _texc_decode_astc_10x5, _texc_encode_astc_10x5, _texc_encoded_size_astc_10x5, _texc_decode_astc_10x6, _texc_encode_astc_10x6, _texc_encoded_size_astc_10x6, _texc_decode_astc_10x8, _texc_encode_astc_10x8, _texc_encoded_size_astc_10x8, _texc_decode_astc_10x10, _texc_encode_astc_10x10, _texc_encoded_size_astc_10x10, _texc_decode_astc_12x10, _texc_encode_astc_12x10, _texc_encoded_size_astc_12x10, _texc_decode_astc_12x12, _texc_encode_astc_12x12, _texc_encoded_size_astc_12x12, _texc_decode_atc_rgb, _texc_encode_atc_rgb, _texc_encoded_size_atc_rgb, _texc_decode_atc_rgba_explicit, _texc_encode_atc_rgba_explicit, _texc_encoded_size_atc_rgba_explicit, _texc_decode_atc_rgba_interpolated, _texc_encode_atc_rgba_interpolated, _texc_encoded_size_atc_rgba_interpolated, _texc_decode_etc1_rgb_a_atlas, _texc_encode_etc1_rgb_a_atlas, _texc_encoded_size_etc1_rgb_a_atlas, _texc_decode_pvrtc1_4bpp_rgb_a_atlas, _texc_encode_pvrtc1_4bpp_rgb_a_atlas, _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas, _texc_decode_etc2_rgb_a_atlas, _texc_encode_etc2_rgb_a_atlas, _texc_encoded_size_etc2_rgb_a_atlas, _texc_decode_pica_etc1_rgb8, _texc_encode_pica_etc1_rgb8, _texc_encoded_size_pica_etc1_rgb8, _texc_decode_pica_etc1_rgb8a4, _texc_encode_pica_etc1_rgb8a4, _texc_encoded_size_pica_etc1_rgb8a4, _texc_decode_wii_i4, _texc_encode_wii_i4, _texc_encoded_size_wii_i4, _texc_decode_wii_i8, _texc_encode_wii_i8, _texc_encoded_size_wii_i8, _texc_decode_wii_ia4, _texc_encode_wii_ia4, _texc_encoded_size_wii_ia4, _texc_decode_wii_ia8, _texc_encode_wii_ia8, _texc_encoded_size_wii_ia8, _texc_decode_wii_rgb565, _texc_encode_wii_rgb565, _texc_encoded_size_wii_rgb565, _texc_decode_wii_rgb5a3, _texc_encode_wii_rgb5a3, _texc_encoded_size_wii_rgb5a3, _texc_decode_wii_rgba8, _texc_encode_wii_rgba8, _texc_encoded_size_wii_rgba8, _texc_decode_wii_cmpr, _texc_encode_wii_cmpr, _texc_encoded_size_wii_cmpr, _texc_decode_wii_c4, _texc_encode_wii_c4, _texc_encoded_size_wii_c4, _texc_decode_wii_c8, _texc_encode_wii_c8, _texc_encoded_size_wii_c8, _texc_decode_wii_c14x2, _texc_encode_wii_c14x2, _texc_encoded_size_wii_c14x2, _texc_unswizzle_ps4, _texc_reswizzle_ps4, _texc_swizzle_ps4, _texc_swizzled_size_ps4, _texc_unswizzle_ps5, _texc_reswizzle_ps5, _texc_swizzle_ps5, _texc_swizzled_size_ps5, _texc_unswizzle_switch, _texc_reswizzle_switch, _texc_swizzle_switch, _texc_swizzled_size_switch, _texc_unswizzle_psvita, _texc_reswizzle_psvita, _texc_swizzle_psvita, _texc_swizzled_size_psvita, _texc_unswizzle_x360, _texc_reswizzle_x360, _texc_swizzle_x360, _texc_swizzled_size_x360, _texc_unswizzle_psp, _texc_reswizzle_psp, _texc_swizzle_psp, _texc_swizzled_size_psp, _texc_unswizzle_n3ds, _texc_reswizzle_n3ds, _texc_swizzle_n3ds, _texc_swizzled_size_n3ds, _texc_unswizzle_wiiu, _texc_reswizzle_wiiu, _texc_swizzle_wiiu, _texc_swizzled_size_wiiu, _texc_unswizzle_dx12_64kb, _texc_reswizzle_dx12_64kb, _texc_swizzle_dx12_64kb, _texc_swizzled_size_dx12_64kb, _texc_unswizzle_switch2, _texc_reswizzle_switch2, _texc_swizzle_switch2, _texc_swizzled_size_switch2, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, memory, __indirect_function_table, wasmMemory;
        function assignWasmExports(wasmExports) { _texc_version = Module[$ce34da[57]] = wasmExports[$ce34da[58]]; _texc_version_string = Module[$ce34da[59]] = wasmExports[$ce34da[60]]; _texc_build_info = Module[$ce34da[61]] = wasmExports[$ce34da[62]]; _texc_format_name = Module[$ce34da[63]] = wasmExports[$ce34da[64]]; _texc_result_str = Module[$ce34da[65]] = wasmExports[$ce34da[66]]; _texc_block_dims = Module[$ce34da[67]] = wasmExports[$ce34da[68]]; _texc_encoded_size = Module[$ce34da[69]] = wasmExports[$ce34da[70]]; _texc_decoded_size = Module[$ce34da[71]] = wasmExports[$ce34da[72]]; _texc_can_decode = Module[$ce34da[73]] = wasmExports[$ce34da[74]]; _texc_can_encode = Module[$ce34da[75]] = wasmExports[$ce34da[76]]; _texc_is_paletted = Module[$ce34da[77]] = wasmExports[$ce34da[78]]; _texc_palette_size = Module[$ce34da[79]] = wasmExports[$ce34da[80]]; _texc_decode_paletted = Module[$ce34da[81]] = wasmExports[$ce34da[82]]; _texc_decode = Module[$ce34da[83]] = wasmExports[$ce34da[84]]; _malloc = Module[$ce34da[85]] = wasmExports[$ce34da[86]]; _free = Module[$ce34da[87]] = wasmExports[$ce34da[88]]; _texc_decode_f32 = Module[$ce34da[89]] = wasmExports[$ce34da[90]]; _texc_encode_options_init = Module[$ce34da[91]] = wasmExports[$ce34da[92]]; _texc_encode_ex = Module[$ce34da[93]] = wasmExports[$ce34da[94]]; _texc_encode = Module[$ce34da[95]] = wasmExports[$ce34da[96]]; _texc_encode_f32 = Module[$ce34da[97]] = wasmExports[$ce34da[98]]; _texc_swizzled_size = Module[$ce34da[99]] = wasmExports[$ce34da[100]]; _texc_unswizzled_size = Module[$ce34da[101]] = wasmExports[$ce34da[102]]; _texc_unswizzle = Module[$ce34da[103]] = wasmExports[$ce34da[104]]; _texc_swizzle = Module[$ce34da[105]] = wasmExports[$ce34da[106]]; _texc_reswizzle = Module[$ce34da[107]] = wasmExports[$ce34da[108]]; _texc_get_surface_layout = Module[$ce34da[109]] = wasmExports[$ce34da[110]]; _texc_ps5_detect_tile_mode = Module[$ce34da[111]] = wasmExports[$ce34da[112]]; _texc_ps5_default_tile_mode = Module[$ce34da[113]] = wasmExports[$ce34da[114]]; _texc_unswizzle_mip = Module[$ce34da[115]] = wasmExports[$ce34da[116]]; _texc_reswizzle_mip = Module[$ce34da[117]] = wasmExports[$ce34da[118]]; _texc_get_volume_layout = Module[$ce34da[119]] = wasmExports[$ce34da[120]]; _texc_unswizzle_volume_mip = Module[$ce34da[121]] = wasmExports[$ce34da[122]]; _texc_reswizzle_volume_mip = Module[$ce34da[123]] = wasmExports[$ce34da[124]]; _texc_decode_swizzled = Module[$ce34da[125]] = wasmExports[$ce34da[126]]; _texc_alloc = Module[$ce34da[127]] = wasmExports[$ce34da[128]]; _texc_free = Module[$ce34da[129]] = wasmExports[$ce34da[130]]; _texc_profile_name = Module[$ce34da[131]] = wasmExports[$ce34da[132]]; _texc_profile_bytes_per_pixel = Module[$ce34da[133]] = wasmExports[$ce34da[134]]; _texc_convert_profile = Module[$ce34da[135]] = wasmExports[$ce34da[136]]; _texc_flip_y = Module[$ce34da[137]] = wasmExports[$ce34da[138]]; _texc_flip_x = Module[$ce34da[139]] = wasmExports[$ce34da[140]]; _texc_crop = Module[$ce34da[141]] = wasmExports[$ce34da[142]]; _texc_last_error = Module[$ce34da[143]] = wasmExports[$ce34da[144]]; _texc_encode_with_options = Module[$ce34da[145]] = wasmExports[$ce34da[146]]; _texc_decode_alloc = Module[$ce34da[147]] = wasmExports[$ce34da[148]]; _texc_decode_f32_alloc = Module[$ce34da[149]] = wasmExports[$ce34da[150]]; _texc_decode_swizzled_alloc = Module[$ce34da[151]] = wasmExports[$ce34da[32]]; _texc_decode_paletted_alloc = Module[$ce34da[152]] = wasmExports[$ce34da[153]]; _texc_encode_alloc = Module[$ce34da[154]] = wasmExports[$ce34da[155]]; _texc_swizzle_alloc = Module[$ce34da[156]] = wasmExports[$ce34da[157]]; _texc_unswizzle_mip_alloc = Module[$ce34da[158]] = wasmExports[$ce34da[159]]; _texc_unswizzle_volume_mip_alloc = Module[$ce34da[160]] = wasmExports[$ce34da[161]]; _texc_decode_rgba8 = Module[$ce34da[162]] = wasmExports[$ce34da[163]]; _texc_encode_rgba8 = Module[$ce34da[164]] = wasmExports[$ce34da[165]]; _texc_encoded_size_rgba8 = Module[$ce34da[166]] = wasmExports[$ce34da[167]]; _texc_decode_bc1 = Module[$ce34da[168]] = wasmExports[$ce34da[169]]; _texc_encode_bc1 = Module[$ce34da[170]] = wasmExports[$ce34da[171]]; _texc_encoded_size_bc1 = Module[$ce34da[172]] = wasmExports[$ce34da[173]]; _texc_decode_bc2 = Module[$ce34da[174]] = wasmExports[$ce34da[175]]; _texc_encode_bc2 = Module[$ce34da[176]] = wasmExports[$ce34da[177]]; _texc_encoded_size_bc2 = Module[$ce34da[178]] = wasmExports[$ce34da[179]]; _texc_decode_bc3 = Module[$ce34da[180]] = wasmExports[$ce34da[181]]; _texc_encode_bc3 = Module[$ce34da[182]] = wasmExports[$ce34da[183]]; _texc_encoded_size_bc3 = Module[$ce34da[184]] = wasmExports[$ce34da[185]]; _texc_decode_bc4 = Module[$ce34da[186]] = wasmExports[$ce34da[187]]; _texc_encode_bc4 = Module[$ce34da[188]] = wasmExports[$ce34da[189]]; _texc_encoded_size_bc4 = Module[$ce34da[190]] = wasmExports[$ce34da[191]]; _texc_decode_bc4_snorm = Module[$ce34da[192]] = wasmExports[$ce34da[193]]; _texc_encode_bc4_snorm = Module[$ce34da[194]] = wasmExports[$ce34da[195]]; _texc_encoded_size_bc4_snorm = Module[$ce34da[196]] = wasmExports[$ce34da[197]]; _texc_decode_bc5 = Module[$ce34da[198]] = wasmExports[$ce34da[199]]; _texc_encode_bc5 = Module[$ce34da[200]] = wasmExports[$ce34da[201]]; _texc_encoded_size_bc5 = Module[$ce34da[202]] = wasmExports[$ce34da[203]]; _texc_decode_bc5_snorm = Module[$ce34da[204]] = wasmExports[$ce34da[205]]; _texc_encode_bc5_snorm = Module[$ce34da[206]] = wasmExports[$ce34da[207]]; _texc_encoded_size_bc5_snorm = Module[$ce34da[208]] = wasmExports[$ce34da[209]]; _texc_decode_bc6h_uf16 = Module[$ce34da[210]] = wasmExports[$ce34da[211]]; _texc_encode_bc6h_uf16 = Module[$ce34da[212]] = wasmExports[$ce34da[213]]; _texc_encoded_size_bc6h_uf16 = Module[$ce34da[214]] = wasmExports[$ce34da[215]]; _texc_decode_bc6h_sf16 = Module[$ce34da[216]] = wasmExports[$ce34da[217]]; _texc_encode_bc6h_sf16 = Module[$ce34da[218]] = wasmExports[$ce34da[219]]; _texc_encoded_size_bc6h_sf16 = Module[$ce34da[220]] = wasmExports[$ce34da[221]]; _texc_decode_bc7 = Module[$ce34da[222]] = wasmExports[$ce34da[223]]; _texc_encode_bc7 = Module[$ce34da[224]] = wasmExports[$ce34da[225]]; _texc_encoded_size_bc7 = Module[$ce34da[226]] = wasmExports[$ce34da[227]]; _texc_decode_etc1_rgb = Module[$ce34da[228]] = wasmExports[$ce34da[229]]; _texc_encode_etc1_rgb = Module[$ce34da[230]] = wasmExports[$ce34da[231]]; _texc_encoded_size_etc1_rgb = Module[$ce34da[232]] = wasmExports[$ce34da[233]]; _texc_decode_etc2_rgb = Module[$ce34da[234]] = wasmExports[$ce34da[235]]; _texc_encode_etc2_rgb = Module[$ce34da[236]] = wasmExports[$ce34da[237]]; _texc_encoded_size_etc2_rgb = Module[$ce34da[238]] = wasmExports[$ce34da[239]]; _texc_decode_etc2_rgba1 = Module[$ce34da[240]] = wasmExports[$ce34da[241]]; _texc_encode_etc2_rgba1 = Module[$ce34da[242]] = wasmExports[$ce34da[243]]; _texc_encoded_size_etc2_rgba1 = Module[$ce34da[244]] = wasmExports[$ce34da[245]]; _texc_decode_etc2_rgba8 = Module[$ce34da[246]] = wasmExports[$ce34da[247]]; _texc_encode_etc2_rgba8 = Module[$ce34da[248]] = wasmExports[$ce34da[249]]; _texc_encoded_size_etc2_rgba8 = Module[$ce34da[250]] = wasmExports[$ce34da[251]]; _texc_decode_eac_r11 = Module[$ce34da[252]] = wasmExports[$ce34da[253]]; _texc_encode_eac_r11 = Module[$ce34da[254]] = wasmExports[$ce34da[255]]; _texc_encoded_size_eac_r11 = Module[$ce34da[256]] = wasmExports[$ce34da[257]]; _texc_decode_eac_r11_signed = Module[$ce34da[258]] = wasmExports[$ce34da[259]]; _texc_encode_eac_r11_signed = Module[$ce34da[260]] = wasmExports[$ce34da[261]]; _texc_encoded_size_eac_r11_signed = Module[$ce34da[262]] = wasmExports[$ce34da[263]]; _texc_decode_eac_rg11 = Module[$ce34da[264]] = wasmExports[$ce34da[265]]; _texc_encode_eac_rg11 = Module[$ce34da[266]] = wasmExports[$ce34da[267]]; _texc_encoded_size_eac_rg11 = Module[$ce34da[268]] = wasmExports[$ce34da[269]]; _texc_decode_eac_rg11_signed = Module[$ce34da[270]] = wasmExports[$ce34da[271]]; _texc_encode_eac_rg11_signed = Module[$ce34da[272]] = wasmExports[$ce34da[273]]; _texc_encoded_size_eac_rg11_signed = Module[$ce34da[274]] = wasmExports[$ce34da[275]]; _texc_decode_pvrtc1_2bpp_rgb = Module[$ce34da[276]] = wasmExports[$ce34da[277]]; _texc_encode_pvrtc1_2bpp_rgb = Module[$ce34da[278]] = wasmExports[$ce34da[279]]; _texc_encoded_size_pvrtc1_2bpp_rgb = Module[$ce34da[280]] = wasmExports[$ce34da[281]]; _texc_decode_pvrtc1_2bpp_rgba = Module[$ce34da[282]] = wasmExports[$ce34da[283]]; _texc_encode_pvrtc1_2bpp_rgba = Module[$ce34da[284]] = wasmExports[$ce34da[285]]; _texc_encoded_size_pvrtc1_2bpp_rgba = Module[$ce34da[286]] = wasmExports[$ce34da[287]]; _texc_decode_pvrtc1_4bpp_rgb = Module[$ce34da[288]] = wasmExports[$ce34da[289]]; _texc_encode_pvrtc1_4bpp_rgb = Module[$ce34da[290]] = wasmExports[$ce34da[291]]; _texc_encoded_size_pvrtc1_4bpp_rgb = Module[$ce34da[292]] = wasmExports[$ce34da[293]]; _texc_decode_pvrtc1_4bpp_rgba = Module[$ce34da[294]] = wasmExports[$ce34da[295]]; _texc_encode_pvrtc1_4bpp_rgba = Module[$ce34da[296]] = wasmExports[$ce34da[297]]; _texc_encoded_size_pvrtc1_4bpp_rgba = Module[$ce34da[298]] = wasmExports[$ce34da[299]]; _texc_decode_pvrtc2_2bpp = Module[$ce34da[300]] = wasmExports[$ce34da[301]]; _texc_encode_pvrtc2_2bpp = Module[$ce34da[302]] = wasmExports[$ce34da[303]]; _texc_encoded_size_pvrtc2_2bpp = Module[$ce34da[304]] = wasmExports[$ce34da[305]]; _texc_decode_pvrtc2_4bpp = Module[$ce34da[306]] = wasmExports[$ce34da[307]]; _texc_encode_pvrtc2_4bpp = Module[$ce34da[308]] = wasmExports[$ce34da[309]]; _texc_encoded_size_pvrtc2_4bpp = Module[$ce34da[310]] = wasmExports[$ce34da[311]]; _texc_decode_astc_4x4 = Module[$ce34da[312]] = wasmExports[$ce34da[313]]; _texc_encode_astc_4x4 = Module[$ce34da[314]] = wasmExports[$ce34da[315]]; _texc_encoded_size_astc_4x4 = Module[$ce34da[316]] = wasmExports[$ce34da[317]]; _texc_decode_astc_5x4 = Module[$ce34da[318]] = wasmExports[$ce34da[319]]; _texc_encode_astc_5x4 = Module[$ce34da[320]] = wasmExports[$ce34da[321]]; _texc_encoded_size_astc_5x4 = Module[$ce34da[322]] = wasmExports[$ce34da[323]]; _texc_decode_astc_5x5 = Module[$ce34da[324]] = wasmExports[$ce34da[325]]; _texc_encode_astc_5x5 = Module[$ce34da[326]] = wasmExports[$ce34da[327]]; _texc_encoded_size_astc_5x5 = Module[$ce34da[328]] = wasmExports[$ce34da[329]]; _texc_decode_astc_6x5 = Module[$ce34da[330]] = wasmExports[$ce34da[331]]; _texc_encode_astc_6x5 = Module[$ce34da[332]] = wasmExports[$ce34da[333]]; _texc_encoded_size_astc_6x5 = Module[$ce34da[334]] = wasmExports[$ce34da[335]]; _texc_decode_astc_6x6 = Module[$ce34da[336]] = wasmExports[$ce34da[337]]; _texc_encode_astc_6x6 = Module[$ce34da[338]] = wasmExports[$ce34da[339]]; _texc_encoded_size_astc_6x6 = Module[$ce34da[340]] = wasmExports[$ce34da[341]]; _texc_decode_astc_8x5 = Module[$ce34da[342]] = wasmExports[$ce34da[343]]; _texc_encode_astc_8x5 = Module[$ce34da[344]] = wasmExports[$ce34da[345]]; _texc_encoded_size_astc_8x5 = Module[$ce34da[346]] = wasmExports[$ce34da[347]]; _texc_decode_astc_8x6 = Module[$ce34da[348]] = wasmExports[$ce34da[349]]; _texc_encode_astc_8x6 = Module[$ce34da[350]] = wasmExports[$ce34da[351]]; _texc_encoded_size_astc_8x6 = Module[$ce34da[352]] = wasmExports[$ce34da[353]]; _texc_decode_astc_8x8 = Module[$ce34da[354]] = wasmExports[$ce34da[355]]; _texc_encode_astc_8x8 = Module[$ce34da[356]] = wasmExports[$ce34da[357]]; _texc_encoded_size_astc_8x8 = Module[$ce34da[358]] = wasmExports[$ce34da[359]]; _texc_decode_astc_10x5 = Module[$ce34da[360]] = wasmExports[$ce34da[361]]; _texc_encode_astc_10x5 = Module[$ce34da[362]] = wasmExports[$ce34da[363]]; _texc_encoded_size_astc_10x5 = Module[$ce34da[364]] = wasmExports[$ce34da[365]]; _texc_decode_astc_10x6 = Module[$ce34da[366]] = wasmExports[$ce34da[367]]; _texc_encode_astc_10x6 = Module[$ce34da[368]] = wasmExports[$ce34da[369]]; _texc_encoded_size_astc_10x6 = Module[$ce34da[370]] = wasmExports[$ce34da[371]]; _texc_decode_astc_10x8 = Module[$ce34da[372]] = wasmExports[$ce34da[373]]; _texc_encode_astc_10x8 = Module[$ce34da[374]] = wasmExports[$ce34da[375]]; _texc_encoded_size_astc_10x8 = Module[$ce34da[376]] = wasmExports[$ce34da[377]]; _texc_decode_astc_10x10 = Module[$ce34da[378]] = wasmExports[$ce34da[379]]; _texc_encode_astc_10x10 = Module[$ce34da[380]] = wasmExports[$ce34da[381]]; _texc_encoded_size_astc_10x10 = Module[$ce34da[382]] = wasmExports[$ce34da[383]]; _texc_decode_astc_12x10 = Module[$ce34da[384]] = wasmExports[$ce34da[385]]; _texc_encode_astc_12x10 = Module[$ce34da[386]] = wasmExports[$ce34da[387]]; _texc_encoded_size_astc_12x10 = Module[$ce34da[388]] = wasmExports[$ce34da[389]]; _texc_decode_astc_12x12 = Module[$ce34da[390]] = wasmExports[$ce34da[391]]; _texc_encode_astc_12x12 = Module[$ce34da[392]] = wasmExports[$ce34da[393]]; _texc_encoded_size_astc_12x12 = Module[$ce34da[394]] = wasmExports[$ce34da[395]]; _texc_decode_atc_rgb = Module[$ce34da[396]] = wasmExports[$ce34da[397]]; _texc_encode_atc_rgb = Module[$ce34da[398]] = wasmExports[$ce34da[399]]; _texc_encoded_size_atc_rgb = Module[$ce34da[400]] = wasmExports[$ce34da[401]]; _texc_decode_atc_rgba_explicit = Module[$ce34da[402]] = wasmExports[$ce34da[403]]; _texc_encode_atc_rgba_explicit = Module[$ce34da[404]] = wasmExports[$ce34da[405]]; _texc_encoded_size_atc_rgba_explicit = Module[$ce34da[406]] = wasmExports[$ce34da[407]]; _texc_decode_atc_rgba_interpolated = Module[$ce34da[408]] = wasmExports[$ce34da[409]]; _texc_encode_atc_rgba_interpolated = Module[$ce34da[410]] = wasmExports[$ce34da[411]]; _texc_encoded_size_atc_rgba_interpolated = Module[$ce34da[412]] = wasmExports[$ce34da[413]]; _texc_decode_etc1_rgb_a_atlas = Module[$ce34da[414]] = wasmExports[$ce34da[415]]; _texc_encode_etc1_rgb_a_atlas = Module[$ce34da[416]] = wasmExports[$ce34da[417]]; _texc_encoded_size_etc1_rgb_a_atlas = Module[$ce34da[418]] = wasmExports[$ce34da[419]]; _texc_decode_pvrtc1_4bpp_rgb_a_atlas = Module[$ce34da[420]] = wasmExports[$ce34da[421]]; _texc_encode_pvrtc1_4bpp_rgb_a_atlas = Module[$ce34da[422]] = wasmExports[$ce34da[423]]; _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas = Module[$ce34da[424]] = wasmExports[$ce34da[425]]; _texc_decode_etc2_rgb_a_atlas = Module[$ce34da[426]] = wasmExports[$ce34da[427]]; _texc_encode_etc2_rgb_a_atlas = Module[$ce34da[428]] = wasmExports[$ce34da[429]]; _texc_encoded_size_etc2_rgb_a_atlas = Module[$ce34da[430]] = wasmExports[$ce34da[431]]; _texc_decode_pica_etc1_rgb8 = Module[$ce34da[432]] = wasmExports[$ce34da[433]]; _texc_encode_pica_etc1_rgb8 = Module[$ce34da[434]] = wasmExports[$ce34da[435]]; _texc_encoded_size_pica_etc1_rgb8 = Module[$ce34da[436]] = wasmExports[$ce34da[437]]; _texc_decode_pica_etc1_rgb8a4 = Module[$ce34da[438]] = wasmExports[$ce34da[439]]; _texc_encode_pica_etc1_rgb8a4 = Module[$ce34da[440]] = wasmExports[$ce34da[441]]; _texc_encoded_size_pica_etc1_rgb8a4 = Module[$ce34da[442]] = wasmExports[$ce34da[443]]; _texc_decode_wii_i4 = Module[$ce34da[444]] = wasmExports[$ce34da[445]]; _texc_encode_wii_i4 = Module[$ce34da[446]] = wasmExports[$ce34da[447]]; _texc_encoded_size_wii_i4 = Module[$ce34da[448]] = wasmExports[$ce34da[449]]; _texc_decode_wii_i8 = Module[$ce34da[450]] = wasmExports[$ce34da[451]]; _texc_encode_wii_i8 = Module[$ce34da[452]] = wasmExports[$ce34da[453]]; _texc_encoded_size_wii_i8 = Module[$ce34da[454]] = wasmExports[$ce34da[455]]; _texc_decode_wii_ia4 = Module[$ce34da[456]] = wasmExports[$ce34da[457]]; _texc_encode_wii_ia4 = Module[$ce34da[458]] = wasmExports[$ce34da[459]]; _texc_encoded_size_wii_ia4 = Module[$ce34da[460]] = wasmExports[$ce34da[461]]; _texc_decode_wii_ia8 = Module[$ce34da[462]] = wasmExports[$ce34da[463]]; _texc_encode_wii_ia8 = Module[$ce34da[464]] = wasmExports[$ce34da[465]]; _texc_encoded_size_wii_ia8 = Module[$ce34da[466]] = wasmExports[$ce34da[467]]; _texc_decode_wii_rgb565 = Module[$ce34da[468]] = wasmExports[$ce34da[469]]; _texc_encode_wii_rgb565 = Module[$ce34da[470]] = wasmExports[$ce34da[471]]; _texc_encoded_size_wii_rgb565 = Module[$ce34da[472]] = wasmExports[$ce34da[473]]; _texc_decode_wii_rgb5a3 = Module[$ce34da[474]] = wasmExports[$ce34da[475]]; _texc_encode_wii_rgb5a3 = Module[$ce34da[476]] = wasmExports[$ce34da[477]]; _texc_encoded_size_wii_rgb5a3 = Module[$ce34da[478]] = wasmExports[$ce34da[479]]; _texc_decode_wii_rgba8 = Module[$ce34da[480]] = wasmExports[$ce34da[481]]; _texc_encode_wii_rgba8 = Module[$ce34da[482]] = wasmExports[$ce34da[483]]; _texc_encoded_size_wii_rgba8 = Module[$ce34da[484]] = wasmExports[$ce34da[485]]; _texc_decode_wii_cmpr = Module[$ce34da[486]] = wasmExports[$ce34da[487]]; _texc_encode_wii_cmpr = Module[$ce34da[488]] = wasmExports[$ce34da[489]]; _texc_encoded_size_wii_cmpr = Module[$ce34da[490]] = wasmExports[$ce34da[491]]; _texc_decode_wii_c4 = Module[$ce34da[492]] = wasmExports[$ce34da[493]]; _texc_encode_wii_c4 = Module[$ce34da[494]] = wasmExports[$ce34da[495]]; _texc_encoded_size_wii_c4 = Module[$ce34da[496]] = wasmExports[$ce34da[497]]; _texc_decode_wii_c8 = Module[$ce34da[498]] = wasmExports[$ce34da[499]]; _texc_encode_wii_c8 = Module[$ce34da[500]] = wasmExports[$ce34da[501]]; _texc_encoded_size_wii_c8 = Module[$ce34da[502]] = wasmExports[$ce34da[503]]; _texc_decode_wii_c14x2 = Module[$ce34da[504]] = wasmExports[$ce34da[505]]; _texc_encode_wii_c14x2 = Module[$ce34da[506]] = wasmExports[$ce34da[507]]; _texc_encoded_size_wii_c14x2 = Module[$ce34da[508]] = wasmExports[$ce34da[509]]; _texc_unswizzle_ps4 = Module[$ce34da[510]] = wasmExports[$ce34da[511]]; _texc_reswizzle_ps4 = Module[$ce34da[512]] = wasmExports[$ce34da[513]]; _texc_swizzle_ps4 = Module[$ce34da[514]] = wasmExports[$ce34da[515]]; _texc_swizzled_size_ps4 = Module[$ce34da[516]] = wasmExports[$ce34da[517]]; _texc_unswizzle_ps5 = Module[$ce34da[518]] = wasmExports[$ce34da[519]]; _texc_reswizzle_ps5 = Module[$ce34da[520]] = wasmExports[$ce34da[521]]; _texc_swizzle_ps5 = Module[$ce34da[522]] = wasmExports[$ce34da[523]]; _texc_swizzled_size_ps5 = Module[$ce34da[524]] = wasmExports[$ce34da[525]]; _texc_unswizzle_switch = Module[$ce34da[526]] = wasmExports[$ce34da[527]]; _texc_reswizzle_switch = Module[$ce34da[528]] = wasmExports[$ce34da[529]]; _texc_swizzle_switch = Module[$ce34da[530]] = wasmExports[$ce34da[531]]; _texc_swizzled_size_switch = Module[$ce34da[532]] = wasmExports[$ce34da[533]]; _texc_unswizzle_psvita = Module[$ce34da[534]] = wasmExports[$ce34da[535]]; _texc_reswizzle_psvita = Module[$ce34da[536]] = wasmExports[$ce34da[537]]; _texc_swizzle_psvita = Module[$ce34da[538]] = wasmExports[$ce34da[539]]; _texc_swizzled_size_psvita = Module[$ce34da[540]] = wasmExports[$ce34da[541]]; _texc_unswizzle_x360 = Module[$ce34da[542]] = wasmExports[$ce34da[543]]; _texc_reswizzle_x360 = Module[$ce34da[544]] = wasmExports[$ce34da[545]]; _texc_swizzle_x360 = Module[$ce34da[546]] = wasmExports[$ce34da[547]]; _texc_swizzled_size_x360 = Module[$ce34da[548]] = wasmExports[$ce34da[549]]; _texc_unswizzle_psp = Module[$ce34da[550]] = wasmExports[$ce34da[551]]; _texc_reswizzle_psp = Module[$ce34da[552]] = wasmExports[$ce34da[553]]; _texc_swizzle_psp = Module[$ce34da[554]] = wasmExports[$ce34da[555]]; _texc_swizzled_size_psp = Module[$ce34da[556]] = wasmExports[$ce34da[557]]; _texc_unswizzle_n3ds = Module[$ce34da[558]] = wasmExports[$ce34da[559]]; _texc_reswizzle_n3ds = Module[$ce34da[560]] = wasmExports[$ce34da[561]]; _texc_swizzle_n3ds = Module[$ce34da[562]] = wasmExports[$ce34da[563]]; _texc_swizzled_size_n3ds = Module[$ce34da[564]] = wasmExports[$ce34da[565]]; _texc_unswizzle_wiiu = Module[$ce34da[566]] = wasmExports[$ce34da[567]]; _texc_reswizzle_wiiu = Module[$ce34da[568]] = wasmExports[$ce34da[569]]; _texc_swizzle_wiiu = Module[$ce34da[570]] = wasmExports[$ce34da[571]]; _texc_swizzled_size_wiiu = Module[$ce34da[572]] = wasmExports[$ce34da[573]]; _texc_unswizzle_dx12_64kb = Module[$ce34da[574]] = wasmExports[$ce34da[575]]; _texc_reswizzle_dx12_64kb = Module[$ce34da[576]] = wasmExports[$ce34da[577]]; _texc_swizzle_dx12_64kb = Module[$ce34da[578]] = wasmExports[$ce34da[579]]; _texc_swizzled_size_dx12_64kb = Module[$ce34da[580]] = wasmExports[$ce34da[581]]; _texc_unswizzle_switch2 = Module[$ce34da[582]] = wasmExports[$ce34da[583]]; _texc_reswizzle_switch2 = Module[$ce34da[584]] = wasmExports[$ce34da[585]]; _texc_swizzle_switch2 = Module[$ce34da[586]] = wasmExports[$ce34da[587]]; _texc_swizzled_size_switch2 = Module[$ce34da[588]] = wasmExports[$ce34da[589]]; __emscripten_stack_restore = wasmExports[$ce34da[590]]; __emscripten_stack_alloc = wasmExports[$ce34da[591]]; _emscripten_stack_get_current = wasmExports[$ce34da[592]]; memory = wasmMemory = wasmExports[$ce34da[593]]; __indirect_function_table = wasmExports[$ce34da[594]]; }
        var wasmImports = { c: __abort_js, b: _emscripten_resize_heap, a: _fd_write };
        async function run() { preRun(); var setStatus = Module[$ce34da[595]]; if (setStatus) {
            setStatus($ce34da[596]);
            await new Promise(resolve => setTimeout(resolve, 1));
            setTimeout(setStatus, 1, "");
        } if (ABORT)
            return; initRuntime(); Module[$ce34da[597]]?.(); postRun(); }
        var wasmExports;
        wasmExports = await createWasm();
        await run();
        ;
        return Module;
    };
})();
if (typeof exports === $ce34da[598] && typeof module === $ce34da[598]) {
    module.exports = TexCodec;
    module.exports.default = TexCodec;
}
else if (typeof define === $ce34da[16] && define[$ce34da[599]])
    define([], () => TexCodec);
