import { CanActivate, ExecutionContext } from '@nestjs/common';
import { IAuthService } from '../../application/interfaces/auth-service.interface';
export declare class JwtAuthGuard implements CanActivate {
    private readonly authService;
    constructor(authService: IAuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
