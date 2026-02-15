"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
class DomainException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exception.js.map