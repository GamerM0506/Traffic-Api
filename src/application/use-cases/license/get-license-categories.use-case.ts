import { ILicenseRepository } from '../../../domain/repositories/license.repository.interface';
import { LicenseCategoryResponseDto } from '../../dtos/license/license-category-response.dto';
import { LicenseType } from '../../../domain/enums/license-type.enum';

export class GetLicenseCategoriesUseCase {
    constructor(
        private readonly licenseRepository: ILicenseRepository,
    ) { }

    async execute(): Promise<LicenseCategoryResponseDto[]> {
        const types = await this.licenseRepository.getAllLicenseTypes();

        return Promise.all(
            types.map(async (type) => {
                const examCount = await this.licenseRepository.countExamSetsByLicenseType(type);
                return {
                    type: type,
                    name: `Hạng ${type}`,
                    description: this.getLicenseDescription(type),
                    totalExams: examCount,
                    iconUrl: `/assets/icons/license/${type.toLowerCase()}.png`,
                };
            }),
        );
    }

    private getLicenseDescription(type: LicenseType): string {
        const descriptions: Record<string, string> = {
            [LicenseType.A1]: 'Xe mô tô 2 bánh có dung tích xi lanh từ 50 cm3 đến dưới 175 cm3',
            [LicenseType.A2]: 'Xe mô tô 2 bánh có dung tích xi lanh từ 175 cm3 trở lên',
            [LicenseType.B1]: 'Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải có trọng tải dưới 3.500 kg',
        };
        return descriptions[type] || 'Giấy phép lái xe tiêu chuẩn';
    }
}