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
exports.TrafficSignRepository = void 0;
const common_1 = require("@nestjs/common");
const traffic_sign_mapper_1 = require("../mappers/traffic-sign.mapper");
const prisma_service_1 = require("../persistence/prisma.service");
let TrafficSignRepository = class TrafficSignRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllCategories() {
        const groups = await this.prisma.trafficSign.findMany({
            distinct: ['group'],
            select: { group: true },
        });
        return groups.map((item) => item.group);
    }
    async findByGroup(group) {
        const rawSigns = await this.prisma.trafficSign.findMany({
            where: {
                group: group
            },
            orderBy: { code: 'asc' }
        });
        return rawSigns.map((s) => traffic_sign_mapper_1.TrafficSignMapper.toDomain(s));
    }
    async findAll() {
        const rawSigns = await this.prisma.trafficSign.findMany();
        return rawSigns.map((s) => traffic_sign_mapper_1.TrafficSignMapper.toDomain(s));
    }
};
exports.TrafficSignRepository = TrafficSignRepository;
exports.TrafficSignRepository = TrafficSignRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TrafficSignRepository);
//# sourceMappingURL=traffic-sign.repository.js.map