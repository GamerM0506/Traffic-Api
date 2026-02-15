import { LicenseType } from '../enums';

export class GeneralStudyTip {
    constructor(
        public readonly id: number | null,
        public readonly title: string,
        public readonly content: string,
        public readonly licenseType: LicenseType | null
    ) { }
}