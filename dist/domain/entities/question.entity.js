"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(id, content, mediaUrl, mediaType, questionType, group, isParalysis, answers, explanation, trafficSignId, trafficSign, tip) {
        this.id = id;
        this.content = content;
        this.mediaUrl = mediaUrl;
        this.mediaType = mediaType;
        this.questionType = questionType;
        this.group = group;
        this.isParalysis = isParalysis;
        this.answers = answers;
        this.explanation = explanation;
        this.trafficSignId = trafficSignId;
        this.trafficSign = trafficSign;
        this.tip = tip;
    }
    checkAnswer(answerId) {
        const answer = this.answers.find(a => a.id === answerId);
        return answer ? answer.isCorrect : false;
    }
}
exports.Question = Question;
//# sourceMappingURL=question.entity.js.map