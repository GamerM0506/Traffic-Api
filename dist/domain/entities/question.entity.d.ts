import { MediaType, QuestionType, QuestionGroup } from '../enums';
import { Url } from '../value-objects';
import { Answer } from './answer.entity';
import { TrafficSign } from './traffic-sign.entity';
export declare class Question {
    readonly id: number | null;
    readonly content: string;
    readonly mediaUrl: Url;
    readonly mediaType: MediaType;
    readonly questionType: QuestionType;
    readonly group: QuestionGroup;
    readonly isParalysis: boolean;
    readonly answers: Answer[];
    readonly explanation?: string;
    readonly trafficSignId?: number | null;
    readonly trafficSign?: TrafficSign;
    readonly tip?: string;
    constructor(id: number | null, content: string, mediaUrl: Url, mediaType: MediaType, questionType: QuestionType, group: QuestionGroup, isParalysis: boolean, answers: Answer[], explanation?: string, trafficSignId?: number | null, trafficSign?: TrafficSign, tip?: string);
    checkAnswer(answerId: number): boolean;
}
