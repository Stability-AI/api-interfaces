// Generated by the protocol buffer compiler. DO NOT EDIT!
// source: stability_api/platform/project/v1/project.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.stabilityai.platformapis.project.v1;

@kotlin.jvm.JvmName("-initializeprojectAsset")
public inline fun projectAsset(block: com.stabilityai.platformapis.project.v1.ProjectAssetKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.project.v1.ProjectAsset =
  com.stabilityai.platformapis.project.v1.ProjectAssetKt.Dsl._create(com.stabilityai.platformapis.project.v1.ProjectAsset.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `stabilityai.platformapis.project.v1.ProjectAsset`
 */
public object ProjectAssetKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.stabilityai.platformapis.project.v1.ProjectAsset.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.stabilityai.platformapis.project.v1.ProjectAsset.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.stabilityai.platformapis.project.v1.ProjectAsset = _builder.build()

    /**
     * ```
     * ID of the asset, UUIDv4
     * ```
     *
     * `string id = 1 [json_name = "id"];`
     */
    public var id: kotlin.String
      @JvmName("getId")
      get() = _builder.getId()
      @JvmName("setId")
      set(value) {
        _builder.setId(value)
      }
    /**
     * ```
     * ID of the asset, UUIDv4
     * ```
     *
     * `string id = 1 [json_name = "id"];`
     */
    public fun clearId() {
      _builder.clearId()
    }

    /**
     * ```
     * The URI to the asset
     * ```
     *
     * `string uri = 2 [json_name = "uri"];`
     */
    public var uri: kotlin.String
      @JvmName("getUri")
      get() = _builder.getUri()
      @JvmName("setUri")
      set(value) {
        _builder.setUri(value)
      }
    /**
     * ```
     * The URI to the asset
     * ```
     *
     * `string uri = 2 [json_name = "uri"];`
     */
    public fun clearUri() {
      _builder.clearUri()
    }

    /**
     * ```
     * The use of the asset with respect to the project
     * ```
     *
     * `.stabilityai.platformapis.project.v1.ProjectAssetUse use = 3 [json_name = "use"];`
     */
    public var use: com.stabilityai.platformapis.project.v1.ProjectAssetUse
      @JvmName("getUse")
      get() = _builder.getUse()
      @JvmName("setUse")
      set(value) {
        _builder.setUse(value)
      }
    public var useValue: kotlin.Int
      @JvmName("getUseValue")
      get() = _builder.getUseValue()
      @JvmName("setUseValue")
      set(value) {
        _builder.setUseValue(value)
      }
    /**
     * ```
     * The use of the asset with respect to the project
     * ```
     *
     * `.stabilityai.platformapis.project.v1.ProjectAssetUse use = 3 [json_name = "use"];`
     */
    public fun clearUse() {
      _builder.clearUse()
    }

    /**
     * ```
     * The name of the asset
     * ```
     *
     * `string name = 4 [json_name = "name"];`
     */
    public var name: kotlin.String
      @JvmName("getName")
      get() = _builder.getName()
      @JvmName("setName")
      set(value) {
        _builder.setName(value)
      }
    /**
     * ```
     * The name of the asset
     * ```
     *
     * `string name = 4 [json_name = "name"];`
     */
    public fun clearName() {
      _builder.clearName()
    }

    /**
     * ```
     * The asset size in bytes
     * ```
     *
     * `uint64 size = 5 [json_name = "size"];`
     */
    public var size: kotlin.Long
      @JvmName("getSize")
      get() = _builder.getSize()
      @JvmName("setSize")
      set(value) {
        _builder.setSize(value)
      }
    /**
     * ```
     * The asset size in bytes
     * ```
     *
     * `uint64 size = 5 [json_name = "size"];`
     */
    public fun clearSize() {
      _builder.clearSize()
    }

    /**
     * ```
     * Time of asset creation (UTC seconds epoch)
     * ```
     *
     * `uint64 created_at = 6 [json_name = "createdAt"];`
     */
    public var createdAt: kotlin.Long
      @JvmName("getCreatedAt")
      get() = _builder.getCreatedAt()
      @JvmName("setCreatedAt")
      set(value) {
        _builder.setCreatedAt(value)
      }
    /**
     * ```
     * Time of asset creation (UTC seconds epoch)
     * ```
     *
     * `uint64 created_at = 6 [json_name = "createdAt"];`
     */
    public fun clearCreatedAt() {
      _builder.clearCreatedAt()
    }

    /**
     * ```
     * Time of last asset update (UTC seconds epoch)
     * ```
     *
     * `uint64 updated_at = 7 [json_name = "updatedAt"];`
     */
    public var updatedAt: kotlin.Long
      @JvmName("getUpdatedAt")
      get() = _builder.getUpdatedAt()
      @JvmName("setUpdatedAt")
      set(value) {
        _builder.setUpdatedAt(value)
      }
    /**
     * ```
     * Time of last asset update (UTC seconds epoch)
     * ```
     *
     * `uint64 updated_at = 7 [json_name = "updatedAt"];`
     */
    public fun clearUpdatedAt() {
      _builder.clearUpdatedAt()
    }

    /**
     * ```
     * The request object that is associated with the artifact
     * ```
     *
     * `.stabilityai.platformapis.generation.v1.Request request = 8 [json_name = "request"];`
     */
    public var request: com.stabilityai.platformapis.generation.v1.Request
      @JvmName("getRequest")
      get() = _builder.getRequest()
      @JvmName("setRequest")
      set(value) {
        _builder.setRequest(value)
      }
    /**
     * ```
     * The request object that is associated with the artifact
     * ```
     *
     * `.stabilityai.platformapis.generation.v1.Request request = 8 [json_name = "request"];`
     */
    public fun clearRequest() {
      _builder.clearRequest()
    }
    /**
     * ```
     * The request object that is associated with the artifact
     * ```
     *
     * `.stabilityai.platformapis.generation.v1.Request request = 8 [json_name = "request"];`
     * @return Whether the request field is set.
     */
    public fun hasRequest(): kotlin.Boolean {
      return _builder.hasRequest()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class TagsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * ```
     * The tags associated with the asset
     * ```
     *
     * `map<string, string> tags = 9 [json_name = "tags"];`
     */
     public val tags: com.google.protobuf.kotlin.DslMap<kotlin.String, kotlin.String, TagsProxy>
      @kotlin.jvm.JvmSynthetic
      @JvmName("getTagsMap")
      get() = com.google.protobuf.kotlin.DslMap(
        _builder.getTagsMap()
      )
    /**
     * ```
     * The tags associated with the asset
     * ```
     *
     * `map<string, string> tags = 9 [json_name = "tags"];`
     */
    @JvmName("putTags")
    public fun com.google.protobuf.kotlin.DslMap<kotlin.String, kotlin.String, TagsProxy>
      .put(key: kotlin.String, value: kotlin.String) {
         _builder.putTags(key, value)
       }
    /**
     * ```
     * The tags associated with the asset
     * ```
     *
     * `map<string, string> tags = 9 [json_name = "tags"];`
     */
    @kotlin.jvm.JvmSynthetic
    @JvmName("setTags")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslMap<kotlin.String, kotlin.String, TagsProxy>
      .set(key: kotlin.String, value: kotlin.String) {
         put(key, value)
       }
    /**
     * ```
     * The tags associated with the asset
     * ```
     *
     * `map<string, string> tags = 9 [json_name = "tags"];`
     */
    @kotlin.jvm.JvmSynthetic
    @JvmName("removeTags")
    public fun com.google.protobuf.kotlin.DslMap<kotlin.String, kotlin.String, TagsProxy>
      .remove(key: kotlin.String) {
         _builder.removeTags(key)
       }
    /**
     * ```
     * The tags associated with the asset
     * ```
     *
     * `map<string, string> tags = 9 [json_name = "tags"];`
     */
    @kotlin.jvm.JvmSynthetic
    @JvmName("putAllTags")
    public fun com.google.protobuf.kotlin.DslMap<kotlin.String, kotlin.String, TagsProxy>
      .putAll(map: kotlin.collections.Map<kotlin.String, kotlin.String>) {
         _builder.putAllTags(map)
       }
    /**
     * ```
     * The tags associated with the asset
     * ```
     *
     * `map<string, string> tags = 9 [json_name = "tags"];`
     */
    @kotlin.jvm.JvmSynthetic
    @JvmName("clearTags")
    public fun com.google.protobuf.kotlin.DslMap<kotlin.String, kotlin.String, TagsProxy>
      .clear() {
         _builder.clearTags()
       }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.stabilityai.platformapis.project.v1.ProjectAsset.copy(block: com.stabilityai.platformapis.project.v1.ProjectAssetKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.project.v1.ProjectAsset =
  com.stabilityai.platformapis.project.v1.ProjectAssetKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val com.stabilityai.platformapis.project.v1.ProjectAssetOrBuilder.requestOrNull: com.stabilityai.platformapis.generation.v1.Request?
  get() = if (hasRequest()) getRequest() else null
