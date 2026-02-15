import { PrismaService } from '../persistence/prisma.service';
import { IUserRepository } from '../../domain/repositories';
import { User } from '../../domain/entities/user.entity';
import { Email } from '../../domain/value-objects';
export declare class PrismaUserRepository implements IUserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: Email): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    save(user: User): Promise<User>;
    updateRefreshToken(id: number, token: string | null): Promise<void>;
}
