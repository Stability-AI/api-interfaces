# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from stability_api.platform.dashboard.v1 import dashboard_pb2 as stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2


class DashboardServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetMe = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/GetMe',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.FromString,
                )
        self.GetOrganization = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/GetOrganization',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetOrganizationRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Organization.FromString,
                )
        self.GetMetrics = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/GetMetrics',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetMetricsRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Metrics.FromString,
                )
        self.CreateAPIKey = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/CreateAPIKey',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKeyRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKey.FromString,
                )
        self.DeleteAPIKey = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/DeleteAPIKey',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKeyFindRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKey.FromString,
                )
        self.UpdateDefaultOrganization = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/UpdateDefaultOrganization',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UpdateDefaultOrganizationRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.FromString,
                )
        self.GetClientSettings = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/GetClientSettings',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.FromString,
                )
        self.SetClientSettings = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/SetClientSettings',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.FromString,
                )
        self.UpdateUserInfo = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/UpdateUserInfo',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UpdateUserInfoRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.FromString,
                )
        self.CreatePasswordChangeTicket = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/CreatePasswordChangeTicket',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UserPasswordChangeTicket.FromString,
                )
        self.DeleteAccount = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/DeleteAccount',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.FromString,
                )
        self.CreateCharge = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/CreateCharge',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateChargeRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Charge.FromString,
                )
        self.GetCharges = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/GetCharges',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetChargesRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Charges.FromString,
                )
        self.CreateAutoChargeIntent = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/CreateAutoChargeIntent',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateAutoChargeIntentRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.FromString,
                )
        self.UpdateAutoChargeIntent = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/UpdateAutoChargeIntent',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateAutoChargeIntentRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.FromString,
                )
        self.GetAutoChargeIntent = channel.unary_unary(
                '/stabilityai.api.dashboard.v1.DashboardService/GetAutoChargeIntent',
                request_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetAutoChargeRequest.SerializeToString,
                response_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.FromString,
                )


class DashboardServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetMe(self, request, context):
        """Get info
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetOrganization(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetMetrics(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateAPIKey(self, request, context):
        """API key management
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteAPIKey(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateDefaultOrganization(self, request, context):
        """User settings
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetClientSettings(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetClientSettings(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateUserInfo(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreatePasswordChangeTicket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteAccount(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateCharge(self, request, context):
        """Payment functions
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetCharges(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateAutoChargeIntent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateAutoChargeIntent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetAutoChargeIntent(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_DashboardServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetMe': grpc.unary_unary_rpc_method_handler(
                    servicer.GetMe,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.SerializeToString,
            ),
            'GetOrganization': grpc.unary_unary_rpc_method_handler(
                    servicer.GetOrganization,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetOrganizationRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Organization.SerializeToString,
            ),
            'GetMetrics': grpc.unary_unary_rpc_method_handler(
                    servicer.GetMetrics,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetMetricsRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Metrics.SerializeToString,
            ),
            'CreateAPIKey': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateAPIKey,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKeyRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKey.SerializeToString,
            ),
            'DeleteAPIKey': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteAPIKey,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKeyFindRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKey.SerializeToString,
            ),
            'UpdateDefaultOrganization': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateDefaultOrganization,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UpdateDefaultOrganizationRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.SerializeToString,
            ),
            'GetClientSettings': grpc.unary_unary_rpc_method_handler(
                    servicer.GetClientSettings,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.SerializeToString,
            ),
            'SetClientSettings': grpc.unary_unary_rpc_method_handler(
                    servicer.SetClientSettings,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.SerializeToString,
            ),
            'UpdateUserInfo': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateUserInfo,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UpdateUserInfoRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.SerializeToString,
            ),
            'CreatePasswordChangeTicket': grpc.unary_unary_rpc_method_handler(
                    servicer.CreatePasswordChangeTicket,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UserPasswordChangeTicket.SerializeToString,
            ),
            'DeleteAccount': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteAccount,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.SerializeToString,
            ),
            'CreateCharge': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateCharge,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateChargeRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Charge.SerializeToString,
            ),
            'GetCharges': grpc.unary_unary_rpc_method_handler(
                    servicer.GetCharges,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetChargesRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Charges.SerializeToString,
            ),
            'CreateAutoChargeIntent': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateAutoChargeIntent,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateAutoChargeIntentRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.SerializeToString,
            ),
            'UpdateAutoChargeIntent': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateAutoChargeIntent,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateAutoChargeIntentRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.SerializeToString,
            ),
            'GetAutoChargeIntent': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAutoChargeIntent,
                    request_deserializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetAutoChargeRequest.FromString,
                    response_serializer=stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'stabilityai.api.dashboard.v1.DashboardService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class DashboardService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetMe(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/GetMe',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetOrganization(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/GetOrganization',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetOrganizationRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Organization.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetMetrics(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/GetMetrics',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetMetricsRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Metrics.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateAPIKey(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/CreateAPIKey',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKeyRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKey.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteAPIKey(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/DeleteAPIKey',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKeyFindRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.APIKey.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateDefaultOrganization(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/UpdateDefaultOrganization',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UpdateDefaultOrganizationRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetClientSettings(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/GetClientSettings',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetClientSettings(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/SetClientSettings',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.ClientSettings.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateUserInfo(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/UpdateUserInfo',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UpdateUserInfoRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreatePasswordChangeTicket(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/CreatePasswordChangeTicket',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.UserPasswordChangeTicket.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteAccount(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/DeleteAccount',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.EmptyRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateCharge(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/CreateCharge',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateChargeRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Charge.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetCharges(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/GetCharges',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetChargesRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.Charges.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateAutoChargeIntent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/CreateAutoChargeIntent',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateAutoChargeIntentRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateAutoChargeIntent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/UpdateAutoChargeIntent',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.CreateAutoChargeIntentRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetAutoChargeIntent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/stabilityai.api.dashboard.v1.DashboardService/GetAutoChargeIntent',
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.GetAutoChargeRequest.SerializeToString,
            stability__api_dot_platform_dot_dashboard_dot_v1_dot_dashboard__pb2.AutoChargeIntent.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)