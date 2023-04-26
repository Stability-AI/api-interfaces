// package: gooseai
// file: finetuning.proto

import * as jspb from "google-protobuf";
import * as dashboard_pb from "./dashboard_pb";
import * as project_pb from "./project_pb";

export class FineTuningModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): dashboard_pb.User | undefined;
  setUser(value?: dashboard_pb.User): void;

  getName(): string;
  setName(value: string): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): FineTuningModeMap[keyof FineTuningModeMap];
  setMode(value: FineTuningModeMap[keyof FineTuningModeMap]): void;

  hasObjectName(): boolean;
  clearObjectName(): void;
  getObjectName(): string;
  setObjectName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getStatus(): FineTuningModelStatusMap[keyof FineTuningModelStatusMap];
  setStatus(value: FineTuningModelStatusMap[keyof FineTuningModelStatusMap]): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FineTuningModel.AsObject;
  static toObject(includeInstance: boolean, msg: FineTuningModel): FineTuningModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FineTuningModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FineTuningModel;
  static deserializeBinaryFromReader(message: FineTuningModel, reader: jspb.BinaryReader): FineTuningModel;
}

export namespace FineTuningModel {
  export type AsObject = {
    id: string,
    user?: dashboard_pb.User.AsObject,
    name: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    duration: number,
    status: FineTuningModelStatusMap[keyof FineTuningModelStatusMap],
    engineId: string,
  }
}

export class CreateFineTuningModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFineTuningModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFineTuningModelResponse): CreateFineTuningModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFineTuningModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFineTuningModelResponse;
  static deserializeBinaryFromReader(message: CreateFineTuningModelResponse, reader: jspb.BinaryReader): CreateFineTuningModelResponse;
}

export namespace CreateFineTuningModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class GetFineTuningModelByIdResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningModelByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningModelByIdResponse): GetFineTuningModelByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningModelByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningModelByIdResponse;
  static deserializeBinaryFromReader(message: GetFineTuningModelByIdResponse, reader: jspb.BinaryReader): GetFineTuningModelByIdResponse;
}

export namespace GetFineTuningModelByIdResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class UpdateFineTuningModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFineTuningModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFineTuningModelResponse): UpdateFineTuningModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFineTuningModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFineTuningModelResponse;
  static deserializeBinaryFromReader(message: UpdateFineTuningModelResponse, reader: jspb.BinaryReader): UpdateFineTuningModelResponse;
}

export namespace UpdateFineTuningModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class DeleteFineTuningModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFineTuningModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFineTuningModelResponse): DeleteFineTuningModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFineTuningModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFineTuningModelResponse;
  static deserializeBinaryFromReader(message: DeleteFineTuningModelResponse, reader: jspb.BinaryReader): DeleteFineTuningModelResponse;
}

export namespace DeleteFineTuningModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class ResubmitFineTuningModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitFineTuningModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitFineTuningModelResponse): ResubmitFineTuningModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResubmitFineTuningModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitFineTuningModelResponse;
  static deserializeBinaryFromReader(message: ResubmitFineTuningModelResponse, reader: jspb.BinaryReader): ResubmitFineTuningModelResponse;
}

export namespace ResubmitFineTuningModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class CreateFineTuningModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): FineTuningModeMap[keyof FineTuningModeMap];
  setMode(value: FineTuningModeMap[keyof FineTuningModeMap]): void;

  hasObjectName(): boolean;
  clearObjectName(): void;
  getObjectName(): string;
  setObjectName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFineTuningModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFineTuningModelRequest): CreateFineTuningModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFineTuningModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFineTuningModelRequest;
  static deserializeBinaryFromReader(message: CreateFineTuningModelRequest, reader: jspb.BinaryReader): CreateFineTuningModelRequest;
}

export namespace CreateFineTuningModelRequest {
  export type AsObject = {
    name: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    engineId: string,
  }
}

export class UpdateFineTuningModelRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): FineTuningModeMap[keyof FineTuningModeMap];
  setMode(value: FineTuningModeMap[keyof FineTuningModeMap]): void;

  hasObjectName(): boolean;
  clearObjectName(): void;
  getObjectName(): string;
  setObjectName(value: string): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getEngineId(): string;
  setEngineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFineTuningModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFineTuningModelRequest): UpdateFineTuningModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFineTuningModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFineTuningModelRequest;
  static deserializeBinaryFromReader(message: UpdateFineTuningModelRequest, reader: jspb.BinaryReader): UpdateFineTuningModelRequest;
}

export namespace UpdateFineTuningModelRequest {
  export type AsObject = {
    id: string,
    name: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    engineId: string,
  }
}

export class GetFineTuningModelByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningModelByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningModelByIdRequest): GetFineTuningModelByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningModelByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningModelByIdRequest;
  static deserializeBinaryFromReader(message: GetFineTuningModelByIdRequest, reader: jspb.BinaryReader): GetFineTuningModelByIdRequest;
}

