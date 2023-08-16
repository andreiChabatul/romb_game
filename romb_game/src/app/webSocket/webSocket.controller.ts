import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { EACTION_WEBSOCKET, PayloadCreateGame } from '../types';


@Injectable({
  providedIn: 'root'
})
export class WebSocketController {

  wsSocket = io("http://localhost:3100/");


  createGame(payload: PayloadCreateGame) {
    this.wsSocket.send(JSON.stringify({action: EACTION_WEBSOCKET.CREATE_GAME, payload }))
  }

  test(): void {
    this.wsSocket.on("message", (mess: string) => {
      console.log(mess);
    });

    this.wsSocket.send('hello hello ')
  }

}
