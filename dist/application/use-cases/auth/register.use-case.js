"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUseCase = void 0;
const value_objects_1 = require("../../../domain/value-objects");
const user_entity_1 = require("../../../domain/entities/user.entity");
const user_already_exists_exception_1 = require("../../../domain/exceptions/user-already-exists.exception");
const common_1 = require("@nestjs/common");
let RegisterUseCase = class RegisterUseCase {
    constructor(userRepo, authService, emailService) {
        this.userRepo = userRepo;
        this.authService = authService;
        this.emailService = emailService;
    }
    async execute(dto) {
        const emailVo = new value_objects_1.Email(dto.email);
        const existingUser = await this.userRepo.findByEmail(emailVo);
        if (existingUser) {
            throw new user_already_exists_exception_1.UserAlreadyExistsException(dto.email);
        }
        const hashedPassword = await this.authService.hashPassword(dto.password);
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const newUser = new user_entity_1.User(null, emailVo, new value_objects_1.Password(hashedPassword), dto.fullName || null, new value_objects_1.Url(null), undefined, undefined, null, false, otpCode);
        const savedUser = await this.userRepo.save(newUser);
        this.emailService.sendVerificationCode(savedUser.email.getValue(), otpCode);
        return {
            id: savedUser.id,
            email: savedUser.email.getValue(),
            fullName: savedUser.fullName,
            otpCode: otpCode
        };
    }
};
exports.RegisterUseCase = RegisterUseCase;
exports.RegisterUseCase = RegisterUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __param(1, (0, common_1.Inject)('IAuthService')),
    __param(2, (0, common_1.Inject)('IEmailService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], RegisterUseCase);
//# sourceMappingURL=register.use-case.js.map