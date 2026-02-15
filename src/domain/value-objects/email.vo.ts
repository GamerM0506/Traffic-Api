import { InvalidEmailException } from "../exceptions/invalid-email.exception";

export class Email {
    private readonly value: string;

    constructor(value: string) {
        const cleanedValue = (value ?? '').trim().toLowerCase();

        if (!this.validate(cleanedValue)) {
            throw new InvalidEmailException(cleanedValue);
        }
        this.value = cleanedValue;
    }
    public getValue(): string {
        return this.value;
    }

    private validate(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    public equals(other: Email): boolean {
        return this.value === other.getValue();
    }
}