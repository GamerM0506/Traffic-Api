"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetTokenInvalidException = void 0;
const business_exception_1 = require("./business.exception");
class ResetTokenInvalidException extends business_exception_1.BusinessRuleException {
    constructor() {
        super('Mã xác nhận đặt lại mật khẩu không chính xác hoặc đã hết hạn.', 'RESET_TOKEN_INVALID');
    }
}
exports.ResetTokenInvalidException = ResetTokenInvalidException;
//# sourceMappingURL=reset-token-invalid.exception.js.map