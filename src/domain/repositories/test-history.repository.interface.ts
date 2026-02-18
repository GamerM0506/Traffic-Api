import { TestHistory } from '../entities/test-history.entity';
import { LicenseType } from '../enums';

export interface ITestHistoryRepository {
    save(history: TestHistory): Promise<TestHistory>;
    findByUserId(userId: number): Promise<TestHistory[]>;
    findById(id: number): Promise<TestHistory | null>;
    getLatestResult(userId: number, licenseType: LicenseType): Promise<TestHistory | null>;
}