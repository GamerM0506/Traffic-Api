"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXAM_RULES = void 0;
const enums_1 = require("../enums");
exports.EXAM_RULES = {
    [enums_1.LicenseType.A1]: {
        totalQuestions: 25,
        timeSeconds: 1140,
        passingScore: 21,
        paralysisCount: 1,
        matrix: [
            { group: enums_1.QuestionGroup.CONCEPTS_RULES, count: 12 },
            { group: enums_1.QuestionGroup.CULTURE_ETHICS, count: 1 },
            { group: enums_1.QuestionGroup.TRAFFIC_SIGNS, count: 7 },
            { group: enums_1.QuestionGroup.TRAFFIC_FIGURES, count: 5 },
        ]
    },
    [enums_1.LicenseType.A2]: {
        totalQuestions: 25,
        timeSeconds: 1140,
        passingScore: 23,
        paralysisCount: 1,
        matrix: [
            { group: enums_1.QuestionGroup.CONCEPTS_RULES, count: 12 },
            { group: enums_1.QuestionGroup.CULTURE_ETHICS, count: 1 },
            { group: enums_1.QuestionGroup.TRAFFIC_SIGNS, count: 7 },
            { group: enums_1.QuestionGroup.TRAFFIC_FIGURES, count: 5 },
        ]
    },
    [enums_1.LicenseType.B1]: {
        totalQuestions: 30,
        timeSeconds: 1200,
        passingScore: 27,
        paralysisCount: 1,
        matrix: [
            { group: enums_1.QuestionGroup.CONCEPTS_RULES, count: 12 },
            { group: enums_1.QuestionGroup.CULTURE_ETHICS, count: 1 },
            { group: enums_1.QuestionGroup.TECHNIQUES, count: 2 },
            { group: enums_1.QuestionGroup.TRAFFIC_SIGNS, count: 9 },
            { group: enums_1.QuestionGroup.TRAFFIC_FIGURES, count: 6 },
        ]
    },
    [enums_1.LicenseType.B2]: {
        totalQuestions: 35,
        timeSeconds: 1320,
        passingScore: 32,
        paralysisCount: 1,
        matrix: [
            { group: enums_1.QuestionGroup.CONCEPTS_RULES, count: 15 },
            { group: enums_1.QuestionGroup.CULTURE_ETHICS, count: 1 },
            { group: enums_1.QuestionGroup.TECHNIQUES, count: 2 },
            { group: enums_1.QuestionGroup.STRUCTURE_REPAIR, count: 1 },
            { group: enums_1.QuestionGroup.TRAFFIC_SIGNS, count: 9 },
            { group: enums_1.QuestionGroup.TRAFFIC_FIGURES, count: 7 },
        ]
    },
};
//# sourceMappingURL=exam-rules.constant.js.map