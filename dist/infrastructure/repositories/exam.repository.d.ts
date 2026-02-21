import { IExamSetRepository } from "src/domain/repositories";
import { PrismaService } from "../persistence/prisma.service";
import { ExamSet, Question } from "src/domain/entities";
import { LicenseType as DomainLicenseType, QuestionGroup } from "src/domain/enums";
export declare class ExamSetRepository implements IExamSetRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: number): Promise<ExamSet | null>;
    findByLicenseType(type: DomainLicenseType): Promise<ExamSet[]>;
    findRandom(params: {
        licenseType: DomainLicenseType;
        group: QuestionGroup;
        limit: number;
        isParalysis?: boolean;
    }): Promise<Question[]>;
}
