// package: anlatan
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as auth_pb from "./auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authenticate: IAuthServiceService_IAuthenticate;
}

interface IAuthServiceService_IAuthenticate extends grpc.MethodDefinition<auth_pb.Request, auth_pb.Response> {
    path: "/anlatan.AuthService/Authenticate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.Request>;
    requestDeserialize: grpc.deserialize<auth_pb.Request>;
    responseSerialize: grpc.serialize<auth_pb.Response>;
    responseDeserialize: grpc.deserialize<auth_pb.Response>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    authenticate: grpc.handleUnaryCall<auth_pb.Request, auth_pb.Response>;
}

export interface IAuthServiceClient {
    authenticate(request: auth_pb.Request, callback: (error: grpc.ServiceError | null, response: auth_pb.Response) => void): grpc.ClientUnaryCall;
    authenticate(request: auth_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.Response) => void): grpc.ClientUnaryCall;
    authenticate(request: auth_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.Response) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public authenticate(request: auth_pb.Request, callback: (error: grpc.ServiceError | null, response: auth_pb.Response) => void): grpc.ClientUnaryCall;
    public authenticate(request: auth_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.Response) => void): grpc.ClientUnaryCall;
    public authenticate(request: auth_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.Response) => void): grpc.ClientUnaryCall;
}
