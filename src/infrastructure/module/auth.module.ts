import { Module } from '@nestjs/common';
import { PrismaService } from '../persistence/prisma.service';
import { PrismaUserRepository } from '../repositories/prisma-user.repository';
import { JwtAuthService } from '../services/jwt-auth.service';
import { NodemailerEmailService } from '../services/nodemailer-email.service';
import { RegisterUseCase } from '../../application/use-cases/auth/register.use-case';
import { LoginUseCase } from '../../application/use-cases/auth/login.use-case';
import { VerifyAccountUseCase } from '../../application/use-cases/auth/verify-account.use-case';
import { ChangePasswordUseCase } from '../../application/use-cases/auth/change-password.use-case';
import { ForgotPasswordUseCase } from '../../application/use-cases/auth/forgot-password.use-case';
import { ResetPasswordUseCase } from '../../application/use-cases/auth/reset-password.use-case';
import { AuthController } from 'src/presentation/controllers/auth.controller';

@Module({
    providers: [
        PrismaService,
        {
            provide: 'IUserRepository',
            useClass: PrismaUserRepository,
        },
        {
            provide: 'IAuthService',
            useClass: JwtAuthService,
        },
        {
            provide: 'IEmailService',
            useClass: NodemailerEmailService,
        },
        RegisterUseCase,
        LoginUseCase,
        VerifyAccountUseCase,
        ChangePasswordUseCase,
        ForgotPasswordUseCase,
        ResetPasswordUseCase,
    ],
    controllers: [AuthController],
    exports: [
        RegisterUseCase,
        LoginUseCase,
        VerifyAccountUseCase,
        ChangePasswordUseCase,
        ForgotPasswordUseCase,
        ResetPasswordUseCase,
    ],
})
export class AuthModule { }