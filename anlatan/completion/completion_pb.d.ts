// package: anlatan
// file: completion.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Token extends jspb.Message { 
    getText(): string;
    setText(value: string): Token;
    getId(): number;
    setId(value: number): Token;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Token.AsObject;
    static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Token;
    static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
    export type AsObject = {
        text: string,
        id: number,
    }
}

export class Tokens extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<Token>;
    setTokensList(value: Array<Token>): Tokens;
    addTokens(value?: Token, index?: number): Token;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tokens.AsObject;
    static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tokens, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tokens;
    static deserializeBinaryFromReader(message: Tokens, reader: jspb.BinaryReader): Tokens;
}

export namespace Tokens {
    export type AsObject = {
        tokensList: Array<Token.AsObject>,
    }
}

export class Prompt extends jspb.Message { 

    hasText(): boolean;
    clearText(): void;
    getText(): string;
    setText(value: string): Prompt;

    hasTokens(): boolean;
    clearTokens(): void;
    getTokens(): Tokens | undefined;
    setTokens(value?: Tokens): Prompt;

    getPromptCase(): Prompt.PromptCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prompt.AsObject;
    static toObject(includeInstance: boolean, msg: Prompt): Prompt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Prompt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prompt;
    static deserializeBinaryFromReader(message: Prompt, reader: jspb.BinaryReader): Prompt;
}

export namespace Prompt {
    export type AsObject = {
        text: string,
        tokens?: Tokens.AsObject,
    }

    export enum PromptCase {
        PROMPT_NOT_SET = 0,
        TEXT = 1,
        TOKENS = 2,
    }

}

export class LogitBias extends jspb.Message { 

    hasTokens(): boolean;
    clearTokens(): void;
    getTokens(): Tokens | undefined;
    setTokens(value?: Tokens): LogitBias;
    getBias(): number;
    setBias(value: number): LogitBias;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogitBias.AsObject;
    static toObject(includeInstance: boolean, msg: LogitBias): LogitBias.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogitBias, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogitBias;
    static deserializeBinaryFromReader(message: LogitBias, reader: jspb.BinaryReader): LogitBias;
}

export namespace LogitBias {
    export type AsObject = {
        tokens?: Tokens.AsObject,
        bias: number,
    }
}

export class LogitBiases extends jspb.Message { 
    clearBiasesList(): void;
    getBiasesList(): Array<LogitBias>;
    setBiasesList(value: Array<LogitBias>): LogitBiases;
    addBiases(value?: LogitBias, index?: number): LogitBias;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogitBiases.AsObject;
    static toObject(includeInstance: boolean, msg: LogitBiases): LogitBiases.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogitBiases, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogitBiases;
    static deserializeBinaryFromReader(message: LogitBiases, reader: jspb.BinaryReader): LogitBiases;
}

export namespace LogitBiases {
    export type AsObject = {
        biasesList: Array<LogitBias.AsObject>,
    }
}

export class FrequencyParams extends jspb.Message { 

    hasPresencePenalty(): boolean;
    clearPresencePenalty(): void;
    getPresencePenalty(): number | undefined;
    setPresencePenalty(value: number): FrequencyParams;

    hasFrequencyPenalty(): boolean;
    clearFrequencyPenalty(): void;
    getFrequencyPenalty(): number | undefined;
    setFrequencyPenalty(value: number): FrequencyParams;

    hasRepetitionPenalty(): boolean;
    clearRepetitionPenalty(): void;
    getRepetitionPenalty(): number | undefined;
    setRepetitionPenalty(value: number): FrequencyParams;

    hasRepetitionPenaltySlope(): boolean;
    clearRepetitionPenaltySlope(): void;
    getRepetitionPenaltySlope(): number | undefined;
    setRepetitionPenaltySlope(value: number): FrequencyParams;

