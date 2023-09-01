import { Component } from '@angular/core';
import { WebSocketController } from './webSocket/webSocket.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'romb_game';


  constructor(private webSocketController: WebSocketController) { }




}
