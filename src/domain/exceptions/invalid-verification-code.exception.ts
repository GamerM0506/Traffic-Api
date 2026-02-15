import { BusinessRuleException } from './business.exception';

export class InvalidVerificationCodeException extends BusinessRuleException {
    constructor() {
        super('Mã xác minh không chính xác hoặc đã hết hạn.', 'INVALID_VERIFICATION_CODE');
    }
}