import { LicenseType, TestStatus } from '../enums';
import { TestScore } from '../value-objects';
export declare class TestHistory {
    readonly id: number | null;
    readonly userId: number;
    readonly licenseType: LicenseType;
    readonly score: TestScore;
    readonly isParalysisFailed: boolean;
    readonly durationSeconds: number;
    readonly examSetId?: number | null;
    readonly createdAt?: Date;
    constructor(id: number | null, userId: number, licenseType: LicenseType, score: TestScore, isParalysisFailed: boolean, durationSeconds: number, examSetId?: number | null, createdAt?: Date);
    getResultStatus(): TestStatus;
}
