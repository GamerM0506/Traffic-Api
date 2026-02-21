import { TrafficSignResponseDto } from 'src/application/dtos/traffic-sign/traffic-sign-response.dto';
import { GetTrafficSignCategoriesUseCase } from 'src/application/use-cases/traffic-sign/get-traffic-sign-categories.use-case';
import { GetTrafficSignsByGroupUseCase } from 'src/application/use-cases/traffic-sign/get-traffic-signs.use-case';
import { TrafficSignGroup } from 'src/domain/enums';
export declare class TrafficSignController {
    private readonly getCategoriesUseCase;
    private readonly getByGroupUseCase;
    constructor(getCategoriesUseCase: GetTrafficSignCategoriesUseCase, getByGroupUseCase: GetTrafficSignsByGroupUseCase);
    getCategories(): Promise<TrafficSignGroup[]>;
    getByGroup(group: TrafficSignGroup): Promise<TrafficSignResponseDto[]>;
}
