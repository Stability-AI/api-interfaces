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
  responseType: finetuning_pb.FineTuningJob
};

FineTuningService.GetFineTuningJobById = {
  methodName: "GetFineTuningJobById",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.FineTuningJobRequestById,
  responseType: finetuning_pb.FineTuningJob
};

FineTuningService.UpdateFineTuningJob = {
  methodName: "UpdateFineTuningJob",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.UpdateFineTuningJobRequest,
  responseType: finetuning_pb.FineTuningJob
};

FineTuningService.DeleteFineTuningJob = {
  methodName: "DeleteFineTuningJob",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.FineTuningJobRequestById,
  responseType: finetuning_pb.FineTuningJob
};

FineTuningService.GetFineTuningJobProgress = {
  methodName: "GetFineTuningJobProgress",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.FineTuningJobRequestById,
  responseType: finetuning_pb.FineTuningJobStatus
};

FineTuningService.ResubmitFineTuningJob = {
  methodName: "ResubmitFineTuningJob",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.ResubmitFineTuningJobRequest,
  responseType: finetuning_pb.FineTuningJob
};

FineTuningService.GetJobsByUserId = {
  methodName: "GetJobsByUserId",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.FineTuningJobRequestByUserId,
  responseType: finetuning_pb.FineTuningJobList
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

FineTuningServiceClient.prototype.getFineTuningJobProgress = function getFineTuningJobProgress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningJobProgress, {
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

FineTuningServiceClient.prototype.getJobsByUserId = function getJobsByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetJobsByUserId, {
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

