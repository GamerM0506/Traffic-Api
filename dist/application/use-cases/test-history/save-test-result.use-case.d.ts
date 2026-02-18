import { ITestHistoryRepository } from 'src/domain/repositories';
import { SaveTestResultRequestDto } from '../../dtos/test-history/save-test-result.dto';
export declare class SaveTestResultUseCase {
    private readonly historyRepository;
    constructor(historyRepository: ITestHistoryRepository);
    execute(userId: number, dto: SaveTestResultRequestDto): Promise<{
        id: number;
        userId: number;
        licenseType: import("../../../domain/enums").LicenseType;
        totalCorrect: number;
        totalQuestions: number;
        isParalysisFailed: boolean;
        status: import("../../../domain/enums").TestStatus;
        message: string;
        createdAt: Date;
    }>;
}
