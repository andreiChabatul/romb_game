import { Injectable } from '@angular/core';
import { ResponseAuth, createUserDto } from '../types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BASIC_URL } from '../const';
import { ENDPOINT } from '../const/enum';
import { Store } from '@ngrx/store';
import { AddModalError, ClearModalError } from 'src/store/actions';
import { LoginUser } from 'src/store/actions';
import { AppStore } from '../types/state';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    httpOptions = {
        withCredentials: true,
        headres: { 'Access-Control-Allow-Origin': "*" }
    };

    constructor(private http: HttpClient, private store: Store<AppStore>, private users: UsersService) { }

    register(createUserDto: createUserDto): void {
        this.store.dispatch(new ClearModalError());
        this.http.post(`${BASIC_URL}${ENDPOINT.REG}`, createUserDto).subscribe({
            next: (value: Partial<ResponseAuth>) => this.setToken(value),
            error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
        })
    }

    login(createUserDto: createUserDto): void {
        this.store.dispatch(new ClearModalError());
        this.http.post(`${BASIC_URL}${ENDPOINT.LOGIN}`, createUserDto, this.httpOptions).subscribe({
            next: (value: Partial<ResponseAuth>) => this.setToken(value),
            error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
        })
    }

    logout(): void {
        this.store.dispatch(new ClearModalError());
        this.http.get(`${BASIC_URL}${ENDPOINT.LOGOUT}`, this.httpOptions).subscribe();
        this.users.logOut();
    }

    refresh(): void {
        this.http.get(`${BASIC_URL}${ENDPOINT.REFRESH}`, this.httpOptions).subscribe({
            next: (value: Partial<ResponseAuth>) => this.setToken(value),
            error: (error: HttpErrorResponse) => { }
        })
    }

    setToken(responseAuth: Partial<ResponseAuth>): void {
        const accessToken = responseAuth.accessToken;
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
            this.users.getUser(accessToken);
        };
    }
}

