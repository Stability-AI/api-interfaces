// Generated by the protocol buffer compiler. DO NOT EDIT!
// source: stability_api/platform/dashboard/v1/dashboard.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.stabilityai.api.dashboard.v1;

@kotlin.jvm.JvmName("-initializeorganizationGrant")
public inline fun organizationGrant(block: com.stabilityai.api.dashboard.v1.OrganizationGrantKt.Dsl.() -> kotlin.Unit): com.stabilityai.api.dashboard.v1.OrganizationGrant =
  com.stabilityai.api.dashboard.v1.OrganizationGrantKt.Dsl._create(com.stabilityai.api.dashboard.v1.OrganizationGrant.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `stabilityai.api.dashboard.v1.OrganizationGrant`
 */
public object OrganizationGrantKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.stabilityai.api.dashboard.v1.OrganizationGrant.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.stabilityai.api.dashboard.v1.OrganizationGrant.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.stabilityai.api.dashboard.v1.OrganizationGrant = _builder.build()

    /**
     * `double amount_granted = 1 [json_name = "amountGranted"];`
     */
    public var amountGranted: kotlin.Double
      @JvmName("getAmountGranted")
      get() = _builder.getAmountGranted()
      @JvmName("setAmountGranted")
      set(value) {
        _builder.setAmountGranted(value)
      }
    /**
     * `double amount_granted = 1 [json_name = "amountGranted"];`
     */
    public fun clearAmountGranted() {
      _builder.clearAmountGranted()
    }

    /**
     * `double amount_used = 2 [json_name = "amountUsed"];`
     */
    public var amountUsed: kotlin.Double
      @JvmName("getAmountUsed")
      get() = _builder.getAmountUsed()
      @JvmName("setAmountUsed")
      set(value) {
        _builder.setAmountUsed(value)
      }
    /**
     * `double amount_used = 2 [json_name = "amountUsed"];`
     */
    public fun clearAmountUsed() {
      _builder.clearAmountUsed()
    }

    /**
     * `uint64 expires_at = 3 [json_name = "expiresAt"];`
     */
    public var expiresAt: kotlin.Long
      @JvmName("getExpiresAt")
      get() = _builder.getExpiresAt()
      @JvmName("setExpiresAt")
      set(value) {
        _builder.setExpiresAt(value)
      }
    /**
     * `uint64 expires_at = 3 [json_name = "expiresAt"];`
     */
    public fun clearExpiresAt() {
      _builder.clearExpiresAt()
    }

    /**
     * `uint64 granted_at = 4 [json_name = "grantedAt"];`
     */
    public var grantedAt: kotlin.Long
      @JvmName("getGrantedAt")
      get() = _builder.getGrantedAt()
      @JvmName("setGrantedAt")
      set(value) {
        _builder.setGrantedAt(value)
      }
    /**
     * `uint64 granted_at = 4 [json_name = "grantedAt"];`
     */
    public fun clearGrantedAt() {
      _builder.clearGrantedAt()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.stabilityai.api.dashboard.v1.OrganizationGrant.copy(block: com.stabilityai.api.dashboard.v1.OrganizationGrantKt.Dsl.() -> kotlin.Unit): com.stabilityai.api.dashboard.v1.OrganizationGrant =
  com.stabilityai.api.dashboard.v1.OrganizationGrantKt.Dsl._create(this.toBuilder()).apply { block() }._build()
