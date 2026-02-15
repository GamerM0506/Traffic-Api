import { LicenseType } from "src/domain/enums";
export declare class LicenseCategoryResponseDto {
    type: LicenseType;
    name: string;
    description: string;
    totalExams: number;
}
