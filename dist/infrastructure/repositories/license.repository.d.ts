import { ILicenseRepository } from "src/domain/repositories/license.repository.interface";
import { PrismaService } from "../persistence/prisma.service";
import { LicenseType as DomainLicenseType } from "src/domain/enums";
export declare class LicenseRepository implements ILicenseRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllLicenseTypes(): Promise<DomainLicenseType[]>;
    countExamSetsByLicenseType(type: DomainLicenseType): Promise<number>;
}
