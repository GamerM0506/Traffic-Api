import {
    CanActivate,
    ExecutionContext,
    Injectable,
    Inject,
    UnauthorizedException,
} from '@nestjs/common';
import { IAuthService } from '../../application/interfaces/auth-service.interface';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        @Inject('IAuthService') private readonly authService: IAuthService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Token không hợp lệ hoặc không tồn tại');
        }

        const token = authHeader.split(' ')[1];
        const payload = this.authService.verifyToken(token);

        if (!payload) {
            throw new UnauthorizedException('Phiên đăng nhập đã hết hạn');
        }

        request.user = payload;
        return true;
    }
}