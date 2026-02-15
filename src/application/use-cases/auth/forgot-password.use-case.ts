import { User } from "../../../domain/entities";
import { IUserRepository } from "../../../domain/repositories";
import { Email } from "../../../domain/value-objects";
import { ForgotPasswordRequestDto } from "../../dtos/auth/forgot-password.dto";
import { IEmailService } from "../../interfaces/email-service.interface";
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ForgotPasswordUseCase {
    constructor(
        @Inject('IUserRepository') private readonly userRepo: IUserRepository,
        @Inject('IEmailService') private readonly emailService: IEmailService
    ) { }

    async execute(dto: ForgotPasswordRequestDto): Promise<void> {
        const user = await this.userRepo.findByEmail(new Email(dto.email));

        if (!user) return;

        const resetOtp = Math.floor(100000 + Math.random() * 900000).toString();

        const userWithResetToken = new User(
            user.id,
            user.email,
            user.password,
            user.fullName,
            user.avatarUrl,
            user.createdAt,
            user.updatedAt,
            user.refreshToken,
            user.isVerified,
            resetOtp
        );
        await this.userRepo.save(userWithResetToken);

        await this.emailService.sendPasswordResetEmail(user.email.getValue(), resetOtp);
    }
}