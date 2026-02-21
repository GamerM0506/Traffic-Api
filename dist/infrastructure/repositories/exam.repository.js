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
exports.ExamSetRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../persistence/prisma.service");
const exam_set_mapper_1 = require("../mappers/exam-set.mapper");
let ExamSetRepository = class ExamSetRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        const rawData = await this.prisma.examSet.findUnique({
            where: { id },
            include: {
                questions: { include: { question: { include: { answers: true } } } }
            }
        });
        if (!rawData)
            return null;
        return exam_set_mapper_1.ExamSetMapper.toDomain(rawData);
    }
    async findByLicenseType(type) {
        const rawSets = await this.prisma.examSet.findMany({
            where: { licenseType: type }
        });
        return rawSets.map(set => exam_set_mapper_1.ExamSetMapper.toDomain(set));
    }
    async findRandom(params) {
        const { licenseType, group, limit, isParalysis } = params;
        const questionsRaw = await this.prisma.question.findMany({
            where: {
                group: group,
                isParalysis: isParalysis !== undefined ? isParalysis : undefined,
                examSetQuestions: {
                    some: {
                        examSet: {
                            licenseType: licenseType
                        }
                    }
                }
            },
            include: {
                answers: true
            }
        });
        if (!questionsRaw.length)
            return [];
        return questionsRaw
            .sort(() => Math.random() - 0.5)
            .slice(0, limit)
            .map(q => exam_set_mapper_1.ExamSetMapper.toDomainQuestion(q));
    }
};
exports.ExamSetRepository = ExamSetRepository;
exports.ExamSetRepository = ExamSetRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExamSetRepository);
//# sourceMappingURL=exam.repository.js.map