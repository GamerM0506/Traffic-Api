import { ExamSet as PrismaExamSet, Question as PrismaQuestion, Answer as PrismaAnswer } from '@prisma/client';
import { ExamSet, Question, Answer } from '../../domain/entities';
export declare class ExamSetMapper {
    static toDomain(raw: PrismaExamSet & {
        questions?: any[];
    }): ExamSet;
    static toDomainQuestion(raw: PrismaQuestion & {
        answers?: PrismaAnswer[];
    }): Question;
    static toDomainAnswer(raw: PrismaAnswer): Answer;
}
