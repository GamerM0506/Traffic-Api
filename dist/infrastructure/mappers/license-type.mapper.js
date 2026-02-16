"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseTypeMapper = void 0;
const enums_1 = require("../../domain/enums");
const client_1 = require("@prisma/client");
class LicenseTypeMapper {
    static toPrisma(type) {
        return client_1.LicenseType[type];
    }
    static toDomain(type) {
        return enums_1.LicenseType[type];
    }
}
exports.LicenseTypeMapper = LicenseTypeMapper;
//# sourceMappingURL=license-type.mapper.js.map