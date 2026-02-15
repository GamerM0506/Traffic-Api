import { BusinessRuleException } from './business.exception';

export class ResetTokenInvalidException extends BusinessRuleException {
    constructor() {
        super('Mã xác nhận đặt lại mật khẩu không chính xác hoặc đã hết hạn.', 'RESET_TOKEN_INVALID');
    }
}