"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    constructor(value) {
        if (value.length < 6) {
            throw new Error('Mật khẩu phải có ít nhất 6 ký tự');
        }
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
exports.Password = Password;
//# sourceMappingURL=password.vo.js.map