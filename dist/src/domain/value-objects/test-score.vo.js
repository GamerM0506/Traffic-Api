"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestScore = void 0;
class TestScore {
    constructor(score, totalQuestions) {
        this.score = score;
        this.totalQuestions = totalQuestions;
        if (score < 0 || score > totalQuestions) {
            throw new Error('Điểm số không hợp lệ so với tổng số câu hỏi');
        }
    }
    get percentage() {
        return (this.score / this.totalQuestions) * 100;
    }
}
exports.TestScore = TestScore;
//# sourceMappingURL=test-score.vo.js.map