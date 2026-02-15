"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const invalid_email_exception_1 = require("../exceptions/invalid-email.exception");
class Email {
    constructor(value) {
        const cleanedValue = (value ?? '').trim().toLowerCase();
        if (!this.validate(cleanedValue)) {
            throw new invalid_email_exception_1.InvalidEmailException(cleanedValue);
        }
        this.value = cleanedValue;
    }
    getValue() {
        return this.value;
    }
    validate(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    equals(other) {
        return this.value === other.getValue();
    }
}
exports.Email = Email;
//# sourceMappingURL=email.vo.js.map