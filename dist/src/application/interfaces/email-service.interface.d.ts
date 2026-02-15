export interface IEmailService {
    sendVerificationCode(email: string, code: string): Promise<void>;
    sendPasswordResetEmail(email: string, token: string): Promise<void>;
    sendPasswordChangedNotification(email: string): Promise<void>;
}
