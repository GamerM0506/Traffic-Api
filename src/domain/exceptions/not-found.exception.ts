import { DomainException } from './domain.exception';

export class EntityNotFoundException extends DomainException {
    constructor(entityName: string, identifier: any) {
        super(`${entityName} với định danh ${identifier} không tồn tại`, 'ENTITY_NOT_FOUND');
    }
}

export class QuestionNotFoundException extends EntityNotFoundException {
    constructor(id: number) {
        super('Câu hỏi', id);
    }
}

export class UserNotFoundException extends EntityNotFoundException {
    constructor(email: string) {
        super('Người dùng', email);
    }
}