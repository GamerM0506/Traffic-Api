import { ITrafficSignRepository } from 'src/domain/repositories';
import { TrafficSignGroup } from 'src/domain/enums';
export declare class GetTrafficSignCategoriesUseCase {
    private readonly trafficSignRepository;
    constructor(trafficSignRepository: ITrafficSignRepository);
    execute(): Promise<TrafficSignGroup[]>;
}
