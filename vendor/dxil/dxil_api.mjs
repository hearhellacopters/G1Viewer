/**
 * dxil_api.mjs - ergonomic JavaScript wrapper around the dxil_wasm
 * WebAssembly module (DXIL shader model 6 bytecode -> SPIR-V -> GLSL).
 *
 * Plain ESM with JSDoc types; types for TypeScript are in dxil_api.d.ts.
 * Both files are static and hand-maintained, nothing is generated.
 *
 * Quick start:
 * ```js
 * import { DXIL, GLLang } from "./dxil_api.mjs";
 *
 * const dx = await DXIL.load();               // loads ./dxil.js next to this file
 * const { glsl, reflection } = dx.translate(dxbcBytes);   // GLSL ES 3.00
 * ```
 *
 * The result has the same shape as hlslcc_wasm's (`hlslcc_api.d.ts`), so a
 * viewer can pick the translator by the container's code chunk - SHEX / SHDR
 * to hlslcc_wasm, DXIL to this one - and wire both results the same way.
 *
 * Design notes:
 * - `translate` is synchronous once the module is loaded; nothing is kept
 *   between calls.
 * - The C side checks the DXBC container before dxil-spirv sees it, but a
 *   malformed program can still trap inside the module (a WebAssembly
 *   RuntimeError). The wrapper then throws {@link DXILError} with code
 *   {@link DXILResult.CRASHED} and re-instantiates the module before the next
 *   call, since a trap can leave its heap inconsistent.
 * - The raw Emscripten exports remain available as `dx.module`.
 */

/* ---------------------------------------------------------------- version */

/**
 * Version of this wrapper. Must match DXIL_WASM_VERSION_* in
 * wasm/exports.cpp - {@link DXIL#checkVersion} compares the two.
 * @type {string}
 */
export const VERSION = "0.3.0";

/* ------------------------------------------------------------------ enums */

/** Target languages; the values are hlslcc_wasm's `GLLang`. METAL is not
 *  available here. @readonly @enum {number} */
export const GLLang = Object.freeze({
  DEFAULT: 0,
  ES_100: 1, ES_300: 2, ES_310: 3,
  GL_120: 4, GL_130: 5, GL_140: 6, GL_150: 7, GL_330: 8,
  GL_400: 9, GL_410: 10, GL_420: 11, GL_430: 12, GL_440: 13,
});

/**
 * Translation flags (`DXIL_FLAG_*` in exports.cpp). They sit on the four bits
 * hlslcc_wasm's flags leave unused and every other bit is ignored, so code
 * that passes hlslcc_wasm's flags (a viewer's shared DXBC path) gets this
 * module's defaults. @readonly @enum {number}
 */
export const Flags = Object.freeze({
  /** Rewrite gl_Position.z from D3D's [0, w] clip range to GL's [-w, w]. */
  FIXUP_CLIPSPACE: 0x4000,
  /** Negate gl_Position.y. */
  FLIP_VERT_Y: 0x80000,
  /** min16float & co. as mediump instead of highp. */
  RELAXED_PRECISION: 0x800000,
  /** Keep UAV stores and atomics (GLSL ES 3.10+ / desktop GL). Without it
   *  they are left out (atomics read 0): GLSL ES 3.00 cannot express them,
   *  and the programs that have them use them as side channels - Rise of the
   *  Ronin's pixel shaders write a texture-streaming feedback buffer. */
  KEEP_UAV_WRITES: 0x2000000,
});

/** Result codes of `_dxil_translate`, plus CRASHED (wrapper only). The first
 *  five match hlslcc_wasm's HLSLccResult. @readonly @enum {number} */
