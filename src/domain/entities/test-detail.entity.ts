export class TestDetail {
    constructor(
        public readonly id: number | null,
        public readonly questionId: number,
        public readonly selectedAnswerId: number | null,
        public readonly isCorrect: boolean
    ) { }
}