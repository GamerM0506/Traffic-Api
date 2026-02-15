"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookmark = void 0;
class UserBookmark {
    constructor(id, userId, questionId, bookmarkType, note, createdAt) {
        this.id = id;
        this.userId = userId;
        this.questionId = questionId;
        this.bookmarkType = bookmarkType;
        this.note = note;
        this.createdAt = createdAt;
    }
}
exports.UserBookmark = UserBookmark;
//# sourceMappingURL=user-bookmark.entity.js.map