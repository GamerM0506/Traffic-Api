import { Module } from '@nestjs/common';
import { ChangePasswordUseCase } from 'src/application/use-cases/auth/change-password.use-case';
import { ForgotPasswordUseCase } from 'src/application/use-cases/auth/forgot-password.use-case';
import { LoginUseCase } from 'src/application/use-cases/auth/login.use-case';
import { RegisterUseCase } from 'src/application/use-cases/auth/register.use-case';
import { ResetPasswordUseCase } from 'src/application/use-cases/auth/reset-password.use-case';
import { VerifyAccountUseCase } from 'src/application/use-cases/auth/verify-account.use-case';
import { GetLicenseCategoriesUseCase } from 'src/application/use-cases/license/get-license-categories.use-case';
import { AuthController } from 'src/presentation/controllers/auth.controller';
import { PrismaService } from '../persistence/prisma.service';
import { LicenseRepository } from '../repositories/license.repository';
import { PrismaUserRepository } from '../repositories/prisma-user.repository';
import { JwtAuthService } from '../services/jwt-auth.service';
import { NodemailerEmailService } from '../services/nodemailer-email.service';
import { LicenseController } from 'src/presentation/controllers/license.controller';
import { ExamController } from 'src/presentation/controllers/exam.controller';
import { GetExamSetsByLicenseUseCase } from 'src/application/use-cases/exam/get-exam-sets-by-license.use-case';
import { GetExamSetDetailUseCase } from 'src/application/use-cases/exam/get-exam-set-detail.use-case';
import { ExamSetRepository } from '../repositories/exam.repository';
import { TestHistoryRepository } from '../repositories/test-history.repository';
import { GetLatestResultUseCase } from 'src/application/use-cases/test-history/get-latest-result.use-case';
import { SaveTestResultUseCase } from 'src/application/use-cases/test-history/save-test-result.use-case';
import { TestHistoryController } from 'src/presentation/controllers/test-history.controller';
import { GetTestHistoryDetailUseCase } from 'src/application/use-cases/test-history/get-test-history-detail.use-case';


@Module({
    providers: [
        PrismaService,
        {
            provide: 'IUserRepository',
            useClass: PrismaUserRepository,
        },
        {
            provide: 'ILicenseRepository',
            useClass: LicenseRepository,
        },
        {
            provide: 'IAuthService',
            useClass: JwtAuthService,
        },
        {
            provide: 'IEmailService',
            useClass: NodemailerEmailService,
        },
        {
            provide: 'IExamSetRepository',
            useClass: ExamSetRepository
        },
        {
            provide:'ITestHistoryRepository',
            useClass: TestHistoryRepository
        },
        RegisterUseCase,
        LoginUseCase,
        VerifyAccountUseCase,
        ChangePasswordUseCase,
        ForgotPasswordUseCase,
        ResetPasswordUseCase,
        GetLicenseCategoriesUseCase,
        GetExamSetsByLicenseUseCase,
        GetExamSetDetailUseCase,
        GetLatestResultUseCase,
        SaveTestResultUseCase,
        GetTestHistoryDetailUseCase
    ],
    controllers: [
        AuthController,
        LicenseController,
        ExamController,
        TestHistoryController
    ],
    exports: [
        RegisterUseCase,
        LoginUseCase,
        VerifyAccountUseCase,
        ChangePasswordUseCase,
        ForgotPasswordUseCase,
        ResetPasswordUseCase,
        GetLicenseCategoriesUseCase,
        GetLatestResultUseCase,
        SaveTestResultUseCase,
        GetTestHistoryDetailUseCase
    ],
})
export class AuthModule { }