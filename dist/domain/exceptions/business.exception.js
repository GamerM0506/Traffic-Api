"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidExamSubmissionException = exports.BusinessRuleException = void 0;
const domain_exception_1 = require("./domain.exception");
class BusinessRuleException extends domain_exception_1.DomainException {
    constructor(message, code = 'BUSINESS_RULE_VIOLATION') {
        super(message, code);
    }
}
exports.BusinessRuleException = BusinessRuleException;
class InvalidExamSubmissionException extends BusinessRuleException {
    constructor() {
        super('Bộ đề thi không phù hợp với hạng bằng lái của bạn', 'INVALID_LICENSE_FOR_EXAM');
    }
}
exports.InvalidExamSubmissionException = InvalidExamSubmissionException;
//# sourceMappingURL=business.exception.js.map