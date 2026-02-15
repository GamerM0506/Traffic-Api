export class TestScore {
    constructor(
        public readonly score: number,
        public readonly totalQuestions: number
    ) {
        if (score < 0 || score > totalQuestions) {
            throw new Error('Điểm số không hợp lệ so với tổng số câu hỏi');
        }
    }

    public get percentage(): number {
        return (this.score / this.totalQuestions) * 100;
    }
}