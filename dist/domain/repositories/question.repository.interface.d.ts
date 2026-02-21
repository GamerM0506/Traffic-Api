import { Question } from '../entities/question.entity';
import { LicenseType, QuestionGroup } from '../enums';
export interface IQuestionRepository {
    findById(id: number): Promise<Question | null>;
    findByLicenseType(licenseType: LicenseType): Promise<Question[]>;
    findParalysisQuestions(licenseType: LicenseType): Promise<Question[]>;
    findByGroup(group: QuestionGroup): Promise<Question[]>;
    searchByContent(keyword: string): Promise<Question[]>;
    findRandom(params: {
        licenseType: LicenseType;
        group: QuestionGroup;
        limit: number;
        isParalysis?: boolean;
    }): Promise<Question[]>;
}
