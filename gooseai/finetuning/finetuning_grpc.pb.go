// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package finetuning

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// FineTuningServiceClient is the client API for FineTuningService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FineTuningServiceClient interface {
	// Create a new model and begin the fine tuning process
	CreateModel(ctx context.Context, in *CreateModelRequest, opts ...grpc.CallOption) (*CreateModelResponse, error)
	// Get a FineTuningModel
	GetModel(ctx context.Context, in *GetModelRequest, opts ...grpc.CallOption) (*GetModelResponse, error)
	// Update a FineTuningModel by id
	UpdateModel(ctx context.Context, in *UpdateModelRequest, opts ...grpc.CallOption) (*UpdateModelResponse, error)
	// Delete a fine tuned model
	DeleteModel(ctx context.Context, in *DeleteModelRequest, opts ...grpc.CallOption) (*DeleteModelResponse, error)
	// Re-run training, does not create a new model
	ResubmitModel(ctx context.Context, in *ResubmitModelRequest, opts ...grpc.CallOption) (*ResubmitModelResponse, error)
	// List all the fine tuned models for an organization or user
	ListModels(ctx context.Context, in *ListModelsRequest, opts ...grpc.CallOption) (*ListModelsResponse, error)
}

type fineTuningServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFineTuningServiceClient(cc grpc.ClientConnInterface) FineTuningServiceClient {
	return &fineTuningServiceClient{cc}
}

