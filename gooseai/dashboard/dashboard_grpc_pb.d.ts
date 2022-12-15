// GENERATED CODE -- DO NOT EDIT!

// package: gooseai
// file: dashboard/dashboard.proto

import * as dashboard_dashboard_pb from "../dashboard/dashboard_pb";
import * as grpc from "grpc";

interface IDashboardServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMe: grpc.MethodDefinition<dashboard_dashboard_pb.EmptyRequest, dashboard_dashboard_pb.User>;
  getOrganization: grpc.MethodDefinition<dashboard_dashboard_pb.GetOrganizationRequest, dashboard_dashboard_pb.Organization>;
  getMetrics: grpc.MethodDefinition<dashboard_dashboard_pb.GetMetricsRequest, dashboard_dashboard_pb.Metrics>;
  createAPIKey: grpc.MethodDefinition<dashboard_dashboard_pb.APIKeyRequest, dashboard_dashboard_pb.APIKey>;
  deleteAPIKey: grpc.MethodDefinition<dashboard_dashboard_pb.APIKeyFindRequest, dashboard_dashboard_pb.APIKey>;
  updateDefaultOrganization: grpc.MethodDefinition<dashboard_dashboard_pb.UpdateDefaultOrganizationRequest, dashboard_dashboard_pb.User>;
  getClientSettings: grpc.MethodDefinition<dashboard_dashboard_pb.EmptyRequest, dashboard_dashboard_pb.ClientSettings>;
  setClientSettings: grpc.MethodDefinition<dashboard_dashboard_pb.ClientSettings, dashboard_dashboard_pb.ClientSettings>;
  updateUserInfo: grpc.MethodDefinition<dashboard_dashboard_pb.UpdateUserInfoRequest, dashboard_dashboard_pb.User>;
  createPasswordChangeTicket: grpc.MethodDefinition<dashboard_dashboard_pb.EmptyRequest, dashboard_dashboard_pb.UserPasswordChangeTicket>;
  deleteAccount: grpc.MethodDefinition<dashboard_dashboard_pb.EmptyRequest, dashboard_dashboard_pb.User>;
  createCharge: grpc.MethodDefinition<dashboard_dashboard_pb.CreateChargeRequest, dashboard_dashboard_pb.Charge>;
  getCharges: grpc.MethodDefinition<dashboard_dashboard_pb.GetChargesRequest, dashboard_dashboard_pb.Charges>;
  createAutoChargeIntent: grpc.MethodDefinition<dashboard_dashboard_pb.CreateAutoChargeIntentRequest, dashboard_dashboard_pb.AutoChargeIntent>;
  updateAutoChargeIntent: grpc.MethodDefinition<dashboard_dashboard_pb.CreateAutoChargeIntentRequest, dashboard_dashboard_pb.AutoChargeIntent>;
  getAutoChargeIntent: grpc.MethodDefinition<dashboard_dashboard_pb.GetAutoChargeRequest, dashboard_dashboard_pb.AutoChargeIntent>;
}

export const DashboardServiceService: IDashboardServiceService;

