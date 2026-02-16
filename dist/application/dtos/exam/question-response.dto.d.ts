import { QuestionGroup } from '../../../domain/enums/question-group.enum';
import { MediaType } from '../../../domain/enums/media-type.enum';
import { AnswerResponseDto } from './answer-response.dto';
export declare class QuestionResponseDto {
    id: number;
    content: string;
    explanation?: string;
    isParalysis: boolean;
    mediaUrl?: string;
    mediaType: MediaType;
    group: QuestionGroup;
    answers: AnswerResponseDto[];
}
