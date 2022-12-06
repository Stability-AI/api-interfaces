
'Generated protocol buffer code.'
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
_sym_db = _symbol_database.Default()
DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x17gooseai/dashboard.proto\x12\x07gooseai"\xce\x01\n\x12OrganizationMember\x129\n\x0corganization\x18\x01 \x01(\x0b2\x15.gooseai.OrganizationR\x0corganization\x12&\n\x04user\x18\x02 \x01(\x0b2\r.gooseai.UserH\x00R\x04user\x88\x01\x01\x12-\n\x04role\x18\x03 \x01(\x0e2\x19.gooseai.OrganizationRoleR\x04role\x12\x1d\n\nis_default\x18\x04 \x01(\x08R\tisDefaultB\x07\n\x05_user"\x99\x01\n\x11OrganizationGrant\x12%\n\x0eamount_granted\x18\x01 \x01(\x01R\ramountGranted\x12\x1f\n\x0bamount_used\x18\x02 \x01(\x01R\namountUsed\x12\x1d\n\nexpires_at\x18\x03 \x01(\x04R\texpiresAt\x12\x1d\n\ngranted_at\x18\x04 \x01(\x04R\tgrantedAt"g\n\x17OrganizationPaymentInfo\x12\x18\n\x07balance\x18\x01 \x01(\x01R\x07balance\x122\n\x06grants\x18\x02 \x03(\x0b2\x1a.gooseai.OrganizationGrantR\x06grants"a\n\x16OrganizationAutoCharge\x12\x18\n\x07enabled\x18\x01 \x01(\x08R\x07enabled\x12\x0e\n\x02id\x18\x02 \x01(\tR\x02id\x12\x1d\n\ncreated_at\x18\x03 \x01(\x04R\tcreatedAt"\x87\x03\n\x0cOrganization\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12 \n\x0bdescription\x18\x03 \x01(\tR\x0bdescription\x125\n\x07members\x18\x04 \x03(\x0b2\x1b.gooseai.OrganizationMemberR\x07members\x12H\n\x0cpayment_info\x18\x05 \x01(\x0b2 .gooseai.OrganizationPaymentInfoH\x00R\x0bpaymentInfo\x88\x01\x01\x121\n\x12stripe_customer_id\x18\x06 \x01(\tH\x01R\x10stripeCustomerId\x88\x01\x01\x12E\n\x0bauto_charge\x18\x07 \x01(\x0b2\x1f.gooseai.OrganizationAutoChargeH\x02R\nautoCharge\x88\x01\x01B\x0f\n\r_payment_infoB\x15\n\x13_stripe_customer_idB\x0e\n\x0c_auto_charge"V\n\x06APIKey\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x1b\n\tis_secret\x18\x02 \x01(\x08R\x08isSecret\x12\x1d\n\ncreated_at\x18\x03 \x01(\x04R\tcreatedAt"\xcc\x02\n\x04User\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1c\n\x07auth_id\x18\x02 \x01(\tH\x00R\x06authId\x88\x01\x01\x12\'\n\x0fprofile_picture\x18\x03 \x01(\tR\x0eprofilePicture\x12\x14\n\x05email\x18\x04 \x01(\tR\x05email\x12A\n\rorganizations\x18\x05 \x03(\x0b2\x1b.gooseai.OrganizationMemberR\rorganizations\x12*\n\x08api_keys\x18\x07 \x03(\x0b2\x0f.gooseai.APIKeyR\x07apiKeys\x12\x1d\n\ncreated_at\x18\x08 \x01(\x04R\tcreatedAt\x12*\n\x0eemail_verified\x18\t \x01(\x08H\x01R\remailVerified\x88\x01\x01B\n\n\x08_auth_idB\x11\n\x0f_email_verified"V\n\x08CostData\x12#\n\ramount_tokens\x18\x01 \x01(\rR\x0camountTokens\x12%\n\x0eamount_credits\x18\x02 \x01(\x01R\ramountCredits"\x80\x02\n\x0bUsageMetric\x12\x1c\n\toperation\x18\x01 \x01(\tR\toperation\x12\x16\n\x06engine\x18\x02 \x01(\tR\x06engine\x120\n\ninput_cost\x18\x03 \x01(\x0b2\x11.gooseai.CostDataR\tinputCost\x122\n\x0boutput_cost\x18\x04 \x01(\x0b2\x11.gooseai.CostDataR\noutputCost\x12\x17\n\x04user\x18\x05 \x01(\tH\x00R\x04user\x88\x01\x01\x123\n\x15aggregation_timestamp\x18\x06 \x01(\x04R\x14aggregationTimestampB\x07\n\x05_user"W\n\tCostTotal\x12#\n\ramount_tokens\x18\x01 \x01(\rR\x0camountTokens\x12%\n\x0eamount_credits\x18\x02 \x01(\x01R\ramountCredits"~\n\x10TotalMetricsData\x123\n\x0binput_total\x18\x01 \x01(\x0b2\x12.gooseai.CostTotalR\ninputTotal\x125\n\x0coutput_total\x18\x02 \x01(\x0b2\x12.gooseai.CostTotalR\x0boutputTotal"j\n\x07Metrics\x12.\n\x07metrics\x18\x01 \x03(\x0b2\x14.gooseai.UsageMetricR\x07metrics\x12/\n\x05total\x18\x02 \x01(\x0b2\x19.gooseai.TotalMetricsDataR\x05total"\x0e\n\x0cEmptyRequest"(\n\x16GetOrganizationRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id"\xdf\x01\n\x11GetMetricsRequest\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId\x12\x1c\n\x07user_id\x18\x02 \x01(\tH\x00R\x06userId\x88\x01\x01\x12\x1d\n\nrange_from\x18\x03 \x01(\x04R\trangeFrom\x12\x19\n\x08range_to\x18\x04 \x01(\x04R\x07rangeTo\x12=\n\x1binclude_per_request_metrics\x18\x05 \x01(\x08R\x18includePerRequestMetricsB\n\n\x08_user_id",\n\rAPIKeyRequest\x12\x1b\n\tis_secret\x18\x01 \x01(\x08R\x08isSecret"#\n\x11APIKeyFindRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id"K\n UpdateDefaultOrganizationRequest\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId",\n\x0eClientSettings\x12\x1a\n\x08settings\x18\x01 \x01(\x0cR\x08settings"\xbd\x01\n\x1dCreateAutoChargeIntentRequest\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId\x12\'\n\x0fmonthly_maximum\x18\x02 \x01(\x04R\x0emonthlyMaximum\x12#\n\rminimum_value\x18\x03 \x01(\x04R\x0cminimumValue\x12%\n\x0eamount_credits\x18\x04 \x01(\x04R\ramountCredits"V\n\x13CreateChargeRequest\x12\x16\n\x06amount\x18\x01 \x01(\x04R\x06amount\x12\'\n\x0forganization_id\x18\x02 \x01(\tR\x0eorganizationId"v\n\x11GetChargesRequest\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId\x12\x1d\n\nrange_from\x18\x02 \x01(\x04R\trangeFrom\x12\x19\n\x08range_to\x18\x03 \x01(\x04R\x07rangeTo"\xb8\x01\n\x06Charge\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x12\n\x04paid\x18\x02 \x01(\x08R\x04paid\x12!\n\x0creceipt_link\x18\x03 \x01(\tR\x0breceiptLink\x12!\n\x0cpayment_link\x18\x04 \x01(\tR\x0bpaymentLink\x12\x1d\n\ncreated_at\x18\x05 \x01(\x04R\tcreatedAt\x12%\n\x0eamount_credits\x18\x06 \x01(\x04R\ramountCredits"4\n\x07Charges\x12)\n\x07charges\x18\x01 \x03(\x0b2\x0f.gooseai.ChargeR\x07charges"?\n\x14GetAutoChargeRequest\x12\'\n\x0forganization_id\x18\x01 \x01(\tR\x0eorganizationId"\xd9\x01\n\x10AutoChargeIntent\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12!\n\x0cpayment_link\x18\x02 \x01(\tR\x0bpaymentLink\x12\x1d\n\ncreated_at\x18\x03 \x01(\x04R\tcreatedAt\x12\'\n\x0fmonthly_maximum\x18\x04 \x01(\x04R\x0emonthlyMaximum\x12#\n\rminimum_value\x18\x05 \x01(\x04R\x0cminimumValue\x12%\n\x0eamount_credits\x18\x06 \x01(\x04R\ramountCredits"<\n\x15UpdateUserInfoRequest\x12\x19\n\x05email\x18\x01 \x01(\tH\x00R\x05email\x88\x01\x01B\x08\n\x06_email"2\n\x18UserPasswordChangeTicket\x12\x16\n\x06ticket\x18\x01 \x01(\tR\x06ticket*9\n\x10OrganizationRole\x12\n\n\x06MEMBER\x10\x00\x12\x0e\n\nACCOUNTANT\x10\x01\x12\t\n\x05OWNER\x10\x022\xf7\x08\n\x10DashboardService\x12-\n\x05GetMe\x12\x15.gooseai.EmptyRequest\x1a\r.gooseai.User\x12I\n\x0fGetOrganization\x12\x1f.gooseai.GetOrganizationRequest\x1a\x15.gooseai.Organization\x12:\n\nGetMetrics\x12\x1a.gooseai.GetMetricsRequest\x1a\x10.gooseai.Metrics\x127\n\x0cCreateAPIKey\x12\x16.gooseai.APIKeyRequest\x1a\x0f.gooseai.APIKey\x12;\n\x0cDeleteAPIKey\x12\x1a.gooseai.APIKeyFindRequest\x1a\x0f.gooseai.APIKey\x12U\n\x19UpdateDefaultOrganization\x12).gooseai.UpdateDefaultOrganizationRequest\x1a\r.gooseai.User\x12C\n\x11GetClientSettings\x12\x15.gooseai.EmptyRequest\x1a\x17.gooseai.ClientSettings\x12E\n\x11SetClientSettings\x12\x17.gooseai.ClientSettings\x1a\x17.gooseai.ClientSettings\x12?\n\x0eUpdateUserInfo\x12\x1e.gooseai.UpdateUserInfoRequest\x1a\r.gooseai.User\x12V\n\x1aCreatePasswordChangeTicket\x12\x15.gooseai.EmptyRequest\x1a!.gooseai.UserPasswordChangeTicket\x125\n\rDeleteAccount\x12\x15.gooseai.EmptyRequest\x1a\r.gooseai.User\x12=\n\x0cCreateCharge\x12\x1c.gooseai.CreateChargeRequest\x1a\x0f.gooseai.Charge\x12:\n\nGetCharges\x12\x1a.gooseai.GetChargesRequest\x1a\x10.gooseai.Charges\x12[\n\x16CreateAutoChargeIntent\x12&.gooseai.CreateAutoChargeIntentRequest\x1a\x19.gooseai.AutoChargeIntent\x12[\n\x16UpdateAutoChargeIntent\x12&.gooseai.CreateAutoChargeIntentRequest\x1a\x19.gooseai.AutoChargeIntent\x12O\n\x13GetAutoChargeIntent\x12\x1d.gooseai.GetAutoChargeRequest\x1a\x19.gooseai.AutoChargeIntentB\x96\x01\n\x0bcom.gooseaiB\x0eDashboardProtoP\x01Z;github.com/stability-ai/api-interfaces/gen/proto/go/gooseai\xa2\x02\x03GXX\xaa\x02\x07Gooseai\xca\x02\x07Gooseai\xe2\x02\x13Gooseai\\GPBMetadata\xea\x02\x07Gooseaib\x06proto3')
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'gooseai.dashboard_pb2', globals())
if (_descriptor._USE_C_DESCRIPTORS == False):
    DESCRIPTOR._options = None
    DESCRIPTOR._serialized_options = b'\n\x0bcom.gooseaiB\x0eDashboardProtoP\x01Z;github.com/stability-ai/api-interfaces/gen/proto/go/gooseai\xa2\x02\x03GXX\xaa\x02\x07Gooseai\xca\x02\x07Gooseai\xe2\x02\x13Gooseai\\GPBMetadata\xea\x02\x07Gooseai'
    _ORGANIZATIONROLE._serialized_start = 3624
    _ORGANIZATIONROLE._serialized_end = 3681
    _ORGANIZATIONMEMBER._serialized_start = 37
    _ORGANIZATIONMEMBER._serialized_end = 243
    _ORGANIZATIONGRANT._serialized_start = 246
    _ORGANIZATIONGRANT._serialized_end = 399
    _ORGANIZATIONPAYMENTINFO._serialized_start = 401
    _ORGANIZATIONPAYMENTINFO._serialized_end = 504
    _ORGANIZATIONAUTOCHARGE._serialized_start = 506
    _ORGANIZATIONAUTOCHARGE._serialized_end = 603
    _ORGANIZATION._serialized_start = 606
    _ORGANIZATION._serialized_end = 997
    _APIKEY._serialized_start = 999
    _APIKEY._serialized_end = 1085
    _USER._serialized_start = 1088
    _USER._serialized_end = 1420
    _COSTDATA._serialized_start = 1422
    _COSTDATA._serialized_end = 1508
    _USAGEMETRIC._serialized_start = 1511
    _USAGEMETRIC._serialized_end = 1767
    _COSTTOTAL._serialized_start = 1769
    _COSTTOTAL._serialized_end = 1856
    _TOTALMETRICSDATA._serialized_start = 1858
    _TOTALMETRICSDATA._serialized_end = 1984
    _METRICS._serialized_start = 1986
    _METRICS._serialized_end = 2092
    _EMPTYREQUEST._serialized_start = 2094
    _EMPTYREQUEST._serialized_end = 2108
    _GETORGANIZATIONREQUEST._serialized_start = 2110
    _GETORGANIZATIONREQUEST._serialized_end = 2150
    _GETMETRICSREQUEST._serialized_start = 2153
    _GETMETRICSREQUEST._serialized_end = 2376
    _APIKEYREQUEST._serialized_start = 2378
    _APIKEYREQUEST._serialized_end = 2422
    _APIKEYFINDREQUEST._serialized_start = 2424
    _APIKEYFINDREQUEST._serialized_end = 2459
    _UPDATEDEFAULTORGANIZATIONREQUEST._serialized_start = 2461
    _UPDATEDEFAULTORGANIZATIONREQUEST._serialized_end = 2536
    _CLIENTSETTINGS._serialized_start = 2538
    _CLIENTSETTINGS._serialized_end = 2582
    _CREATEAUTOCHARGEINTENTREQUEST._serialized_start = 2585
    _CREATEAUTOCHARGEINTENTREQUEST._serialized_end = 2774
    _CREATECHARGEREQUEST._serialized_start = 2776
    _CREATECHARGEREQUEST._serialized_end = 2862
    _GETCHARGESREQUEST._serialized_start = 2864
    _GETCHARGESREQUEST._serialized_end = 2982
    _CHARGE._serialized_start = 2985
    _CHARGE._serialized_end = 3169
    _CHARGES._serialized_start = 3171
    _CHARGES._serialized_end = 3223
    _GETAUTOCHARGEREQUEST._serialized_start = 3225
    _GETAUTOCHARGEREQUEST._serialized_end = 3288
    _AUTOCHARGEINTENT._serialized_start = 3291
    _AUTOCHARGEINTENT._serialized_end = 3508
    _UPDATEUSERINFOREQUEST._serialized_start = 3510
    _UPDATEUSERINFOREQUEST._serialized_end = 3570
    _USERPASSWORDCHANGETICKET._serialized_start = 3572
    _USERPASSWORDCHANGETICKET._serialized_end = 3622
    _DASHBOARDSERVICE._serialized_start = 3684
    _DASHBOARDSERVICE._serialized_end = 4827
