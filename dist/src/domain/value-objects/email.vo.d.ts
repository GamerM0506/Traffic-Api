export declare class Email {
    private readonly value;
    constructor(value: string);
    getValue(): string;
    private validate;
    equals(other: Email): boolean;
}
