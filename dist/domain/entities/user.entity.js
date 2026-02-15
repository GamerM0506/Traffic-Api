"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, password, fullName, avatarUrl, createdAt, updatedAt, refreshToken = null, isVerified = false, verificationCode = null) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.avatarUrl = avatarUrl;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.refreshToken = refreshToken;
        this.isVerified = isVerified;
        this.verificationCode = verificationCode;
    }
    isNewUser() {
        if (!this.createdAt)
            return true;
        const oneDayInMs = 24 * 60 * 60 * 1000;
        return (new Date().getTime() - this.createdAt.getTime()) < oneDayInMs;
    }
    canTakeExam() {
        return this.isVerified;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map