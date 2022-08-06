// package: gooseai
// file: generation.proto

import * as jspb from "google-protobuf";

export class Token extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    text: string,
    id: number,
  }
}

export class Tokens extends jspb.Message {
  clearTokensList(): void;
  getTokensList(): Array<Token>;
  setTokensList(value: Array<Token>): void;
  addTokens(value?: Token, index?: number): Token;

  hasTokenizerId(): boolean;
  clearTokenizerId(): void;
  getTokenizerId(): string;
  setTokenizerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tokens.AsObject;
  static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tokens;
  static deserializeBinaryFromReader(message: Tokens, reader: jspb.BinaryReader): Tokens;
}

export namespace Tokens {
  export type AsObject = {
    tokensList: Array<Token.AsObject>,
    tokenizerId: string,
  }
}

export class Artifact extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): ArtifactTypeMap[keyof ArtifactTypeMap];
  setType(value: ArtifactTypeMap[keyof ArtifactTypeMap]): void;

  getMime(): string;
  setMime(value: string): void;

  hasMagic(): boolean;
  clearMagic(): void;
  getMagic(): string;
  setMagic(value: string): void;

  hasBinary(): boolean;
  clearBinary(): void;
  getBinary(): Uint8Array | string;
  getBinary_asU8(): Uint8Array;
  getBinary_asB64(): string;
  setBinary(value: Uint8Array | string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasTokens(): boolean;
  clearTokens(): void;
  getTokens(): Tokens | undefined;
  setTokens(value?: Tokens): void;

  getIndex(): number;
  setIndex(value: number): void;

  getFinishReason(): FinishReasonMap[keyof FinishReasonMap];
  setFinishReason(value: FinishReasonMap[keyof FinishReasonMap]): void;

  getDataCase(): Artifact.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    id: number,
    type: ArtifactTypeMap[keyof ArtifactTypeMap],
    mime: string,
    magic: string,
    binary: Uint8Array | string,
    text: string,
    tokens?: Tokens.AsObject,
    index: number,
    finishReason: FinishReasonMap[keyof FinishReasonMap],
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    BINARY = 5,
    TEXT = 6,
    TOKENS = 7,
  }
}

export class PromptParameters extends jspb.Message {
  hasInit(): boolean;
  clearInit(): void;
  getInit(): boolean;
  setInit(value: boolean): void;

  hasWeight(): boolean;
  clearWeight(): void;
  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromptParameters.AsObject;
  static toObject(includeInstance: boolean, msg: PromptParameters): PromptParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromptParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromptParameters;
  static deserializeBinaryFromReader(message: PromptParameters, reader: jspb.BinaryReader): PromptParameters;
}

export namespace PromptParameters {
  export type AsObject = {
    init: boolean,
    weight: number,
  }
}

export class Prompt extends jspb.Message {
  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): PromptParameters | undefined;
  setParameters(value?: PromptParameters): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasTokens(): boolean;
  clearTokens(): void;
  getTokens(): Tokens | undefined;
  setTokens(value?: Tokens): void;

  hasArtifact(): boolean;
  clearArtifact(): void;
  getArtifact(): Artifact | undefined;
  setArtifact(value?: Artifact): void;

  getPromptCase(): Prompt.PromptCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prompt.AsObject;
  static toObject(includeInstance: boolean, msg: Prompt): Prompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Prompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prompt;
  static deserializeBinaryFromReader(message: Prompt, reader: jspb.BinaryReader): Prompt;
}

export namespace Prompt {
  export type AsObject = {
    parameters?: PromptParameters.AsObject,
    text: string,
    tokens?: Tokens.AsObject,
    artifact?: Artifact.AsObject,
  }

  export enum PromptCase {
    PROMPT_NOT_SET = 0,
    TEXT = 2,
    TOKENS = 3,
    ARTIFACT = 4,
  }
}

export class AnswerMeta extends jspb.Message {
  hasGpuId(): boolean;
  clearGpuId(): void;
  getGpuId(): string;
  setGpuId(value: string): void;

