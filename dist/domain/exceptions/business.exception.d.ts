import { DomainException } from './domain.exception';
export declare class BusinessRuleException extends DomainException {
    constructor(message: string, code?: string);
}
export declare class InvalidExamSubmissionException extends BusinessRuleException {
    constructor();
}
