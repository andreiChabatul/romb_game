import { Injectable } from '@angular/core';
import { JwtPayload, ResponseAuth } from '../types';
import { jwtDecode } from 'jwt-decode';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EACTION_WEBSOCKET, ENDPOINT } from '../const/enum';
import { BASIC_URL } from '../const';
import { AppStore, infoUser } from '../types/state';
import { Store } from '@ngrx/store';
import { AddModalError, LoginUser, LogoutUser } from 'src/store/actions';
import { WebSocketController } from '../webSocket/webSocket.controller';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private store: Store<AppStore>,
    private webSocketController: WebSocketController
  ) { }

  getUser(accessToken: string): void {
    const idUser = jwtDecode<JwtPayload>(accessToken).id;
    this.http.get(`${BASIC_URL}${ENDPOINT.USER}${idUser}`).subscribe({
      next: (value: Partial<infoUser>) => {
        this.store.dispatch(new LoginUser(value));
        this.webSocketController.sendMessage(EACTION_WEBSOCKET.CONNECT);
      },
      error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
    });
  }

  logOut(): void {
    localStorage.removeItem('Authorization');
    this.store.dispatch(new LogoutUser());
  }

}
