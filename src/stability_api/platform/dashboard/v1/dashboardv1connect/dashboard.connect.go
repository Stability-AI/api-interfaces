// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: stability_api/platform/dashboard/v1/dashboard.proto

package dashboardv1connect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/stability-ai/api-interfaces/src/stability_api/platform/dashboard/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_1_0

const (
	// DashboardServiceName is the fully-qualified name of the DashboardService service.
	DashboardServiceName = "stabilityai.api.dashboard.v1.DashboardService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// DashboardServiceGetMeProcedure is the fully-qualified name of the DashboardService's GetMe RPC.
	DashboardServiceGetMeProcedure = "/stabilityai.api.dashboard.v1.DashboardService/GetMe"
	// DashboardServiceGetOrganizationProcedure is the fully-qualified name of the DashboardService's
	// GetOrganization RPC.
	DashboardServiceGetOrganizationProcedure = "/stabilityai.api.dashboard.v1.DashboardService/GetOrganization"
	// DashboardServiceGetMetricsProcedure is the fully-qualified name of the DashboardService's
	// GetMetrics RPC.
	DashboardServiceGetMetricsProcedure = "/stabilityai.api.dashboard.v1.DashboardService/GetMetrics"
	// DashboardServiceCreateAPIKeyProcedure is the fully-qualified name of the DashboardService's
	// CreateAPIKey RPC.
	DashboardServiceCreateAPIKeyProcedure = "/stabilityai.api.dashboard.v1.DashboardService/CreateAPIKey"
	// DashboardServiceDeleteAPIKeyProcedure is the fully-qualified name of the DashboardService's
	// DeleteAPIKey RPC.
	DashboardServiceDeleteAPIKeyProcedure = "/stabilityai.api.dashboard.v1.DashboardService/DeleteAPIKey"
	// DashboardServiceUpdateDefaultOrganizationProcedure is the fully-qualified name of the
	// DashboardService's UpdateDefaultOrganization RPC.
	DashboardServiceUpdateDefaultOrganizationProcedure = "/stabilityai.api.dashboard.v1.DashboardService/UpdateDefaultOrganization"
	// DashboardServiceGetClientSettingsProcedure is the fully-qualified name of the DashboardService's
	// GetClientSettings RPC.
	DashboardServiceGetClientSettingsProcedure = "/stabilityai.api.dashboard.v1.DashboardService/GetClientSettings"
	// DashboardServiceSetClientSettingsProcedure is the fully-qualified name of the DashboardService's
	// SetClientSettings RPC.
	DashboardServiceSetClientSettingsProcedure = "/stabilityai.api.dashboard.v1.DashboardService/SetClientSettings"
	// DashboardServiceUpdateUserInfoProcedure is the fully-qualified name of the DashboardService's
	// UpdateUserInfo RPC.
	DashboardServiceUpdateUserInfoProcedure = "/stabilityai.api.dashboard.v1.DashboardService/UpdateUserInfo"
	// DashboardServiceCreatePasswordChangeTicketProcedure is the fully-qualified name of the
	// DashboardService's CreatePasswordChangeTicket RPC.
	DashboardServiceCreatePasswordChangeTicketProcedure = "/stabilityai.api.dashboard.v1.DashboardService/CreatePasswordChangeTicket"
	// DashboardServiceDeleteAccountProcedure is the fully-qualified name of the DashboardService's
	// DeleteAccount RPC.
	DashboardServiceDeleteAccountProcedure = "/stabilityai.api.dashboard.v1.DashboardService/DeleteAccount"
	// DashboardServiceCreateChargeProcedure is the fully-qualified name of the DashboardService's
	// CreateCharge RPC.
	DashboardServiceCreateChargeProcedure = "/stabilityai.api.dashboard.v1.DashboardService/CreateCharge"
	// DashboardServiceGetChargesProcedure is the fully-qualified name of the DashboardService's
	// GetCharges RPC.
	DashboardServiceGetChargesProcedure = "/stabilityai.api.dashboard.v1.DashboardService/GetCharges"
	// DashboardServiceCreateAutoChargeIntentProcedure is the fully-qualified name of the
	// DashboardService's CreateAutoChargeIntent RPC.
	DashboardServiceCreateAutoChargeIntentProcedure = "/stabilityai.api.dashboard.v1.DashboardService/CreateAutoChargeIntent"
	// DashboardServiceUpdateAutoChargeIntentProcedure is the fully-qualified name of the
	// DashboardService's UpdateAutoChargeIntent RPC.
	DashboardServiceUpdateAutoChargeIntentProcedure = "/stabilityai.api.dashboard.v1.DashboardService/UpdateAutoChargeIntent"
	// DashboardServiceGetAutoChargeIntentProcedure is the fully-qualified name of the
	// DashboardService's GetAutoChargeIntent RPC.
	DashboardServiceGetAutoChargeIntentProcedure = "/stabilityai.api.dashboard.v1.DashboardService/GetAutoChargeIntent"
)

