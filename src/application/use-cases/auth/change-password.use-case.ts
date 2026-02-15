import { ChangePasswordRequestDto } from '../../dtos/auth/change-password-request.dto';
import { IUserRepository } from '../../../domain/repositories';
import { IAuthService } from '../../interfaces/auth-service.interface';
import { IEmailService } from '../../interfaces/email-service.interface';
import { InvalidOldPasswordException } from '../../../domain/exceptions/invalid-old-password.exception';
import { User } from '../../../domain/entities';
import { Password } from '../../../domain/value-objects';
import { UserNotFoundException } from '../../../domain/exceptions';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ChangePasswordUseCase {
    constructor(
        @Inject('IUserRepository') private readonly userRepo: IUserRepository,
        @Inject('IAuthService') private readonly authService: IAuthService,
        @Inject('IEmailService') private readonly emailService: IEmailService
    ) { }

    async execute(userId: number, dto: ChangePasswordRequestDto): Promise<void> {
        const user = await this.userRepo.findById(userId);
        if (!user) {
            throw new UserNotFoundException(userId.toString());
        }

        const isOldPasswordMatch = await this.authService.comparePassword(
            dto.oldPassword,
            user.password.getValue()
        );

        if (!isOldPasswordMatch) {
            throw new InvalidOldPasswordException();
        }

        const hashedNewPassword = await this.authService.hashPassword(dto.newPassword);

        const updatedUser = new User(
            user.id,
            user.email,
            new Password(hashedNewPassword),
            user.fullName,
            user.avatarUrl,
            user.createdAt,
            new Date(),
            user.refreshToken,
            user.isVerified
        );

        await this.userRepo.save(updatedUser);

        await this.emailService.sendPasswordChangedNotification(user.email.getValue());
    }
}