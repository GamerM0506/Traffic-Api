import { User as PrismaUser } from '@prisma/client';
import { User as UserEntity } from '../../domain/entities/user.entity';
import { Email, Password, Url } from '../../domain/value-objects';

export class UserMapper {
    static toDomain(raw: PrismaUser): UserEntity {
        return new UserEntity(
            raw.id,
            new Email(raw.email),
            new Password(raw.password),
            raw.fullName,
            new Url(raw.avatarUrl),
            raw.createdAt,
            raw.updatedAt,
            raw.refreshToken,
            raw.isVerified,
            raw.verificationCode
        );
    }

    static toPersistence(entity: UserEntity): any {
        return {
            email: entity.email.getValue(),
            password: entity.password.getValue(),
            fullName: entity.fullName,
            avatarUrl: entity.avatarUrl.getValue(),
            refreshToken: entity.refreshToken,
            isVerified: entity.isVerified,
            verificationCode: entity.verificationCode,
        };
    }
}