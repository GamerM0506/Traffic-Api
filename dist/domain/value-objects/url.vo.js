"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
class Url {
    constructor(value) {
        if (!value) {
            this.value = '';
            return;
        }
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    get isPresent() {
        return this.value.length > 0;
    }
}
exports.Url = Url;
//# sourceMappingURL=url.vo.js.map