import { Component } from '@angular/core';
import { DoneBoard } from 'server_temp/done_board';
import { WebSocketController } from './webSocket/webSocket.controller';

export const game = new DoneBoard(15);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'romb_game';


  constructor(private webSocketController: WebSocketController) { }




}
