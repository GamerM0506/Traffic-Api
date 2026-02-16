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
exports.GetExamSetDetailUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetExamSetDetailUseCase = class GetExamSetDetailUseCase {
    constructor(examSetRepository) {
        this.examSetRepository = examSetRepository;
    }
    async execute(id) {
        const examSet = await this.examSetRepository.findById(id);
        if (!examSet) {
            throw new common_1.NotFoundException(`Không tìm thấy bộ đề thi với ID: ${id}`);
        }
        return {
            id: examSet.id,
            name: examSet.name,
            questions: examSet.questions.map((q) => ({
                id: q.id,
                content: q.content,
                explanation: q.explanation,
                isParalysis: q.isParalysis,
                mediaUrl: q.mediaUrl.getValue(),
                mediaType: q.mediaType,
                group: q.group,
                answers: q.answers.map((ans) => ({
                    id: ans.id,
                    content: ans.content,
                    isCorrect: ans.isCorrect,
                })),
            })),
        };
    }
};
exports.GetExamSetDetailUseCase = GetExamSetDetailUseCase;
exports.GetExamSetDetailUseCase = GetExamSetDetailUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IExamSetRepository')),
    __metadata("design:paramtypes", [Object])
], GetExamSetDetailUseCase);
//# sourceMappingURL=get-exam-set-detail.use-case.js.map