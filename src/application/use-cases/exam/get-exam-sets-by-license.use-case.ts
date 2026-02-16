import { Inject, Injectable } from '@nestjs/common';
import { IExamSetRepository } from '../../../domain/repositories/exam-set.repository.interface';
import { LicenseType } from '../../../domain/enums/license-type.enum';
import { ExamSetResponseDto } from 'src/application/dtos/exam/exam-set-response.dto';


@Injectable()
export class GetExamSetsByLicenseUseCase {
    constructor(
        @Inject('IExamSetRepository')
        private readonly examSetRepository: IExamSetRepository,
    ) { }

    async execute(licenseType: LicenseType): Promise<ExamSetResponseDto[]> {
        const examSets = await this.examSetRepository.findByLicenseType(licenseType);

        return examSets.map((set) => {
            if (set.id === null) {
                throw new Error(`ExamSet ${set.name} is missing an ID`);
            }

            return {
                id: set.id,
                title: set.name,
                description: set.description || `Bộ đề thi sát hạch hạng ${licenseType}`,
                questionCount: set.totalQuestions || 25,
            };
        });
    }
}