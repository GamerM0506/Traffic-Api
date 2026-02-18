import {
    TestHistory as PrismaHistory,
    TestDetail as PrismaDetail,
    TestStatus as PrismaStatus
} from '@prisma/client';
import { TestHistory, TestDetail } from 'src/domain/entities';
import { TestScore } from 'src/domain/value-objects';
import { LicenseType, TestStatus } from 'src/domain/enums';

export class TestHistoryMapper {
    static toDomain(raw: PrismaHistory & { details?: PrismaDetail[] }): TestHistory {
        const details = raw.details?.map(d => new TestDetail(
            d.id,
            d.questionId,
            d.selectedAnswerId,
            d.isCorrect
        )) || [];

        return new TestHistory(
            raw.id,
            raw.userId,
            raw.licenseType as unknown as LicenseType,
            new TestScore(raw.score, raw.totalQuestions),
            raw.isParalysisFailed,
            raw.durationSeconds,
            details,
            raw.examSetId,
            raw.createdAt
        );
    }

    static toPersistence(history: TestHistory) {
        return {
            userId: history.userId,
            examSetId: history.examSetId,
            licenseType: history.licenseType as any,
            score: history.score.score,
            totalQuestions: history.score.totalQuestions,
            status: history.getResultStatus() as any,
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