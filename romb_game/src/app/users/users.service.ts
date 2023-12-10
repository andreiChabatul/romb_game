import { Injectable } from '@angular/core';
import { JwtPayload, ResponseAuth } from '../types';
import { jwtDecode } from 'jwt-decode';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ENDPOINT } from '../const/enum';
import { BASIC_URL } from '../const';
import { AppStore, infoUser } from '../types/state';
import { Store } from '@ngrx/store';
import { AddModalError, LoginUser } from 'src/store/actions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private store: Store<AppStore>) { }

  getUser(value: Partial<ResponseAuth>): void {
    if (value.accessToken) {
      const idUser = jwtDecode<JwtPayload>(value.accessToken).id;
      this.http.get(`${BASIC_URL}${ENDPOINT.USER}${idUser}`).subscribe({
        next: (value: Partial<infoUser>) => this.store.dispatch(new LoginUser(value)),
        error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
    })
  }

}



}