// DashboardServiceClient is a client for the stabilityai.api.dashboard.v1.DashboardService service.
type DashboardServiceClient interface {
	// Get info
	GetMe(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.User], error)
	GetOrganization(context.Context, *connect_go.Request[v1.GetOrganizationRequest]) (*connect_go.Response[v1.Organization], error)
	GetMetrics(context.Context, *connect_go.Request[v1.GetMetricsRequest]) (*connect_go.Response[v1.Metrics], error)
	// API key management
	CreateAPIKey(context.Context, *connect_go.Request[v1.APIKeyRequest]) (*connect_go.Response[v1.APIKey], error)
	DeleteAPIKey(context.Context, *connect_go.Request[v1.APIKeyFindRequest]) (*connect_go.Response[v1.APIKey], error)
	// User settings
	UpdateDefaultOrganization(context.Context, *connect_go.Request[v1.UpdateDefaultOrganizationRequest]) (*connect_go.Response[v1.User], error)
	GetClientSettings(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.ClientSettings], error)
	SetClientSettings(context.Context, *connect_go.Request[v1.ClientSettings]) (*connect_go.Response[v1.ClientSettings], error)
	UpdateUserInfo(context.Context, *connect_go.Request[v1.UpdateUserInfoRequest]) (*connect_go.Response[v1.User], error)
	CreatePasswordChangeTicket(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.UserPasswordChangeTicket], error)
	DeleteAccount(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.User], error)
	// Payment functions
	CreateCharge(context.Context, *connect_go.Request[v1.CreateChargeRequest]) (*connect_go.Response[v1.Charge], error)
	GetCharges(context.Context, *connect_go.Request[v1.GetChargesRequest]) (*connect_go.Response[v1.Charges], error)
	CreateAutoChargeIntent(context.Context, *connect_go.Request[v1.CreateAutoChargeIntentRequest]) (*connect_go.Response[v1.AutoChargeIntent], error)
	UpdateAutoChargeIntent(context.Context, *connect_go.Request[v1.CreateAutoChargeIntentRequest]) (*connect_go.Response[v1.AutoChargeIntent], error)
	GetAutoChargeIntent(context.Context, *connect_go.Request[v1.GetAutoChargeRequest]) (*connect_go.Response[v1.AutoChargeIntent], error)
}

