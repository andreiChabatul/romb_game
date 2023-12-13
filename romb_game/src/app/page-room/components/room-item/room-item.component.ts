import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { fullPlayer, infoRoom } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { OpenModal } from 'src/store/actions';
import { selectIdRoom, selectInfoUser, selectUser } from 'src/store/selectors';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnChanges {

  @Input() infoRoom: infoRoom;
  playerArr: (fullPlayer | null)[];
  color: string;
  isJoin: boolean;
  infoUser$ = this.store.select(selectInfoUser);
  idRoom$ = this.store.select(selectIdRoom);

  constructor(private webSocketController: WebSocketController, private store: Store<AppStore>) { }

  ngOnChanges(): void {
    this.playerArr = [...this.infoRoom.players];
    while (this.playerArr.length < this.infoRoom.maxPlayers) {
      this.playerArr.push(null);
    };
  }

  checkJoin(): Observable<boolean> {
    return this.infoUser$.pipe(
      map((infoUser) => {
        let result: boolean = true;
        this.infoRoom.players.forEach((player) => player.id === infoUser?.id ? result = false : '');
        return result;
      })
    );
  }

  joinRoom(): void {
    this.store.dispatch(new OpenModal({ type: 'joinGame', payload: this.infoRoom.idRoom }));
  }

  leaveRoom(): void {
    this.webSocketController.sendMessage(EACTION_WEBSOCKET.CONTROL_ROOM,
      {
        action: "leave",
        idRoomJoin: this.infoRoom.idRoom
      });
  }

}
