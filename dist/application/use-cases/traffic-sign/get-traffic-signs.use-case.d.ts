import { ITrafficSignRepository } from 'src/domain/repositories';
import { TrafficSignGroup } from 'src/domain/enums';
import { TrafficSignResponseDto } from 'src/application/dtos/traffic-sign/traffic-sign-response.dto';
export declare class GetTrafficSignsByGroupUseCase {
    private readonly trafficSignRepository;
    constructor(trafficSignRepository: ITrafficSignRepository);
    execute(group: TrafficSignGroup): Promise<TrafficSignResponseDto[]>;
}
