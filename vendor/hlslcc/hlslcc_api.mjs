/**
 * hlslcc_api.mjs - ergonomic JavaScript wrapper around the HLSLcc
 * WebAssembly module (DXBC shader bytecode -> GLSL).
 *
 * Plain ESM with JSDoc types; types for TypeScript are in hlslcc_api.d.ts.
 * Both files are static and hand-maintained, nothing is generated.
 *
 * Quick start:
 * ```js
 * import { HLSLcc, GLLang } from "./hlslcc_api.mjs";
 *
 * const cc = await HLSLcc.load();             // loads ./hlslcc.js next to this file
 * const { glsl, reflection } = cc.translate(dxbcBytes);   // GLSL ES 3.00
 * ```
 *
 * Design notes:
 * - `translate` is synchronous once the module is loaded; HLSLcc keeps no
 *   state between calls.
 * - HLSLcc trusts its input. The C side checks the DXBC container before
 *   handing it over, but a malformed shader body can still trap inside the
 *   module (a WebAssembly RuntimeError). The wrapper then throws
 *   {@link HLSLccError} with code {@link HLSLccResult.CRASHED} and
 *   re-instantiates the module before the next call, since a trap can leave
 *   its heap inconsistent.
 * - The raw Emscripten exports remain available as `cc.module`.
 */

/* ---------------------------------------------------------------- version */

/**
 * Version of this wrapper. Must match HLSLCC_WASM_VERSION_* in
 * wasm/exports.cpp - {@link HLSLcc#checkVersion} compares the two.
 * @type {string}
 */
export const VERSION = "0.1.0";

/* ------------------------------------------------------------------ enums */

/** Target languages; values match HLSLcc's `GLLang`. @readonly @enum {number} */
export const GLLang = Object.freeze({
  DEFAULT: 0,
  ES_100: 1, ES_300: 2, ES_310: 3,
  GL_120: 4, GL_130: 5, GL_140: 6, GL_150: 7, GL_330: 8,
  GL_400: 9, GL_410: 10, GL_420: 11, GL_430: 12, GL_440: 13,
  METAL: 14,
});

/** HLSLcc translation flags (`HLSLCC_FLAG_*` in hlslcc.h). @readonly @enum {number} */
export const Flags = Object.freeze({
  UNIFORM_BUFFER_OBJECT: 0x1,
  ORIGIN_UPPER_LEFT: 0x2,
  PIXEL_CENTER_INTEGER: 0x4,
  GLOBAL_CONSTS_NEVER_IN_UBO: 0x8,
  GS_ENABLED: 0x10,
  TESS_ENABLED: 0x20,
  DUAL_SOURCE_BLENDING: 0x40,
  INOUT_SEMANTIC_NAMES: 0x80,
  INOUT_APPEND_SEMANTIC_NAMES: 0x100,
  COMBINE_TEXTURE_SAMPLERS: 0x200,
  DISABLE_EXPLICIT_LOCATIONS: 0x400,
  DISABLE_GLOBALS_STRUCT: 0x800,
  GLES31_IMAGE_QUALIFIERS: 0x1000,
  SAMPLER_PRECISION_ENCODED_IN_NAME: 0x2000,
  WRAP_UBO: 0x8000,
  REMOVE_UNUSED_GLOBALS: 0x10000,
  TRANSLATE_MATRICES: 0x20000,
  VULKAN_BINDINGS: 0x40000,
  AVOID_SHADER_ATOMIC_COUNTERS: 0x100000,
  /** hlslcc_wasm addition: Buffer<> resources become 2D textures read with
   *  texelFetch(t, hlslcc_bufferCoord(i), 0) - texel i at (i % W, i / W),
   *  W = 1 << HLSLCC_BUFFER_TEXTURE_ROW_LOG2 (default 11, i.e. 2048; #define
   *  it after the #version line to change it). WebGL2 has no buffer textures. */
  EMULATE_TEXTURE_BUFFERS: 0x200000,
  SHADER_FRAMEBUFFER_FETCH: 0x400000,
  UNIFORM_BUFFER_OBJECT_WITH_INSTANCE_NAME: 0x1000000,
  DISABLE_FASTMATH: 0x4000000,
  FORCE_EXPLICIT_LOCATIONS: 0x8000000,
  INCLUDE_INSTRUCTIONS_COMMENTS: 0x10000000,
  KEEP_VARYING_LOCATIONS: 0x20000000,
  MOBILE_TARGET: 0x40000000,
  /** hlslcc_wasm addition: 2D / 2D-array textureGather (plain and compare)
   *  emulated with four textureLod taps; GLSL ES 3.00 has none. Cube
   *  gathers are not emulated. */
  EMULATE_TEXTURE_GATHER: 0x80000000,
});