export namespace GetFineTuningModelByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteFineTuningModelRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFineTuningModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFineTuningModelRequest): DeleteFineTuningModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFineTuningModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFineTuningModelRequest;
  static deserializeBinaryFromReader(message: DeleteFineTuningModelRequest, reader: jspb.BinaryReader): DeleteFineTuningModelRequest;
}

export namespace DeleteFineTuningModelRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningModelStatusRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningModelStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningModelStatusRequest): GetFineTuningModelStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningModelStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningModelStatusRequest;
  static deserializeBinaryFromReader(message: GetFineTuningModelStatusRequest, reader: jspb.BinaryReader): GetFineTuningModelStatusRequest;
}

export namespace GetFineTuningModelStatusRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningModelStatusResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): FineTuningModelStatusMap[keyof FineTuningModelStatusMap];
  setStatus(value: FineTuningModelStatusMap[keyof FineTuningModelStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningModelStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningModelStatusResponse): GetFineTuningModelStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningModelStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningModelStatusResponse;
  static deserializeBinaryFromReader(message: GetFineTuningModelStatusResponse, reader: jspb.BinaryReader): GetFineTuningModelStatusResponse;
}

export namespace GetFineTuningModelStatusResponse {
  export type AsObject = {
    id: string,
    status: FineTuningModelStatusMap[keyof FineTuningModelStatusMap],
  }
}

export class ResubmitFineTuningModelRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitFineTuningModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitFineTuningModelRequest): ResubmitFineTuningModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResubmitFineTuningModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitFineTuningModelRequest;
  static deserializeBinaryFromReader(message: ResubmitFineTuningModelRequest, reader: jspb.BinaryReader): ResubmitFineTuningModelRequest;
}

export namespace ResubmitFineTuningModelRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningModelsByUserIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningModelsByUserIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningModelsByUserIdRequest): GetFineTuningModelsByUserIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningModelsByUserIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningModelsByUserIdRequest;
  static deserializeBinaryFromReader(message: GetFineTuningModelsByUserIdRequest, reader: jspb.BinaryReader): GetFineTuningModelsByUserIdRequest;
}

export namespace GetFineTuningModelsByUserIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningModelsByOrgIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningModelsByOrgIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningModelsByOrgIdRequest): GetFineTuningModelsByOrgIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningModelsByOrgIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningModelsByOrgIdRequest;
  static deserializeBinaryFromReader(message: GetFineTuningModelsByOrgIdRequest, reader: jspb.BinaryReader): GetFineTuningModelsByOrgIdRequest;
}

export namespace GetFineTuningModelsByOrgIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFineTuningModelsByUserIdResponse extends jspb.Message {
  clearModelsList(): void;
  getModelsList(): Array<FineTuningModel>;
  setModelsList(value: Array<FineTuningModel>): void;
  addModels(value?: FineTuningModel, index?: number): FineTuningModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningModelsByUserIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningModelsByUserIdResponse): GetFineTuningModelsByUserIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningModelsByUserIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningModelsByUserIdResponse;
  static deserializeBinaryFromReader(message: GetFineTuningModelsByUserIdResponse, reader: jspb.BinaryReader): GetFineTuningModelsByUserIdResponse;
}

export namespace GetFineTuningModelsByUserIdResponse {
  export type AsObject = {
    modelsList: Array<FineTuningModel.AsObject>,
  }
}

export class GetFineTuningModelsByOrgIdResponse extends jspb.Message {
  clearModelsList(): void;
  getModelsList(): Array<FineTuningModel>;
  setModelsList(value: Array<FineTuningModel>): void;
  addModels(value?: FineTuningModel, index?: number): FineTuningModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFineTuningModelsByOrgIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFineTuningModelsByOrgIdResponse): GetFineTuningModelsByOrgIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFineTuningModelsByOrgIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFineTuningModelsByOrgIdResponse;
  static deserializeBinaryFromReader(message: GetFineTuningModelsByOrgIdResponse, reader: jspb.BinaryReader): GetFineTuningModelsByOrgIdResponse;
}

export namespace GetFineTuningModelsByOrgIdResponse {
  export type AsObject = {
    modelsList: Array<FineTuningModel.AsObject>,
  }
}

export interface FineTuningModeMap {
  FINE_TUNING_MODE_NONE_UNSPECIFIED: 0;
  FINE_TUNING_MODE_FACE: 1;
  FINE_TUNING_MODE_STYLE: 2;
  FINE_TUNING_MODE_OBJECT: 3;
}

export const FineTuningMode: FineTuningModeMap;

export interface FineTuningModelStatusMap {
  FINE_TUNING_MODEL_STATUS_NOT_STARTED_UNSPECIFIED: 0;
  FINE_TUNING_MODEL_STATUS_RUNNING: 1;
  FINE_TUNING_MODEL_STATUS_COMPLETED: 2;
  FINE_TUNING_MODEL_STATUS_FAILED: 3;
  FINE_TUNING_MODEL_STATUS_SUBMITTED: 4;
}

export const FineTuningModelStatus: FineTuningModelStatusMap;

