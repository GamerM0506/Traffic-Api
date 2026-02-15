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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseController = void 0;
const common_1 = require("@nestjs/common");
const get_license_categories_use_case_1 = require("../../application/use-cases/license/get-license-categories.use-case");
let LicenseController = class LicenseController {
    constructor(getLicenseCategoriesUseCase) {
        this.getLicenseCategoriesUseCase = getLicenseCategoriesUseCase;
    }
    async getCategories() {
        return await this.getLicenseCategoriesUseCase.execute();
    }
};
exports.LicenseController = LicenseController;
__decorate([
    (0, common_1.Get)('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LicenseController.prototype, "getCategories", null);
exports.LicenseController = LicenseController = __decorate([
    (0, common_1.Controller)('licenses'),
    __metadata("design:paramtypes", [get_license_categories_use_case_1.GetLicenseCategoriesUseCase])
], LicenseController);
//# sourceMappingURL=license.controller.js.map