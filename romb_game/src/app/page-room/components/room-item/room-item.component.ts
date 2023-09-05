import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { EACTION_WEBSOCKET, InfoRoom } from 'src/app/types';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent {

  @Input() itemRoom: InfoRoom;
  @Input() index: number;
  textButton = ACTIONS_BUTTON.CREATE_ROOM;

  constructor(private webSocketController: WebSocketController, private router: Router) { }

  joinRoom() {
    this.webSocketController.sendMessage(EACTION_WEBSOCKET.JOIN_GAME, { idRoomJoin: this.itemRoom.idRoom });
    this.router.navigate(['game']);
  }

}
