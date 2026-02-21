import { IExamSetRepository } from 'src/domain/repositories';
import { LicenseType } from 'src/domain/enums';
import { ExamDetailResponseDto } from 'src/application/dtos/exam/exam-detail-response.dto';
export declare class GenerateRandomExamUseCase {
    private readonly examSetRepository;
    constructor(examSetRepository: IExamSetRepository);
    execute(licenseType: LicenseType): Promise<ExamDetailResponseDto>;
}
