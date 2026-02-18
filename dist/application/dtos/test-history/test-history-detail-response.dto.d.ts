export declare class TestDetailResponseDto {
    id: number;
    questionId: number;
    selectedAnswerId: number | null;
    isCorrect: boolean;
}
export declare class TestHistoryDetailResponseDto {
    id: number;
    licenseType: string;
    score: number;
    totalQuestions: number;
    status: string;
    isParalysisFailed: boolean;
    durationSeconds: number;
    createdAt: Date;
    details: TestDetailResponseDto[];
}
