import { LicenseType } from "../enums";
import { ExamSet } from "../entities";
export interface IExamSetRepository {
    findByLicenseType(type: LicenseType): Promise<ExamSet[]>;
    findById(id: number): Promise<ExamSet | null>;
}
