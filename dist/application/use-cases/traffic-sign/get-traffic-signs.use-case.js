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
exports.GetTrafficSignsByGroupUseCase = void 0;
const common_1 = require("@nestjs/common");
let GetTrafficSignsByGroupUseCase = class GetTrafficSignsByGroupUseCase {
    constructor(trafficSignRepository) {
        this.trafficSignRepository = trafficSignRepository;
    }
    async execute(group) {
        const signs = await this.trafficSignRepository.findByGroup(group);
        return signs.map(sign => ({
            id: sign.id,
            code: sign.code,
            name: sign.name,
            description: sign.description,
            imageUrl: sign.imageUrl.getValue(),
            group: sign.group,
        }));
    }
};
exports.GetTrafficSignsByGroupUseCase = GetTrafficSignsByGroupUseCase;
exports.GetTrafficSignsByGroupUseCase = GetTrafficSignsByGroupUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ITrafficSignRepository')),
    __metadata("design:paramtypes", [Object])
], GetTrafficSignsByGroupUseCase);
//# sourceMappingURL=get-traffic-signs.use-case.js.map