import { DomainException } from './domain.exception';

export class InvalidEmailException extends DomainException {
    constructor(email: string) {
        super(`Định dạng email không hợp lệ: ${email}`);
    }
}