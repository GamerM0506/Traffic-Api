export declare class TestScore {
    readonly score: number;
    readonly totalQuestions: number;
    constructor(score: number, totalQuestions: number);
    get percentage(): number;
}
