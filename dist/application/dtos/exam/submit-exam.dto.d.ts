declare class UserAnswerDto {
    questionId: number;
    selectedAnswerId: number;
}
export declare class SubmitExamDto {
    examSetId: number;
    answers: UserAnswerDto[];
}
export {};
