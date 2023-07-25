import { Injectable, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketControllerService {
  wsSocket = io("http://localhost:3100/");

  constructor() {
    console.log('214erfwegweg');
    this.test()
  }

  test(): void {
    this.wsSocket.on("message", (mess: string) => {
      console.log(mess);
    });

    this.wsSocket.send('hello hello ')
  }
}
