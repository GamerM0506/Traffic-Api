import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.ts';
export type * from './prismaNamespace.ts';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
