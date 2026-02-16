import { Injectable } from '@nestjs/common';
import { ILicenseRepository } from 'src/domain/repositories/license.repository.interface';
import { PrismaService } from '../persistence/prisma.service';
import { LicenseType as DomainLicenseType } from 'src/domain/enums';
import { LicenseTypeMapper } from '../mappers/license-type.mapper';

@Injectable()
export class LicenseRepository implements ILicenseRepository {
    constructor(private readonly prisma: PrismaService) { }

    async getAllLicenseTypes(): Promise<DomainLicenseType[]> {
        return Object.values(DomainLicenseType);
    }

    async countExamSetsByLicenseType(
        type: DomainLicenseType,
    ): Promise<number> {
        const prismaType = LicenseTypeMapper.toPrisma(type);

        return this.prisma.examSet.count({
            where: {
                licenseType: prismaType,
            },
        });
    }
}
