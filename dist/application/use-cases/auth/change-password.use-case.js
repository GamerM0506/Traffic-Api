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
exports.ChangePasswordUseCase = void 0;
const invalid_old_password_exception_1 = require("../../../domain/exceptions/invalid-old-password.exception");
const entities_1 = require("../../../domain/entities");
const value_objects_1 = require("../../../domain/value-objects");
const exceptions_1 = require("../../../domain/exceptions");
const common_1 = require("@nestjs/common");
let ChangePasswordUseCase = class ChangePasswordUseCase {
    constructor(userRepo, authService, emailService) {
        this.userRepo = userRepo;
        this.authService = authService;
        this.emailService = emailService;
    }
    async execute(userId, dto) {
        const user = await this.userRepo.findById(userId);
        if (!user) {
            throw new exceptions_1.UserNotFoundException(userId.toString());
        }
        const isOldPasswordMatch = await this.authService.comparePassword(dto.oldPassword, user.password.getValue());
        if (!isOldPasswordMatch) {
            throw new invalid_old_password_exception_1.InvalidOldPasswordException();
        }
        const hashedNewPassword = await this.authService.hashPassword(dto.newPassword);
        const updatedUser = new entities_1.User(user.id, user.email, new value_objects_1.Password(hashedNewPassword), user.fullName, user.avatarUrl, user.createdAt, new Date(), user.refreshToken, user.isVerified);
        await this.userRepo.save(updatedUser);
        await this.emailService.sendPasswordChangedNotification(user.email.getValue());
    }
};
exports.ChangePasswordUseCase = ChangePasswordUseCase;
exports.ChangePasswordUseCase = ChangePasswordUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __param(1, (0, common_1.Inject)('IAuthService')),
    __param(2, (0, common_1.Inject)('IEmailService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], ChangePasswordUseCase);
//# sourceMappingURL=change-password.use-case.js.map