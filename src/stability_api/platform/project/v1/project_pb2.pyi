from stability_api.platform.generation.v1 import generation_pb2 as _generation_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProjectAccess(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    PROJECT_ACCESS_PRIVATE: _ClassVar[ProjectAccess]
    PROJECT_ACCESS_PUBLIC: _ClassVar[ProjectAccess]

class ProjectStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    PROJECT_STATUS_INACTIVE: _ClassVar[ProjectStatus]
    PROJECT_STATUS_ACTIVE: _ClassVar[ProjectStatus]
    PROJECT_STATUS_DELETED: _ClassVar[ProjectStatus]

class ProjectAssetUse(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    PROJECT_ASSET_USE_UNDEFINED: _ClassVar[ProjectAssetUse]
    PROJECT_ASSET_USE_INPUT: _ClassVar[ProjectAssetUse]
    PROJECT_ASSET_USE_OUTPUT: _ClassVar[ProjectAssetUse]
    PROJECT_ASSET_USE_INTERMEDIATE: _ClassVar[ProjectAssetUse]
    PROJECT_ASSET_USE_PROJECT: _ClassVar[ProjectAssetUse]

class ProjectSortDir(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    PROJECT_SORT_DIR_UNSPECIFIED: _ClassVar[ProjectSortDir]
    PROJECT_SORT_DIR_ASC: _ClassVar[ProjectSortDir]
    PROJECT_SORT_DIR_DESC: _ClassVar[ProjectSortDir]

class ProjectType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    PROJECT_TYPE_UNSPECIFIED: _ClassVar[ProjectType]
    PROJECT_TYPE_TRAINING: _ClassVar[ProjectType]
PROJECT_ACCESS_PRIVATE: ProjectAccess
PROJECT_ACCESS_PUBLIC: ProjectAccess
PROJECT_STATUS_INACTIVE: ProjectStatus
PROJECT_STATUS_ACTIVE: ProjectStatus
PROJECT_STATUS_DELETED: ProjectStatus
PROJECT_ASSET_USE_UNDEFINED: ProjectAssetUse
PROJECT_ASSET_USE_INPUT: ProjectAssetUse
PROJECT_ASSET_USE_OUTPUT: ProjectAssetUse
PROJECT_ASSET_USE_INTERMEDIATE: ProjectAssetUse
PROJECT_ASSET_USE_PROJECT: ProjectAssetUse
PROJECT_SORT_DIR_UNSPECIFIED: ProjectSortDir
PROJECT_SORT_DIR_ASC: ProjectSortDir
PROJECT_SORT_DIR_DESC: ProjectSortDir
PROJECT_TYPE_UNSPECIFIED: ProjectType
PROJECT_TYPE_TRAINING: ProjectType

class ProjectAsset(_message.Message):
    __slots__ = ["id", "uri", "use", "name", "size", "created_at", "updated_at", "request", "tags"]
    class TagsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    USE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    REQUEST_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    id: str
    uri: str
    use: ProjectAssetUse
    name: str
    size: int
    created_at: int
    updated_at: int
    request: _generation_pb2.Request
    tags: _containers.ScalarMap[str, str]
    def __init__(self, id: _Optional[str] = ..., uri: _Optional[str] = ..., use: _Optional[_Union[ProjectAssetUse, str]] = ..., name: _Optional[str] = ..., size: _Optional[int] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ..., request: _Optional[_Union[_generation_pb2.Request, _Mapping]] = ..., tags: _Optional[_Mapping[str, str]] = ...) -> None: ...

class Project(_message.Message):
    __slots__ = ["id", "title", "owner_id", "access", "status", "size", "file", "created_at", "updated_at", "assets", "type"]
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    FILE_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    ASSETS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    owner_id: str
    access: ProjectAccess
    status: ProjectStatus
    size: int
    file: ProjectAsset
    created_at: int
    updated_at: int
    assets: _containers.RepeatedCompositeFieldContainer[ProjectAsset]
    type: ProjectType
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., owner_id: _Optional[str] = ..., access: _Optional[_Union[ProjectAccess, str]] = ..., status: _Optional[_Union[ProjectStatus, str]] = ..., size: _Optional[int] = ..., file: _Optional[_Union[ProjectAsset, _Mapping]] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ..., assets: _Optional[_Iterable[_Union[ProjectAsset, _Mapping]]] = ..., type: _Optional[_Union[ProjectType, str]] = ...) -> None: ...

class CreateProjectRequest(_message.Message):
    __slots__ = ["title", "owner_id", "access", "status", "file", "type"]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    FILE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    title: str
    owner_id: str
    access: ProjectAccess
    status: ProjectStatus
    file: ProjectAsset
    type: ProjectType
    def __init__(self, title: _Optional[str] = ..., owner_id: _Optional[str] = ..., access: _Optional[_Union[ProjectAccess, str]] = ..., status: _Optional[_Union[ProjectStatus, str]] = ..., file: _Optional[_Union[ProjectAsset, _Mapping]] = ..., type: _Optional[_Union[ProjectType, str]] = ...) -> None: ...

class UpdateProjectRequest(_message.Message):
    __slots__ = ["id", "owner_id", "title", "access", "status", "file", "type"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    ACCESS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    FILE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    title: str
    access: ProjectAccess
    status: ProjectStatus
    file: ProjectAsset
    type: ProjectType
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ..., title: _Optional[str] = ..., access: _Optional[_Union[ProjectAccess, str]] = ..., status: _Optional[_Union[ProjectStatus, str]] = ..., file: _Optional[_Union[ProjectAsset, _Mapping]] = ..., type: _Optional[_Union[ProjectType, str]] = ...) -> None: ...

class ListProjectRequest(_message.Message):
    __slots__ = ["owner_id"]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    owner_id: str
    def __init__(self, owner_id: _Optional[str] = ...) -> None: ...

class GetProjectRequest(_message.Message):
    __slots__ = ["id", "owner_id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ...) -> None: ...

class DeleteProjectRequest(_message.Message):
    __slots__ = ["id", "owner_id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ...) -> None: ...

class QueryAssetsRequest(_message.Message):
    __slots__ = ["id", "owner_id", "since", "until", "limit", "start_key", "use", "sort_dir", "tags"]
    class TagsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    SINCE_FIELD_NUMBER: _ClassVar[int]
    UNTIL_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    START_KEY_FIELD_NUMBER: _ClassVar[int]
    USE_FIELD_NUMBER: _ClassVar[int]
    SORT_DIR_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    since: int
    until: int
    limit: int
    start_key: str
    use: _containers.RepeatedScalarFieldContainer[ProjectAssetUse]
    sort_dir: ProjectSortDir
    tags: _containers.ScalarMap[str, str]
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ..., since: _Optional[int] = ..., until: _Optional[int] = ..., limit: _Optional[int] = ..., start_key: _Optional[str] = ..., use: _Optional[_Iterable[_Union[ProjectAssetUse, str]]] = ..., sort_dir: _Optional[_Union[ProjectSortDir, str]] = ..., tags: _Optional[_Mapping[str, str]] = ...) -> None: ...

class QueryAssetsResponse(_message.Message):
    __slots__ = ["assets", "last_key"]
    ASSETS_FIELD_NUMBER: _ClassVar[int]
    LAST_KEY_FIELD_NUMBER: _ClassVar[int]
    assets: _containers.RepeatedCompositeFieldContainer[ProjectAsset]
    last_key: str
    def __init__(self, assets: _Optional[_Iterable[_Union[ProjectAsset, _Mapping]]] = ..., last_key: _Optional[str] = ...) -> None: ...

class TagAssetsRequest(_message.Message):
    __slots__ = ["id", "owner_id", "asset_ids", "tags"]
    class TagsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    ASSET_IDS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    asset_ids: _containers.RepeatedScalarFieldContainer[str]
    tags: _containers.ScalarMap[str, str]
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ..., asset_ids: _Optional[_Iterable[str]] = ..., tags: _Optional[_Mapping[str, str]] = ...) -> None: ...

class TagAssetsResponse(_message.Message):
    __slots__ = ["id", "owner_id", "asset_ids"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    ASSET_IDS_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    asset_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ..., asset_ids: _Optional[_Iterable[str]] = ...) -> None: ...

class UntagAssetsRequest(_message.Message):
    __slots__ = ["id", "owner_id", "asset_ids", "tag_keys"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    ASSET_IDS_FIELD_NUMBER: _ClassVar[int]
    TAG_KEYS_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    asset_ids: _containers.RepeatedScalarFieldContainer[str]
    tag_keys: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ..., asset_ids: _Optional[_Iterable[str]] = ..., tag_keys: _Optional[_Iterable[str]] = ...) -> None: ...

class UntagAssetsResponse(_message.Message):
    __slots__ = ["id", "owner_id", "asset_ids"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    ASSET_IDS_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    asset_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ..., asset_ids: _Optional[_Iterable[str]] = ...) -> None: ...

class DeleteAssetsRequest(_message.Message):
    __slots__ = ["id", "owner_id", "asset_ids"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    ASSET_IDS_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    asset_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ..., asset_ids: _Optional[_Iterable[str]] = ...) -> None: ...

class DeleteAssetsResponse(_message.Message):
    __slots__ = ["id", "owner_id", "asset_ids"]
    ID_FIELD_NUMBER: _ClassVar[int]
    OWNER_ID_FIELD_NUMBER: _ClassVar[int]
    ASSET_IDS_FIELD_NUMBER: _ClassVar[int]
    id: str
    owner_id: str
    asset_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, id: _Optional[str] = ..., owner_id: _Optional[str] = ..., asset_ids: _Optional[_Iterable[str]] = ...) -> None: ...
