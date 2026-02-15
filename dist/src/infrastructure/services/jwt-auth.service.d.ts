import { IAuthService, JwtPayload } from '../../application/interfaces/auth-service.interface';
export declare class JwtAuthService implements IAuthService {
    private readonly accessSecret;
    private readonly refreshSecret;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
    generateAccessToken(payload: JwtPayload): string;
    generateRefreshToken(payload: JwtPayload): string;
    verifyToken(token: string): JwtPayload | null;
}
