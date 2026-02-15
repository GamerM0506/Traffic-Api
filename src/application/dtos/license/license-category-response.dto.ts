import { LicenseType } from "src/domain/enums";

export class LicenseCategoryResponseDto {
    type: LicenseType;
    name: string;
    description: string;
    totalExams: number;
    iconUrl?: string;
}