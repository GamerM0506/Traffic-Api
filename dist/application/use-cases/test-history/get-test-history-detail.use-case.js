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
exports.GetTestHistoryDetailUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetTestHistoryDetailUseCase = class GetTestHistoryDetailUseCase {
    constructor(historyRepository) {
        this.historyRepository = historyRepository;
    }
    async execute(userId, historyId) {
        const history = await this.historyRepository.findById(historyId);
        if (!history)
            throw new common_1.NotFoundException('Không tìm thấy lịch sử bài thi');
        if (history.userId !== userId) {
            throw new common_1.ForbiddenException('Bạn không có quyền xem bài thi này');
        }
        return {
            id: history.id,
            licenseType: history.licenseType,
            score: history.score.score,
            totalQuestions: history.score.totalQuestions,
            status: history.getResultStatus(),
            isParalysisFailed: history.isParalysisFailed,
            durationSeconds: history.durationSeconds,
            createdAt: history.createdAt,
            details: history.details.map(d => ({
                id: d.id,
                questionId: d.questionId,
                selectedAnswerId: d.selectedAnswerId,
                isCorrect: d.isCorrect
            }))
        };
    }
};
exports.GetTestHistoryDetailUseCase = GetTestHistoryDetailUseCase;
exports.GetTestHistoryDetailUseCase = GetTestHistoryDetailUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ITestHistoryRepository')),
    __metadata("design:paramtypes", [Object])
], GetTestHistoryDetailUseCase);
//# sourceMappingURL=get-test-history-detail.use-case.js.map