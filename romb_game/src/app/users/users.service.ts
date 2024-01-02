import { Injectable } from '@angular/core';
import { JwtPayload } from '../types';
import { jwtDecode } from 'jwt-decode';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ENDPOINT } from '../const/enum';
import { BASIC_URL } from '../const';
import { AppStore, infoUser } from '../types/state';
import { Store } from '@ngrx/store';
import { RoomsService } from '../rooms/rooms.services';
import { addModalError } from 'src/store/actions/modalActions';
import { loginUser, logoutUser } from 'src/store/actions/userActions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private store: Store<AppStore>, private roomsServices: RoomsService) { }

  getUser(accessToken: string): void {
    const idUser = jwtDecode<JwtPayload>(accessToken).id;
    this.http.get(`${BASIC_URL}${ENDPOINT.USER}${idUser}`).subscribe({
      next: (payload: Partial<infoUser>) => {
        this.store.dispatch(loginUser({ payload }));
        this.roomsServices.reconnectRoom(payload.id);
      },
      error: (error: HttpErrorResponse) => this.store.dispatch(addModalError({ modalError: error.error.message }))
    });
  }

  logOut(): void {
    localStorage.removeItem('Authorization');
    this.store.dispatch(logoutUser());
  }


}
