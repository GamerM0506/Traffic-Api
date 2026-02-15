export class ExamResultResponseDto {
    totalQuestions: number;
    totalCorrect: number;
    totalWrong: number;
    isPassed: boolean;
    isParalysedFailed: boolean;
    score: number;
}