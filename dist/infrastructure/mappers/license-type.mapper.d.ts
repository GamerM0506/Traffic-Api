import { LicenseType as DomainLicenseType } from 'src/domain/enums';
import { LicenseType as PrismaLicenseType } from '@prisma/client';
export declare class LicenseTypeMapper {
    static toPrisma(type: DomainLicenseType): PrismaLicenseType;
    static toDomain(type: PrismaLicenseType): DomainLicenseType;
}
