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
exports.GenerateRandomExamUseCase = void 0;
const common_1 = require("@nestjs/common");
const exam_rules_constant_1 = require("../../../domain/constants/exam-rules.constant");
const enums_1 = require("../../../domain/enums");
let GenerateRandomExamUseCase = class GenerateRandomExamUseCase {
    constructor(examSetRepository) {
        this.examSetRepository = examSetRepository;
    }
    async execute(licenseType) {
        const rule = exam_rules_constant_1.EXAM_RULES[licenseType];
        if (!rule)
            throw new common_1.NotFoundException(`Không tìm thấy quy tắc thi cho hạng ${licenseType}`);
        const allSelectedQuestions = [];
        const paralysisQuestions = await this.examSetRepository.findRandom({
            licenseType,
            group: enums_1.QuestionGroup.CONCEPTS_RULES,
            limit: rule.paralysisCount,
            isParalysis: true
        });
        allSelectedQuestions.push(...paralysisQuestions);
        for (const item of rule.matrix) {
            let currentLimit = item.count;
            if (item.group === enums_1.QuestionGroup.CONCEPTS_RULES) {
                currentLimit = item.count - paralysisQuestions.length;
            }
            const normalQuestions = await this.examSetRepository.findRandom({
                licenseType,
                group: item.group,
                limit: currentLimit,
                isParalysis: false
            });
            allSelectedQuestions.push(...normalQuestions);
        }
        allSelectedQuestions.sort(() => Math.random() - 0.5);
        return {
            id: null,
            name: `Đề ngẫu nhiên hạng ${licenseType}`,
            totalQuestions: allSelectedQuestions.length,
            questions: allSelectedQuestions.map(q => ({
                id: q.id,
                content: q.content,
                explanation: q.explanation,
                isParalysis: q.isParalysis,
                mediaUrl: q.mediaUrl.getValue(),
                mediaType: q.mediaType,
                group: q.group,
                answers: q.answers.map(a => ({
                    id: a.id,
                    content: a.content,
                    isCorrect: a.isCorrect
                }))
            }))
        };
    }
};
exports.GenerateRandomExamUseCase = GenerateRandomExamUseCase;
exports.GenerateRandomExamUseCase = GenerateRandomExamUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IExamSetRepository')),
    __metadata("design:paramtypes", [Object])
], GenerateRandomExamUseCase);
//# sourceMappingURL=generate-random-exam.use-case.js.map