export class ResetPasswordRequestDto {
    email!: string;
    otpCode!: string;
    newPassword!: string;
}