import { VerifyAccountRequestDto } from '../../dtos/auth/verify-account-request.dto';
import { IUserRepository } from '../../../domain/repositories';
import { Email } from '../../../domain/value-objects';
import { User } from '../../../domain/entities/user.entity';
import { UserNotFoundException } from '../../../domain/exceptions';
import { InvalidVerificationCodeException } from '../../../domain/exceptions/invalid-verification-code.exception';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class VerifyAccountUseCase {
    constructor(
        @Inject('IUserRepository') private readonly userRepo: IUserRepository
    ) { }

    async execute(dto: VerifyAccountRequestDto): Promise<boolean> {
        const emailVo = new Email(dto.email);

        const user = await this.userRepo.findByEmail(emailVo);
        if (!user) {
            throw new UserNotFoundException(dto.email);
        }

        if (user.verificationCode !== dto.code) {
            throw new InvalidVerificationCodeException();
        }

        const verifiedUser = new User(
            user.id,
            user.email,
            user.password,
            user.fullName,
            user.avatarUrl,
            user.createdAt,
            user.updatedAt,
            user.refreshToken,
            true,
            null
        );

        await this.userRepo.save(verifiedUser);
        return true;
    }
}