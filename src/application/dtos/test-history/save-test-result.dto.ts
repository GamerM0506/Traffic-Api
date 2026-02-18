import { IsArray, IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LicenseType } from 'src/domain/enums';

export class TestDetailDto {
    @IsInt()
    @IsNotEmpty()
    questionId: number;

    @IsInt()
    @IsOptional()
    selectedAnswerId: number | null;

    @IsBoolean()
    isCorrect: boolean;
}

export class SaveTestResultRequestDto {
    @IsInt()
    @IsOptional()
    examSetId?: number;

    @IsEnum(LicenseType)
    @IsNotEmpty()
    licenseType: LicenseType;

    @IsInt()
    @IsNotEmpty()
    score: number;

    @IsInt()
    @IsNotEmpty()
    totalQuestions: number;

    @IsBoolean()
    @IsNotEmpty()
    isParalysisFailed: boolean;

    @IsInt()
    @IsNotEmpty()
    durationSeconds: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TestDetailDto)
    details: TestDetailDto[];
}