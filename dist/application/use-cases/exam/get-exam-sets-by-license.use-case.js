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
exports.GetExamSetsByLicenseUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetExamSetsByLicenseUseCase = class GetExamSetsByLicenseUseCase {
    constructor(examSetRepository) {
        this.examSetRepository = examSetRepository;
    }
    async execute(licenseType) {
        const examSets = await this.examSetRepository.findByLicenseType(licenseType);
        return examSets.map((set) => {
            if (set.id === null) {
                throw new Error(`ExamSet ${set.name} is missing an ID`);
            }
            return {
                id: set.id,
                title: set.name,
                description: set.description || `Bộ đề thi sát hạch hạng ${licenseType}`,
                questionCount: set.totalQuestions || 25,
            };
        });
    }
};
exports.GetExamSetsByLicenseUseCase = GetExamSetsByLicenseUseCase;
exports.GetExamSetsByLicenseUseCase = GetExamSetsByLicenseUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IExamSetRepository')),
    __metadata("design:paramtypes", [Object])
], GetExamSetsByLicenseUseCase);
//# sourceMappingURL=get-exam-sets-by-license.use-case.js.map