    hasRepetitionPenaltyRange(): boolean;
    clearRepetitionPenaltyRange(): void;
    getRepetitionPenaltyRange(): number | undefined;
    setRepetitionPenaltyRange(value: number): FrequencyParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrequencyParams.AsObject;
    static toObject(includeInstance: boolean, msg: FrequencyParams): FrequencyParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrequencyParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrequencyParams;
    static deserializeBinaryFromReader(message: FrequencyParams, reader: jspb.BinaryReader): FrequencyParams;
}

export namespace FrequencyParams {
    export type AsObject = {
        presencePenalty?: number,
        frequencyPenalty?: number,
        repetitionPenalty?: number,
        repetitionPenaltySlope?: number,
        repetitionPenaltyRange?: number,
    }
}

export class SamplingParams extends jspb.Message { 
    clearOrderList(): void;
    getOrderList(): Array<SamplingMethod>;
    setOrderList(value: Array<SamplingMethod>): SamplingParams;
    addOrder(value: SamplingMethod, index?: number): SamplingMethod;

    hasTemperature(): boolean;
    clearTemperature(): void;
    getTemperature(): number | undefined;
    setTemperature(value: number): SamplingParams;

    hasTopP(): boolean;
    clearTopP(): void;
    getTopP(): number | undefined;
    setTopP(value: number): SamplingParams;

    hasTopK(): boolean;
    clearTopK(): void;
    getTopK(): number | undefined;
    setTopK(value: number): SamplingParams;

    hasTailFreeSampling(): boolean;
    clearTailFreeSampling(): void;
    getTailFreeSampling(): number | undefined;
    setTailFreeSampling(value: number): SamplingParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SamplingParams.AsObject;
    static toObject(includeInstance: boolean, msg: SamplingParams): SamplingParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SamplingParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SamplingParams;
    static deserializeBinaryFromReader(message: SamplingParams, reader: jspb.BinaryReader): SamplingParams;
}

export namespace SamplingParams {
    export type AsObject = {
        orderList: Array<SamplingMethod>,
        temperature?: number,
        topP?: number,
        topK?: number,
        tailFreeSampling?: number,
    }
}

export class ModelParams extends jspb.Message { 

    hasSamplingParams(): boolean;
    clearSamplingParams(): void;
    getSamplingParams(): SamplingParams | undefined;
    setSamplingParams(value?: SamplingParams): ModelParams;

    hasFrequencyParams(): boolean;
    clearFrequencyParams(): void;
    getFrequencyParams(): FrequencyParams | undefined;
    setFrequencyParams(value?: FrequencyParams): ModelParams;

    hasLogitBias(): boolean;
    clearLogitBias(): void;
    getLogitBias(): LogitBiases | undefined;
    setLogitBias(value?: LogitBiases): ModelParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelParams.AsObject;
    static toObject(includeInstance: boolean, msg: ModelParams): ModelParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelParams;
    static deserializeBinaryFromReader(message: ModelParams, reader: jspb.BinaryReader): ModelParams;
}

export namespace ModelParams {
    export type AsObject = {
        samplingParams?: SamplingParams.AsObject,
        frequencyParams?: FrequencyParams.AsObject,
        logitBias?: LogitBiases.AsObject,
    }
}

export class Echo extends jspb.Message { 

    hasIndex(): boolean;
    clearIndex(): void;
    getIndex(): number | undefined;
    setIndex(value: number): Echo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Echo.AsObject;
    static toObject(includeInstance: boolean, msg: Echo): Echo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Echo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Echo;
    static deserializeBinaryFromReader(message: Echo, reader: jspb.BinaryReader): Echo;
}

export namespace Echo {
    export type AsObject = {
        index?: number,
    }
}

export class NAIModule extends jspb.Message { 
    getId(): string;
    setId(value: string): NAIModule;
    getKey(): string;
    setKey(value: string): NAIModule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NAIModule.AsObject;
    static toObject(includeInstance: boolean, msg: NAIModule): NAIModule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NAIModule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NAIModule;
    static deserializeBinaryFromReader(message: NAIModule, reader: jspb.BinaryReader): NAIModule;
}

export namespace NAIModule {
    export type AsObject = {
        id: string,
        key: string,
    }
}

export class Embedding extends jspb.Message { 

