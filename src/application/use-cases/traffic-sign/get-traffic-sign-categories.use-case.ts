import { Inject, Injectable } from '@nestjs/common';
import { ITrafficSignRepository } from 'src/domain/repositories';
import { TrafficSignGroup } from 'src/domain/enums';

@Injectable()
export class GetTrafficSignCategoriesUseCase {
    constructor(
        @Inject('ITrafficSignRepository')
        private readonly trafficSignRepository: ITrafficSignRepository,
    ) { }

    async execute(): Promise<TrafficSignGroup[]> {
        return await this.trafficSignRepository.findAllCategories();
    }
}