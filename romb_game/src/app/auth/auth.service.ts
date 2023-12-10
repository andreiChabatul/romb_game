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

    constructor(private http: HttpClient, private store: Store<AppStore>, private users: UsersService) { }

    register(createUserDto: createUserDto): void {
        this.store.dispatch(new ClearModalError());
        this.http.post(`${BASIC_URL}${ENDPOINT.REG}`, createUserDto).subscribe({
            next: (value: Partial<ResponseAuth>) => this.users.getUser(value),
            error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
        })
    }
    httpOptions = {
        withCredentials: true,
        headres: { 'Access-Control-Allow-Origin': "*" }
    };

    login(createUserDto: createUserDto): void {
        this.store.dispatch(new ClearModalError());
        this.http.post(`${BASIC_URL}${ENDPOINT.LOGIN}`, createUserDto, this.httpOptions).subscribe({
            next: (value: Partial<ResponseAuth>) => this.users.getUser(value),
            error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
        })
    }


    refresh(): void {
        this.http.get(`${BASIC_URL}${ENDPOINT.REFRESH}`).subscribe({
            next: (value: Partial<ResponseAuth>) => this.users.getUser(value),
            error: (error: HttpErrorResponse) => { }
        })
    }
}

