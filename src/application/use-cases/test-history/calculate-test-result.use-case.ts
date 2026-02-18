import { Injectable } from '@nestjs/common';
import { TestHistory } from 'src/domain/entities';
import { TestScore } from 'src/domain/value-objects';
import { SaveTestResultRequestDto } from '../../dtos/test-history/save-test-result.dto';

@Injectable()
export class CalculateTestResultUseCase {
  execute(dto: SaveTestResultRequestDto) {
    const tempHistory = new TestHistory(
      null,
      0,
      dto.licenseType,
      new TestScore(dto.score, dto.totalQuestions),
      dto.isParalysisFailed,
      dto.durationSeconds,
      []
    );

    return {
      status: tempHistory.getResultStatus(),
      score: tempHistory.score.score,
      totalQuestions: tempHistory.score.totalQuestions,
      isParalysisFailed: tempHistory.isParalysisFailed,
      message: tempHistory.getResultStatus() === 'PASS'
        ? 'Chúc mừng! Bạn đã đủ điều kiện đạt.'
        : 'Rất tiếc! Bạn cần cố gắng thêm.'
    };
  }
}