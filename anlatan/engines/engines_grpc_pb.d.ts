// package: anlatan
// file: engines.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as engines_pb from "./engines_pb";

interface IEnginesServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listEngines: IEnginesServiceService_IListEngines;
}

interface IEnginesServiceService_IListEngines extends grpc.MethodDefinition<engines_pb.ListEnginesRequest, engines_pb.Engines> {
    path: "/anlatan.EnginesService/ListEngines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<engines_pb.ListEnginesRequest>;
    requestDeserialize: grpc.deserialize<engines_pb.ListEnginesRequest>;
    responseSerialize: grpc.serialize<engines_pb.Engines>;
    responseDeserialize: grpc.deserialize<engines_pb.Engines>;
}

export const EnginesServiceService: IEnginesServiceService;

export interface IEnginesServiceServer {
    listEngines: grpc.handleUnaryCall<engines_pb.ListEnginesRequest, engines_pb.Engines>;
}

export interface IEnginesServiceClient {
    listEngines(request: engines_pb.ListEnginesRequest, callback: (error: grpc.ServiceError | null, response: engines_pb.Engines) => void): grpc.ClientUnaryCall;
    listEngines(request: engines_pb.ListEnginesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: engines_pb.Engines) => void): grpc.ClientUnaryCall;
    listEngines(request: engines_pb.ListEnginesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: engines_pb.Engines) => void): grpc.ClientUnaryCall;
}

export class EnginesServiceClient extends grpc.Client implements IEnginesServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listEngines(request: engines_pb.ListEnginesRequest, callback: (error: grpc.ServiceError | null, response: engines_pb.Engines) => void): grpc.ClientUnaryCall;
    public listEngines(request: engines_pb.ListEnginesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: engines_pb.Engines) => void): grpc.ClientUnaryCall;
    public listEngines(request: engines_pb.ListEnginesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: engines_pb.Engines) => void): grpc.ClientUnaryCall;
}
