import { IExamSetRepository } from '../../../domain/repositories/exam-set.repository.interface';
import { LicenseType } from '../../../domain/enums/license-type.enum';
import { ExamSetResponseDto } from 'src/application/dtos/exam/exam-set-response.dto';
export declare class GetExamSetsByLicenseUseCase {
    private readonly examSetRepository;
    constructor(examSetRepository: IExamSetRepository);
    execute(licenseType: LicenseType): Promise<ExamSetResponseDto[]>;
}
