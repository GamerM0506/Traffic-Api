import { Inject, Injectable } from '@nestjs/common';
import { ITestHistoryRepository } from 'src/domain/repositories';
import { TestScore } from 'src/domain/value-objects';
import { SaveTestResultRequestDto } from '../../dtos/test-history/save-test-result.dto';
import { TestDetail, TestHistory } from 'src/domain/entities';


@Injectable()
export class SaveTestResultUseCase {
    constructor(
        @Inject('ITestHistoryRepository')
        private readonly historyRepository: ITestHistoryRepository,
    ) { }

    async execute(userId: number, dto: SaveTestResultRequestDto) {
        const details = dto.details.map(d => new TestDetail(
            null,
            d.questionId,
            d.selectedAnswerId,
            d.isCorrect
        ));

        const history = new TestHistory(
            null,
            userId,
            dto.licenseType,
            new TestScore(dto.score, dto.totalQuestions),
            dto.isParalysisFailed,
            dto.durationSeconds,
            details,
            dto.examSetId
        );

        const savedHistory = await this.historyRepository.save(history);

        return {
            id: savedHistory.id,
            userId: savedHistory.userId,
            licenseType: savedHistory.licenseType,
            totalCorrect: savedHistory.score.score,
            totalQuestions: savedHistory.score.totalQuestions,
            isParalysisFailed: savedHistory.isParalysisFailed,
            status: savedHistory.getResultStatus(),
            message: savedHistory.getResultStatus() === 'PASS'
                ? 'Chúc mừng! Bạn đã đạt.'
                : 'Rất tiếc, bạn không đạt.',
            createdAt: savedHistory.createdAt
        };
    }
}