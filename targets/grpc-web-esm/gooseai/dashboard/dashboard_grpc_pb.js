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

// dashboard/dashboard_pb.js
var require_dashboard_pb = __commonJS({
  "dashboard/dashboard_pb.js"(exports) {
    var jspb = __require("google-protobuf");
    var goog = jspb;
    var global = function() {
      return this || window || global || self || Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.gooseai.APIKey", null, global);
    goog.exportSymbol("proto.gooseai.APIKeyFindRequest", null, global);
    goog.exportSymbol("proto.gooseai.APIKeyRequest", null, global);
    goog.exportSymbol("proto.gooseai.AutoChargeIntent", null, global);
    goog.exportSymbol("proto.gooseai.Charge", null, global);
    goog.exportSymbol("proto.gooseai.Charges", null, global);
    goog.exportSymbol("proto.gooseai.ClientSettings", null, global);
    goog.exportSymbol("proto.gooseai.CostData", null, global);
    goog.exportSymbol("proto.gooseai.CostTotal", null, global);
    goog.exportSymbol("proto.gooseai.CreateAutoChargeIntentRequest", null, global);
    goog.exportSymbol("proto.gooseai.CreateChargeRequest", null, global);
    goog.exportSymbol("proto.gooseai.EmptyRequest", null, global);
    goog.exportSymbol("proto.gooseai.GetAutoChargeRequest", null, global);
    goog.exportSymbol("proto.gooseai.GetChargesRequest", null, global);
    goog.exportSymbol("proto.gooseai.GetMetricsRequest", null, global);
    goog.exportSymbol("proto.gooseai.GetOrganizationRequest", null, global);
    goog.exportSymbol("proto.gooseai.Metrics", null, global);
    goog.exportSymbol("proto.gooseai.Organization", null, global);
    goog.exportSymbol("proto.gooseai.OrganizationAutoCharge", null, global);
    goog.exportSymbol("proto.gooseai.OrganizationGrant", null, global);
    goog.exportSymbol("proto.gooseai.OrganizationMember", null, global);
    goog.exportSymbol("proto.gooseai.OrganizationPaymentInfo", null, global);
    goog.exportSymbol("proto.gooseai.OrganizationRole", null, global);
    goog.exportSymbol("proto.gooseai.TotalMetricsData", null, global);
    goog.exportSymbol("proto.gooseai.UpdateDefaultOrganizationRequest", null, global);
    goog.exportSymbol("proto.gooseai.UpdateUserInfoRequest", null, global);
    goog.exportSymbol("proto.gooseai.UsageMetric", null, global);
    goog.exportSymbol("proto.gooseai.User", null, global);
    goog.exportSymbol("proto.gooseai.UserPasswordChangeTicket", null, global);
    proto.gooseai.OrganizationMember = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.OrganizationMember, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.OrganizationMember.displayName = "proto.gooseai.OrganizationMember";
    }
    proto.gooseai.OrganizationGrant = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.OrganizationGrant, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.OrganizationGrant.displayName = "proto.gooseai.OrganizationGrant";
    }
    proto.gooseai.OrganizationPaymentInfo = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.OrganizationPaymentInfo.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.OrganizationPaymentInfo, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.OrganizationPaymentInfo.displayName = "proto.gooseai.OrganizationPaymentInfo";
    }
    proto.gooseai.OrganizationAutoCharge = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.OrganizationAutoCharge, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.OrganizationAutoCharge.displayName = "proto.gooseai.OrganizationAutoCharge";
    }
    proto.gooseai.Organization = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Organization.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Organization, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Organization.displayName = "proto.gooseai.Organization";
    }
    proto.gooseai.APIKey = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.APIKey, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.APIKey.displayName = "proto.gooseai.APIKey";
    }
    proto.gooseai.User = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.User.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.User, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.User.displayName = "proto.gooseai.User";
    }
    proto.gooseai.CostData = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.CostData, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.CostData.displayName = "proto.gooseai.CostData";
    }
    proto.gooseai.UsageMetric = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.UsageMetric, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.UsageMetric.displayName = "proto.gooseai.UsageMetric";
    }
    proto.gooseai.CostTotal = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.CostTotal, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.CostTotal.displayName = "proto.gooseai.CostTotal";
    }
    proto.gooseai.TotalMetricsData = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.TotalMetricsData, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.TotalMetricsData.displayName = "proto.gooseai.TotalMetricsData";
    }
    proto.gooseai.Metrics = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Metrics.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Metrics, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Metrics.displayName = "proto.gooseai.Metrics";
    }
    proto.gooseai.EmptyRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.EmptyRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.EmptyRequest.displayName = "proto.gooseai.EmptyRequest";
    }
    proto.gooseai.GetOrganizationRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.GetOrganizationRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.GetOrganizationRequest.displayName = "proto.gooseai.GetOrganizationRequest";
    }
    proto.gooseai.GetMetricsRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.GetMetricsRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.GetMetricsRequest.displayName = "proto.gooseai.GetMetricsRequest";
    }
    proto.gooseai.APIKeyRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.APIKeyRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.APIKeyRequest.displayName = "proto.gooseai.APIKeyRequest";
    }
    proto.gooseai.APIKeyFindRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.APIKeyFindRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.APIKeyFindRequest.displayName = "proto.gooseai.APIKeyFindRequest";
    }
    proto.gooseai.UpdateDefaultOrganizationRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.UpdateDefaultOrganizationRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.UpdateDefaultOrganizationRequest.displayName = "proto.gooseai.UpdateDefaultOrganizationRequest";
    }
    proto.gooseai.ClientSettings = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.ClientSettings, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.ClientSettings.displayName = "proto.gooseai.ClientSettings";
    }
    proto.gooseai.CreateAutoChargeIntentRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.CreateAutoChargeIntentRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.CreateAutoChargeIntentRequest.displayName = "proto.gooseai.CreateAutoChargeIntentRequest";
    }
    proto.gooseai.CreateChargeRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.CreateChargeRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.CreateChargeRequest.displayName = "proto.gooseai.CreateChargeRequest";
    }
    proto.gooseai.GetChargesRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.GetChargesRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.GetChargesRequest.displayName = "proto.gooseai.GetChargesRequest";
    }
    proto.gooseai.Charge = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.Charge, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Charge.displayName = "proto.gooseai.Charge";
    }
    proto.gooseai.Charges = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, proto.gooseai.Charges.repeatedFields_, null);
    };
    goog.inherits(proto.gooseai.Charges, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.Charges.displayName = "proto.gooseai.Charges";
    }
    proto.gooseai.GetAutoChargeRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.GetAutoChargeRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.GetAutoChargeRequest.displayName = "proto.gooseai.GetAutoChargeRequest";
    }
    proto.gooseai.AutoChargeIntent = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.AutoChargeIntent, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.AutoChargeIntent.displayName = "proto.gooseai.AutoChargeIntent";
    }
    proto.gooseai.UpdateUserInfoRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.UpdateUserInfoRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.UpdateUserInfoRequest.displayName = "proto.gooseai.UpdateUserInfoRequest";
    }
    proto.gooseai.UserPasswordChangeTicket = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.gooseai.UserPasswordChangeTicket, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.gooseai.UserPasswordChangeTicket.displayName = "proto.gooseai.UserPasswordChangeTicket";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.OrganizationMember.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.OrganizationMember.toObject(opt_includeInstance, this);
      };
      proto.gooseai.OrganizationMember.toObject = function(includeInstance, msg) {
        var f, obj = {
          organization: (f = msg.getOrganization()) && proto.gooseai.Organization.toObject(includeInstance, f),
          user: (f = msg.getUser()) && proto.gooseai.User.toObject(includeInstance, f),
          role: jspb.Message.getFieldWithDefault(msg, 3, 0),
          isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.OrganizationMember.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.OrganizationMember();
      return proto.gooseai.OrganizationMember.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.OrganizationMember.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.Organization();
            reader.readMessage(value, proto.gooseai.Organization.deserializeBinaryFromReader);
            msg.setOrganization(value);
            break;
          case 2:
            var value = new proto.gooseai.User();
            reader.readMessage(value, proto.gooseai.User.deserializeBinaryFromReader);
            msg.setUser(value);
            break;
          case 3:
            var value = reader.readEnum();
            msg.setRole(value);
            break;
          case 4:
            var value = reader.readBool();
            msg.setIsDefault(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.OrganizationMember.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.OrganizationMember.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.OrganizationMember.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOrganization();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.gooseai.Organization.serializeBinaryToWriter
        );
      }
      f = message.getUser();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.gooseai.User.serializeBinaryToWriter
        );
      }
      f = message.getRole();
      if (f !== 0) {
        writer.writeEnum(
          3,
          f
        );
      }
      f = message.getIsDefault();
      if (f) {
        writer.writeBool(
          4,
          f
        );
      }
    };
    proto.gooseai.OrganizationMember.prototype.getOrganization = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.Organization, 1);
    };
    proto.gooseai.OrganizationMember.prototype.setOrganization = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.gooseai.OrganizationMember.prototype.clearOrganization = function() {
      return this.setOrganization(void 0);
    };
    proto.gooseai.OrganizationMember.prototype.hasOrganization = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.OrganizationMember.prototype.getUser = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.User, 2);
    };
    proto.gooseai.OrganizationMember.prototype.setUser = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.gooseai.OrganizationMember.prototype.clearUser = function() {
      return this.setUser(void 0);
    };
    proto.gooseai.OrganizationMember.prototype.hasUser = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.OrganizationMember.prototype.getRole = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.OrganizationMember.prototype.setRole = function(value) {
      return jspb.Message.setProto3EnumField(this, 3, value);
    };
    proto.gooseai.OrganizationMember.prototype.getIsDefault = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 4, false);
    };
    proto.gooseai.OrganizationMember.prototype.setIsDefault = function(value) {
      return jspb.Message.setProto3BooleanField(this, 4, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.OrganizationGrant.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.OrganizationGrant.toObject(opt_includeInstance, this);
      };
      proto.gooseai.OrganizationGrant.toObject = function(includeInstance, msg) {
        var f, obj = {
          amountGranted: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
          amountUsed: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0),
          expiresAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
          grantedAt: jspb.Message.getFieldWithDefault(msg, 4, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.OrganizationGrant.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.OrganizationGrant();
      return proto.gooseai.OrganizationGrant.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.OrganizationGrant.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readDouble();
            msg.setAmountGranted(value);
            break;
          case 2:
            var value = reader.readDouble();
            msg.setAmountUsed(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setExpiresAt(value);
            break;
          case 4:
            var value = reader.readUint64();
            msg.setGrantedAt(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.OrganizationGrant.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.OrganizationGrant.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.OrganizationGrant.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getAmountGranted();
      if (f !== 0) {
        writer.writeDouble(
          1,
          f
        );
      }
      f = message.getAmountUsed();
      if (f !== 0) {
        writer.writeDouble(
          2,
          f
        );
      }
      f = message.getExpiresAt();
      if (f !== 0) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = message.getGrantedAt();
      if (f !== 0) {
        writer.writeUint64(
          4,
          f
        );
      }
    };
    proto.gooseai.OrganizationGrant.prototype.getAmountGranted = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.OrganizationGrant.prototype.setAmountGranted = function(value) {
      return jspb.Message.setProto3FloatField(this, 1, value);
    };
    proto.gooseai.OrganizationGrant.prototype.getAmountUsed = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.OrganizationGrant.prototype.setAmountUsed = function(value) {
      return jspb.Message.setProto3FloatField(this, 2, value);
    };
    proto.gooseai.OrganizationGrant.prototype.getExpiresAt = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.OrganizationGrant.prototype.setExpiresAt = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    proto.gooseai.OrganizationGrant.prototype.getGrantedAt = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.OrganizationGrant.prototype.setGrantedAt = function(value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    proto.gooseai.OrganizationPaymentInfo.repeatedFields_ = [2];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.OrganizationPaymentInfo.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.OrganizationPaymentInfo.toObject(opt_includeInstance, this);
      };
      proto.gooseai.OrganizationPaymentInfo.toObject = function(includeInstance, msg) {
        var f, obj = {
          balance: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0),
          grantsList: jspb.Message.toObjectList(
            msg.getGrantsList(),
            proto.gooseai.OrganizationGrant.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.OrganizationPaymentInfo.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.OrganizationPaymentInfo();
      return proto.gooseai.OrganizationPaymentInfo.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.OrganizationPaymentInfo.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readDouble();
            msg.setBalance(value);
            break;
          case 2:
            var value = new proto.gooseai.OrganizationGrant();
            reader.readMessage(value, proto.gooseai.OrganizationGrant.deserializeBinaryFromReader);
            msg.addGrants(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.OrganizationPaymentInfo.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.OrganizationPaymentInfo.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.OrganizationPaymentInfo.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getBalance();
      if (f !== 0) {
        writer.writeDouble(
          1,
          f
        );
      }
      f = message.getGrantsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          2,
          f,
          proto.gooseai.OrganizationGrant.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.OrganizationPaymentInfo.prototype.getBalance = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.OrganizationPaymentInfo.prototype.setBalance = function(value) {
      return jspb.Message.setProto3FloatField(this, 1, value);
    };
    proto.gooseai.OrganizationPaymentInfo.prototype.getGrantsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.OrganizationGrant, 2);
    };
    proto.gooseai.OrganizationPaymentInfo.prototype.setGrantsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 2, value);
    };
    proto.gooseai.OrganizationPaymentInfo.prototype.addGrants = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.gooseai.OrganizationGrant, opt_index);
    };
    proto.gooseai.OrganizationPaymentInfo.prototype.clearGrantsList = function() {
      return this.setGrantsList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.OrganizationAutoCharge.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.OrganizationAutoCharge.toObject(opt_includeInstance, this);
      };
      proto.gooseai.OrganizationAutoCharge.toObject = function(includeInstance, msg) {
        var f, obj = {
          enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
          id: jspb.Message.getFieldWithDefault(msg, 2, ""),
          createdAt: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.OrganizationAutoCharge.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.OrganizationAutoCharge();
      return proto.gooseai.OrganizationAutoCharge.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.OrganizationAutoCharge.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readBool();
            msg.setEnabled(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setId(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setCreatedAt(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.OrganizationAutoCharge.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.OrganizationAutoCharge.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.OrganizationAutoCharge.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getEnabled();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getCreatedAt();
      if (f !== 0) {
        writer.writeUint64(
          3,
          f
        );
      }
    };
    proto.gooseai.OrganizationAutoCharge.prototype.getEnabled = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 1, false);
    };
    proto.gooseai.OrganizationAutoCharge.prototype.setEnabled = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    proto.gooseai.OrganizationAutoCharge.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.OrganizationAutoCharge.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.OrganizationAutoCharge.prototype.getCreatedAt = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.OrganizationAutoCharge.prototype.setCreatedAt = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    proto.gooseai.Organization.repeatedFields_ = [4];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Organization.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Organization.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Organization.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          name: jspb.Message.getFieldWithDefault(msg, 2, ""),
          description: jspb.Message.getFieldWithDefault(msg, 3, ""),
          membersList: jspb.Message.toObjectList(
            msg.getMembersList(),
            proto.gooseai.OrganizationMember.toObject,
            includeInstance
          ),
          paymentInfo: (f = msg.getPaymentInfo()) && proto.gooseai.OrganizationPaymentInfo.toObject(includeInstance, f),
          stripeCustomerId: jspb.Message.getFieldWithDefault(msg, 6, ""),
          autoCharge: (f = msg.getAutoCharge()) && proto.gooseai.OrganizationAutoCharge.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Organization.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Organization();
      return proto.gooseai.Organization.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Organization.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = reader.readString();
            msg.setName(value);
            break;
          case 3:
            var value = reader.readString();
            msg.setDescription(value);
            break;
          case 4:
            var value = new proto.gooseai.OrganizationMember();
            reader.readMessage(value, proto.gooseai.OrganizationMember.deserializeBinaryFromReader);
            msg.addMembers(value);
            break;
          case 5:
            var value = new proto.gooseai.OrganizationPaymentInfo();
            reader.readMessage(value, proto.gooseai.OrganizationPaymentInfo.deserializeBinaryFromReader);
            msg.setPaymentInfo(value);
            break;
          case 6:
            var value = reader.readString();
            msg.setStripeCustomerId(value);
            break;
          case 7:
            var value = new proto.gooseai.OrganizationAutoCharge();
            reader.readMessage(value, proto.gooseai.OrganizationAutoCharge.deserializeBinaryFromReader);
            msg.setAutoCharge(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Organization.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Organization.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Organization.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getName();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getDescription();
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        );
      }
      f = message.getMembersList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          4,
          f,
          proto.gooseai.OrganizationMember.serializeBinaryToWriter
        );
      }
      f = message.getPaymentInfo();
      if (f != null) {
        writer.writeMessage(
          5,
          f,
          proto.gooseai.OrganizationPaymentInfo.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 6);
      if (f != null) {
        writer.writeString(
          6,
          f
        );
      }
      f = message.getAutoCharge();
      if (f != null) {
        writer.writeMessage(
          7,
          f,
          proto.gooseai.OrganizationAutoCharge.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Organization.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Organization.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Organization.prototype.getName = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.Organization.prototype.setName = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.Organization.prototype.getDescription = function() {
      return jspb.Message.getFieldWithDefault(this, 3, "");
    };
    proto.gooseai.Organization.prototype.setDescription = function(value) {
      return jspb.Message.setProto3StringField(this, 3, value);
    };
    proto.gooseai.Organization.prototype.getMembersList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.OrganizationMember, 4);
    };
    proto.gooseai.Organization.prototype.setMembersList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 4, value);
    };
    proto.gooseai.Organization.prototype.addMembers = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.gooseai.OrganizationMember, opt_index);
    };
    proto.gooseai.Organization.prototype.clearMembersList = function() {
      return this.setMembersList([]);
    };
    proto.gooseai.Organization.prototype.getPaymentInfo = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.OrganizationPaymentInfo, 5);
    };
    proto.gooseai.Organization.prototype.setPaymentInfo = function(value) {
      return jspb.Message.setWrapperField(this, 5, value);
    };
    proto.gooseai.Organization.prototype.clearPaymentInfo = function() {
      return this.setPaymentInfo(void 0);
    };
    proto.gooseai.Organization.prototype.hasPaymentInfo = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.Organization.prototype.getStripeCustomerId = function() {
      return jspb.Message.getFieldWithDefault(this, 6, "");
    };
    proto.gooseai.Organization.prototype.setStripeCustomerId = function(value) {
      return jspb.Message.setField(this, 6, value);
    };
    proto.gooseai.Organization.prototype.clearStripeCustomerId = function() {
      return jspb.Message.setField(this, 6, void 0);
    };
    proto.gooseai.Organization.prototype.hasStripeCustomerId = function() {
      return jspb.Message.getField(this, 6) != null;
    };
    proto.gooseai.Organization.prototype.getAutoCharge = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.OrganizationAutoCharge, 7);
    };
    proto.gooseai.Organization.prototype.setAutoCharge = function(value) {
      return jspb.Message.setWrapperField(this, 7, value);
    };
    proto.gooseai.Organization.prototype.clearAutoCharge = function() {
      return this.setAutoCharge(void 0);
    };
    proto.gooseai.Organization.prototype.hasAutoCharge = function() {
      return jspb.Message.getField(this, 7) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.APIKey.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.APIKey.toObject(opt_includeInstance, this);
      };
      proto.gooseai.APIKey.toObject = function(includeInstance, msg) {
        var f, obj = {
          key: jspb.Message.getFieldWithDefault(msg, 1, ""),
          isSecret: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
          createdAt: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.APIKey.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.APIKey();
      return proto.gooseai.APIKey.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.APIKey.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setKey(value);
            break;
          case 2:
            var value = reader.readBool();
            msg.setIsSecret(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setCreatedAt(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.APIKey.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.APIKey.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.APIKey.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getKey();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getIsSecret();
      if (f) {
        writer.writeBool(
          2,
          f
        );
      }
      f = message.getCreatedAt();
      if (f !== 0) {
        writer.writeUint64(
          3,
          f
        );
      }
    };
    proto.gooseai.APIKey.prototype.getKey = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.APIKey.prototype.setKey = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.APIKey.prototype.getIsSecret = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 2, false);
    };
    proto.gooseai.APIKey.prototype.setIsSecret = function(value) {
      return jspb.Message.setProto3BooleanField(this, 2, value);
    };
    proto.gooseai.APIKey.prototype.getCreatedAt = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.APIKey.prototype.setCreatedAt = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    proto.gooseai.User.repeatedFields_ = [5, 7];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.User.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.User.toObject(opt_includeInstance, this);
      };
      proto.gooseai.User.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          authId: jspb.Message.getFieldWithDefault(msg, 2, ""),
          profilePicture: jspb.Message.getFieldWithDefault(msg, 3, ""),
          email: jspb.Message.getFieldWithDefault(msg, 4, ""),
          organizationsList: jspb.Message.toObjectList(
            msg.getOrganizationsList(),
            proto.gooseai.OrganizationMember.toObject,
            includeInstance
          ),
          apiKeysList: jspb.Message.toObjectList(
            msg.getApiKeysList(),
            proto.gooseai.APIKey.toObject,
            includeInstance
          ),
          createdAt: jspb.Message.getFieldWithDefault(msg, 8, 0),
          emailVerified: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.User.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.User();
      return proto.gooseai.User.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.User.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = reader.readString();
            msg.setAuthId(value);
            break;
          case 3:
            var value = reader.readString();
            msg.setProfilePicture(value);
            break;
          case 4:
            var value = reader.readString();
            msg.setEmail(value);
            break;
          case 5:
            var value = new proto.gooseai.OrganizationMember();
            reader.readMessage(value, proto.gooseai.OrganizationMember.deserializeBinaryFromReader);
            msg.addOrganizations(value);
            break;
          case 7:
            var value = new proto.gooseai.APIKey();
            reader.readMessage(value, proto.gooseai.APIKey.deserializeBinaryFromReader);
            msg.addApiKeys(value);
            break;
          case 8:
            var value = reader.readUint64();
            msg.setCreatedAt(value);
            break;
          case 9:
            var value = reader.readBool();
            msg.setEmailVerified(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.User.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.User.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.User.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
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
      f = message.getProfilePicture();
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        );
      }
      f = message.getEmail();
      if (f.length > 0) {
        writer.writeString(
          4,
          f
        );
      }
      f = message.getOrganizationsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          5,
          f,
          proto.gooseai.OrganizationMember.serializeBinaryToWriter
        );
      }
      f = message.getApiKeysList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          7,
          f,
          proto.gooseai.APIKey.serializeBinaryToWriter
        );
      }
      f = message.getCreatedAt();
      if (f !== 0) {
        writer.writeUint64(
          8,
          f
        );
      }
      f = jspb.Message.getField(message, 9);
      if (f != null) {
        writer.writeBool(
          9,
          f
        );
      }
    };
    proto.gooseai.User.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.User.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.User.prototype.getAuthId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.User.prototype.setAuthId = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.User.prototype.clearAuthId = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.User.prototype.hasAuthId = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.User.prototype.getProfilePicture = function() {
      return jspb.Message.getFieldWithDefault(this, 3, "");
    };
    proto.gooseai.User.prototype.setProfilePicture = function(value) {
      return jspb.Message.setProto3StringField(this, 3, value);
    };
    proto.gooseai.User.prototype.getEmail = function() {
      return jspb.Message.getFieldWithDefault(this, 4, "");
    };
    proto.gooseai.User.prototype.setEmail = function(value) {
      return jspb.Message.setProto3StringField(this, 4, value);
    };
    proto.gooseai.User.prototype.getOrganizationsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.OrganizationMember, 5);
    };
    proto.gooseai.User.prototype.setOrganizationsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 5, value);
    };
    proto.gooseai.User.prototype.addOrganizations = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.gooseai.OrganizationMember, opt_index);
    };
    proto.gooseai.User.prototype.clearOrganizationsList = function() {
      return this.setOrganizationsList([]);
    };
    proto.gooseai.User.prototype.getApiKeysList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.APIKey, 7);
    };
    proto.gooseai.User.prototype.setApiKeysList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 7, value);
    };
    proto.gooseai.User.prototype.addApiKeys = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.gooseai.APIKey, opt_index);
    };
    proto.gooseai.User.prototype.clearApiKeysList = function() {
      return this.setApiKeysList([]);
    };
    proto.gooseai.User.prototype.getCreatedAt = function() {
      return jspb.Message.getFieldWithDefault(this, 8, 0);
    };
    proto.gooseai.User.prototype.setCreatedAt = function(value) {
      return jspb.Message.setProto3IntField(this, 8, value);
    };
    proto.gooseai.User.prototype.getEmailVerified = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 9, false);
    };
    proto.gooseai.User.prototype.setEmailVerified = function(value) {
      return jspb.Message.setField(this, 9, value);
    };
    proto.gooseai.User.prototype.clearEmailVerified = function() {
      return jspb.Message.setField(this, 9, void 0);
    };
    proto.gooseai.User.prototype.hasEmailVerified = function() {
      return jspb.Message.getField(this, 9) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.CostData.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.CostData.toObject(opt_includeInstance, this);
      };
      proto.gooseai.CostData.toObject = function(includeInstance, msg) {
        var f, obj = {
          amountTokens: jspb.Message.getFieldWithDefault(msg, 1, 0),
          amountCredits: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.CostData.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.CostData();
      return proto.gooseai.CostData.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.CostData.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readUint32();
            msg.setAmountTokens(value);
            break;
          case 2:
            var value = reader.readDouble();
            msg.setAmountCredits(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.CostData.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.CostData.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.CostData.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getAmountTokens();
      if (f !== 0) {
        writer.writeUint32(
          1,
          f
        );
      }
      f = message.getAmountCredits();
      if (f !== 0) {
        writer.writeDouble(
          2,
          f
        );
      }
    };
    proto.gooseai.CostData.prototype.getAmountTokens = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.CostData.prototype.setAmountTokens = function(value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    proto.gooseai.CostData.prototype.getAmountCredits = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.CostData.prototype.setAmountCredits = function(value) {
      return jspb.Message.setProto3FloatField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.UsageMetric.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.UsageMetric.toObject(opt_includeInstance, this);
      };
      proto.gooseai.UsageMetric.toObject = function(includeInstance, msg) {
        var f, obj = {
          operation: jspb.Message.getFieldWithDefault(msg, 1, ""),
          engine: jspb.Message.getFieldWithDefault(msg, 2, ""),
          inputCost: (f = msg.getInputCost()) && proto.gooseai.CostData.toObject(includeInstance, f),
          outputCost: (f = msg.getOutputCost()) && proto.gooseai.CostData.toObject(includeInstance, f),
          user: jspb.Message.getFieldWithDefault(msg, 5, ""),
          aggregationTimestamp: jspb.Message.getFieldWithDefault(msg, 6, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.UsageMetric.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.UsageMetric();
      return proto.gooseai.UsageMetric.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.UsageMetric.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setOperation(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setEngine(value);
            break;
          case 3:
            var value = new proto.gooseai.CostData();
            reader.readMessage(value, proto.gooseai.CostData.deserializeBinaryFromReader);
            msg.setInputCost(value);
            break;
          case 4:
            var value = new proto.gooseai.CostData();
            reader.readMessage(value, proto.gooseai.CostData.deserializeBinaryFromReader);
            msg.setOutputCost(value);
            break;
          case 5:
            var value = reader.readString();
            msg.setUser(value);
            break;
          case 6:
            var value = reader.readUint64();
            msg.setAggregationTimestamp(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.UsageMetric.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.UsageMetric.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.UsageMetric.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOperation();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getEngine();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getInputCost();
      if (f != null) {
        writer.writeMessage(
          3,
          f,
          proto.gooseai.CostData.serializeBinaryToWriter
        );
      }
      f = message.getOutputCost();
      if (f != null) {
        writer.writeMessage(
          4,
          f,
          proto.gooseai.CostData.serializeBinaryToWriter
        );
      }
      f = jspb.Message.getField(message, 5);
      if (f != null) {
        writer.writeString(
          5,
          f
        );
      }
      f = message.getAggregationTimestamp();
      if (f !== 0) {
        writer.writeUint64(
          6,
          f
        );
      }
    };
    proto.gooseai.UsageMetric.prototype.getOperation = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.UsageMetric.prototype.setOperation = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.UsageMetric.prototype.getEngine = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.UsageMetric.prototype.setEngine = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.UsageMetric.prototype.getInputCost = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.CostData, 3);
    };
    proto.gooseai.UsageMetric.prototype.setInputCost = function(value) {
      return jspb.Message.setWrapperField(this, 3, value);
    };
    proto.gooseai.UsageMetric.prototype.clearInputCost = function() {
      return this.setInputCost(void 0);
    };
    proto.gooseai.UsageMetric.prototype.hasInputCost = function() {
      return jspb.Message.getField(this, 3) != null;
    };
    proto.gooseai.UsageMetric.prototype.getOutputCost = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.CostData, 4);
    };
    proto.gooseai.UsageMetric.prototype.setOutputCost = function(value) {
      return jspb.Message.setWrapperField(this, 4, value);
    };
    proto.gooseai.UsageMetric.prototype.clearOutputCost = function() {
      return this.setOutputCost(void 0);
    };
    proto.gooseai.UsageMetric.prototype.hasOutputCost = function() {
      return jspb.Message.getField(this, 4) != null;
    };
    proto.gooseai.UsageMetric.prototype.getUser = function() {
      return jspb.Message.getFieldWithDefault(this, 5, "");
    };
    proto.gooseai.UsageMetric.prototype.setUser = function(value) {
      return jspb.Message.setField(this, 5, value);
    };
    proto.gooseai.UsageMetric.prototype.clearUser = function() {
      return jspb.Message.setField(this, 5, void 0);
    };
    proto.gooseai.UsageMetric.prototype.hasUser = function() {
      return jspb.Message.getField(this, 5) != null;
    };
    proto.gooseai.UsageMetric.prototype.getAggregationTimestamp = function() {
      return jspb.Message.getFieldWithDefault(this, 6, 0);
    };
    proto.gooseai.UsageMetric.prototype.setAggregationTimestamp = function(value) {
      return jspb.Message.setProto3IntField(this, 6, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.CostTotal.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.CostTotal.toObject(opt_includeInstance, this);
      };
      proto.gooseai.CostTotal.toObject = function(includeInstance, msg) {
        var f, obj = {
          amountTokens: jspb.Message.getFieldWithDefault(msg, 1, 0),
          amountCredits: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.CostTotal.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.CostTotal();
      return proto.gooseai.CostTotal.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.CostTotal.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readUint32();
            msg.setAmountTokens(value);
            break;
          case 2:
            var value = reader.readDouble();
            msg.setAmountCredits(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.CostTotal.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.CostTotal.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.CostTotal.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getAmountTokens();
      if (f !== 0) {
        writer.writeUint32(
          1,
          f
        );
      }
      f = message.getAmountCredits();
      if (f !== 0) {
        writer.writeDouble(
          2,
          f
        );
      }
    };
    proto.gooseai.CostTotal.prototype.getAmountTokens = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.CostTotal.prototype.setAmountTokens = function(value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    proto.gooseai.CostTotal.prototype.getAmountCredits = function() {
      return jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.CostTotal.prototype.setAmountCredits = function(value) {
      return jspb.Message.setProto3FloatField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.TotalMetricsData.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.TotalMetricsData.toObject(opt_includeInstance, this);
      };
      proto.gooseai.TotalMetricsData.toObject = function(includeInstance, msg) {
        var f, obj = {
          inputTotal: (f = msg.getInputTotal()) && proto.gooseai.CostTotal.toObject(includeInstance, f),
          outputTotal: (f = msg.getOutputTotal()) && proto.gooseai.CostTotal.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.TotalMetricsData.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.TotalMetricsData();
      return proto.gooseai.TotalMetricsData.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.TotalMetricsData.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.CostTotal();
            reader.readMessage(value, proto.gooseai.CostTotal.deserializeBinaryFromReader);
            msg.setInputTotal(value);
            break;
          case 2:
            var value = new proto.gooseai.CostTotal();
            reader.readMessage(value, proto.gooseai.CostTotal.deserializeBinaryFromReader);
            msg.setOutputTotal(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.TotalMetricsData.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.TotalMetricsData.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.TotalMetricsData.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getInputTotal();
      if (f != null) {
        writer.writeMessage(
          1,
          f,
          proto.gooseai.CostTotal.serializeBinaryToWriter
        );
      }
      f = message.getOutputTotal();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.gooseai.CostTotal.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.TotalMetricsData.prototype.getInputTotal = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.CostTotal, 1);
    };
    proto.gooseai.TotalMetricsData.prototype.setInputTotal = function(value) {
      return jspb.Message.setWrapperField(this, 1, value);
    };
    proto.gooseai.TotalMetricsData.prototype.clearInputTotal = function() {
      return this.setInputTotal(void 0);
    };
    proto.gooseai.TotalMetricsData.prototype.hasInputTotal = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    proto.gooseai.TotalMetricsData.prototype.getOutputTotal = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.CostTotal, 2);
    };
    proto.gooseai.TotalMetricsData.prototype.setOutputTotal = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.gooseai.TotalMetricsData.prototype.clearOutputTotal = function() {
      return this.setOutputTotal(void 0);
    };
    proto.gooseai.TotalMetricsData.prototype.hasOutputTotal = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.Metrics.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Metrics.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Metrics.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Metrics.toObject = function(includeInstance, msg) {
        var f, obj = {
          metricsList: jspb.Message.toObjectList(
            msg.getMetricsList(),
            proto.gooseai.UsageMetric.toObject,
            includeInstance
          ),
          total: (f = msg.getTotal()) && proto.gooseai.TotalMetricsData.toObject(includeInstance, f)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Metrics.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Metrics();
      return proto.gooseai.Metrics.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Metrics.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.UsageMetric();
            reader.readMessage(value, proto.gooseai.UsageMetric.deserializeBinaryFromReader);
            msg.addMetrics(value);
            break;
          case 2:
            var value = new proto.gooseai.TotalMetricsData();
            reader.readMessage(value, proto.gooseai.TotalMetricsData.deserializeBinaryFromReader);
            msg.setTotal(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Metrics.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Metrics.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Metrics.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getMetricsList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.gooseai.UsageMetric.serializeBinaryToWriter
        );
      }
      f = message.getTotal();
      if (f != null) {
        writer.writeMessage(
          2,
          f,
          proto.gooseai.TotalMetricsData.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Metrics.prototype.getMetricsList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.UsageMetric, 1);
    };
    proto.gooseai.Metrics.prototype.setMetricsList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.gooseai.Metrics.prototype.addMetrics = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.UsageMetric, opt_index);
    };
    proto.gooseai.Metrics.prototype.clearMetricsList = function() {
      return this.setMetricsList([]);
    };
    proto.gooseai.Metrics.prototype.getTotal = function() {
      return jspb.Message.getWrapperField(this, proto.gooseai.TotalMetricsData, 2);
    };
    proto.gooseai.Metrics.prototype.setTotal = function(value) {
      return jspb.Message.setWrapperField(this, 2, value);
    };
    proto.gooseai.Metrics.prototype.clearTotal = function() {
      return this.setTotal(void 0);
    };
    proto.gooseai.Metrics.prototype.hasTotal = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.EmptyRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.EmptyRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.EmptyRequest.toObject = function(includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.EmptyRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.EmptyRequest();
      return proto.gooseai.EmptyRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.EmptyRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.EmptyRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.EmptyRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.EmptyRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.GetOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.GetOrganizationRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.GetOrganizationRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.GetOrganizationRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.GetOrganizationRequest();
      return proto.gooseai.GetOrganizationRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.GetOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.GetOrganizationRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.GetOrganizationRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.GetOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.gooseai.GetOrganizationRequest.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.GetOrganizationRequest.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.GetMetricsRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.GetMetricsRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.GetMetricsRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
          rangeFrom: jspb.Message.getFieldWithDefault(msg, 3, 0),
          rangeTo: jspb.Message.getFieldWithDefault(msg, 4, 0),
          includePerRequestMetrics: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.GetMetricsRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.GetMetricsRequest();
      return proto.gooseai.GetMetricsRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.GetMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setOrganizationId(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setUserId(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setRangeFrom(value);
            break;
          case 4:
            var value = reader.readUint64();
            msg.setRangeTo(value);
            break;
          case 5:
            var value = reader.readBool();
            msg.setIncludePerRequestMetrics(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.GetMetricsRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.GetMetricsRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.GetMetricsRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOrganizationId();
      if (f.length > 0) {
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
      f = message.getRangeFrom();
      if (f !== 0) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = message.getRangeTo();
      if (f !== 0) {
        writer.writeUint64(
          4,
          f
        );
      }
      f = message.getIncludePerRequestMetrics();
      if (f) {
        writer.writeBool(
          5,
          f
        );
      }
    };
    proto.gooseai.GetMetricsRequest.prototype.getOrganizationId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.GetMetricsRequest.prototype.setOrganizationId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.GetMetricsRequest.prototype.getUserId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.GetMetricsRequest.prototype.setUserId = function(value) {
      return jspb.Message.setField(this, 2, value);
    };
    proto.gooseai.GetMetricsRequest.prototype.clearUserId = function() {
      return jspb.Message.setField(this, 2, void 0);
    };
    proto.gooseai.GetMetricsRequest.prototype.hasUserId = function() {
      return jspb.Message.getField(this, 2) != null;
    };
    proto.gooseai.GetMetricsRequest.prototype.getRangeFrom = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.GetMetricsRequest.prototype.setRangeFrom = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    proto.gooseai.GetMetricsRequest.prototype.getRangeTo = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.GetMetricsRequest.prototype.setRangeTo = function(value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    proto.gooseai.GetMetricsRequest.prototype.getIncludePerRequestMetrics = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 5, false);
    };
    proto.gooseai.GetMetricsRequest.prototype.setIncludePerRequestMetrics = function(value) {
      return jspb.Message.setProto3BooleanField(this, 5, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.APIKeyRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.APIKeyRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.APIKeyRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          isSecret: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.APIKeyRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.APIKeyRequest();
      return proto.gooseai.APIKeyRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.APIKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readBool();
            msg.setIsSecret(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.APIKeyRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.APIKeyRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.APIKeyRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getIsSecret();
      if (f) {
        writer.writeBool(
          1,
          f
        );
      }
    };
    proto.gooseai.APIKeyRequest.prototype.getIsSecret = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 1, false);
    };
    proto.gooseai.APIKeyRequest.prototype.setIsSecret = function(value) {
      return jspb.Message.setProto3BooleanField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.APIKeyFindRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.APIKeyFindRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.APIKeyFindRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.APIKeyFindRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.APIKeyFindRequest();
      return proto.gooseai.APIKeyFindRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.APIKeyFindRequest.deserializeBinaryFromReader = function(msg, reader) {
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
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.APIKeyFindRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.APIKeyFindRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.APIKeyFindRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.gooseai.APIKeyFindRequest.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.APIKeyFindRequest.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.UpdateDefaultOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.UpdateDefaultOrganizationRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.UpdateDefaultOrganizationRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.UpdateDefaultOrganizationRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.UpdateDefaultOrganizationRequest();
      return proto.gooseai.UpdateDefaultOrganizationRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.UpdateDefaultOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setOrganizationId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.UpdateDefaultOrganizationRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.UpdateDefaultOrganizationRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.UpdateDefaultOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOrganizationId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.gooseai.UpdateDefaultOrganizationRequest.prototype.getOrganizationId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.UpdateDefaultOrganizationRequest.prototype.setOrganizationId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.ClientSettings.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.ClientSettings.toObject(opt_includeInstance, this);
      };
      proto.gooseai.ClientSettings.toObject = function(includeInstance, msg) {
        var f, obj = {
          settings: msg.getSettings_asB64()
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.ClientSettings.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.ClientSettings();
      return proto.gooseai.ClientSettings.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.ClientSettings.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readBytes();
            msg.setSettings(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.ClientSettings.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.ClientSettings.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.ClientSettings.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getSettings_asU8();
      if (f.length > 0) {
        writer.writeBytes(
          1,
          f
        );
      }
    };
    proto.gooseai.ClientSettings.prototype.getSettings = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.ClientSettings.prototype.getSettings_asB64 = function() {
      return jspb.Message.bytesAsB64(
        this.getSettings()
      );
    };
    proto.gooseai.ClientSettings.prototype.getSettings_asU8 = function() {
      return jspb.Message.bytesAsU8(
        this.getSettings()
      );
    };
    proto.gooseai.ClientSettings.prototype.setSettings = function(value) {
      return jspb.Message.setProto3BytesField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.CreateAutoChargeIntentRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.CreateAutoChargeIntentRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.CreateAutoChargeIntentRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          monthlyMaximum: jspb.Message.getFieldWithDefault(msg, 2, 0),
          minimumValue: jspb.Message.getFieldWithDefault(msg, 3, 0),
          amountCredits: jspb.Message.getFieldWithDefault(msg, 4, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.CreateAutoChargeIntentRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.CreateAutoChargeIntentRequest();
      return proto.gooseai.CreateAutoChargeIntentRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.CreateAutoChargeIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setOrganizationId(value);
            break;
          case 2:
            var value = reader.readUint64();
            msg.setMonthlyMaximum(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setMinimumValue(value);
            break;
          case 4:
            var value = reader.readUint64();
            msg.setAmountCredits(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.CreateAutoChargeIntentRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.CreateAutoChargeIntentRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOrganizationId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getMonthlyMaximum();
      if (f !== 0) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = message.getMinimumValue();
      if (f !== 0) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = message.getAmountCredits();
      if (f !== 0) {
        writer.writeUint64(
          4,
          f
        );
      }
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.getOrganizationId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.setOrganizationId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.getMonthlyMaximum = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.setMonthlyMaximum = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.getMinimumValue = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.setMinimumValue = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.getAmountCredits = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.CreateAutoChargeIntentRequest.prototype.setAmountCredits = function(value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.CreateChargeRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.CreateChargeRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.CreateChargeRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
          organizationId: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.CreateChargeRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.CreateChargeRequest();
      return proto.gooseai.CreateChargeRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.CreateChargeRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readUint64();
            msg.setAmount(value);
            break;
          case 2:
            var value = reader.readString();
            msg.setOrganizationId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.CreateChargeRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.CreateChargeRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.CreateChargeRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getAmount();
      if (f !== 0) {
        writer.writeUint64(
          1,
          f
        );
      }
      f = message.getOrganizationId();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
    };
    proto.gooseai.CreateChargeRequest.prototype.getAmount = function() {
      return jspb.Message.getFieldWithDefault(this, 1, 0);
    };
    proto.gooseai.CreateChargeRequest.prototype.setAmount = function(value) {
      return jspb.Message.setProto3IntField(this, 1, value);
    };
    proto.gooseai.CreateChargeRequest.prototype.getOrganizationId = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.CreateChargeRequest.prototype.setOrganizationId = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.GetChargesRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.GetChargesRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.GetChargesRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
          rangeFrom: jspb.Message.getFieldWithDefault(msg, 2, 0),
          rangeTo: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.GetChargesRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.GetChargesRequest();
      return proto.gooseai.GetChargesRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.GetChargesRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setOrganizationId(value);
            break;
          case 2:
            var value = reader.readUint64();
            msg.setRangeFrom(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setRangeTo(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.GetChargesRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.GetChargesRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.GetChargesRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOrganizationId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getRangeFrom();
      if (f !== 0) {
        writer.writeUint64(
          2,
          f
        );
      }
      f = message.getRangeTo();
      if (f !== 0) {
        writer.writeUint64(
          3,
          f
        );
      }
    };
    proto.gooseai.GetChargesRequest.prototype.getOrganizationId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.GetChargesRequest.prototype.setOrganizationId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.GetChargesRequest.prototype.getRangeFrom = function() {
      return jspb.Message.getFieldWithDefault(this, 2, 0);
    };
    proto.gooseai.GetChargesRequest.prototype.setRangeFrom = function(value) {
      return jspb.Message.setProto3IntField(this, 2, value);
    };
    proto.gooseai.GetChargesRequest.prototype.getRangeTo = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.GetChargesRequest.prototype.setRangeTo = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Charge.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Charge.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Charge.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          paid: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
          receiptLink: jspb.Message.getFieldWithDefault(msg, 3, ""),
          paymentLink: jspb.Message.getFieldWithDefault(msg, 4, ""),
          createdAt: jspb.Message.getFieldWithDefault(msg, 5, 0),
          amountCredits: jspb.Message.getFieldWithDefault(msg, 6, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Charge.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Charge();
      return proto.gooseai.Charge.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Charge.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = reader.readBool();
            msg.setPaid(value);
            break;
          case 3:
            var value = reader.readString();
            msg.setReceiptLink(value);
            break;
          case 4:
            var value = reader.readString();
            msg.setPaymentLink(value);
            break;
          case 5:
            var value = reader.readUint64();
            msg.setCreatedAt(value);
            break;
          case 6:
            var value = reader.readUint64();
            msg.setAmountCredits(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Charge.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Charge.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Charge.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getPaid();
      if (f) {
        writer.writeBool(
          2,
          f
        );
      }
      f = message.getReceiptLink();
      if (f.length > 0) {
        writer.writeString(
          3,
          f
        );
      }
      f = message.getPaymentLink();
      if (f.length > 0) {
        writer.writeString(
          4,
          f
        );
      }
      f = message.getCreatedAt();
      if (f !== 0) {
        writer.writeUint64(
          5,
          f
        );
      }
      f = message.getAmountCredits();
      if (f !== 0) {
        writer.writeUint64(
          6,
          f
        );
      }
    };
    proto.gooseai.Charge.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.Charge.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.Charge.prototype.getPaid = function() {
      return jspb.Message.getBooleanFieldWithDefault(this, 2, false);
    };
    proto.gooseai.Charge.prototype.setPaid = function(value) {
      return jspb.Message.setProto3BooleanField(this, 2, value);
    };
    proto.gooseai.Charge.prototype.getReceiptLink = function() {
      return jspb.Message.getFieldWithDefault(this, 3, "");
    };
    proto.gooseai.Charge.prototype.setReceiptLink = function(value) {
      return jspb.Message.setProto3StringField(this, 3, value);
    };
    proto.gooseai.Charge.prototype.getPaymentLink = function() {
      return jspb.Message.getFieldWithDefault(this, 4, "");
    };
    proto.gooseai.Charge.prototype.setPaymentLink = function(value) {
      return jspb.Message.setProto3StringField(this, 4, value);
    };
    proto.gooseai.Charge.prototype.getCreatedAt = function() {
      return jspb.Message.getFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.Charge.prototype.setCreatedAt = function(value) {
      return jspb.Message.setProto3IntField(this, 5, value);
    };
    proto.gooseai.Charge.prototype.getAmountCredits = function() {
      return jspb.Message.getFieldWithDefault(this, 6, 0);
    };
    proto.gooseai.Charge.prototype.setAmountCredits = function(value) {
      return jspb.Message.setProto3IntField(this, 6, value);
    };
    proto.gooseai.Charges.repeatedFields_ = [1];
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.Charges.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.Charges.toObject(opt_includeInstance, this);
      };
      proto.gooseai.Charges.toObject = function(includeInstance, msg) {
        var f, obj = {
          chargesList: jspb.Message.toObjectList(
            msg.getChargesList(),
            proto.gooseai.Charge.toObject,
            includeInstance
          )
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.Charges.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.Charges();
      return proto.gooseai.Charges.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.Charges.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = new proto.gooseai.Charge();
            reader.readMessage(value, proto.gooseai.Charge.deserializeBinaryFromReader);
            msg.addCharges(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.Charges.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.Charges.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.Charges.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getChargesList();
      if (f.length > 0) {
        writer.writeRepeatedMessage(
          1,
          f,
          proto.gooseai.Charge.serializeBinaryToWriter
        );
      }
    };
    proto.gooseai.Charges.prototype.getChargesList = function() {
      return jspb.Message.getRepeatedWrapperField(this, proto.gooseai.Charge, 1);
    };
    proto.gooseai.Charges.prototype.setChargesList = function(value) {
      return jspb.Message.setRepeatedWrapperField(this, 1, value);
    };
    proto.gooseai.Charges.prototype.addCharges = function(opt_value, opt_index) {
      return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gooseai.Charge, opt_index);
    };
    proto.gooseai.Charges.prototype.clearChargesList = function() {
      return this.setChargesList([]);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.GetAutoChargeRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.GetAutoChargeRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.GetAutoChargeRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.GetAutoChargeRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.GetAutoChargeRequest();
      return proto.gooseai.GetAutoChargeRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.GetAutoChargeRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setOrganizationId(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.GetAutoChargeRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.GetAutoChargeRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.GetAutoChargeRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getOrganizationId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.gooseai.GetAutoChargeRequest.prototype.getOrganizationId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.GetAutoChargeRequest.prototype.setOrganizationId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.AutoChargeIntent.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.AutoChargeIntent.toObject(opt_includeInstance, this);
      };
      proto.gooseai.AutoChargeIntent.toObject = function(includeInstance, msg) {
        var f, obj = {
          id: jspb.Message.getFieldWithDefault(msg, 1, ""),
          paymentLink: jspb.Message.getFieldWithDefault(msg, 2, ""),
          createdAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
          monthlyMaximum: jspb.Message.getFieldWithDefault(msg, 4, 0),
          minimumValue: jspb.Message.getFieldWithDefault(msg, 5, 0),
          amountCredits: jspb.Message.getFieldWithDefault(msg, 6, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.AutoChargeIntent.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.AutoChargeIntent();
      return proto.gooseai.AutoChargeIntent.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.AutoChargeIntent.deserializeBinaryFromReader = function(msg, reader) {
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
            var value = reader.readString();
            msg.setPaymentLink(value);
            break;
          case 3:
            var value = reader.readUint64();
            msg.setCreatedAt(value);
            break;
          case 4:
            var value = reader.readUint64();
            msg.setMonthlyMaximum(value);
            break;
          case 5:
            var value = reader.readUint64();
            msg.setMinimumValue(value);
            break;
          case 6:
            var value = reader.readUint64();
            msg.setAmountCredits(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.AutoChargeIntent.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.AutoChargeIntent.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.AutoChargeIntent.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getId();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
      f = message.getPaymentLink();
      if (f.length > 0) {
        writer.writeString(
          2,
          f
        );
      }
      f = message.getCreatedAt();
      if (f !== 0) {
        writer.writeUint64(
          3,
          f
        );
      }
      f = message.getMonthlyMaximum();
      if (f !== 0) {
        writer.writeUint64(
          4,
          f
        );
      }
      f = message.getMinimumValue();
      if (f !== 0) {
        writer.writeUint64(
          5,
          f
        );
      }
      f = message.getAmountCredits();
      if (f !== 0) {
        writer.writeUint64(
          6,
          f
        );
      }
    };
    proto.gooseai.AutoChargeIntent.prototype.getId = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.AutoChargeIntent.prototype.setId = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.AutoChargeIntent.prototype.getPaymentLink = function() {
      return jspb.Message.getFieldWithDefault(this, 2, "");
    };
    proto.gooseai.AutoChargeIntent.prototype.setPaymentLink = function(value) {
      return jspb.Message.setProto3StringField(this, 2, value);
    };
    proto.gooseai.AutoChargeIntent.prototype.getCreatedAt = function() {
      return jspb.Message.getFieldWithDefault(this, 3, 0);
    };
    proto.gooseai.AutoChargeIntent.prototype.setCreatedAt = function(value) {
      return jspb.Message.setProto3IntField(this, 3, value);
    };
    proto.gooseai.AutoChargeIntent.prototype.getMonthlyMaximum = function() {
      return jspb.Message.getFieldWithDefault(this, 4, 0);
    };
    proto.gooseai.AutoChargeIntent.prototype.setMonthlyMaximum = function(value) {
      return jspb.Message.setProto3IntField(this, 4, value);
    };
    proto.gooseai.AutoChargeIntent.prototype.getMinimumValue = function() {
      return jspb.Message.getFieldWithDefault(this, 5, 0);
    };
    proto.gooseai.AutoChargeIntent.prototype.setMinimumValue = function(value) {
      return jspb.Message.setProto3IntField(this, 5, value);
    };
    proto.gooseai.AutoChargeIntent.prototype.getAmountCredits = function() {
      return jspb.Message.getFieldWithDefault(this, 6, 0);
    };
    proto.gooseai.AutoChargeIntent.prototype.setAmountCredits = function(value) {
      return jspb.Message.setProto3IntField(this, 6, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.UpdateUserInfoRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.UpdateUserInfoRequest.toObject(opt_includeInstance, this);
      };
      proto.gooseai.UpdateUserInfoRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
          email: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.UpdateUserInfoRequest.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.UpdateUserInfoRequest();
      return proto.gooseai.UpdateUserInfoRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.UpdateUserInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setEmail(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.UpdateUserInfoRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.UpdateUserInfoRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.UpdateUserInfoRequest.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = jspb.Message.getField(message, 1);
      if (f != null) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.gooseai.UpdateUserInfoRequest.prototype.getEmail = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.UpdateUserInfoRequest.prototype.setEmail = function(value) {
      return jspb.Message.setField(this, 1, value);
    };
    proto.gooseai.UpdateUserInfoRequest.prototype.clearEmail = function() {
      return jspb.Message.setField(this, 1, void 0);
    };
    proto.gooseai.UpdateUserInfoRequest.prototype.hasEmail = function() {
      return jspb.Message.getField(this, 1) != null;
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.gooseai.UserPasswordChangeTicket.prototype.toObject = function(opt_includeInstance) {
        return proto.gooseai.UserPasswordChangeTicket.toObject(opt_includeInstance, this);
      };
      proto.gooseai.UserPasswordChangeTicket.toObject = function(includeInstance, msg) {
        var f, obj = {
          ticket: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.gooseai.UserPasswordChangeTicket.deserializeBinary = function(bytes) {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.gooseai.UserPasswordChangeTicket();
      return proto.gooseai.UserPasswordChangeTicket.deserializeBinaryFromReader(msg, reader);
    };
    proto.gooseai.UserPasswordChangeTicket.deserializeBinaryFromReader = function(msg, reader) {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = reader.readString();
            msg.setTicket(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.gooseai.UserPasswordChangeTicket.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.gooseai.UserPasswordChangeTicket.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.gooseai.UserPasswordChangeTicket.serializeBinaryToWriter = function(message, writer) {
      var f = void 0;
      f = message.getTicket();
      if (f.length > 0) {
        writer.writeString(
          1,
          f
        );
      }
    };
    proto.gooseai.UserPasswordChangeTicket.prototype.getTicket = function() {
      return jspb.Message.getFieldWithDefault(this, 1, "");
    };
    proto.gooseai.UserPasswordChangeTicket.prototype.setTicket = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    proto.gooseai.OrganizationRole = {
      MEMBER: 0,
      ACCOUNTANT: 1,
      OWNER: 2
    };
    goog.object.extend(exports, proto.gooseai);
  }
});

// dashboard/dashboard_grpc_pb.js
var require_dashboard_grpc_pb = __commonJS({
  "dashboard/dashboard_grpc_pb.js"(exports) {
    var grpc = __require("grpc");
    var dashboard_pb = require_dashboard_pb();
    function serialize_gooseai_APIKey(arg) {
      if (!(arg instanceof dashboard_pb.APIKey)) {
        throw new Error("Expected argument of type gooseai.APIKey");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_APIKey(buffer_arg) {
      return dashboard_pb.APIKey.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_APIKeyFindRequest(arg) {
      if (!(arg instanceof dashboard_pb.APIKeyFindRequest)) {
        throw new Error("Expected argument of type gooseai.APIKeyFindRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_APIKeyFindRequest(buffer_arg) {
      return dashboard_pb.APIKeyFindRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_APIKeyRequest(arg) {
      if (!(arg instanceof dashboard_pb.APIKeyRequest)) {
        throw new Error("Expected argument of type gooseai.APIKeyRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_APIKeyRequest(buffer_arg) {
      return dashboard_pb.APIKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_AutoChargeIntent(arg) {
      if (!(arg instanceof dashboard_pb.AutoChargeIntent)) {
        throw new Error("Expected argument of type gooseai.AutoChargeIntent");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_AutoChargeIntent(buffer_arg) {
      return dashboard_pb.AutoChargeIntent.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_Charge(arg) {
      if (!(arg instanceof dashboard_pb.Charge)) {
        throw new Error("Expected argument of type gooseai.Charge");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_Charge(buffer_arg) {
      return dashboard_pb.Charge.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_Charges(arg) {
      if (!(arg instanceof dashboard_pb.Charges)) {
        throw new Error("Expected argument of type gooseai.Charges");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_Charges(buffer_arg) {
      return dashboard_pb.Charges.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_ClientSettings(arg) {
      if (!(arg instanceof dashboard_pb.ClientSettings)) {
        throw new Error("Expected argument of type gooseai.ClientSettings");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_ClientSettings(buffer_arg) {
      return dashboard_pb.ClientSettings.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_CreateAutoChargeIntentRequest(arg) {
      if (!(arg instanceof dashboard_pb.CreateAutoChargeIntentRequest)) {
        throw new Error("Expected argument of type gooseai.CreateAutoChargeIntentRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_CreateAutoChargeIntentRequest(buffer_arg) {
      return dashboard_pb.CreateAutoChargeIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_CreateChargeRequest(arg) {
      if (!(arg instanceof dashboard_pb.CreateChargeRequest)) {
        throw new Error("Expected argument of type gooseai.CreateChargeRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_CreateChargeRequest(buffer_arg) {
      return dashboard_pb.CreateChargeRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_EmptyRequest(arg) {
      if (!(arg instanceof dashboard_pb.EmptyRequest)) {
        throw new Error("Expected argument of type gooseai.EmptyRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_EmptyRequest(buffer_arg) {
      return dashboard_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_GetAutoChargeRequest(arg) {
      if (!(arg instanceof dashboard_pb.GetAutoChargeRequest)) {
        throw new Error("Expected argument of type gooseai.GetAutoChargeRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_GetAutoChargeRequest(buffer_arg) {
      return dashboard_pb.GetAutoChargeRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_GetChargesRequest(arg) {
      if (!(arg instanceof dashboard_pb.GetChargesRequest)) {
        throw new Error("Expected argument of type gooseai.GetChargesRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_GetChargesRequest(buffer_arg) {
      return dashboard_pb.GetChargesRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_GetMetricsRequest(arg) {
      if (!(arg instanceof dashboard_pb.GetMetricsRequest)) {
        throw new Error("Expected argument of type gooseai.GetMetricsRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_GetMetricsRequest(buffer_arg) {
      return dashboard_pb.GetMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_GetOrganizationRequest(arg) {
      if (!(arg instanceof dashboard_pb.GetOrganizationRequest)) {
        throw new Error("Expected argument of type gooseai.GetOrganizationRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_GetOrganizationRequest(buffer_arg) {
      return dashboard_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_Metrics(arg) {
      if (!(arg instanceof dashboard_pb.Metrics)) {
        throw new Error("Expected argument of type gooseai.Metrics");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_Metrics(buffer_arg) {
      return dashboard_pb.Metrics.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_Organization(arg) {
      if (!(arg instanceof dashboard_pb.Organization)) {
        throw new Error("Expected argument of type gooseai.Organization");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_Organization(buffer_arg) {
      return dashboard_pb.Organization.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_UpdateDefaultOrganizationRequest(arg) {
      if (!(arg instanceof dashboard_pb.UpdateDefaultOrganizationRequest)) {
        throw new Error("Expected argument of type gooseai.UpdateDefaultOrganizationRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_UpdateDefaultOrganizationRequest(buffer_arg) {
      return dashboard_pb.UpdateDefaultOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_UpdateUserInfoRequest(arg) {
      if (!(arg instanceof dashboard_pb.UpdateUserInfoRequest)) {
        throw new Error("Expected argument of type gooseai.UpdateUserInfoRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_UpdateUserInfoRequest(buffer_arg) {
      return dashboard_pb.UpdateUserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_User(arg) {
      if (!(arg instanceof dashboard_pb.User)) {
        throw new Error("Expected argument of type gooseai.User");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_User(buffer_arg) {
      return dashboard_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_gooseai_UserPasswordChangeTicket(arg) {
      if (!(arg instanceof dashboard_pb.UserPasswordChangeTicket)) {
        throw new Error("Expected argument of type gooseai.UserPasswordChangeTicket");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_gooseai_UserPasswordChangeTicket(buffer_arg) {
      return dashboard_pb.UserPasswordChangeTicket.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var DashboardServiceService = exports.DashboardServiceService = {
      getMe: {
        path: "/gooseai.DashboardService/GetMe",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.EmptyRequest,
        responseType: dashboard_pb.User,
        requestSerialize: serialize_gooseai_EmptyRequest,
        requestDeserialize: deserialize_gooseai_EmptyRequest,
        responseSerialize: serialize_gooseai_User,
        responseDeserialize: deserialize_gooseai_User
      },
      getOrganization: {
        path: "/gooseai.DashboardService/GetOrganization",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.GetOrganizationRequest,
        responseType: dashboard_pb.Organization,
        requestSerialize: serialize_gooseai_GetOrganizationRequest,
        requestDeserialize: deserialize_gooseai_GetOrganizationRequest,
        responseSerialize: serialize_gooseai_Organization,
        responseDeserialize: deserialize_gooseai_Organization
      },
      getMetrics: {
        path: "/gooseai.DashboardService/GetMetrics",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.GetMetricsRequest,
        responseType: dashboard_pb.Metrics,
        requestSerialize: serialize_gooseai_GetMetricsRequest,
        requestDeserialize: deserialize_gooseai_GetMetricsRequest,
        responseSerialize: serialize_gooseai_Metrics,
        responseDeserialize: deserialize_gooseai_Metrics
      },
      createAPIKey: {
        path: "/gooseai.DashboardService/CreateAPIKey",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.APIKeyRequest,
        responseType: dashboard_pb.APIKey,
        requestSerialize: serialize_gooseai_APIKeyRequest,
        requestDeserialize: deserialize_gooseai_APIKeyRequest,
        responseSerialize: serialize_gooseai_APIKey,
        responseDeserialize: deserialize_gooseai_APIKey
      },
      deleteAPIKey: {
        path: "/gooseai.DashboardService/DeleteAPIKey",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.APIKeyFindRequest,
        responseType: dashboard_pb.APIKey,
        requestSerialize: serialize_gooseai_APIKeyFindRequest,
        requestDeserialize: deserialize_gooseai_APIKeyFindRequest,
        responseSerialize: serialize_gooseai_APIKey,
        responseDeserialize: deserialize_gooseai_APIKey
      },
      updateDefaultOrganization: {
        path: "/gooseai.DashboardService/UpdateDefaultOrganization",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.UpdateDefaultOrganizationRequest,
        responseType: dashboard_pb.User,
        requestSerialize: serialize_gooseai_UpdateDefaultOrganizationRequest,
        requestDeserialize: deserialize_gooseai_UpdateDefaultOrganizationRequest,
        responseSerialize: serialize_gooseai_User,
        responseDeserialize: deserialize_gooseai_User
      },
      getClientSettings: {
        path: "/gooseai.DashboardService/GetClientSettings",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.EmptyRequest,
        responseType: dashboard_pb.ClientSettings,
        requestSerialize: serialize_gooseai_EmptyRequest,
        requestDeserialize: deserialize_gooseai_EmptyRequest,
        responseSerialize: serialize_gooseai_ClientSettings,
        responseDeserialize: deserialize_gooseai_ClientSettings
      },
      setClientSettings: {
        path: "/gooseai.DashboardService/SetClientSettings",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.ClientSettings,
        responseType: dashboard_pb.ClientSettings,
        requestSerialize: serialize_gooseai_ClientSettings,
        requestDeserialize: deserialize_gooseai_ClientSettings,
        responseSerialize: serialize_gooseai_ClientSettings,
        responseDeserialize: deserialize_gooseai_ClientSettings
      },
      updateUserInfo: {
        path: "/gooseai.DashboardService/UpdateUserInfo",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.UpdateUserInfoRequest,
        responseType: dashboard_pb.User,
        requestSerialize: serialize_gooseai_UpdateUserInfoRequest,
        requestDeserialize: deserialize_gooseai_UpdateUserInfoRequest,
        responseSerialize: serialize_gooseai_User,
        responseDeserialize: deserialize_gooseai_User
      },
      createPasswordChangeTicket: {
        path: "/gooseai.DashboardService/CreatePasswordChangeTicket",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.EmptyRequest,
        responseType: dashboard_pb.UserPasswordChangeTicket,
        requestSerialize: serialize_gooseai_EmptyRequest,
        requestDeserialize: deserialize_gooseai_EmptyRequest,
        responseSerialize: serialize_gooseai_UserPasswordChangeTicket,
        responseDeserialize: deserialize_gooseai_UserPasswordChangeTicket
      },
      createCharge: {
        path: "/gooseai.DashboardService/CreateCharge",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.CreateChargeRequest,
        responseType: dashboard_pb.Charge,
        requestSerialize: serialize_gooseai_CreateChargeRequest,
        requestDeserialize: deserialize_gooseai_CreateChargeRequest,
        responseSerialize: serialize_gooseai_Charge,
        responseDeserialize: deserialize_gooseai_Charge
      },
      getCharges: {
        path: "/gooseai.DashboardService/GetCharges",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.GetChargesRequest,
        responseType: dashboard_pb.Charges,
        requestSerialize: serialize_gooseai_GetChargesRequest,
        requestDeserialize: deserialize_gooseai_GetChargesRequest,
        responseSerialize: serialize_gooseai_Charges,
        responseDeserialize: deserialize_gooseai_Charges
      },
      createAutoChargeIntent: {
        path: "/gooseai.DashboardService/CreateAutoChargeIntent",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.CreateAutoChargeIntentRequest,
        responseType: dashboard_pb.AutoChargeIntent,
        requestSerialize: serialize_gooseai_CreateAutoChargeIntentRequest,
        requestDeserialize: deserialize_gooseai_CreateAutoChargeIntentRequest,
        responseSerialize: serialize_gooseai_AutoChargeIntent,
        responseDeserialize: deserialize_gooseai_AutoChargeIntent
      },
      updateAutoChargeIntent: {
        path: "/gooseai.DashboardService/UpdateAutoChargeIntent",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.CreateAutoChargeIntentRequest,
        responseType: dashboard_pb.AutoChargeIntent,
        requestSerialize: serialize_gooseai_CreateAutoChargeIntentRequest,
        requestDeserialize: deserialize_gooseai_CreateAutoChargeIntentRequest,
        responseSerialize: serialize_gooseai_AutoChargeIntent,
        responseDeserialize: deserialize_gooseai_AutoChargeIntent
      },
      getAutoChargeIntent: {
        path: "/gooseai.DashboardService/GetAutoChargeIntent",
        requestStream: false,
        responseStream: false,
        requestType: dashboard_pb.GetAutoChargeRequest,
        responseType: dashboard_pb.AutoChargeIntent,
        requestSerialize: serialize_gooseai_GetAutoChargeRequest,
        requestDeserialize: deserialize_gooseai_GetAutoChargeRequest,
        responseSerialize: serialize_gooseai_AutoChargeIntent,
        responseDeserialize: deserialize_gooseai_AutoChargeIntent
      }
    };
    exports.DashboardServiceClient = grpc.makeGenericClientConstructor(DashboardServiceService);
  }
});
export default require_dashboard_grpc_pb();
