# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: stability_api/platform/project/v1/project.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from stability_api.platform.generation.v1 import generation_pb2 as stability__api_dot_platform_dot_generation_dot_v1_dot_generation__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n/stability_api/platform/project/v1/project.proto\x12#stabilityai.platformapis.project.v1\x1a\x35stability_api/platform/generation/v1/generation.proto\"\xb3\x03\n\x0cProjectAsset\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x10\n\x03uri\x18\x02 \x01(\tR\x03uri\x12\x46\n\x03use\x18\x03 \x01(\x0e\x32\x34.stabilityai.platformapis.project.v1.ProjectAssetUseR\x03use\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\x12\x12\n\x04size\x18\x05 \x01(\x04R\x04size\x12\x1d\n\ncreated_at\x18\x06 \x01(\x04R\tcreatedAt\x12\x1d\n\nupdated_at\x18\x07 \x01(\x04R\tupdatedAt\x12I\n\x07request\x18\x08 \x01(\x0b\x32/.stabilityai.platformapis.generation.v1.RequestR\x07request\x12O\n\x04tags\x18\t \x03(\x0b\x32;.stabilityai.platformapis.project.v1.ProjectAsset.TagsEntryR\x04tags\x1a\x37\n\tTagsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"\x8c\x04\n\x07Project\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x14\n\x05title\x18\x02 \x01(\tR\x05title\x12\x19\n\x08owner_id\x18\x03 \x01(\tR\x07ownerId\x12J\n\x06\x61\x63\x63\x65ss\x18\x04 \x01(\x0e\x32\x32.stabilityai.platformapis.project.v1.ProjectAccessR\x06\x61\x63\x63\x65ss\x12J\n\x06status\x18\x05 \x01(\x0e\x32\x32.stabilityai.platformapis.project.v1.ProjectStatusR\x06status\x12\x12\n\x04size\x18\x06 \x01(\x04R\x04size\x12\x45\n\x04\x66ile\x18\x07 \x01(\x0b\x32\x31.stabilityai.platformapis.project.v1.ProjectAssetR\x04\x66ile\x12\x1d\n\ncreated_at\x18\x08 \x01(\x04R\tcreatedAt\x12\x1d\n\nupdated_at\x18\t \x01(\x04R\tupdatedAt\x12I\n\x06\x61ssets\x18\n \x03(\x0b\x32\x31.stabilityai.platformapis.project.v1.ProjectAssetR\x06\x61ssets\x12\x44\n\x04type\x18\x0b \x01(\x0e\x32\x30.stabilityai.platformapis.project.v1.ProjectTypeR\x04type\"\x8c\x03\n\x14\x43reateProjectRequest\x12\x14\n\x05title\x18\x01 \x01(\tR\x05title\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x12J\n\x06\x61\x63\x63\x65ss\x18\x03 \x01(\x0e\x32\x32.stabilityai.platformapis.project.v1.ProjectAccessR\x06\x61\x63\x63\x65ss\x12J\n\x06status\x18\x04 \x01(\x0e\x32\x32.stabilityai.platformapis.project.v1.ProjectStatusR\x06status\x12J\n\x04\x66ile\x18\x05 \x01(\x0b\x32\x31.stabilityai.platformapis.project.v1.ProjectAssetH\x01R\x04\x66ile\x88\x01\x01\x12\x44\n\x04type\x18\x06 \x01(\x0e\x32\x30.stabilityai.platformapis.project.v1.ProjectTypeR\x04typeB\x0b\n\t_owner_idB\x07\n\x05_file\"\xd9\x03\n\x14UpdateProjectRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x12\x19\n\x05title\x18\x03 \x01(\tH\x01R\x05title\x88\x01\x01\x12O\n\x06\x61\x63\x63\x65ss\x18\x04 \x01(\x0e\x32\x32.stabilityai.platformapis.project.v1.ProjectAccessH\x02R\x06\x61\x63\x63\x65ss\x88\x01\x01\x12O\n\x06status\x18\x05 \x01(\x0e\x32\x32.stabilityai.platformapis.project.v1.ProjectStatusH\x03R\x06status\x88\x01\x01\x12J\n\x04\x66ile\x18\x06 \x01(\x0b\x32\x31.stabilityai.platformapis.project.v1.ProjectAssetH\x04R\x04\x66ile\x88\x01\x01\x12I\n\x04type\x18\x07 \x01(\x0e\x32\x30.stabilityai.platformapis.project.v1.ProjectTypeH\x05R\x04type\x88\x01\x01\x42\x0b\n\t_owner_idB\x08\n\x06_titleB\t\n\x07_accessB\t\n\x07_statusB\x07\n\x05_fileB\x07\n\x05_type\"A\n\x12ListProjectRequest\x12\x1e\n\x08owner_id\x18\x01 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x42\x0b\n\t_owner_id\"P\n\x11GetProjectRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x42\x0b\n\t_owner_id\"S\n\x14\x44\x65leteProjectRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x42\x0b\n\t_owner_id\"\x98\x04\n\x12QueryAssetsRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x12\x19\n\x05since\x18\x03 \x01(\x04H\x01R\x05since\x88\x01\x01\x12\x19\n\x05until\x18\x04 \x01(\x04H\x02R\x05until\x88\x01\x01\x12\x19\n\x05limit\x18\x05 \x01(\x04H\x03R\x05limit\x88\x01\x01\x12 \n\tstart_key\x18\x06 \x01(\tH\x04R\x08startKey\x88\x01\x01\x12\x46\n\x03use\x18\x07 \x03(\x0e\x32\x34.stabilityai.platformapis.project.v1.ProjectAssetUseR\x03use\x12N\n\x08sort_dir\x18\x08 \x01(\x0e\x32\x33.stabilityai.platformapis.project.v1.ProjectSortDirR\x07sortDir\x12U\n\x04tags\x18\t \x03(\x0b\x32\x41.stabilityai.platformapis.project.v1.QueryAssetsRequest.TagsEntryR\x04tags\x1a\x37\n\tTagsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x42\x0b\n\t_owner_idB\x08\n\x06_sinceB\x08\n\x06_untilB\x08\n\x06_limitB\x0c\n\n_start_key\"\x8d\x01\n\x13QueryAssetsResponse\x12I\n\x06\x61ssets\x18\x01 \x03(\x0b\x32\x31.stabilityai.platformapis.project.v1.ProjectAssetR\x06\x61ssets\x12\x1e\n\x08last_key\x18\x02 \x01(\tH\x00R\x07lastKey\x88\x01\x01\x42\x0b\n\t_last_key\"\xfa\x01\n\x10TagAssetsRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x12\x1b\n\tasset_ids\x18\x03 \x03(\tR\x08\x61ssetIds\x12S\n\x04tags\x18\x04 \x03(\x0b\x32?.stabilityai.platformapis.project.v1.TagAssetsRequest.TagsEntryR\x04tags\x1a\x37\n\tTagsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x42\x0b\n\t_owner_id\"[\n\x11TagAssetsResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x19\n\x08owner_id\x18\x02 \x01(\tR\x07ownerId\x12\x1b\n\tasset_ids\x18\x03 \x03(\tR\x08\x61ssetIds\"\x89\x01\n\x12UntagAssetsRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x12\x1b\n\tasset_ids\x18\x03 \x03(\tR\x08\x61ssetIds\x12\x19\n\x08tag_keys\x18\x04 \x03(\tR\x07tagKeysB\x0b\n\t_owner_id\"]\n\x13UntagAssetsResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x19\n\x08owner_id\x18\x02 \x01(\tR\x07ownerId\x12\x1b\n\tasset_ids\x18\x03 \x03(\tR\x08\x61ssetIds\"o\n\x13\x44\x65leteAssetsRequest\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x1e\n\x08owner_id\x18\x02 \x01(\tH\x00R\x07ownerId\x88\x01\x01\x12\x1b\n\tasset_ids\x18\x03 \x03(\tR\x08\x61ssetIdsB\x0b\n\t_owner_id\"^\n\x14\x44\x65leteAssetsResponse\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x19\n\x08owner_id\x18\x02 \x01(\tR\x07ownerId\x12\x1b\n\tasset_ids\x18\x03 \x03(\tR\x08\x61ssetIds*F\n\rProjectAccess\x12\x1a\n\x16PROJECT_ACCESS_PRIVATE\x10\x00\x12\x19\n\x15PROJECT_ACCESS_PUBLIC\x10\x01*c\n\rProjectStatus\x12\x1b\n\x17PROJECT_STATUS_INACTIVE\x10\x00\x12\x19\n\x15PROJECT_STATUS_ACTIVE\x10\x01\x12\x1a\n\x16PROJECT_STATUS_DELETED\x10\x02*\xb0\x01\n\x0fProjectAssetUse\x12\x1f\n\x1bPROJECT_ASSET_USE_UNDEFINED\x10\x00\x12\x1b\n\x17PROJECT_ASSET_USE_INPUT\x10\x01\x12\x1c\n\x18PROJECT_ASSET_USE_OUTPUT\x10\x02\x12\"\n\x1ePROJECT_ASSET_USE_INTERMEDIATE\x10\x03\x12\x1d\n\x19PROJECT_ASSET_USE_PROJECT\x10\x04*g\n\x0eProjectSortDir\x12 \n\x1cPROJECT_SORT_DIR_UNSPECIFIED\x10\x00\x12\x18\n\x14PROJECT_SORT_DIR_ASC\x10\x01\x12\x19\n\x15PROJECT_SORT_DIR_DESC\x10\x02*F\n\x0bProjectType\x12\x1c\n\x18PROJECT_TYPE_UNSPECIFIED\x10\x00\x12\x19\n\x15PROJECT_TYPE_TRAINING\x10\x01\x32\xe1\x08\n\x0eProjectService\x12s\n\x06\x43reate\x12\x39.stabilityai.platformapis.project.v1.CreateProjectRequest\x1a,.stabilityai.platformapis.project.v1.Project\"\x00\x12s\n\x06Update\x12\x39.stabilityai.platformapis.project.v1.UpdateProjectRequest\x1a,.stabilityai.platformapis.project.v1.Project\"\x00\x12q\n\x04List\x12\x37.stabilityai.platformapis.project.v1.ListProjectRequest\x1a,.stabilityai.platformapis.project.v1.Project\"\x00\x30\x01\x12m\n\x03Get\x12\x36.stabilityai.platformapis.project.v1.GetProjectRequest\x1a,.stabilityai.platformapis.project.v1.Project\"\x00\x12s\n\x06\x44\x65lete\x12\x39.stabilityai.platformapis.project.v1.DeleteProjectRequest\x1a,.stabilityai.platformapis.project.v1.Project\"\x00\x12|\n\tTagAssets\x12\x35.stabilityai.platformapis.project.v1.TagAssetsRequest\x1a\x36.stabilityai.platformapis.project.v1.TagAssetsResponse\"\x00\x12\x82\x01\n\x0bUntagAssets\x12\x37.stabilityai.platformapis.project.v1.UntagAssetsRequest\x1a\x38.stabilityai.platformapis.project.v1.UntagAssetsResponse\"\x00\x12\x82\x01\n\x0bQueryAssets\x12\x37.stabilityai.platformapis.project.v1.QueryAssetsRequest\x1a\x38.stabilityai.platformapis.project.v1.QueryAssetsResponse\"\x00\x12\x85\x01\n\x0c\x44\x65leteAssets\x12\x38.stabilityai.platformapis.project.v1.DeleteAssetsRequest\x1a\x39.stabilityai.platformapis.project.v1.DeleteAssetsResponse\"\x00\x42\xc7\x02\n\'com.stabilityai.platformapis.project.v1B\x0cProjectProtoP\x01Z_github.com/stability-ai/api-interfaces/gen/proto/go/stability_api/platform/project/v1;projectv1\xa2\x02\x03SPP\xaa\x02#Stabilityai.Platformapis.Project.V1\xca\x02#Stabilityai\\Platformapis\\Project\\V1\xe2\x02/Stabilityai\\Platformapis\\Project\\V1\\GPBMetadata\xea\x02&Stabilityai::Platformapis::Project::V1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'stability_api.platform.project.v1.project_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\'com.stabilityai.platformapis.project.v1B\014ProjectProtoP\001Z_github.com/stability-ai/api-interfaces/gen/proto/go/stability_api/platform/project/v1;projectv1\242\002\003SPP\252\002#Stabilityai.Platformapis.Project.V1\312\002#Stabilityai\\Platformapis\\Project\\V1\342\002/Stabilityai\\Platformapis\\Project\\V1\\GPBMetadata\352\002&Stabilityai::Platformapis::Project::V1'
  _PROJECTASSET_TAGSENTRY._options = None
  _PROJECTASSET_TAGSENTRY._serialized_options = b'8\001'
  _QUERYASSETSREQUEST_TAGSENTRY._options = None
  _QUERYASSETSREQUEST_TAGSENTRY._serialized_options = b'8\001'
  _TAGASSETSREQUEST_TAGSENTRY._options = None
  _TAGASSETSREQUEST_TAGSENTRY._serialized_options = b'8\001'
  _globals['_PROJECTACCESS']._serialized_start=3690
  _globals['_PROJECTACCESS']._serialized_end=3760
  _globals['_PROJECTSTATUS']._serialized_start=3762
  _globals['_PROJECTSTATUS']._serialized_end=3861
  _globals['_PROJECTASSETUSE']._serialized_start=3864
  _globals['_PROJECTASSETUSE']._serialized_end=4040
  _globals['_PROJECTSORTDIR']._serialized_start=4042
  _globals['_PROJECTSORTDIR']._serialized_end=4145
  _globals['_PROJECTTYPE']._serialized_start=4147
  _globals['_PROJECTTYPE']._serialized_end=4217
  _globals['_PROJECTASSET']._serialized_start=144
  _globals['_PROJECTASSET']._serialized_end=579
  _globals['_PROJECTASSET_TAGSENTRY']._serialized_start=524
  _globals['_PROJECTASSET_TAGSENTRY']._serialized_end=579
  _globals['_PROJECT']._serialized_start=582
  _globals['_PROJECT']._serialized_end=1106
  _globals['_CREATEPROJECTREQUEST']._serialized_start=1109
  _globals['_CREATEPROJECTREQUEST']._serialized_end=1505
  _globals['_UPDATEPROJECTREQUEST']._serialized_start=1508
  _globals['_UPDATEPROJECTREQUEST']._serialized_end=1981
  _globals['_LISTPROJECTREQUEST']._serialized_start=1983
  _globals['_LISTPROJECTREQUEST']._serialized_end=2048
  _globals['_GETPROJECTREQUEST']._serialized_start=2050
  _globals['_GETPROJECTREQUEST']._serialized_end=2130
  _globals['_DELETEPROJECTREQUEST']._serialized_start=2132
  _globals['_DELETEPROJECTREQUEST']._serialized_end=2215
  _globals['_QUERYASSETSREQUEST']._serialized_start=2218
  _globals['_QUERYASSETSREQUEST']._serialized_end=2754
  _globals['_QUERYASSETSREQUEST_TAGSENTRY']._serialized_start=524
  _globals['_QUERYASSETSREQUEST_TAGSENTRY']._serialized_end=579
  _globals['_QUERYASSETSRESPONSE']._serialized_start=2757
  _globals['_QUERYASSETSRESPONSE']._serialized_end=2898
  _globals['_TAGASSETSREQUEST']._serialized_start=2901
  _globals['_TAGASSETSREQUEST']._serialized_end=3151
  _globals['_TAGASSETSREQUEST_TAGSENTRY']._serialized_start=524
  _globals['_TAGASSETSREQUEST_TAGSENTRY']._serialized_end=579
  _globals['_TAGASSETSRESPONSE']._serialized_start=3153
  _globals['_TAGASSETSRESPONSE']._serialized_end=3244
  _globals['_UNTAGASSETSREQUEST']._serialized_start=3247
  _globals['_UNTAGASSETSREQUEST']._serialized_end=3384
  _globals['_UNTAGASSETSRESPONSE']._serialized_start=3386
  _globals['_UNTAGASSETSRESPONSE']._serialized_end=3479
  _globals['_DELETEASSETSREQUEST']._serialized_start=3481
  _globals['_DELETEASSETSREQUEST']._serialized_end=3592
  _globals['_DELETEASSETSRESPONSE']._serialized_start=3594
  _globals['_DELETEASSETSRESPONSE']._serialized_end=3688
  _globals['_PROJECTSERVICE']._serialized_start=4220
  _globals['_PROJECTSERVICE']._serialized_end=5341
# @@protoc_insertion_point(module_scope)