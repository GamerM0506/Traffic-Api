import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterRequestDto {
    @IsEmail({}, { message: 'Email không đúng định dạng' })
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'Mật khẩu phải từ 6 ký tự' })
    password!: string;

    @IsString()
    @IsNotEmpty()
    fullName!: string;
}