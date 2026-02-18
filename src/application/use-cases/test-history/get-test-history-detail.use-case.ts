import { Inject, Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { ITestHistoryRepository } from 'src/domain/repositories';

@Injectable()
export class GetTestHistoryDetailUseCase {
    constructor(
        @Inject('ITestHistoryRepository')
        private readonly historyRepository: ITestHistoryRepository,
    ) { }

    async execute(userId: number, historyId: number) {
        const history = await this.historyRepository.findById(historyId);

        if (!history) throw new NotFoundException('Không tìm thấy lịch sử bài thi');
        
        if (history.userId !== userId) {
            throw new ForbiddenException('Bạn không có quyền xem bài thi này');
        }

        return {
            id: history.id,
            licenseType: history.licenseType,
            score: history.score.score,
            totalQuestions: history.score.totalQuestions,
            status: history.getResultStatus(),
            isParalysisFailed: history.isParalysisFailed,
            durationSeconds: history.durationSeconds,
            createdAt: history.createdAt,
            details: history.details.map(d => ({
                id: d.id,
                questionId: d.questionId,
                selectedAnswerId: d.selectedAnswerId,
                isCorrect: d.isCorrect
            }))
        };
    }
}