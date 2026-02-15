export declare abstract class DomainException extends Error {
    readonly message: string;
    readonly code?: string;
    constructor(message: string, code?: string);
}
