"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLicenseCategoriesUseCase = void 0;
const license_type_enum_1 = require("../../../domain/enums/license-type.enum");
class GetLicenseCategoriesUseCase {
    constructor(licenseRepository) {
        this.licenseRepository = licenseRepository;
    }
    async execute() {
        const types = await this.licenseRepository.getAllLicenseTypes();
        return Promise.all(types.map(async (type) => {
            const examCount = await this.licenseRepository.countExamSetsByLicenseType(type);
            return {
                type: type,
                name: `Hạng ${type}`,
                description: this.getLicenseDescription(type),
                totalExams: examCount,
                iconUrl: `/assets/icons/license/${type.toLowerCase()}.png`,
            };
        }));
    }
    getLicenseDescription(type) {
        const descriptions = {
            [license_type_enum_1.LicenseType.A1]: 'Xe mô tô 2 bánh có dung tích xi lanh từ 50 cm3 đến dưới 175 cm3',
            [license_type_enum_1.LicenseType.A2]: 'Xe mô tô 2 bánh có dung tích xi lanh từ 175 cm3 trở lên',
            [license_type_enum_1.LicenseType.B1]: 'Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải có trọng tải dưới 3.500 kg',
        };
        return descriptions[type] || 'Giấy phép lái xe tiêu chuẩn';
    }
}
exports.GetLicenseCategoriesUseCase = GetLicenseCategoriesUseCase;
//# sourceMappingURL=get-license-categories.use-case.js.map