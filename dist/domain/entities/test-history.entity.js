"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestHistory = void 0;
const enums_1 = require("../enums");
class TestHistory {
    constructor(id, userId, licenseType, score, isParalysisFailed, durationSeconds, details = [], examSetId, createdAt) {
        this.id = id;
        this.userId = userId;
        this.licenseType = licenseType;
        this.score = score;
        this.isParalysisFailed = isParalysisFailed;
        this.durationSeconds = durationSeconds;
        this.details = details;
        this.examSetId = examSetId;
        this.createdAt = createdAt;
    }
    getResultStatus() {
        if (this.isParalysisFailed)
            return enums_1.TestStatus.FAIL;
        const requirements = {
            [enums_1.LicenseType.A1]: 21,
            [enums_1.LicenseType.A2]: 23,
            [enums_1.LicenseType.B1]: 27,
            [enums_1.LicenseType.B2]: 32,
            [enums_1.LicenseType.C]: 37,
            [enums_1.LicenseType.A3]: 23,
            [enums_1.LicenseType.A4]: 23,
            [enums_1.LicenseType.D]: 42,
            [enums_1.LicenseType.E]: 42,
            [enums_1.LicenseType.F]: 42
        };
        const passScore = requirements[this.licenseType];
        return this.score.score >= passScore ? enums_1.TestStatus.PASS : enums_1.TestStatus.FAIL;
    }
}
exports.TestHistory = TestHistory;
//# sourceMappingURL=test-history.entity.js.map