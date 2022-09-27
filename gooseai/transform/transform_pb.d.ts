// package: gooseai
// file: transform.proto

import * as jspb from "google-protobuf";

export class ImageReference extends jspb.Message {
  hasAssetId(): boolean;
  clearAssetId(): void;
  getAssetId(): string;
  setAssetId(value: string): void;

  hasBytes(): boolean;
  clearBytes(): void;
  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): void;

  getImageCase(): ImageReference.ImageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageReference.AsObject;
  static toObject(includeInstance: boolean, msg: ImageReference): ImageReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageReference;
  static deserializeBinaryFromReader(message: ImageReference, reader: jspb.BinaryReader): ImageReference;
}

export namespace ImageReference {
  export type AsObject = {
    assetId: string,
    bytes: Uint8Array | string,
  }

  export enum ImageCase {
    IMAGE_NOT_SET = 0,
    ASSET_ID = 1,
    BYTES = 2,
  }
}

export class TransformColorMatch extends jspb.Message {
  getColorMode(): ColorMatchModeMap[keyof ColorMatchModeMap];
  setColorMode(value: ColorMatchModeMap[keyof ColorMatchModeMap]): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): ImageReference | undefined;
  setImage(value?: ImageReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformColorMatch.AsObject;
  static toObject(includeInstance: boolean, msg: TransformColorMatch): TransformColorMatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformColorMatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformColorMatch;
  static deserializeBinaryFromReader(message: TransformColorMatch, reader: jspb.BinaryReader): TransformColorMatch;
}

export namespace TransformColorMatch {
  export type AsObject = {
    colorMode: ColorMatchModeMap[keyof ColorMatchModeMap],
    image?: ImageReference.AsObject,
  }
}

export class TransformNoise extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformNoise.AsObject;
  static toObject(includeInstance: boolean, msg: TransformNoise): TransformNoise.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformNoise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformNoise;
  static deserializeBinaryFromReader(message: TransformNoise, reader: jspb.BinaryReader): TransformNoise;
}

export namespace TransformNoise {
  export type AsObject = {
    amount: number,
  }
}

export class TransformWarp2d extends jspb.Message {
  getBorderMode(): BorderModeMap[keyof BorderModeMap];
  setBorderMode(value: BorderModeMap[keyof BorderModeMap]): void;

  getRotate(): number;
  setRotate(value: number): void;

  getScale(): number;
  setScale(value: number): void;

  getTranslateX(): number;
  setTranslateX(value: number): void;

  getTranslateY(): number;
  setTranslateY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformWarp2d.AsObject;
  static toObject(includeInstance: boolean, msg: TransformWarp2d): TransformWarp2d.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformWarp2d, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformWarp2d;
  static deserializeBinaryFromReader(message: TransformWarp2d, reader: jspb.BinaryReader): TransformWarp2d;
}

export namespace TransformWarp2d {
  export type AsObject = {
    borderMode: BorderModeMap[keyof BorderModeMap],
    rotate: number,
    scale: number,
    translateX: number,
    translateY: number,
  }
}

export class TransformWarp3d extends jspb.Message {
  getBorderMode(): BorderModeMap[keyof BorderModeMap];
  setBorderMode(value: BorderModeMap[keyof BorderModeMap]): void;

  getSamplingMode(): SamplingModeMap[keyof SamplingModeMap];
  setSamplingMode(value: SamplingModeMap[keyof SamplingModeMap]): void;

  getTranslateX(): number;
  setTranslateX(value: number): void;

  getTranslateY(): number;
  setTranslateY(value: number): void;

  getTranslateZ(): number;
  setTranslateZ(value: number): void;

  getRotateX(): number;
  setRotateX(value: number): void;

  getRotateY(): number;
  setRotateY(value: number): void;

  getRotateZ(): number;
  setRotateZ(value: number): void;

  getNearPlane(): number;
  setNearPlane(value: number): void;

  getFarPlane(): number;
  setFarPlane(value: number): void;

  getFov(): number;
  setFov(value: number): void;

  getMidasWeight(): number;
  setMidasWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformWarp3d.AsObject;
  static toObject(includeInstance: boolean, msg: TransformWarp3d): TransformWarp3d.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformWarp3d, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformWarp3d;
  static deserializeBinaryFromReader(message: TransformWarp3d, reader: jspb.BinaryReader): TransformWarp3d;
}

