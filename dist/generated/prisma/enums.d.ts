export declare const MediaType: {
    readonly IMAGE: "IMAGE";
    readonly VIDEO: "VIDEO";
    readonly NONE: "NONE";
};
export type MediaType = (typeof MediaType)[keyof typeof MediaType];
export declare const QuestionType: {
    readonly THEORY: "THEORY";
    readonly SIMULATION: "SIMULATION";
};
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];
export declare const LicenseType: {
    readonly A1: "A1";
    readonly A2: "A2";
    readonly A3: "A3";
    readonly A4: "A4";
    readonly B1: "B1";
    readonly B2: "B2";
    readonly C: "C";
    readonly D: "D";
    readonly E: "E";
    readonly F: "F";
};
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];
export declare const QuestionGroup: {
    readonly CONCEPTS_RULES: "CONCEPTS_RULES";
    readonly CULTURE_ETHICS: "CULTURE_ETHICS";
    readonly TECHNIQUES: "TECHNIQUES";
    readonly STRUCTURE_REPAIR: "STRUCTURE_REPAIR";
    readonly TRAFFIC_SIGNS: "TRAFFIC_SIGNS";
    readonly TRAFFIC_FIGURES: "TRAFFIC_FIGURES";
};
export type QuestionGroup = (typeof QuestionGroup)[keyof typeof QuestionGroup];
export declare const TestStatus: {
    readonly PASS: "PASS";
    readonly FAIL: "FAIL";
};
export type TestStatus = (typeof TestStatus)[keyof typeof TestStatus];
export declare const BookmarkType: {
    readonly WRONG_AUTO: "WRONG_AUTO";
    readonly MANUAL: "MANUAL";
};
export type BookmarkType = (typeof BookmarkType)[keyof typeof BookmarkType];
