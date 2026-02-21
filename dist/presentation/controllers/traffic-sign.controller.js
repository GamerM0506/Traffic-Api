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
exports.TrafficSignController = void 0;
const common_1 = require("@nestjs/common");
const get_traffic_sign_categories_use_case_1 = require("../../application/use-cases/traffic-sign/get-traffic-sign-categories.use-case");
const get_traffic_signs_use_case_1 = require("../../application/use-cases/traffic-sign/get-traffic-signs.use-case");
const enums_1 = require("../../domain/enums");
let TrafficSignController = class TrafficSignController {
    constructor(getCategoriesUseCase, getByGroupUseCase) {
        this.getCategoriesUseCase = getCategoriesUseCase;
        this.getByGroupUseCase = getByGroupUseCase;
    }
    async getCategories() {
        return await this.getCategoriesUseCase.execute();
    }
    async getByGroup(group) {
        return await this.getByGroupUseCase.execute(group);
    }
};
exports.TrafficSignController = TrafficSignController;
__decorate([
    (0, common_1.Get)('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrafficSignController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('group/:group'),
    __param(0, (0, common_1.Param)('group')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrafficSignController.prototype, "getByGroup", null);
exports.TrafficSignController = TrafficSignController = __decorate([
    (0, common_1.Controller)('traffic-signs'),
    __metadata("design:paramtypes", [get_traffic_sign_categories_use_case_1.GetTrafficSignCategoriesUseCase,
        get_traffic_signs_use_case_1.GetTrafficSignsByGroupUseCase])
], TrafficSignController);
//# sourceMappingURL=traffic-sign.controller.js.map