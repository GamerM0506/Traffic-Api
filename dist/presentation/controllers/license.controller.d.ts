import { GetLicenseCategoriesUseCase } from "src/application/use-cases/license/get-license-categories.use-case";
import { LicenseCategoryResponseDto } from 'src/application/dtos/license/license-category-response.dto';
export declare class LicenseController {
    private readonly getLicenseCategoriesUseCase;
    constructor(getLicenseCategoriesUseCase: GetLicenseCategoriesUseCase);
    getCategories(): Promise<LicenseCategoryResponseDto[]>;
}