  hasCpuId(): boolean;
  clearCpuId(): void;
  getCpuId(): string;
  setCpuId(value: string): void;

  hasNodeId(): boolean;
  clearNodeId(): void;
  getNodeId(): string;
  setNodeId(value: string): void;

  hasEngineId(): boolean;
  clearEngineId(): void;
  getEngineId(): string;
  setEngineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerMeta.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerMeta): AnswerMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnswerMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerMeta;
  static deserializeBinaryFromReader(message: AnswerMeta, reader: jspb.BinaryReader): AnswerMeta;
}

export namespace AnswerMeta {
  export type AsObject = {
    gpuId: string,
    cpuId: string,
    nodeId: string,
    engineId: string,
  }
}

export class Answer extends jspb.Message {
  getAnswerId(): string;
  setAnswerId(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getReceived(): number;
  setReceived(value: number): void;

  getCreated(): number;
  setCreated(value: number): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): AnswerMeta | undefined;
  setMeta(value?: AnswerMeta): void;

  clearArtifactsList(): void;
  getArtifactsList(): Array<Artifact>;
  setArtifactsList(value: Array<Artifact>): void;
  addArtifacts(value?: Artifact, index?: number): Artifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Answer.AsObject;
  static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Answer;
  static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
  export type AsObject = {
    answerId: string,
    requestId: string,
    received: number,
    created: number,
    meta?: AnswerMeta.AsObject,
    artifactsList: Array<Artifact.AsObject>,
  }
}

export class SamplerParameters extends jspb.Message {
  hasEta(): boolean;
  clearEta(): void;
  getEta(): number;
  setEta(value: number): void;

  hasSamplingSteps(): boolean;
  clearSamplingSteps(): void;
  getSamplingSteps(): number;
  setSamplingSteps(value: number): void;

  hasLatentChannels(): boolean;
  clearLatentChannels(): void;
  getLatentChannels(): number;
  setLatentChannels(value: number): void;

  hasDownsamplingFactor(): boolean;
  clearDownsamplingFactor(): void;
  getDownsamplingFactor(): number;
  setDownsamplingFactor(value: number): void;

  hasCfgScale(): boolean;
  clearCfgScale(): void;
  getCfgScale(): number;
  setCfgScale(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SamplerParameters.AsObject;
  static toObject(includeInstance: boolean, msg: SamplerParameters): SamplerParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SamplerParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SamplerParameters;
  static deserializeBinaryFromReader(message: SamplerParameters, reader: jspb.BinaryReader): SamplerParameters;
}

export namespace SamplerParameters {
  export type AsObject = {
    eta: number,
    samplingSteps: number,
    latentChannels: number,
    downsamplingFactor: number,
    cfgScale: number,
  }
}

export class StepParameter extends jspb.Message {
  getScaledStep(): number;
  setScaledStep(value: number): void;

  hasSampler(): boolean;
  clearSampler(): void;
  getSampler(): SamplerParameters | undefined;
  setSampler(value?: SamplerParameters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StepParameter.AsObject;
  static toObject(includeInstance: boolean, msg: StepParameter): StepParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StepParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StepParameter;
  static deserializeBinaryFromReader(message: StepParameter, reader: jspb.BinaryReader): StepParameter;
}

export namespace StepParameter {
  export type AsObject = {
    scaledStep: number,
    sampler?: SamplerParameters.AsObject,
  }
}

export class TransformType extends jspb.Message {
  hasDiffusion(): boolean;
  clearDiffusion(): void;
  getDiffusion(): DiffusionSamplerMap[keyof DiffusionSamplerMap];
  setDiffusion(value: DiffusionSamplerMap[keyof DiffusionSamplerMap]): void;

  hasUpscaler(): boolean;
  clearUpscaler(): void;
  getUpscaler(): UpscalerMap[keyof UpscalerMap];
  setUpscaler(value: UpscalerMap[keyof UpscalerMap]): void;

