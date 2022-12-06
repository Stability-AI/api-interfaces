
'Client and server classes corresponding to protobuf-defined services.'
import grpc
from ..gooseai import project_pb2 as gooseai_dot_project__pb2

class ProjectServiceStub(object):
    '\n    gRPC services\n\n    '

    def __init__(self, channel):
        'Constructor.\n\n        Args:\n            channel: A grpc.Channel.\n        '
        self.Create = channel.unary_unary('/gooseai.ProjectService/Create', request_serializer=gooseai_dot_project__pb2.CreateProjectRequest.SerializeToString, response_deserializer=gooseai_dot_project__pb2.Project.FromString)
        self.Update = channel.unary_unary('/gooseai.ProjectService/Update', request_serializer=gooseai_dot_project__pb2.UpdateProjectRequest.SerializeToString, response_deserializer=gooseai_dot_project__pb2.Project.FromString)
        self.List = channel.unary_stream('/gooseai.ProjectService/List', request_serializer=gooseai_dot_project__pb2.ListProjectRequest.SerializeToString, response_deserializer=gooseai_dot_project__pb2.Project.FromString)
        self.Get = channel.unary_unary('/gooseai.ProjectService/Get', request_serializer=gooseai_dot_project__pb2.GetProjectRequest.SerializeToString, response_deserializer=gooseai_dot_project__pb2.Project.FromString)
        self.Delete = channel.unary_unary('/gooseai.ProjectService/Delete', request_serializer=gooseai_dot_project__pb2.DeleteProjectRequest.SerializeToString, response_deserializer=gooseai_dot_project__pb2.Project.FromString)

class ProjectServiceServicer(object):
    '\n    gRPC services\n\n    '

    def Create(self, request, context):
        'Create a new project if it does not exist\n        '
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Update(self, request, context):
        'Update an existing project\n        '
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def List(self, request, context):
        'List all the projects for an organization\n        '
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Get(self, request, context):
        'Get a project\n        '
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Delete(self, request, context):
        'Delete a project\n        '
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

def add_ProjectServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {'Create': grpc.unary_unary_rpc_method_handler(servicer.Create, request_deserializer=gooseai_dot_project__pb2.CreateProjectRequest.FromString, response_serializer=gooseai_dot_project__pb2.Project.SerializeToString), 'Update': grpc.unary_unary_rpc_method_handler(servicer.Update, request_deserializer=gooseai_dot_project__pb2.UpdateProjectRequest.FromString, response_serializer=gooseai_dot_project__pb2.Project.SerializeToString), 'List': grpc.unary_stream_rpc_method_handler(servicer.List, request_deserializer=gooseai_dot_project__pb2.ListProjectRequest.FromString, response_serializer=gooseai_dot_project__pb2.Project.SerializeToString), 'Get': grpc.unary_unary_rpc_method_handler(servicer.Get, request_deserializer=gooseai_dot_project__pb2.GetProjectRequest.FromString, response_serializer=gooseai_dot_project__pb2.Project.SerializeToString), 'Delete': grpc.unary_unary_rpc_method_handler(servicer.Delete, request_deserializer=gooseai_dot_project__pb2.DeleteProjectRequest.FromString, response_serializer=gooseai_dot_project__pb2.Project.SerializeToString)}
    generic_handler = grpc.method_handlers_generic_handler('gooseai.ProjectService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))

class ProjectService(object):
    '\n    gRPC services\n\n    '

    @staticmethod
    def Create(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/gooseai.ProjectService/Create', gooseai_dot_project__pb2.CreateProjectRequest.SerializeToString, gooseai_dot_project__pb2.Project.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Update(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/gooseai.ProjectService/Update', gooseai_dot_project__pb2.UpdateProjectRequest.SerializeToString, gooseai_dot_project__pb2.Project.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def List(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_stream(request, target, '/gooseai.ProjectService/List', gooseai_dot_project__pb2.ListProjectRequest.SerializeToString, gooseai_dot_project__pb2.Project.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Get(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/gooseai.ProjectService/Get', gooseai_dot_project__pb2.GetProjectRequest.SerializeToString, gooseai_dot_project__pb2.Project.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Delete(request, target, options=(), channel_credentials=None, call_credentials=None, insecure=False, compression=None, wait_for_ready=None, timeout=None, metadata=None):
        return grpc.experimental.unary_unary(request, target, '/gooseai.ProjectService/Delete', gooseai_dot_project__pb2.DeleteProjectRequest.SerializeToString, gooseai_dot_project__pb2.Project.FromString, options, channel_credentials, insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
