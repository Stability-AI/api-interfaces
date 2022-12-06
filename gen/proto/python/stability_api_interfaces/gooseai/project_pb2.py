
'Generated protocol buffer code.'
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
_sym_db = _symbol_database.Default()
DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15gooseai/project.proto\x12\x07gooseai"\\\n\x0cProjectAsset\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x10\n\x03uri\x18\x02 \x01(\tR\x03uri\x12*\n\x03use\x18\x03 \x01(\x0e2\x18.gooseai.ProjectAssetUseR\x03use"\xd6\x02\n\x07Project\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x14\n\x05title\x18\x02 \x01(\tR\x05title\x12\x19\n\x08owner_id\x18\x03 \x01(\tR\x07ownerId\x12.\n\x06access\x18\x04 \x01(\x0e2\x16.gooseai.ProjectAccessR\x06access\x12.\n\x06status\x18\x05 \x01(\x0e2\x16.gooseai.ProjectStatusR\x06status\x12\x12\n\x04size\x18\x06 \x01(\x04R\x04size\x12)\n\x04file\x18\x07 \x01(\x0b2\x15.gooseai.ProjectAssetR\x04file\x12\x1d\n\ncreated_at\x18\x08 \x01(\x04R\tcreatedAt\x12\x1d\n\nupdated_at\x18\t \x01(\x04R\tupdatedAt\x12-\n\x06assets\x18\n \x03(\x0b2\x15.gooseai.ProjectAssetR\x06assets"\xf2\x01\n\x14CreateProjectRequest\x12\x14\n\x05title\x18\x01 \x01(\tR\x05title\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x12.\n\x06access\x18\x03 \x01(\x0e2\x16.gooseai.ProjectAccessR\x06access\x12.\n\x06status\x18\x04 \x01(\x0e2\x16.gooseai.ProjectStatusR\x06status\x12.\n\x04file\x18\x05 \x01(\x0b2\x15.gooseai.ProjectAssetH\x01R\x04file\x88\x01\x01B\x0b\n\t_owner_idB\x07\n\x05_file"\xb1\x02\n\x14UpdateProjectRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x12\x19\n\x05title\x18\x03 \x01(\tH\x01R\x05title\x88\x01\x01\x123\n\x06access\x18\x04 \x01(\x0e2\x16.gooseai.ProjectAccessH\x02R\x06access\x88\x01\x01\x123\n\x06status\x18\x05 \x01(\x0e2\x16.gooseai.ProjectStatusH\x03R\x06status\x88\x01\x01\x12.\n\x04file\x18\x06 \x01(\x0b2\x15.gooseai.ProjectAssetH\x04R\x04file\x88\x01\x01B\x0b\n\t_owner_idB\x08\n\x06_titleB\t\n\x07_accessB\t\n\x07_statusB\x07\n\x05_file"A\n\x12ListProjectRequest\x12\x1e\n\x08owner_id\x18\x01 \x01(\tH\x00R\x07ownerId\x88\x01\x01B\x0b\n\t_owner_id"P\n\x11GetProjectRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01B\x0b\n\t_owner_id"S\n\x14DeleteProjectRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01B\x0b\n\t_owner_id*F\n\rProjectAccess\x12\x1a\n\x16PROJECT_ACCESS_PRIVATE\x10\x00\x12\x19\n\x15PROJECT_ACCESS_PUBLIC\x10\x01*c\n\rProjectStatus\x12\x1b\n\x17PROJECT_STATUS_INACTIVE\x10\x00\x12\x19\n\x15PROJECT_STATUS_ACTIVE\x10\x01\x12\x1a\n\x16PROJECT_STATUS_DELETED\x10\x02*\xb0\x01\n\x0fProjectAssetUse\x12\x1f\n\x1bPROJECT_ASSET_USE_UNDEFINED\x10\x00\x12\x1b\n\x17PROJECT_ASSET_USE_INPUT\x10\x01\x12\x1c\n\x18PROJECT_ASSET_USE_OUTPUT\x10\x02\x12"\n\x1ePROJECT_ASSET_USE_INTERMEDIATE\x10\x03\x12\x1d\n\x19PROJECT_ASSET_USE_PROJECT\x10\x042\xb9\x02\n\x0eProjectService\x12;\n\x06Create\x12\x1d.gooseai.CreateProjectRequest\x1a\x10.gooseai.Project"\x00\x12;\n\x06Update\x12\x1d.gooseai.UpdateProjectRequest\x1a\x10.gooseai.Project"\x00\x129\n\x04List\x12\x1b.gooseai.ListProjectRequest\x1a\x10.gooseai.Project"\x000\x01\x125\n\x03Get\x12\x1a.gooseai.GetProjectRequest\x1a\x10.gooseai.Project"\x00\x12;\n\x06Delete\x12\x1d.gooseai.DeleteProjectRequest\x1a\x10.gooseai.Project"\x00B\x94\x01\n\x0bcom.gooseaiB\x0cProjectProtoP\x01Z;github.com/stability-ai/api-interfaces/gen/proto/go/gooseai\xa2\x02\x03GXX\xaa\x02\x07Gooseai\xca\x02\x07Gooseai\xe2\x02\x13Gooseai\\GPBMetadata\xea\x02\x07Gooseaib\x06proto3')
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'gooseai.project_pb2', globals())
if (_descriptor._USE_C_DESCRIPTORS == False):
    DESCRIPTOR._options = None
    DESCRIPTOR._serialized_options = b'\n\x0bcom.gooseaiB\x0cProjectProtoP\x01Z;github.com/stability-ai/api-interfaces/gen/proto/go/gooseai\xa2\x02\x03GXX\xaa\x02\x07Gooseai\xca\x02\x07Gooseai\xe2\x02\x13Gooseai\\GPBMetadata\xea\x02\x07Gooseai'
    _PROJECTACCESS._serialized_start = 1260
    _PROJECTACCESS._serialized_end = 1330
    _PROJECTSTATUS._serialized_start = 1332
    _PROJECTSTATUS._serialized_end = 1431
    _PROJECTASSETUSE._serialized_start = 1434
    _PROJECTASSETUSE._serialized_end = 1610
    _PROJECTASSET._serialized_start = 34
    _PROJECTASSET._serialized_end = 126
    _PROJECT._serialized_start = 129
    _PROJECT._serialized_end = 471
    _CREATEPROJECTREQUEST._serialized_start = 474
    _CREATEPROJECTREQUEST._serialized_end = 716
    _UPDATEPROJECTREQUEST._serialized_start = 719
    _UPDATEPROJECTREQUEST._serialized_end = 1024
    _LISTPROJECTREQUEST._serialized_start = 1026
    _LISTPROJECTREQUEST._serialized_end = 1091
    _GETPROJECTREQUEST._serialized_start = 1093
    _GETPROJECTREQUEST._serialized_end = 1173
    _DELETEPROJECTREQUEST._serialized_start = 1175
    _DELETEPROJECTREQUEST._serialized_end = 1258
    _PROJECTSERVICE._serialized_start = 1613
    _PROJECTSERVICE._serialized_end = 1926
