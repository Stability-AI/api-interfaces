from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrganizationRole(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    MEMBER: _ClassVar[OrganizationRole]
    ACCOUNTANT: _ClassVar[OrganizationRole]
    OWNER: _ClassVar[OrganizationRole]
MEMBER: OrganizationRole
ACCOUNTANT: OrganizationRole
OWNER: OrganizationRole

class OrganizationMember(_message.Message):
    __slots__ = ["organization", "user", "role", "is_default"]
    ORGANIZATION_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    IS_DEFAULT_FIELD_NUMBER: _ClassVar[int]
    organization: Organization
    user: User
    role: OrganizationRole
    is_default: bool
    def __init__(self, organization: _Optional[_Union[Organization, _Mapping]] = ..., user: _Optional[_Union[User, _Mapping]] = ..., role: _Optional[_Union[OrganizationRole, str]] = ..., is_default: bool = ...) -> None: ...

class OrganizationGrant(_message.Message):
    __slots__ = ["amount_granted", "amount_used", "expires_at", "granted_at"]
    AMOUNT_GRANTED_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_USED_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    GRANTED_AT_FIELD_NUMBER: _ClassVar[int]
    amount_granted: float
    amount_used: float
    expires_at: int
    granted_at: int
    def __init__(self, amount_granted: _Optional[float] = ..., amount_used: _Optional[float] = ..., expires_at: _Optional[int] = ..., granted_at: _Optional[int] = ...) -> None: ...

class OrganizationPaymentInfo(_message.Message):
    __slots__ = ["balance", "grants"]
    BALANCE_FIELD_NUMBER: _ClassVar[int]
    GRANTS_FIELD_NUMBER: _ClassVar[int]
    balance: float
    grants: _containers.RepeatedCompositeFieldContainer[OrganizationGrant]
    def __init__(self, balance: _Optional[float] = ..., grants: _Optional[_Iterable[_Union[OrganizationGrant, _Mapping]]] = ...) -> None: ...

class OrganizationAutoCharge(_message.Message):
    __slots__ = ["enabled", "id", "created_at"]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    enabled: bool
    id: str
    created_at: int
    def __init__(self, enabled: bool = ..., id: _Optional[str] = ..., created_at: _Optional[int] = ...) -> None: ...

class Organization(_message.Message):
    __slots__ = ["id", "name", "description", "members", "payment_info", "stripe_customer_id", "auto_charge"]
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    MEMBERS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_INFO_FIELD_NUMBER: _ClassVar[int]
    STRIPE_CUSTOMER_ID_FIELD_NUMBER: _ClassVar[int]
    AUTO_CHARGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    description: str
    members: _containers.RepeatedCompositeFieldContainer[OrganizationMember]
    payment_info: OrganizationPaymentInfo
    stripe_customer_id: str
    auto_charge: OrganizationAutoCharge
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., members: _Optional[_Iterable[_Union[OrganizationMember, _Mapping]]] = ..., payment_info: _Optional[_Union[OrganizationPaymentInfo, _Mapping]] = ..., stripe_customer_id: _Optional[str] = ..., auto_charge: _Optional[_Union[OrganizationAutoCharge, _Mapping]] = ...) -> None: ...

