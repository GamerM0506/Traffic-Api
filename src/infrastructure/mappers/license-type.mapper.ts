import { LicenseType as DomainLicenseType } from 'src/domain/enums';
import { LicenseType as PrismaLicenseType } from '@prisma/client';

export class LicenseTypeMapper {
    static toPrisma(type: DomainLicenseType): PrismaLicenseType {
        return PrismaLicenseType[type];
    }

    static toDomain(type: PrismaLicenseType): DomainLicenseType {
        return DomainLicenseType[type];
    }
}
