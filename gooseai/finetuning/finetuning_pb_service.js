// package: gooseai
// file: finetuning.proto

var finetuning_pb = require("./finetuning_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FineTuningService = (function () {
  function FineTuningService() {}
  FineTuningService.serviceName = "gooseai.FineTuningService";
  return FineTuningService;
}());

FineTuningService.CreateModel = {
  methodName: "CreateModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.CreateModelRequest,
  responseType: finetuning_pb.CreateModelResponse
};

FineTuningService.GetModel = {
  methodName: "GetModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetModelRequest,
  responseType: finetuning_pb.GetModelResponse
};

FineTuningService.UpdateModel = {
  methodName: "UpdateModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.UpdateModelRequest,
  responseType: finetuning_pb.UpdateModelResponse
};

FineTuningService.DeleteModel = {
  methodName: "DeleteModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.DeleteModelRequest,
  responseType: finetuning_pb.DeleteModelResponse
};

FineTuningService.ResubmitModel = {
  methodName: "ResubmitModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.ResubmitModelRequest,
  responseType: finetuning_pb.ResubmitModelResponse
};

FineTuningService.ListModels = {
  methodName: "ListModels",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.ListModelsRequest,
  responseType: finetuning_pb.ListModelsResponse
};

exports.FineTuningService = FineTuningService;

function FineTuningServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FineTuningServiceClient.prototype.createModel = function createModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.CreateModel, {
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

FineTuningServiceClient.prototype.getModel = function getModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetModel, {
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

FineTuningServiceClient.prototype.updateModel = function updateModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.UpdateModel, {
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

FineTuningServiceClient.prototype.deleteModel = function deleteModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.DeleteModel, {
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

FineTuningServiceClient.prototype.resubmitModel = function resubmitModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.ResubmitModel, {
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

FineTuningServiceClient.prototype.listModels = function listModels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.ListModels, {
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