  getTypeCase(): TransformType.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformType.AsObject;
  static toObject(includeInstance: boolean, msg: TransformType): TransformType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformType;
  static deserializeBinaryFromReader(message: TransformType, reader: jspb.BinaryReader): TransformType;
}

export namespace TransformType {
  export type AsObject = {
    diffusion: DiffusionSamplerMap[keyof DiffusionSamplerMap],
    upscaler: UpscalerMap[keyof UpscalerMap],
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    DIFFUSION = 1,
    UPSCALER = 2,
  }
}

export class ImageParameters extends jspb.Message {
  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number;
  setHeight(value: number): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number;
  setWidth(value: number): void;

  hasSeed(): boolean;
  clearSeed(): void;
  getSeed(): number;
  setSeed(value: number): void;

  hasSamples(): boolean;
  clearSamples(): void;
  getSamples(): number;
  setSamples(value: number): void;

  hasSteps(): boolean;
  clearSteps(): void;
  getSteps(): number;
  setSteps(value: number): void;

  hasTransform(): boolean;
  clearTransform(): void;
  getTransform(): TransformType | undefined;
  setTransform(value?: TransformType): void;

  clearParametersList(): void;
  getParametersList(): Array<StepParameter>;
  setParametersList(value: Array<StepParameter>): void;
  addParameters(value?: StepParameter, index?: number): StepParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ImageParameters): ImageParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageParameters;
  static deserializeBinaryFromReader(message: ImageParameters, reader: jspb.BinaryReader): ImageParameters;
}

export namespace ImageParameters {
  export type AsObject = {
    height: number,
    width: number,
    seed: number,
    samples: number,
    steps: number,
    transform?: TransformType.AsObject,
    parametersList: Array<StepParameter.AsObject>,
  }
}

export class Request extends jspb.Message {
  getEngineId(): string;
  setEngineId(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getRequestedType(): ArtifactTypeMap[keyof ArtifactTypeMap];
  setRequestedType(value: ArtifactTypeMap[keyof ArtifactTypeMap]): void;

  clearPromptList(): void;
  getPromptList(): Array<Prompt>;
  setPromptList(value: Array<Prompt>): void;
  addPrompt(value?: Prompt, index?: number): Prompt;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): ImageParameters | undefined;
  setImage(value?: ImageParameters): void;

  getParamsCase(): Request.ParamsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    engineId: string,
    requestId: string,
    requestedType: ArtifactTypeMap[keyof ArtifactTypeMap],
    promptList: Array<Prompt.AsObject>,
    image?: ImageParameters.AsObject,
  }

  export enum ParamsCase {
    PARAMS_NOT_SET = 0,
    IMAGE = 5,
  }
}

export interface FinishReasonMap {
  NULL: 0;
  LENGTH: 1;
  STOP: 2;
  ERROR: 3;
  FILTER: 4;
}

export const FinishReason: FinishReasonMap;

export interface ArtifactTypeMap {
  ARTIFACT_NONE: 0;
  ARTIFACT_IMAGE: 1;
  ARTIFACT_VIDEO: 2;
  ARTIFACT_TEXT: 3;
  ARTIFACT_TOKENS: 4;
  ARTIFACT_EMBEDDING: 5;
}

export const ArtifactType: ArtifactTypeMap;

export interface DiffusionSamplerMap {
  SAMPLER_DDIM: 0;
  SAMPLER_DDPM: 1;
  SAMPLER_K_EULER: 2;
  SAMPLER_K_EULER_ANCESTRAL: 3;
  SAMPLER_K_HEUN: 4;
  SAMPLER_K_DPM_2: 5;
  SAMPLER_K_DPM_2_ANCESTRAL: 6;
  SAMPLER_K_LMS: 7;
}

export const DiffusionSampler: DiffusionSamplerMap;

export interface UpscalerMap {
  UPSCALER_RGB: 0;
  UPSCALER_GFPGAN: 1;
  UPSCALER_ESRGAN: 2;
}

export const Upscaler: UpscalerMap;

