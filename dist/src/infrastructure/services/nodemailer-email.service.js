"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerEmailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let NodemailerEmailService = class NodemailerEmailService {
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
    async sendVerificationCode(email, code) {
        await this.transporter.sendMail({
            from: '"Traffic App" <no-reply@traffic.com>',
            to: email,
            subject: 'Xác minh tài khoản của bạn',
            text: `Mã OTP của bạn là: ${code}. Mã có hiệu lực trong 10 phút.`,
            html: `<b>Mã OTP của bạn là: <span style="color: blue;">${code}</span></b>`,
        });
    }
    async sendPasswordResetEmail(email, token) {
        await this.transporter.sendMail({
            from: '"Traffic App" <no-reply@traffic.com>',
            to: email,
            subject: 'Đặt lại mật khẩu',
            text: `Mã xác nhận đặt lại mật khẩu của bạn là: ${token}`,
        });
    }
    async sendPasswordChangedNotification(email) {
        await this.transporter.sendMail({
            from: '"Traffic App" <no-reply@traffic.com>',
            to: email,
            subject: 'Cảnh báo bảo mật: Mật khẩu đã thay đổi',
            text: `Mật khẩu của bạn vừa được thay đổi thành công.`,
        });
    }
};
exports.NodemailerEmailService = NodemailerEmailService;
exports.NodemailerEmailService = NodemailerEmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NodemailerEmailService);
//# sourceMappingURL=nodemailer-email.service.js.map