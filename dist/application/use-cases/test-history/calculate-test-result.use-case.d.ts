import { SaveTestResultRequestDto } from '../../dtos/test-history/save-test-result.dto';
export declare class CalculateTestResultUseCase {
    execute(dto: SaveTestResultRequestDto): {
        status: import("../../../domain/enums").TestStatus;
        score: number;
        totalQuestions: number;
        isParalysisFailed: boolean;
        message: string;
    };
}
