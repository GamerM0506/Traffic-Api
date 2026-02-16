import { IExamSetRepository } from '../../../domain/repositories/exam-set.repository.interface';
import { ExamDetailResponseDto } from '../../dtos/exam/exam-detail-response.dto';
export declare class GetExamSetDetailUseCase {
    private readonly examSetRepository;
    constructor(examSetRepository: IExamSetRepository);
    execute(id: number): Promise<ExamDetailResponseDto>;
}
