// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: finetuning.proto

import * as finetuning_pb from "./finetuning_pb";
import * as grpc from "grpc";

interface IFineTuningServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createFineTuningModel: grpc.MethodDefinition<finetuning_pb.CreateFineTuningModelRequest, finetuning_pb.CreateFineTuningModelResponse>;
  getFineTuningModelById: grpc.MethodDefinition<finetuning_pb.GetFineTuningModelByIdRequest, finetuning_pb.GetFineTuningModelByIdResponse>;
  updateFineTuningModel: grpc.MethodDefinition<finetuning_pb.UpdateFineTuningModelRequest, finetuning_pb.UpdateFineTuningModelResponse>;
  deleteFineTuningModel: grpc.MethodDefinition<finetuning_pb.DeleteFineTuningModelRequest, finetuning_pb.DeleteFineTuningModelResponse>;
  getFineTuningModelStatus: grpc.MethodDefinition<finetuning_pb.GetFineTuningModelStatusRequest, finetuning_pb.GetFineTuningModelStatusResponse>;
  resubmitFineTuningModel: grpc.MethodDefinition<finetuning_pb.ResubmitFineTuningModelRequest, finetuning_pb.ResubmitFineTuningModelResponse>;
  getFineTuningModelsByUserId: grpc.MethodDefinition<finetuning_pb.GetFineTuningModelsByUserIdRequest, finetuning_pb.GetFineTuningModelsByUserIdResponse>;
  getFineTuningModelsByOrgId: grpc.MethodDefinition<finetuning_pb.GetFineTuningModelsByOrgIdRequest, finetuning_pb.GetFineTuningModelsByOrgIdResponse>;
}

export const FineTuningServiceService: IFineTuningServiceService;

export interface IFineTuningServiceServer extends grpc.UntypedServiceImplementation {
  createFineTuningModel: grpc.handleUnaryCall<finetuning_pb.CreateFineTuningModelRequest, finetuning_pb.CreateFineTuningModelResponse>;
  getFineTuningModelById: grpc.handleUnaryCall<finetuning_pb.GetFineTuningModelByIdRequest, finetuning_pb.GetFineTuningModelByIdResponse>;
  updateFineTuningModel: grpc.handleUnaryCall<finetuning_pb.UpdateFineTuningModelRequest, finetuning_pb.UpdateFineTuningModelResponse>;
  deleteFineTuningModel: grpc.handleUnaryCall<finetuning_pb.DeleteFineTuningModelRequest, finetuning_pb.DeleteFineTuningModelResponse>;
  getFineTuningModelStatus: grpc.handleUnaryCall<finetuning_pb.GetFineTuningModelStatusRequest, finetuning_pb.GetFineTuningModelStatusResponse>;
  resubmitFineTuningModel: grpc.handleUnaryCall<finetuning_pb.ResubmitFineTuningModelRequest, finetuning_pb.ResubmitFineTuningModelResponse>;
  getFineTuningModelsByUserId: grpc.handleUnaryCall<finetuning_pb.GetFineTuningModelsByUserIdRequest, finetuning_pb.GetFineTuningModelsByUserIdResponse>;
  getFineTuningModelsByOrgId: grpc.handleUnaryCall<finetuning_pb.GetFineTuningModelsByOrgIdRequest, finetuning_pb.GetFineTuningModelsByOrgIdResponse>;
}

export class FineTuningServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createFineTuningModel(argument: finetuning_pb.CreateFineTuningModelRequest, callback: grpc.requestCallback<finetuning_pb.CreateFineTuningModelResponse>): grpc.ClientUnaryCall;
  createFineTuningModel(argument: finetuning_pb.CreateFineTuningModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.CreateFineTuningModelResponse>): grpc.ClientUnaryCall;
  createFineTuningModel(argument: finetuning_pb.CreateFineTuningModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.CreateFineTuningModelResponse>): grpc.ClientUnaryCall;
  getFineTuningModelById(argument: finetuning_pb.GetFineTuningModelByIdRequest, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelByIdResponse>): grpc.ClientUnaryCall;
  getFineTuningModelById(argument: finetuning_pb.GetFineTuningModelByIdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelByIdResponse>): grpc.ClientUnaryCall;
  getFineTuningModelById(argument: finetuning_pb.GetFineTuningModelByIdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelByIdResponse>): grpc.ClientUnaryCall;
  updateFineTuningModel(argument: finetuning_pb.UpdateFineTuningModelRequest, callback: grpc.requestCallback<finetuning_pb.UpdateFineTuningModelResponse>): grpc.ClientUnaryCall;
  updateFineTuningModel(argument: finetuning_pb.UpdateFineTuningModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.UpdateFineTuningModelResponse>): grpc.ClientUnaryCall;
  updateFineTuningModel(argument: finetuning_pb.UpdateFineTuningModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.UpdateFineTuningModelResponse>): grpc.ClientUnaryCall;
  deleteFineTuningModel(argument: finetuning_pb.DeleteFineTuningModelRequest, callback: grpc.requestCallback<finetuning_pb.DeleteFineTuningModelResponse>): grpc.ClientUnaryCall;
  deleteFineTuningModel(argument: finetuning_pb.DeleteFineTuningModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.DeleteFineTuningModelResponse>): grpc.ClientUnaryCall;
  deleteFineTuningModel(argument: finetuning_pb.DeleteFineTuningModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.DeleteFineTuningModelResponse>): grpc.ClientUnaryCall;
  getFineTuningModelStatus(argument: finetuning_pb.GetFineTuningModelStatusRequest, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelStatusResponse>): grpc.ClientUnaryCall;
  getFineTuningModelStatus(argument: finetuning_pb.GetFineTuningModelStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelStatusResponse>): grpc.ClientUnaryCall;
  getFineTuningModelStatus(argument: finetuning_pb.GetFineTuningModelStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelStatusResponse>): grpc.ClientUnaryCall;
  resubmitFineTuningModel(argument: finetuning_pb.ResubmitFineTuningModelRequest, callback: grpc.requestCallback<finetuning_pb.ResubmitFineTuningModelResponse>): grpc.ClientUnaryCall;
  resubmitFineTuningModel(argument: finetuning_pb.ResubmitFineTuningModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.ResubmitFineTuningModelResponse>): grpc.ClientUnaryCall;
  resubmitFineTuningModel(argument: finetuning_pb.ResubmitFineTuningModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.ResubmitFineTuningModelResponse>): grpc.ClientUnaryCall;
  getFineTuningModelsByUserId(argument: finetuning_pb.GetFineTuningModelsByUserIdRequest, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelsByUserIdResponse>): grpc.ClientUnaryCall;
  getFineTuningModelsByUserId(argument: finetuning_pb.GetFineTuningModelsByUserIdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelsByUserIdResponse>): grpc.ClientUnaryCall;
  getFineTuningModelsByUserId(argument: finetuning_pb.GetFineTuningModelsByUserIdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelsByUserIdResponse>): grpc.ClientUnaryCall;
  getFineTuningModelsByOrgId(argument: finetuning_pb.GetFineTuningModelsByOrgIdRequest, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelsByOrgIdResponse>): grpc.ClientUnaryCall;
  getFineTuningModelsByOrgId(argument: finetuning_pb.GetFineTuningModelsByOrgIdRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelsByOrgIdResponse>): grpc.ClientUnaryCall;
  getFineTuningModelsByOrgId(argument: finetuning_pb.GetFineTuningModelsByOrgIdRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.GetFineTuningModelsByOrgIdResponse>): grpc.ClientUnaryCall;
}
