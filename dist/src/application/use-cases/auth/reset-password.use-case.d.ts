import { IUserRepository } from "../../../domain/repositories";
import { ResetPasswordRequestDto } from "src/application/dtos/auth/reset-password.dto";
import { IAuthService } from "../../interfaces/auth-service.interface";
export declare class ResetPasswordUseCase {
    private readonly userRepo;
    private readonly authService;
    constructor(userRepo: IUserRepository, authService: IAuthService);
    execute(dto: ResetPasswordRequestDto): Promise<void>;
}
