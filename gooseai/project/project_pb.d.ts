// package: gooseai
// file: project.proto

import * as jspb from "google-protobuf";

export class ProjectAsset extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getUse(): ProjectAssetUseMap[keyof ProjectAssetUseMap];
  setUse(value: ProjectAssetUseMap[keyof ProjectAssetUseMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectAsset.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectAsset): ProjectAsset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectAsset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectAsset;
  static deserializeBinaryFromReader(message: ProjectAsset, reader: jspb.BinaryReader): ProjectAsset;
}

export namespace ProjectAsset {
  export type AsObject = {
    id: string,
    uri: string,
    use: ProjectAssetUseMap[keyof ProjectAssetUseMap],
  }
}

export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getOwnerId(): string;
  setOwnerId(value: string): void;

  getAccess(): ProjectAccessMap[keyof ProjectAccessMap];
  setAccess(value: ProjectAccessMap[keyof ProjectAccessMap]): void;

  getStatus(): ProjectStatusMap[keyof ProjectStatusMap];
  setStatus(value: ProjectStatusMap[keyof ProjectStatusMap]): void;

  getSize(): number;
  setSize(value: number): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): ProjectAsset | undefined;
  setFile(value?: ProjectAsset): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  clearAssetsList(): void;
  getAssetsList(): Array<ProjectAsset>;
  setAssetsList(value: Array<ProjectAsset>): void;
  addAssets(value?: ProjectAsset, index?: number): ProjectAsset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: string,
    title: string,
    ownerId: string,
    access: ProjectAccessMap[keyof ProjectAccessMap],
    status: ProjectStatusMap[keyof ProjectStatusMap],
    size: number,
    file?: ProjectAsset.AsObject,
    createdAt: number,
    updatedAt: number,
    assetsList: Array<ProjectAsset.AsObject>,
  }
}

export class CreateProjectRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): string;
  setOwnerId(value: string): void;

  getAccess(): ProjectAccessMap[keyof ProjectAccessMap];
  setAccess(value: ProjectAccessMap[keyof ProjectAccessMap]): void;

  getStatus(): ProjectStatusMap[keyof ProjectStatusMap];
  setStatus(value: ProjectStatusMap[keyof ProjectStatusMap]): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): ProjectAsset | undefined;
  setFile(value?: ProjectAsset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
  static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
  export type AsObject = {
    title: string,
    ownerId: string,
    access: ProjectAccessMap[keyof ProjectAccessMap],
    status: ProjectStatusMap[keyof ProjectStatusMap],
    file?: ProjectAsset.AsObject,
  }
}

export class UpdateProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): string;
  setOwnerId(value: string): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string;
  setTitle(value: string): void;

  hasAccess(): boolean;
  clearAccess(): void;
  getAccess(): ProjectAccessMap[keyof ProjectAccessMap];
  setAccess(value: ProjectAccessMap[keyof ProjectAccessMap]): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ProjectStatusMap[keyof ProjectStatusMap];
  setStatus(value: ProjectStatusMap[keyof ProjectStatusMap]): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): ProjectAsset | undefined;
  setFile(value?: ProjectAsset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
  export type AsObject = {
    id: string,
    ownerId: string,
    title: string,
    access: ProjectAccessMap[keyof ProjectAccessMap],
    status: ProjectStatusMap[keyof ProjectStatusMap],
    file?: ProjectAsset.AsObject,
  }
}

export class ListProjectRequest extends jspb.Message {
  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): string;
  setOwnerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectRequest): ListProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectRequest;
  static deserializeBinaryFromReader(message: ListProjectRequest, reader: jspb.BinaryReader): ListProjectRequest;
}

export namespace ListProjectRequest {
  export type AsObject = {
    ownerId: string,
  }
}

export class GetProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): string;
  setOwnerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
  static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

export namespace GetProjectRequest {
  export type AsObject = {
    id: string,
    ownerId: string,
  }
}

export class DeleteProjectRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): string;
  setOwnerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectRequest): DeleteProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectRequest;
  static deserializeBinaryFromReader(message: DeleteProjectRequest, reader: jspb.BinaryReader): DeleteProjectRequest;
}

export namespace DeleteProjectRequest {
  export type AsObject = {
    id: string,
    ownerId: string,
  }
}

export interface ProjectAccessMap {
  PROJECT_ACCESS_PRIVATE: 0;
  PROJECT_ACCESS_PUBLIC: 1;
}

export const ProjectAccess: ProjectAccessMap;

export interface ProjectStatusMap {
  PROJECT_STATUS_INACTIVE: 0;
  PROJECT_STATUS_ACTIVE: 1;
  PROJECT_STATUS_DELETED: 2;
}

export const ProjectStatus: ProjectStatusMap;

export interface ProjectAssetUseMap {
  PROJECT_ASSET_USE_UNDEFINED: 0;
  PROJECT_ASSET_USE_INPUT: 1;
  PROJECT_ASSET_USE_OUTPUT: 2;
  PROJECT_ASSET_USE_INTERMEDIATE: 3;
  PROJECT_ASSET_USE_PROJECT: 4;
}

export const ProjectAssetUse: ProjectAssetUseMap;

