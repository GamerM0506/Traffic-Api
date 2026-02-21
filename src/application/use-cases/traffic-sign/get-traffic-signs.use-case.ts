import { Inject, Injectable } from '@nestjs/common';
import { ITrafficSignRepository } from 'src/domain/repositories';
import { TrafficSignGroup } from 'src/domain/enums';
import { TrafficSignResponseDto } from 'src/application/dtos/traffic-sign/traffic-sign-response.dto';

@Injectable()
export class GetTrafficSignsByGroupUseCase {
    constructor(
        @Inject('ITrafficSignRepository')
        private readonly trafficSignRepository: ITrafficSignRepository,
    ) { }

    async execute(group: TrafficSignGroup): Promise<TrafficSignResponseDto[]> {
        const signs = await this.trafficSignRepository.findByGroup(group);


        return signs.map(sign => ({
            id: sign.id as number,
            code: sign.code,
            name: sign.name,
            description: sign.description,
            imageUrl: sign.imageUrl.getValue(),
            group: sign.group,
        }));
    }
}