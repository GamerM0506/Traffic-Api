import { DomainException } from './domain.exception';
export declare class EntityNotFoundException extends DomainException {
    constructor(entityName: string, identifier: any);
}
export declare class QuestionNotFoundException extends EntityNotFoundException {
    constructor(id: number);
}
export declare class UserNotFoundException extends EntityNotFoundException {
    constructor(email: string);
}
