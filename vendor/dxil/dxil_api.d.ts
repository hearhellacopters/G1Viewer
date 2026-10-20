/**
 * dxil_api.d.ts - types for dxil_api.mjs (hand-maintained).
 *
 * The Reflection schema is hlslcc_wasm's (hlslcc_api.d.ts) so one consumer
 * serves both translators. Fields marked "DXIL only" are additions this
 * module fills and hlslcc_wasm does not (yet); all are optional there.
 */

export declare const VERSION: string;

export declare const GLLang: Readonly<{
  DEFAULT: 0; ES_100: 1; ES_300: 2; ES_310: 3;
  GL_120: 4; GL_130: 5; GL_140: 6; GL_150: 7; GL_330: 8;
  GL_400: 9; GL_410: 10; GL_420: 11; GL_430: 12; GL_440: 13;
}>;

export declare const Flags: Readonly<{
  FIXUP_CLIPSPACE: number;
  FLIP_VERT_Y: number;
  RELAXED_PRECISION: number;
  KEEP_UAV_WRITES: number;
}>;

export declare const DXILResult: Readonly<{
  OK: 0;
  INVALID_ARG: -1;
  NOT_DXBC: -2;
  TRUNCATED: -3;
  NO_SHADER_CHUNK: -4;
  TRANSLATE_FAILED: -5;
  GLSL_FAILED: -6;
  PARSE_FAILED: -7;
  CRASHED: -100;
}>;

export declare class DXILError extends Error {
  readonly code: number;
  readonly detail: string;
  constructor(code: number, detail: string);
}

/** One entry of an input / output / patch-constant signature (ISG1/OSG1/PSG1). */
export interface SignatureElement {
  semantic: string;
  index: number;
  /** "SV_Position", "SV_Target", "SV_VertexID", ... or "" for a plain semantic. */
  systemValue: string;
  /** D3D_NAME value. */
  systemValueId: number;
  componentType: "uint" | "int" | "float" | "unknown";
  /** Signature row; -1 for system values without one (SV_Depth, ...). */
  register: number;
  /** Component mask (bit 0 = x). */
  mask: number;
  /** Components the shader actually reads (inputs) / does not write (outputs). */
  rwMask: number;
  stream: number;
  minPrecision: number;
}

export interface VarType {
  name: string;
  class: "scalar" | "vector" | "matrix_rows" | "matrix_columns" | "object" |
         "struct" | "interface_class" | "interface_pointer" | "unknown";
  /** "float", "int", "uint", "bool", "double", "min16float", ... */
  type: string;
  rows: number;
  columns: number;
  /** Array length; 0 = not an array. */
  elements: number;
  /** Byte offset relative to the parent struct (0 for top-level variables). */
  offset: number;
  members?: VarType[];
}

export interface ConstantBufferVariable {
  name: string;
  /** Byte offset in the cbuffer (D3D packing). */
  offset: number;
  size: number;
  /** Referenced by the shader code. */
  used: boolean;
  type: VarType;
  /** Raw 32-bit words, when RDEF carries a default value (never for DXIL). */
  defaultValue?: number[];
}

export interface ConstantBuffer {
  name: string;
  /**
   * The uniform block name in the GLSL ($Globals -> VGlobals / PGlobals ...).
   * For DXIL the block holds one `vec4 _m0[N]`: D3D's 16-byte rows, so the
   * cbuffer's bytes upload as they are and byte offset / 16 is the index.
   */
  glslBlockName: string;
  size: number;
  /** DXIL only: the cbuffer's register (b#) and space. */
  register?: number;
  space?: number;
  /** Empty when the program has no STAT reflection (names stripped). */
  variables: ConstantBufferVariable[];
}

export interface ResourceBinding {
  name: string;
  type: string;
  bindPoint: number;
  /** 0 = unbounded. */
  bindCount: number;
  space: number;
  flags: number;
  dimension: string;
  returnType: string;
  numSamples: number;
}

