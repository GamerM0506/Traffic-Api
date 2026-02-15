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
exports.VerifyAccountUseCase = void 0;
const value_objects_1 = require("../../../domain/value-objects");
const user_entity_1 = require("../../../domain/entities/user.entity");
const exceptions_1 = require("../../../domain/exceptions");
const invalid_verification_code_exception_1 = require("../../../domain/exceptions/invalid-verification-code.exception");
const common_1 = require("@nestjs/common");
let VerifyAccountUseCase = class VerifyAccountUseCase {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async execute(dto) {
        const emailVo = new value_objects_1.Email(dto.email);
        const user = await this.userRepo.findByEmail(emailVo);
        if (!user) {
            throw new exceptions_1.UserNotFoundException(dto.email);
        }
        if (user.verificationCode !== dto.code) {
            throw new invalid_verification_code_exception_1.InvalidVerificationCodeException();
        }
        const verifiedUser = new user_entity_1.User(user.id, user.email, user.password, user.fullName, user.avatarUrl, user.createdAt, user.updatedAt, user.refreshToken, true, null);
        await this.userRepo.save(verifiedUser);
        return true;
    }
};
exports.VerifyAccountUseCase = VerifyAccountUseCase;
exports.VerifyAccountUseCase = VerifyAccountUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __metadata("design:paramtypes", [Object])
], VerifyAccountUseCase);
//# sourceMappingURL=verify-account.use-case.js.map