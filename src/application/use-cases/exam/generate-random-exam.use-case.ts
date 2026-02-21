import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IExamSetRepository } from 'src/domain/repositories';
import { EXAM_RULES } from 'src/domain/constants/exam-rules.constant';
import { LicenseType, QuestionGroup } from 'src/domain/enums';
import { Question } from 'src/domain/entities';
import { ExamDetailResponseDto } from 'src/application/dtos/exam/exam-detail-response.dto';

@Injectable()
export class GenerateRandomExamUseCase {
    constructor(
        @Inject('IExamSetRepository')
        private readonly examSetRepository: IExamSetRepository,
    ) { }

    async execute(licenseType: LicenseType): Promise<ExamDetailResponseDto> {
        const rule = EXAM_RULES[licenseType];
        if (!rule) throw new NotFoundException(`Không tìm thấy quy tắc thi cho hạng ${licenseType}`);

        const allSelectedQuestions: Question[] = [];

        const paralysisQuestions = await this.examSetRepository.findRandom({
            licenseType,
            group: QuestionGroup.CONCEPTS_RULES,
            limit: rule.paralysisCount,
            isParalysis: true
        });
        allSelectedQuestions.push(...paralysisQuestions);

        for (const item of rule.matrix) {
            let currentLimit = item.count;

            if (item.group === QuestionGroup.CONCEPTS_RULES) {
                currentLimit = item.count - paralysisQuestions.length;
            }

            const normalQuestions = await this.examSetRepository.findRandom({
                licenseType,
                group: item.group,
                limit: currentLimit,
                isParalysis: false
            });

            allSelectedQuestions.push(...normalQuestions);
        }

        allSelectedQuestions.sort(() => Math.random() - 0.5);

        return {
            id: null,
            name: `Đề ngẫu nhiên hạng ${licenseType}`,
            totalQuestions: allSelectedQuestions.length,
            questions: allSelectedQuestions.map(q => ({
                id: q.id as number,
                content: q.content,
                explanation: q.explanation,
                isParalysis: q.isParalysis,
                mediaUrl: q.mediaUrl.getValue(),
                mediaType: q.mediaType,
                group: q.group,
                answers: q.answers.map(a => ({
                    id: a.id as number,
                    content: a.content,
                    isCorrect: a.isCorrect
                }))
            }))
        } as any;
    }
}