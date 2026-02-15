"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEmailException = void 0;
const domain_exception_1 = require("./domain.exception");
class InvalidEmailException extends domain_exception_1.DomainException {
    constructor(email) {
        super(`Định dạng email không hợp lệ: ${email}`);
    }
}
exports.InvalidEmailException = InvalidEmailException;
//# sourceMappingURL=invalid-email.exception.js.map