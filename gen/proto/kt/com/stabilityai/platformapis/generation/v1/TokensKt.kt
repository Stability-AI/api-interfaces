// Generated by the protocol buffer compiler. DO NOT EDIT!
// source: stability_api/platform/generation/v1/generation.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package com.stabilityai.platformapis.generation.v1;

@kotlin.jvm.JvmName("-initializetokens")
public inline fun tokens(block: com.stabilityai.platformapis.generation.v1.TokensKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.generation.v1.Tokens =
  com.stabilityai.platformapis.generation.v1.TokensKt.Dsl._create(com.stabilityai.platformapis.generation.v1.Tokens.newBuilder()).apply { block() }._build()
/**
 * ```
 * Sequence of tokens, paired with the id of the tokenizer used to generate them.
 * ```
 *
 * Protobuf type `stabilityai.platformapis.generation.v1.Tokens`
 */
public object TokensKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: com.stabilityai.platformapis.generation.v1.Tokens.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: com.stabilityai.platformapis.generation.v1.Tokens.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): com.stabilityai.platformapis.generation.v1.Tokens = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class TokensProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .stabilityai.platformapis.generation.v1.Token tokens = 1 [json_name = "tokens"];`
     */
     public val tokens: com.google.protobuf.kotlin.DslList<com.stabilityai.platformapis.generation.v1.Token, TokensProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getTokensList()
      )
    /**
     * `repeated .stabilityai.platformapis.generation.v1.Token tokens = 1 [json_name = "tokens"];`
     * @param value The tokens to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addTokens")
    public fun com.google.protobuf.kotlin.DslList<com.stabilityai.platformapis.generation.v1.Token, TokensProxy>.add(value: com.stabilityai.platformapis.generation.v1.Token) {
      _builder.addTokens(value)
    }
    /**
     * `repeated .stabilityai.platformapis.generation.v1.Token tokens = 1 [json_name = "tokens"];`
     * @param value The tokens to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignTokens")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<com.stabilityai.platformapis.generation.v1.Token, TokensProxy>.plusAssign(value: com.stabilityai.platformapis.generation.v1.Token) {
      add(value)
    }
    /**
     * `repeated .stabilityai.platformapis.generation.v1.Token tokens = 1 [json_name = "tokens"];`
     * @param values The tokens to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllTokens")
    public fun com.google.protobuf.kotlin.DslList<com.stabilityai.platformapis.generation.v1.Token, TokensProxy>.addAll(values: kotlin.collections.Iterable<com.stabilityai.platformapis.generation.v1.Token>) {
      _builder.addAllTokens(values)
    }
    /**
     * `repeated .stabilityai.platformapis.generation.v1.Token tokens = 1 [json_name = "tokens"];`
     * @param values The tokens to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllTokens")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<com.stabilityai.platformapis.generation.v1.Token, TokensProxy>.plusAssign(values: kotlin.collections.Iterable<com.stabilityai.platformapis.generation.v1.Token>) {
      addAll(values)
    }
    /**
     * `repeated .stabilityai.platformapis.generation.v1.Token tokens = 1 [json_name = "tokens"];`
     * @param index The index to set the value at.
     * @param value The tokens to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setTokens")
    public operator fun com.google.protobuf.kotlin.DslList<com.stabilityai.platformapis.generation.v1.Token, TokensProxy>.set(index: kotlin.Int, value: com.stabilityai.platformapis.generation.v1.Token) {
      _builder.setTokens(index, value)
    }
    /**
     * `repeated .stabilityai.platformapis.generation.v1.Token tokens = 1 [json_name = "tokens"];`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearTokens")
    public fun com.google.protobuf.kotlin.DslList<com.stabilityai.platformapis.generation.v1.Token, TokensProxy>.clear() {
      _builder.clearTokens()
    }


    /**
     * `optional string tokenizer_id = 2 [json_name = "tokenizerId"];`
     */
    public var tokenizerId: kotlin.String
      @JvmName("getTokenizerId")
      get() = _builder.getTokenizerId()
      @JvmName("setTokenizerId")
      set(value) {
        _builder.setTokenizerId(value)
      }
    /**
     * `optional string tokenizer_id = 2 [json_name = "tokenizerId"];`
     */
    public fun clearTokenizerId() {
      _builder.clearTokenizerId()
    }
    /**
     * `optional string tokenizer_id = 2 [json_name = "tokenizerId"];`
     * @return Whether the tokenizerId field is set.
     */
    public fun hasTokenizerId(): kotlin.Boolean {
      return _builder.hasTokenizerId()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun com.stabilityai.platformapis.generation.v1.Tokens.copy(block: com.stabilityai.platformapis.generation.v1.TokensKt.Dsl.() -> kotlin.Unit): com.stabilityai.platformapis.generation.v1.Tokens =
  com.stabilityai.platformapis.generation.v1.TokensKt.Dsl._create(this.toBuilder()).apply { block() }._build()
