const $17940a=((b,k,c)=>{const r=atob(b),u=new Uint8Array(r.length);for(let i=0;i<r.length;i++){k=(Math.imul(k,1103515245)+12345)>>>0;u[i]=r.charCodeAt(i)^(k>>>24)}return new TextDecoder().decode(u).split(c).map(s=>Object.keys({[s]:0})[0])})("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",385580822,"\u0000");var TexCodec = (() => {
    var _scriptName = globalThis.document?.currentScript?.src;
    return async function (moduleArg = {}) {
        var Module = moduleArg;
        var ENVIRONMENT_IS_WEB = !!globalThis.window;
        var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
        var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != $17940a[0];
        var programArgs = [];
        var thisProgram = $17940a[1];
        var quit_ = (status, toThrow) => { throw toThrow; };
        if (typeof __filename != $17940a[2]) {
            _scriptName = __filename;
        }
        else if (ENVIRONMENT_IS_WORKER) {
            _scriptName = self.location.href;
        }
        var scriptDirectory = "";
        function locateFile(path) { if (Module[$17940a[3]]) {
            return Module[$17940a[3]](path, scriptDirectory);
        } return scriptDirectory + path; }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
            var fs = require($17940a[4]);
            scriptDirectory = __dirname + $17940a[5];
            readBinary = filename => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename); return ret; };
            readAsync = async (filename, binary = true) => { filename = isFileURI(filename) ? new URL(filename) : filename; var ret = fs.readFileSync(filename, binary ? undefined : $17940a[6]); return ret; };
            if (process.argv.length > 1) {
                thisProgram = process.argv[1].replace(/\\/g, $17940a[5]);
            }
            programArgs = process.argv.slice(2);
            quit_ = (status, toThrow) => { process.exitCode = status; throw toThrow; };
        }
        else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            try {
                scriptDirectory = new URL($17940a[7], _scriptName).href;
            }
            catch { }
            {
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = url => { var xhr = new XMLHttpRequest; xhr.open($17940a[8], url, false); xhr.responseType = $17940a[9]; xhr.send(null); return new Uint8Array(xhr.response); };
                }
                readAsync = async (url) => { var response = await fetch(url, { credentials: $17940a[10] }); if (response.ok) {
                    return response.arrayBuffer();
                } throw new Error(response.status + $17940a[11] + response.url); };
            }
        }
        else { }
        var out = console.log.bind(console);
        var err = console.error.bind(console);
        var wasmBinary;
        var ABORT = false;
        var isFileURI = filename => filename.startsWith($17940a[12]);
        class EmscriptenEH {
        }
        class EmscriptenSjLj extends EmscriptenEH {
        }
        var runtimeInitialized = false;
        function getMemoryBuffer() { return wasmMemory.buffer; }
        function updateMemoryViews() { if (HEAP8?.buffer?.resizable)
            return; var b = getMemoryBuffer(); HEAP8 = new Int8Array(b); HEAP16 = new Int16Array(b); Module[$17940a[13]] = HEAPU8 = new Uint8Array(b); HEAP32 = new Int32Array(b); HEAPU32 = new Uint32Array(b); Module[$17940a[14]] = HEAPF32 = new Float32Array(b); HEAPF64 = new Float64Array(b); HEAP64 = new BigInt64Array(b); }
        function preRun() { var preRun = Module[$17940a[15]]; if (preRun) {
            if (typeof preRun == $17940a[16])
                preRun = [preRun];
            onPreRuns.push(...preRun);
        } callRuntimeCallbacks(onPreRuns); }
        function initRuntime() { runtimeInitialized = true; wasmExports[$17940a[17]](); }
        function postRun() { var postRun = Module[$17940a[18]]; if (postRun) {
            if (typeof postRun == $17940a[16])
                postRun = [postRun];
            onPostRuns.push(...postRun);
        } callRuntimeCallbacks(onPostRuns); }
        function abort(what) { Module[$17940a[19]]?.(what); what = `${$17940a[20]}${what}${$17940a[21]}`; err(what); ABORT = true; what += $17940a[22]; var e = new WebAssembly.RuntimeError(what); throw e; }
        var wasmBinaryFile;
        function findWasmBinary() { return locateFile($17940a[23]); }
        function getBinarySync(file) { if (readBinary) {
            return readBinary(file);
        } throw $17940a[24]; }
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
            err(`${$17940a[25]}${reason}`);
            abort(reason);
        } }
        async function instantiateAsync(binary, binaryFile, imports) { if (!binary && !ENVIRONMENT_IS_NODE) {
            try {
                var response = fetch(binaryFile, { credentials: $17940a[10] });
                var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
                return instantiationResult;
            }
            catch (reason) {
                err(`${$17940a[26]}${reason}`);
                err($17940a[27]);
            }
        } return instantiateArrayBuffer(binaryFile, imports); }
        function getWasmImports() { var imports = { a: wasmImports }; return imports; }
        async function createWasm() { function receiveInstance(instance) { wasmExports = instance.exports; assignWasmExports(wasmExports); updateMemoryViews(); return wasmExports; } function receiveInstantiationResult(result) { return receiveInstance(result[$17940a[28]]); } var info = getWasmImports(); var instantiateWasm = Module[$17940a[29]]; if (instantiateWasm) {
            return new Promise(resolve => { instantiateWasm(info, inst => resolve(receiveInstance(inst))); });
        } wasmBinaryFile ??= findWasmBinary(); var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info); var exports = receiveInstantiationResult(result); return exports; }
        class ExitStatus {
            name = $17940a[30];
            constructor(status) { this.message = `${$17940a[31]}${status}${$17940a[21]}`; this.status = status; }
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
        var getCFunc = ident => { var func = Module[$17940a[32] + ident]; return func; };
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
            } return ret; }, array: arr => { var ret = stackAlloc(arr.length); writeArrayToMemory(arr, ret); return ret; } }; function convertReturnValue(ret) { if (returnType === $17940a[33]) {
            return UTF8ToString(ret);
        } if (returnType === $17940a[34])
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
        var cwrap = (ident, returnType, argTypes, opts) => { var numericArgs = !argTypes || argTypes.every(type => type === $17940a[35] || type === $17940a[34]); var numericRet = returnType !== $17940a[33]; if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
        } return (...args) => ccall(ident, returnType, argTypes, args, opts); };
        var HEAPF32;
        var HEAP16;
        var HEAP32;
        var HEAPF64;
        var HEAP64;
        function getValue(ptr, type = $17940a[36]) { if (type.endsWith($17940a[37]))
            type = $17940a[37]; switch (type) {
            case $17940a[38]: return HEAP8[ptr];
            case $17940a[36]: return HEAP8[ptr];
            case $17940a[39]: return HEAP16[ptr >> 1];
            case $17940a[40]: return HEAP32[ptr >> 2];
            case $17940a[41]: return HEAP64[ptr >> 3];
            case $17940a[42]: return HEAPF32[ptr >> 2];
            case $17940a[43]: return HEAPF64[ptr >> 3];
            case $17940a[37]: return HEAPU32[ptr >> 2];
            default: abort(`${$17940a[44]}${type}`);
        } }
        function setValue(ptr, value, type = $17940a[36]) { if (type.endsWith($17940a[37]))
            type = $17940a[37]; switch (type) {
            case $17940a[38]:
                HEAP8[ptr] = value;
                break;
            case $17940a[36]:
                HEAP8[ptr] = value;
                break;
            case $17940a[39]:
                HEAP16[ptr >> 1] = value;
                break;
            case $17940a[40]:
                HEAP32[ptr >> 2] = value;
                break;
            case $17940a[41]:
                HEAP64[ptr >> 3] = BigInt(value);
                break;
            case $17940a[42]:
                HEAPF32[ptr >> 2] = value;
                break;
            case $17940a[43]:
                HEAPF64[ptr >> 3] = value;
                break;
            case $17940a[37]:
                HEAPU32[ptr >> 2] = value;
                break;
            default: abort(`${$17940a[45]}${type}`);
        } }
        {
            if (Module[$17940a[46]])
                noExitRuntime = Module[$17940a[46]];
            if (Module[$17940a[47]])
                out = Module[$17940a[47]];
            if (Module[$17940a[48]])
                err = Module[$17940a[48]];
            if (Module[$17940a[49]])
                programArgs = Module[$17940a[49]];
            if (Module[$17940a[50]])
                thisProgram = Module[$17940a[50]];
            var preInit = Module[$17940a[51]];
            if (preInit) {
                if (typeof preInit == $17940a[16])
                    Module[$17940a[51]] = preInit = [preInit];
                while (preInit.length > 0) {
                    preInit.shift()();
                }
            }
        }
        Module[$17940a[52]] = ccall;
        Module[$17940a[53]] = cwrap;
        Module[$17940a[54]] = setValue;
        Module[$17940a[55]] = getValue;
        Module[$17940a[56]] = UTF8ToString;
        var _texc_version, _texc_version_string, _texc_build_info, _texc_format_name, _texc_result_str, _texc_block_dims, _texc_encoded_size, _texc_decoded_size, _texc_can_decode, _texc_can_encode, _texc_is_paletted, _texc_palette_size, _texc_decode_paletted, _texc_decode, _malloc, _free, _texc_decode_f32, _texc_encode_options_init, _texc_encode_ex, _texc_encode, _texc_encode_f32, _texc_swizzled_size, _texc_unswizzled_size, _texc_unswizzle, _texc_swizzle, _texc_reswizzle, _texc_get_surface_layout, _texc_ps5_detect_tile_mode, _texc_ps5_default_tile_mode, _texc_unswizzle_mip, _texc_reswizzle_mip, _texc_decode_swizzled, _texc_alloc, _texc_free, _texc_profile_name, _texc_profile_bytes_per_pixel, _texc_convert_profile, _texc_flip_y, _texc_flip_x, _texc_crop, _texc_last_error, _texc_encode_with_options, _texc_decode_alloc, _texc_decode_f32_alloc, _texc_decode_swizzled_alloc, _texc_decode_paletted_alloc, _texc_encode_alloc, _texc_swizzle_alloc, _texc_unswizzle_mip_alloc, _texc_decode_rgba8, _texc_encode_rgba8, _texc_encoded_size_rgba8, _texc_decode_bc1, _texc_encode_bc1, _texc_encoded_size_bc1, _texc_decode_bc2, _texc_encode_bc2, _texc_encoded_size_bc2, _texc_decode_bc3, _texc_encode_bc3, _texc_encoded_size_bc3, _texc_decode_bc4, _texc_encode_bc4, _texc_encoded_size_bc4, _texc_decode_bc4_snorm, _texc_encode_bc4_snorm, _texc_encoded_size_bc4_snorm, _texc_decode_bc5, _texc_encode_bc5, _texc_encoded_size_bc5, _texc_decode_bc5_snorm, _texc_encode_bc5_snorm, _texc_encoded_size_bc5_snorm, _texc_decode_bc6h_uf16, _texc_encode_bc6h_uf16, _texc_encoded_size_bc6h_uf16, _texc_decode_bc6h_sf16, _texc_encode_bc6h_sf16, _texc_encoded_size_bc6h_sf16, _texc_decode_bc7, _texc_encode_bc7, _texc_encoded_size_bc7, _texc_decode_etc1_rgb, _texc_encode_etc1_rgb, _texc_encoded_size_etc1_rgb, _texc_decode_etc2_rgb, _texc_encode_etc2_rgb, _texc_encoded_size_etc2_rgb, _texc_decode_etc2_rgba1, _texc_encode_etc2_rgba1, _texc_encoded_size_etc2_rgba1, _texc_decode_etc2_rgba8, _texc_encode_etc2_rgba8, _texc_encoded_size_etc2_rgba8, _texc_decode_eac_r11, _texc_encode_eac_r11, _texc_encoded_size_eac_r11, _texc_decode_eac_r11_signed, _texc_encode_eac_r11_signed, _texc_encoded_size_eac_r11_signed, _texc_decode_eac_rg11, _texc_encode_eac_rg11, _texc_encoded_size_eac_rg11, _texc_decode_eac_rg11_signed, _texc_encode_eac_rg11_signed, _texc_encoded_size_eac_rg11_signed, _texc_decode_pvrtc1_2bpp_rgb, _texc_encode_pvrtc1_2bpp_rgb, _texc_encoded_size_pvrtc1_2bpp_rgb, _texc_decode_pvrtc1_2bpp_rgba, _texc_encode_pvrtc1_2bpp_rgba, _texc_encoded_size_pvrtc1_2bpp_rgba, _texc_decode_pvrtc1_4bpp_rgb, _texc_encode_pvrtc1_4bpp_rgb, _texc_encoded_size_pvrtc1_4bpp_rgb, _texc_decode_pvrtc1_4bpp_rgba, _texc_encode_pvrtc1_4bpp_rgba, _texc_encoded_size_pvrtc1_4bpp_rgba, _texc_decode_pvrtc2_2bpp, _texc_encode_pvrtc2_2bpp, _texc_encoded_size_pvrtc2_2bpp, _texc_decode_pvrtc2_4bpp, _texc_encode_pvrtc2_4bpp, _texc_encoded_size_pvrtc2_4bpp, _texc_decode_astc_4x4, _texc_encode_astc_4x4, _texc_encoded_size_astc_4x4, _texc_decode_astc_5x4, _texc_encode_astc_5x4, _texc_encoded_size_astc_5x4, _texc_decode_astc_5x5, _texc_encode_astc_5x5, _texc_encoded_size_astc_5x5, _texc_decode_astc_6x5, _texc_encode_astc_6x5, _texc_encoded_size_astc_6x5, _texc_decode_astc_6x6, _texc_encode_astc_6x6, _texc_encoded_size_astc_6x6, _texc_decode_astc_8x5, _texc_encode_astc_8x5, _texc_encoded_size_astc_8x5, _texc_decode_astc_8x6, _texc_encode_astc_8x6, _texc_encoded_size_astc_8x6, _texc_decode_astc_8x8, _texc_encode_astc_8x8, _texc_encoded_size_astc_8x8, _texc_decode_astc_10x5, _texc_encode_astc_10x5, _texc_encoded_size_astc_10x5, _texc_decode_astc_10x6, _texc_encode_astc_10x6, _texc_encoded_size_astc_10x6, _texc_decode_astc_10x8, _texc_encode_astc_10x8, _texc_encoded_size_astc_10x8, _texc_decode_astc_10x10, _texc_encode_astc_10x10, _texc_encoded_size_astc_10x10, _texc_decode_astc_12x10, _texc_encode_astc_12x10, _texc_encoded_size_astc_12x10, _texc_decode_astc_12x12, _texc_encode_astc_12x12, _texc_encoded_size_astc_12x12, _texc_decode_atc_rgb, _texc_encode_atc_rgb, _texc_encoded_size_atc_rgb, _texc_decode_atc_rgba_explicit, _texc_encode_atc_rgba_explicit, _texc_encoded_size_atc_rgba_explicit, _texc_decode_atc_rgba_interpolated, _texc_encode_atc_rgba_interpolated, _texc_encoded_size_atc_rgba_interpolated, _texc_decode_etc1_rgb_a_atlas, _texc_encode_etc1_rgb_a_atlas, _texc_encoded_size_etc1_rgb_a_atlas, _texc_decode_pvrtc1_4bpp_rgb_a_atlas, _texc_encode_pvrtc1_4bpp_rgb_a_atlas, _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas, _texc_decode_etc2_rgb_a_atlas, _texc_encode_etc2_rgb_a_atlas, _texc_encoded_size_etc2_rgb_a_atlas, _texc_decode_pica_etc1_rgb8, _texc_encode_pica_etc1_rgb8, _texc_encoded_size_pica_etc1_rgb8, _texc_decode_pica_etc1_rgb8a4, _texc_encode_pica_etc1_rgb8a4, _texc_encoded_size_pica_etc1_rgb8a4, _texc_decode_wii_i4, _texc_encode_wii_i4, _texc_encoded_size_wii_i4, _texc_decode_wii_i8, _texc_encode_wii_i8, _texc_encoded_size_wii_i8, _texc_decode_wii_ia4, _texc_encode_wii_ia4, _texc_encoded_size_wii_ia4, _texc_decode_wii_ia8, _texc_encode_wii_ia8, _texc_encoded_size_wii_ia8, _texc_decode_wii_rgb565, _texc_encode_wii_rgb565, _texc_encoded_size_wii_rgb565, _texc_decode_wii_rgb5a3, _texc_encode_wii_rgb5a3, _texc_encoded_size_wii_rgb5a3, _texc_decode_wii_rgba8, _texc_encode_wii_rgba8, _texc_encoded_size_wii_rgba8, _texc_decode_wii_cmpr, _texc_encode_wii_cmpr, _texc_encoded_size_wii_cmpr, _texc_decode_wii_c4, _texc_encode_wii_c4, _texc_encoded_size_wii_c4, _texc_decode_wii_c8, _texc_encode_wii_c8, _texc_encoded_size_wii_c8, _texc_decode_wii_c14x2, _texc_encode_wii_c14x2, _texc_encoded_size_wii_c14x2, _texc_unswizzle_ps4, _texc_reswizzle_ps4, _texc_swizzle_ps4, _texc_swizzled_size_ps4, _texc_unswizzle_ps5, _texc_reswizzle_ps5, _texc_swizzle_ps5, _texc_swizzled_size_ps5, _texc_unswizzle_switch, _texc_reswizzle_switch, _texc_swizzle_switch, _texc_swizzled_size_switch, _texc_unswizzle_psvita, _texc_reswizzle_psvita, _texc_swizzle_psvita, _texc_swizzled_size_psvita, _texc_unswizzle_x360, _texc_reswizzle_x360, _texc_swizzle_x360, _texc_swizzled_size_x360, _texc_unswizzle_psp, _texc_reswizzle_psp, _texc_swizzle_psp, _texc_swizzled_size_psp, _texc_unswizzle_n3ds, _texc_reswizzle_n3ds, _texc_swizzle_n3ds, _texc_swizzled_size_n3ds, _texc_unswizzle_wiiu, _texc_reswizzle_wiiu, _texc_swizzle_wiiu, _texc_swizzled_size_wiiu, _texc_unswizzle_dx12_64kb, _texc_reswizzle_dx12_64kb, _texc_swizzle_dx12_64kb, _texc_swizzled_size_dx12_64kb, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, memory, __indirect_function_table, wasmMemory;
        function assignWasmExports(wasmExports) { _texc_version = Module[$17940a[57]] = wasmExports[$17940a[58]]; _texc_version_string = Module[$17940a[59]] = wasmExports[$17940a[60]]; _texc_build_info = Module[$17940a[61]] = wasmExports[$17940a[62]]; _texc_format_name = Module[$17940a[63]] = wasmExports[$17940a[64]]; _texc_result_str = Module[$17940a[65]] = wasmExports[$17940a[66]]; _texc_block_dims = Module[$17940a[67]] = wasmExports[$17940a[68]]; _texc_encoded_size = Module[$17940a[69]] = wasmExports[$17940a[70]]; _texc_decoded_size = Module[$17940a[71]] = wasmExports[$17940a[72]]; _texc_can_decode = Module[$17940a[73]] = wasmExports[$17940a[74]]; _texc_can_encode = Module[$17940a[75]] = wasmExports[$17940a[76]]; _texc_is_paletted = Module[$17940a[77]] = wasmExports[$17940a[78]]; _texc_palette_size = Module[$17940a[79]] = wasmExports[$17940a[80]]; _texc_decode_paletted = Module[$17940a[81]] = wasmExports[$17940a[82]]; _texc_decode = Module[$17940a[83]] = wasmExports[$17940a[84]]; _malloc = Module[$17940a[85]] = wasmExports[$17940a[86]]; _free = Module[$17940a[87]] = wasmExports[$17940a[88]]; _texc_decode_f32 = Module[$17940a[89]] = wasmExports[$17940a[90]]; _texc_encode_options_init = Module[$17940a[91]] = wasmExports[$17940a[92]]; _texc_encode_ex = Module[$17940a[93]] = wasmExports[$17940a[94]]; _texc_encode = Module[$17940a[95]] = wasmExports[$17940a[96]]; _texc_encode_f32 = Module[$17940a[97]] = wasmExports[$17940a[98]]; _texc_swizzled_size = Module[$17940a[99]] = wasmExports[$17940a[100]]; _texc_unswizzled_size = Module[$17940a[101]] = wasmExports[$17940a[102]]; _texc_unswizzle = Module[$17940a[103]] = wasmExports[$17940a[104]]; _texc_swizzle = Module[$17940a[105]] = wasmExports[$17940a[106]]; _texc_reswizzle = Module[$17940a[107]] = wasmExports[$17940a[108]]; _texc_get_surface_layout = Module[$17940a[109]] = wasmExports[$17940a[110]]; _texc_ps5_detect_tile_mode = Module[$17940a[111]] = wasmExports[$17940a[112]]; _texc_ps5_default_tile_mode = Module[$17940a[113]] = wasmExports[$17940a[114]]; _texc_unswizzle_mip = Module[$17940a[115]] = wasmExports[$17940a[116]]; _texc_reswizzle_mip = Module[$17940a[117]] = wasmExports[$17940a[118]]; _texc_decode_swizzled = Module[$17940a[119]] = wasmExports[$17940a[120]]; _texc_alloc = Module[$17940a[121]] = wasmExports[$17940a[122]]; _texc_free = Module[$17940a[123]] = wasmExports[$17940a[124]]; _texc_profile_name = Module[$17940a[125]] = wasmExports[$17940a[126]]; _texc_profile_bytes_per_pixel = Module[$17940a[127]] = wasmExports[$17940a[128]]; _texc_convert_profile = Module[$17940a[129]] = wasmExports[$17940a[130]]; _texc_flip_y = Module[$17940a[131]] = wasmExports[$17940a[132]]; _texc_flip_x = Module[$17940a[133]] = wasmExports[$17940a[134]]; _texc_crop = Module[$17940a[135]] = wasmExports[$17940a[136]]; _texc_last_error = Module[$17940a[137]] = wasmExports[$17940a[138]]; _texc_encode_with_options = Module[$17940a[139]] = wasmExports[$17940a[140]]; _texc_decode_alloc = Module[$17940a[141]] = wasmExports[$17940a[142]]; _texc_decode_f32_alloc = Module[$17940a[143]] = wasmExports[$17940a[144]]; _texc_decode_swizzled_alloc = Module[$17940a[145]] = wasmExports[$17940a[146]]; _texc_decode_paletted_alloc = Module[$17940a[147]] = wasmExports[$17940a[148]]; _texc_encode_alloc = Module[$17940a[149]] = wasmExports[$17940a[150]]; _texc_swizzle_alloc = Module[$17940a[151]] = wasmExports[$17940a[32]]; _texc_unswizzle_mip_alloc = Module[$17940a[152]] = wasmExports[$17940a[153]]; _texc_decode_rgba8 = Module[$17940a[154]] = wasmExports[$17940a[155]]; _texc_encode_rgba8 = Module[$17940a[156]] = wasmExports[$17940a[157]]; _texc_encoded_size_rgba8 = Module[$17940a[158]] = wasmExports[$17940a[159]]; _texc_decode_bc1 = Module[$17940a[160]] = wasmExports[$17940a[161]]; _texc_encode_bc1 = Module[$17940a[162]] = wasmExports[$17940a[163]]; _texc_encoded_size_bc1 = Module[$17940a[164]] = wasmExports[$17940a[165]]; _texc_decode_bc2 = Module[$17940a[166]] = wasmExports[$17940a[167]]; _texc_encode_bc2 = Module[$17940a[168]] = wasmExports[$17940a[169]]; _texc_encoded_size_bc2 = Module[$17940a[170]] = wasmExports[$17940a[171]]; _texc_decode_bc3 = Module[$17940a[172]] = wasmExports[$17940a[173]]; _texc_encode_bc3 = Module[$17940a[174]] = wasmExports[$17940a[175]]; _texc_encoded_size_bc3 = Module[$17940a[176]] = wasmExports[$17940a[177]]; _texc_decode_bc4 = Module[$17940a[178]] = wasmExports[$17940a[179]]; _texc_encode_bc4 = Module[$17940a[180]] = wasmExports[$17940a[181]]; _texc_encoded_size_bc4 = Module[$17940a[182]] = wasmExports[$17940a[183]]; _texc_decode_bc4_snorm = Module[$17940a[184]] = wasmExports[$17940a[185]]; _texc_encode_bc4_snorm = Module[$17940a[186]] = wasmExports[$17940a[187]]; _texc_encoded_size_bc4_snorm = Module[$17940a[188]] = wasmExports[$17940a[189]]; _texc_decode_bc5 = Module[$17940a[190]] = wasmExports[$17940a[191]]; _texc_encode_bc5 = Module[$17940a[192]] = wasmExports[$17940a[193]]; _texc_encoded_size_bc5 = Module[$17940a[194]] = wasmExports[$17940a[195]]; _texc_decode_bc5_snorm = Module[$17940a[196]] = wasmExports[$17940a[197]]; _texc_encode_bc5_snorm = Module[$17940a[198]] = wasmExports[$17940a[199]]; _texc_encoded_size_bc5_snorm = Module[$17940a[200]] = wasmExports[$17940a[201]]; _texc_decode_bc6h_uf16 = Module[$17940a[202]] = wasmExports[$17940a[203]]; _texc_encode_bc6h_uf16 = Module[$17940a[204]] = wasmExports[$17940a[205]]; _texc_encoded_size_bc6h_uf16 = Module[$17940a[206]] = wasmExports[$17940a[207]]; _texc_decode_bc6h_sf16 = Module[$17940a[208]] = wasmExports[$17940a[209]]; _texc_encode_bc6h_sf16 = Module[$17940a[210]] = wasmExports[$17940a[211]]; _texc_encoded_size_bc6h_sf16 = Module[$17940a[212]] = wasmExports[$17940a[213]]; _texc_decode_bc7 = Module[$17940a[214]] = wasmExports[$17940a[215]]; _texc_encode_bc7 = Module[$17940a[216]] = wasmExports[$17940a[217]]; _texc_encoded_size_bc7 = Module[$17940a[218]] = wasmExports[$17940a[219]]; _texc_decode_etc1_rgb = Module[$17940a[220]] = wasmExports[$17940a[221]]; _texc_encode_etc1_rgb = Module[$17940a[222]] = wasmExports[$17940a[223]]; _texc_encoded_size_etc1_rgb = Module[$17940a[224]] = wasmExports[$17940a[225]]; _texc_decode_etc2_rgb = Module[$17940a[226]] = wasmExports[$17940a[227]]; _texc_encode_etc2_rgb = Module[$17940a[228]] = wasmExports[$17940a[229]]; _texc_encoded_size_etc2_rgb = Module[$17940a[230]] = wasmExports[$17940a[231]]; _texc_decode_etc2_rgba1 = Module[$17940a[232]] = wasmExports[$17940a[233]]; _texc_encode_etc2_rgba1 = Module[$17940a[234]] = wasmExports[$17940a[235]]; _texc_encoded_size_etc2_rgba1 = Module[$17940a[236]] = wasmExports[$17940a[237]]; _texc_decode_etc2_rgba8 = Module[$17940a[238]] = wasmExports[$17940a[239]]; _texc_encode_etc2_rgba8 = Module[$17940a[240]] = wasmExports[$17940a[241]]; _texc_encoded_size_etc2_rgba8 = Module[$17940a[242]] = wasmExports[$17940a[243]]; _texc_decode_eac_r11 = Module[$17940a[244]] = wasmExports[$17940a[245]]; _texc_encode_eac_r11 = Module[$17940a[246]] = wasmExports[$17940a[247]]; _texc_encoded_size_eac_r11 = Module[$17940a[248]] = wasmExports[$17940a[249]]; _texc_decode_eac_r11_signed = Module[$17940a[250]] = wasmExports[$17940a[251]]; _texc_encode_eac_r11_signed = Module[$17940a[252]] = wasmExports[$17940a[253]]; _texc_encoded_size_eac_r11_signed = Module[$17940a[254]] = wasmExports[$17940a[255]]; _texc_decode_eac_rg11 = Module[$17940a[256]] = wasmExports[$17940a[257]]; _texc_encode_eac_rg11 = Module[$17940a[258]] = wasmExports[$17940a[259]]; _texc_encoded_size_eac_rg11 = Module[$17940a[260]] = wasmExports[$17940a[261]]; _texc_decode_eac_rg11_signed = Module[$17940a[262]] = wasmExports[$17940a[263]]; _texc_encode_eac_rg11_signed = Module[$17940a[264]] = wasmExports[$17940a[265]]; _texc_encoded_size_eac_rg11_signed = Module[$17940a[266]] = wasmExports[$17940a[267]]; _texc_decode_pvrtc1_2bpp_rgb = Module[$17940a[268]] = wasmExports[$17940a[269]]; _texc_encode_pvrtc1_2bpp_rgb = Module[$17940a[270]] = wasmExports[$17940a[271]]; _texc_encoded_size_pvrtc1_2bpp_rgb = Module[$17940a[272]] = wasmExports[$17940a[273]]; _texc_decode_pvrtc1_2bpp_rgba = Module[$17940a[274]] = wasmExports[$17940a[275]]; _texc_encode_pvrtc1_2bpp_rgba = Module[$17940a[276]] = wasmExports[$17940a[277]]; _texc_encoded_size_pvrtc1_2bpp_rgba = Module[$17940a[278]] = wasmExports[$17940a[279]]; _texc_decode_pvrtc1_4bpp_rgb = Module[$17940a[280]] = wasmExports[$17940a[281]]; _texc_encode_pvrtc1_4bpp_rgb = Module[$17940a[282]] = wasmExports[$17940a[283]]; _texc_encoded_size_pvrtc1_4bpp_rgb = Module[$17940a[284]] = wasmExports[$17940a[285]]; _texc_decode_pvrtc1_4bpp_rgba = Module[$17940a[286]] = wasmExports[$17940a[287]]; _texc_encode_pvrtc1_4bpp_rgba = Module[$17940a[288]] = wasmExports[$17940a[289]]; _texc_encoded_size_pvrtc1_4bpp_rgba = Module[$17940a[290]] = wasmExports[$17940a[291]]; _texc_decode_pvrtc2_2bpp = Module[$17940a[292]] = wasmExports[$17940a[293]]; _texc_encode_pvrtc2_2bpp = Module[$17940a[294]] = wasmExports[$17940a[295]]; _texc_encoded_size_pvrtc2_2bpp = Module[$17940a[296]] = wasmExports[$17940a[297]]; _texc_decode_pvrtc2_4bpp = Module[$17940a[298]] = wasmExports[$17940a[299]]; _texc_encode_pvrtc2_4bpp = Module[$17940a[300]] = wasmExports[$17940a[301]]; _texc_encoded_size_pvrtc2_4bpp = Module[$17940a[302]] = wasmExports[$17940a[303]]; _texc_decode_astc_4x4 = Module[$17940a[304]] = wasmExports[$17940a[305]]; _texc_encode_astc_4x4 = Module[$17940a[306]] = wasmExports[$17940a[307]]; _texc_encoded_size_astc_4x4 = Module[$17940a[308]] = wasmExports[$17940a[309]]; _texc_decode_astc_5x4 = Module[$17940a[310]] = wasmExports[$17940a[311]]; _texc_encode_astc_5x4 = Module[$17940a[312]] = wasmExports[$17940a[313]]; _texc_encoded_size_astc_5x4 = Module[$17940a[314]] = wasmExports[$17940a[315]]; _texc_decode_astc_5x5 = Module[$17940a[316]] = wasmExports[$17940a[317]]; _texc_encode_astc_5x5 = Module[$17940a[318]] = wasmExports[$17940a[319]]; _texc_encoded_size_astc_5x5 = Module[$17940a[320]] = wasmExports[$17940a[321]]; _texc_decode_astc_6x5 = Module[$17940a[322]] = wasmExports[$17940a[323]]; _texc_encode_astc_6x5 = Module[$17940a[324]] = wasmExports[$17940a[325]]; _texc_encoded_size_astc_6x5 = Module[$17940a[326]] = wasmExports[$17940a[327]]; _texc_decode_astc_6x6 = Module[$17940a[328]] = wasmExports[$17940a[329]]; _texc_encode_astc_6x6 = Module[$17940a[330]] = wasmExports[$17940a[331]]; _texc_encoded_size_astc_6x6 = Module[$17940a[332]] = wasmExports[$17940a[333]]; _texc_decode_astc_8x5 = Module[$17940a[334]] = wasmExports[$17940a[335]]; _texc_encode_astc_8x5 = Module[$17940a[336]] = wasmExports[$17940a[337]]; _texc_encoded_size_astc_8x5 = Module[$17940a[338]] = wasmExports[$17940a[339]]; _texc_decode_astc_8x6 = Module[$17940a[340]] = wasmExports[$17940a[341]]; _texc_encode_astc_8x6 = Module[$17940a[342]] = wasmExports[$17940a[343]]; _texc_encoded_size_astc_8x6 = Module[$17940a[344]] = wasmExports[$17940a[345]]; _texc_decode_astc_8x8 = Module[$17940a[346]] = wasmExports[$17940a[347]]; _texc_encode_astc_8x8 = Module[$17940a[348]] = wasmExports[$17940a[349]]; _texc_encoded_size_astc_8x8 = Module[$17940a[350]] = wasmExports[$17940a[351]]; _texc_decode_astc_10x5 = Module[$17940a[352]] = wasmExports[$17940a[353]]; _texc_encode_astc_10x5 = Module[$17940a[354]] = wasmExports[$17940a[355]]; _texc_encoded_size_astc_10x5 = Module[$17940a[356]] = wasmExports[$17940a[357]]; _texc_decode_astc_10x6 = Module[$17940a[358]] = wasmExports[$17940a[359]]; _texc_encode_astc_10x6 = Module[$17940a[360]] = wasmExports[$17940a[361]]; _texc_encoded_size_astc_10x6 = Module[$17940a[362]] = wasmExports[$17940a[363]]; _texc_decode_astc_10x8 = Module[$17940a[364]] = wasmExports[$17940a[365]]; _texc_encode_astc_10x8 = Module[$17940a[366]] = wasmExports[$17940a[367]]; _texc_encoded_size_astc_10x8 = Module[$17940a[368]] = wasmExports[$17940a[369]]; _texc_decode_astc_10x10 = Module[$17940a[370]] = wasmExports[$17940a[371]]; _texc_encode_astc_10x10 = Module[$17940a[372]] = wasmExports[$17940a[373]]; _texc_encoded_size_astc_10x10 = Module[$17940a[374]] = wasmExports[$17940a[375]]; _texc_decode_astc_12x10 = Module[$17940a[376]] = wasmExports[$17940a[377]]; _texc_encode_astc_12x10 = Module[$17940a[378]] = wasmExports[$17940a[379]]; _texc_encoded_size_astc_12x10 = Module[$17940a[380]] = wasmExports[$17940a[381]]; _texc_decode_astc_12x12 = Module[$17940a[382]] = wasmExports[$17940a[383]]; _texc_encode_astc_12x12 = Module[$17940a[384]] = wasmExports[$17940a[385]]; _texc_encoded_size_astc_12x12 = Module[$17940a[386]] = wasmExports[$17940a[387]]; _texc_decode_atc_rgb = Module[$17940a[388]] = wasmExports[$17940a[389]]; _texc_encode_atc_rgb = Module[$17940a[390]] = wasmExports[$17940a[391]]; _texc_encoded_size_atc_rgb = Module[$17940a[392]] = wasmExports[$17940a[393]]; _texc_decode_atc_rgba_explicit = Module[$17940a[394]] = wasmExports[$17940a[395]]; _texc_encode_atc_rgba_explicit = Module[$17940a[396]] = wasmExports[$17940a[397]]; _texc_encoded_size_atc_rgba_explicit = Module[$17940a[398]] = wasmExports[$17940a[399]]; _texc_decode_atc_rgba_interpolated = Module[$17940a[400]] = wasmExports[$17940a[401]]; _texc_encode_atc_rgba_interpolated = Module[$17940a[402]] = wasmExports[$17940a[403]]; _texc_encoded_size_atc_rgba_interpolated = Module[$17940a[404]] = wasmExports[$17940a[405]]; _texc_decode_etc1_rgb_a_atlas = Module[$17940a[406]] = wasmExports[$17940a[407]]; _texc_encode_etc1_rgb_a_atlas = Module[$17940a[408]] = wasmExports[$17940a[409]]; _texc_encoded_size_etc1_rgb_a_atlas = Module[$17940a[410]] = wasmExports[$17940a[411]]; _texc_decode_pvrtc1_4bpp_rgb_a_atlas = Module[$17940a[412]] = wasmExports[$17940a[413]]; _texc_encode_pvrtc1_4bpp_rgb_a_atlas = Module[$17940a[414]] = wasmExports[$17940a[415]]; _texc_encoded_size_pvrtc1_4bpp_rgb_a_atlas = Module[$17940a[416]] = wasmExports[$17940a[417]]; _texc_decode_etc2_rgb_a_atlas = Module[$17940a[418]] = wasmExports[$17940a[419]]; _texc_encode_etc2_rgb_a_atlas = Module[$17940a[420]] = wasmExports[$17940a[421]]; _texc_encoded_size_etc2_rgb_a_atlas = Module[$17940a[422]] = wasmExports[$17940a[423]]; _texc_decode_pica_etc1_rgb8 = Module[$17940a[424]] = wasmExports[$17940a[425]]; _texc_encode_pica_etc1_rgb8 = Module[$17940a[426]] = wasmExports[$17940a[427]]; _texc_encoded_size_pica_etc1_rgb8 = Module[$17940a[428]] = wasmExports[$17940a[429]]; _texc_decode_pica_etc1_rgb8a4 = Module[$17940a[430]] = wasmExports[$17940a[431]]; _texc_encode_pica_etc1_rgb8a4 = Module[$17940a[432]] = wasmExports[$17940a[433]]; _texc_encoded_size_pica_etc1_rgb8a4 = Module[$17940a[434]] = wasmExports[$17940a[435]]; _texc_decode_wii_i4 = Module[$17940a[436]] = wasmExports[$17940a[437]]; _texc_encode_wii_i4 = Module[$17940a[438]] = wasmExports[$17940a[439]]; _texc_encoded_size_wii_i4 = Module[$17940a[440]] = wasmExports[$17940a[441]]; _texc_decode_wii_i8 = Module[$17940a[442]] = wasmExports[$17940a[443]]; _texc_encode_wii_i8 = Module[$17940a[444]] = wasmExports[$17940a[445]]; _texc_encoded_size_wii_i8 = Module[$17940a[446]] = wasmExports[$17940a[447]]; _texc_decode_wii_ia4 = Module[$17940a[448]] = wasmExports[$17940a[449]]; _texc_encode_wii_ia4 = Module[$17940a[450]] = wasmExports[$17940a[451]]; _texc_encoded_size_wii_ia4 = Module[$17940a[452]] = wasmExports[$17940a[453]]; _texc_decode_wii_ia8 = Module[$17940a[454]] = wasmExports[$17940a[455]]; _texc_encode_wii_ia8 = Module[$17940a[456]] = wasmExports[$17940a[457]]; _texc_encoded_size_wii_ia8 = Module[$17940a[458]] = wasmExports[$17940a[459]]; _texc_decode_wii_rgb565 = Module[$17940a[460]] = wasmExports[$17940a[461]]; _texc_encode_wii_rgb565 = Module[$17940a[462]] = wasmExports[$17940a[463]]; _texc_encoded_size_wii_rgb565 = Module[$17940a[464]] = wasmExports[$17940a[465]]; _texc_decode_wii_rgb5a3 = Module[$17940a[466]] = wasmExports[$17940a[467]]; _texc_encode_wii_rgb5a3 = Module[$17940a[468]] = wasmExports[$17940a[469]]; _texc_encoded_size_wii_rgb5a3 = Module[$17940a[470]] = wasmExports[$17940a[471]]; _texc_decode_wii_rgba8 = Module[$17940a[472]] = wasmExports[$17940a[473]]; _texc_encode_wii_rgba8 = Module[$17940a[474]] = wasmExports[$17940a[475]]; _texc_encoded_size_wii_rgba8 = Module[$17940a[476]] = wasmExports[$17940a[477]]; _texc_decode_wii_cmpr = Module[$17940a[478]] = wasmExports[$17940a[479]]; _texc_encode_wii_cmpr = Module[$17940a[480]] = wasmExports[$17940a[481]]; _texc_encoded_size_wii_cmpr = Module[$17940a[482]] = wasmExports[$17940a[483]]; _texc_decode_wii_c4 = Module[$17940a[484]] = wasmExports[$17940a[485]]; _texc_encode_wii_c4 = Module[$17940a[486]] = wasmExports[$17940a[487]]; _texc_encoded_size_wii_c4 = Module[$17940a[488]] = wasmExports[$17940a[489]]; _texc_decode_wii_c8 = Module[$17940a[490]] = wasmExports[$17940a[491]]; _texc_encode_wii_c8 = Module[$17940a[492]] = wasmExports[$17940a[493]]; _texc_encoded_size_wii_c8 = Module[$17940a[494]] = wasmExports[$17940a[495]]; _texc_decode_wii_c14x2 = Module[$17940a[496]] = wasmExports[$17940a[497]]; _texc_encode_wii_c14x2 = Module[$17940a[498]] = wasmExports[$17940a[499]]; _texc_encoded_size_wii_c14x2 = Module[$17940a[500]] = wasmExports[$17940a[501]]; _texc_unswizzle_ps4 = Module[$17940a[502]] = wasmExports[$17940a[503]]; _texc_reswizzle_ps4 = Module[$17940a[504]] = wasmExports[$17940a[505]]; _texc_swizzle_ps4 = Module[$17940a[506]] = wasmExports[$17940a[507]]; _texc_swizzled_size_ps4 = Module[$17940a[508]] = wasmExports[$17940a[509]]; _texc_unswizzle_ps5 = Module[$17940a[510]] = wasmExports[$17940a[511]]; _texc_reswizzle_ps5 = Module[$17940a[512]] = wasmExports[$17940a[513]]; _texc_swizzle_ps5 = Module[$17940a[514]] = wasmExports[$17940a[515]]; _texc_swizzled_size_ps5 = Module[$17940a[516]] = wasmExports[$17940a[517]]; _texc_unswizzle_switch = Module[$17940a[518]] = wasmExports[$17940a[519]]; _texc_reswizzle_switch = Module[$17940a[520]] = wasmExports[$17940a[521]]; _texc_swizzle_switch = Module[$17940a[522]] = wasmExports[$17940a[523]]; _texc_swizzled_size_switch = Module[$17940a[524]] = wasmExports[$17940a[525]]; _texc_unswizzle_psvita = Module[$17940a[526]] = wasmExports[$17940a[527]]; _texc_reswizzle_psvita = Module[$17940a[528]] = wasmExports[$17940a[529]]; _texc_swizzle_psvita = Module[$17940a[530]] = wasmExports[$17940a[531]]; _texc_swizzled_size_psvita = Module[$17940a[532]] = wasmExports[$17940a[533]]; _texc_unswizzle_x360 = Module[$17940a[534]] = wasmExports[$17940a[535]]; _texc_reswizzle_x360 = Module[$17940a[536]] = wasmExports[$17940a[537]]; _texc_swizzle_x360 = Module[$17940a[538]] = wasmExports[$17940a[539]]; _texc_swizzled_size_x360 = Module[$17940a[540]] = wasmExports[$17940a[541]]; _texc_unswizzle_psp = Module[$17940a[542]] = wasmExports[$17940a[543]]; _texc_reswizzle_psp = Module[$17940a[544]] = wasmExports[$17940a[545]]; _texc_swizzle_psp = Module[$17940a[546]] = wasmExports[$17940a[547]]; _texc_swizzled_size_psp = Module[$17940a[548]] = wasmExports[$17940a[549]]; _texc_unswizzle_n3ds = Module[$17940a[550]] = wasmExports[$17940a[551]]; _texc_reswizzle_n3ds = Module[$17940a[552]] = wasmExports[$17940a[553]]; _texc_swizzle_n3ds = Module[$17940a[554]] = wasmExports[$17940a[555]]; _texc_swizzled_size_n3ds = Module[$17940a[556]] = wasmExports[$17940a[557]]; _texc_unswizzle_wiiu = Module[$17940a[558]] = wasmExports[$17940a[559]]; _texc_reswizzle_wiiu = Module[$17940a[560]] = wasmExports[$17940a[561]]; _texc_swizzle_wiiu = Module[$17940a[562]] = wasmExports[$17940a[563]]; _texc_swizzled_size_wiiu = Module[$17940a[564]] = wasmExports[$17940a[565]]; _texc_unswizzle_dx12_64kb = Module[$17940a[566]] = wasmExports[$17940a[567]]; _texc_reswizzle_dx12_64kb = Module[$17940a[568]] = wasmExports[$17940a[569]]; _texc_swizzle_dx12_64kb = Module[$17940a[570]] = wasmExports[$17940a[571]]; _texc_swizzled_size_dx12_64kb = Module[$17940a[572]] = wasmExports[$17940a[573]]; __emscripten_stack_restore = wasmExports[$17940a[574]]; __emscripten_stack_alloc = wasmExports[$17940a[575]]; _emscripten_stack_get_current = wasmExports[$17940a[576]]; memory = wasmMemory = wasmExports[$17940a[577]]; __indirect_function_table = wasmExports[$17940a[578]]; }
        var wasmImports = { c: __abort_js, b: _emscripten_resize_heap, a: _fd_write };
        async function run() { preRun(); var setStatus = Module[$17940a[579]]; if (setStatus) {
            setStatus($17940a[580]);
            await new Promise(resolve => setTimeout(resolve, 1));
            setTimeout(setStatus, 1, "");
        } if (ABORT)
            return; initRuntime(); Module[$17940a[581]]?.(); postRun(); }
        var wasmExports;
        wasmExports = await createWasm();
        await run();
        ;
        return Module;
    };
})();
if (typeof exports === $17940a[582] && typeof module === $17940a[582]) {
    module.exports = TexCodec;
    module.exports.default = TexCodec;
}
else if (typeof define === $17940a[16] && define[$17940a[583]])
    define([], () => TexCodec);
