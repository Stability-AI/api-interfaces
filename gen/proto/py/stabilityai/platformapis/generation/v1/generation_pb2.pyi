from google.protobuf import struct_pb2 as _struct_pb2
from coreweave.tensors import tensors_pb2 as _tensors_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class FinishReason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    NULL: _ClassVar[FinishReason]
    LENGTH: _ClassVar[FinishReason]
    STOP: _ClassVar[FinishReason]
    ERROR: _ClassVar[FinishReason]
    FILTER: _ClassVar[FinishReason]

class ArtifactType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    ARTIFACT_NONE: _ClassVar[ArtifactType]
    ARTIFACT_IMAGE: _ClassVar[ArtifactType]
    ARTIFACT_VIDEO: _ClassVar[ArtifactType]
    ARTIFACT_TEXT: _ClassVar[ArtifactType]
    ARTIFACT_TOKENS: _ClassVar[ArtifactType]
    ARTIFACT_EMBEDDING: _ClassVar[ArtifactType]
    ARTIFACT_CLASSIFICATIONS: _ClassVar[ArtifactType]
    ARTIFACT_MASK: _ClassVar[ArtifactType]
    ARTIFACT_LATENT: _ClassVar[ArtifactType]
    ARTIFACT_TENSOR: _ClassVar[ArtifactType]
    ARTIFACT_DEPTH: _ClassVar[ArtifactType]

