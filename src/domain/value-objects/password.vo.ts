export class Password {
    private readonly value: string;

    constructor(value: string) {
        if (value.length < 6) {
            throw new Error('Mật khẩu phải có ít nhất 6 ký tự');
        }
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }
}