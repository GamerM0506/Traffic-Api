"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLockedException = exports.InvalidCredentialsException = void 0;
const domain_exception_1 = require("./domain.exception");
class InvalidCredentialsException extends domain_exception_1.DomainException {
    constructor() {
        super('Email hoặc mật khẩu không chính xác', 'INVALID_CREDENTIALS');
    }
}
exports.InvalidCredentialsException = InvalidCredentialsException;
class AccountLockedException extends domain_exception_1.DomainException {
    constructor() {
        super('Tài khoản đã bị khóa do vi phạm điều khoản', 'ACCOUNT_LOCKED');
    }
}
exports.AccountLockedException = AccountLockedException;
//# sourceMappingURL=unauthorized.exception.js.map