import { TrafficSign } from '../entities/traffic-sign.entity';
import { TrafficSignGroup } from '../enums';

export interface ITrafficSignRepository {
    findAll(): Promise<TrafficSign[]>;
    findByGroup(group: TrafficSignGroup): Promise<TrafficSign[]>;
    findByCode(code: string): Promise<TrafficSign | null>;
}