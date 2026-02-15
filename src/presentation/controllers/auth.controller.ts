import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Patch } from '@nestjs/common';
import { RegisterUseCase } from '../../application/use-cases/auth/register.use-case';
import { LoginUseCase } from '../../application/use-cases/auth/login.use-case';
import { VerifyAccountUseCase } from '../../application/use-cases/auth/verify-account.use-case';
import { ForgotPasswordUseCase } from '../../application/use-cases/auth/forgot-password.use-case';
import { ResetPasswordUseCase } from '../../application/use-cases/auth/reset-password.use-case';
import { ChangePasswordUseCase } from '../../application/use-cases/auth/change-password.use-case';
import { RegisterRequestDto } from '../../application/dtos/auth/register-request.dto';
import { LoginRequestDto } from '../../application/dtos/auth/login-request.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CurrentUser } from '../decorators/current-user.decorator';
import { JwtPayload } from '../../application/interfaces/auth-service.interface';
import { VerifyAccountRequestDto } from 'src/application/dtos/auth/verify-account-request.dto';
import { ForgotPasswordRequestDto } from 'src/application/dtos/auth/forgot-password.dto';
import { ResetPasswordRequestDto } from 'src/application/dtos/auth/reset-password.dto';
import { ChangePasswordRequestDto } from 'src/application/dtos/auth/change-password-request.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly registerUseCase: RegisterUseCase,
        private readonly loginUseCase: LoginUseCase,
        private readonly verifyUseCase: VerifyAccountUseCase,
        private readonly forgotPasswordUseCase: ForgotPasswordUseCase,
        private readonly resetPasswordUseCase: ResetPasswordUseCase,
        private readonly changePasswordUseCase: ChangePasswordUseCase,
    ) { }

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() dto: RegisterRequestDto) {
        return await this.registerUseCase.execute(dto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() dto: LoginRequestDto) {
        return await this.loginUseCase.execute(dto);
    }

    @Post('verify')
    @HttpCode(HttpStatus.OK)
    async verify(@Body() dto: VerifyAccountRequestDto) {
        return await this.verifyUseCase.execute(dto);
    }

    @Post('forgot-password')
    @HttpCode(HttpStatus.OK)
    async forgotPassword(@Body() dto: ForgotPasswordRequestDto) {
        return await this.forgotPasswordUseCase.execute(dto);
    }

    @Post('reset-password')
    @HttpCode(HttpStatus.OK)
    async resetPassword(@Body() dto: ResetPasswordRequestDto) {
        return await this.resetPasswordUseCase.execute(dto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('change-password')
    @HttpCode(HttpStatus.OK)
    async changePassword(
        @CurrentUser() user: JwtPayload,
        @Body() dto: ChangePasswordRequestDto
    ) {
        return await this.changePasswordUseCase.execute(user.sub, dto);
    }
}