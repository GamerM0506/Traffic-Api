import { IEmailService } from '../../application/interfaces/email-service.interface';
export declare class NodemailerEmailService implements IEmailService {
    private transporter;
    constructor();
    sendVerificationCode(email: string, code: string): Promise<void>;
    sendPasswordResetEmail(email: string, token: string): Promise<void>;
    sendPasswordChangedNotification(email: string): Promise<void>;
}
