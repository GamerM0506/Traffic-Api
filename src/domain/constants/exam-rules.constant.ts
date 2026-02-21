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

export const EXAM_RULES: Partial<Record<LicenseType, ExamRule>> = {
    [LicenseType.A1]: {
        totalQuestions: 25,
        timeSeconds: 1140,
        passingScore: 21,
        paralysisCount: 1,
        matrix: [
            { group: QuestionGroup.CONCEPTS_RULES, count: 12 },
            { group: QuestionGroup.CULTURE_ETHICS, count: 1 },
            { group: QuestionGroup.TRAFFIC_SIGNS, count: 7 },
            { group: QuestionGroup.TRAFFIC_FIGURES, count: 5 },
        ]
    },
    [LicenseType.A2]: {
        totalQuestions: 25,
        timeSeconds: 1140,
        passingScore: 23,
        paralysisCount: 1,
        matrix: [
            { group: QuestionGroup.CONCEPTS_RULES, count: 12 },
            { group: QuestionGroup.CULTURE_ETHICS, count: 1 },
            { group: QuestionGroup.TRAFFIC_SIGNS, count: 7 },
            { group: QuestionGroup.TRAFFIC_FIGURES, count: 5 },
        ]
    },
    [LicenseType.B1]: {
        totalQuestions: 30,
        timeSeconds: 1200,
        passingScore: 27,
        paralysisCount: 1,
        matrix: [
            { group: QuestionGroup.CONCEPTS_RULES, count: 12 },
            { group: QuestionGroup.CULTURE_ETHICS, count: 1 },
            { group: QuestionGroup.TECHNIQUES, count: 2 },
            { group: QuestionGroup.TRAFFIC_SIGNS, count: 9 },
            { group: QuestionGroup.TRAFFIC_FIGURES, count: 6 },
        ]
    },
    [LicenseType.B2]: {
        totalQuestions: 35,
        timeSeconds: 1320,
        passingScore: 32,
        paralysisCount: 1,
        matrix: [
            { group: QuestionGroup.CONCEPTS_RULES, count: 15 },
            { group: QuestionGroup.CULTURE_ETHICS, count: 1 },
            { group: QuestionGroup.TECHNIQUES, count: 2 },
            { group: QuestionGroup.STRUCTURE_REPAIR, count: 1 },
            { group: QuestionGroup.TRAFFIC_SIGNS, count: 9 },
            { group: QuestionGroup.TRAFFIC_FIGURES, count: 7 },
        ]
    },
};