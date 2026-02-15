export class ForgotPasswordRequestDto {
    email!: string;
}

export class ResetPasswordRequestDto {
    email!: string;
    otpCode!: string;
    newPassword!: string;
}