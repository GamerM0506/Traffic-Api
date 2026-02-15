"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = void 0;
const domain_exception_1 = require("./domain.exception");
class UserNotFoundException extends domain_exception_1.DomainException {
    constructor(email) {
        super(`Không tìm thấy người dùng với email: ${email}`, 'USER_NOT_FOUND');
    }
}
exports.UserNotFoundException = UserNotFoundException;
//# sourceMappingURL=user-not-found.exception.js.map