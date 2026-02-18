"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateTestResultUseCase = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../../domain/entities");
const value_objects_1 = require("../../../domain/value-objects");
let CalculateTestResultUseCase = class CalculateTestResultUseCase {
    execute(dto) {
        const tempHistory = new entities_1.TestHistory(null, 0, dto.licenseType, new value_objects_1.TestScore(dto.score, dto.totalQuestions), dto.isParalysisFailed, dto.durationSeconds, []);
        return {
            status: tempHistory.getResultStatus(),
            score: tempHistory.score.score,
            totalQuestions: tempHistory.score.totalQuestions,
            isParalysisFailed: tempHistory.isParalysisFailed,
            message: tempHistory.getResultStatus() === 'PASS'
                ? 'Chúc mừng! Bạn đã đủ điều kiện đạt.'
                : 'Rất tiếc! Bạn cần cố gắng thêm.'
        };
    }
};
exports.CalculateTestResultUseCase = CalculateTestResultUseCase;
exports.CalculateTestResultUseCase = CalculateTestResultUseCase = __decorate([
    (0, common_1.Injectable)()
], CalculateTestResultUseCase);
//# sourceMappingURL=calculate-test-result.use-case.js.map