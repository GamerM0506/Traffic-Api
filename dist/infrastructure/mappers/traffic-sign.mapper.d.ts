import { TrafficSign as PrismaTrafficSign } from '@prisma/client';
import { TrafficSign } from 'src/domain/entities/traffic-sign.entity';
export declare class TrafficSignMapper {
    static toDomain(raw: PrismaTrafficSign): TrafficSign;
}
