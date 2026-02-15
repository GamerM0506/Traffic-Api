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
exports.ForgotPasswordUseCase = void 0;
const entities_1 = require("../../../domain/entities");
const value_objects_1 = require("../../../domain/value-objects");
const common_1 = require("@nestjs/common");
let ForgotPasswordUseCase = class ForgotPasswordUseCase {
    constructor(userRepo, emailService) {
        this.userRepo = userRepo;
        this.emailService = emailService;
    }
    async execute(dto) {
        const user = await this.userRepo.findByEmail(new value_objects_1.Email(dto.email));
        if (!user)
            return;
        const resetOtp = Math.floor(100000 + Math.random() * 900000).toString();
        const userWithResetToken = new entities_1.User(user.id, user.email, user.password, user.fullName, user.avatarUrl, user.createdAt, user.updatedAt, user.refreshToken, user.isVerified, resetOtp);
        await this.userRepo.save(userWithResetToken);
        await this.emailService.sendPasswordResetEmail(user.email.getValue(), resetOtp);
    }
};
exports.ForgotPasswordUseCase = ForgotPasswordUseCase;
exports.ForgotPasswordUseCase = ForgotPasswordUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __param(1, (0, common_1.Inject)('IEmailService')),
    __metadata("design:paramtypes", [Object, Object])
], ForgotPasswordUseCase);
//# sourceMappingURL=forgot-password.use-case.js.map