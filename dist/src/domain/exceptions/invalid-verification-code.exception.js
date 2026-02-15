"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidVerificationCodeException = void 0;
const business_exception_1 = require("./business.exception");
class InvalidVerificationCodeException extends business_exception_1.BusinessRuleException {
    constructor() {
        super('Mã xác minh không chính xác hoặc đã hết hạn.', 'INVALID_VERIFICATION_CODE');
    }
}
exports.InvalidVerificationCodeException = InvalidVerificationCodeException;
//# sourceMappingURL=invalid-verification-code.exception.js.map