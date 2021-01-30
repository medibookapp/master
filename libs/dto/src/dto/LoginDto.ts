export class LoginRqDto {
    email: string;
    password: string;
}

export class LoginRsDto {
    success: boolean;
    isDoctor: boolean;
}