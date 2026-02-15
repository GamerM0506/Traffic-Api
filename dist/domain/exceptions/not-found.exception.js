"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = exports.QuestionNotFoundException = exports.EntityNotFoundException = void 0;
const domain_exception_1 = require("./domain.exception");
class EntityNotFoundException extends domain_exception_1.DomainException {
    constructor(entityName, identifier) {
        super(`${entityName} với định danh ${identifier} không tồn tại`, 'ENTITY_NOT_FOUND');
    }
}
exports.EntityNotFoundException = EntityNotFoundException;
class QuestionNotFoundException extends EntityNotFoundException {
    constructor(id) {
        super('Câu hỏi', id);
    }
}
exports.QuestionNotFoundException = QuestionNotFoundException;
class UserNotFoundException extends EntityNotFoundException {
    constructor(email) {
        super('Người dùng', email);
    }
}
exports.UserNotFoundException = UserNotFoundException;
//# sourceMappingURL=not-found.exception.js.map