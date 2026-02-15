import { TestHistory } from '../entities/test-history.entity';

export interface ITestHistoryRepository {
    save(history: TestHistory): Promise<TestHistory>;
    findByUserId(userId: number): Promise<TestHistory[]>;
    findById(id: number): Promise<TestHistory | null>;
    getLatestResult(userId: number, licenseType: string): Promise<TestHistory | null>;
}