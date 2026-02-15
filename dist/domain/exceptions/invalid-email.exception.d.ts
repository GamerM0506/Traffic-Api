import { DomainException } from './domain.exception';
export declare class InvalidEmailException extends DomainException {
    constructor(email: string);
}
