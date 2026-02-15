import { DomainException } from './domain.exception';

export class UserNotFoundException extends DomainException {
    constructor(email: string) {
        super(`Không tìm thấy người dùng với email: ${email}`, 'USER_NOT_FOUND');
    }
}