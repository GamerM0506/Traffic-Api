import { TrafficSign as PrismaTrafficSign } from '@prisma/client';
import { TrafficSign } from 'src/domain/entities/traffic-sign.entity';
import { TrafficSignGroup } from 'src/domain/enums/traffic-sign-group.enum';
import { Url } from 'src/domain/value-objects';

export class TrafficSignMapper {
    static toDomain(raw: PrismaTrafficSign): TrafficSign {
        return new TrafficSign(
            raw.id,
            raw.code,
            raw.name,
            raw.description,
            new Url(raw.imageUrl),
            raw.group as TrafficSignGroup
        );
    }
}