// @generated by protoc-gen-es v1.2.0
// @generated from file stability_api/platform/engines/v1/engines.proto (package stabilityai.platformapis.engines.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Possible engine type
 *
 * @generated from enum stabilityai.platformapis.engines.v1.EngineType
 */
export declare enum EngineType {
  /**
   * @generated from enum value: TEXT = 0;
   */
  TEXT = 0,

  /**
   * @generated from enum value: PICTURE = 1;
   */
  PICTURE = 1,

  /**
   * @generated from enum value: AUDIO = 2;
   */
  AUDIO = 2,

  /**
   * @generated from enum value: VIDEO = 3;
   */
  VIDEO = 3,

  /**
   * @generated from enum value: CLASSIFICATION = 4;
   */
  CLASSIFICATION = 4,

  /**
   * @generated from enum value: STORAGE = 5;
   */
  STORAGE = 5,
}

/**
 * @generated from enum stabilityai.platformapis.engines.v1.EngineTokenizer
 */
export declare enum EngineTokenizer {
  /**
   * @generated from enum value: GPT2 = 0;
   */
  GPT2 = 0,

  /**
   * @generated from enum value: PILE = 1;
   */
  PILE = 1,
}

/**
 * Engine info struct
 *
 * @generated from message stabilityai.platformapis.engines.v1.EngineInfo
 */
export declare class EngineInfo extends Message<EngineInfo> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string owner = 2;
   */
  owner: string;

  /**
   * @generated from field: bool ready = 3;
   */
  ready: boolean;

  /**
   * @generated from field: stabilityai.platformapis.engines.v1.EngineType type = 4;
   */
  type: EngineType;

  /**
   * @generated from field: stabilityai.platformapis.engines.v1.EngineTokenizer tokenizer = 5;
   */
  tokenizer: EngineTokenizer;

  /**
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * @generated from field: string description = 7;
   */
  description: string;

  constructor(data?: PartialMessage<EngineInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "stabilityai.platformapis.engines.v1.EngineInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EngineInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EngineInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EngineInfo;

  static equals(a: EngineInfo | PlainMessage<EngineInfo> | undefined, b: EngineInfo | PlainMessage<EngineInfo> | undefined): boolean;
}

/**
 * Empty
 *
 * @generated from message stabilityai.platformapis.engines.v1.ListEnginesRequest
 */
export declare class ListEnginesRequest extends Message<ListEnginesRequest> {
  constructor(data?: PartialMessage<ListEnginesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "stabilityai.platformapis.engines.v1.ListEnginesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEnginesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEnginesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEnginesRequest;

  static equals(a: ListEnginesRequest | PlainMessage<ListEnginesRequest> | undefined, b: ListEnginesRequest | PlainMessage<ListEnginesRequest> | undefined): boolean;
}

/**
 * Engine info list
 *
 * @generated from message stabilityai.platformapis.engines.v1.Engines
 */
export declare class Engines extends Message<Engines> {
  /**
   * @generated from field: repeated stabilityai.platformapis.engines.v1.EngineInfo engine = 1;
   */
  engine: EngineInfo[];

  constructor(data?: PartialMessage<Engines>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "stabilityai.platformapis.engines.v1.Engines";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Engines;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Engines;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Engines;

  static equals(a: Engines | PlainMessage<Engines> | undefined, b: Engines | PlainMessage<Engines> | undefined): boolean;
}
