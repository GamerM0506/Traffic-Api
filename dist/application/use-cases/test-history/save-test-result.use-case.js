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
exports.SaveTestResultUseCase = void 0;
const common_1 = require("@nestjs/common");
const value_objects_1 = require("../../../domain/value-objects");
const entities_1 = require("../../../domain/entities");
let SaveTestResultUseCase = class SaveTestResultUseCase {
    constructor(historyRepository) {
        this.historyRepository = historyRepository;
    }
    async execute(userId, dto) {
        const details = dto.details.map(d => new entities_1.TestDetail(null, d.questionId, d.selectedAnswerId, d.isCorrect));
        const history = new entities_1.TestHistory(null, userId, dto.licenseType, new value_objects_1.TestScore(dto.score, dto.totalQuestions), dto.isParalysisFailed, dto.durationSeconds, details, dto.examSetId);
        const savedHistory = await this.historyRepository.save(history);
        return {
            id: savedHistory.id,
            userId: savedHistory.userId,
            licenseType: savedHistory.licenseType,
            totalCorrect: savedHistory.score.score,
            totalQuestions: savedHistory.score.totalQuestions,
            isParalysisFailed: savedHistory.isParalysisFailed,
            status: savedHistory.getResultStatus(),
            message: savedHistory.getResultStatus() === 'PASS'
                ? 'Chúc mừng! Bạn đã đạt.'
                : 'Rất tiếc, bạn không đạt.',
            createdAt: savedHistory.createdAt
        };
    }
};
exports.SaveTestResultUseCase = SaveTestResultUseCase;
exports.SaveTestResultUseCase = SaveTestResultUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ITestHistoryRepository')),
    __metadata("design:paramtypes", [Object])
], SaveTestResultUseCase);
//# sourceMappingURL=save-test-result.use-case.js.map