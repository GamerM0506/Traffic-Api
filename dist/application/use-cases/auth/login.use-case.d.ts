import { AuthResponseDto } from '../../dtos/auth/auth-response.dto';
import { LoginRequestDto } from '../../dtos/auth/login-request.dto';
import { IUserRepository } from '../../../domain/repositories';
import { IAuthService } from '../../interfaces/auth-service.interface';
export declare class LoginUseCase {
    private readonly userRepo;
    private readonly authService;
    constructor(userRepo: IUserRepository, authService: IAuthService);
    execute(dto: LoginRequestDto): Promise<AuthResponseDto>;
}