/** Result codes of `_hlslcc_translate`, plus CRASHED (wrapper only). @readonly @enum {number} */
export const HLSLccResult = Object.freeze({
  OK: 0,
  INVALID_ARG: -1,
  NOT_DXBC: -2,
  TRUNCATED: -3,
  NO_SHADER_CHUNK: -4,
  TRANSLATE_FAILED: -5,
  /** The module trapped (WebAssembly RuntimeError) on this input. */
  CRASHED: -100,
});

const RESULT_NAMES = Object.fromEntries(
  Object.entries(HLSLccResult).map(([k, v]) => [v, k]));

/** Error thrown by {@link HLSLcc#translate}. */
export class HLSLccError extends Error {
  /** @param {number} code @param {string} detail */
  constructor(code, detail) {
    super(`${RESULT_NAMES[code] ?? code}: ${detail}`);
    this.name = "HLSLccError";
    /** One of {@link HLSLccResult}. */
    this.code = code;
    this.detail = detail;
  }
}

/* ---------------------------------------------------------------- loader */

/** @typedef {import("./hlslcc_api.d.ts").HLSLccModule} HLSLccModule */
/** @typedef {import("./hlslcc_api.d.ts").Reflection} Reflection */

let defaultFactoryPromise = null;

export class HLSLcc {
  /**
   * @param {() => Promise<HLSLccModule>} factory
   * @param {HLSLccModule} mod
   */
  constructor(factory, mod) {
    this._factory = factory;
    /** The raw Emscripten module (exports are `_hlslcc_*`). */
    this.module = mod;
    this._dead = false;
  }

  /**
   * Load the module. With no options, imports ./hlslcc.js next to this file.
   * @param {{factory?: () => Promise<HLSLccModule>, moduleUrl?: string | URL}} [options]
   *        `factory`: an Emscripten factory you imported yourself (bundlers).
   *        `moduleUrl`: URL of hlslcc.js to import.
   * @returns {Promise<HLSLcc>}
   */
  static async load(options = {}) {
    let factory = options.factory;
    if (!factory) {
      const url = options.moduleUrl
        ? options.moduleUrl.toString()
        : new URL("./hlslcc.js", import.meta.url).href;
      const imported = options.moduleUrl
        ? import(/* webpackIgnore: true */ url)
        : (defaultFactoryPromise ??= import(/* webpackIgnore: true */ url));
      factory = (await imported).default;
    }
    return new HLSLcc(factory, await factory());
  }

  /** Re-instantiate the module after a trap. */
  async revive() {
    this.module = await this._factory();
    this._dead = false;
  }

  /** @returns {{major: number, minor: number, patch: number, string: string, wrapper: string}} */
  version() {
    const mod = this.module;
    const v = mod._hlslcc_version();
    return {
      major: Math.floor(v / 10000),
      minor: Math.floor(v / 100) % 100,
      patch: v % 100,
      string: mod.UTF8ToString(mod._hlslcc_version_string()),
      wrapper: VERSION,
    };
  }

  /** One-line build identification of the WASM binary. @returns {string} */
  buildInfo() {
    return this.module.UTF8ToString(this.module._hlslcc_build_info());
  }

  /** True when the WASM binary's version equals {@link VERSION}. @returns {boolean} */
  checkVersion() {
    return this.version().string === VERSION;
  }

