import { MediaType, QuestionType, QuestionGroup } from '../enums';
import { Url } from '../value-objects';
import { Answer } from './answer.entity';
import { TrafficSign } from './traffic-sign.entity';

export class Question {
    constructor(
        public readonly id: number | null,
        public readonly content: string,
        public readonly mediaUrl: Url,
        public readonly mediaType: MediaType,
        public readonly questionType: QuestionType,
        public readonly group: QuestionGroup,
        public readonly isParalysis: boolean,
        public readonly answers: Answer[],
        public readonly explanation?: string,
        public readonly trafficSignId?: number | null,
        public readonly trafficSign?: TrafficSign,
        public readonly tip?: string,

    ) { }

    public checkAnswer(answerId: number): boolean {
        const answer = this.answers.find(a => a.id === answerId);
        return answer ? answer.isCorrect : false;
    }
}