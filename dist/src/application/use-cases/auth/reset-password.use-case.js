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
exports.ResetPasswordUseCase = void 0;
const entities_1 = require("../../../domain/entities");
const exceptions_1 = require("../../../domain/exceptions");
const reset_token_invalid_exception_1 = require("../../../domain/exceptions/reset-token-invalid.exception");
const value_objects_1 = require("../../../domain/value-objects");
const common_1 = require("@nestjs/common");
let ResetPasswordUseCase = class ResetPasswordUseCase {
    constructor(userRepo, authService) {
        this.userRepo = userRepo;
        this.authService = authService;
    }
    async execute(dto) {
        const user = await this.userRepo.findByEmail(new value_objects_1.Email(dto.email));
        if (!user)
            throw new exceptions_1.UserNotFoundException(dto.email);
        if (user.verificationCode !== dto.otpCode) {
            throw new reset_token_invalid_exception_1.ResetTokenInvalidException();
        }
        const hashedPass = await this.authService.hashPassword(dto.newPassword);
        const updatedUser = new entities_1.User(user.id, user.email, new value_objects_1.Password(hashedPass), user.fullName, user.avatarUrl, user.createdAt, new Date(), null, true, null);
        await this.userRepo.save(updatedUser);
    }
};
exports.ResetPasswordUseCase = ResetPasswordUseCase;
exports.ResetPasswordUseCase = ResetPasswordUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __param(1, (0, common_1.Inject)('IAuthService')),
    __metadata("design:paramtypes", [Object, Object])
], ResetPasswordUseCase);
//# sourceMappingURL=reset-password.use-case.js.map