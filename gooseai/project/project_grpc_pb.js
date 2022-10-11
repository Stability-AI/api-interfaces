// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var project_pb = require('./project_pb.js');

function serialize_gooseai_CreateProjectRequest(arg) {
  if (!(arg instanceof project_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type gooseai.CreateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_CreateProjectRequest(buffer_arg) {
  return project_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gooseai_GetDeleteProjectRequest(arg) {
  if (!(arg instanceof project_pb.GetDeleteProjectRequest)) {
    throw new Error('Expected argument of type gooseai.GetDeleteProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_GetDeleteProjectRequest(buffer_arg) {
  return project_pb.GetDeleteProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_gooseai_ProjectEmpty(arg) {
  if (!(arg instanceof project_pb.ProjectEmpty)) {
    throw new Error('Expected argument of type gooseai.ProjectEmpty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gooseai_ProjectEmpty(buffer_arg) {
  return project_pb.ProjectEmpty.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: project_pb.GetDeleteProjectRequest,
    responseType: project_pb.Project,
    requestSerialize: serialize_gooseai_GetDeleteProjectRequest,
    requestDeserialize: deserialize_gooseai_GetDeleteProjectRequest,
    responseSerialize: serialize_gooseai_Project,
    responseDeserialize: deserialize_gooseai_Project,
  },
  // Delete a project
delete: {
    path: '/gooseai.ProjectService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: project_pb.GetDeleteProjectRequest,
    responseType: project_pb.ProjectEmpty,
    requestSerialize: serialize_gooseai_GetDeleteProjectRequest,
    requestDeserialize: deserialize_gooseai_GetDeleteProjectRequest,
    responseSerialize: serialize_gooseai_ProjectEmpty,
    responseDeserialize: deserialize_gooseai_ProjectEmpty,
  },
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService);
