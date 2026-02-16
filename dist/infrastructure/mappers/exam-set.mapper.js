"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamSetMapper = void 0;
const entities_1 = require("../../domain/entities");
const value_objects_1 = require("../../domain/value-objects");
class ExamSetMapper {
    static toDomain(raw) {
        const domainQuestions = raw.questions?.map((item) => {
            const q = item.question || item;
            return this.toDomainQuestion(q);
        }) || [];
        return new entities_1.ExamSet(raw.id, raw.name, raw.licenseType, raw.description, domainQuestions);
    }
    static toDomainQuestion(raw) {
        return new entities_1.Question(raw.id, raw.content, new value_objects_1.Url(raw.mediaUrl), raw.mediaType, raw.questionType, raw.group, raw.isParalysis, raw.answers?.map((a) => this.toDomainAnswer(a)) || [], raw.explanation ?? undefined, raw.trafficSignId, undefined, raw.tip ?? undefined);
    }
    static toDomainAnswer(raw) {
        return new entities_1.Answer(raw.id, raw.content, raw.isCorrect);
    }
}
exports.ExamSetMapper = ExamSetMapper;
//# sourceMappingURL=exam-set.mapper.js.map