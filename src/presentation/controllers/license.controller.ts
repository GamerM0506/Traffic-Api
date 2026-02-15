import { Controller,Get } from "@nestjs/common";
import { GetLicenseCategoriesUseCase } from "src/application/use-cases/license/get-license-categories.use-case";
import { LicenseCategoryResponseDto } from 'src/application/dtos/license/license-category-response.dto';

@Controller('licenses')
export class LicenseController {
  constructor(
    private readonly getLicenseCategoriesUseCase: GetLicenseCategoriesUseCase,
  ) {}

  @Get('categories') 
  async getCategories(): Promise<LicenseCategoryResponseDto[]> {
    return await this.getLicenseCategoriesUseCase.execute();
  }
}