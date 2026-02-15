import { Injectable } from '@nestjs/common';
import { PrismaService } from '../persistence/prisma.service';
import { IUserRepository } from '../../domain/repositories';
import { User } from '../../domain/entities/user.entity';
import { UserMapper } from '../mappers/user.mapper';
import { Email } from '../../domain/value-objects';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findByEmail(email: Email): Promise<User | null> {
        const rawUser = await this.prisma.user.findUnique({
            where: { email: email.getValue() },
        });
        if (!rawUser) return null;
        return UserMapper.toDomain(rawUser);
    }

    async findById(id: number): Promise<User | null> {
        const rawUser = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!rawUser) return null;
        return UserMapper.toDomain(rawUser);
    }

    async save(user: User): Promise<User> {
        const data = UserMapper.toPersistence(user);
        const savedUser = await this.prisma.user.upsert({
            where: { id: user.id || -1 },
            update: data,
            create: data,
        });
        return UserMapper.toDomain(savedUser);
    }

    async updateRefreshToken(id: number, token: string | null): Promise<void> {
        await this.prisma.user.update({
            where: { id },
            data: { refreshToken: token },
        });
    }
}