  /** The flags used when `translate` gets none (UBOs, matrices as vec4
   *  arrays, combined texture+samplers, emulated texture buffers and
   *  gathers). The uniform blocks get instance names (`_VGlobals`,
   *  `_SplsCB`, ...): GLSL ES rejects a program whose vertex and pixel
   *  blocks share a member name otherwise.
   *  @returns {number} */
  get defaultFlags() {
    return this.module._hlslcc_default_flags() >>> 0;
  }

  /**
   * Translate one DXBC container.
   * @param {Uint8Array} dxbc  the whole container, starting at "DXBC"
   * @param {{lang?: number, flags?: number, textureArrays?: Record<string, string[]>}} [options]
   *        `lang`: a {@link GLLang} (default ES_300); `flags`: {@link Flags}
   *        bits (default {@link HLSLcc#defaultFlags}); `textureArrays`:
   *        textures to merge into 2D arrays, `{ arrayName: [uniform, ...] }`.
   *        A member is a sampler or texture uniform the shader would declare
   *        (`sStage0TEX_with_SMP_smpsStage0`, `hlslcc_zcmp...`, a bare texture
   *        read by texelFetch); it becomes layers of the array starting at
   *        `uniform int <member>_layer`. Only merge textures of one size,
   *        format and mip chain that can share one sampler state.
   *        `reflection.textureArrays` lists what was merged; members the
   *        shader does not declare (or cannot merge) are in
   *        `reflection.textureArraysNotMerged`.
   * @returns {{glsl: string, reflection: Reflection}}
   * @throws {HLSLccError}
   */
  translate(dxbc, options = {}) {
    if (this._dead)
      throw new HLSLccError(HLSLccResult.CRASHED,
                            "module trapped earlier; await revive() first");
    if (!(dxbc instanceof Uint8Array))
      throw new HLSLccError(HLSLccResult.INVALID_ARG, "dxbc must be a Uint8Array");
    const mod = this.module;
    const lang = options.lang ?? GLLang.ES_300;
    const flags = options.flags ?? this.defaultFlags;
    const spec = Object.entries(options.textureArrays ?? {})
      .flatMap(([array, members]) => members.map((m) => `${m}=${array}\n`)).join("");
    const specBytes = new TextEncoder().encode(spec + "\0");
    const ptr = mod._hlslcc_alloc(dxbc.length);
    const specPtr = mod._hlslcc_alloc(specBytes.length);
    let rc;
    try {
      mod.HEAPU8.set(dxbc, ptr);
      mod.HEAPU8.set(specBytes, specPtr);
      rc = mod._hlslcc_translate_ex(ptr, dxbc.length, lang, flags >>> 0, specPtr);
    } catch (e) {
      if (e instanceof WebAssembly.RuntimeError) {
        this._dead = true;
        throw new HLSLccError(HLSLccResult.CRASHED, e.message);
      }
      throw e;
    } finally {
      if (!this._dead) { mod._hlslcc_free(ptr); mod._hlslcc_free(specPtr); }
    }
    if (rc !== HLSLccResult.OK)
      throw new HLSLccError(rc, mod.UTF8ToString(mod._hlslcc_error()));
    const glsl = mod.UTF8ToString(mod._hlslcc_glsl(), mod._hlslcc_glsl_length());
    const reflection = JSON.parse(
      mod.UTF8ToString(mod._hlslcc_reflection(), mod._hlslcc_reflection_length()));
    return { glsl, reflection };
  }

  /**
   * Like {@link HLSLcc#translate}, but revives the module after a trap so
   * the next call works. For batch runs over many shaders.
   * @param {Uint8Array} dxbc
   * @param {{lang?: number, flags?: number, textureArrays?: Record<string, string[]>}} [options]
   * @returns {Promise<{glsl: string, reflection: Reflection}>}
   */
  async translateSafe(dxbc, options = {}) {
    if (this._dead) await this.revive();
    try {
      return this.translate(dxbc, options);
    } finally {
      if (this._dead) await this.revive();
    }
  }
}
