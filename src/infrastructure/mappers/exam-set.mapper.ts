import {
    ExamSet as PrismaExamSet,
    Question as PrismaQuestion,
    Answer as PrismaAnswer
} from '@prisma/client';
import { ExamSet, Question, Answer } from '../../domain/entities';
import { Url } from '../../domain/value-objects';
import { LicenseType as DomainLicenseType } from '../../domain/enums';

export class ExamSetMapper {
    static toDomain(
        raw: PrismaExamSet & {
            questions?: any[]
        }
    ): ExamSet {
        const domainQuestions = raw.questions?.map((item) => {
            const q = item.question || item;
            return this.toDomainQuestion(q);
        }) || [];

        return new ExamSet(
            raw.id,
            raw.name,
            raw.licenseType as unknown as DomainLicenseType,
            raw.description,
            domainQuestions
        );
    }

    static toDomainQuestion(raw: PrismaQuestion & { answers?: PrismaAnswer[] }): Question {
        return new Question(
            raw.id,
            raw.content,
            new Url(raw.mediaUrl),
            raw.mediaType as any,
            raw.questionType as any,
            raw.group as any,
            raw.isParalysis,
            raw.answers?.map((a) => this.toDomainAnswer(a)) || [],
            raw.explanation ?? undefined,
            raw.trafficSignId,
            undefined,
            raw.tip ?? undefined
        );
    }

    static toDomainAnswer(raw: PrismaAnswer): Answer {
        return new Answer(raw.id, raw.content, raw.isCorrect);
    }
}