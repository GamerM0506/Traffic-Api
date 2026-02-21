import { Injectable } from '@nestjs/common';
import { ITrafficSignRepository } from 'src/domain/repositories/traffic-sign.repository.interface';
import { TrafficSign } from 'src/domain/entities/traffic-sign.entity';
import { TrafficSignGroup } from 'src/domain/enums/traffic-sign-group.enum';
import { TrafficSignMapper } from '../mappers/traffic-sign.mapper';
import { PrismaService } from '../persistence/prisma.service';

@Injectable()
export class TrafficSignRepository implements ITrafficSignRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findAllCategories(): Promise<TrafficSignGroup[]> {
        const groups = await this.prisma.trafficSign.findMany({
            distinct: ['group'],
            select: { group: true },
        });

        return groups.map((item) => item.group as TrafficSignGroup);
    }

    async findByGroup(group: TrafficSignGroup): Promise<TrafficSign[]> {
        const rawSigns = await this.prisma.trafficSign.findMany({
            where: {
                group: group as any
            },
            orderBy: { code: 'asc' }
        });

        return rawSigns.map((s) => TrafficSignMapper.toDomain(s));
    }

    async findAll(): Promise<TrafficSign[]> {
        const rawSigns = await this.prisma.trafficSign.findMany();
        return rawSigns.map((s) => TrafficSignMapper.toDomain(s));
    }
}