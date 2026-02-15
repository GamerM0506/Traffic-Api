import { LicenseType } from '../enums';
import { Question } from './question.entity';

export class ExamSet {
    constructor(
        public readonly id: number | null,
        public readonly name: string,
        public readonly licenseType: LicenseType,
        public readonly description: string | null,
        public readonly questions: Question[] = []
    ) { }

    public get totalQuestions(): number {
        return this.questions.length;
    }
}