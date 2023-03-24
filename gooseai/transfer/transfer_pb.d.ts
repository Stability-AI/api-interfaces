// package: gooseai
// file: transfer.proto

import * as jspb from "google-protobuf";

export class TransferRequest extends jspb.Message {
  getSourceBucket(): string;
  setSourceBucket(value: string): void;

  clearSourceKeysList(): void;
  getSourceKeysList(): Array<string>;
  setSourceKeysList(value: Array<string>): void;
  addSourceKeys(value: string, index?: number): string;

  getDestinationBucket(): string;
  setDestinationBucket(value: string): void;

  clearDestinationKeysList(): void;
  getDestinationKeysList(): Array<string>;
  setDestinationKeysList(value: Array<string>): void;
  addDestinationKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRequest): TransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRequest;
  static deserializeBinaryFromReader(message: TransferRequest, reader: jspb.BinaryReader): TransferRequest;
}

export namespace TransferRequest {
  export type AsObject = {
    sourceBucket: string,
    sourceKeysList: Array<string>,
    destinationBucket: string,
    destinationKeysList: Array<string>,
  }
}

export class TransferResponse extends jspb.Message {
  clearUrlsList(): void;
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): void;
  addUrls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResponse): TransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResponse;
  static deserializeBinaryFromReader(message: TransferResponse, reader: jspb.BinaryReader): TransferResponse;
}

export namespace TransferResponse {
  export type AsObject = {
    urlsList: Array<string>,
  }
}

export class DeleteRequest extends jspb.Message {
  getBucket(): string;
  setBucket(value: string): void;

  clearKeysList(): void;
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): void;
  addKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    bucket: string,
    keysList: Array<string>,
  }
}

export class DeleteResponse extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): void;
  addKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    keysList: Array<string>,
  }
}

export class CleanupFineTuningRequest extends jspb.Message {
  getArchivebucket(): string;
  setArchivebucket(value: string): void;

  clearArchivekeysList(): void;
  getArchivekeysList(): Array<string>;
  setArchivekeysList(value: Array<string>): void;
  addArchivekeys(value: string, index?: number): string;

  getProcessingbucket(): string;
  setProcessingbucket(value: string): void;

  getProcessingprefix(): string;
  setProcessingprefix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CleanupFineTuningRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CleanupFineTuningRequest): CleanupFineTuningRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CleanupFineTuningRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CleanupFineTuningRequest;
  static deserializeBinaryFromReader(message: CleanupFineTuningRequest, reader: jspb.BinaryReader): CleanupFineTuningRequest;
}

export namespace CleanupFineTuningRequest {
  export type AsObject = {
    archivebucket: string,
    archivekeysList: Array<string>,
    processingbucket: string,
    processingprefix: string,
  }
}

export class CleanupFineTuningResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CleanupFineTuningResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CleanupFineTuningResponse): CleanupFineTuningResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CleanupFineTuningResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CleanupFineTuningResponse;
  static deserializeBinaryFromReader(message: CleanupFineTuningResponse, reader: jspb.BinaryReader): CleanupFineTuningResponse;
}

export namespace CleanupFineTuningResponse {
  export type AsObject = {
    success: boolean,
  }
}

