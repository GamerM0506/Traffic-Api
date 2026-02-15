import { Email, Password, Url } from '../value-objects';
export declare class User {
    readonly id: number | null;
    readonly email: Email;
    readonly password: Password;
    readonly fullName: string | null;
    readonly avatarUrl: Url;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    readonly refreshToken: string | null;
    readonly isVerified: boolean;
    readonly verificationCode: string | null;
    constructor(id: number | null, email: Email, password: Password, fullName: string | null, avatarUrl: Url, createdAt?: Date, updatedAt?: Date, refreshToken?: string | null, isVerified?: boolean, verificationCode?: string | null);
    isNewUser(): boolean;
    canTakeExam(): boolean;
}
