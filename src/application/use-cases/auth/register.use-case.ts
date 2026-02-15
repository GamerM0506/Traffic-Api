import { RegisterRequestDto } from '../../dtos/auth/register-request.dto';
import { IUserRepository } from '../../../domain/repositories';
import { IAuthService } from '../../interfaces/auth-service.interface';
import { Email, Password, Url } from '../../../domain/value-objects';
import { UserResponseDto } from '../../dtos/user/user-response.dto';
import { User } from '../../../domain/entities/user.entity';
import { UserAlreadyExistsException } from '../../../domain/exceptions/user-already-exists.exception';
import { IEmailService } from '../../interfaces/email-service.interface';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RegisterUseCase {
    constructor(
        @Inject('IUserRepository') private readonly userRepo: IUserRepository,
        @Inject('IAuthService') private readonly authService: IAuthService,
        @Inject('IEmailService') private readonly emailService: IEmailService,
    ) { }

    async execute(dto: RegisterRequestDto): Promise<UserResponseDto> {
        const emailVo = new Email(dto.email);

        const existingUser = await this.userRepo.findByEmail(emailVo);
        if (existingUser) {
            throw new UserAlreadyExistsException(dto.email);
        }

        const hashedPassword = await this.authService.hashPassword(dto.password);

        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

        const newUser = new User(
            null,
            emailVo,
            new Password(hashedPassword),
            dto.fullName || null,
            new Url(null),
            undefined,
            undefined,
            null,
            false,
            otpCode
        );

        const savedUser = await this.userRepo.save(newUser);

        this.emailService.sendVerificationCode(savedUser.email.getValue(), otpCode);

        return {
            id: savedUser.id!,
            email: savedUser.email.getValue(),
            fullName: savedUser.fullName,
            otpCode: otpCode
        };
    }
}