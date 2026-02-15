import { ILicenseRepository } from '../../../domain/repositories/license.repository.interface';
import { LicenseCategoryResponseDto } from '../../dtos/license/license-category-response.dto';
export declare class GetLicenseCategoriesUseCase {
    private readonly licenseRepository;
    constructor(licenseRepository: ILicenseRepository);
    execute(): Promise<LicenseCategoryResponseDto[]>;
    private getLicenseDescription;
}
