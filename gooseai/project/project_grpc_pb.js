// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var project_pb = require('./project_pb.js');
var generation_pb = require('./generation_pb.js');

function serialize_gooseai_CreateProjectRequest(arg) {
  if (!(arg instanceof project_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type gooseai.CreateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateProjectRequest(buffer_arg) {
  return project_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteAssetsRequest(arg) {
  if (!(arg instanceof project_pb.DeleteAssetsRequest)) {
    throw new Error('Expected argument of type gooseai.DeleteAssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteAssetsRequest(buffer_arg) {
  return project_pb.DeleteAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteAssetsResponse(arg) {
  if (!(arg instanceof project_pb.DeleteAssetsResponse)) {
    throw new Error('Expected argument of type gooseai.DeleteAssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteAssetsResponse(buffer_arg) {
  return project_pb.DeleteAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_DeleteProjectRequest(arg) {
  if (!(arg instanceof project_pb.DeleteProjectRequest)) {
    throw new Error('Expected argument of type gooseai.DeleteProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_DeleteProjectRequest(buffer_arg) {
  return project_pb.DeleteProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetProjectRequest(arg) {
  if (!(arg instanceof project_pb.GetProjectRequest)) {
    throw new Error('Expected argument of type gooseai.GetProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetProjectRequest(buffer_arg) {
  return project_pb.GetProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_ListProjectRequest(arg) {
  if (!(arg instanceof project_pb.ListProjectRequest)) {
    throw new Error('Expected argument of type gooseai.ListProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ListProjectRequest(buffer_arg) {
  return project_pb.ListProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_Project(arg) {
  if (!(arg instanceof project_pb.Project)) {
    throw new Error('Expected argument of type gooseai.Project');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_Project(buffer_arg) {
  return project_pb.Project.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_QueryAssetsRequest(arg) {
  if (!(arg instanceof project_pb.QueryAssetsRequest)) {
    throw new Error('Expected argument of type gooseai.QueryAssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_QueryAssetsRequest(buffer_arg) {
  return project_pb.QueryAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_QueryAssetsResponse(arg) {
  if (!(arg instanceof project_pb.QueryAssetsResponse)) {
    throw new Error('Expected argument of type gooseai.QueryAssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_QueryAssetsResponse(buffer_arg) {
  return project_pb.QueryAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_UpdateProjectRequest(arg) {
  if (!(arg instanceof project_pb.UpdateProjectRequest)) {
    throw new Error('Expected argument of type gooseai.UpdateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_UpdateProjectRequest(buffer_arg) {
  return project_pb.UpdateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// gRPC services
//
var ProjectServiceService = exports.ProjectServiceService = {
  // Create a new project if it does not exist
create: {
    path: '/gooseai.ProjectService/Create',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.CreateProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_CreateProjectRequest,
    requestDeserialize: deserialize_gooseai_CreateProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // Update an existing project
update: {
    path: '/gooseai.ProjectService/Update',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.UpdateProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_UpdateProjectRequest,
    requestDeserialize: deserialize_gooseai_UpdateProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // List all the projects for an organization
list: {
    path: '/gooseai.ProjectService/List',
    requestStream: false,
    responseStream: true,
    requestType: project_pb.ListProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_ListProjectRequest,
    requestDeserialize: deserialize_gooseai_ListProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // Get a project
get: {
    path: '/gooseai.ProjectService/Get',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.GetProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_GetProjectRequest,
    requestDeserialize: deserialize_gooseai_GetProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // Delete a project
delete: {
    path: '/gooseai.ProjectService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.DeleteProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_DeleteProjectRequest,
    requestDeserialize: deserialize_gooseai_DeleteProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // Query the assets of a project, with additional filtering
queryAssets: {
    path: '/gooseai.ProjectService/QueryAssets',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.QueryAssetsRequest,
    responseType: project_pb.QueryAssetsResponse,
    requestSerialize: serialize_gooseai_QueryAssetsRequest,
    requestDeserialize: deserialize_gooseai_QueryAssetsRequest,
    responseSerialize: serialize_gooseai_QueryAssetsResponse,
    responseDeserialize: deserialize_gooseai_QueryAssetsResponse,
  },
  // Delete one or more assets of a project
deleteAssets: {
    path: '/gooseai.ProjectService/DeleteAssets',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.DeleteAssetsRequest,
    responseType: project_pb.DeleteAssetsResponse,
    requestSerialize: serialize_gooseai_DeleteAssetsRequest,
    requestDeserialize: deserialize_gooseai_DeleteAssetsRequest,
    responseSerialize: serialize_gooseai_DeleteAssetsResponse,
    responseDeserialize: deserialize_gooseai_DeleteAssetsResponse,
  },
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService);
