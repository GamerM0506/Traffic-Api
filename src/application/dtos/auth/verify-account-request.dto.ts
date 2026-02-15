import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyAccountRequestDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 6, { message: 'Mã xác thực phải đúng 6 ký tự' })
    code: string;
}