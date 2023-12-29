import { Injectable } from '@angular/core';
import { createRoomDto, infoRoom } from '../types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ENDPOINT } from '../const/enum';
import { BASIC_URL } from '../const';
import { AppStore } from '../types/state';
import { Store } from '@ngrx/store';
import { AddModalError, SetIdRoom, UpdateRooms } from 'src/store/actions';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    constructor(private http: HttpClient, private store: Store<AppStore>) { }

    getAllRooms(): void {
        this.http.get(`${BASIC_URL}${ENDPOINT.ROOMS}`).subscribe({
            next: (rooms) => this.store.dispatch(new UpdateRooms(rooms as infoRoom[])),
            error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
        });
    }

    createRoom(createRoomDto: createRoomDto): Observable<string> {
        return this.http.post(`${BASIC_URL}${ENDPOINT.ROOMS}`, createRoomDto, { responseType: 'text' });
    }

    getRoom(reguest: string): void {
        this.http.get(`${BASIC_URL}${ENDPOINT.ROOMS}${reguest}`).subscribe({
            next: (rooms) => this.store.dispatch(new UpdateRooms(rooms as infoRoom[])),
            error: (error: HttpErrorResponse) => this.store.dispatch(new AddModalError(error.error.message))
        });
    }

    reconnectRoom(idUser: string | undefined): void {
        if (idUser) {
            this.http.post(`${BASIC_URL}${ENDPOINT.ROOMS_RECONNECT}`, { idUser }, { responseType: 'text' }).subscribe(
                (idRoom) => idRoom ? this.store.dispatch(new SetIdRoom(idRoom)) : ''
            )
        }
    }

}