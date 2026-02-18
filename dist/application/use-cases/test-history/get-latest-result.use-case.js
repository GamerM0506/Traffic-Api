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
exports.GetLatestResultUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetLatestResultUseCase = class GetLatestResultUseCase {
    constructor(historyRepository) {
        this.historyRepository = historyRepository;
    }
    async execute(userId, licenseType) {
        const latest = await this.historyRepository.getLatestResult(userId, licenseType);
        if (!latest)
            return null;
        return {
            id: latest.id,
            licenseType: latest.licenseType,
            score: latest.score.score,
            totalQuestions: latest.score.totalQuestions,
            status: latest.getResultStatus(),
            createdAt: latest.createdAt
        };
    }
};
exports.GetLatestResultUseCase = GetLatestResultUseCase;
exports.GetLatestResultUseCase = GetLatestResultUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ITestHistoryRepository')),
    __metadata("design:paramtypes", [Object])
], GetLatestResultUseCase);
//# sourceMappingURL=get-latest-result.use-case.js.map