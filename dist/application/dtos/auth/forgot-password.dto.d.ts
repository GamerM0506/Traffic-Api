export declare class ForgotPasswordRequestDto {
    email: string;
}
export declare class ResetPasswordRequestDto {
    email: string;
    otpCode: string;
    newPassword: string;
}
