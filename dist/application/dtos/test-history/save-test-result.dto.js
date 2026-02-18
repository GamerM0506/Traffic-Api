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
exports.SaveTestResultRequestDto = exports.TestDetailDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../../../domain/enums");
class TestDetailDto {
}
exports.TestDetailDto = TestDetailDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], TestDetailDto.prototype, "questionId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TestDetailDto.prototype, "selectedAnswerId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TestDetailDto.prototype, "isCorrect", void 0);
class SaveTestResultRequestDto {
}
exports.SaveTestResultRequestDto = SaveTestResultRequestDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SaveTestResultRequestDto.prototype, "examSetId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.LicenseType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SaveTestResultRequestDto.prototype, "licenseType", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SaveTestResultRequestDto.prototype, "score", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SaveTestResultRequestDto.prototype, "totalQuestions", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], SaveTestResultRequestDto.prototype, "isParalysisFailed", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], SaveTestResultRequestDto.prototype, "durationSeconds", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TestDetailDto),
    __metadata("design:type", Array)
], SaveTestResultRequestDto.prototype, "details", void 0);
//# sourceMappingURL=save-test-result.dto.js.map