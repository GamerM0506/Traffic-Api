import { IsEnum, IsOptional } from 'class-validator';
import { LicenseType } from '../../../domain/enums/license-type.enum';

export class GetExamSetsFilterDto {
    @IsEnum(LicenseType, { message: 'Hạng bằng lái không hợp lệ' })
    @IsOptional()
    licenseType?: LicenseType;
}