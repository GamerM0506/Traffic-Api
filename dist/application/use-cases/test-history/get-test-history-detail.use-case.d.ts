import { ITestHistoryRepository } from 'src/domain/repositories';
export declare class GetTestHistoryDetailUseCase {
    private readonly historyRepository;
    constructor(historyRepository: ITestHistoryRepository);
    execute(userId: number, historyId: number): Promise<{
        id: number;
        licenseType: import("../../../domain/enums").LicenseType;
        score: number;
        totalQuestions: number;
        status: import("../../../domain/enums").TestStatus;
        isParalysisFailed: boolean;
        durationSeconds: number;
        createdAt: Date;
        details: {
            id: number;
            questionId: number;
            selectedAnswerId: number;
            isCorrect: boolean;
        }[];
    }>;
}
