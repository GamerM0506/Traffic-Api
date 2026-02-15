import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class DomainExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
    private mapDomainExceptionToStatus;
}
