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
exports.TestHistoryRepository = void 0;
const common_1 = require("@nestjs/common");
const test_history_mapper_1 = require("../mappers/test-history.mapper");
const prisma_service_1 = require("../persistence/prisma.service");
let TestHistoryRepository = class TestHistoryRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async save(history) {
        const persistenceData = test_history_mapper_1.TestHistoryMapper.toPersistence(history);
        const raw = await this.prisma.testHistory.create({
            data: persistenceData,
            include: { details: true }
        });
        return test_history_mapper_1.TestHistoryMapper.toDomain(raw);
    }
    async getLatestResult(userId, licenseType) {
        const raw = await this.prisma.testHistory.findFirst({
            where: { userId, licenseType },
            orderBy: { createdAt: 'desc' },
            include: { details: true }
        });
        return raw ? test_history_mapper_1.TestHistoryMapper.toDomain(raw) : null;
    }
    async findByUserId(userId) {
        const list = await this.prisma.testHistory.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
        return list.map(item => test_history_mapper_1.TestHistoryMapper.toDomain(item));
    }
    async findById(id) {
        const raw = await this.prisma.testHistory.findUnique({
            where: { id },
            include: {
                details: true
            }
        });
        if (!raw)
            return null;
        return test_history_mapper_1.TestHistoryMapper.toDomain(raw);
    }
};
exports.TestHistoryRepository = TestHistoryRepository;
exports.TestHistoryRepository = TestHistoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestHistoryRepository);
//# sourceMappingURL=test-history.repository.js.map