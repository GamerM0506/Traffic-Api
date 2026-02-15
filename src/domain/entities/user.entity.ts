import { Email, Password, Url } from '../value-objects';

export class User {
    constructor(
        public readonly id: number | null,
        public readonly email: Email,
        public readonly password: Password,
        public readonly fullName: string | null,
        public readonly avatarUrl: Url,
        public readonly createdAt?: Date,
        public readonly updatedAt?: Date,
        public readonly refreshToken: string | null = null,
        public readonly isVerified: boolean = false,
        public readonly verificationCode: string | null = null,
    ) { }

    public isNewUser(): boolean {
        if (!this.createdAt) return true;
        const oneDayInMs = 24 * 60 * 60 * 1000;
        return (new Date().getTime() - this.createdAt.getTime()) < oneDayInMs;
    }

    public canTakeExam(): boolean {
        return this.isVerified;
    }
}