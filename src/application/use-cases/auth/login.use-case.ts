import { AuthResponseDto } from '../../dtos/auth/auth-response.dto';
import { LoginRequestDto } from '../../dtos/auth/login-request.dto';
import { IUserRepository } from '../../../domain/repositories';
import { IAuthService } from '../../interfaces/auth-service.interface';
import { InvalidCredentialsException } from '../../../domain/exceptions';
import { Email } from '../../../domain/value-objects';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LoginUseCase {
    constructor(
        @Inject('IUserRepository') private readonly userRepo: IUserRepository,
        @Inject('IAuthService') private readonly authService: IAuthService
    ) { }

    async execute(dto: LoginRequestDto): Promise<AuthResponseDto> {
        const emailVo = new Email(dto.email);

        const user = await this.userRepo.findByEmail(emailVo);
        if (!user) {
            throw new InvalidCredentialsException();
        }

        const isMatch = await this.authService.comparePassword(
            dto.password,
            user.password.getValue()
        );
        if (!isMatch) {
            throw new InvalidCredentialsException();
        }

        if (!user.isVerified) {
            throw new UnauthorizedException('Tài khoản chưa được xác thực. Vui lòng kiểm tra lại');
        }

        const payload = { 
            sub: user.id!, 
            email: user.email.getValue(),
            fullName: user.fullName ?? '',
        };

        const accessToken = this.authService.generateAccessToken(payload);
        const refreshToken = this.authService.generateRefreshToken(payload);

        await this.userRepo.updateRefreshToken(user.id!, refreshToken);

        return {
            accessToken,
            refreshToken,
            user: {
                id: user.id!,
                email: user.email.getValue(),
                fullName: user.fullName
            }
        };
    }
}