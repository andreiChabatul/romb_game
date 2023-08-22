import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { AppStore, EACTION_WEBSOCKET, PayloadCreateGame, RoomsSocket, payloadSocket } from '../types';
import { Store } from '@ngrx/store';
import { UpdateRooms } from 'src/store/actions';


@Injectable({
  providedIn: 'root'
})
export class WebSocketController {

  wsSocket = io("http://localhost:3100/");

  constructor(private store: Store<AppStore>) {
    this.handleMessage()
  }

  handleMessage(): void {
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


  sendMessage(action: EACTION_WEBSOCKET, payload?: string): void {
    this.wsSocket.send(JSON.stringify({ action, payload }))
  }

  createGame(payload: PayloadCreateGame) {
    this.wsSocket.send(JSON.stringify({ action: EACTION_WEBSOCKET.CREATE_GAME, payload }))
  }

}
