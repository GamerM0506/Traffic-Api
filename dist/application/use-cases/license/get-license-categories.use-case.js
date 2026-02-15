"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLicenseCategoriesUseCase = void 0;
const license_type_enum_1 = require("../../../domain/enums/license-type.enum");
const common_1 = require("@nestjs/common");
let GetLicenseCategoriesUseCase = class GetLicenseCategoriesUseCase {
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
                totalExams: examCount
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
};
exports.GetLicenseCategoriesUseCase = GetLicenseCategoriesUseCase;
exports.GetLicenseCategoriesUseCase = GetLicenseCategoriesUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ILicenseRepository')),
    __metadata("design:paramtypes", [Object])
], GetLicenseCategoriesUseCase);
//# sourceMappingURL=get-license-categories.use-case.js.map