// NewDashboardServiceClient constructs a client for the
// stabilityai.api.dashboard.v1.DashboardService service. By default, it uses the Connect protocol
// with the binary Protobuf Codec, asks for gzipped responses, and sends uncompressed requests. To
// use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or connect.WithGRPCWeb()
// options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewDashboardServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) DashboardServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &dashboardServiceClient{
		getMe: connect_go.NewClient[v1.EmptyRequest, v1.User](
			httpClient,
			baseURL+DashboardServiceGetMeProcedure,
			opts...,
		),
		getOrganization: connect_go.NewClient[v1.GetOrganizationRequest, v1.Organization](
			httpClient,
			baseURL+DashboardServiceGetOrganizationProcedure,
			opts...,
		),
		getMetrics: connect_go.NewClient[v1.GetMetricsRequest, v1.Metrics](
			httpClient,
			baseURL+DashboardServiceGetMetricsProcedure,
			opts...,
		),
		createAPIKey: connect_go.NewClient[v1.APIKeyRequest, v1.APIKey](
			httpClient,
			baseURL+DashboardServiceCreateAPIKeyProcedure,
			opts...,
		),
		deleteAPIKey: connect_go.NewClient[v1.APIKeyFindRequest, v1.APIKey](
			httpClient,
			baseURL+DashboardServiceDeleteAPIKeyProcedure,
			opts...,
		),
		updateDefaultOrganization: connect_go.NewClient[v1.UpdateDefaultOrganizationRequest, v1.User](
			httpClient,
			baseURL+DashboardServiceUpdateDefaultOrganizationProcedure,
			opts...,
		),
		getClientSettings: connect_go.NewClient[v1.EmptyRequest, v1.ClientSettings](
			httpClient,
			baseURL+DashboardServiceGetClientSettingsProcedure,
			opts...,
		),
		setClientSettings: connect_go.NewClient[v1.ClientSettings, v1.ClientSettings](
			httpClient,
			baseURL+DashboardServiceSetClientSettingsProcedure,
			opts...,
		),
		updateUserInfo: connect_go.NewClient[v1.UpdateUserInfoRequest, v1.User](
			httpClient,
			baseURL+DashboardServiceUpdateUserInfoProcedure,
			opts...,
		),
		createPasswordChangeTicket: connect_go.NewClient[v1.EmptyRequest, v1.UserPasswordChangeTicket](
			httpClient,
			baseURL+DashboardServiceCreatePasswordChangeTicketProcedure,
			opts...,
		),
		deleteAccount: connect_go.NewClient[v1.EmptyRequest, v1.User](
			httpClient,
			baseURL+DashboardServiceDeleteAccountProcedure,
			opts...,
		),
		createCharge: connect_go.NewClient[v1.CreateChargeRequest, v1.Charge](
			httpClient,
			baseURL+DashboardServiceCreateChargeProcedure,
			opts...,
		),
		getCharges: connect_go.NewClient[v1.GetChargesRequest, v1.Charges](
			httpClient,
			baseURL+DashboardServiceGetChargesProcedure,
			opts...,
		),
		createAutoChargeIntent: connect_go.NewClient[v1.CreateAutoChargeIntentRequest, v1.AutoChargeIntent](
			httpClient,
			baseURL+DashboardServiceCreateAutoChargeIntentProcedure,
			opts...,
		),
		updateAutoChargeIntent: connect_go.NewClient[v1.CreateAutoChargeIntentRequest, v1.AutoChargeIntent](
			httpClient,
			baseURL+DashboardServiceUpdateAutoChargeIntentProcedure,
			opts...,
		),
		getAutoChargeIntent: connect_go.NewClient[v1.GetAutoChargeRequest, v1.AutoChargeIntent](
			httpClient,
			baseURL+DashboardServiceGetAutoChargeIntentProcedure,
			opts...,
		),
	}
}

// dashboardServiceClient implements DashboardServiceClient.
type dashboardServiceClient struct {
	getMe                      *connect_go.Client[v1.EmptyRequest, v1.User]
	getOrganization            *connect_go.Client[v1.GetOrganizationRequest, v1.Organization]
	getMetrics                 *connect_go.Client[v1.GetMetricsRequest, v1.Metrics]
	createAPIKey               *connect_go.Client[v1.APIKeyRequest, v1.APIKey]
	deleteAPIKey               *connect_go.Client[v1.APIKeyFindRequest, v1.APIKey]
	updateDefaultOrganization  *connect_go.Client[v1.UpdateDefaultOrganizationRequest, v1.User]
	getClientSettings          *connect_go.Client[v1.EmptyRequest, v1.ClientSettings]
	setClientSettings          *connect_go.Client[v1.ClientSettings, v1.ClientSettings]
	updateUserInfo             *connect_go.Client[v1.UpdateUserInfoRequest, v1.User]
	createPasswordChangeTicket *connect_go.Client[v1.EmptyRequest, v1.UserPasswordChangeTicket]
	deleteAccount              *connect_go.Client[v1.EmptyRequest, v1.User]
	createCharge               *connect_go.Client[v1.CreateChargeRequest, v1.Charge]
	getCharges                 *connect_go.Client[v1.GetChargesRequest, v1.Charges]
	createAutoChargeIntent     *connect_go.Client[v1.CreateAutoChargeIntentRequest, v1.AutoChargeIntent]
	updateAutoChargeIntent     *connect_go.Client[v1.CreateAutoChargeIntentRequest, v1.AutoChargeIntent]
	getAutoChargeIntent        *connect_go.Client[v1.GetAutoChargeRequest, v1.AutoChargeIntent]
}

