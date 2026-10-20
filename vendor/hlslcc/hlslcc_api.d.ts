/**
 * hlslcc_api.d.ts - types for hlslcc_api.mjs (hand-maintained).
 */

export declare const VERSION: string;

export declare const GLLang: Readonly<{
  DEFAULT: 0; ES_100: 1; ES_300: 2; ES_310: 3;
  GL_120: 4; GL_130: 5; GL_140: 6; GL_150: 7; GL_330: 8;
  GL_400: 9; GL_410: 10; GL_420: 11; GL_430: 12; GL_440: 13;
  METAL: 14;
}>;

export declare const Flags: Readonly<{
  UNIFORM_BUFFER_OBJECT: number;
  ORIGIN_UPPER_LEFT: number;
  PIXEL_CENTER_INTEGER: number;
  GLOBAL_CONSTS_NEVER_IN_UBO: number;
  GS_ENABLED: number;
  TESS_ENABLED: number;
  DUAL_SOURCE_BLENDING: number;
  INOUT_SEMANTIC_NAMES: number;
  INOUT_APPEND_SEMANTIC_NAMES: number;
  COMBINE_TEXTURE_SAMPLERS: number;
  DISABLE_EXPLICIT_LOCATIONS: number;
  DISABLE_GLOBALS_STRUCT: number;
  GLES31_IMAGE_QUALIFIERS: number;
  SAMPLER_PRECISION_ENCODED_IN_NAME: number;
  WRAP_UBO: number;
  REMOVE_UNUSED_GLOBALS: number;
  TRANSLATE_MATRICES: number;
  VULKAN_BINDINGS: number;
  AVOID_SHADER_ATOMIC_COUNTERS: number;
  /** Buffer<> as 2D textures, texel i at (i % W, i / W); see hlslcc_api.mjs. */
  EMULATE_TEXTURE_BUFFERS: number;
  SHADER_FRAMEBUFFER_FETCH: number;
  UNIFORM_BUFFER_OBJECT_WITH_INSTANCE_NAME: number;
  DISABLE_FASTMATH: number;
  FORCE_EXPLICIT_LOCATIONS: number;
  INCLUDE_INSTRUCTIONS_COMMENTS: number;
  KEEP_VARYING_LOCATIONS: number;
  MOBILE_TARGET: number;
  /** 2D / 2D-array textureGather emulated with four textureLod taps. */
  EMULATE_TEXTURE_GATHER: number;
}>;

export declare const HLSLccResult: Readonly<{
  OK: 0;
  INVALID_ARG: -1;
  NOT_DXBC: -2;
  TRUNCATED: -3;
  NO_SHADER_CHUNK: -4;
  TRANSLATE_FAILED: -5;
  CRASHED: -100;
}>;

export declare class HLSLccError extends Error {
  readonly code: number;
  readonly detail: string;
  constructor(code: number, detail: string);
}

/** One entry of an input / output / patch-constant signature (ISGN/OSGN). */
export interface SignatureElement {
  semantic: string;
  index: number;
  /** "SV_Position", "SV_VertexID", ... or "" for a plain semantic. */
  systemValue: string;
  systemValueId: number;
  componentType: "uint" | "int" | "float" | "unknown";
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
  /** Raw 32-bit words, when RDEF carries a default value. */
  defaultValue?: number[];
}

export interface ConstantBuffer {
  name: string;
  /** The uniform block name in the GLSL ($Globals -> VGlobals / PGlobals ...). */
  glslBlockName: string;
  size: number;
  variables: ConstantBufferVariable[];
}

export interface ResourceBinding {
  name: string;
  type: string;
  bindPoint: number;
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
  /** HLSLCC_FLAG_COMBINE_TEXTURE_SAMPLERS: the GLSL sampler names made. */
  textureSamplers: string[];
  earlyFragmentTests: boolean;
  /** The 2D arrays made from TranslateOptions.textureArrays. */
  textureArrays: { name: string; type: string; members: { uniform: string; layerUniform: string }[] }[];
  /** Requested members the shader does not declare, or that cannot be merged (see diagnostics). */
  textureArraysNotMerged: string[];
  /** What HLSLcc reported while writing the GLSL, with GLSL-side names. */
  glsl: {
    inputBindings: { name: string; location: number }[];
    constantBuffers: { name: string; size: number; memberCount: number }[];
    constants: {
      name: string; bindIndex: number; type: string; rows: number;
      columns: number; isMatrix: boolean; arraySize: number; isUsed: boolean;
    }[];
    constantBufferBindings: { name: string; binding: number }[];
    textureBindings: {
      name: string; binding: number; sampler: number; multisampled: boolean;
      dimension: string; isUAV: boolean;
    }[];
    bufferBindings: { name: string; binding: number; isUAV: boolean }[];
  };
  diagnostics: { message: string; line: number; isError: boolean }[];
}

export interface TranslateOptions {
  /** A GLLang value; default GLLang.ES_300. */
  lang?: number;
  /** Flags bits; default HLSLcc#defaultFlags. */
  flags?: number;
  /** Textures to merge into 2D arrays: { arrayName: [sampler or texture uniform, ...] }.
   *  Each member is layers of the array from `uniform int <member>_layer`. Merge only
   *  textures of one size, format and mip chain that can share a sampler state. */
  textureArrays?: Record<string, string[]>;
}

/** The raw Emscripten module. */
export interface HLSLccModule {
  HEAPU8: Uint8Array;
  UTF8ToString(ptr: number, maxBytesToRead?: number): string;
  _hlslcc_version(): number;
  _hlslcc_version_string(): number;
  _hlslcc_build_info(): number;
  _hlslcc_default_flags(): number;
  _hlslcc_translate(dxbc: number, size: number, lang: number, flags: number): number;
  _hlslcc_translate_ex(dxbc: number, size: number, lang: number, flags: number, textureArrays: number): number;
  _hlslcc_glsl(): number;
  _hlslcc_glsl_length(): number;
  _hlslcc_reflection(): number;
  _hlslcc_reflection_length(): number;
  _hlslcc_error(): number;
  _hlslcc_alloc(size: number): number;
  _hlslcc_free(ptr: number): void;
  _malloc(size: number): number;
  _free(ptr: number): void;
}

export declare class HLSLcc {
  readonly module: HLSLccModule;
  static load(options?: {
    factory?: () => Promise<HLSLccModule>;
    moduleUrl?: string | URL;
  }): Promise<HLSLcc>;
  revive(): Promise<void>;
  version(): { major: number; minor: number; patch: number; string: string; wrapper: string };
  buildInfo(): string;
  checkVersion(): boolean;
  readonly defaultFlags: number;
  translate(dxbc: Uint8Array, options?: TranslateOptions): { glsl: string; reflection: Reflection };
  translateSafe(dxbc: Uint8Array, options?: TranslateOptions): Promise<{ glsl: string; reflection: Reflection }>;
}
