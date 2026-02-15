import { RegisterUseCase } from '../../application/use-cases/auth/register.use-case';
import { LoginUseCase } from '../../application/use-cases/auth/login.use-case';
import { VerifyAccountUseCase } from '../../application/use-cases/auth/verify-account.use-case';
import { ForgotPasswordUseCase } from '../../application/use-cases/auth/forgot-password.use-case';
import { ResetPasswordUseCase } from '../../application/use-cases/auth/reset-password.use-case';
import { ChangePasswordUseCase } from '../../application/use-cases/auth/change-password.use-case';
import { RegisterRequestDto } from '../../application/dtos/auth/register-request.dto';
import { LoginRequestDto } from '../../application/dtos/auth/login-request.dto';
import { JwtPayload } from '../../application/interfaces/auth-service.interface';
import { VerifyAccountRequestDto } from 'src/application/dtos/auth/verify-account-request.dto';
import { ForgotPasswordRequestDto } from 'src/application/dtos/auth/forgot-password.dto';
import { ResetPasswordRequestDto } from 'src/application/dtos/auth/reset-password.dto';
import { ChangePasswordRequestDto } from 'src/application/dtos/auth/change-password-request.dto';
export declare class AuthController {
    private readonly registerUseCase;
    private readonly loginUseCase;
    private readonly verifyUseCase;
    private readonly forgotPasswordUseCase;
    private readonly resetPasswordUseCase;
    private readonly changePasswordUseCase;
    constructor(registerUseCase: RegisterUseCase, loginUseCase: LoginUseCase, verifyUseCase: VerifyAccountUseCase, forgotPasswordUseCase: ForgotPasswordUseCase, resetPasswordUseCase: ResetPasswordUseCase, changePasswordUseCase: ChangePasswordUseCase);
    register(dto: RegisterRequestDto): Promise<import("../../application/dtos/user/user-response.dto").UserResponseDto>;
    login(dto: LoginRequestDto): Promise<import("../../application/dtos/auth/auth-response.dto").AuthResponseDto>;
    verify(dto: VerifyAccountRequestDto): Promise<boolean>;
    forgotPassword(dto: ForgotPasswordRequestDto): Promise<void>;
    resetPassword(dto: ResetPasswordRequestDto): Promise<void>;
    changePassword(user: JwtPayload, dto: ChangePasswordRequestDto): Promise<void>;
}
