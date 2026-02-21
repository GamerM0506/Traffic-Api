import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { GetExamSetsByLicenseUseCase } from '../../application/use-cases/exam/get-exam-sets-by-license.use-case';
import { GetExamSetDetailUseCase } from '../../application/use-cases/exam/get-exam-set-detail.use-case';
import { LicenseType } from 'src/domain/enums';
import { ExamSetResponseDto } from 'src/application/dtos/exam/exam-set-response.dto';
import { ExamDetailResponseDto } from 'src/application/dtos/exam/exam-detail-response.dto';
import { GenerateRandomExamUseCase } from 'src/application/use-cases/exam/generate-random-exam.use-case';

@Controller('exams')
export class ExamController {
    constructor(
        private readonly getExamSetsUseCase: GetExamSetsByLicenseUseCase,
        private readonly getExamDetailUseCase: GetExamSetDetailUseCase,
        private readonly generateRandomUseCase: GenerateRandomExamUseCase
    ) { }

    @Get()
    async getSets(
        @Query('type') type: LicenseType
    ): Promise<ExamSetResponseDto[]> {
        return await this.getExamSetsUseCase.execute(type);
    }

    @Get('random')
    async generateRandom(
        @Query('type') type: LicenseType
    ): Promise<ExamDetailResponseDto> {
        return await this.generateRandomUseCase.execute(type);
    }
    
    @Get(':id')
    async getDetail(
        @Param('id', ParseIntPipe) id: number
    ): Promise<ExamDetailResponseDto> {
        return await this.getExamDetailUseCase.execute(id);
    }


}