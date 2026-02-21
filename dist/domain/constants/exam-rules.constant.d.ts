import { LicenseType, QuestionGroup } from '../enums';
export interface ExamPart {
    group: QuestionGroup;
    count: number;
}
export interface ExamRule {
    totalQuestions: number;
    timeSeconds: number;
    passingScore: number;
    paralysisCount: number;
    matrix: ExamPart[];
}
export declare const EXAM_RULES: Partial<Record<LicenseType, ExamRule>>;
