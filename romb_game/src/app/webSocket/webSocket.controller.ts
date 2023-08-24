import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { AppStore, EACTION_WEBSOCKET, RoomsSocket, SendPayloadSocket, payloadSocket } from '../types';
import { Store } from '@ngrx/store';
import { UpdateRooms } from 'src/store/actions';
import { selectIdUser } from 'src/store/selectors';


@Injectable({
  providedIn: 'root'
})
export class WebSocketController {

  private wsSocket = io("http://localhost:3100/");
  private idUser$ = this.store.select(selectIdUser);
  private idUser: string;

  constructor(private store: Store<AppStore>) {
    this.idUser$.subscribe((id) => this.idUser = id);
    this.handleMessage();
  }

  private handleMessage(): void {
    this.wsSocket.on("message", (mess: string) => {
      const wsMessage = JSON.parse(mess) as payloadSocket;
      switch (wsMessage.action) {
        case EACTION_WEBSOCKET.LIST_ROOM:
          const rooms = wsMessage.payload as RoomsSocket[];
          this.store.dispatch(new UpdateRooms(rooms));
          break;

        default:
          break;
      }
    });
  }

  sendMessage(action: EACTION_WEBSOCKET, payload: SendPayloadSocket = {}): void {
    this.wsSocket.send(JSON.stringify({ action, payload: { ...payload, idUser: this.idUser } }));
  }

}
