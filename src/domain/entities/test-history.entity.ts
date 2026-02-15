import { LicenseType, TestStatus } from '../enums';
import { TestScore } from '../value-objects';

export class TestHistory {
    constructor(
        public readonly id: number | null,
        public readonly userId: number,
        public readonly licenseType: LicenseType,
        public readonly score: TestScore,
        public readonly isParalysisFailed: boolean,
        public readonly durationSeconds: number,
        public readonly examSetId?: number | null,
        public readonly createdAt?: Date
    ) { }

    public getResultStatus(): TestStatus {
        if (this.isParalysisFailed) return TestStatus.FAIL;

        const requirements: Record<LicenseType, number> = {
            [LicenseType.A1]: 21,
            [LicenseType.A2]: 23,
            [LicenseType.B1]: 27,
            [LicenseType.B2]: 32,
            [LicenseType.C]: 37,
            [LicenseType.A3]: 23, [LicenseType.A4]: 23,
            [LicenseType.D]: 42, [LicenseType.E]: 42, [LicenseType.F]: 42
        };

        const passScore = requirements[this.licenseType];
        return this.score.score >= passScore ? TestStatus.PASS : TestStatus.FAIL;
    }
}