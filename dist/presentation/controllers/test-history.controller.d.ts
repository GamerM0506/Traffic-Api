import { SaveTestResultUseCase } from '../../application/use-cases/test-history/save-test-result.use-case';
import { GetLatestResultUseCase } from '../../application/use-cases/test-history/get-latest-result.use-case';
import { GetTestHistoryDetailUseCase } from '../../application/use-cases/test-history/get-test-history-detail.use-case';
import { SaveTestResultRequestDto } from '../../application/dtos/test-history/save-test-result.dto';
import { LicenseType } from 'src/domain/enums';
export declare class TestHistoryController {
    private readonly saveResultUseCase;
    private readonly getLatestUseCase;
    private readonly getDetailUseCase;
    constructor(saveResultUseCase: SaveTestResultUseCase, getLatestUseCase: GetLatestResultUseCase, getDetailUseCase: GetTestHistoryDetailUseCase);
    save(user: any, body: SaveTestResultRequestDto): Promise<{
        id: number;
        userId: number;
        licenseType: LicenseType;
        totalCorrect: number;
        totalQuestions: number;
        isParalysisFailed: boolean;
        status: import("src/domain/enums").TestStatus;
        message: string;
        createdAt: Date;
    }>;
    getLatest(user: any, type: LicenseType): Promise<{
        id: number;
        licenseType: LicenseType;
        score: number;
        totalQuestions: number;
        status: import("src/domain/enums").TestStatus;
        createdAt: Date;
    }>;
    getDetail(user: any, id: number): Promise<{
        id: number;
        licenseType: LicenseType;
        score: number;
        totalQuestions: number;
        status: import("src/domain/enums").TestStatus;
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
