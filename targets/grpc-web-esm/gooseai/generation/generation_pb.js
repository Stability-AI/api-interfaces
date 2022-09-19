var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// generation/generation_pb.js
var require_generation_pb = __commonJS({
  "generation/generation_pb.js"(exports) {
    var jspb = __require("google-protobuf");
    var goog = jspb;
    var global = function() {
      return this || window || global || self || Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.gooseai.Action", null, global);
    goog.exportSymbol("proto.gooseai.Answer", null, global);
    goog.exportSymbol("proto.gooseai.AnswerMeta", null, global);
    goog.exportSymbol("proto.gooseai.Artifact", null, global);
    goog.exportSymbol("proto.gooseai.Artifact.DataCase", null, global);
    goog.exportSymbol("proto.gooseai.ArtifactType", null, global);
    goog.exportSymbol("proto.gooseai.AssetAction", null, global);
    goog.exportSymbol("proto.gooseai.AssetParameters", null, global);
    goog.exportSymbol("proto.gooseai.ChainRequest", null, global);
    goog.exportSymbol("proto.gooseai.ClassifierCategory", null, global);
    goog.exportSymbol("proto.gooseai.ClassifierConcept", null, global);
    goog.exportSymbol("proto.gooseai.ClassifierMode", null, global);
    goog.exportSymbol("proto.gooseai.ClassifierParameters", null, global);
    goog.exportSymbol("proto.gooseai.ConditionerParameters", null, global);
    goog.exportSymbol("proto.gooseai.DiffusionSampler", null, global);
    goog.exportSymbol("proto.gooseai.FinishReason", null, global);
    goog.exportSymbol("proto.gooseai.ImageParameters", null, global);
    goog.exportSymbol("proto.gooseai.OnStatus", null, global);
    goog.exportSymbol("proto.gooseai.Prompt", null, global);
    goog.exportSymbol("proto.gooseai.Prompt.PromptCase", null, global);
    goog.exportSymbol("proto.gooseai.PromptParameters", null, global);
    goog.exportSymbol("proto.gooseai.Request", null, global);
    goog.exportSymbol("proto.gooseai.Request.ParamsCase", null, global);
    goog.exportSymbol("proto.gooseai.SamplerParameters", null, global);
    goog.exportSymbol("proto.gooseai.ScheduleParameters", null, global);
    goog.exportSymbol("proto.gooseai.Stage", null, global);
    goog.exportSymbol("proto.gooseai.StageAction", null, global);
    goog.exportSymbol("proto.gooseai.StepParameter", null, global);
    goog.exportSymbol("proto.gooseai.Token", null, global);
    goog.exportSymbol("proto.gooseai.Tokens", null, global);
    goog.exportSymbol("proto.gooseai.TransformType", null, global);
    goog.exportSymbol("proto.gooseai.TransformType.TypeCase", null, global);
    goog.exportSymbol("proto.gooseai.Upscaler", null, global);
    proto.gooseai.Token = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.Token, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Token.displayName = "proto.gooseai.Token";
    }
    proto.gooseai.Tokens = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Tokens.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Tokens, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Tokens.displayName = "proto.gooseai.Tokens";
    }
    proto.gooseai.Artifact = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseai.Artifact.oneofGroups_);
    };
    goog.inherits(proto.gooseai.Artifact, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Artifact.displayName = "proto.gooseai.Artifact";
    }
    proto.gooseai.PromptParameters = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.PromptParameters, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.PromptParameters.displayName = "proto.gooseai.PromptParameters";
    }
    proto.gooseai.Prompt = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseai.Prompt.oneofGroups_);
    };
    goog.inherits(proto.gooseai.Prompt, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Prompt.displayName = "proto.gooseai.Prompt";
    }
    proto.gooseai.AnswerMeta = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.AnswerMeta, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.AnswerMeta.displayName = "proto.gooseai.AnswerMeta";
    }
    proto.gooseai.Answer = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Answer.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Answer, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Answer.displayName = "proto.gooseai.Answer";
    }
    proto.gooseai.SamplerParameters = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.SamplerParameters, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.SamplerParameters.displayName = "proto.gooseai.SamplerParameters";
    }
    proto.gooseai.ConditionerParameters = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.ConditionerParameters, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ConditionerParameters.displayName = "proto.gooseai.ConditionerParameters";
    }
    proto.gooseai.ScheduleParameters = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.ScheduleParameters, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ScheduleParameters.displayName = "proto.gooseai.ScheduleParameters";
    }
    proto.gooseai.StepParameter = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.StepParameter, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.StepParameter.displayName = "proto.gooseai.StepParameter";
    }
    proto.gooseai.TransformType = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, proto.gooseai.TransformType.oneofGroups_);
    };
    goog.inherits(proto.gooseai.TransformType, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.TransformType.displayName = "proto.gooseai.TransformType";
    }
    proto.gooseai.ImageParameters = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.ImageParameters.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.ImageParameters, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ImageParameters.displayName = "proto.gooseai.ImageParameters";
    }
    proto.gooseai.ClassifierConcept = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.ClassifierConcept, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ClassifierConcept.displayName = "proto.gooseai.ClassifierConcept";
    }
    proto.gooseai.ClassifierCategory = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.ClassifierCategory.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.ClassifierCategory, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ClassifierCategory.displayName = "proto.gooseai.ClassifierCategory";
    }
    proto.gooseai.ClassifierParameters = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.ClassifierParameters.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.ClassifierParameters, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ClassifierParameters.displayName = "proto.gooseai.ClassifierParameters";
    }
    proto.gooseai.AssetParameters = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.AssetParameters, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.AssetParameters.displayName = "proto.gooseai.AssetParameters";
    }
    proto.gooseai.Request = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Request.repeatedFields_, proto.gooseai.Request.oneofGroups_);
    };
    goog.inherits(proto.gooseai.Request, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Request.displayName = "proto.gooseai.Request";
    }
    proto.gooseai.OnStatus = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.OnStatus.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.OnStatus, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.OnStatus.displayName = "proto.gooseai.OnStatus";
    }
    proto.gooseai.Stage = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Stage.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Stage, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Stage.displayName = "proto.gooseai.Stage";
    }
    proto.gooseai.ChainRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.ChainRequest.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.ChainRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ChainRequest.displayName = "proto.gooseai.ChainRequest";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Token.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Token.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Token.toObject = function(includeInstance, msg) {
        var f, obj = {
          text: jspb.Message.getFieldWithDefault(msg, 1, ""),
          id: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Token.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Token();
      return proto.gooseai.Token.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Token.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setText(value);
            break;
          case 2:
            var value = reader.readUint32();
            msg.setId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Token.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Token.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Token.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getId();
      if (f !== 0) {
        writer.writeUint32(
          2,
          f
        );
      }
    };
    proto.gooseai.Token.prototype.getText = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Token.prototype.setText = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.Token.prototype.clearText = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.Token.prototype.hasText = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.Token.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.Token.prototype.setId = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.gooseai.Tokens.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Tokens.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Tokens.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Tokens.toObject = function(includeInstance, msg) {
        var f, obj = {
          tokensList: jspb.Message.toObjectList(
            msg.getTokensList(),
            proto.gooseai.Token.toObject,
            includeInstance
          ),
          tokenizerId: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Tokens.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Tokens();
      return proto.gooseai.Tokens.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Tokens.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.Token();
            reader.readMessage(value, proto.gooseai.Token.deserializeBinaryFromReader);
            msg.addTokens(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setTokenizerId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Tokens.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Tokens.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Tokens.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTokensList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.gooseai.Token.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.gooseai.Tokens.prototype.getTokensList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Token, 1);
    };
    proto.gooseai.Tokens.prototype.setTokensList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.gooseai.Tokens.prototype.addTokens = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.Token, opt_index);
    };
    proto.gooseai.Tokens.prototype.clearTokensList = function() {
      return this.setTokensList([]);
    };
    proto.gooseai.Tokens.prototype.getTokenizerId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.Tokens.prototype.setTokenizerId = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.Tokens.prototype.clearTokenizerId = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.Tokens.prototype.hasTokenizerId = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.Artifact.oneofGroups_ = [[5, 6, 7, 11]];
    proto.gooseai.Artifact.DataCase = {
      DATA_NOT_SET: 0,
      BINARY: 5,
      TEXT: 6,
      TOKENS: 7,
      CLASSIFIER: 11
    };
    proto.gooseai.Artifact.prototype.getDataCase = function() {
      return jspb.Message.computeOneofCase(this, proto.gooseai.Artifact.oneofGroups_[0]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Artifact.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Artifact.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Artifact.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, 0),
          type: jspb.Message.getFieldWithDefault(msg, 2, 0),
          mime: jspb.Message.getFieldWithDefault(msg, 3, ""),
          magic: jspb.Message.getFieldWithDefault(msg, 4, ""),
          binary: msg.getBinary_asB64(),
          text: jspb.Message.getFieldWithDefault(msg, 6, ""),
          tokens: (f = msg.getTokens()) && proto.gooseai.Tokens.toObject(includeInstance, f),
          classifier: (f = msg.getClassifier()) && proto.gooseai.ClassifierParameters.toObject(includeInstance, f),
          index: jspb.Message.getFieldWithDefault(msg, 8, 0),
          finishReason: jspb.Message.getFieldWithDefault(msg, 9, 0),
          seed: jspb.Message.getFieldWithDefault(msg, 10, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Artifact.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Artifact();
      return proto.gooseai.Artifact.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Artifact.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readUint64();
            msg.setId(value);
            break;
          case 2:
            var value = reader.readEnum();
            msg.setType(value);
            break;
          case 3:
            var value = reader.readString();
            msg.setMime(value);
            break;
          case 4:
            var value = reader.readString();
            msg.setMagic(value);
            break;
          case 5:
            var value = reader.readBytes();
            msg.setBinary(value);
            break;
          case 6:
            var value = reader.readString();
            msg.setText(value);
            break;
          case 7:
            var value = new proto.gooseai.Tokens();
            reader.readMessage(value, proto.gooseai.Tokens.deserializeBinaryFromReader);
            msg.setTokens(value);
            break;
          case 11:
            var value = new proto.gooseai.ClassifierParameters();
            reader.readMessage(value, proto.gooseai.ClassifierParameters.deserializeBinaryFromReader);
            msg.setClassifier(value);
            break;
          case 8:
            var value = reader.readUint32();
            msg.setIndex(value);
            break;
          case 9:
            var value = reader.readEnum();
            msg.setFinishReason(value);
            break;
          case 10:
            var value = reader.readUint32();
            msg.setSeed(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Artifact.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Artifact.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Artifact.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f !== 0) {
        writer.writeUint64(
          1,
          f
        );
      }
      f = message.getType();
      if (f !== 0) {
        writer.writeEnum(
          2,
          f
        );
      }
      f = message.getMime();
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        );
      }
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeString(
          4,
          f
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeBytes(
          5,
          f
        );
      }
      f = jspb.Message.getField(message, 6);
      if (f != null) {
        writer.writeString(
          6,
          f
        );
      }
      f = message.getTokens();
      if (f != null) {
        writer.writeMessage(
          7,
          f,
          proto.gooseai.Tokens.serializeBinaryToWriter
        );
      }
      f = message.getClassifier();
      if (f != null) {
        writer.writeMessage(
          11,
          f,
          proto.gooseai.ClassifierParameters.serializeBinaryToWriter
        );
      }
      f = message.getIndex();
      if (f !== 0) {
        writer.writeUint32(
          8,
          f
        );
      }
      f = message.getFinishReason();
      if (f !== 0) {
        writer.writeEnum(
          9,
          f
        );
      }
      f = message.getSeed();
      if (f !== 0) {
        writer.writeUint32(
          10,
          f
        );
      }
    };
    proto.gooseai.Artifact.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.Artifact.prototype.setId = function(value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    proto.gooseai.Artifact.prototype.getType = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.Artifact.prototype.setType = function(value) {
      return jspb.Message.setProto3EnumField(this, 2, value);
    };
    proto.gooseai.Artifact.prototype.getMime = function() {
      return jspb.Message.getFieldWithDefault(this, 3, "");
    };
    proto.gooseai.Artifact.prototype.setMime = function(value) {
      return jspb.Message.setProto3StringField(this, 3, value);
    };
    proto.gooseai.Artifact.prototype.getMagic = function() {
      return jspb.Message.getFieldWithDefault(this, 4, "");
    };
    proto.gooseai.Artifact.prototype.setMagic = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.gooseai.Artifact.prototype.clearMagic = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.gooseai.Artifact.prototype.hasMagic = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.Artifact.prototype.getBinary = function() {
      return jspb.Message.getFieldWithDefault(this, 5, "");
    };
    proto.gooseai.Artifact.prototype.getBinary_asB64 = function() {
      return jspb.Message.bytesAsB64(
        this.getBinary()
      );
    };
    proto.gooseai.Artifact.prototype.getBinary_asU8 = function() {
      return jspb.Message.bytesAsU8(
        this.getBinary()
      );
    };
    proto.gooseai.Artifact.prototype.setBinary = function(value) {
      return jspb.Message.setOneofField(this, 5, proto.gooseai.Artifact.oneofGroups_[0], value);
    };
    proto.gooseai.Artifact.prototype.clearBinary = function() {
      return jspb.Message.setOneofField(this, 5, proto.gooseai.Artifact.oneofGroups_[0], void 0);
    };
    proto.gooseai.Artifact.prototype.hasBinary = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.Artifact.prototype.getText = function() {
      return jspb.Message.getFieldWithDefault(this, 6, "");
    };
    proto.gooseai.Artifact.prototype.setText = function(value) {
      return jspb.Message.setOneofField(this, 6, proto.gooseai.Artifact.oneofGroups_[0], value);
    };
    proto.gooseai.Artifact.prototype.clearText = function() {
      return jspb.Message.setOneofField(this, 6, proto.gooseai.Artifact.oneofGroups_[0], void 0);
    };
    proto.gooseai.Artifact.prototype.hasText = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.gooseai.Artifact.prototype.getTokens = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Tokens, 7);
    };
    proto.gooseai.Artifact.prototype.setTokens = function(value) {
      return jspb.Message.setOneofWrapperField(this, 7, proto.gooseai.Artifact.oneofGroups_[0], value);
    };
    proto.gooseai.Artifact.prototype.clearTokens = function() {
      return this.setTokens(void 0);
    };
    proto.gooseai.Artifact.prototype.hasTokens = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    proto.gooseai.Artifact.prototype.getClassifier = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.ClassifierParameters, 11);
    };
    proto.gooseai.Artifact.prototype.setClassifier = function(value) {
      return jspb.Message.setOneofWrapperField(this, 11, proto.gooseai.Artifact.oneofGroups_[0], value);
    };
    proto.gooseai.Artifact.prototype.clearClassifier = function() {
      return this.setClassifier(void 0);
    };
    proto.gooseai.Artifact.prototype.hasClassifier = function() {
      return jspb.Message.getField(this, 11) != null;
    };
    proto.gooseai.Artifact.prototype.getIndex = function() {
      return jspb.Message.getFieldWithDefault(this, 8, 0);
    };
    proto.gooseai.Artifact.prototype.setIndex = function(value) {
      return jspb.Message.setProto3IntField(this, 8, value);
    };
    proto.gooseai.Artifact.prototype.getFinishReason = function() {
      return jspb.Message.getFieldWithDefault(this, 9, 0);
    };
    proto.gooseai.Artifact.prototype.setFinishReason = function(value) {
      return jspb.Message.setProto3EnumField(this, 9, value);
    };
    proto.gooseai.Artifact.prototype.getSeed = function() {
      return jspb.Message.getFieldWithDefault(this, 10, 0);
    };
    proto.gooseai.Artifact.prototype.setSeed = function(value) {
      return jspb.Message.setProto3IntField(this, 10, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.PromptParameters.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.PromptParameters.toObject(opt_includeInstance, this);
      };
      proto.gooseai.PromptParameters.toObject = function(includeInstance, msg) {
        var f, obj = {
          init: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
          weight: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.PromptParameters.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.PromptParameters();
      return proto.gooseai.PromptParameters.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.PromptParameters.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readBool();
            msg.setInit(value);
            break;
          case 2:
            var value = reader.readFloat();
            msg.setWeight(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.PromptParameters.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.PromptParameters.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.PromptParameters.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeBool(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeFloat(
          2,
          f
        );
      }
    };
    proto.gooseai.PromptParameters.prototype.getInit = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 1, false);
    };
    proto.gooseai.PromptParameters.prototype.setInit = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.PromptParameters.prototype.clearInit = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.PromptParameters.prototype.hasInit = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.PromptParameters.prototype.getWeight = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.PromptParameters.prototype.setWeight = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.PromptParameters.prototype.clearWeight = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.PromptParameters.prototype.hasWeight = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.Prompt.oneofGroups_ = [[2, 3, 4]];
    proto.gooseai.Prompt.PromptCase = {
      PROMPT_NOT_SET: 0,
      TEXT: 2,
      TOKENS: 3,
      ARTIFACT: 4
    };
    proto.gooseai.Prompt.prototype.getPromptCase = function() {
      return jspb.Message.computeOneofCase(this, proto.gooseai.Prompt.oneofGroups_[0]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Prompt.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Prompt.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Prompt.toObject = function(includeInstance, msg) {
        var f, obj = {
          parameters: (f = msg.getParameters()) && proto.gooseai.PromptParameters.toObject(includeInstance, f),
          text: jspb.Message.getFieldWithDefault(msg, 2, ""),
          tokens: (f = msg.getTokens()) && proto.gooseai.Tokens.toObject(includeInstance, f),
          artifact: (f = msg.getArtifact()) && proto.gooseai.Artifact.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Prompt.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Prompt();
      return proto.gooseai.Prompt.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Prompt.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.PromptParameters();
            reader.readMessage(value, proto.gooseai.PromptParameters.deserializeBinaryFromReader);
            msg.setParameters(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setText(value);
            break;
          case 3:
            var value = new proto.gooseai.Tokens();
            reader.readMessage(value, proto.gooseai.Tokens.deserializeBinaryFromReader);
            msg.setTokens(value);
            break;
          case 4:
            var value = new proto.gooseai.Artifact();
            reader.readMessage(value, proto.gooseai.Artifact.deserializeBinaryFromReader);
            msg.setArtifact(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Prompt.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Prompt.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Prompt.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getParameters();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.gooseai.PromptParameters.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getTokens();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.gooseai.Tokens.serializeBinaryToWriter
        );
      }
      f = message.getArtifact();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.gooseai.Artifact.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Prompt.prototype.getParameters = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.PromptParameters, 1);
    };
    proto.gooseai.Prompt.prototype.setParameters = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.gooseai.Prompt.prototype.clearParameters = function() {
      return this.setParameters(void 0);
    };
    proto.gooseai.Prompt.prototype.hasParameters = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.Prompt.prototype.getText = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.Prompt.prototype.setText = function(value) {
      return jspb.Message.setOneofField(this, 2, proto.gooseai.Prompt.oneofGroups_[0], value);
    };
    proto.gooseai.Prompt.prototype.clearText = function() {
      return jspb.Message.setOneofField(this, 2, proto.gooseai.Prompt.oneofGroups_[0], void 0);
    };
    proto.gooseai.Prompt.prototype.hasText = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.Prompt.prototype.getTokens = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Tokens, 3);
    };
    proto.gooseai.Prompt.prototype.setTokens = function(value) {
      return jspb.Message.setOneofWrapperField(this, 3, proto.gooseai.Prompt.oneofGroups_[0], value);
    };
    proto.gooseai.Prompt.prototype.clearTokens = function() {
      return this.setTokens(void 0);
    };
    proto.gooseai.Prompt.prototype.hasTokens = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.Prompt.prototype.getArtifact = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Artifact, 4);
    };
    proto.gooseai.Prompt.prototype.setArtifact = function(value) {
      return jspb.Message.setOneofWrapperField(this, 4, proto.gooseai.Prompt.oneofGroups_[0], value);
    };
    proto.gooseai.Prompt.prototype.clearArtifact = function() {
      return this.setArtifact(void 0);
    };
    proto.gooseai.Prompt.prototype.hasArtifact = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.AnswerMeta.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.AnswerMeta.toObject(opt_includeInstance, this);
      };
      proto.gooseai.AnswerMeta.toObject = function(includeInstance, msg) {
        var f, obj = {
          gpuId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          cpuId: jspb.Message.getFieldWithDefault(msg, 2, ""),
          nodeId: jspb.Message.getFieldWithDefault(msg, 3, ""),
          engineId: jspb.Message.getFieldWithDefault(msg, 4, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.AnswerMeta.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.AnswerMeta();
      return proto.gooseai.AnswerMeta.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.AnswerMeta.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setGpuId(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setCpuId(value);
            break;
          case 3:
            var value = reader.readString();
            msg.setNodeId(value);
            break;
          case 4:
            var value = reader.readString();
            msg.setEngineId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.AnswerMeta.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.AnswerMeta.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.AnswerMeta.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeString(
          2,
          f
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeString(
          3,
          f
        );
      }
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeString(
          4,
          f
        );
      }
    };
    proto.gooseai.AnswerMeta.prototype.getGpuId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.AnswerMeta.prototype.setGpuId = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.AnswerMeta.prototype.clearGpuId = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.AnswerMeta.prototype.hasGpuId = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.AnswerMeta.prototype.getCpuId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.AnswerMeta.prototype.setCpuId = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.AnswerMeta.prototype.clearCpuId = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.AnswerMeta.prototype.hasCpuId = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.AnswerMeta.prototype.getNodeId = function() {
      return jspb.Message.getFieldWithDefault(this, 3, "");
    };
    proto.gooseai.AnswerMeta.prototype.setNodeId = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.AnswerMeta.prototype.clearNodeId = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.AnswerMeta.prototype.hasNodeId = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.AnswerMeta.prototype.getEngineId = function() {
      return jspb.Message.getFieldWithDefault(this, 4, "");
    };
    proto.gooseai.AnswerMeta.prototype.setEngineId = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.gooseai.AnswerMeta.prototype.clearEngineId = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.gooseai.AnswerMeta.prototype.hasEngineId = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.Answer.repeatedFields_ = [7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Answer.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Answer.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Answer.toObject = function(includeInstance, msg) {
        var f, obj = {
          answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          requestId: jspb.Message.getFieldWithDefault(msg, 2, ""),
          received: jspb.Message.getFieldWithDefault(msg, 3, 0),
          created: jspb.Message.getFieldWithDefault(msg, 4, 0),
          meta: (f = msg.getMeta()) && proto.gooseai.AnswerMeta.toObject(includeInstance, f),
          artifactsList: jspb.Message.toObjectList(
            msg.getArtifactsList(),
            proto.gooseai.Artifact.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Answer.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Answer();
      return proto.gooseai.Answer.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Answer.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setAnswerId(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setRequestId(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setReceived(value);
            break;
          case 4:
            var value = reader.readUint64();
            msg.setCreated(value);
            break;
          case 6:
            var value = new proto.gooseai.AnswerMeta();
            reader.readMessage(value, proto.gooseai.AnswerMeta.deserializeBinaryFromReader);
            msg.setMeta(value);
            break;
          case 7:
            var value = new proto.gooseai.Artifact();
            reader.readMessage(value, proto.gooseai.Artifact.deserializeBinaryFromReader);
            msg.addArtifacts(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Answer.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Answer.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Answer.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getAnswerId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRequestId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getReceived();
      if (f !== 0) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = message.getCreated();
      if (f !== 0) {
        writer.writeUint64(
          4,
          f
        );
      }
      f = message.getMeta();
      if (f != null) {
        writer.writeMessage(
          6,
          f,
          proto.gooseai.AnswerMeta.serializeBinaryToWriter
        );
      }
      f = message.getArtifactsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          7,
          f,
          proto.gooseai.Artifact.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Answer.prototype.getAnswerId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Answer.prototype.setAnswerId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Answer.prototype.getRequestId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.Answer.prototype.setRequestId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.Answer.prototype.getReceived = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.Answer.prototype.setReceived = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    proto.gooseai.Answer.prototype.getCreated = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.Answer.prototype.setCreated = function(value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    proto.gooseai.Answer.prototype.getMeta = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.AnswerMeta, 6);
    };
    proto.gooseai.Answer.prototype.setMeta = function(value) {
      return jspb.Message.setWrapperField(this, 6, value);
    };
    proto.gooseai.Answer.prototype.clearMeta = function() {
      return this.setMeta(void 0);
    };
    proto.gooseai.Answer.prototype.hasMeta = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.gooseai.Answer.prototype.getArtifactsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Artifact, 7);
    };
    proto.gooseai.Answer.prototype.setArtifactsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 7, value);
    };
    proto.gooseai.Answer.prototype.addArtifacts = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.gooseai.Artifact, opt_index);
    };
    proto.gooseai.Answer.prototype.clearArtifactsList = function() {
      return this.setArtifactsList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.SamplerParameters.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.SamplerParameters.toObject(opt_includeInstance, this);
      };
      proto.gooseai.SamplerParameters.toObject = function(includeInstance, msg) {
        var f, obj = {
          eta: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
          samplingSteps: jspb.Message.getFieldWithDefault(msg, 2, 0),
          latentChannels: jspb.Message.getFieldWithDefault(msg, 3, 0),
          downsamplingFactor: jspb.Message.getFieldWithDefault(msg, 4, 0),
          cfgScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.SamplerParameters.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.SamplerParameters();
      return proto.gooseai.SamplerParameters.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.SamplerParameters.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readFloat();
            msg.setEta(value);
            break;
          case 2:
            var value = reader.readUint64();
            msg.setSamplingSteps(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setLatentChannels(value);
            break;
          case 4:
            var value = reader.readUint64();
            msg.setDownsamplingFactor(value);
            break;
          case 5:
            var value = reader.readFloat();
            msg.setCfgScale(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.SamplerParameters.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.SamplerParameters.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.SamplerParameters.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeFloat(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeUint64(
          4,
          f
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeFloat(
          5,
          f
        );
      }
    };
    proto.gooseai.SamplerParameters.prototype.getEta = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.SamplerParameters.prototype.setEta = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.SamplerParameters.prototype.clearEta = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.SamplerParameters.prototype.hasEta = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.SamplerParameters.prototype.getSamplingSteps = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.SamplerParameters.prototype.setSamplingSteps = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.SamplerParameters.prototype.clearSamplingSteps = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.SamplerParameters.prototype.hasSamplingSteps = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.SamplerParameters.prototype.getLatentChannels = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.SamplerParameters.prototype.setLatentChannels = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.SamplerParameters.prototype.clearLatentChannels = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.SamplerParameters.prototype.hasLatentChannels = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.SamplerParameters.prototype.getDownsamplingFactor = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.SamplerParameters.prototype.setDownsamplingFactor = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.gooseai.SamplerParameters.prototype.clearDownsamplingFactor = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.gooseai.SamplerParameters.prototype.hasDownsamplingFactor = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.SamplerParameters.prototype.getCfgScale = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.SamplerParameters.prototype.setCfgScale = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.SamplerParameters.prototype.clearCfgScale = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.SamplerParameters.prototype.hasCfgScale = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ConditionerParameters.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ConditionerParameters.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ConditionerParameters.toObject = function(includeInstance, msg) {
        var f, obj = {
          vectorAdjustPrior: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ConditionerParameters.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ConditionerParameters();
      return proto.gooseai.ConditionerParameters.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ConditionerParameters.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setVectorAdjustPrior(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ConditionerParameters.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ConditionerParameters.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ConditionerParameters.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.gooseai.ConditionerParameters.prototype.getVectorAdjustPrior = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.ConditionerParameters.prototype.setVectorAdjustPrior = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.ConditionerParameters.prototype.clearVectorAdjustPrior = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.ConditionerParameters.prototype.hasVectorAdjustPrior = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ScheduleParameters.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ScheduleParameters.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ScheduleParameters.toObject = function(includeInstance, msg) {
        var f, obj = {
          start: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
          end: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ScheduleParameters.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ScheduleParameters();
      return proto.gooseai.ScheduleParameters.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ScheduleParameters.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readFloat();
            msg.setStart(value);
            break;
          case 2:
            var value = reader.readFloat();
            msg.setEnd(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ScheduleParameters.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ScheduleParameters.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ScheduleParameters.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeFloat(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeFloat(
          2,
          f
        );
      }
    };
    proto.gooseai.ScheduleParameters.prototype.getStart = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.ScheduleParameters.prototype.setStart = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.ScheduleParameters.prototype.clearStart = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.ScheduleParameters.prototype.hasStart = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.ScheduleParameters.prototype.getEnd = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.ScheduleParameters.prototype.setEnd = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.ScheduleParameters.prototype.clearEnd = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.ScheduleParameters.prototype.hasEnd = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.StepParameter.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.StepParameter.toObject(opt_includeInstance, this);
      };
      proto.gooseai.StepParameter.toObject = function(includeInstance, msg) {
        var f, obj = {
          scaledStep: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
          sampler: (f = msg.getSampler()) && proto.gooseai.SamplerParameters.toObject(includeInstance, f),
          schedule: (f = msg.getSchedule()) && proto.gooseai.ScheduleParameters.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.StepParameter.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.StepParameter();
      return proto.gooseai.StepParameter.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.StepParameter.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readFloat();
            msg.setScaledStep(value);
            break;
          case 2:
            var value = new proto.gooseai.SamplerParameters();
            reader.readMessage(value, proto.gooseai.SamplerParameters.deserializeBinaryFromReader);
            msg.setSampler(value);
            break;
          case 3:
            var value = new proto.gooseai.ScheduleParameters();
            reader.readMessage(value, proto.gooseai.ScheduleParameters.deserializeBinaryFromReader);
            msg.setSchedule(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.StepParameter.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.StepParameter.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.StepParameter.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getScaledStep();
      if (f !== 0) {
        writer.writeFloat(
          1,
          f
        );
      }
      f = message.getSampler();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.gooseai.SamplerParameters.serializeBinaryToWriter
        );
      }
      f = message.getSchedule();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.gooseai.ScheduleParameters.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.StepParameter.prototype.getScaledStep = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.StepParameter.prototype.setScaledStep = function(value) {
      return jspb.Message.setProto3FloatField(this, 1, value);
    };
    proto.gooseai.StepParameter.prototype.getSampler = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.SamplerParameters, 2);
    };
    proto.gooseai.StepParameter.prototype.setSampler = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.gooseai.StepParameter.prototype.clearSampler = function() {
      return this.setSampler(void 0);
    };
    proto.gooseai.StepParameter.prototype.hasSampler = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.StepParameter.prototype.getSchedule = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.ScheduleParameters, 3);
    };
    proto.gooseai.StepParameter.prototype.setSchedule = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.gooseai.StepParameter.prototype.clearSchedule = function() {
      return this.setSchedule(void 0);
    };
    proto.gooseai.StepParameter.prototype.hasSchedule = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.TransformType.oneofGroups_ = [[1, 2]];
    proto.gooseai.TransformType.TypeCase = {
      TYPE_NOT_SET: 0,
      DIFFUSION: 1,
      UPSCALER: 2
    };
    proto.gooseai.TransformType.prototype.getTypeCase = function() {
      return jspb.Message.computeOneofCase(this, proto.gooseai.TransformType.oneofGroups_[0]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.TransformType.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.TransformType.toObject(opt_includeInstance, this);
      };
      proto.gooseai.TransformType.toObject = function(includeInstance, msg) {
        var f, obj = {
          diffusion: jspb.Message.getFieldWithDefault(msg, 1, 0),
          upscaler: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.TransformType.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.TransformType();
      return proto.gooseai.TransformType.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.TransformType.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readEnum();
            msg.setDiffusion(value);
            break;
          case 2:
            var value = reader.readEnum();
            msg.setUpscaler(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.TransformType.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.TransformType.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.TransformType.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeEnum(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeEnum(
          2,
          f
        );
      }
    };
    proto.gooseai.TransformType.prototype.getDiffusion = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.TransformType.prototype.setDiffusion = function(value) {
      return jspb.Message.setOneofField(this, 1, proto.gooseai.TransformType.oneofGroups_[0], value);
    };
    proto.gooseai.TransformType.prototype.clearDiffusion = function() {
      return jspb.Message.setOneofField(this, 1, proto.gooseai.TransformType.oneofGroups_[0], void 0);
    };
    proto.gooseai.TransformType.prototype.hasDiffusion = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.TransformType.prototype.getUpscaler = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.TransformType.prototype.setUpscaler = function(value) {
      return jspb.Message.setOneofField(this, 2, proto.gooseai.TransformType.oneofGroups_[0], value);
    };
    proto.gooseai.TransformType.prototype.clearUpscaler = function() {
      return jspb.Message.setOneofField(this, 2, proto.gooseai.TransformType.oneofGroups_[0], void 0);
    };
    proto.gooseai.TransformType.prototype.hasUpscaler = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.ImageParameters.repeatedFields_ = [3, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ImageParameters.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ImageParameters.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ImageParameters.toObject = function(includeInstance, msg) {
        var f, obj = {
          height: jspb.Message.getFieldWithDefault(msg, 1, 0),
          width: jspb.Message.getFieldWithDefault(msg, 2, 0),
          seedList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? void 0 : f,
          samples: jspb.Message.getFieldWithDefault(msg, 4, 0),
          steps: jspb.Message.getFieldWithDefault(msg, 5, 0),
          transform: (f = msg.getTransform()) && proto.gooseai.TransformType.toObject(includeInstance, f),
          parametersList: jspb.Message.toObjectList(
            msg.getParametersList(),
            proto.gooseai.StepParameter.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ImageParameters.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ImageParameters();
      return proto.gooseai.ImageParameters.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ImageParameters.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readUint64();
            msg.setHeight(value);
            break;
          case 2:
            var value = reader.readUint64();
            msg.setWidth(value);
            break;
          case 3:
            var values = reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()];
            for (var i = 0; i < values.length; i++) {
              msg.addSeed(values[i]);
            }
            break;
          case 4:
            var value = reader.readUint64();
            msg.setSamples(value);
            break;
          case 5:
            var value = reader.readUint64();
            msg.setSteps(value);
            break;
          case 6:
            var value = new proto.gooseai.TransformType();
            reader.readMessage(value, proto.gooseai.TransformType.deserializeBinaryFromReader);
            msg.setTransform(value);
            break;
          case 7:
            var value = new proto.gooseai.StepParameter();
            reader.readMessage(value, proto.gooseai.StepParameter.deserializeBinaryFromReader);
            msg.addParameters(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ImageParameters.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ImageParameters.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ImageParameters.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeUint64(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = message.getSeedList();
      if (f.length > 0) {
        writer.writePackedUint32(
          3,
          f
        );
      }
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeUint64(
          4,
          f
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeUint64(
          5,
          f
        );
      }
      f = message.getTransform();
      if (f != null) {
        writer.writeMessage(
          6,
          f,
          proto.gooseai.TransformType.serializeBinaryToWriter
        );
      }
      f = message.getParametersList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          7,
          f,
          proto.gooseai.StepParameter.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.ImageParameters.prototype.getHeight = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.ImageParameters.prototype.setHeight = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.ImageParameters.prototype.clearHeight = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.ImageParameters.prototype.hasHeight = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.ImageParameters.prototype.getWidth = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.ImageParameters.prototype.setWidth = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.ImageParameters.prototype.clearWidth = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.ImageParameters.prototype.hasWidth = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.ImageParameters.prototype.getSeedList = function() {
      return jspb.Message.getRepeatedField(this, 3);
    };
    proto.gooseai.ImageParameters.prototype.setSeedList = function(value) {
      return jspb.Message.setField(this, 3, value || []);
    };
    proto.gooseai.ImageParameters.prototype.addSeed = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
    };
    proto.gooseai.ImageParameters.prototype.clearSeedList = function() {
      return this.setSeedList([]);
    };
    proto.gooseai.ImageParameters.prototype.getSamples = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.ImageParameters.prototype.setSamples = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.gooseai.ImageParameters.prototype.clearSamples = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.gooseai.ImageParameters.prototype.hasSamples = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.ImageParameters.prototype.getSteps = function() {
      return jspb.Message.getFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.ImageParameters.prototype.setSteps = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.ImageParameters.prototype.clearSteps = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.ImageParameters.prototype.hasSteps = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.ImageParameters.prototype.getTransform = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.TransformType, 6);
    };
    proto.gooseai.ImageParameters.prototype.setTransform = function(value) {
      return jspb.Message.setWrapperField(this, 6, value);
    };
    proto.gooseai.ImageParameters.prototype.clearTransform = function() {
      return this.setTransform(void 0);
    };
    proto.gooseai.ImageParameters.prototype.hasTransform = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.gooseai.ImageParameters.prototype.getParametersList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.StepParameter, 7);
    };
    proto.gooseai.ImageParameters.prototype.setParametersList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 7, value);
    };
    proto.gooseai.ImageParameters.prototype.addParameters = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.gooseai.StepParameter, opt_index);
    };
    proto.gooseai.ImageParameters.prototype.clearParametersList = function() {
      return this.setParametersList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ClassifierConcept.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ClassifierConcept.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ClassifierConcept.toObject = function(includeInstance, msg) {
        var f, obj = {
          concept: jspb.Message.getFieldWithDefault(msg, 1, ""),
          threshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ClassifierConcept.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ClassifierConcept();
      return proto.gooseai.ClassifierConcept.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ClassifierConcept.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setConcept(value);
            break;
          case 2:
            var value = reader.readFloat();
            msg.setThreshold(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ClassifierConcept.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ClassifierConcept.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ClassifierConcept.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getConcept();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeFloat(
          2,
          f
        );
      }
    };
    proto.gooseai.ClassifierConcept.prototype.getConcept = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.ClassifierConcept.prototype.setConcept = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.ClassifierConcept.prototype.getThreshold = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.ClassifierConcept.prototype.setThreshold = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.ClassifierConcept.prototype.clearThreshold = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.ClassifierConcept.prototype.hasThreshold = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.ClassifierCategory.repeatedFields_ = [2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ClassifierCategory.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ClassifierCategory.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ClassifierCategory.toObject = function(includeInstance, msg) {
        var f, obj = {
          name: jspb.Message.getFieldWithDefault(msg, 1, ""),
          conceptsList: jspb.Message.toObjectList(
            msg.getConceptsList(),
            proto.gooseai.ClassifierConcept.toObject,
            includeInstance
          ),
          adjustment: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0),
          action: jspb.Message.getFieldWithDefault(msg, 4, 0),
          classifierMode: jspb.Message.getFieldWithDefault(msg, 5, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ClassifierCategory.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ClassifierCategory();
      return proto.gooseai.ClassifierCategory.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ClassifierCategory.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setName(value);
            break;
          case 2:
            var value = new proto.gooseai.ClassifierConcept();
            reader.readMessage(value, proto.gooseai.ClassifierConcept.deserializeBinaryFromReader);
            msg.addConcepts(value);
            break;
          case 3:
            var value = reader.readFloat();
            msg.setAdjustment(value);
            break;
          case 4:
            var value = reader.readEnum();
            msg.setAction(value);
            break;
          case 5:
            var value = reader.readEnum();
            msg.setClassifierMode(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ClassifierCategory.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ClassifierCategory.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ClassifierCategory.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getConceptsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          2,
          f,
          proto.gooseai.ClassifierConcept.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeFloat(
          3,
          f
        );
      }
      f = jspb.Message.getField(message, 4);
      if (f != null) {
        writer.writeEnum(
          4,
          f
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeEnum(
          5,
          f
        );
      }
    };
    proto.gooseai.ClassifierCategory.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.ClassifierCategory.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.ClassifierCategory.prototype.getConceptsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.ClassifierConcept, 2);
    };
    proto.gooseai.ClassifierCategory.prototype.setConceptsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.gooseai.ClassifierCategory.prototype.addConcepts = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.ClassifierConcept, opt_index);
    };
    proto.gooseai.ClassifierCategory.prototype.clearConceptsList = function() {
      return this.setConceptsList([]);
    };
    proto.gooseai.ClassifierCategory.prototype.getAdjustment = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.ClassifierCategory.prototype.setAdjustment = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.ClassifierCategory.prototype.clearAdjustment = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.ClassifierCategory.prototype.hasAdjustment = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.ClassifierCategory.prototype.getAction = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.ClassifierCategory.prototype.setAction = function(value) {
      return jspb.Message.setField(this, 4, value);
    };
    proto.gooseai.ClassifierCategory.prototype.clearAction = function() {
      return jspb.Message.setField(this, 4, void 0);
    };
    proto.gooseai.ClassifierCategory.prototype.hasAction = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.ClassifierCategory.prototype.getClassifierMode = function() {
      return jspb.Message.getFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.ClassifierCategory.prototype.setClassifierMode = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.ClassifierCategory.prototype.clearClassifierMode = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.ClassifierCategory.prototype.hasClassifierMode = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.ClassifierParameters.repeatedFields_ = [1, 2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ClassifierParameters.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ClassifierParameters.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ClassifierParameters.toObject = function(includeInstance, msg) {
        var f, obj = {
          categoriesList: jspb.Message.toObjectList(
            msg.getCategoriesList(),
            proto.gooseai.ClassifierCategory.toObject,
            includeInstance
          ),
          exceedsList: jspb.Message.toObjectList(
            msg.getExceedsList(),
            proto.gooseai.ClassifierCategory.toObject,
            includeInstance
          ),
          realizedAction: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ClassifierParameters.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ClassifierParameters();
      return proto.gooseai.ClassifierParameters.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ClassifierParameters.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.ClassifierCategory();
            reader.readMessage(value, proto.gooseai.ClassifierCategory.deserializeBinaryFromReader);
            msg.addCategories(value);
            break;
          case 2:
            var value = new proto.gooseai.ClassifierCategory();
            reader.readMessage(value, proto.gooseai.ClassifierCategory.deserializeBinaryFromReader);
            msg.addExceeds(value);
            break;
          case 3:
            var value = reader.readEnum();
            msg.setRealizedAction(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ClassifierParameters.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ClassifierParameters.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ClassifierParameters.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getCategoriesList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.gooseai.ClassifierCategory.serializeBinaryToWriter
        );
      }
      f = message.getExceedsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          2,
          f,
          proto.gooseai.ClassifierCategory.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 3);
      if (f != null) {
        writer.writeEnum(
          3,
          f
        );
      }
    };
    proto.gooseai.ClassifierParameters.prototype.getCategoriesList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.ClassifierCategory, 1);
    };
    proto.gooseai.ClassifierParameters.prototype.setCategoriesList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.gooseai.ClassifierParameters.prototype.addCategories = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.ClassifierCategory, opt_index);
    };
    proto.gooseai.ClassifierParameters.prototype.clearCategoriesList = function() {
      return this.setCategoriesList([]);
    };
    proto.gooseai.ClassifierParameters.prototype.getExceedsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.ClassifierCategory, 2);
    };
    proto.gooseai.ClassifierParameters.prototype.setExceedsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.gooseai.ClassifierParameters.prototype.addExceeds = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.ClassifierCategory, opt_index);
    };
    proto.gooseai.ClassifierParameters.prototype.clearExceedsList = function() {
      return this.setExceedsList([]);
    };
    proto.gooseai.ClassifierParameters.prototype.getRealizedAction = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.ClassifierParameters.prototype.setRealizedAction = function(value) {
      return jspb.Message.setField(this, 3, value);
    };
    proto.gooseai.ClassifierParameters.prototype.clearRealizedAction = function() {
      return jspb.Message.setField(this, 3, void 0);
    };
    proto.gooseai.ClassifierParameters.prototype.hasRealizedAction = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.AssetParameters.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.AssetParameters.toObject(opt_includeInstance, this);
      };
      proto.gooseai.AssetParameters.toObject = function(includeInstance, msg) {
        var f, obj = {
          action: jspb.Message.getFieldWithDefault(msg, 1, 0),
          project: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.AssetParameters.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.AssetParameters();
      return proto.gooseai.AssetParameters.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.AssetParameters.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readEnum();
            msg.setAction(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setProject(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.AssetParameters.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.AssetParameters.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.AssetParameters.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getAction();
      if (f !== 0) {
        writer.writeEnum(
          1,
          f
        );
      }
      f = message.getProject();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.gooseai.AssetParameters.prototype.getAction = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.AssetParameters.prototype.setAction = function(value) {
      return jspb.Message.setProto3EnumField(this, 1, value);
    };
    proto.gooseai.AssetParameters.prototype.getProject = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.AssetParameters.prototype.setProject = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.Request.repeatedFields_ = [4];
    proto.gooseai.Request.oneofGroups_ = [[5, 7, 8]];
    proto.gooseai.Request.ParamsCase = {
      PARAMS_NOT_SET: 0,
      IMAGE: 5,
      CLASSIFIER: 7,
      ASSET: 8
    };
    proto.gooseai.Request.prototype.getParamsCase = function() {
      return jspb.Message.computeOneofCase(this, proto.gooseai.Request.oneofGroups_[0]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Request.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Request.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Request.toObject = function(includeInstance, msg) {
        var f, obj = {
          engineId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          requestId: jspb.Message.getFieldWithDefault(msg, 2, ""),
          requestedType: jspb.Message.getFieldWithDefault(msg, 3, 0),
          promptList: jspb.Message.toObjectList(
            msg.getPromptList(),
            proto.gooseai.Prompt.toObject,
            includeInstance
          ),
          image: (f = msg.getImage()) && proto.gooseai.ImageParameters.toObject(includeInstance, f),
          classifier: (f = msg.getClassifier()) && proto.gooseai.ClassifierParameters.toObject(includeInstance, f),
          asset: (f = msg.getAsset()) && proto.gooseai.AssetParameters.toObject(includeInstance, f),
          conditioner: (f = msg.getConditioner()) && proto.gooseai.ConditionerParameters.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Request.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Request();
      return proto.gooseai.Request.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Request.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setEngineId(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setRequestId(value);
            break;
          case 3:
            var value = reader.readEnum();
            msg.setRequestedType(value);
            break;
          case 4:
            var value = new proto.gooseai.Prompt();
            reader.readMessage(value, proto.gooseai.Prompt.deserializeBinaryFromReader);
            msg.addPrompt(value);
            break;
          case 5:
            var value = new proto.gooseai.ImageParameters();
            reader.readMessage(value, proto.gooseai.ImageParameters.deserializeBinaryFromReader);
            msg.setImage(value);
            break;
          case 7:
            var value = new proto.gooseai.ClassifierParameters();
            reader.readMessage(value, proto.gooseai.ClassifierParameters.deserializeBinaryFromReader);
            msg.setClassifier(value);
            break;
          case 8:
            var value = new proto.gooseai.AssetParameters();
            reader.readMessage(value, proto.gooseai.AssetParameters.deserializeBinaryFromReader);
            msg.setAsset(value);
            break;
          case 6:
            var value = new proto.gooseai.ConditionerParameters();
            reader.readMessage(value, proto.gooseai.ConditionerParameters.deserializeBinaryFromReader);
            msg.setConditioner(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Request.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Request.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Request.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getEngineId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRequestId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getRequestedType();
      if (f !== 0) {
        writer.writeEnum(
          3,
          f
        );
      }
      f = message.getPromptList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          4,
          f,
          proto.gooseai.Prompt.serializeBinaryToWriter
        );
      }
      f = message.getImage();
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          proto.gooseai.ImageParameters.serializeBinaryToWriter
        );
      }
      f = message.getClassifier();
      if (f != null) {
        writer.writeMessage(
          7,
          f,
          proto.gooseai.ClassifierParameters.serializeBinaryToWriter
        );
      }
      f = message.getAsset();
      if (f != null) {
        writer.writeMessage(
          8,
          f,
          proto.gooseai.AssetParameters.serializeBinaryToWriter
        );
      }
      f = message.getConditioner();
      if (f != null) {
        writer.writeMessage(
          6,
          f,
          proto.gooseai.ConditionerParameters.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Request.prototype.getEngineId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Request.prototype.setEngineId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Request.prototype.getRequestId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.Request.prototype.setRequestId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.Request.prototype.getRequestedType = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.Request.prototype.setRequestedType = function(value) {
      return jspb.Message.setProto3EnumField(this, 3, value);
    };
    proto.gooseai.Request.prototype.getPromptList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Prompt, 4);
    };
    proto.gooseai.Request.prototype.setPromptList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 4, value);
    };
    proto.gooseai.Request.prototype.addPrompt = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gooseai.Prompt, opt_index);
    };
    proto.gooseai.Request.prototype.clearPromptList = function() {
      return this.setPromptList([]);
    };
    proto.gooseai.Request.prototype.getImage = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.ImageParameters, 5);
    };
    proto.gooseai.Request.prototype.setImage = function(value) {
      return jspb.Message.setOneofWrapperField(this, 5, proto.gooseai.Request.oneofGroups_[0], value);
    };
    proto.gooseai.Request.prototype.clearImage = function() {
      return this.setImage(void 0);
    };
    proto.gooseai.Request.prototype.hasImage = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.Request.prototype.getClassifier = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.ClassifierParameters, 7);
    };
    proto.gooseai.Request.prototype.setClassifier = function(value) {
      return jspb.Message.setOneofWrapperField(this, 7, proto.gooseai.Request.oneofGroups_[0], value);
    };
    proto.gooseai.Request.prototype.clearClassifier = function() {
      return this.setClassifier(void 0);
    };
    proto.gooseai.Request.prototype.hasClassifier = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    proto.gooseai.Request.prototype.getAsset = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.AssetParameters, 8);
    };
    proto.gooseai.Request.prototype.setAsset = function(value) {
      return jspb.Message.setOneofWrapperField(this, 8, proto.gooseai.Request.oneofGroups_[0], value);
    };
    proto.gooseai.Request.prototype.clearAsset = function() {
      return this.setAsset(void 0);
    };
    proto.gooseai.Request.prototype.hasAsset = function() {
      return jspb.Message.getField(this, 8) != null;
    };
    proto.gooseai.Request.prototype.getConditioner = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.ConditionerParameters, 6);
    };
    proto.gooseai.Request.prototype.setConditioner = function(value) {
      return jspb.Message.setWrapperField(this, 6, value);
    };
    proto.gooseai.Request.prototype.clearConditioner = function() {
      return this.setConditioner(void 0);
    };
    proto.gooseai.Request.prototype.hasConditioner = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.gooseai.OnStatus.repeatedFields_ = [1, 3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.OnStatus.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.OnStatus.toObject(opt_includeInstance, this);
      };
      proto.gooseai.OnStatus.toObject = function(includeInstance, msg) {
        var f, obj = {
          reasonList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? void 0 : f,
          target: jspb.Message.getFieldWithDefault(msg, 2, ""),
          actionList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? void 0 : f
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.OnStatus.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.OnStatus();
      return proto.gooseai.OnStatus.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.OnStatus.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var values = reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()];
            for (var i = 0; i < values.length; i++) {
              msg.addReason(values[i]);
            }
            break;
          case 2:
            var value = reader.readString();
            msg.setTarget(value);
            break;
          case 3:
            var values = reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()];
            for (var i = 0; i < values.length; i++) {
              msg.addAction(values[i]);
            }
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.OnStatus.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.OnStatus.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.OnStatus.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getReasonList();
      if (f.length > 0) {
        writer.writePackedEnum(
          1,
          f
        );
      }
      f = jspb.Message.getField(message, 2);
      if (f != null) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getActionList();
      if (f.length > 0) {
        writer.writePackedEnum(
          3,
          f
        );
      }
    };
    proto.gooseai.OnStatus.prototype.getReasonList = function() {
      return jspb.Message.getRepeatedField(this, 1);
    };
    proto.gooseai.OnStatus.prototype.setReasonList = function(value) {
      return jspb.Message.setField(this, 1, value || []);
    };
    proto.gooseai.OnStatus.prototype.addReason = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
    };
    proto.gooseai.OnStatus.prototype.clearReasonList = function() {
      return this.setReasonList([]);
    };
    proto.gooseai.OnStatus.prototype.getTarget = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.OnStatus.prototype.setTarget = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.OnStatus.prototype.clearTarget = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.OnStatus.prototype.hasTarget = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.OnStatus.prototype.getActionList = function() {
      return jspb.Message.getRepeatedField(this, 3);
    };
    proto.gooseai.OnStatus.prototype.setActionList = function(value) {
      return jspb.Message.setField(this, 3, value || []);
    };
    proto.gooseai.OnStatus.prototype.addAction = function(value, opt_index) {
      return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
    };
    proto.gooseai.OnStatus.prototype.clearActionList = function() {
      return this.setActionList([]);
    };
    proto.gooseai.Stage.repeatedFields_ = [3];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Stage.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Stage.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Stage.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          request: (f = msg.getRequest()) && proto.gooseai.Request.toObject(includeInstance, f),
          onStatusList: jspb.Message.toObjectList(
            msg.getOnStatusList(),
            proto.gooseai.OnStatus.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Stage.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Stage();
      return proto.gooseai.Stage.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Stage.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setId(value);
            break;
          case 2:
            var value = new proto.gooseai.Request();
            reader.readMessage(value, proto.gooseai.Request.deserializeBinaryFromReader);
            msg.setRequest(value);
            break;
          case 3:
            var value = new proto.gooseai.OnStatus();
            reader.readMessage(value, proto.gooseai.OnStatus.deserializeBinaryFromReader);
            msg.addOnStatus(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Stage.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Stage.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Stage.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRequest();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.gooseai.Request.serializeBinaryToWriter
        );
      }
      f = message.getOnStatusList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          3,
          f,
          proto.gooseai.OnStatus.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Stage.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Stage.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Stage.prototype.getRequest = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Request, 2);
    };
    proto.gooseai.Stage.prototype.setRequest = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.gooseai.Stage.prototype.clearRequest = function() {
      return this.setRequest(void 0);
    };
    proto.gooseai.Stage.prototype.hasRequest = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.Stage.prototype.getOnStatusList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.OnStatus, 3);
    };
    proto.gooseai.Stage.prototype.setOnStatusList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 3, value);
    };
    proto.gooseai.Stage.prototype.addOnStatus = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.gooseai.OnStatus, opt_index);
    };
    proto.gooseai.Stage.prototype.clearOnStatusList = function() {
      return this.setOnStatusList([]);
    };
    proto.gooseai.ChainRequest.repeatedFields_ = [2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ChainRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ChainRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ChainRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          requestId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          stageList: jspb.Message.toObjectList(
            msg.getStageList(),
            proto.gooseai.Stage.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ChainRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ChainRequest();
      return proto.gooseai.ChainRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ChainRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setRequestId(value);
            break;
          case 2:
            var value = new proto.gooseai.Stage();
            reader.readMessage(value, proto.gooseai.Stage.deserializeBinaryFromReader);
            msg.addStage(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ChainRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ChainRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ChainRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getRequestId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getStageList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          2,
          f,
          proto.gooseai.Stage.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.ChainRequest.prototype.getRequestId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.ChainRequest.prototype.setRequestId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.ChainRequest.prototype.getStageList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Stage, 2);
    };
    proto.gooseai.ChainRequest.prototype.setStageList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.gooseai.ChainRequest.prototype.addStage = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.Stage, opt_index);
    };
    proto.gooseai.ChainRequest.prototype.clearStageList = function() {
      return this.setStageList([]);
    };
    proto.gooseai.FinishReason = {
      NULL: 0,
      LENGTH: 1,
      STOP: 2,
      ERROR: 3,
      FILTER: 4
    };
    proto.gooseai.ArtifactType = {
      ARTIFACT_NONE: 0,
      ARTIFACT_IMAGE: 1,
      ARTIFACT_VIDEO: 2,
      ARTIFACT_TEXT: 3,
      ARTIFACT_TOKENS: 4,
      ARTIFACT_EMBEDDING: 5,
      ARTIFACT_CLASSIFICATIONS: 6,
      ARTIFACT_MASK: 7
    };
    proto.gooseai.DiffusionSampler = {
      SAMPLER_DDIM: 0,
      SAMPLER_DDPM: 1,
      SAMPLER_K_EULER: 2,
      SAMPLER_K_EULER_ANCESTRAL: 3,
      SAMPLER_K_HEUN: 4,
      SAMPLER_K_DPM_2: 5,
      SAMPLER_K_DPM_2_ANCESTRAL: 6,
      SAMPLER_K_LMS: 7
    };
    proto.gooseai.Upscaler = {
      UPSCALER_RGB: 0,
      UPSCALER_GFPGAN: 1,
      UPSCALER_ESRGAN: 2
    };
    proto.gooseai.Action = {
      ACTION_PASSTHROUGH: 0,
      ACTION_REGENERATE_DUPLICATE: 1,
      ACTION_REGENERATE: 2,
      ACTION_OBFUSCATE_DUPLICATE: 3,
      ACTION_OBFUSCATE: 4,
      ACTION_DISCARD: 5
    };
    proto.gooseai.ClassifierMode = {
      CLSFR_MODE_ZEROSHOT: 0,
      CLSFR_MODE_MULTICLASS: 1
    };
    proto.gooseai.AssetAction = {
      ASSET_PUT: 0,
      ASSET_GET: 1,
      ASSET_DELETE: 2
    };
    proto.gooseai.StageAction = {
      STAGE_ACTION_PASS: 0,
      STAGE_ACTION_DISCARD: 1,
      STAGE_ACTION_RETURN: 2
    };
    goog.object.extend(exports, proto.gooseai);
  }
});
export default require_generation_pb();
