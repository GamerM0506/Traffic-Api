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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const register_use_case_1 = require("../../application/use-cases/auth/register.use-case");
const login_use_case_1 = require("../../application/use-cases/auth/login.use-case");
const verify_account_use_case_1 = require("../../application/use-cases/auth/verify-account.use-case");
const forgot_password_use_case_1 = require("../../application/use-cases/auth/forgot-password.use-case");
const reset_password_use_case_1 = require("../../application/use-cases/auth/reset-password.use-case");
const change_password_use_case_1 = require("../../application/use-cases/auth/change-password.use-case");
const register_request_dto_1 = require("../../application/dtos/auth/register-request.dto");
const login_request_dto_1 = require("../../application/dtos/auth/login-request.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const verify_account_request_dto_1 = require("../../application/dtos/auth/verify-account-request.dto");
const forgot_password_dto_1 = require("../../application/dtos/auth/forgot-password.dto");
const reset_password_dto_1 = require("../../application/dtos/auth/reset-password.dto");
const change_password_request_dto_1 = require("../../application/dtos/auth/change-password-request.dto");
let AuthController = class AuthController {
    constructor(registerUseCase, loginUseCase, verifyUseCase, forgotPasswordUseCase, resetPasswordUseCase, changePasswordUseCase) {
        this.registerUseCase = registerUseCase;
        this.loginUseCase = loginUseCase;
        this.verifyUseCase = verifyUseCase;
        this.forgotPasswordUseCase = forgotPasswordUseCase;
        this.resetPasswordUseCase = resetPasswordUseCase;
        this.changePasswordUseCase = changePasswordUseCase;
    }
    async register(dto) {
        return await this.registerUseCase.execute(dto);
    }
    async login(dto) {
        return await this.loginUseCase.execute(dto);
    }
    async verify(dto) {
        return await this.verifyUseCase.execute(dto);
    }
    async forgotPassword(dto) {
        return await this.forgotPasswordUseCase.execute(dto);
    }
    async resetPassword(dto) {
        return await this.resetPasswordUseCase.execute(dto);
    }
    async changePassword(user, dto) {
        return await this.changePasswordUseCase.execute(user.sub, dto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_request_dto_1.RegisterRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_dto_1.LoginRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_account_request_dto_1.VerifyAccountRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('change-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_request_dto_1.ChangePasswordRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [register_use_case_1.RegisterUseCase,
        login_use_case_1.LoginUseCase,
        verify_account_use_case_1.VerifyAccountUseCase,
        forgot_password_use_case_1.ForgotPasswordUseCase,
        reset_password_use_case_1.ResetPasswordUseCase,
        change_password_use_case_1.ChangePasswordUseCase])
], AuthController);
//# sourceMappingURL=auth.controller.js.map