export const DXILResult = Object.freeze({
  OK: 0,
  INVALID_ARG: -1,
  NOT_DXBC: -2,
  TRUNCATED: -3,
  /** No DXIL chunk (SHEX / SHDR programs are hlslcc_wasm's). */
  NO_SHADER_CHUNK: -4,
  /** dxil-spirv could not turn the DXIL into SPIR-V. */
  TRANSLATE_FAILED: -5,
  /** SPIRV-Cross could not express the SPIR-V in the target GLSL (wave
   *  operations, UAVs, typed buffers ... in GLSL ES 3.00). */
  GLSL_FAILED: -6,
  /** The DXIL bitcode did not parse. */
  PARSE_FAILED: -7,
  /** The module trapped (WebAssembly RuntimeError) on this input. */
  CRASHED: -100,
});

const RESULT_NAMES = Object.fromEntries(
  Object.entries(DXILResult).map(([k, v]) => [v, k]));

/** Error thrown by {@link DXIL#translate}. */
export class DXILError extends Error {
  /** @param {number} code @param {string} detail */
  constructor(code, detail) {
    super(`${RESULT_NAMES[code] ?? code}: ${detail}`);
    this.name = "DXILError";
    /** One of {@link DXILResult}. */
    this.code = code;
    this.detail = detail;
  }
}

/** `textureArrays` as the words `_dxil_translate_plan` reads: the number of
 *  groups, then per group its length and per texture (space, register,
 *  layers). null for none. */
function encodePlan(groups) {
  if (!groups || !groups.length) return null;
  const words = [groups.length];
  for (const g of groups) {
    words.push(g.length);
    for (const t of g) words.push(t.space ?? 0, t.binding, t.layers ?? 0);
  }
  return new Int32Array(words);
}

/* ---------------------------------------------------------------- loader */

/** @typedef {import("./dxil_api.d.ts").DXILModule} DXILModule */
/** @typedef {import("./dxil_api.d.ts").Reflection} Reflection */

let defaultFactoryPromise = null;

/**
 * The Emscripten factory in dxil.js. dxil.js is a classic script (Emscripten
 * MODULARIZE, like tex_codec and hlslcc_wasm), not an ES module, so:
 * - Node: import() hands back its CommonJS export - unless the folder is in a
 *   package with "type": "module" (project_g1's is), where Node takes it for
 *   an ES module with no exports; then its text is run as the CommonJS
 *   script it is;
 * - a browser page: a <script> tag defines the global `DXIL`;
 * - a classic worker: importScripts; a module worker: the script's text,
 *   evaluated.
 * In a browser the factory is given a locateFile so dxil.wasm is fetched from
 * next to dxil.js, wherever the page is.
 * @param {string} url  absolute URL of dxil.js
 * @returns {Promise<(opts?: object) => Promise<DXILModule>>}
 */
async function importFactory(url) {
  const isNode = typeof process !== "undefined" && !!process.versions?.node;
  if (isNode) {
    const imported = (await import(/* webpackIgnore: true */ url)).default;
    if (typeof imported === "function") return imported;
    const { readFileSync } = await import("node:fs");
    const { fileURLToPath } = await import("node:url");
    const { createRequire } = await import("node:module");
    const { dirname } = await import("node:path");
    const file = fileURLToPath(url);
    const module = { exports: {} };
    new Function("module", "exports", "require", "__filename", "__dirname", readFileSync(file, "utf8"))(
      module, module.exports, createRequire(url), file, dirname(file));
    if (typeof module.exports !== "function") throw new Error(url + " did not export the DXIL factory");
    return module.exports;
  }
  const located = (f) => (opts = {}) => f({ locateFile: (p) => new URL(p, url).href, ...opts });
  if (typeof globalThis.DXIL === "function") return located(globalThis.DXIL);
  if (typeof document !== "undefined") {
    await new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("failed to load " + url));
      document.head.append(s);
    });
  } else {
    try {
      importScripts(url); // classic worker
    } catch {
      const src = await (await fetch(url)).text(); // module worker: no importScripts
      globalThis.DXIL = new Function(src + "\nreturn DXIL;")();
    }
  }
  if (typeof globalThis.DXIL !== "function") throw new Error(url + " did not define the DXIL factory");
  return located(globalThis.DXIL);
}

