import { Injectable, Inject } from "@nestjs/common";
import { LicenseType } from "src/domain/enums";
import { ITestHistoryRepository } from "src/domain/repositories";

@Injectable()
export class GetLatestResultUseCase {
  constructor(
    @Inject('ITestHistoryRepository')
    private readonly historyRepository: ITestHistoryRepository,
  ) {}

  async execute(userId: number, licenseType: LicenseType) {
    const latest = await this.historyRepository.getLatestResult(userId, licenseType);
    
    if (!latest) return null;

    return {
      id: latest.id,
      licenseType: latest.licenseType,
      score: latest.score.score,
      totalQuestions: latest.score.totalQuestions,
      status: latest.getResultStatus(), 
      createdAt: latest.createdAt
    };
  }
}