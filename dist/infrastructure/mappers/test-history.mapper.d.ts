import { TestHistory as PrismaHistory, TestDetail as PrismaDetail } from '@prisma/client';
import { TestHistory } from 'src/domain/entities';
export declare class TestHistoryMapper {
    static toDomain(raw: PrismaHistory & {
        details?: PrismaDetail[];
    }): TestHistory;
    static toPersistence(history: TestHistory): {
        userId: number;
        examSetId: number;
        licenseType: any;
        score: number;
        totalQuestions: number;
        status: any;
        isParalysisFailed: boolean;
        durationSeconds: number;
        details: {
            create: {
                questionId: number;
                selectedAnswerId: number;
                isCorrect: boolean;
            }[];
        };
    };
}