// GetMe calls stabilityai.api.dashboard.v1.DashboardService.GetMe.
func (c *dashboardServiceClient) GetMe(ctx context.Context, req *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.User], error) {
	return c.getMe.CallUnary(ctx, req)
}

// GetOrganization calls stabilityai.api.dashboard.v1.DashboardService.GetOrganization.
func (c *dashboardServiceClient) GetOrganization(ctx context.Context, req *connect_go.Request[v1.GetOrganizationRequest]) (*connect_go.Response[v1.Organization], error) {
	return c.getOrganization.CallUnary(ctx, req)
}

// GetMetrics calls stabilityai.api.dashboard.v1.DashboardService.GetMetrics.
func (c *dashboardServiceClient) GetMetrics(ctx context.Context, req *connect_go.Request[v1.GetMetricsRequest]) (*connect_go.Response[v1.Metrics], error) {
	return c.getMetrics.CallUnary(ctx, req)
}

// CreateAPIKey calls stabilityai.api.dashboard.v1.DashboardService.CreateAPIKey.
func (c *dashboardServiceClient) CreateAPIKey(ctx context.Context, req *connect_go.Request[v1.APIKeyRequest]) (*connect_go.Response[v1.APIKey], error) {
	return c.createAPIKey.CallUnary(ctx, req)
}

// DeleteAPIKey calls stabilityai.api.dashboard.v1.DashboardService.DeleteAPIKey.
func (c *dashboardServiceClient) DeleteAPIKey(ctx context.Context, req *connect_go.Request[v1.APIKeyFindRequest]) (*connect_go.Response[v1.APIKey], error) {
	return c.deleteAPIKey.CallUnary(ctx, req)
}

// UpdateDefaultOrganization calls
// stabilityai.api.dashboard.v1.DashboardService.UpdateDefaultOrganization.
func (c *dashboardServiceClient) UpdateDefaultOrganization(ctx context.Context, req *connect_go.Request[v1.UpdateDefaultOrganizationRequest]) (*connect_go.Response[v1.User], error) {
	return c.updateDefaultOrganization.CallUnary(ctx, req)
}

// GetClientSettings calls stabilityai.api.dashboard.v1.DashboardService.GetClientSettings.
func (c *dashboardServiceClient) GetClientSettings(ctx context.Context, req *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.ClientSettings], error) {
	return c.getClientSettings.CallUnary(ctx, req)
}

// SetClientSettings calls stabilityai.api.dashboard.v1.DashboardService.SetClientSettings.
func (c *dashboardServiceClient) SetClientSettings(ctx context.Context, req *connect_go.Request[v1.ClientSettings]) (*connect_go.Response[v1.ClientSettings], error) {
	return c.setClientSettings.CallUnary(ctx, req)
}

// UpdateUserInfo calls stabilityai.api.dashboard.v1.DashboardService.UpdateUserInfo.
func (c *dashboardServiceClient) UpdateUserInfo(ctx context.Context, req *connect_go.Request[v1.UpdateUserInfoRequest]) (*connect_go.Response[v1.User], error) {
	return c.updateUserInfo.CallUnary(ctx, req)
}

// CreatePasswordChangeTicket calls
// stabilityai.api.dashboard.v1.DashboardService.CreatePasswordChangeTicket.
func (c *dashboardServiceClient) CreatePasswordChangeTicket(ctx context.Context, req *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.UserPasswordChangeTicket], error) {
	return c.createPasswordChangeTicket.CallUnary(ctx, req)
}

