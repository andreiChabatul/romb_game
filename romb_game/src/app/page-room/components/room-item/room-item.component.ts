import { Component, Input, OnChanges } from '@angular/core';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { Player, infoRoom } from 'src/app/types';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnChanges {

  @Input() infoRoom: infoRoom;
  playerArr: (Player | null)[];
  color: string;

  constructor(private webSocketController: WebSocketController) { }

  ngOnChanges(): void {
    this.playerArr = [...this.infoRoom.players];
    while (this.playerArr.length < this.infoRoom.maxPLayers) {
      this.playerArr.push(null);
    };
  }

  joinRoom(): void {

    // this.webSocketController.sendMessage(EACTION_WEBSOCKET.JOIN_GAME, { idRoomJoin: this.infoRoom.idRoom });
  }

}
