import { User } from "../../../domain/entities";
import { UserNotFoundException } from "../../../domain/exceptions";
import { ResetTokenInvalidException } from "../../../domain/exceptions/reset-token-invalid.exception";
import { IUserRepository } from "../../../domain/repositories";
import { Email, Password } from "../../../domain/value-objects";
import { ResetPasswordRequestDto } from "src/application/dtos/auth/reset-password.dto";
import { IAuthService } from "../../interfaces/auth-service.interface";
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ResetPasswordUseCase {
    constructor(
        @Inject('IUserRepository') private readonly userRepo: IUserRepository,
        @Inject('IAuthService') private readonly authService: IAuthService
    ) { }

    async execute(dto: ResetPasswordRequestDto): Promise<void> {
        const user = await this.userRepo.findByEmail(new Email(dto.email));
        if (!user) throw new UserNotFoundException(dto.email);

        if (user.verificationCode !== dto.otpCode) {
            throw new ResetTokenInvalidException();
        }

        const hashedPass = await this.authService.hashPassword(dto.newPassword);

        const updatedUser = new User(
            user.id,
            user.email,
            new Password(hashedPass),
            user.fullName,
            user.avatarUrl,
            user.createdAt, new Date(),
            null,
            true,
            null
        );

        await this.userRepo.save(updatedUser);
    }
}