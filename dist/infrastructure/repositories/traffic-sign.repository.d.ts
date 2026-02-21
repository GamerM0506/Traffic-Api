import { ITrafficSignRepository } from 'src/domain/repositories/traffic-sign.repository.interface';
import { TrafficSign } from 'src/domain/entities/traffic-sign.entity';
import { TrafficSignGroup } from 'src/domain/enums/traffic-sign-group.enum';
import { PrismaService } from '../persistence/prisma.service';
export declare class TrafficSignRepository implements ITrafficSignRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllCategories(): Promise<TrafficSignGroup[]>;
    findByGroup(group: TrafficSignGroup): Promise<TrafficSign[]>;
    findAll(): Promise<TrafficSign[]>;
}
