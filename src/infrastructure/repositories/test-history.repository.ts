import { Injectable } from '@nestjs/common';

import { ITestHistoryRepository } from 'src/domain/repositories';
import { TestHistory } from 'src/domain/entities';
import { TestHistoryMapper } from '../mappers/test-history.mapper';
import { PrismaService } from '../persistence/prisma.service';

@Injectable()
export class TestHistoryRepository implements ITestHistoryRepository {
    constructor(private readonly prisma: PrismaService) { }

    async save(history: TestHistory): Promise<TestHistory> {
        const persistenceData = TestHistoryMapper.toPersistence(history);
        const raw = await this.prisma.testHistory.create({
            data: persistenceData,
            include: { details: true }
        });

        return TestHistoryMapper.toDomain(raw);
    }

    async getLatestResult(userId: number, licenseType: any): Promise<TestHistory | null> {
        const raw = await this.prisma.testHistory.findFirst({
            where: { userId, licenseType },
            orderBy: { createdAt: 'desc' },
            include: { details: true }
        });

        return raw ? TestHistoryMapper.toDomain(raw) : null;
    }

    async findByUserId(userId: number): Promise<TestHistory[]> {
        const list = await this.prisma.testHistory.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
        return list.map(item => TestHistoryMapper.toDomain(item));
    }

    async findById(id: number): Promise<TestHistory | null> {
        const raw = await this.prisma.testHistory.findUnique({
            where: { id },
            include: {
                details: true
            }
        });

        if (!raw) return null;

        return TestHistoryMapper.toDomain(raw);
    }
}