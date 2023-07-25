import { Component } from '@angular/core';
import { DoneBoard } from 'server_temp/done_board';
import { WebSocketControllerService } from './services/web-socket-controller.service';

export const game = new DoneBoard(15);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'romb_game';


  constructor(private webSocketControllerService: WebSocketControllerService) { }




}
