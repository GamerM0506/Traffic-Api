import { LicenseType } from "src/domain/enums";
import { ITestHistoryRepository } from "src/domain/repositories";
export declare class GetLatestResultUseCase {
    private readonly historyRepository;
    constructor(historyRepository: ITestHistoryRepository);
    execute(userId: number, licenseType: LicenseType): Promise<{
        id: number;
        licenseType: LicenseType;
        score: number;
        totalQuestions: number;
        status: import("src/domain/enums").TestStatus;
        createdAt: Date;
    }>;
}