export interface IDashboardServiceServer extends grpc.UntypedServiceImplementation {
  getMe: grpc.handleUnaryCall<dashboard_dashboard_pb.EmptyRequest, dashboard_dashboard_pb.User>;
  getOrganization: grpc.handleUnaryCall<dashboard_dashboard_pb.GetOrganizationRequest, dashboard_dashboard_pb.Organization>;
  getMetrics: grpc.handleUnaryCall<dashboard_dashboard_pb.GetMetricsRequest, dashboard_dashboard_pb.Metrics>;
  createAPIKey: grpc.handleUnaryCall<dashboard_dashboard_pb.APIKeyRequest, dashboard_dashboard_pb.APIKey>;
  deleteAPIKey: grpc.handleUnaryCall<dashboard_dashboard_pb.APIKeyFindRequest, dashboard_dashboard_pb.APIKey>;
  updateDefaultOrganization: grpc.handleUnaryCall<dashboard_dashboard_pb.UpdateDefaultOrganizationRequest, dashboard_dashboard_pb.User>;
  getClientSettings: grpc.handleUnaryCall<dashboard_dashboard_pb.EmptyRequest, dashboard_dashboard_pb.ClientSettings>;
  setClientSettings: grpc.handleUnaryCall<dashboard_dashboard_pb.ClientSettings, dashboard_dashboard_pb.ClientSettings>;
  updateUserInfo: grpc.handleUnaryCall<dashboard_dashboard_pb.UpdateUserInfoRequest, dashboard_dashboard_pb.User>;
  createPasswordChangeTicket: grpc.handleUnaryCall<dashboard_dashboard_pb.EmptyRequest, dashboard_dashboard_pb.UserPasswordChangeTicket>;
  deleteAccount: grpc.handleUnaryCall<dashboard_dashboard_pb.EmptyRequest, dashboard_dashboard_pb.User>;
  createCharge: grpc.handleUnaryCall<dashboard_dashboard_pb.CreateChargeRequest, dashboard_dashboard_pb.Charge>;
  getCharges: grpc.handleUnaryCall<dashboard_dashboard_pb.GetChargesRequest, dashboard_dashboard_pb.Charges>;
  createAutoChargeIntent: grpc.handleUnaryCall<dashboard_dashboard_pb.CreateAutoChargeIntentRequest, dashboard_dashboard_pb.AutoChargeIntent>;
  updateAutoChargeIntent: grpc.handleUnaryCall<dashboard_dashboard_pb.CreateAutoChargeIntentRequest, dashboard_dashboard_pb.AutoChargeIntent>;
  getAutoChargeIntent: grpc.handleUnaryCall<dashboard_dashboard_pb.GetAutoChargeRequest, dashboard_dashboard_pb.AutoChargeIntent>;
}

