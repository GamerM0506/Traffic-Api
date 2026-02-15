import { IsArray, IsInt, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class UserAnswerDto {
    @IsInt()
    @IsNotEmpty()
    questionId: number;

    @IsInt()
    @IsNotEmpty()
    selectedAnswerId: number;
}

export class SubmitExamDto {
    @IsInt()
    @IsNotEmpty()
    examSetId: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UserAnswerDto)
    answers: UserAnswerDto[];
}