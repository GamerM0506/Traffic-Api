import { Controller, Get, Post, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { SaveTestResultUseCase } from '../../application/use-cases/test-history/save-test-result.use-case';
import { GetLatestResultUseCase } from '../../application/use-cases/test-history/get-latest-result.use-case';
import { GetTestHistoryDetailUseCase } from '../../application/use-cases/test-history/get-test-history-detail.use-case';
import { SaveTestResultRequestDto } from '../../application/dtos/test-history/save-test-result.dto';
import { LicenseType } from 'src/domain/enums';
import { CurrentUser } from '../decorators/current-user.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('test-history')
@UseGuards(JwtAuthGuard)
export class TestHistoryController {
    constructor(
        private readonly saveResultUseCase: SaveTestResultUseCase,
        private readonly getLatestUseCase: GetLatestResultUseCase,
        private readonly getDetailUseCase: GetTestHistoryDetailUseCase,
    ) { }

    @Post()
    async save(
        @CurrentUser() user: any,
        @Body() body: SaveTestResultRequestDto
    ) {
        console.log('User từ Decorator:', user);
        return await this.saveResultUseCase.execute(user.sub, body);
    }

    @Get('latest')
    async getLatest(
        @CurrentUser() user: any,
        @Query('type') type: LicenseType
    ) {
        return await this.getLatestUseCase.execute(user.id, type);
    }

    @Get(':id')
    async getDetail(
        @CurrentUser() user: any,
        @Param('id', ParseIntPipe) id: number
    ) {
        return await this.getDetailUseCase.execute(user.id, id);
    }
}