export class DXIL {
  /**
   * @param {() => Promise<DXILModule>} factory
   * @param {DXILModule} mod
   */
  constructor(factory, mod) {
    this._factory = factory;
    /** The raw Emscripten module (exports are `_dxil_*`). */
    this.module = mod;
    this._dead = false;
  }

  /**
   * Load the module. With no options, loads ./dxil.js next to this file (in
   * Node, a browser page or a worker - see importFactory).
   * @param {{factory?: () => Promise<DXILModule>, moduleUrl?: string | URL}} [options]
   *        `factory`: an Emscripten factory you loaded yourself (a bundler, or
   *        the global `DXIL` from your own <script> tag - then pass a
   *        locateFile for dxil.wasm: `() => DXIL({ locateFile: (f) => base + f })`).
   *        `moduleUrl`: URL of dxil.js.
   * @returns {Promise<DXIL>}
   */
  static async load(options = {}) {
    let factory = options.factory;
    if (!factory) {
      const url = options.moduleUrl
        ? new URL(options.moduleUrl.toString(), import.meta.url).href
        : new URL("./dxil.js", import.meta.url).href;
      factory = await (options.moduleUrl ? importFactory(url) : (defaultFactoryPromise ??= importFactory(url)));
    }
    return new DXIL(factory, await factory());
  }

  /** Re-instantiate the module after a trap. */
  async revive() {
    this.module = await this._factory();
    this._dead = false;
  }

  /** @returns {{major: number, minor: number, patch: number, string: string, wrapper: string}} */
  version() {
    const mod = this.module;
    const v = mod._dxil_version();
    return {
      major: Math.floor(v / 10000),
      minor: Math.floor(v / 100) % 100,
      patch: v % 100,
      string: mod.UTF8ToString(mod._dxil_version_string()),
      wrapper: VERSION,
    };
  }

  /** One-line build identification of the WASM binary (wrapper version,
   *  git commit, dxil-spirv and SPIRV-Cross commits). @returns {string} */
  buildInfo() {
    return this.module.UTF8ToString(this.module._dxil_build_info());
  }

  /** True when the WASM binary's version equals {@link VERSION}. @returns {boolean} */
  checkVersion() {
    return this.version().string === VERSION;
  }

  /** The flags used when `translate` gets none (none).
   *  @returns {number} */
  get defaultFlags() {
    return this.module._dxil_default_flags() >>> 0;
  }

  /** Copy bytes into the module heap, run `fn(ptr)`, free them. Traps mark
   *  the module dead and become CRASHED. */
  _withBytes(bytes, fn) {
    if (this._dead)
      throw new DXILError(DXILResult.CRASHED, "module trapped earlier; await revive() first");
    if (!(bytes instanceof Uint8Array))
      throw new DXILError(DXILResult.INVALID_ARG, "the program must be a Uint8Array");
    const mod = this.module;
    const ptr = mod._dxil_alloc(bytes.length);
    try {
      mod.HEAPU8.set(bytes, ptr);
      return fn(ptr);
    } catch (e) {
      if (e instanceof WebAssembly.RuntimeError) {
        this._dead = true;
        throw new DXILError(DXILResult.CRASHED, e.message);
      }
      throw e;
    } finally {
      if (!this._dead) mod._dxil_free(ptr);
    }
  }

