import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { DomainException } from '../../domain/exceptions/domain.exception';

@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest();
        
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';

        if (exception instanceof DomainException) {
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

    private mapDomainExceptionToStatus(exception: DomainException): number {
        const exceptionName = exception.constructor.name;

        const statusMap: Record<string, number> = {
            'UserAlreadyExistsException': HttpStatus.CONFLICT,        
            'UserNotFoundException': HttpStatus.NOT_FOUND,            
            'InvalidEmailException': HttpStatus.BAD_REQUEST,         
            'InvalidVerificationCodeException': HttpStatus.BAD_REQUEST,
            'InvalidOldPasswordException': HttpStatus.BAD_REQUEST,      
            'ResetTokenInvalidException': HttpStatus.BAD_REQUEST,       
            'UnauthorizedException': HttpStatus.UNAUTHORIZED,          
        };

        return statusMap[exceptionName] || HttpStatus.BAD_REQUEST;
    }
}