export namespace TransformWarp3d {
  export type AsObject = {
    borderMode: BorderModeMap[keyof BorderModeMap],
    samplingMode: SamplingModeMap[keyof SamplingModeMap],
    translateX: number,
    translateY: number,
    translateZ: number,
    rotateX: number,
    rotateY: number,
    rotateZ: number,
    nearPlane: number,
    farPlane: number,
    fov: number,
    midasWeight: number,
  }
}

export class TransformWarpFlow extends jspb.Message {
  hasFlowMap(): boolean;
  clearFlowMap(): void;
  getFlowMap(): ImageReference | undefined;
  setFlowMap(value?: ImageReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformWarpFlow.AsObject;
  static toObject(includeInstance: boolean, msg: TransformWarpFlow): TransformWarpFlow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformWarpFlow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformWarpFlow;
  static deserializeBinaryFromReader(message: TransformWarpFlow, reader: jspb.BinaryReader): TransformWarpFlow;
}

export namespace TransformWarpFlow {
  export type AsObject = {
    flowMap?: ImageReference.AsObject,
  }
}

export class Transform extends jspb.Message {
  hasColorMatch(): boolean;
  clearColorMatch(): void;
  getColorMatch(): TransformColorMatch | undefined;
  setColorMatch(value?: TransformColorMatch): void;

  hasNoise(): boolean;
  clearNoise(): void;
  getNoise(): TransformNoise | undefined;
  setNoise(value?: TransformNoise): void;

  hasWarp2d(): boolean;
  clearWarp2d(): void;
  getWarp2d(): TransformWarp2d | undefined;
  setWarp2d(value?: TransformWarp2d): void;

  hasWarp3d(): boolean;
  clearWarp3d(): void;
  getWarp3d(): TransformWarp3d | undefined;
  setWarp3d(value?: TransformWarp3d): void;

  hasWarpFlow(): boolean;
  clearWarpFlow(): void;
  getWarpFlow(): TransformWarpFlow | undefined;
  setWarpFlow(value?: TransformWarpFlow): void;

  getXformCase(): Transform.XformCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transform.AsObject;
  static toObject(includeInstance: boolean, msg: Transform): Transform.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transform;
  static deserializeBinaryFromReader(message: Transform, reader: jspb.BinaryReader): Transform;
}

export namespace Transform {
  export type AsObject = {
    colorMatch?: TransformColorMatch.AsObject,
    noise?: TransformNoise.AsObject,
    warp2d?: TransformWarp2d.AsObject,
    warp3d?: TransformWarp3d.AsObject,
    warpFlow?: TransformWarpFlow.AsObject,
  }

  export enum XformCase {
    XFORM_NOT_SET = 0,
    COLOR_MATCH = 1,
    NOISE = 2,
    WARP2D = 3,
    WARP3D = 4,
    WARP_FLOW = 5,
  }
}

export class Request extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): ImageReference | undefined;
  setImage(value?: ImageReference): void;

  clearTransformsList(): void;
  getTransformsList(): Array<Transform>;
  setTransformsList(value: Array<Transform>): void;
  addTransforms(value?: Transform, index?: number): Transform;

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
    requestId: string,
    image?: ImageReference.AsObject,
    transformsList: Array<Transform.AsObject>,
  }
}

export class Result extends jspb.Message {
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  hasMask(): boolean;
  clearMask(): void;
  getMask(): Uint8Array | string;
  getMask_asU8(): Uint8Array;
  getMask_asB64(): string;
  setMask(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    image: Uint8Array | string,
    mask: Uint8Array | string,
  }
}

export interface BorderModeMap {
  BORDER_REFLECT: 0;
  BORDER_REPLICATE: 1;
  BORDER_WRAP: 2;
  BORDER_ZERO: 3;
}

export const BorderMode: BorderModeMap;

export interface ColorMatchModeMap {
  COLOR_MATCH_NONE: 0;
  COLOR_MATCH_HSV: 1;
  COLOR_MATCH_LAB: 2;
  COLOR_MATCH_RGB: 3;
}

export const ColorMatchMode: ColorMatchModeMap;

export interface SamplingModeMap {
  SAMPLING_BICUBIC: 0;
  SAMPLING_BILINEAR: 1;
  SAMPLING_NEAREST: 2;
}

export const SamplingMode: SamplingModeMap;

