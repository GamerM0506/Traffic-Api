import { LicenseType } from 'src/domain/enums';
export declare class TestDetailDto {
    questionId: number;
    selectedAnswerId: number | null;
    isCorrect: boolean;
}
export declare class SaveTestResultRequestDto {
    examSetId?: number;
    licenseType: LicenseType;
    score: number;
    totalQuestions: number;
    isParalysisFailed: boolean;
    durationSeconds: number;
    details: TestDetailDto[];
}
