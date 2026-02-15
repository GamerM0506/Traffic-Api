import { BusinessRuleException } from './business.exception';

export class InvalidOldPasswordException extends BusinessRuleException {
    constructor() {
        super('Mật khẩu cũ không chính xác.', 'INVALID_OLD_PASSWORD');
    }
}