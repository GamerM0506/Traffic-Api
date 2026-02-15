export interface JwtPayload {
    sub: number;
    email: string;
    fullName: string;
}
export interface IAuthService {
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
    generateAccessToken(payload: JwtPayload): string;
    generateRefreshToken(payload: JwtPayload): string;
    verifyToken(token: string): JwtPayload | null;
}
