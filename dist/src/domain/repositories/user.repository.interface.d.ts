import { User } from '../entities/user.entity';
import { Email } from '../value-objects/email.vo';
export interface IUserRepository {
    findById(id: number): Promise<User | null>;
    findByEmail(email: Email): Promise<User | null>;
    save(user: User): Promise<User>;
    updateRefreshToken(userId: number, token: string | null): Promise<void>;
}
