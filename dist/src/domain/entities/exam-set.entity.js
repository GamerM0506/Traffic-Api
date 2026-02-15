"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamSet = void 0;
class ExamSet {
    constructor(id, name, licenseType, description, questions = []) {
        this.id = id;
        this.name = name;
        this.licenseType = licenseType;
        this.description = description;
        this.questions = questions;
    }
    get totalQuestions() {
        return this.questions.length;
    }
}
exports.ExamSet = ExamSet;
//# sourceMappingURL=exam-set.entity.js.map