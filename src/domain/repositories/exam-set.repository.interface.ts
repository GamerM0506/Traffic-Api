import { LicenseType } from "../enums";
import { ExamSet, Question, Answer } from "../entities";

export type ExamSetWithQuestions = ExamSet & {
    questions: {
        question: Question & {
            answers: Answer[];
        };
    }[];
};

export interface IExamSetRepository {
    findByLicenseType(type: LicenseType): Promise<ExamSet[]>;
    findById(id: number): Promise<ExamSetWithQuestions | null>;
}