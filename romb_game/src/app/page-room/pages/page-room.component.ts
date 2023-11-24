import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { Button } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { selectRooms } from 'src/store/selectors';

@Component({
  selector: 'app-page-room',
  templateUrl: './page-room.component.html',
  styleUrls: ['./page-room.component.scss']
})
export class PageRoomComponent implements OnInit {

  rooms$ = this.store.select(selectRooms);

  constructor(private store: Store<AppStore>, private webSocketController: WebSocketController) { }

  ngOnInit() {
    this.webSocketController.sendMessage(EACTION_WEBSOCKET.CONTROL_ROOM, { action: 'list' });
  }

  buttons: Button[] = [
    { action: ACTIONS_BUTTON.UPDATE_ROOM, width: "45px" },
    { action: ACTIONS_BUTTON.ADD_ROOM, width: "45px" },
    { action: ACTIONS_BUTTON.SEARCH_ROOM, width: "45px" },
    { action: ACTIONS_BUTTON.SHADOW_ROOM, width: "45px" }
  ]



}
