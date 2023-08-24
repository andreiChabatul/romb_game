import { Injectable } from '@angular/core';
import { AppStore, Profile, ResponseAuth } from '../types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BASIC_URL } from '../const';
import { ENDPOINT } from '../const/enum';
import { Store } from '@ngrx/store';
import { AddModalError, ClearModalError } from 'src/store/actions';
import { LoginUser } from 'src/store/actions';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private store: Store<AppStore>) { }

    register(user: Profile) {
        this.store.dispatch(new ClearModalError());
        this.http.post(`${BASIC_URL}${ENDPOINT.REG}`, user).subscribe ({
            next: (value: Partial<ResponseAuth>) => { this.store.dispatch(new LoginUser(value))},
            error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
        })
    }
}
