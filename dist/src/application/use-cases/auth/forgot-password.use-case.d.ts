import { IUserRepository } from "../../../domain/repositories";
import { ForgotPasswordRequestDto } from "../../dtos/auth/forgot-password.dto";
import { IEmailService } from "../../interfaces/email-service.interface";
export declare class ForgotPasswordUseCase {
    private readonly userRepo;
    private readonly emailService;
    constructor(userRepo: IUserRepository, emailService: IEmailService);
    execute(dto: ForgotPasswordRequestDto): Promise<void>;
}
