import { DomainException } from './domain.exception';
export declare class UserNotFoundException extends DomainException {
    constructor(email: string);
}