export interface Reflection {
  stage: "vertex" | "pixel" | "geometry" | "hull" | "domain" | "compute" | "unknown";
  glShaderType: number;
  shaderModelMajor: number;
  shaderModelMinor: number;
  glslLanguage: number;
  flags: number;
  inputs: SignatureElement[];
  outputs: SignatureElement[];
  patchConstants: SignatureElement[];
  constantBuffers: ConstantBuffer[];
  resources: ResourceBinding[];
  /** The GLSL sampler names made (one per texture / sampler pair). */
  textureSamplers: string[];
  earlyFragmentTests: boolean;
  /** The 2D arrays made from TranslateOptions.textureArrays (hlslcc_wasm's form). */
  textureArrays: { name: string; type: string; members: { uniform: string; layerUniform: string }[] }[];
  /** Requested members the program does not declare, or that cannot be merged (see diagnostics). */
  textureArraysNotMerged: string[];
  /** What was written into the GLSL, with GLSL-side names. */
  glsl: {
    /** Vertex attributes: in_<SEMANTIC><index>, location = signature row. */
    inputBindings: { name: string; location: number }[];
    constantBuffers: { name: string; size: number; memberCount: number }[];
    constants: {
      name: string; bindIndex: number; type: string; rows: number;
      columns: number; isMatrix: boolean; arraySize: number; isUsed: boolean;
      /** DXIL only: the uniform block the member belongs to. */
      block?: string;
    }[];
    /** binding = the cbuffer's register (b#). */
    constantBufferBindings: { name: string; binding: number; space?: number }[];
    /** binding = the texture's register (t#), sampler = the sampler's (s#),
     *  -1 when the texture is only read with Load (texelFetch). */
    textureBindings: {
      name: string; binding: number; sampler: number; multisampled: boolean;
      dimension: string; isUAV: boolean;
      /** DXIL only: register spaces and the HLSL names of the pair. */
      space?: number; samplerSpace?: number; texture?: string; samplerName?: string;
      /**
       * DXIL only, GLSL ES: a typed buffer (Buffer<T>, dimension "buffer"),
       * declared as hlslcc_wasm declares its emulated buffers: read through
       * `<name>_fetch(i)`, element i at texel (i % 2048, i / 2048) of its own
       * texture, or with `#define HLSLCC_BUFFER_ATLAS` from texel
       * `<name>_base` of the RGBA32UI `hlslcc_bufferAtlas`.
       */
      bufferWidth?: number;
      /** The textures of a register-form `textureArrays` group: each one's
       *  first layer, and `layers` when it is an array itself. */
      layers?: { layer: number; layers?: number; binding: number; space: number; texture: string }[];
    }[];
    bufferBindings: { name: string; binding: number; isUAV: boolean }[];
  };
  diagnostics: { message: string; line: number; isError: boolean }[];
  /** DXIL only: the container had a STAT reflection module (names, cbuffer
   *  layouts); without it variables are empty and names are stripped. */
  hasStat?: boolean;
}

export interface TranslateOptions {
  /** A GLLang value; default GLLang.ES_300. */
  lang?: number;
  /** Flags bits; default none. Bits other than Flags' are ignored, so
   *  hlslcc_wasm's flags may be passed too (they change nothing here). */
  flags?: number;
  /** Also return the intermediate SPIR-V. */
  spirv?: boolean;
  /**
   * Textures to merge into 2D arrays, in one of two forms:
   * - hlslcc_wasm's, `{ arrayName: [member, ...] }`: members are GLSL sampler
   *   or texture uniforms the program declares; each becomes
   *   `uniform int <member>_layer`, its first layer in the array. Reported in
   *   textureArrays / textureArraysNotMerged.
   * - by register, `[[{ binding, space, layers }, ...], ...]`: layers fixed in
   *   group order. Reported in glsl.textureBindings[].layers.
   * Merge only textures of one size, format and mip chain that can share one
   * sampler state.
   */
  textureArrays?: Record<string, string[]> | { binding: number; space?: number; layers?: number }[][];
}

/** The raw Emscripten module. */
export interface DXILModule {
  HEAPU8: Uint8Array;
  UTF8ToString(ptr: number, maxBytesToRead?: number): string;
  _dxil_version(): number;
  _dxil_version_string(): number;
  _dxil_build_info(): number;
  _dxil_default_flags(): number;
  _dxil_translate(data: number, size: number, lang: number, flags: number): number;
  _dxil_translate_plan(data: number, size: number, lang: number, flags: number, plan: number, planWords: number): number;
  _dxil_translate_ex(data: number, size: number, lang: number, flags: number, plan: number, planWords: number, arrayNames: number): number;
  _dxil_glsl(): number;
  _dxil_glsl_length(): number;
  _dxil_reflection(): number;
  _dxil_reflection_length(): number;
  _dxil_spirv(): number;
  _dxil_spirv_length(): number;
  _dxil_disassemble(data: number, size: number, reflection: number): number;
  _dxil_disassembly(): number;
  _dxil_disassembly_length(): number;
  _dxil_error(): number;
  _dxil_alloc(size: number): number;
  _dxil_free(ptr: number): void;
  _malloc(size: number): number;
  _free(ptr: number): void;
}

export declare class DXIL {
  readonly module: DXILModule;
  static load(options?: {
    factory?: () => Promise<DXILModule>;
    moduleUrl?: string | URL;
  }): Promise<DXIL>;
  revive(): Promise<void>;
  version(): { major: number; minor: number; patch: number; string: string; wrapper: string };
  buildInfo(): string;
  checkVersion(): boolean;
  readonly defaultFlags: number;
  translate(dxbc: Uint8Array, options?: TranslateOptions): { glsl: string; reflection: Reflection; spirv?: Uint32Array };
  translateSafe(dxbc: Uint8Array, options?: TranslateOptions): Promise<{ glsl: string; reflection: Reflection; spirv?: Uint32Array }>;
  disassemble(dxbc: Uint8Array, options?: { reflection?: boolean }): string;
}
