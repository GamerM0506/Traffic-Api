import { ChangePasswordRequestDto } from '../../dtos/auth/change-password-request.dto';
import { IUserRepository } from '../../../domain/repositories';
import { IAuthService } from '../../interfaces/auth-service.interface';
import { IEmailService } from '../../interfaces/email-service.interface';
export declare class ChangePasswordUseCase {
    private readonly userRepo;
    private readonly authService;
    private readonly emailService;
    constructor(userRepo: IUserRepository, authService: IAuthService, emailService: IEmailService);
    execute(userId: number, dto: ChangePasswordRequestDto): Promise<void>;
}