    hasNaiModule(): boolean;
    clearNaiModule(): void;
    getNaiModule(): NAIModule | undefined;
    setNaiModule(value?: NAIModule): Embedding;

    getEmbeddingCase(): Embedding.EmbeddingCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Embedding.AsObject;
    static toObject(includeInstance: boolean, msg: Embedding): Embedding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Embedding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Embedding;
    static deserializeBinaryFromReader(message: Embedding, reader: jspb.BinaryReader): Embedding;
}

export namespace Embedding {
    export type AsObject = {
        naiModule?: NAIModule.AsObject,
    }

    export enum EmbeddingCase {
        EMBEDDING_NOT_SET = 0,
        NAI_MODULE = 1,
    }

}

export class EngineParams extends jspb.Message { 

    hasMaxTokens(): boolean;
    clearMaxTokens(): void;
    getMaxTokens(): number | undefined;
    setMaxTokens(value: number): EngineParams;

    hasCompletions(): boolean;
    clearCompletions(): void;
    getCompletions(): number | undefined;
    setCompletions(value: number): EngineParams;

    hasLogprobs(): boolean;
    clearLogprobs(): void;
    getLogprobs(): number | undefined;
    setLogprobs(value: number): EngineParams;

    hasEcho(): boolean;
    clearEcho(): void;
    getEcho(): Echo | undefined;
    setEcho(value?: Echo): EngineParams;

    hasBestOf(): boolean;
    clearBestOf(): void;
    getBestOf(): number | undefined;
    setBestOf(value: number): EngineParams;
    clearStopList(): void;
    getStopList(): Array<Prompt>;
    setStopList(value: Array<Prompt>): EngineParams;
    addStop(value?: Prompt, index?: number): Prompt;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EngineParams.AsObject;
    static toObject(includeInstance: boolean, msg: EngineParams): EngineParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EngineParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EngineParams;
    static deserializeBinaryFromReader(message: EngineParams, reader: jspb.BinaryReader): EngineParams;
}

export namespace EngineParams {
    export type AsObject = {
        maxTokens?: number,
        completions?: number,
        logprobs?: number,
        echo?: Echo.AsObject,
        bestOf?: number,
        stopList: Array<Prompt.AsObject>,
    }
}

export class Request extends jspb.Message { 
    getEngineId(): string;
    setEngineId(value: string): Request;
    clearPromptList(): void;
    getPromptList(): Array<Prompt>;
    setPromptList(value: Array<Prompt>): Request;
    addPrompt(value?: Prompt, index?: number): Prompt;

    hasModelParams(): boolean;
    clearModelParams(): void;
    getModelParams(): ModelParams | undefined;
    setModelParams(value?: ModelParams): Request;

    hasEngineParams(): boolean;
    clearEngineParams(): void;
    getEngineParams(): EngineParams | undefined;
    setEngineParams(value?: EngineParams): Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
    export type AsObject = {
        engineId: string,
        promptList: Array<Prompt.AsObject>,
        modelParams?: ModelParams.AsObject,
        engineParams?: EngineParams.AsObject,
    }
}

export class LogProb extends jspb.Message { 

    hasToken(): boolean;
    clearToken(): void;
    getToken(): Token | undefined;
    setToken(value?: Token): LogProb;

    hasLogprob(): boolean;
    clearLogprob(): void;
    getLogprob(): number | undefined;
    setLogprob(value: number): LogProb;

    hasLogprobBefore(): boolean;
    clearLogprobBefore(): void;
    getLogprobBefore(): number | undefined;
    setLogprobBefore(value: number): LogProb;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogProb.AsObject;
    static toObject(includeInstance: boolean, msg: LogProb): LogProb.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogProb, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogProb;
    static deserializeBinaryFromReader(message: LogProb, reader: jspb.BinaryReader): LogProb;
}

export namespace LogProb {
    export type AsObject = {
        token?: Token.AsObject,
        logprob?: number,
        logprobBefore?: number,
    }
}

