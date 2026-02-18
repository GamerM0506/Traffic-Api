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
exports.TestHistoryController = void 0;
const common_1 = require("@nestjs/common");
const save_test_result_use_case_1 = require("../../application/use-cases/test-history/save-test-result.use-case");
const get_latest_result_use_case_1 = require("../../application/use-cases/test-history/get-latest-result.use-case");
const get_test_history_detail_use_case_1 = require("../../application/use-cases/test-history/get-test-history-detail.use-case");
const save_test_result_dto_1 = require("../../application/dtos/test-history/save-test-result.dto");
const enums_1 = require("../../domain/enums");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const calculate_test_result_use_case_1 = require("../../application/use-cases/test-history/calculate-test-result.use-case");
let TestHistoryController = class TestHistoryController {
    constructor(saveResultUseCase, getLatestUseCase, getDetailUseCase, calculateUseCase) {
        this.saveResultUseCase = saveResultUseCase;
        this.getLatestUseCase = getLatestUseCase;
        this.getDetailUseCase = getDetailUseCase;
        this.calculateUseCase = calculateUseCase;
    }
    calculate(body) {
        return this.calculateUseCase.execute(body);
    }
    async save(user, body) {
        console.log('User từ Decorator:', user);
        return await this.saveResultUseCase.execute(user.sub, body);
    }
    async getLatest(user, type) {
        return await this.getLatestUseCase.execute(user.id, type);
    }
    async getDetail(user, id) {
        return await this.getDetailUseCase.execute(user.id, id);
    }
};
exports.TestHistoryController = TestHistoryController;
__decorate([
    (0, common_1.Post)('calculate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [save_test_result_dto_1.SaveTestResultRequestDto]),
    __metadata("design:returntype", void 0)
], TestHistoryController.prototype, "calculate", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, save_test_result_dto_1.SaveTestResultRequestDto]),
    __metadata("design:returntype", Promise)
], TestHistoryController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('latest'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TestHistoryController.prototype, "getLatest", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TestHistoryController.prototype, "getDetail", null);
exports.TestHistoryController = TestHistoryController = __decorate([
    (0, common_1.Controller)('test-history'),
    __metadata("design:paramtypes", [save_test_result_use_case_1.SaveTestResultUseCase,
        get_latest_result_use_case_1.GetLatestResultUseCase,
        get_test_history_detail_use_case_1.GetTestHistoryDetailUseCase,
        calculate_test_result_use_case_1.CalculateTestResultUseCase])
], TestHistoryController);
//# sourceMappingURL=test-history.controller.js.map