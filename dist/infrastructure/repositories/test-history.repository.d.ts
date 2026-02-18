import { ITestHistoryRepository } from 'src/domain/repositories';
import { TestHistory } from 'src/domain/entities';
import { PrismaService } from '../persistence/prisma.service';
export declare class TestHistoryRepository implements ITestHistoryRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    save(history: TestHistory): Promise<TestHistory>;
    getLatestResult(userId: number, licenseType: any): Promise<TestHistory | null>;
    findByUserId(userId: number): Promise<TestHistory[]>;
    findById(id: number): Promise<TestHistory | null>;
}
