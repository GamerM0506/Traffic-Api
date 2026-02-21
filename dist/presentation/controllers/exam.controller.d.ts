import { GetExamSetsByLicenseUseCase } from '../../application/use-cases/exam/get-exam-sets-by-license.use-case';
import { GetExamSetDetailUseCase } from '../../application/use-cases/exam/get-exam-set-detail.use-case';
import { LicenseType } from 'src/domain/enums';
import { ExamSetResponseDto } from 'src/application/dtos/exam/exam-set-response.dto';
import { ExamDetailResponseDto } from 'src/application/dtos/exam/exam-detail-response.dto';
import { GenerateRandomExamUseCase } from 'src/application/use-cases/exam/generate-random-exam.use-case';
export declare class ExamController {
    private readonly getExamSetsUseCase;
    private readonly getExamDetailUseCase;
    private readonly generateRandomUseCase;
    constructor(getExamSetsUseCase: GetExamSetsByLicenseUseCase, getExamDetailUseCase: GetExamSetDetailUseCase, generateRandomUseCase: GenerateRandomExamUseCase);
    getSets(type: LicenseType): Promise<ExamSetResponseDto[]>;
    generateRandom(type: LicenseType): Promise<ExamDetailResponseDto>;
    getDetail(id: number): Promise<ExamDetailResponseDto>;
}
