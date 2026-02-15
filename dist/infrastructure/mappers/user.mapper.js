"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
const value_objects_1 = require("../../domain/value-objects");
class UserMapper {
    static toDomain(raw) {
        return new user_entity_1.User(raw.id, new value_objects_1.Email(raw.email), new value_objects_1.Password(raw.password), raw.fullName, new value_objects_1.Url(raw.avatarUrl), raw.createdAt, raw.updatedAt, raw.refreshToken, raw.isVerified, raw.verificationCode);
    }
    static toPersistence(entity) {
        return {
            email: entity.email.getValue(),
            password: entity.password.getValue(),
            fullName: entity.fullName,
            avatarUrl: entity.avatarUrl.getValue(),
            refreshToken: entity.refreshToken,
            isVerified: entity.isVerified,
            verificationCode: entity.verificationCode,
        };
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map