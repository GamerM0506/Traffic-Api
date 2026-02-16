import { GetExamSetsByLicenseUseCase } from '../../application/use-cases/exam/get-exam-sets-by-license.use-case';
import { GetExamSetDetailUseCase } from '../../application/use-cases/exam/get-exam-set-detail.use-case';
import { LicenseType } from 'src/domain/enums';
import { ExamSetResponseDto } from 'src/application/dtos/exam/exam-set-response.dto';
import { ExamDetailResponseDto } from 'src/application/dtos/exam/exam-detail-response.dto';
export declare class ExamController {
    private readonly getExamSetsUseCase;
    private readonly getExamDetailUseCase;
    constructor(getExamSetsUseCase: GetExamSetsByLicenseUseCase, getExamDetailUseCase: GetExamSetDetailUseCase);
    getSets(type: LicenseType): Promise<ExamSetResponseDto[]>;
    getDetail(id: number): Promise<ExamDetailResponseDto>;
}
