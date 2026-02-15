import { IsEnum, IsOptional } from 'class-validator';
import { LicenseType } from '@prisma/client';

export class GetExamSetsFilterDto {
    @IsEnum(LicenseType, { message: 'Loại bằng lái không hợp lệ' })
    @IsOptional()
    licenseType?: LicenseType;
}