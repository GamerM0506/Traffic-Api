export class Url {
    private readonly value: string;

    constructor(value: string | null | undefined) {
        if (!value) {
            this.value = '';
            return;
        }
        this.value = value;
    }

    public getValue(): string {
        return this.value;
    }

    public get isPresent(): boolean {
        return this.value.length > 0;
    }
}