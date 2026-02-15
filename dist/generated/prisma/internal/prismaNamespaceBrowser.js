"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.GeneralStudyTipScalarFieldEnum = exports.UserBookmarkScalarFieldEnum = exports.TestDetailScalarFieldEnum = exports.TestHistoryScalarFieldEnum = exports.ExamSetQuestionScalarFieldEnum = exports.ExamSetScalarFieldEnum = exports.TrafficSignScalarFieldEnum = exports.AnswerScalarFieldEnum = exports.QuestionScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Question: 'Question',
    Answer: 'Answer',
    TrafficSign: 'TrafficSign',
    ExamSet: 'ExamSet',
    ExamSetQuestion: 'ExamSetQuestion',
    TestHistory: 'TestHistory',
    TestDetail: 'TestDetail',
    UserBookmark: 'UserBookmark',
    GeneralStudyTip: 'GeneralStudyTip'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.QuestionScalarFieldEnum = {
    id: 'id',
    content: 'content',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    questionType: 'questionType',
    group: 'group',
    isParalysis: 'isParalysis',
    explanation: 'explanation',
    tip: 'tip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    trafficSignId: 'trafficSignId'
};
exports.AnswerScalarFieldEnum = {
    id: 'id',
    questionId: 'questionId',
    content: 'content',
    isCorrect: 'isCorrect'
};
exports.TrafficSignScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    group: 'group'
};
exports.ExamSetScalarFieldEnum = {
    id: 'id',
    name: 'name',
    licenseType: 'licenseType',
    description: 'description'
};
exports.ExamSetQuestionScalarFieldEnum = {
    examSetId: 'examSetId',
    questionId: 'questionId'
};
exports.TestHistoryScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    examSetId: 'examSetId',
    licenseType: 'licenseType',
    score: 'score',
    totalQuestions: 'totalQuestions',
    status: 'status',
    isParalysisFailed: 'isParalysisFailed',
    durationSeconds: 'durationSeconds',
    createdAt: 'createdAt'
};
exports.TestDetailScalarFieldEnum = {
    id: 'id',
    testHistoryId: 'testHistoryId',
    questionId: 'questionId',
    selectedAnswerId: 'selectedAnswerId',
    isCorrect: 'isCorrect'
};
exports.UserBookmarkScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    bookmarkType: 'bookmarkType',
    note: 'note',
    createdAt: 'createdAt'
};
exports.GeneralStudyTipScalarFieldEnum = {
    id: 'id',
    title: 'title',
    content: 'content',
    licenseType: 'licenseType'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map