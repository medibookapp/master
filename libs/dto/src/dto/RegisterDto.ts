import { __exportStar } from "tslib";

export class RegisterRqDto {
    email: string;
    email2?: string;
    password: string;
    ssn: string;
    birthDate: string;
}

export class RegisterRsDto {
    success: boolean;
}