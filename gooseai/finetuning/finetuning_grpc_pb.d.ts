// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: finetuning.proto

import * as finetuning_pb from "./finetuning_pb";
import * as grpc from "grpc";

interface IFineTuningServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createFineTuningJob: grpc.MethodDefinition<finetuning_pb.CreateFineTuningJobRequest, finetuning_pb.FineTuningJob>;
  getFineTuningJobById: grpc.MethodDefinition<finetuning_pb.FineTuningJobRequestById, finetuning_pb.FineTuningJob>;
  updateFineTuningJob: grpc.MethodDefinition<finetuning_pb.UpdateFineTuningJobRequest, finetuning_pb.FineTuningJob>;
  deleteFineTuningJob: grpc.MethodDefinition<finetuning_pb.FineTuningJobRequestById, finetuning_pb.FineTuningJob>;
  getFineTuningJobProgress: grpc.MethodDefinition<finetuning_pb.FineTuningJobRequestById, finetuning_pb.FineTuningJobProgress>;
}

export const FineTuningServiceService: IFineTuningServiceService;

export interface IFineTuningServiceServer extends grpc.UntypedServiceImplementation {
  createFineTuningJob: grpc.handleUnaryCall<finetuning_pb.CreateFineTuningJobRequest, finetuning_pb.FineTuningJob>;
  getFineTuningJobById: grpc.handleUnaryCall<finetuning_pb.FineTuningJobRequestById, finetuning_pb.FineTuningJob>;
  updateFineTuningJob: grpc.handleUnaryCall<finetuning_pb.UpdateFineTuningJobRequest, finetuning_pb.FineTuningJob>;
  deleteFineTuningJob: grpc.handleUnaryCall<finetuning_pb.FineTuningJobRequestById, finetuning_pb.FineTuningJob>;
  getFineTuningJobProgress: grpc.handleUnaryCall<finetuning_pb.FineTuningJobRequestById, finetuning_pb.FineTuningJobProgress>;
}

export class FineTuningServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createFineTuningJob(argument: finetuning_pb.CreateFineTuningJobRequest, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  createFineTuningJob(argument: finetuning_pb.CreateFineTuningJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  createFineTuningJob(argument: finetuning_pb.CreateFineTuningJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  getFineTuningJobById(argument: finetuning_pb.FineTuningJobRequestById, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  getFineTuningJobById(argument: finetuning_pb.FineTuningJobRequestById, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  getFineTuningJobById(argument: finetuning_pb.FineTuningJobRequestById, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  updateFineTuningJob(argument: finetuning_pb.UpdateFineTuningJobRequest, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  updateFineTuningJob(argument: finetuning_pb.UpdateFineTuningJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  updateFineTuningJob(argument: finetuning_pb.UpdateFineTuningJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  deleteFineTuningJob(argument: finetuning_pb.FineTuningJobRequestById, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  deleteFineTuningJob(argument: finetuning_pb.FineTuningJobRequestById, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  deleteFineTuningJob(argument: finetuning_pb.FineTuningJobRequestById, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJob>): grpc.ClientUnaryCall;
  getFineTuningJobProgress(argument: finetuning_pb.FineTuningJobRequestById, callback: grpc.requestCallback<finetuning_pb.FineTuningJobProgress>): grpc.ClientUnaryCall;
  getFineTuningJobProgress(argument: finetuning_pb.FineTuningJobRequestById, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJobProgress>): grpc.ClientUnaryCall;
  getFineTuningJobProgress(argument: finetuning_pb.FineTuningJobRequestById, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<finetuning_pb.FineTuningJobProgress>): grpc.ClientUnaryCall;
}