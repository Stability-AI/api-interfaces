// package: gooseai
// file: finetuning.proto

var finetuning_pb = require("./finetuning_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FineTuningService = (function () {
  function FineTuningService() {}
  FineTuningService.serviceName = "gooseai.FineTuningService";
  return FineTuningService;
}());

FineTuningService.CreateFineTuningModel = {
  methodName: "CreateFineTuningModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.CreateFineTuningModelRequest,
  responseType: finetuning_pb.CreateFineTuningModelResponse
};

FineTuningService.GetFineTuningModelById = {
  methodName: "GetFineTuningModelById",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetFineTuningModelByIdRequest,
  responseType: finetuning_pb.GetFineTuningModelByIdResponse
};

FineTuningService.UpdateFineTuningModel = {
  methodName: "UpdateFineTuningModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.UpdateFineTuningModelRequest,
  responseType: finetuning_pb.UpdateFineTuningModelResponse
};

FineTuningService.DeleteFineTuningModel = {
  methodName: "DeleteFineTuningModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.DeleteFineTuningModelRequest,
  responseType: finetuning_pb.DeleteFineTuningModelResponse
};

FineTuningService.GetFineTuningModelStatus = {
  methodName: "GetFineTuningModelStatus",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetFineTuningModelStatusRequest,
  responseType: finetuning_pb.GetFineTuningModelStatusResponse
};

FineTuningService.ResubmitFineTuningModel = {
  methodName: "ResubmitFineTuningModel",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.ResubmitFineTuningModelRequest,
  responseType: finetuning_pb.ResubmitFineTuningModelResponse
};

FineTuningService.GetFineTuningModelsByUserId = {
  methodName: "GetFineTuningModelsByUserId",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetFineTuningModelsByUserIdRequest,
  responseType: finetuning_pb.GetFineTuningModelsByUserIdResponse
};

FineTuningService.GetFineTuningModelsByOrgId = {
  methodName: "GetFineTuningModelsByOrgId",
  service: FineTuningService,
  requestStream: false,
  responseStream: false,
  requestType: finetuning_pb.GetFineTuningModelsByOrgIdRequest,
  responseType: finetuning_pb.GetFineTuningModelsByOrgIdResponse
};

exports.FineTuningService = FineTuningService;

function FineTuningServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FineTuningServiceClient.prototype.createFineTuningModel = function createFineTuningModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.CreateFineTuningModel, {
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

FineTuningServiceClient.prototype.getFineTuningModelById = function getFineTuningModelById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningModelById, {
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

FineTuningServiceClient.prototype.updateFineTuningModel = function updateFineTuningModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.UpdateFineTuningModel, {
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

FineTuningServiceClient.prototype.deleteFineTuningModel = function deleteFineTuningModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.DeleteFineTuningModel, {
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

FineTuningServiceClient.prototype.getFineTuningModelStatus = function getFineTuningModelStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningModelStatus, {
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

FineTuningServiceClient.prototype.resubmitFineTuningModel = function resubmitFineTuningModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.ResubmitFineTuningModel, {
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

FineTuningServiceClient.prototype.getFineTuningModelsByUserId = function getFineTuningModelsByUserId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningModelsByUserId, {
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

FineTuningServiceClient.prototype.getFineTuningModelsByOrgId = function getFineTuningModelsByOrgId(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FineTuningService.GetFineTuningModelsByOrgId, {
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

