"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidOldPasswordException = void 0;
const business_exception_1 = require("./business.exception");
class InvalidOldPasswordException extends business_exception_1.BusinessRuleException {
    constructor() {
        super('Mật khẩu cũ không chính xác.', 'INVALID_OLD_PASSWORD');
    }
}
exports.InvalidOldPasswordException = InvalidOldPasswordException;
//# sourceMappingURL=invalid-old-password.exception.js.map