"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsException = void 0;
const domain_exception_1 = require("./domain.exception");
class UserAlreadyExistsException extends domain_exception_1.DomainException {
    constructor(email) {
        super(`Email ${email} đã được đăng ký bởi một tài khoản khác.`, 'USER_ALREADY_EXISTS');
    }
}
exports.UserAlreadyExistsException = UserAlreadyExistsException;
//# sourceMappingURL=user-already-exists.exception.js.map