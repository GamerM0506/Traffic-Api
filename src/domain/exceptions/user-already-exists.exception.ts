import { DomainException } from './domain.exception';

export class UserAlreadyExistsException extends DomainException {
  constructor(email: string) {
    super(`Email ${email} đã được đăng ký bởi một tài khoản khác.`, 'USER_ALREADY_EXISTS');
  }
}