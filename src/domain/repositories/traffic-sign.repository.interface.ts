import { TrafficSign } from '../entities/traffic-sign.entity';
import { TrafficSignGroup } from '../enums';

export interface ITrafficSignRepository {
    findAllCategories(): Promise<TrafficSignGroup[]>;
    findByGroup(group: TrafficSignGroup): Promise<TrafficSign[]>;
    findAll(): Promise<TrafficSign[]>;
}