class MaskedAreaInit(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    MASKED_AREA_INIT_ZERO: _ClassVar[MaskedAreaInit]
    MASKED_AREA_INIT_RANDOM: _ClassVar[MaskedAreaInit]
    MASKED_AREA_INIT_ORIGINAL: _ClassVar[MaskedAreaInit]

class WeightMethod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    TEXT_ENCODER: _ClassVar[WeightMethod]
    CROSS_ATTENTION: _ClassVar[WeightMethod]

class DiffusionSampler(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    SAMPLER_DDIM: _ClassVar[DiffusionSampler]
    SAMPLER_DDPM: _ClassVar[DiffusionSampler]
    SAMPLER_K_EULER: _ClassVar[DiffusionSampler]
    SAMPLER_K_EULER_ANCESTRAL: _ClassVar[DiffusionSampler]
    SAMPLER_K_HEUN: _ClassVar[DiffusionSampler]
    SAMPLER_K_DPM_2: _ClassVar[DiffusionSampler]
    SAMPLER_K_DPM_2_ANCESTRAL: _ClassVar[DiffusionSampler]
    SAMPLER_K_LMS: _ClassVar[DiffusionSampler]
    SAMPLER_K_DPMPP_2S_ANCESTRAL: _ClassVar[DiffusionSampler]
    SAMPLER_K_DPMPP_2M: _ClassVar[DiffusionSampler]
    SAMPLER_K_DPMPP_SDE: _ClassVar[DiffusionSampler]

class Upscaler(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    UPSCALER_RGB: _ClassVar[Upscaler]
    UPSCALER_GFPGAN: _ClassVar[Upscaler]
    UPSCALER_ESRGAN: _ClassVar[Upscaler]

class GuidancePreset(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    GUIDANCE_PRESET_NONE: _ClassVar[GuidancePreset]
    GUIDANCE_PRESET_SIMPLE: _ClassVar[GuidancePreset]
    GUIDANCE_PRESET_FAST_BLUE: _ClassVar[GuidancePreset]
    GUIDANCE_PRESET_FAST_GREEN: _ClassVar[GuidancePreset]
    GUIDANCE_PRESET_SLOW: _ClassVar[GuidancePreset]
    GUIDANCE_PRESET_SLOWER: _ClassVar[GuidancePreset]
    GUIDANCE_PRESET_SLOWEST: _ClassVar[GuidancePreset]

class ModelArchitecture(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    MODEL_ARCHITECTURE_NONE: _ClassVar[ModelArchitecture]
    MODEL_ARCHITECTURE_CLIP_VIT: _ClassVar[ModelArchitecture]
    MODEL_ARCHITECTURE_CLIP_RESNET: _ClassVar[ModelArchitecture]
    MODEL_ARCHITECTURE_LDM: _ClassVar[ModelArchitecture]

class Action(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    ACTION_PASSTHROUGH: _ClassVar[Action]
    ACTION_REGENERATE_DUPLICATE: _ClassVar[Action]
    ACTION_REGENERATE: _ClassVar[Action]
    ACTION_OBFUSCATE_DUPLICATE: _ClassVar[Action]
    ACTION_OBFUSCATE: _ClassVar[Action]
    ACTION_DISCARD: _ClassVar[Action]

class ClassifierMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CLSFR_MODE_ZEROSHOT: _ClassVar[ClassifierMode]
    CLSFR_MODE_MULTICLASS: _ClassVar[ClassifierMode]

class InterpolateMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    INTERPOLATE_LINEAR: _ClassVar[InterpolateMode]
    INTERPOLATE_RIFE: _ClassVar[InterpolateMode]
    INTERPOLATE_VAE_LINEAR: _ClassVar[InterpolateMode]
    INTERPOLATE_VAE_SLERP: _ClassVar[InterpolateMode]
    INTERPOLATE_FILM: _ClassVar[InterpolateMode]

class BorderMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    BORDER_REFLECT: _ClassVar[BorderMode]
    BORDER_REPLICATE: _ClassVar[BorderMode]
    BORDER_WRAP: _ClassVar[BorderMode]
    BORDER_ZERO: _ClassVar[BorderMode]
    BORDER_PREFILL: _ClassVar[BorderMode]

class ColorMatchMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    COLOR_MATCH_HSV: _ClassVar[ColorMatchMode]
    COLOR_MATCH_LAB: _ClassVar[ColorMatchMode]
    COLOR_MATCH_RGB: _ClassVar[ColorMatchMode]

class CameraType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CAMERA_PERSPECTIVE: _ClassVar[CameraType]
    CAMERA_ORTHOGRAPHIC: _ClassVar[CameraType]

class RenderMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    RENDER_MESH: _ClassVar[RenderMode]
    RENDER_POINTCLOUD: _ClassVar[RenderMode]

class AssetAction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    ASSET_PUT: _ClassVar[AssetAction]
    ASSET_GET: _ClassVar[AssetAction]
    ASSET_DELETE: _ClassVar[AssetAction]

class AssetUse(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    ASSET_USE_UNDEFINED: _ClassVar[AssetUse]
    ASSET_USE_INPUT: _ClassVar[AssetUse]
    ASSET_USE_OUTPUT: _ClassVar[AssetUse]
    ASSET_USE_INTERMEDIATE: _ClassVar[AssetUse]
    ASSET_USE_PROJECT: _ClassVar[AssetUse]

class StageAction(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    STAGE_ACTION_PASS: _ClassVar[StageAction]
    STAGE_ACTION_DISCARD: _ClassVar[StageAction]
    STAGE_ACTION_RETURN: _ClassVar[StageAction]
NULL: FinishReason
LENGTH: FinishReason
STOP: FinishReason
ERROR: FinishReason
FILTER: FinishReason
ARTIFACT_NONE: ArtifactType
ARTIFACT_IMAGE: ArtifactType
ARTIFACT_VIDEO: ArtifactType
ARTIFACT_TEXT: ArtifactType
ARTIFACT_TOKENS: ArtifactType
ARTIFACT_EMBEDDING: ArtifactType
ARTIFACT_CLASSIFICATIONS: ArtifactType
ARTIFACT_MASK: ArtifactType
ARTIFACT_LATENT: ArtifactType
ARTIFACT_TENSOR: ArtifactType
ARTIFACT_DEPTH: ArtifactType
MASKED_AREA_INIT_ZERO: MaskedAreaInit
MASKED_AREA_INIT_RANDOM: MaskedAreaInit
MASKED_AREA_INIT_ORIGINAL: MaskedAreaInit
TEXT_ENCODER: WeightMethod
CROSS_ATTENTION: WeightMethod
SAMPLER_DDIM: DiffusionSampler
SAMPLER_DDPM: DiffusionSampler
SAMPLER_K_EULER: DiffusionSampler
SAMPLER_K_EULER_ANCESTRAL: DiffusionSampler
SAMPLER_K_HEUN: DiffusionSampler
SAMPLER_K_DPM_2: DiffusionSampler
SAMPLER_K_DPM_2_ANCESTRAL: DiffusionSampler
SAMPLER_K_LMS: DiffusionSampler
SAMPLER_K_DPMPP_2S_ANCESTRAL: DiffusionSampler
SAMPLER_K_DPMPP_2M: DiffusionSampler
SAMPLER_K_DPMPP_SDE: DiffusionSampler
UPSCALER_RGB: Upscaler
UPSCALER_GFPGAN: Upscaler
UPSCALER_ESRGAN: Upscaler
GUIDANCE_PRESET_NONE: GuidancePreset
GUIDANCE_PRESET_SIMPLE: GuidancePreset
GUIDANCE_PRESET_FAST_BLUE: GuidancePreset
GUIDANCE_PRESET_FAST_GREEN: GuidancePreset
GUIDANCE_PRESET_SLOW: GuidancePreset
GUIDANCE_PRESET_SLOWER: GuidancePreset
GUIDANCE_PRESET_SLOWEST: GuidancePreset
MODEL_ARCHITECTURE_NONE: ModelArchitecture
MODEL_ARCHITECTURE_CLIP_VIT: ModelArchitecture
MODEL_ARCHITECTURE_CLIP_RESNET: ModelArchitecture
MODEL_ARCHITECTURE_LDM: ModelArchitecture
ACTION_PASSTHROUGH: Action
ACTION_REGENERATE_DUPLICATE: Action
ACTION_REGENERATE: Action
ACTION_OBFUSCATE_DUPLICATE: Action
ACTION_OBFUSCATE: Action
ACTION_DISCARD: Action
CLSFR_MODE_ZEROSHOT: ClassifierMode
CLSFR_MODE_MULTICLASS: ClassifierMode
INTERPOLATE_LINEAR: InterpolateMode
INTERPOLATE_RIFE: InterpolateMode
INTERPOLATE_VAE_LINEAR: InterpolateMode
INTERPOLATE_VAE_SLERP: InterpolateMode
INTERPOLATE_FILM: InterpolateMode
BORDER_REFLECT: BorderMode
BORDER_REPLICATE: BorderMode
BORDER_WRAP: BorderMode
BORDER_ZERO: BorderMode
BORDER_PREFILL: BorderMode
COLOR_MATCH_HSV: ColorMatchMode
COLOR_MATCH_LAB: ColorMatchMode
COLOR_MATCH_RGB: ColorMatchMode
CAMERA_PERSPECTIVE: CameraType
CAMERA_ORTHOGRAPHIC: CameraType
RENDER_MESH: RenderMode
RENDER_POINTCLOUD: RenderMode
ASSET_PUT: AssetAction
ASSET_GET: AssetAction
ASSET_DELETE: AssetAction
ASSET_USE_UNDEFINED: AssetUse
ASSET_USE_INPUT: AssetUse
ASSET_USE_OUTPUT: AssetUse
ASSET_USE_INTERMEDIATE: AssetUse
ASSET_USE_PROJECT: AssetUse
STAGE_ACTION_PASS: StageAction
STAGE_ACTION_DISCARD: StageAction
STAGE_ACTION_RETURN: StageAction

class Token(_message.Message):
    __slots__ = ["text", "id"]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    text: str
    id: int
    def __init__(self, text: _Optional[str] = ..., id: _Optional[int] = ...) -> None: ...

class Tokens(_message.Message):
    __slots__ = ["tokens", "tokenizer_id"]
    TOKENS_FIELD_NUMBER: _ClassVar[int]
    TOKENIZER_ID_FIELD_NUMBER: _ClassVar[int]
    tokens: _containers.RepeatedCompositeFieldContainer[Token]
    tokenizer_id: str
    def __init__(self, tokens: _Optional[_Iterable[_Union[Token, _Mapping]]] = ..., tokenizer_id: _Optional[str] = ...) -> None: ...

class Artifact(_message.Message):
    __slots__ = ["id", "type", "mime", "magic", "binary", "text", "tokens", "classifier", "tensor", "index", "finish_reason", "seed", "uuid", "size"]
    ID_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    MIME_FIELD_NUMBER: _ClassVar[int]
    MAGIC_FIELD_NUMBER: _ClassVar[int]
    BINARY_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    TOKENS_FIELD_NUMBER: _ClassVar[int]
    CLASSIFIER_FIELD_NUMBER: _ClassVar[int]
    TENSOR_FIELD_NUMBER: _ClassVar[int]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    FINISH_REASON_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    UUID_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    id: int
    type: ArtifactType
    mime: str
    magic: str
    binary: bytes
    text: str
    tokens: Tokens
    classifier: ClassifierParameters
    tensor: _tensors_pb2.Tensor
    index: int
    finish_reason: FinishReason
    seed: int
    uuid: str
    size: int
    def __init__(self, id: _Optional[int] = ..., type: _Optional[_Union[ArtifactType, str]] = ..., mime: _Optional[str] = ..., magic: _Optional[str] = ..., binary: _Optional[bytes] = ..., text: _Optional[str] = ..., tokens: _Optional[_Union[Tokens, _Mapping]] = ..., classifier: _Optional[_Union[ClassifierParameters, _Mapping]] = ..., tensor: _Optional[_Union[_tensors_pb2.Tensor, _Mapping]] = ..., index: _Optional[int] = ..., finish_reason: _Optional[_Union[FinishReason, str]] = ..., seed: _Optional[int] = ..., uuid: _Optional[str] = ..., size: _Optional[int] = ...) -> None: ...

class PromptParameters(_message.Message):
    __slots__ = ["init", "weight"]
    INIT_FIELD_NUMBER: _ClassVar[int]
    WEIGHT_FIELD_NUMBER: _ClassVar[int]
    init: bool
    weight: float
    def __init__(self, init: bool = ..., weight: _Optional[float] = ...) -> None: ...

class Prompt(_message.Message):
    __slots__ = ["parameters", "text", "tokens", "artifact"]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    TOKENS_FIELD_NUMBER: _ClassVar[int]
    ARTIFACT_FIELD_NUMBER: _ClassVar[int]
    parameters: PromptParameters
    text: str
    tokens: Tokens
    artifact: Artifact
    def __init__(self, parameters: _Optional[_Union[PromptParameters, _Mapping]] = ..., text: _Optional[str] = ..., tokens: _Optional[_Union[Tokens, _Mapping]] = ..., artifact: _Optional[_Union[Artifact, _Mapping]] = ...) -> None: ...

class SamplerParameters(_message.Message):
    __slots__ = ["eta", "sampling_steps", "latent_channels", "downsampling_factor", "cfg_scale", "init_noise_scale", "step_noise_scale"]
    ETA_FIELD_NUMBER: _ClassVar[int]
    SAMPLING_STEPS_FIELD_NUMBER: _ClassVar[int]
    LATENT_CHANNELS_FIELD_NUMBER: _ClassVar[int]
    DOWNSAMPLING_FACTOR_FIELD_NUMBER: _ClassVar[int]
    CFG_SCALE_FIELD_NUMBER: _ClassVar[int]
    INIT_NOISE_SCALE_FIELD_NUMBER: _ClassVar[int]
    STEP_NOISE_SCALE_FIELD_NUMBER: _ClassVar[int]
    eta: float
    sampling_steps: int
    latent_channels: int
    downsampling_factor: int
    cfg_scale: float
    init_noise_scale: float
    step_noise_scale: float
    def __init__(self, eta: _Optional[float] = ..., sampling_steps: _Optional[int] = ..., latent_channels: _Optional[int] = ..., downsampling_factor: _Optional[int] = ..., cfg_scale: _Optional[float] = ..., init_noise_scale: _Optional[float] = ..., step_noise_scale: _Optional[float] = ...) -> None: ...

class ConditionerParameters(_message.Message):
    __slots__ = ["vector_adjust_prior", "conditioner"]
    VECTOR_ADJUST_PRIOR_FIELD_NUMBER: _ClassVar[int]
    CONDITIONER_FIELD_NUMBER: _ClassVar[int]
    vector_adjust_prior: str
    conditioner: Model
    def __init__(self, vector_adjust_prior: _Optional[str] = ..., conditioner: _Optional[_Union[Model, _Mapping]] = ...) -> None: ...

class ScheduleParameters(_message.Message):
    __slots__ = ["start", "end", "value"]
    START_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    start: float
    end: float
    value: float
    def __init__(self, start: _Optional[float] = ..., end: _Optional[float] = ..., value: _Optional[float] = ...) -> None: ...

class StepParameter(_message.Message):
    __slots__ = ["scaled_step", "sampler", "schedule", "guidance"]
    SCALED_STEP_FIELD_NUMBER: _ClassVar[int]
    SAMPLER_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    GUIDANCE_FIELD_NUMBER: _ClassVar[int]
    scaled_step: float
    sampler: SamplerParameters
    schedule: ScheduleParameters
    guidance: GuidanceParameters
    def __init__(self, scaled_step: _Optional[float] = ..., sampler: _Optional[_Union[SamplerParameters, _Mapping]] = ..., schedule: _Optional[_Union[ScheduleParameters, _Mapping]] = ..., guidance: _Optional[_Union[GuidanceParameters, _Mapping]] = ...) -> None: ...

class Model(_message.Message):
    __slots__ = ["architecture", "publisher", "dataset", "version", "semantic_version", "alias"]
    ARCHITECTURE_FIELD_NUMBER: _ClassVar[int]
    PUBLISHER_FIELD_NUMBER: _ClassVar[int]
    DATASET_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    SEMANTIC_VERSION_FIELD_NUMBER: _ClassVar[int]
    ALIAS_FIELD_NUMBER: _ClassVar[int]
    architecture: ModelArchitecture
    publisher: str
    dataset: str
    version: float
    semantic_version: str
    alias: str
    def __init__(self, architecture: _Optional[_Union[ModelArchitecture, str]] = ..., publisher: _Optional[str] = ..., dataset: _Optional[str] = ..., version: _Optional[float] = ..., semantic_version: _Optional[str] = ..., alias: _Optional[str] = ...) -> None: ...

class CutoutParameters(_message.Message):
    __slots__ = ["cutouts", "count", "gray", "blur", "size_power"]
    CUTOUTS_FIELD_NUMBER: _ClassVar[int]
    COUNT_FIELD_NUMBER: _ClassVar[int]
    GRAY_FIELD_NUMBER: _ClassVar[int]
    BLUR_FIELD_NUMBER: _ClassVar[int]
    SIZE_POWER_FIELD_NUMBER: _ClassVar[int]
    cutouts: _containers.RepeatedCompositeFieldContainer[CutoutParameters]
    count: int
    gray: float
    blur: float
    size_power: float
    def __init__(self, cutouts: _Optional[_Iterable[_Union[CutoutParameters, _Mapping]]] = ..., count: _Optional[int] = ..., gray: _Optional[float] = ..., blur: _Optional[float] = ..., size_power: _Optional[float] = ...) -> None: ...

class GuidanceScheduleParameters(_message.Message):
    __slots__ = ["duration", "value"]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    duration: float
    value: float
    def __init__(self, duration: _Optional[float] = ..., value: _Optional[float] = ...) -> None: ...

class GuidanceInstanceParameters(_message.Message):
    __slots__ = ["models", "guidance_strength", "schedule", "cutouts", "prompt"]
    MODELS_FIELD_NUMBER: _ClassVar[int]
    GUIDANCE_STRENGTH_FIELD_NUMBER: _ClassVar[int]
    SCHEDULE_FIELD_NUMBER: _ClassVar[int]
    CUTOUTS_FIELD_NUMBER: _ClassVar[int]
    PROMPT_FIELD_NUMBER: _ClassVar[int]
    models: _containers.RepeatedCompositeFieldContainer[Model]
    guidance_strength: float
    schedule: _containers.RepeatedCompositeFieldContainer[GuidanceScheduleParameters]
    cutouts: CutoutParameters
    prompt: Prompt
    def __init__(self, models: _Optional[_Iterable[_Union[Model, _Mapping]]] = ..., guidance_strength: _Optional[float] = ..., schedule: _Optional[_Iterable[_Union[GuidanceScheduleParameters, _Mapping]]] = ..., cutouts: _Optional[_Union[CutoutParameters, _Mapping]] = ..., prompt: _Optional[_Union[Prompt, _Mapping]] = ...) -> None: ...

class GuidanceParameters(_message.Message):
    __slots__ = ["guidance_preset", "instances"]
    GUIDANCE_PRESET_FIELD_NUMBER: _ClassVar[int]
    INSTANCES_FIELD_NUMBER: _ClassVar[int]
    guidance_preset: GuidancePreset
    instances: _containers.RepeatedCompositeFieldContainer[GuidanceInstanceParameters]
    def __init__(self, guidance_preset: _Optional[_Union[GuidancePreset, str]] = ..., instances: _Optional[_Iterable[_Union[GuidanceInstanceParameters, _Mapping]]] = ...) -> None: ...

class TransformType(_message.Message):
    __slots__ = ["diffusion", "upscaler"]
    DIFFUSION_FIELD_NUMBER: _ClassVar[int]
    UPSCALER_FIELD_NUMBER: _ClassVar[int]
    diffusion: DiffusionSampler
    upscaler: Upscaler
    def __init__(self, diffusion: _Optional[_Union[DiffusionSampler, str]] = ..., upscaler: _Optional[_Union[Upscaler, str]] = ...) -> None: ...

class ImageParameters(_message.Message):
    __slots__ = ["height", "width", "seed", "samples", "steps", "transform", "parameters", "masked_area_init", "weight_method", "quantize"]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    SEED_FIELD_NUMBER: _ClassVar[int]
    SAMPLES_FIELD_NUMBER: _ClassVar[int]
    STEPS_FIELD_NUMBER: _ClassVar[int]
    TRANSFORM_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    MASKED_AREA_INIT_FIELD_NUMBER: _ClassVar[int]
    WEIGHT_METHOD_FIELD_NUMBER: _ClassVar[int]
    QUANTIZE_FIELD_NUMBER: _ClassVar[int]
    height: int
    width: int
    seed: _containers.RepeatedScalarFieldContainer[int]
    samples: int
    steps: int
    transform: TransformType
    parameters: _containers.RepeatedCompositeFieldContainer[StepParameter]
    masked_area_init: MaskedAreaInit
    weight_method: WeightMethod
    quantize: bool
    def __init__(self, height: _Optional[int] = ..., width: _Optional[int] = ..., seed: _Optional[_Iterable[int]] = ..., samples: _Optional[int] = ..., steps: _Optional[int] = ..., transform: _Optional[_Union[TransformType, _Mapping]] = ..., parameters: _Optional[_Iterable[_Union[StepParameter, _Mapping]]] = ..., masked_area_init: _Optional[_Union[MaskedAreaInit, str]] = ..., weight_method: _Optional[_Union[WeightMethod, str]] = ..., quantize: bool = ...) -> None: ...

class ClassifierConcept(_message.Message):
    __slots__ = ["concept", "threshold"]
    CONCEPT_FIELD_NUMBER: _ClassVar[int]
    THRESHOLD_FIELD_NUMBER: _ClassVar[int]
    concept: str
    threshold: float
    def __init__(self, concept: _Optional[str] = ..., threshold: _Optional[float] = ...) -> None: ...

class ClassifierCategory(_message.Message):
    __slots__ = ["name", "concepts", "adjustment", "action", "classifier_mode"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CONCEPTS_FIELD_NUMBER: _ClassVar[int]
    ADJUSTMENT_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    CLASSIFIER_MODE_FIELD_NUMBER: _ClassVar[int]
    name: str
    concepts: _containers.RepeatedCompositeFieldContainer[ClassifierConcept]
    adjustment: float
    action: Action
    classifier_mode: ClassifierMode
    def __init__(self, name: _Optional[str] = ..., concepts: _Optional[_Iterable[_Union[ClassifierConcept, _Mapping]]] = ..., adjustment: _Optional[float] = ..., action: _Optional[_Union[Action, str]] = ..., classifier_mode: _Optional[_Union[ClassifierMode, str]] = ...) -> None: ...

class ClassifierParameters(_message.Message):
    __slots__ = ["categories", "exceeds", "realized_action"]
    CATEGORIES_FIELD_NUMBER: _ClassVar[int]
    EXCEEDS_FIELD_NUMBER: _ClassVar[int]
    REALIZED_ACTION_FIELD_NUMBER: _ClassVar[int]
    categories: _containers.RepeatedCompositeFieldContainer[ClassifierCategory]
    exceeds: _containers.RepeatedCompositeFieldContainer[ClassifierCategory]
    realized_action: Action
    def __init__(self, categories: _Optional[_Iterable[_Union[ClassifierCategory, _Mapping]]] = ..., exceeds: _Optional[_Iterable[_Union[ClassifierCategory, _Mapping]]] = ..., realized_action: _Optional[_Union[Action, str]] = ...) -> None: ...

class InterpolateParameters(_message.Message):
    __slots__ = ["ratios", "mode"]
    RATIOS_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    ratios: _containers.RepeatedScalarFieldContainer[float]
    mode: InterpolateMode
    def __init__(self, ratios: _Optional[_Iterable[float]] = ..., mode: _Optional[_Union[InterpolateMode, str]] = ...) -> None: ...

class TransformColorAdjust(_message.Message):
    __slots__ = ["brightness", "contrast", "hue", "saturation", "lightness", "match_image", "match_mode", "noise_amount", "noise_seed"]
    BRIGHTNESS_FIELD_NUMBER: _ClassVar[int]
    CONTRAST_FIELD_NUMBER: _ClassVar[int]
    HUE_FIELD_NUMBER: _ClassVar[int]
    SATURATION_FIELD_NUMBER: _ClassVar[int]
    LIGHTNESS_FIELD_NUMBER: _ClassVar[int]
    MATCH_IMAGE_FIELD_NUMBER: _ClassVar[int]
    MATCH_MODE_FIELD_NUMBER: _ClassVar[int]
    NOISE_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    NOISE_SEED_FIELD_NUMBER: _ClassVar[int]
    brightness: float
    contrast: float
    hue: float
    saturation: float
    lightness: float
    match_image: Artifact
    match_mode: ColorMatchMode
    noise_amount: float
    noise_seed: int
    def __init__(self, brightness: _Optional[float] = ..., contrast: _Optional[float] = ..., hue: _Optional[float] = ..., saturation: _Optional[float] = ..., lightness: _Optional[float] = ..., match_image: _Optional[_Union[Artifact, _Mapping]] = ..., match_mode: _Optional[_Union[ColorMatchMode, str]] = ..., noise_amount: _Optional[float] = ..., noise_seed: _Optional[int] = ...) -> None: ...

class TransformDepthCalc(_message.Message):
    __slots__ = ["blend_weight", "blur_radius", "reverse"]
    BLEND_WEIGHT_FIELD_NUMBER: _ClassVar[int]
    BLUR_RADIUS_FIELD_NUMBER: _ClassVar[int]
    REVERSE_FIELD_NUMBER: _ClassVar[int]
    blend_weight: float
    blur_radius: int
    reverse: bool
    def __init__(self, blend_weight: _Optional[float] = ..., blur_radius: _Optional[int] = ..., reverse: bool = ...) -> None: ...

class TransformMatrix(_message.Message):
    __slots__ = ["data"]
    DATA_FIELD_NUMBER: _ClassVar[int]
    data: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, data: _Optional[_Iterable[float]] = ...) -> None: ...

class TransformResample(_message.Message):
    __slots__ = ["border_mode", "transform", "prev_transform", "depth_warp", "export_mask"]
    BORDER_MODE_FIELD_NUMBER: _ClassVar[int]
    TRANSFORM_FIELD_NUMBER: _ClassVar[int]
    PREV_TRANSFORM_FIELD_NUMBER: _ClassVar[int]
    DEPTH_WARP_FIELD_NUMBER: _ClassVar[int]
    EXPORT_MASK_FIELD_NUMBER: _ClassVar[int]
    border_mode: BorderMode
    transform: TransformMatrix
    prev_transform: TransformMatrix
    depth_warp: float
    export_mask: bool
    def __init__(self, border_mode: _Optional[_Union[BorderMode, str]] = ..., transform: _Optional[_Union[TransformMatrix, _Mapping]] = ..., prev_transform: _Optional[_Union[TransformMatrix, _Mapping]] = ..., depth_warp: _Optional[float] = ..., export_mask: bool = ...) -> None: ...

class CameraParameters(_message.Message):
    __slots__ = ["camera_type", "near_plane", "far_plane", "fov"]
    CAMERA_TYPE_FIELD_NUMBER: _ClassVar[int]
    NEAR_PLANE_FIELD_NUMBER: _ClassVar[int]
    FAR_PLANE_FIELD_NUMBER: _ClassVar[int]
    FOV_FIELD_NUMBER: _ClassVar[int]
    camera_type: CameraType
    near_plane: float
    far_plane: float
    fov: float
    def __init__(self, camera_type: _Optional[_Union[CameraType, str]] = ..., near_plane: _Optional[float] = ..., far_plane: _Optional[float] = ..., fov: _Optional[float] = ...) -> None: ...

class TransformCameraPose(_message.Message):
    __slots__ = ["world_to_view_matrix", "camera_parameters", "do_prefill", "render_mode"]
    WORLD_TO_VIEW_MATRIX_FIELD_NUMBER: _ClassVar[int]
    CAMERA_PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    DO_PREFILL_FIELD_NUMBER: _ClassVar[int]
    RENDER_MODE_FIELD_NUMBER: _ClassVar[int]
    world_to_view_matrix: TransformMatrix
    camera_parameters: CameraParameters
    do_prefill: bool
    render_mode: RenderMode
    def __init__(self, world_to_view_matrix: _Optional[_Union[TransformMatrix, _Mapping]] = ..., camera_parameters: _Optional[_Union[CameraParameters, _Mapping]] = ..., do_prefill: bool = ..., render_mode: _Optional[_Union[RenderMode, str]] = ...) -> None: ...

class TransformParameters(_message.Message):
    __slots__ = ["color_adjust", "depth_calc", "resample", "camera_pose"]
    COLOR_ADJUST_FIELD_NUMBER: _ClassVar[int]
    DEPTH_CALC_FIELD_NUMBER: _ClassVar[int]
    RESAMPLE_FIELD_NUMBER: _ClassVar[int]
    CAMERA_POSE_FIELD_NUMBER: _ClassVar[int]
    color_adjust: TransformColorAdjust
    depth_calc: TransformDepthCalc
    resample: TransformResample
    camera_pose: TransformCameraPose
    def __init__(self, color_adjust: _Optional[_Union[TransformColorAdjust, _Mapping]] = ..., depth_calc: _Optional[_Union[TransformDepthCalc, _Mapping]] = ..., resample: _Optional[_Union[TransformResample, _Mapping]] = ..., camera_pose: _Optional[_Union[TransformCameraPose, _Mapping]] = ...) -> None: ...

class AssetParameters(_message.Message):
    __slots__ = ["action", "project_id", "use"]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    PROJECT_ID_FIELD_NUMBER: _ClassVar[int]
    USE_FIELD_NUMBER: _ClassVar[int]
    action: AssetAction
    project_id: str
    use: AssetUse
    def __init__(self, action: _Optional[_Union[AssetAction, str]] = ..., project_id: _Optional[str] = ..., use: _Optional[_Union[AssetUse, str]] = ...) -> None: ...

class AnswerMeta(_message.Message):
    __slots__ = ["gpu_id", "cpu_id", "node_id", "engine_id"]
    GPU_ID_FIELD_NUMBER: _ClassVar[int]
    CPU_ID_FIELD_NUMBER: _ClassVar[int]
    NODE_ID_FIELD_NUMBER: _ClassVar[int]
    ENGINE_ID_FIELD_NUMBER: _ClassVar[int]
    gpu_id: str
    cpu_id: str
    node_id: str
    engine_id: str
    def __init__(self, gpu_id: _Optional[str] = ..., cpu_id: _Optional[str] = ..., node_id: _Optional[str] = ..., engine_id: _Optional[str] = ...) -> None: ...

class Answer(_message.Message):
    __slots__ = ["answer_id", "request_id", "received", "created", "meta", "artifacts"]
    ANSWER_ID_FIELD_NUMBER: _ClassVar[int]
    REQUEST_ID_FIELD_NUMBER: _ClassVar[int]
    RECEIVED_FIELD_NUMBER: _ClassVar[int]
    CREATED_FIELD_NUMBER: _ClassVar[int]
    META_FIELD_NUMBER: _ClassVar[int]
    ARTIFACTS_FIELD_NUMBER: _ClassVar[int]
    answer_id: str
    request_id: str
    received: int
    created: int
    meta: AnswerMeta
    artifacts: _containers.RepeatedCompositeFieldContainer[Artifact]
    def __init__(self, answer_id: _Optional[str] = ..., request_id: _Optional[str] = ..., received: _Optional[int] = ..., created: _Optional[int] = ..., meta: _Optional[_Union[AnswerMeta, _Mapping]] = ..., artifacts: _Optional[_Iterable[_Union[Artifact, _Mapping]]] = ...) -> None: ...

class AnswerBatch(_message.Message):
    __slots__ = ["batch_id", "answers"]
    BATCH_ID_FIELD_NUMBER: _ClassVar[int]
    ANSWERS_FIELD_NUMBER: _ClassVar[int]
    batch_id: str
    answers: _containers.RepeatedCompositeFieldContainer[Answer]
    def __init__(self, batch_id: _Optional[str] = ..., answers: _Optional[_Iterable[_Union[Answer, _Mapping]]] = ...) -> None: ...

class Request(_message.Message):
    __slots__ = ["engine_id", "request_id", "requested_type", "prompt", "image", "classifier", "asset", "interpolate", "transform", "conditioner", "extras"]
    ENGINE_ID_FIELD_NUMBER: _ClassVar[int]
    REQUEST_ID_FIELD_NUMBER: _ClassVar[int]
    REQUESTED_TYPE_FIELD_NUMBER: _ClassVar[int]
    PROMPT_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    CLASSIFIER_FIELD_NUMBER: _ClassVar[int]
    ASSET_FIELD_NUMBER: _ClassVar[int]
    INTERPOLATE_FIELD_NUMBER: _ClassVar[int]
    TRANSFORM_FIELD_NUMBER: _ClassVar[int]
    CONDITIONER_FIELD_NUMBER: _ClassVar[int]
    EXTRAS_FIELD_NUMBER: _ClassVar[int]
    engine_id: str
    request_id: str
    requested_type: ArtifactType
    prompt: _containers.RepeatedCompositeFieldContainer[Prompt]
    image: ImageParameters
    classifier: ClassifierParameters
    asset: AssetParameters
    interpolate: InterpolateParameters
    transform: TransformParameters
    conditioner: ConditionerParameters
    extras: _struct_pb2.Struct
    def __init__(self, engine_id: _Optional[str] = ..., request_id: _Optional[str] = ..., requested_type: _Optional[_Union[ArtifactType, str]] = ..., prompt: _Optional[_Iterable[_Union[Prompt, _Mapping]]] = ..., image: _Optional[_Union[ImageParameters, _Mapping]] = ..., classifier: _Optional[_Union[ClassifierParameters, _Mapping]] = ..., asset: _Optional[_Union[AssetParameters, _Mapping]] = ..., interpolate: _Optional[_Union[InterpolateParameters, _Mapping]] = ..., transform: _Optional[_Union[TransformParameters, _Mapping]] = ..., conditioner: _Optional[_Union[ConditionerParameters, _Mapping]] = ..., extras: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class OnStatus(_message.Message):
    __slots__ = ["reason", "target", "action"]
    REASON_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    ACTION_FIELD_NUMBER: _ClassVar[int]
    reason: _containers.RepeatedScalarFieldContainer[FinishReason]
    target: str
    action: _containers.RepeatedScalarFieldContainer[StageAction]
    def __init__(self, reason: _Optional[_Iterable[_Union[FinishReason, str]]] = ..., target: _Optional[str] = ..., action: _Optional[_Iterable[_Union[StageAction, str]]] = ...) -> None: ...

class Stage(_message.Message):
    __slots__ = ["id", "request", "on_status"]
    ID_FIELD_NUMBER: _ClassVar[int]
    REQUEST_FIELD_NUMBER: _ClassVar[int]
    ON_STATUS_FIELD_NUMBER: _ClassVar[int]
    id: str
    request: Request
    on_status: _containers.RepeatedCompositeFieldContainer[OnStatus]
    def __init__(self, id: _Optional[str] = ..., request: _Optional[_Union[Request, _Mapping]] = ..., on_status: _Optional[_Iterable[_Union[OnStatus, _Mapping]]] = ...) -> None: ...

class ChainRequest(_message.Message):
    __slots__ = ["request_id", "stage"]
    REQUEST_ID_FIELD_NUMBER: _ClassVar[int]
    STAGE_FIELD_NUMBER: _ClassVar[int]
    request_id: str
    stage: _containers.RepeatedCompositeFieldContainer[Stage]
    def __init__(self, request_id: _Optional[str] = ..., stage: _Optional[_Iterable[_Union[Stage, _Mapping]]] = ...) -> None: ...
