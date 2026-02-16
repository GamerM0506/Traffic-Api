import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IExamSetRepository } from '../../../domain/repositories/exam-set.repository.interface';
import { ExamDetailResponseDto } from '../../dtos/exam/exam-detail-response.dto';

@Injectable()
export class GetExamSetDetailUseCase {
    constructor(
        @Inject('IExamSetRepository')
        private readonly examSetRepository: IExamSetRepository,
    ) { }

    async execute(id: number): Promise<ExamDetailResponseDto> {
        const examSet = await this.examSetRepository.findById(id);

        if (!examSet) {
            throw new NotFoundException(`Không tìm thấy bộ đề thi với ID: ${id}`);
        }

        return {
            id: examSet.id,
            name: examSet.name,
            questions: examSet.questions.map((q) => ({
                id: q.id,
                content: q.content,
                explanation: q.explanation,
                isParalysis: q.isParalysis,
                mediaUrl: q.mediaUrl.getValue(),
                mediaType: q.mediaType,
                group: q.group,
                answers: q.answers.map((ans) => ({
                    id: ans.id,
                    content: ans.content,
                    isCorrect: ans.isCorrect,
                })),
            })),
        };
    }
}