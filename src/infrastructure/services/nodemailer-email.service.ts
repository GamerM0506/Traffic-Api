import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { IEmailService } from '../../application/interfaces/email-service.interface';

@Injectable()
export class NodemailerEmailService implements IEmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    async sendVerificationCode(email: string, code: string): Promise<void> {
        await this.transporter.sendMail({
            from: '"Traffic App" <no-reply@traffic.com>',
            to: email,
            subject: 'Xác minh tài khoản của bạn',
            text: `Mã OTP của bạn là: ${code}. Mã có hiệu lực trong 10 phút.`,
            html: `<b>Mã OTP của bạn là: <span style="color: blue;">${code}</span></b>`,
        });
    }

    async sendPasswordResetEmail(email: string, token: string): Promise<void> {
        await this.transporter.sendMail({
            from: '"Traffic App" <no-reply@traffic.com>',
            to: email,
            subject: 'Đặt lại mật khẩu',
            text: `Mã xác nhận đặt lại mật khẩu của bạn là: ${token}`,
        });
    }

    async sendPasswordChangedNotification(email: string): Promise<void> {
        await this.transporter.sendMail({
            from: '"Traffic App" <no-reply@traffic.com>',
            to: email,
            subject: 'Cảnh báo bảo mật: Mật khẩu đã thay đổi',
            text: `Mật khẩu của bạn vừa được thay đổi thành công.`,
        });
    }
}