// DeleteAccount calls stabilityai.api.dashboard.v1.DashboardService.DeleteAccount.
func (c *dashboardServiceClient) DeleteAccount(ctx context.Context, req *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.User], error) {
	return c.deleteAccount.CallUnary(ctx, req)
}

// CreateCharge calls stabilityai.api.dashboard.v1.DashboardService.CreateCharge.
func (c *dashboardServiceClient) CreateCharge(ctx context.Context, req *connect_go.Request[v1.CreateChargeRequest]) (*connect_go.Response[v1.Charge], error) {
	return c.createCharge.CallUnary(ctx, req)
}

// GetCharges calls stabilityai.api.dashboard.v1.DashboardService.GetCharges.
func (c *dashboardServiceClient) GetCharges(ctx context.Context, req *connect_go.Request[v1.GetChargesRequest]) (*connect_go.Response[v1.Charges], error) {
	return c.getCharges.CallUnary(ctx, req)
}

// CreateAutoChargeIntent calls
// stabilityai.api.dashboard.v1.DashboardService.CreateAutoChargeIntent.
func (c *dashboardServiceClient) CreateAutoChargeIntent(ctx context.Context, req *connect_go.Request[v1.CreateAutoChargeIntentRequest]) (*connect_go.Response[v1.AutoChargeIntent], error) {
	return c.createAutoChargeIntent.CallUnary(ctx, req)
}

// UpdateAutoChargeIntent calls
// stabilityai.api.dashboard.v1.DashboardService.UpdateAutoChargeIntent.
func (c *dashboardServiceClient) UpdateAutoChargeIntent(ctx context.Context, req *connect_go.Request[v1.CreateAutoChargeIntentRequest]) (*connect_go.Response[v1.AutoChargeIntent], error) {
	return c.updateAutoChargeIntent.CallUnary(ctx, req)
}

// GetAutoChargeIntent calls stabilityai.api.dashboard.v1.DashboardService.GetAutoChargeIntent.
func (c *dashboardServiceClient) GetAutoChargeIntent(ctx context.Context, req *connect_go.Request[v1.GetAutoChargeRequest]) (*connect_go.Response[v1.AutoChargeIntent], error) {
	return c.getAutoChargeIntent.CallUnary(ctx, req)
}

// DashboardServiceHandler is an implementation of the stabilityai.api.dashboard.v1.DashboardService
// service.
type DashboardServiceHandler interface {
	// Get info
	GetMe(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.User], error)
	GetOrganization(context.Context, *connect_go.Request[v1.GetOrganizationRequest]) (*connect_go.Response[v1.Organization], error)
	GetMetrics(context.Context, *connect_go.Request[v1.GetMetricsRequest]) (*connect_go.Response[v1.Metrics], error)
	// API key management
	CreateAPIKey(context.Context, *connect_go.Request[v1.APIKeyRequest]) (*connect_go.Response[v1.APIKey], error)
	DeleteAPIKey(context.Context, *connect_go.Request[v1.APIKeyFindRequest]) (*connect_go.Response[v1.APIKey], error)
	// User settings
	UpdateDefaultOrganization(context.Context, *connect_go.Request[v1.UpdateDefaultOrganizationRequest]) (*connect_go.Response[v1.User], error)
	GetClientSettings(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.ClientSettings], error)
	SetClientSettings(context.Context, *connect_go.Request[v1.ClientSettings]) (*connect_go.Response[v1.ClientSettings], error)
	UpdateUserInfo(context.Context, *connect_go.Request[v1.UpdateUserInfoRequest]) (*connect_go.Response[v1.User], error)
	CreatePasswordChangeTicket(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.UserPasswordChangeTicket], error)
	DeleteAccount(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.User], error)
	// Payment functions
	CreateCharge(context.Context, *connect_go.Request[v1.CreateChargeRequest]) (*connect_go.Response[v1.Charge], error)
	GetCharges(context.Context, *connect_go.Request[v1.GetChargesRequest]) (*connect_go.Response[v1.Charges], error)
	CreateAutoChargeIntent(context.Context, *connect_go.Request[v1.CreateAutoChargeIntentRequest]) (*connect_go.Response[v1.AutoChargeIntent], error)
	UpdateAutoChargeIntent(context.Context, *connect_go.Request[v1.CreateAutoChargeIntentRequest]) (*connect_go.Response[v1.AutoChargeIntent], error)
	GetAutoChargeIntent(context.Context, *connect_go.Request[v1.GetAutoChargeRequest]) (*connect_go.Response[v1.AutoChargeIntent], error)
}

// NewDashboardServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewDashboardServiceHandler(svc DashboardServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle(DashboardServiceGetMeProcedure, connect_go.NewUnaryHandler(
		DashboardServiceGetMeProcedure,
		svc.GetMe,
		opts...,
	))
	mux.Handle(DashboardServiceGetOrganizationProcedure, connect_go.NewUnaryHandler(
		DashboardServiceGetOrganizationProcedure,
		svc.GetOrganization,
		opts...,
	))
	mux.Handle(DashboardServiceGetMetricsProcedure, connect_go.NewUnaryHandler(
		DashboardServiceGetMetricsProcedure,
		svc.GetMetrics,
		opts...,
	))
	mux.Handle(DashboardServiceCreateAPIKeyProcedure, connect_go.NewUnaryHandler(
		DashboardServiceCreateAPIKeyProcedure,
		svc.CreateAPIKey,
		opts...,
	))
	mux.Handle(DashboardServiceDeleteAPIKeyProcedure, connect_go.NewUnaryHandler(
		DashboardServiceDeleteAPIKeyProcedure,
		svc.DeleteAPIKey,
		opts...,
	))
	mux.Handle(DashboardServiceUpdateDefaultOrganizationProcedure, connect_go.NewUnaryHandler(
		DashboardServiceUpdateDefaultOrganizationProcedure,
		svc.UpdateDefaultOrganization,
		opts...,
	))
	mux.Handle(DashboardServiceGetClientSettingsProcedure, connect_go.NewUnaryHandler(
		DashboardServiceGetClientSettingsProcedure,
		svc.GetClientSettings,
		opts...,
	))
	mux.Handle(DashboardServiceSetClientSettingsProcedure, connect_go.NewUnaryHandler(
		DashboardServiceSetClientSettingsProcedure,
		svc.SetClientSettings,
		opts...,
	))
	mux.Handle(DashboardServiceUpdateUserInfoProcedure, connect_go.NewUnaryHandler(
		DashboardServiceUpdateUserInfoProcedure,
		svc.UpdateUserInfo,
		opts...,
	))
	mux.Handle(DashboardServiceCreatePasswordChangeTicketProcedure, connect_go.NewUnaryHandler(
		DashboardServiceCreatePasswordChangeTicketProcedure,
		svc.CreatePasswordChangeTicket,
		opts...,
	))
	mux.Handle(DashboardServiceDeleteAccountProcedure, connect_go.NewUnaryHandler(
		DashboardServiceDeleteAccountProcedure,
		svc.DeleteAccount,
		opts...,
	))
	mux.Handle(DashboardServiceCreateChargeProcedure, connect_go.NewUnaryHandler(
		DashboardServiceCreateChargeProcedure,
		svc.CreateCharge,
		opts...,
	))
	mux.Handle(DashboardServiceGetChargesProcedure, connect_go.NewUnaryHandler(
		DashboardServiceGetChargesProcedure,
		svc.GetCharges,
		opts...,
	))
	mux.Handle(DashboardServiceCreateAutoChargeIntentProcedure, connect_go.NewUnaryHandler(
		DashboardServiceCreateAutoChargeIntentProcedure,
		svc.CreateAutoChargeIntent,
		opts...,
	))
	mux.Handle(DashboardServiceUpdateAutoChargeIntentProcedure, connect_go.NewUnaryHandler(
		DashboardServiceUpdateAutoChargeIntentProcedure,
		svc.UpdateAutoChargeIntent,
		opts...,
	))
	mux.Handle(DashboardServiceGetAutoChargeIntentProcedure, connect_go.NewUnaryHandler(
		DashboardServiceGetAutoChargeIntentProcedure,
		svc.GetAutoChargeIntent,
		opts...,
	))
	return "/stabilityai.api.dashboard.v1.DashboardService/", mux
}

// UnimplementedDashboardServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedDashboardServiceHandler struct{}

func (UnimplementedDashboardServiceHandler) GetMe(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.User], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.GetMe is not implemented"))
}

func (UnimplementedDashboardServiceHandler) GetOrganization(context.Context, *connect_go.Request[v1.GetOrganizationRequest]) (*connect_go.Response[v1.Organization], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.GetOrganization is not implemented"))
}

func (UnimplementedDashboardServiceHandler) GetMetrics(context.Context, *connect_go.Request[v1.GetMetricsRequest]) (*connect_go.Response[v1.Metrics], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.GetMetrics is not implemented"))
}

func (UnimplementedDashboardServiceHandler) CreateAPIKey(context.Context, *connect_go.Request[v1.APIKeyRequest]) (*connect_go.Response[v1.APIKey], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.CreateAPIKey is not implemented"))
}

func (UnimplementedDashboardServiceHandler) DeleteAPIKey(context.Context, *connect_go.Request[v1.APIKeyFindRequest]) (*connect_go.Response[v1.APIKey], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.DeleteAPIKey is not implemented"))
}

func (UnimplementedDashboardServiceHandler) UpdateDefaultOrganization(context.Context, *connect_go.Request[v1.UpdateDefaultOrganizationRequest]) (*connect_go.Response[v1.User], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.UpdateDefaultOrganization is not implemented"))
}

func (UnimplementedDashboardServiceHandler) GetClientSettings(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.ClientSettings], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.GetClientSettings is not implemented"))
}

func (UnimplementedDashboardServiceHandler) SetClientSettings(context.Context, *connect_go.Request[v1.ClientSettings]) (*connect_go.Response[v1.ClientSettings], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.SetClientSettings is not implemented"))
}

func (UnimplementedDashboardServiceHandler) UpdateUserInfo(context.Context, *connect_go.Request[v1.UpdateUserInfoRequest]) (*connect_go.Response[v1.User], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.UpdateUserInfo is not implemented"))
}

func (UnimplementedDashboardServiceHandler) CreatePasswordChangeTicket(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.UserPasswordChangeTicket], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.CreatePasswordChangeTicket is not implemented"))
}

func (UnimplementedDashboardServiceHandler) DeleteAccount(context.Context, *connect_go.Request[v1.EmptyRequest]) (*connect_go.Response[v1.User], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.DeleteAccount is not implemented"))
}

func (UnimplementedDashboardServiceHandler) CreateCharge(context.Context, *connect_go.Request[v1.CreateChargeRequest]) (*connect_go.Response[v1.Charge], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.CreateCharge is not implemented"))
}

func (UnimplementedDashboardServiceHandler) GetCharges(context.Context, *connect_go.Request[v1.GetChargesRequest]) (*connect_go.Response[v1.Charges], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.GetCharges is not implemented"))
}

func (UnimplementedDashboardServiceHandler) CreateAutoChargeIntent(context.Context, *connect_go.Request[v1.CreateAutoChargeIntentRequest]) (*connect_go.Response[v1.AutoChargeIntent], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.CreateAutoChargeIntent is not implemented"))
}

func (UnimplementedDashboardServiceHandler) UpdateAutoChargeIntent(context.Context, *connect_go.Request[v1.CreateAutoChargeIntentRequest]) (*connect_go.Response[v1.AutoChargeIntent], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.UpdateAutoChargeIntent is not implemented"))
}

func (UnimplementedDashboardServiceHandler) GetAutoChargeIntent(context.Context, *connect_go.Request[v1.GetAutoChargeRequest]) (*connect_go.Response[v1.AutoChargeIntent], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("stabilityai.api.dashboard.v1.DashboardService.GetAutoChargeIntent is not implemented"))
}