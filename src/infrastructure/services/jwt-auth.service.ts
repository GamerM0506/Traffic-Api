import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { IAuthService, JwtPayload } from '../../application/interfaces/auth-service.interface';

@Injectable()
export class JwtAuthService implements IAuthService {
    private readonly accessSecret = process.env.JWT_ACCESS_SECRET || 'access_secret';
    private readonly refreshSecret = process.env.JWT_REFRESH_SECRET || 'refresh_secret';

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async comparePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    generateAccessToken(payload: JwtPayload): string {
        return jwt.sign(payload, this.accessSecret, { expiresIn: '1h' });
    }

    generateRefreshToken(payload: JwtPayload): string {
        return jwt.sign(payload, this.refreshSecret, { expiresIn: '30d' });
    }

    verifyToken(token: string): JwtPayload | null {
        try {
            const decoded = jwt.verify(token, this.accessSecret);
            if (decoded && typeof decoded === 'object') {
                return (decoded as unknown) as JwtPayload;
            }
            return null;
        } catch (error) {
            return null;
        }
    }
}