  /**
   * Translate one DXBC container holding DXIL.
   * @param {Uint8Array} dxbc  the whole container, starting at "DXBC"
   * @param {{lang?: number, flags?: number, spirv?: boolean,
   *          textureArrays?: Record<string, string[]> | {binding: number, space?: number, layers?: number}[][]}} [options]
   *        `lang`: a {@link GLLang} (default ES_300); `flags`: {@link Flags}
   *        bits (default {@link DXIL#defaultFlags}); `spirv`: also return the
   *        intermediate SPIR-V (after the GL lowering pass);
   *        `textureArrays`, either form (WebGL2 has 16 texture units; see
   *        README "Texture units"):
   *        - hlslcc_wasm's, `{ arrayName: [member, ...] }`: members are GLSL
   *          sampler uniforms this translation declares
   *          (`<tex>TEX_with_SMP<smp>`, `hlslcc_zcmp...`, a bare texture);
   *          each becomes `uniform int <member>_layer`, its first layer in the
   *          array `arrayName`. Reported in `reflection.textureArrays` /
   *          `textureArraysNotMerged`. Merge only textures of one size, format
   *          and mip chain that can share one sampler state.
   *        - by register, `[[{binding, space, layers}, ...], ...]`: each group
   *          one array `<stage>Array<k>`, layers fixed in the GLSL in group
   *          order (`layers` for a texture that is an array itself); reported
   *          in `glsl.textureBindings[].layers`.
   * @returns {{glsl: string, reflection: Reflection, spirv?: Uint32Array}}
   * @throws {DXILError}
   */
  translate(dxbc, options = {}) {
    const mod = this.module;
    const lang = options.lang ?? GLLang.ES_300;
    const flags = options.flags ?? this.defaultFlags;
    const ta = options.textureArrays;
    const plan = Array.isArray(ta) ? encodePlan(ta) : null;
    const names = ta && !Array.isArray(ta) && Object.keys(ta).length
      ? new TextEncoder().encode(Object.entries(ta).map(([k, v]) => [k, ...v].join("\t")).join("\n") + "\0")
      : null;
    const rc = this._withBytes(dxbc, (ptr) => {
      if (!plan && !names) return mod._dxil_translate(ptr, dxbc.length, lang, flags >>> 0);
      const pp = plan ? mod._dxil_alloc(plan.byteLength) : 0;
      const np = names ? mod._dxil_alloc(names.length) : 0;
      try {
        if (plan) mod.HEAPU8.set(new Uint8Array(plan.buffer), pp);
        if (names) mod.HEAPU8.set(names, np);
        return mod._dxil_translate_ex(ptr, dxbc.length, lang, flags >>> 0, pp, plan ? plan.length : 0, np);
      } finally {
        if (!this._dead) { if (pp) mod._dxil_free(pp); if (np) mod._dxil_free(np); }
      }
    });
    if (rc !== DXILResult.OK)
      throw new DXILError(rc, mod.UTF8ToString(mod._dxil_error()));
    const glsl = mod.UTF8ToString(mod._dxil_glsl(), mod._dxil_glsl_length());
    const reflection = JSON.parse(
      mod.UTF8ToString(mod._dxil_reflection(), mod._dxil_reflection_length()));
    const out = { glsl, reflection };
    if (options.spirv) {
      const p = mod._dxil_spirv(), n = mod._dxil_spirv_length();
      out.spirv = new Uint32Array(mod.HEAPU8.slice(p, p + n).buffer);
    }
    return out;
  }

  /**
   * Like {@link DXIL#translate}, but revives the module after a trap so the
   * next call works. For batch runs over many shaders.
   * @param {Uint8Array} dxbc
   * @param {{lang?: number, flags?: number, spirv?: boolean}} [options]
   * @returns {Promise<{glsl: string, reflection: Reflection, spirv?: Uint32Array}>}
   */
  async translateSafe(dxbc, options = {}) {
    if (this._dead) await this.revive();
    try {
      return this.translate(dxbc, options);
    } finally {
      if (this._dead) await this.revive();
    }
  }

  /**
   * The program's DXIL module as LLVM assembly - or, with `reflection`, the
   * STAT chunk's copy of it, which keeps the names and cbuffer layouts dxc
   * strips from the code. For looking at a program.
   * @param {Uint8Array} dxbc
   * @param {{reflection?: boolean}} [options]
   * @returns {string}
   * @throws {DXILError}
   */
  disassemble(dxbc, options = {}) {
    const mod = this.module;
    const rc = this._withBytes(dxbc, (ptr) => mod._dxil_disassemble(ptr, dxbc.length, options.reflection ? 1 : 0));
    if (rc !== DXILResult.OK)
      throw new DXILError(rc, mod.UTF8ToString(mod._dxil_error()));
    return mod.UTF8ToString(mod._dxil_disassembly(), mod._dxil_disassembly_length());
  }
}
