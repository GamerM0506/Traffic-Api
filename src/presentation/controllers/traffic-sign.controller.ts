import { Controller, Get, Param } from '@nestjs/common';
import { TrafficSignResponseDto } from 'src/application/dtos/traffic-sign/traffic-sign-response.dto';
import { GetTrafficSignCategoriesUseCase } from 'src/application/use-cases/traffic-sign/get-traffic-sign-categories.use-case';
import { GetTrafficSignsByGroupUseCase } from 'src/application/use-cases/traffic-sign/get-traffic-signs.use-case';
import { TrafficSignGroup } from 'src/domain/enums';

@Controller('traffic-signs')
export class TrafficSignController {
    constructor(
        private readonly getCategoriesUseCase: GetTrafficSignCategoriesUseCase,
        private readonly getByGroupUseCase: GetTrafficSignsByGroupUseCase,
    ) { }

    @Get('categories')
    async getCategories(): Promise<TrafficSignGroup[]> {
        return await this.getCategoriesUseCase.execute();
    }

    @Get('group/:group')
    async getByGroup(
        @Param('group') group: TrafficSignGroup
    ): Promise<TrafficSignResponseDto[]> {
        return await this.getByGroupUseCase.execute(group);
    }
}