import { Injectable } from "@nestjs/common";
import { IExamSetRepository } from "src/domain/repositories";
import { PrismaService } from "../persistence/prisma.service";
import { ExamSetMapper } from "../mappers/exam-set.mapper";
import { ExamSet } from "src/domain/entities";
import { LicenseType as DomainLicenseType } from "src/domain/enums";

@Injectable()
export class ExamSetRepository implements IExamSetRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findById(id: number): Promise<ExamSet | null> {
        const rawData = await this.prisma.examSet.findUnique({
            where: { id },
            include: {
                questions: { include: { question: { include: { answers: true } } } }
            }
        });

        if (!rawData) return null;
        return ExamSetMapper.toDomain(rawData);
    }

    async findByLicenseType(type: DomainLicenseType): Promise<ExamSet[]> {
        const rawSets = await this.prisma.examSet.findMany({
            where: { licenseType: type as any }
        });

        return rawSets.map(set => ExamSetMapper.toDomain(set));
    }
}