"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const change_password_use_case_1 = require("../../application/use-cases/auth/change-password.use-case");
const forgot_password_use_case_1 = require("../../application/use-cases/auth/forgot-password.use-case");
const login_use_case_1 = require("../../application/use-cases/auth/login.use-case");
const register_use_case_1 = require("../../application/use-cases/auth/register.use-case");
const reset_password_use_case_1 = require("../../application/use-cases/auth/reset-password.use-case");
const verify_account_use_case_1 = require("../../application/use-cases/auth/verify-account.use-case");
const get_license_categories_use_case_1 = require("../../application/use-cases/license/get-license-categories.use-case");
const auth_controller_1 = require("../../presentation/controllers/auth.controller");
const prisma_service_1 = require("../persistence/prisma.service");
const license_repository_1 = require("../repositories/license.repository");
const prisma_user_repository_1 = require("../repositories/prisma-user.repository");
const jwt_auth_service_1 = require("../services/jwt-auth.service");
const nodemailer_email_service_1 = require("../services/nodemailer-email.service");
const license_controller_1 = require("../../presentation/controllers/license.controller");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: 'IUserRepository',
                useClass: prisma_user_repository_1.PrismaUserRepository,
            },
            {
                provide: 'ILicenseRepository',
                useClass: license_repository_1.LicenseRepository,
            },
            {
                provide: 'IAuthService',
                useClass: jwt_auth_service_1.JwtAuthService,
            },
            {
                provide: 'IEmailService',
                useClass: nodemailer_email_service_1.NodemailerEmailService,
            },
            register_use_case_1.RegisterUseCase,
            login_use_case_1.LoginUseCase,
            verify_account_use_case_1.VerifyAccountUseCase,
            change_password_use_case_1.ChangePasswordUseCase,
            forgot_password_use_case_1.ForgotPasswordUseCase,
            reset_password_use_case_1.ResetPasswordUseCase,
            get_license_categories_use_case_1.GetLicenseCategoriesUseCase,
        ],
        controllers: [
            auth_controller_1.AuthController,
            license_controller_1.LicenseController
        ],
        exports: [
            register_use_case_1.RegisterUseCase,
            login_use_case_1.LoginUseCase,
            verify_account_use_case_1.VerifyAccountUseCase,
            change_password_use_case_1.ChangePasswordUseCase,
            forgot_password_use_case_1.ForgotPasswordUseCase,
            reset_password_use_case_1.ResetPasswordUseCase,
            get_license_categories_use_case_1.GetLicenseCategoriesUseCase,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map