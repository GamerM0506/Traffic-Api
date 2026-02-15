import { DomainException } from './domain.exception';

export class InvalidCredentialsException extends DomainException {
    constructor() {
        super('Email hoặc mật khẩu không chính xác', 'INVALID_CREDENTIALS');
    }
}

export class AccountLockedException extends DomainException {
    constructor() {
        super('Tài khoản đã bị khóa do vi phạm điều khoản', 'ACCOUNT_LOCKED');
    }
}