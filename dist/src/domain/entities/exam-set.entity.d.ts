import { LicenseType } from '../enums';
import { Question } from './question.entity';
export declare class ExamSet {
    readonly id: number | null;
    readonly name: string;
    readonly licenseType: LicenseType;
    readonly description: string | null;
    readonly questions: Question[];
    constructor(id: number | null, name: string, licenseType: LicenseType, description: string | null, questions?: Question[]);
    get totalQuestions(): number;
}
