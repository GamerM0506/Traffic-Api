"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const domain_exception_1 = require("../../domain/exceptions/domain.exception");
let DomainExceptionFilter = class DomainExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        if (exception instanceof domain_exception_1.DomainException) {
            status = this.mapDomainExceptionToStatus(exception);
            message = exception.message;
        }
        else if (exception.status) {
            status = exception.status;
            message = exception.message;
        }
        if (status === 500) {
            console.error('🔥 System Error:', exception);
        }
        response.status(status).json({
            statusCode: status,
            message: message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
    mapDomainExceptionToStatus(exception) {
        const exceptionName = exception.constructor.name;
        const statusMap = {
            'UserAlreadyExistsException': common_1.HttpStatus.CONFLICT,
            'UserNotFoundException': common_1.HttpStatus.NOT_FOUND,
            'InvalidEmailException': common_1.HttpStatus.BAD_REQUEST,
            'InvalidVerificationCodeException': common_1.HttpStatus.BAD_REQUEST,
            'InvalidOldPasswordException': common_1.HttpStatus.BAD_REQUEST,
            'ResetTokenInvalidException': common_1.HttpStatus.BAD_REQUEST,
            'UnauthorizedException': common_1.HttpStatus.UNAUTHORIZED,
        };
        return statusMap[exceptionName] || common_1.HttpStatus.BAD_REQUEST;
    }
};
exports.DomainExceptionFilter = DomainExceptionFilter;
exports.DomainExceptionFilter = DomainExceptionFilter = __decorate([
    (0, common_1.Catch)()
], DomainExceptionFilter);
//# sourceMappingURL=domain-exception.filter.js.map