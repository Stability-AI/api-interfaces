// package: gooseai
// file: finetuning.proto

import * as jspb from "google-protobuf";

export class FineTuningModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

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

  getStatus(): FineTuningStatusMap[keyof FineTuningStatusMap];
  setStatus(value: FineTuningStatusMap[keyof FineTuningStatusMap]): void;

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
    userId: string,
    name: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    duration: number,
    status: FineTuningStatusMap[keyof FineTuningStatusMap],
    engineId: string,
  }
}

export class CreateModelRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): CreateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelRequest): CreateModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelRequest;
  static deserializeBinaryFromReader(message: CreateModelRequest, reader: jspb.BinaryReader): CreateModelRequest;
}

export namespace CreateModelRequest {
  export type AsObject = {
    name: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    engineId: string,
  }
}

export class CreateModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelResponse): CreateModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelResponse;
  static deserializeBinaryFromReader(message: CreateModelResponse, reader: jspb.BinaryReader): CreateModelResponse;
}

export namespace CreateModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class GetModelRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelResponse): GetModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelResponse;
  static deserializeBinaryFromReader(message: GetModelResponse, reader: jspb.BinaryReader): GetModelResponse;
}

export namespace GetModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class UpdateModelRequest extends jspb.Message {
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
  toObject(includeInstance?: boolean): UpdateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelRequest): UpdateModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelRequest;
  static deserializeBinaryFromReader(message: UpdateModelRequest, reader: jspb.BinaryReader): UpdateModelRequest;
}

export namespace UpdateModelRequest {
  export type AsObject = {
    id: string,
    name: string,
    mode: FineTuningModeMap[keyof FineTuningModeMap],
    objectName: string,
    projectId: string,
    engineId: string,
  }
}

export class UpdateModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelResponse): UpdateModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelResponse;
  static deserializeBinaryFromReader(message: UpdateModelResponse, reader: jspb.BinaryReader): UpdateModelResponse;
}

export namespace UpdateModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelResponse): DeleteModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelResponse;
  static deserializeBinaryFromReader(message: DeleteModelResponse, reader: jspb.BinaryReader): DeleteModelResponse;
}

export namespace DeleteModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class ResubmitModelRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitModelRequest): ResubmitModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResubmitModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitModelRequest;
  static deserializeBinaryFromReader(message: ResubmitModelRequest, reader: jspb.BinaryReader): ResubmitModelRequest;
}

export namespace ResubmitModelRequest {
  export type AsObject = {
    id: string,
  }
}

export class ResubmitModelResponse extends jspb.Message {
  hasModel(): boolean;
  clearModel(): void;
  getModel(): FineTuningModel | undefined;
  setModel(value?: FineTuningModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitModelResponse): ResubmitModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResubmitModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitModelResponse;
  static deserializeBinaryFromReader(message: ResubmitModelResponse, reader: jspb.BinaryReader): ResubmitModelResponse;
}

export namespace ResubmitModelResponse {
  export type AsObject = {
    model?: FineTuningModel.AsObject,
  }
}

export class ListModelsRequest extends jspb.Message {
  hasOrgId(): boolean;
  clearOrgId(): void;
  getOrgId(): string;
  setOrgId(value: string): void;

  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): string;
  setUserId(value: string): void;

  getIdCase(): ListModelsRequest.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    orgId: string,
    userId: string,
  }

  export enum IdCase {
    ID_NOT_SET = 0,
    ORG_ID = 1,
    USER_ID = 2,
  }
}

export class ListModelsResponse extends jspb.Message {
  clearModelsList(): void;
  getModelsList(): Array<FineTuningModel>;
  setModelsList(value: Array<FineTuningModel>): void;
  addModels(value?: FineTuningModel, index?: number): FineTuningModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    modelsList: Array<FineTuningModel.AsObject>,
  }
}

export interface FineTuningModeMap {
  FINE_TUNING_MODE_UNSPECIFIED: 0;
  FINE_TUNING_MODE_FACE: 1;
  FINE_TUNING_MODE_STYLE: 2;
  FINE_TUNING_MODE_OBJECT: 3;
}

export const FineTuningMode: FineTuningModeMap;

export interface FineTuningStatusMap {
  FINE_TUNING_STATUS_NOT_STARTED: 0;
  FINE_TUNING_STATUS_RUNNING: 1;
  FINE_TUNING_STATUS_COMPLETED: 2;
  FINE_TUNING_STATUS_FAILED: 3;
  FINE_TUNING_STATUS_SUBMITTED: 4;
}

export const FineTuningStatus: FineTuningStatusMap;

