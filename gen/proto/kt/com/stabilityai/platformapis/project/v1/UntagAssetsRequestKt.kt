// Generated by the protocol buffer compiler. DO NOT EDIT!
// source: stability_api/platform/project/v1/project.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.stabilityai.platformapis.project.v1;

@kotlin.jvm.JvmName("-initializeuntagAssetsRequest")
public inline fun untagAssetsRequest(block: com.stabilityai.platformapis.project.v1.UntagAssetsRequestKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.project.v1.UntagAssetsRequest =
  com.stabilityai.platformapis.project.v1.UntagAssetsRequestKt.Dsl._create(com.stabilityai.platformapis.project.v1.UntagAssetsRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `stabilityai.platformapis.project.v1.UntagAssetsRequest`
 */
public object UntagAssetsRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.stabilityai.platformapis.project.v1.UntagAssetsRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.stabilityai.platformapis.project.v1.UntagAssetsRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.stabilityai.platformapis.project.v1.UntagAssetsRequest = _builder.build()

    /**
     * ```
     * ID of the project to request, UUIDv4, empty string uses default project
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
     * ID of the project to request, UUIDv4, empty string uses default project
     * ```
     *
     * `string id = 1 [json_name = "id"];`
     */
    public fun clearId() {
      _builder.clearId()
    }

    /**
     * ```
     * The ID of the organization owning the assets, unset for default org for user
     * ```
     *
     * `optional string owner_id = 2 [json_name = "ownerId"];`
     */
    public var ownerId: kotlin.String
      @JvmName("getOwnerId")
      get() = _builder.getOwnerId()
      @JvmName("setOwnerId")
      set(value) {
        _builder.setOwnerId(value)
      }
    /**
     * ```
     * The ID of the organization owning the assets, unset for default org for user
     * ```
     *
     * `optional string owner_id = 2 [json_name = "ownerId"];`
     */
    public fun clearOwnerId() {
      _builder.clearOwnerId()
    }
    /**
     * ```
     * The ID of the organization owning the assets, unset for default org for user
     * ```
     *
     * `optional string owner_id = 2 [json_name = "ownerId"];`
     * @return Whether the ownerId field is set.
     */
    public fun hasOwnerId(): kotlin.Boolean {
      return _builder.hasOwnerId()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class AssetIdsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * ```
     * The IDs of the assets to tag in the project, UUIDv4, limit 1000
     * ```
     *
     * `repeated string asset_ids = 3 [json_name = "assetIds"];`
     * @return A list containing the assetIds.
     */
    public val assetIds: com.google.protobuf.kotlin.DslList<kotlin.String, AssetIdsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getAssetIdsList()
      )
    /**
     * ```
     * The IDs of the assets to tag in the project, UUIDv4, limit 1000
     * ```
     *
     * `repeated string asset_ids = 3 [json_name = "assetIds"];`
     * @param value The assetIds to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAssetIds")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AssetIdsProxy>.add(value: kotlin.String) {
      _builder.addAssetIds(value)
    }
    /**
     * ```
     * The IDs of the assets to tag in the project, UUIDv4, limit 1000
     * ```
     *
     * `repeated string asset_ids = 3 [json_name = "assetIds"];`
     * @param value The assetIds to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAssetIds")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AssetIdsProxy>.plusAssign(value: kotlin.String) {
      add(value)
    }
    /**
     * ```
     * The IDs of the assets to tag in the project, UUIDv4, limit 1000
     * ```
     *
     * `repeated string asset_ids = 3 [json_name = "assetIds"];`
     * @param values The assetIds to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllAssetIds")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AssetIdsProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllAssetIds(values)
    }
    /**
     * ```
     * The IDs of the assets to tag in the project, UUIDv4, limit 1000
     * ```
     *
     * `repeated string asset_ids = 3 [json_name = "assetIds"];`
     * @param values The assetIds to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllAssetIds")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AssetIdsProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      addAll(values)
    }
    /**
     * ```
     * The IDs of the assets to tag in the project, UUIDv4, limit 1000
     * ```
     *
     * `repeated string asset_ids = 3 [json_name = "assetIds"];`
     * @param index The index to set the value at.
     * @param value The assetIds to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setAssetIds")
    public operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AssetIdsProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setAssetIds(index, value)
    }/**
     * ```
     * The IDs of the assets to tag in the project, UUIDv4, limit 1000
     * ```
     *
     * `repeated string asset_ids = 3 [json_name = "assetIds"];`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearAssetIds")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AssetIdsProxy>.clear() {
      _builder.clearAssetIds()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class TagKeysProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * ```
     * The keys of the tags to remove from the assets
     * ```
     *
     * `repeated string tag_keys = 4 [json_name = "tagKeys"];`
     * @return A list containing the tagKeys.
     */
    public val tagKeys: com.google.protobuf.kotlin.DslList<kotlin.String, TagKeysProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getTagKeysList()
      )
    /**
     * ```
     * The keys of the tags to remove from the assets
     * ```
     *
     * `repeated string tag_keys = 4 [json_name = "tagKeys"];`
     * @param value The tagKeys to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addTagKeys")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, TagKeysProxy>.add(value: kotlin.String) {
      _builder.addTagKeys(value)
    }
    /**
     * ```
     * The keys of the tags to remove from the assets
     * ```
     *
     * `repeated string tag_keys = 4 [json_name = "tagKeys"];`
     * @param value The tagKeys to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignTagKeys")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, TagKeysProxy>.plusAssign(value: kotlin.String) {
      add(value)
    }
    /**
     * ```
     * The keys of the tags to remove from the assets
     * ```
     *
     * `repeated string tag_keys = 4 [json_name = "tagKeys"];`
     * @param values The tagKeys to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllTagKeys")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, TagKeysProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllTagKeys(values)
    }
    /**
     * ```
     * The keys of the tags to remove from the assets
     * ```
     *
     * `repeated string tag_keys = 4 [json_name = "tagKeys"];`
     * @param values The tagKeys to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllTagKeys")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, TagKeysProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      addAll(values)
    }
    /**
     * ```
     * The keys of the tags to remove from the assets
     * ```
     *
     * `repeated string tag_keys = 4 [json_name = "tagKeys"];`
     * @param index The index to set the value at.
     * @param value The tagKeys to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setTagKeys")
    public operator fun com.google.protobuf.kotlin.DslList<kotlin.String, TagKeysProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setTagKeys(index, value)
    }/**
     * ```
     * The keys of the tags to remove from the assets
     * ```
     *
     * `repeated string tag_keys = 4 [json_name = "tagKeys"];`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearTagKeys")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, TagKeysProxy>.clear() {
      _builder.clearTagKeys()
    }}
}
@kotlin.jvm.JvmSynthetic
public inline fun com.stabilityai.platformapis.project.v1.UntagAssetsRequest.copy(block: com.stabilityai.platformapis.project.v1.UntagAssetsRequestKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.project.v1.UntagAssetsRequest =
  com.stabilityai.platformapis.project.v1.UntagAssetsRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
