import { VerifyAccountRequestDto } from '../../dtos/auth/verify-account-request.dto';
import { IUserRepository } from '../../../domain/repositories';
export declare class VerifyAccountUseCase {
    private readonly userRepo;
    constructor(userRepo: IUserRepository);
    execute(dto: VerifyAccountRequestDto): Promise<boolean>;
}
