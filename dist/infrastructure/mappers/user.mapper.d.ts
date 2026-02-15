import { User as PrismaUser } from '@prisma/client';
import { User as UserEntity } from '../../domain/entities/user.entity';
export declare class UserMapper {
    static toDomain(raw: PrismaUser): UserEntity;
    static toPersistence(entity: UserEntity): any;
}
