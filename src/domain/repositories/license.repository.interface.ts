import { LicenseType } from "../enums";

export interface ILicenseRepository {
    getAllLicenseTypes(): Promise<LicenseType[]>;
    countExamSetsByLicenseType(type: LicenseType): Promise<number>;
}