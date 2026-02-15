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
exports.LoginUseCase = void 0;
const exceptions_1 = require("../../../domain/exceptions");
const value_objects_1 = require("../../../domain/value-objects");
const common_1 = require("@nestjs/common");
let LoginUseCase = class LoginUseCase {
    constructor(userRepo, authService) {
        this.userRepo = userRepo;
        this.authService = authService;
    }
    async execute(dto) {
        const emailVo = new value_objects_1.Email(dto.email);
        const user = await this.userRepo.findByEmail(emailVo);
        if (!user) {
            throw new exceptions_1.InvalidCredentialsException();
        }
        const isMatch = await this.authService.comparePassword(dto.password, user.password.getValue());
        if (!isMatch) {
            throw new exceptions_1.InvalidCredentialsException();
        }
        if (!user.isVerified) {
            throw new common_1.UnauthorizedException('Tài khoản chưa được xác thực. Vui lòng kiểm tra lại');
        }
        const payload = {
            sub: user.id,
            email: user.email.getValue(),
            fullName: user.fullName ?? '',
        };
        const accessToken = this.authService.generateAccessToken(payload);
        const refreshToken = this.authService.generateRefreshToken(payload);
        await this.userRepo.updateRefreshToken(user.id, refreshToken);
        return {
            accessToken,
            refreshToken,
            user: {
                id: user.id,
                email: user.email.getValue(),
                fullName: user.fullName
            }
        };
    }
};
exports.LoginUseCase = LoginUseCase;
exports.LoginUseCase = LoginUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __param(1, (0, common_1.Inject)('IAuthService')),
    __metadata("design:paramtypes", [Object, Object])
], LoginUseCase);
//# sourceMappingURL=login.use-case.js.map