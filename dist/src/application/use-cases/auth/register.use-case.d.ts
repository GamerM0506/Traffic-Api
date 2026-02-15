import { RegisterRequestDto } from '../../dtos/auth/register-request.dto';
import { IUserRepository } from '../../../domain/repositories';
import { IAuthService } from '../../interfaces/auth-service.interface';
import { UserResponseDto } from '../../dtos/user/user-response.dto';
import { IEmailService } from '../../interfaces/email-service.interface';
export declare class RegisterUseCase {
    private readonly userRepo;
    private readonly authService;
    private readonly emailService;
    constructor(userRepo: IUserRepository, authService: IAuthService, emailService: IEmailService);
    execute(dto: RegisterRequestDto): Promise<UserResponseDto>;
}