func (c *fineTuningServiceClient) CreateModel(ctx context.Context, in *CreateModelRequest, opts ...grpc.CallOption) (*CreateModelResponse, error) {
	out := new(CreateModelResponse)
	err := c.cc.Invoke(ctx, "/gooseai.FineTuningService/CreateModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fineTuningServiceClient) GetModel(ctx context.Context, in *GetModelRequest, opts ...grpc.CallOption) (*GetModelResponse, error) {
	out := new(GetModelResponse)
	err := c.cc.Invoke(ctx, "/gooseai.FineTuningService/GetModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fineTuningServiceClient) UpdateModel(ctx context.Context, in *UpdateModelRequest, opts ...grpc.CallOption) (*UpdateModelResponse, error) {
	out := new(UpdateModelResponse)
	err := c.cc.Invoke(ctx, "/gooseai.FineTuningService/UpdateModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fineTuningServiceClient) DeleteModel(ctx context.Context, in *DeleteModelRequest, opts ...grpc.CallOption) (*DeleteModelResponse, error) {
	out := new(DeleteModelResponse)
	err := c.cc.Invoke(ctx, "/gooseai.FineTuningService/DeleteModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fineTuningServiceClient) ResubmitModel(ctx context.Context, in *ResubmitModelRequest, opts ...grpc.CallOption) (*ResubmitModelResponse, error) {
	out := new(ResubmitModelResponse)
	err := c.cc.Invoke(ctx, "/gooseai.FineTuningService/ResubmitModel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fineTuningServiceClient) ListModels(ctx context.Context, in *ListModelsRequest, opts ...grpc.CallOption) (*ListModelsResponse, error) {
	out := new(ListModelsResponse)
	err := c.cc.Invoke(ctx, "/gooseai.FineTuningService/ListModels", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FineTuningServiceServer is the server API for FineTuningService service.
// All implementations must embed UnimplementedFineTuningServiceServer
// for forward compatibility
type FineTuningServiceServer interface {
	// Create a new model and begin the fine tuning process
	CreateModel(context.Context, *CreateModelRequest) (*CreateModelResponse, error)
	// Get a FineTuningModel
	GetModel(context.Context, *GetModelRequest) (*GetModelResponse, error)
	// Update a FineTuningModel by id
	UpdateModel(context.Context, *UpdateModelRequest) (*UpdateModelResponse, error)
	// Delete a fine tuned model
	DeleteModel(context.Context, *DeleteModelRequest) (*DeleteModelResponse, error)
	// Re-run training, does not create a new model
	ResubmitModel(context.Context, *ResubmitModelRequest) (*ResubmitModelResponse, error)
	// List all the fine tuned models for an organization or user
	ListModels(context.Context, *ListModelsRequest) (*ListModelsResponse, error)
	mustEmbedUnimplementedFineTuningServiceServer()
}

// UnimplementedFineTuningServiceServer must be embedded to have forward compatible implementations.
type UnimplementedFineTuningServiceServer struct {
}

func (UnimplementedFineTuningServiceServer) CreateModel(context.Context, *CreateModelRequest) (*CreateModelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateModel not implemented")
}
func (UnimplementedFineTuningServiceServer) GetModel(context.Context, *GetModelRequest) (*GetModelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetModel not implemented")
}
func (UnimplementedFineTuningServiceServer) UpdateModel(context.Context, *UpdateModelRequest) (*UpdateModelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateModel not implemented")
}
func (UnimplementedFineTuningServiceServer) DeleteModel(context.Context, *DeleteModelRequest) (*DeleteModelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteModel not implemented")
}
func (UnimplementedFineTuningServiceServer) ResubmitModel(context.Context, *ResubmitModelRequest) (*ResubmitModelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResubmitModel not implemented")
}
func (UnimplementedFineTuningServiceServer) ListModels(context.Context, *ListModelsRequest) (*ListModelsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListModels not implemented")
}
func (UnimplementedFineTuningServiceServer) mustEmbedUnimplementedFineTuningServiceServer() {}

// UnsafeFineTuningServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FineTuningServiceServer will
// result in compilation errors.
type UnsafeFineTuningServiceServer interface {
	mustEmbedUnimplementedFineTuningServiceServer()
}

func RegisterFineTuningServiceServer(s grpc.ServiceRegistrar, srv FineTuningServiceServer) {
	s.RegisterService(&FineTuningService_ServiceDesc, srv)
}

func _FineTuningService_CreateModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FineTuningServiceServer).CreateModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/gooseai.FineTuningService/CreateModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FineTuningServiceServer).CreateModel(ctx, req.(*CreateModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FineTuningService_GetModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FineTuningServiceServer).GetModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/gooseai.FineTuningService/GetModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FineTuningServiceServer).GetModel(ctx, req.(*GetModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FineTuningService_UpdateModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FineTuningServiceServer).UpdateModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/gooseai.FineTuningService/UpdateModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FineTuningServiceServer).UpdateModel(ctx, req.(*UpdateModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FineTuningService_DeleteModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FineTuningServiceServer).DeleteModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/gooseai.FineTuningService/DeleteModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FineTuningServiceServer).DeleteModel(ctx, req.(*DeleteModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FineTuningService_ResubmitModel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResubmitModelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FineTuningServiceServer).ResubmitModel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/gooseai.FineTuningService/ResubmitModel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FineTuningServiceServer).ResubmitModel(ctx, req.(*ResubmitModelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FineTuningService_ListModels_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListModelsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FineTuningServiceServer).ListModels(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/gooseai.FineTuningService/ListModels",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FineTuningServiceServer).ListModels(ctx, req.(*ListModelsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FineTuningService_ServiceDesc is the grpc.ServiceDesc for FineTuningService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FineTuningService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "gooseai.FineTuningService",
	HandlerType: (*FineTuningServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateModel",
			Handler:    _FineTuningService_CreateModel_Handler,
		},
		{
			MethodName: "GetModel",
			Handler:    _FineTuningService_GetModel_Handler,
		},
		{
			MethodName: "UpdateModel",
			Handler:    _FineTuningService_UpdateModel_Handler,
		},
		{
			MethodName: "DeleteModel",
			Handler:    _FineTuningService_DeleteModel_Handler,
		},
		{
			MethodName: "ResubmitModel",
			Handler:    _FineTuningService_ResubmitModel_Handler,
		},
		{
			MethodName: "ListModels",
			Handler:    _FineTuningService_ListModels_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "finetuning.proto",
}
