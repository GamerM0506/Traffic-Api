import { LicenseType } from '../enums';
export declare class GeneralStudyTip {
    readonly id: number | null;
    readonly title: string;
    readonly content: string;
    readonly licenseType: LicenseType | null;
    constructor(id: number | null, title: string, content: string, licenseType: LicenseType | null);
}
