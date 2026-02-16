import { IExamSetRepository } from "src/domain/repositories";
import { PrismaService } from "../persistence/prisma.service";
import { ExamSet } from "src/domain/entities";
import { LicenseType as DomainLicenseType } from "src/domain/enums";
export declare class ExamSetRepository implements IExamSetRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: number): Promise<ExamSet | null>;
    findByLicenseType(type: DomainLicenseType): Promise<ExamSet[]>;
}
