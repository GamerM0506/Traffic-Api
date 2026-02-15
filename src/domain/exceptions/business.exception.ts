import { DomainException } from './domain.exception';

export class BusinessRuleException extends DomainException {
    constructor(message: string, code: string = 'BUSINESS_RULE_VIOLATION') {
        super(message, code);
    }
}

export class InvalidExamSubmissionException extends BusinessRuleException {
    constructor() {
        super('Bộ đề thi không phù hợp với hạng bằng lái của bạn', 'INVALID_LICENSE_FOR_EXAM');
    }
}