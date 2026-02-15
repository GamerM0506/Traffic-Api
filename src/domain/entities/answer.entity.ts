export class Answer {
    constructor(
        public readonly id: number | null,
        public readonly content: string,
        public readonly isCorrect: boolean
    ) { }
}