class APIKey(_message.Message):
    __slots__ = ["key", "is_secret", "created_at"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    IS_SECRET_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    key: str
    is_secret: bool
    created_at: int
    def __init__(self, key: _Optional[str] = ..., is_secret: bool = ..., created_at: _Optional[int] = ...) -> None: ...

class User(_message.Message):
    __slots__ = ["id", "auth_id", "profile_picture", "email", "organizations", "api_keys", "created_at", "email_verified"]
    ID_FIELD_NUMBER: _ClassVar[int]
    AUTH_ID_FIELD_NUMBER: _ClassVar[int]
    PROFILE_PICTURE_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    ORGANIZATIONS_FIELD_NUMBER: _ClassVar[int]
    API_KEYS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    EMAIL_VERIFIED_FIELD_NUMBER: _ClassVar[int]
    id: str
    auth_id: str
    profile_picture: str
    email: str
    organizations: _containers.RepeatedCompositeFieldContainer[OrganizationMember]
    api_keys: _containers.RepeatedCompositeFieldContainer[APIKey]
    created_at: int
    email_verified: bool
    def __init__(self, id: _Optional[str] = ..., auth_id: _Optional[str] = ..., profile_picture: _Optional[str] = ..., email: _Optional[str] = ..., organizations: _Optional[_Iterable[_Union[OrganizationMember, _Mapping]]] = ..., api_keys: _Optional[_Iterable[_Union[APIKey, _Mapping]]] = ..., created_at: _Optional[int] = ..., email_verified: bool = ...) -> None: ...

class CostData(_message.Message):
    __slots__ = ["amount_tokens", "amount_credits"]
    AMOUNT_TOKENS_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_CREDITS_FIELD_NUMBER: _ClassVar[int]
    amount_tokens: int
    amount_credits: float
    def __init__(self, amount_tokens: _Optional[int] = ..., amount_credits: _Optional[float] = ...) -> None: ...

class UsageMetric(_message.Message):
    __slots__ = ["operation", "engine", "input_cost", "output_cost", "user", "aggregation_timestamp"]
    OPERATION_FIELD_NUMBER: _ClassVar[int]
    ENGINE_FIELD_NUMBER: _ClassVar[int]
    INPUT_COST_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_COST_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    AGGREGATION_TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    operation: str
    engine: str
    input_cost: CostData
    output_cost: CostData
    user: str
    aggregation_timestamp: int
    def __init__(self, operation: _Optional[str] = ..., engine: _Optional[str] = ..., input_cost: _Optional[_Union[CostData, _Mapping]] = ..., output_cost: _Optional[_Union[CostData, _Mapping]] = ..., user: _Optional[str] = ..., aggregation_timestamp: _Optional[int] = ...) -> None: ...

class CostTotal(_message.Message):
    __slots__ = ["amount_tokens", "amount_credits"]
    AMOUNT_TOKENS_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_CREDITS_FIELD_NUMBER: _ClassVar[int]
    amount_tokens: int
    amount_credits: float
    def __init__(self, amount_tokens: _Optional[int] = ..., amount_credits: _Optional[float] = ...) -> None: ...

class TotalMetricsData(_message.Message):
    __slots__ = ["input_total", "output_total"]
    INPUT_TOTAL_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_TOTAL_FIELD_NUMBER: _ClassVar[int]
    input_total: CostTotal
    output_total: CostTotal
    def __init__(self, input_total: _Optional[_Union[CostTotal, _Mapping]] = ..., output_total: _Optional[_Union[CostTotal, _Mapping]] = ...) -> None: ...

class Metrics(_message.Message):
    __slots__ = ["metrics", "total"]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    metrics: _containers.RepeatedCompositeFieldContainer[UsageMetric]
    total: TotalMetricsData
    def __init__(self, metrics: _Optional[_Iterable[_Union[UsageMetric, _Mapping]]] = ..., total: _Optional[_Union[TotalMetricsData, _Mapping]] = ...) -> None: ...

class EmptyRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetOrganizationRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class GetMetricsRequest(_message.Message):
    __slots__ = ["organization_id", "user_id", "range_from", "range_to", "include_per_request_metrics"]
    ORGANIZATION_ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    RANGE_FROM_FIELD_NUMBER: _ClassVar[int]
    RANGE_TO_FIELD_NUMBER: _ClassVar[int]
    INCLUDE_PER_REQUEST_METRICS_FIELD_NUMBER: _ClassVar[int]
    organization_id: str
    user_id: str
    range_from: int
    range_to: int
    include_per_request_metrics: bool
    def __init__(self, organization_id: _Optional[str] = ..., user_id: _Optional[str] = ..., range_from: _Optional[int] = ..., range_to: _Optional[int] = ..., include_per_request_metrics: bool = ...) -> None: ...

class APIKeyRequest(_message.Message):
    __slots__ = ["is_secret"]
    IS_SECRET_FIELD_NUMBER: _ClassVar[int]
    is_secret: bool
    def __init__(self, is_secret: bool = ...) -> None: ...

class APIKeyFindRequest(_message.Message):
    __slots__ = ["id"]
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class UpdateDefaultOrganizationRequest(_message.Message):
    __slots__ = ["organization_id"]
    ORGANIZATION_ID_FIELD_NUMBER: _ClassVar[int]
    organization_id: str
    def __init__(self, organization_id: _Optional[str] = ...) -> None: ...

class ClientSettings(_message.Message):
    __slots__ = ["settings"]
    SETTINGS_FIELD_NUMBER: _ClassVar[int]
    settings: bytes
    def __init__(self, settings: _Optional[bytes] = ...) -> None: ...

class CreateAutoChargeIntentRequest(_message.Message):
    __slots__ = ["organization_id", "monthly_maximum", "minimum_value", "amount_credits"]
    ORGANIZATION_ID_FIELD_NUMBER: _ClassVar[int]
    MONTHLY_MAXIMUM_FIELD_NUMBER: _ClassVar[int]
    MINIMUM_VALUE_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_CREDITS_FIELD_NUMBER: _ClassVar[int]
    organization_id: str
    monthly_maximum: int
    minimum_value: int
    amount_credits: int
    def __init__(self, organization_id: _Optional[str] = ..., monthly_maximum: _Optional[int] = ..., minimum_value: _Optional[int] = ..., amount_credits: _Optional[int] = ...) -> None: ...

class CreateChargeRequest(_message.Message):
    __slots__ = ["amount", "organization_id"]
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    ORGANIZATION_ID_FIELD_NUMBER: _ClassVar[int]
    amount: int
    organization_id: str
    def __init__(self, amount: _Optional[int] = ..., organization_id: _Optional[str] = ...) -> None: ...

class GetChargesRequest(_message.Message):
    __slots__ = ["organization_id", "range_from", "range_to"]
    ORGANIZATION_ID_FIELD_NUMBER: _ClassVar[int]
    RANGE_FROM_FIELD_NUMBER: _ClassVar[int]
    RANGE_TO_FIELD_NUMBER: _ClassVar[int]
    organization_id: str
    range_from: int
    range_to: int
    def __init__(self, organization_id: _Optional[str] = ..., range_from: _Optional[int] = ..., range_to: _Optional[int] = ...) -> None: ...

class Charge(_message.Message):
    __slots__ = ["id", "paid", "receipt_link", "payment_link", "created_at", "amount_credits"]
    ID_FIELD_NUMBER: _ClassVar[int]
    PAID_FIELD_NUMBER: _ClassVar[int]
    RECEIPT_LINK_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_LINK_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_CREDITS_FIELD_NUMBER: _ClassVar[int]
    id: str
    paid: bool
    receipt_link: str
    payment_link: str
    created_at: int
    amount_credits: int
    def __init__(self, id: _Optional[str] = ..., paid: bool = ..., receipt_link: _Optional[str] = ..., payment_link: _Optional[str] = ..., created_at: _Optional[int] = ..., amount_credits: _Optional[int] = ...) -> None: ...

class Charges(_message.Message):
    __slots__ = ["charges"]
    CHARGES_FIELD_NUMBER: _ClassVar[int]
    charges: _containers.RepeatedCompositeFieldContainer[Charge]
    def __init__(self, charges: _Optional[_Iterable[_Union[Charge, _Mapping]]] = ...) -> None: ...

class GetAutoChargeRequest(_message.Message):
    __slots__ = ["organization_id"]
    ORGANIZATION_ID_FIELD_NUMBER: _ClassVar[int]
    organization_id: str
    def __init__(self, organization_id: _Optional[str] = ...) -> None: ...

class AutoChargeIntent(_message.Message):
    __slots__ = ["id", "payment_link", "created_at", "monthly_maximum", "minimum_value", "amount_credits"]
    ID_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_LINK_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    MONTHLY_MAXIMUM_FIELD_NUMBER: _ClassVar[int]
    MINIMUM_VALUE_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_CREDITS_FIELD_NUMBER: _ClassVar[int]
    id: str
    payment_link: str
    created_at: int
    monthly_maximum: int
    minimum_value: int
    amount_credits: int
    def __init__(self, id: _Optional[str] = ..., payment_link: _Optional[str] = ..., created_at: _Optional[int] = ..., monthly_maximum: _Optional[int] = ..., minimum_value: _Optional[int] = ..., amount_credits: _Optional[int] = ...) -> None: ...

class UpdateUserInfoRequest(_message.Message):
    __slots__ = ["email"]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    email: str
    def __init__(self, email: _Optional[str] = ...) -> None: ...

class UserPasswordChangeTicket(_message.Message):
    __slots__ = ["ticket"]
    TICKET_FIELD_NUMBER: _ClassVar[int]
    ticket: str
    def __init__(self, ticket: _Optional[str] = ...) -> None: ...
