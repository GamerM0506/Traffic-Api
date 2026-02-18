"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestHistoryMapper = void 0;
const entities_1 = require("../../domain/entities");
const value_objects_1 = require("../../domain/value-objects");
class TestHistoryMapper {
    static toDomain(raw) {
        const details = raw.details?.map(d => new entities_1.TestDetail(d.id, d.questionId, d.selectedAnswerId, d.isCorrect)) || [];
        return new entities_1.TestHistory(raw.id, raw.userId, raw.licenseType, new value_objects_1.TestScore(raw.score, raw.totalQuestions), raw.isParalysisFailed, raw.durationSeconds, details, raw.examSetId, raw.createdAt);
    }
    static toPersistence(history) {
        return {
            userId: history.userId,
            examSetId: history.examSetId,
            licenseType: history.licenseType,
            score: history.score.score,
            totalQuestions: history.score.totalQuestions,
            status: history.getResultStatus(),
            isParalysisFailed: history.isParalysisFailed,
            durationSeconds: history.durationSeconds,
            details: {
                create: history.details.map(d => ({
                    questionId: d.questionId,
                    selectedAnswerId: d.selectedAnswerId,
                    isCorrect: d.isCorrect,
                }))
            }
        };
    }
}
exports.TestHistoryMapper = TestHistoryMapper;
//# sourceMappingURL=test-history.mapper.js.map