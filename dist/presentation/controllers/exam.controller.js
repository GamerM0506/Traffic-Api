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
exports.ExamController = void 0;
const common_1 = require("@nestjs/common");
const get_exam_sets_by_license_use_case_1 = require("../../application/use-cases/exam/get-exam-sets-by-license.use-case");
const get_exam_set_detail_use_case_1 = require("../../application/use-cases/exam/get-exam-set-detail.use-case");
const enums_1 = require("../../domain/enums");
const generate_random_exam_use_case_1 = require("../../application/use-cases/exam/generate-random-exam.use-case");
let ExamController = class ExamController {
    constructor(getExamSetsUseCase, getExamDetailUseCase, generateRandomUseCase) {
        this.getExamSetsUseCase = getExamSetsUseCase;
        this.getExamDetailUseCase = getExamDetailUseCase;
        this.generateRandomUseCase = generateRandomUseCase;
    }
    async getSets(type) {
        return await this.getExamSetsUseCase.execute(type);
    }
    async generateRandom(type) {
        return await this.generateRandomUseCase.execute(type);
    }
    async getDetail(id) {
        return await this.getExamDetailUseCase.execute(id);
    }
};
exports.ExamController = ExamController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getSets", null);
__decorate([
    (0, common_1.Get)('random'),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "generateRandom", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getDetail", null);
exports.ExamController = ExamController = __decorate([
    (0, common_1.Controller)('exams'),
    __metadata("design:paramtypes", [get_exam_sets_by_license_use_case_1.GetExamSetsByLicenseUseCase,
        get_exam_set_detail_use_case_1.GetExamSetDetailUseCase,
        generate_random_exam_use_case_1.GenerateRandomExamUseCase])
], ExamController);
//# sourceMappingURL=exam.controller.js.map