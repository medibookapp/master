import { Observable } from "rxjs";
import { LoginRqDto, LoginRsDto } from '@dto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class ApiClient {
    baseUrl = 'http://localhost:4200'
    constructor(
        private http: HttpClient
    ) {}

    postLogin(msg: LoginRqDto): Observable<LoginRsDto[]> {
        return this.http.post<LoginRsDto[]>(this.baseUrl + '/api/login', msg);
    }
}