export class TokenLogProbs extends jspb.Message { 
    clearLogprobsList(): void;
    getLogprobsList(): Array<LogProb>;
    setLogprobsList(value: Array<LogProb>): TokenLogProbs;
    addLogprobs(value?: LogProb, index?: number): LogProb;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenLogProbs.AsObject;
    static toObject(includeInstance: boolean, msg: TokenLogProbs): TokenLogProbs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenLogProbs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenLogProbs;
    static deserializeBinaryFromReader(message: TokenLogProbs, reader: jspb.BinaryReader): TokenLogProbs;
}

export namespace TokenLogProbs {
    export type AsObject = {
        logprobsList: Array<LogProb.AsObject>,
    }
}

export class LogProbs extends jspb.Message { 

    hasTokens(): boolean;
    clearTokens(): void;
    getTokens(): TokenLogProbs | undefined;
    setTokens(value?: TokenLogProbs): LogProbs;
    clearTextOffsetList(): void;
    getTextOffsetList(): Array<number>;
    setTextOffsetList(value: Array<number>): LogProbs;
    addTextOffset(value: number, index?: number): number;
    clearTopList(): void;
    getTopList(): Array<TokenLogProbs>;
    setTopList(value: Array<TokenLogProbs>): LogProbs;
    addTop(value?: TokenLogProbs, index?: number): TokenLogProbs;
    clearTopBeforeList(): void;
    getTopBeforeList(): Array<TokenLogProbs>;
    setTopBeforeList(value: Array<TokenLogProbs>): LogProbs;
    addTopBefore(value?: TokenLogProbs, index?: number): TokenLogProbs;
    getFinishReason(): FinishReason;
    setFinishReason(value: FinishReason): LogProbs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogProbs.AsObject;
    static toObject(includeInstance: boolean, msg: LogProbs): LogProbs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogProbs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogProbs;
    static deserializeBinaryFromReader(message: LogProbs, reader: jspb.BinaryReader): LogProbs;
}

export namespace LogProbs {
    export type AsObject = {
        tokens?: TokenLogProbs.AsObject,
        textOffsetList: Array<number>,
        topList: Array<TokenLogProbs.AsObject>,
        topBeforeList: Array<TokenLogProbs.AsObject>,
        finishReason: FinishReason,
    }
}

export class Completion extends jspb.Message { 
    getText(): string;
    setText(value: string): Completion;
    getIndex(): number;
    setIndex(value: number): Completion;

    hasLogprobs(): boolean;
    clearLogprobs(): void;
    getLogprobs(): LogProbs | undefined;
    setLogprobs(value?: LogProbs): Completion;
    getFinishReason(): FinishReason;
    setFinishReason(value: FinishReason): Completion;
    getTokenIndex(): number;
    setTokenIndex(value: number): Completion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Completion.AsObject;
    static toObject(includeInstance: boolean, msg: Completion): Completion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Completion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Completion;
    static deserializeBinaryFromReader(message: Completion, reader: jspb.BinaryReader): Completion;
}

export namespace Completion {
    export type AsObject = {
        text: string,
        index: number,
        logprobs?: LogProbs.AsObject,
        finishReason: FinishReason,
        tokenIndex: number,
    }
}

export class Answer extends jspb.Message { 
    getAnswerId(): string;
    setAnswerId(value: string): Answer;
    getCreated(): number;
    setCreated(value: number): Answer;
    getModel(): string;
    setModel(value: string): Answer;
    clearChoicesList(): void;
    getChoicesList(): Array<Completion>;
    setChoicesList(value: Array<Completion>): Answer;
    addChoices(value?: Completion, index?: number): Completion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Answer.AsObject;
    static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Answer;
    static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
    export type AsObject = {
        answerId: string,
        created: number,
        model: string,
        choicesList: Array<Completion.AsObject>,
    }
}

export enum FinishReason {
    NULL = 0,
    LENGTH = 1,
}

export enum SamplingMethod {
    NONE = 0,
    TEMPERATURE = 1,
    TOP_P = 2,
    TOP_K = 3,
    TFS = 4,
}
