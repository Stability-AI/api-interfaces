// @generated by protoc-gen-es v1.2.0
// @generated from file stability_api/tensors/tensors.proto (package tensors, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum tensors.Dtype
 */
export declare enum Dtype {
  /**
   * @generated from enum value: DT_INVALID = 0;
   */
  DT_INVALID = 0,

  /**
   * @generated from enum value: DT_FLOAT32 = 1;
   */
  DT_FLOAT32 = 1,

  /**
   * @generated from enum value: DT_FLOAT64 = 2;
   */
  DT_FLOAT64 = 2,

  /**
   * @generated from enum value: DT_FLOAT16 = 3;
   */
  DT_FLOAT16 = 3,

  /**
   * @generated from enum value: DT_BFLOAT16 = 4;
   */
  DT_BFLOAT16 = 4,

  /**
   * @generated from enum value: DT_COMPLEX32 = 5;
   */
  DT_COMPLEX32 = 5,

  /**
   * @generated from enum value: DT_COMPLEX64 = 6;
   */
  DT_COMPLEX64 = 6,

  /**
   * @generated from enum value: DT_COMPLEX128 = 7;
   */
  DT_COMPLEX128 = 7,

  /**
   * @generated from enum value: DT_UINT8 = 8;
   */
  DT_UINT8 = 8,

  /**
   * @generated from enum value: DT_INT8 = 9;
   */
  DT_INT8 = 9,

  /**
   * @generated from enum value: DT_INT16 = 10;
   */
  DT_INT16 = 10,

  /**
   * @generated from enum value: DT_INT32 = 11;
   */
  DT_INT32 = 11,

  /**
   * @generated from enum value: DT_INT64 = 12;
   */
  DT_INT64 = 12,

  /**
   * @generated from enum value: DT_BOOL = 13;
   */
  DT_BOOL = 13,

  /**
   * @generated from enum value: DT_QUINT8 = 14;
   */
  DT_QUINT8 = 14,

  /**
   * @generated from enum value: DT_QINT8 = 15;
   */
  DT_QINT8 = 15,

  /**
   * @generated from enum value: DT_QINT32 = 16;
   */
  DT_QINT32 = 16,

  /**
   * @generated from enum value: DT_QUINT4_2 = 17;
   */
  DT_QUINT4_2 = 17,
}

/**
 * @generated from enum tensors.AttributeType
 */
export declare enum AttributeType {
  /**
   * @generated from enum value: AT_PARAMETER = 0;
   */
  AT_PARAMETER = 0,

  /**
   * @generated from enum value: AT_BUFFER = 1;
   */
  AT_BUFFER = 1,
}

/**
 * @generated from message tensors.Tensor
 */
export declare class Tensor extends Message<Tensor> {
  /**
   * @generated from field: tensors.Dtype dtype = 1;
   */
  dtype: Dtype;

  /**
   * @generated from field: repeated int64 shape = 2;
   */
  shape: bigint[];

  /**
   * @generated from field: bytes data = 3;
   */
  data: Uint8Array;

  /**
   * @generated from field: optional tensors.AttributeType attr_type = 4;
   */
  attrType?: AttributeType;

  constructor(data?: PartialMessage<Tensor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tensors.Tensor";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tensor;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tensor;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tensor;

  static equals(a: Tensor | PlainMessage<Tensor> | undefined, b: Tensor | PlainMessage<Tensor> | undefined): boolean;
}

/**
 * @generated from message tensors.Attribute
 */
export declare class Attribute extends Message<Attribute> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from oneof tensors.Attribute.value
   */
  value: {
    /**
     * @generated from field: tensors.Module module = 3;
     */
    value: Module;
    case: "module";
  } | {
    /**
     * @generated from field: tensors.Tensor tensor = 4;
     */
    value: Tensor;
    case: "tensor";
  } | {
    /**
     * @generated from field: string string = 5;
     */
    value: string;
    case: "string";
  } | {
    /**
     * @generated from field: int64 int64 = 6;
     */
    value: bigint;
    case: "int64";
  } | {
    /**
     * @generated from field: float float = 7;
     */
    value: number;
    case: "float";
  } | {
    /**
     * @generated from field: bool bool = 8;
     */
    value: boolean;
    case: "bool";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Attribute>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tensors.Attribute";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attribute;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attribute;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attribute;

  static equals(a: Attribute | PlainMessage<Attribute> | undefined, b: Attribute | PlainMessage<Attribute> | undefined): boolean;
}

/**
 * @generated from message tensors.Module
 */
export declare class Module extends Message<Module> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: repeated string names = 2;
   */
  names: string[];

  /**
   * @generated from field: repeated tensors.Attribute attributes = 3;
   */
  attributes: Attribute[];

  constructor(data?: PartialMessage<Module>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tensors.Module";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
