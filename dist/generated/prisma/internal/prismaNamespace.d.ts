import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.ts";
import { type PrismaClient } from "./class.ts";
export type * from '../models.ts';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Question: "Question";
    readonly Answer: "Answer";
    readonly TrafficSign: "TrafficSign";
    readonly ExamSet: "ExamSet";
    readonly ExamSetQuestion: "ExamSetQuestion";
    readonly TestHistory: "TestHistory";
    readonly TestDetail: "TestDetail";
    readonly UserBookmark: "UserBookmark";
    readonly GeneralStudyTip: "GeneralStudyTip";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "question" | "answer" | "trafficSign" | "examSet" | "examSetQuestion" | "testHistory" | "testDetail" | "userBookmark" | "generalStudyTip";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Question: {
            payload: Prisma.$QuestionPayload<ExtArgs>;
            fields: Prisma.QuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                findFirst: {
                    args: Prisma.QuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                findMany: {
                    args: Prisma.QuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>[];
                };
                create: {
                    args: Prisma.QuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                createMany: {
                    args: Prisma.QuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>[];
                };
                delete: {
                    args: Prisma.QuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                update: {
                    args: Prisma.QuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.QuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>[];
                };
                upsert: {
                    args: Prisma.QuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionPayload>;
                };
                aggregate: {
                    args: Prisma.QuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuestion>;
                };
                groupBy: {
                    args: Prisma.QuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionCountAggregateOutputType> | number;
                };
            };
        };
        Answer: {
            payload: Prisma.$AnswerPayload<ExtArgs>;
            fields: Prisma.AnswerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnswerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>;
                };
                findFirst: {
                    args: Prisma.AnswerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>;
                };
                findMany: {
                    args: Prisma.AnswerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>[];
                };
                create: {
                    args: Prisma.AnswerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>;
                };
                createMany: {
                    args: Prisma.AnswerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>[];
                };
                delete: {
                    args: Prisma.AnswerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>;
                };
                update: {
                    args: Prisma.AnswerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>;
                };
                deleteMany: {
                    args: Prisma.AnswerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnswerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>[];
                };
                upsert: {
                    args: Prisma.AnswerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerPayload>;
                };
                aggregate: {
                    args: Prisma.AnswerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnswer>;
                };
                groupBy: {
                    args: Prisma.AnswerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnswerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnswerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnswerCountAggregateOutputType> | number;
                };
            };
        };
        TrafficSign: {
            payload: Prisma.$TrafficSignPayload<ExtArgs>;
            fields: Prisma.TrafficSignFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TrafficSignFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TrafficSignFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>;
                };
                findFirst: {
                    args: Prisma.TrafficSignFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TrafficSignFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>;
                };
                findMany: {
                    args: Prisma.TrafficSignFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>[];
                };
                create: {
                    args: Prisma.TrafficSignCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>;
                };
                createMany: {
                    args: Prisma.TrafficSignCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TrafficSignCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>[];
                };
                delete: {
                    args: Prisma.TrafficSignDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>;
                };
                update: {
                    args: Prisma.TrafficSignUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>;
                };
                deleteMany: {
                    args: Prisma.TrafficSignDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TrafficSignUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TrafficSignUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>[];
                };
                upsert: {
                    args: Prisma.TrafficSignUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrafficSignPayload>;
                };
                aggregate: {
                    args: Prisma.TrafficSignAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTrafficSign>;
                };
                groupBy: {
                    args: Prisma.TrafficSignGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrafficSignGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TrafficSignCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrafficSignCountAggregateOutputType> | number;
                };
            };
        };
        ExamSet: {
            payload: Prisma.$ExamSetPayload<ExtArgs>;
            fields: Prisma.ExamSetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamSetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamSetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>;
                };
                findFirst: {
                    args: Prisma.ExamSetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamSetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>;
                };
                findMany: {
                    args: Prisma.ExamSetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>[];
                };
                create: {
                    args: Prisma.ExamSetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>;
                };
                createMany: {
                    args: Prisma.ExamSetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamSetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>[];
                };
                delete: {
                    args: Prisma.ExamSetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>;
                };
                update: {
                    args: Prisma.ExamSetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>;
                };
                deleteMany: {
                    args: Prisma.ExamSetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamSetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamSetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>[];
                };
                upsert: {
                    args: Prisma.ExamSetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetPayload>;
                };
                aggregate: {
                    args: Prisma.ExamSetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExamSet>;
                };
                groupBy: {
                    args: Prisma.ExamSetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamSetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamSetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamSetCountAggregateOutputType> | number;
                };
            };
        };
        ExamSetQuestion: {
            payload: Prisma.$ExamSetQuestionPayload<ExtArgs>;
            fields: Prisma.ExamSetQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ExamSetQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ExamSetQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.ExamSetQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ExamSetQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>;
                };
                findMany: {
                    args: Prisma.ExamSetQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>[];
                };
                create: {
                    args: Prisma.ExamSetQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>;
                };
                createMany: {
                    args: Prisma.ExamSetQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ExamSetQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>[];
                };
                delete: {
                    args: Prisma.ExamSetQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>;
                };
                update: {
                    args: Prisma.ExamSetQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.ExamSetQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ExamSetQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ExamSetQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.ExamSetQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ExamSetQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.ExamSetQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExamSetQuestion>;
                };
                groupBy: {
                    args: Prisma.ExamSetQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamSetQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ExamSetQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ExamSetQuestionCountAggregateOutputType> | number;
                };
            };
        };
        TestHistory: {
            payload: Prisma.$TestHistoryPayload<ExtArgs>;
            fields: Prisma.TestHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TestHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TestHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.TestHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TestHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>;
                };
                findMany: {
                    args: Prisma.TestHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>[];
                };
                create: {
                    args: Prisma.TestHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>;
                };
                createMany: {
                    args: Prisma.TestHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TestHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>[];
                };
                delete: {
                    args: Prisma.TestHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>;
                };
                update: {
                    args: Prisma.TestHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.TestHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TestHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TestHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.TestHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.TestHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTestHistory>;
                };
                groupBy: {
                    args: Prisma.TestHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TestHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestHistoryCountAggregateOutputType> | number;
                };
            };
        };
        TestDetail: {
            payload: Prisma.$TestDetailPayload<ExtArgs>;
            fields: Prisma.TestDetailFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TestDetailFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TestDetailFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>;
                };
                findFirst: {
                    args: Prisma.TestDetailFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TestDetailFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>;
                };
                findMany: {
                    args: Prisma.TestDetailFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>[];
                };
                create: {
                    args: Prisma.TestDetailCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>;
                };
                createMany: {
                    args: Prisma.TestDetailCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TestDetailCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>[];
                };
                delete: {
                    args: Prisma.TestDetailDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>;
                };
                update: {
                    args: Prisma.TestDetailUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>;
                };
                deleteMany: {
                    args: Prisma.TestDetailDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TestDetailUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TestDetailUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>[];
                };
                upsert: {
                    args: Prisma.TestDetailUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestDetailPayload>;
                };
                aggregate: {
                    args: Prisma.TestDetailAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTestDetail>;
                };
                groupBy: {
                    args: Prisma.TestDetailGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestDetailGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TestDetailCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestDetailCountAggregateOutputType> | number;
                };
            };
        };
        UserBookmark: {
            payload: Prisma.$UserBookmarkPayload<ExtArgs>;
            fields: Prisma.UserBookmarkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserBookmarkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserBookmarkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>;
                };
                findFirst: {
                    args: Prisma.UserBookmarkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserBookmarkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>;
                };
                findMany: {
                    args: Prisma.UserBookmarkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>[];
                };
                create: {
                    args: Prisma.UserBookmarkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>;
                };
                createMany: {
                    args: Prisma.UserBookmarkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserBookmarkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>[];
                };
                delete: {
                    args: Prisma.UserBookmarkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>;
                };
                update: {
                    args: Prisma.UserBookmarkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>;
                };
                deleteMany: {
                    args: Prisma.UserBookmarkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserBookmarkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserBookmarkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>[];
                };
                upsert: {
                    args: Prisma.UserBookmarkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserBookmarkPayload>;
                };
                aggregate: {
                    args: Prisma.UserBookmarkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserBookmark>;
                };
                groupBy: {
                    args: Prisma.UserBookmarkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserBookmarkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserBookmarkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserBookmarkCountAggregateOutputType> | number;
                };
            };
        };
        GeneralStudyTip: {
            payload: Prisma.$GeneralStudyTipPayload<ExtArgs>;
            fields: Prisma.GeneralStudyTipFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GeneralStudyTipFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GeneralStudyTipFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>;
                };
                findFirst: {
                    args: Prisma.GeneralStudyTipFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GeneralStudyTipFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>;
                };
                findMany: {
                    args: Prisma.GeneralStudyTipFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>[];
                };
                create: {
                    args: Prisma.GeneralStudyTipCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>;
                };
                createMany: {
                    args: Prisma.GeneralStudyTipCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GeneralStudyTipCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>[];
                };
                delete: {
                    args: Prisma.GeneralStudyTipDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>;
                };
                update: {
                    args: Prisma.GeneralStudyTipUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>;
                };
                deleteMany: {
                    args: Prisma.GeneralStudyTipDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GeneralStudyTipUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GeneralStudyTipUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>[];
                };
                upsert: {
                    args: Prisma.GeneralStudyTipUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneralStudyTipPayload>;
                };
                aggregate: {
                    args: Prisma.GeneralStudyTipAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGeneralStudyTip>;
                };
                groupBy: {
                    args: Prisma.GeneralStudyTipGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeneralStudyTipGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GeneralStudyTipCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeneralStudyTipCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const QuestionScalarFieldEnum: {
    readonly id: "id";
    readonly content: "content";
    readonly mediaUrl: "mediaUrl";
    readonly mediaType: "mediaType";
    readonly questionType: "questionType";
    readonly group: "group";
    readonly isParalysis: "isParalysis";
    readonly explanation: "explanation";
    readonly tip: "tip";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly trafficSignId: "trafficSignId";
};
export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum];
export declare const AnswerScalarFieldEnum: {
    readonly id: "id";
    readonly questionId: "questionId";
    readonly content: "content";
    readonly isCorrect: "isCorrect";
};
export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum];
export declare const TrafficSignScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly imageUrl: "imageUrl";
    readonly group: "group";
};
export type TrafficSignScalarFieldEnum = (typeof TrafficSignScalarFieldEnum)[keyof typeof TrafficSignScalarFieldEnum];
export declare const ExamSetScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly licenseType: "licenseType";
    readonly description: "description";
};
export type ExamSetScalarFieldEnum = (typeof ExamSetScalarFieldEnum)[keyof typeof ExamSetScalarFieldEnum];
export declare const ExamSetQuestionScalarFieldEnum: {
    readonly examSetId: "examSetId";
    readonly questionId: "questionId";
};
export type ExamSetQuestionScalarFieldEnum = (typeof ExamSetQuestionScalarFieldEnum)[keyof typeof ExamSetQuestionScalarFieldEnum];
export declare const TestHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly examSetId: "examSetId";
    readonly licenseType: "licenseType";
    readonly score: "score";
    readonly totalQuestions: "totalQuestions";
    readonly status: "status";
    readonly isParalysisFailed: "isParalysisFailed";
    readonly durationSeconds: "durationSeconds";
    readonly createdAt: "createdAt";
};
export type TestHistoryScalarFieldEnum = (typeof TestHistoryScalarFieldEnum)[keyof typeof TestHistoryScalarFieldEnum];
export declare const TestDetailScalarFieldEnum: {
    readonly id: "id";
    readonly testHistoryId: "testHistoryId";
    readonly questionId: "questionId";
    readonly selectedAnswerId: "selectedAnswerId";
    readonly isCorrect: "isCorrect";
};
export type TestDetailScalarFieldEnum = (typeof TestDetailScalarFieldEnum)[keyof typeof TestDetailScalarFieldEnum];
export declare const UserBookmarkScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly questionId: "questionId";
    readonly bookmarkType: "bookmarkType";
    readonly note: "note";
    readonly createdAt: "createdAt";
};
export type UserBookmarkScalarFieldEnum = (typeof UserBookmarkScalarFieldEnum)[keyof typeof UserBookmarkScalarFieldEnum];
export declare const GeneralStudyTipScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly content: "content";
    readonly licenseType: "licenseType";
};
export type GeneralStudyTipScalarFieldEnum = (typeof GeneralStudyTipScalarFieldEnum)[keyof typeof GeneralStudyTipScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>;
export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>;
export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>;
export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>;
export type EnumQuestionGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionGroup'>;
export type ListEnumQuestionGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionGroup[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType'>;
export type ListEnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType[]'>;
export type EnumTestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestStatus'>;
export type ListEnumTestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestStatus[]'>;
export type EnumBookmarkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookmarkType'>;
export type ListEnumBookmarkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookmarkType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    question?: Prisma.QuestionOmit;
    answer?: Prisma.AnswerOmit;
    trafficSign?: Prisma.TrafficSignOmit;
    examSet?: Prisma.ExamSetOmit;
    examSetQuestion?: Prisma.ExamSetQuestionOmit;
    testHistory?: Prisma.TestHistoryOmit;
    testDetail?: Prisma.TestDetailOmit;
    userBookmark?: Prisma.UserBookmarkOmit;
    generalStudyTip?: Prisma.GeneralStudyTipOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
