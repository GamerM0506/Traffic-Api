import { QuestionResponseDto } from './question-response.dto';

export class ExamDetailResponseDto {
    id: number;
    name: string;
    questions: QuestionResponseDto[];
}