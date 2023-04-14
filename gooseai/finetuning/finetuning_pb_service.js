// package: gooseai
// file: finetuning.proto

var finetuning_pb = require("./finetuning_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FineTuningService = (function () {
  function FineTuningService() {}
  FineTuningService.serviceName = "gooseai.FineTuningService";
  return FineTuningService;
}());

FineTuningService.CreateFineTuningJob = {
  methodName: "CreateFineTuningJob",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.CreateFineTuningJobRequest,
  responseType: finetuning_pb.CreateFineTuningJobResponse
};

FineTuningService.GetFineTuningJobById = {
  methodName: "GetFineTuningJobById",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetFineTuningJobByIdRequest,
  responseType: finetuning_pb.GetFineTuningJobByIdResponse
};

FineTuningService.UpdateFineTuningJob = {
  methodName: "UpdateFineTuningJob",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.UpdateFineTuningJobRequest,
  responseType: finetuning_pb.UpdateFineTuningJobResponse
};

FineTuningService.DeleteFineTuningJob = {
  methodName: "DeleteFineTuningJob",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.DeleteFineTuningJobRequest,
  responseType: finetuning_pb.DeleteFineTuningJobResponse
};

FineTuningService.GetFineTuningJobStatus = {
  methodName: "GetFineTuningJobStatus",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetFineTuningJobStatusRequest,
  responseType: finetuning_pb.GetFineTuningJobStatusResponse
};

FineTuningService.ResubmitFineTuningJob = {
  methodName: "ResubmitFineTuningJob",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.ResubmitFineTuningJobRequest,
  responseType: finetuning_pb.ResubmitFineTuningJobResponse
};

FineTuningService.GetFineTuningJobsByUserId = {
  methodName: "GetFineTuningJobsByUserId",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetFineTuningJobsByUserIdRequest,
  responseType: finetuning_pb.GetFineTuningJobsByUserIdResponse
};

FineTuningService.GetFineTuningJobsByOrgId = {
  methodName: "GetFineTuningJobsByOrgId",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetFineTuningJobsByOrgIdRequest,
  responseType: finetuning_pb.GetFineTuningJobsByOrgIdResponse
};

exports.FineTuningService = FineTuningService;

function FineTuningServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FineTuningServiceClient.prototype.createFineTuningJob = function createFineTuningJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.CreateFineTuningJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FineTuningServiceClient.prototype.getFineTuningJobById = function getFineTuningJobById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningJobById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FineTuningServiceClient.prototype.updateFineTuningJob = function updateFineTuningJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.UpdateFineTuningJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FineTuningServiceClient.prototype.deleteFineTuningJob = function deleteFineTuningJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.DeleteFineTuningJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FineTuningServiceClient.prototype.getFineTuningJobStatus = function getFineTuningJobStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningJobStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FineTuningServiceClient.prototype.resubmitFineTuningJob = function resubmitFineTuningJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.ResubmitFineTuningJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FineTuningServiceClient.prototype.getFineTuningJobsByUserId = function getFineTuningJobsByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningJobsByUserId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

FineTuningServiceClient.prototype.getFineTuningJobsByOrgId = function getFineTuningJobsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningJobsByOrgId, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.FineTuningServiceClient = FineTuningServiceClient;