export class DashboardServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMe(argument: dashboard_dashboard_pb.EmptyRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  getMe(argument: dashboard_dashboard_pb.EmptyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  getMe(argument: dashboard_dashboard_pb.EmptyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  getOrganization(argument: dashboard_dashboard_pb.GetOrganizationRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.Organization>): grpc.ClientUnaryCall;
  getOrganization(argument: dashboard_dashboard_pb.GetOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.Organization>): grpc.ClientUnaryCall;
  getOrganization(argument: dashboard_dashboard_pb.GetOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.Organization>): grpc.ClientUnaryCall;
  getMetrics(argument: dashboard_dashboard_pb.GetMetricsRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.Metrics>): grpc.ClientUnaryCall;
  getMetrics(argument: dashboard_dashboard_pb.GetMetricsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.Metrics>): grpc.ClientUnaryCall;
  getMetrics(argument: dashboard_dashboard_pb.GetMetricsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.Metrics>): grpc.ClientUnaryCall;
  createAPIKey(argument: dashboard_dashboard_pb.APIKeyRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.APIKey>): grpc.ClientUnaryCall;
  createAPIKey(argument: dashboard_dashboard_pb.APIKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.APIKey>): grpc.ClientUnaryCall;
  createAPIKey(argument: dashboard_dashboard_pb.APIKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.APIKey>): grpc.ClientUnaryCall;
  deleteAPIKey(argument: dashboard_dashboard_pb.APIKeyFindRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.APIKey>): grpc.ClientUnaryCall;
  deleteAPIKey(argument: dashboard_dashboard_pb.APIKeyFindRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.APIKey>): grpc.ClientUnaryCall;
  deleteAPIKey(argument: dashboard_dashboard_pb.APIKeyFindRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.APIKey>): grpc.ClientUnaryCall;
  updateDefaultOrganization(argument: dashboard_dashboard_pb.UpdateDefaultOrganizationRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  updateDefaultOrganization(argument: dashboard_dashboard_pb.UpdateDefaultOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  updateDefaultOrganization(argument: dashboard_dashboard_pb.UpdateDefaultOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  getClientSettings(argument: dashboard_dashboard_pb.EmptyRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.ClientSettings>): grpc.ClientUnaryCall;
  getClientSettings(argument: dashboard_dashboard_pb.EmptyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.ClientSettings>): grpc.ClientUnaryCall;
  getClientSettings(argument: dashboard_dashboard_pb.EmptyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.ClientSettings>): grpc.ClientUnaryCall;
  setClientSettings(argument: dashboard_dashboard_pb.ClientSettings, callback: grpc.requestCallback<dashboard_dashboard_pb.ClientSettings>): grpc.ClientUnaryCall;
  setClientSettings(argument: dashboard_dashboard_pb.ClientSettings, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.ClientSettings>): grpc.ClientUnaryCall;
  setClientSettings(argument: dashboard_dashboard_pb.ClientSettings, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.ClientSettings>): grpc.ClientUnaryCall;
  updateUserInfo(argument: dashboard_dashboard_pb.UpdateUserInfoRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  updateUserInfo(argument: dashboard_dashboard_pb.UpdateUserInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  updateUserInfo(argument: dashboard_dashboard_pb.UpdateUserInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  createPasswordChangeTicket(argument: dashboard_dashboard_pb.EmptyRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.UserPasswordChangeTicket>): grpc.ClientUnaryCall;
  createPasswordChangeTicket(argument: dashboard_dashboard_pb.EmptyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.UserPasswordChangeTicket>): grpc.ClientUnaryCall;
  createPasswordChangeTicket(argument: dashboard_dashboard_pb.EmptyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.UserPasswordChangeTicket>): grpc.ClientUnaryCall;
  deleteAccount(argument: dashboard_dashboard_pb.EmptyRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  deleteAccount(argument: dashboard_dashboard_pb.EmptyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  deleteAccount(argument: dashboard_dashboard_pb.EmptyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.User>): grpc.ClientUnaryCall;
  createCharge(argument: dashboard_dashboard_pb.CreateChargeRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.Charge>): grpc.ClientUnaryCall;
  createCharge(argument: dashboard_dashboard_pb.CreateChargeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.Charge>): grpc.ClientUnaryCall;
  createCharge(argument: dashboard_dashboard_pb.CreateChargeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.Charge>): grpc.ClientUnaryCall;
  getCharges(argument: dashboard_dashboard_pb.GetChargesRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.Charges>): grpc.ClientUnaryCall;
  getCharges(argument: dashboard_dashboard_pb.GetChargesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.Charges>): grpc.ClientUnaryCall;
  getCharges(argument: dashboard_dashboard_pb.GetChargesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.Charges>): grpc.ClientUnaryCall;
  createAutoChargeIntent(argument: dashboard_dashboard_pb.CreateAutoChargeIntentRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
  createAutoChargeIntent(argument: dashboard_dashboard_pb.CreateAutoChargeIntentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
  createAutoChargeIntent(argument: dashboard_dashboard_pb.CreateAutoChargeIntentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
  updateAutoChargeIntent(argument: dashboard_dashboard_pb.CreateAutoChargeIntentRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
  updateAutoChargeIntent(argument: dashboard_dashboard_pb.CreateAutoChargeIntentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
  updateAutoChargeIntent(argument: dashboard_dashboard_pb.CreateAutoChargeIntentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
  getAutoChargeIntent(argument: dashboard_dashboard_pb.GetAutoChargeRequest, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
  getAutoChargeIntent(argument: dashboard_dashboard_pb.GetAutoChargeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
  getAutoChargeIntent(argument: dashboard_dashboard_pb.GetAutoChargeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<dashboard_dashboard_pb.AutoChargeIntent>): grpc.ClientUnaryCall;
}
