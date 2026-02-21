import { LicenseType, QuestionGroup } from "../enums";
import { ExamSet, Question } from "../entities";
export interface IExamSetRepository {
    findByLicenseType(type: LicenseType): Promise<ExamSet[]>;
    findById(id: number): Promise<ExamSet | null>;
    findRandom(params: {
        licenseType: LicenseType;
        group: QuestionGroup;
        limit: number;
        isParalysis?: boolean;
    }): Promise<Question[]>;
}
