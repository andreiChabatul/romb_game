import { Component, Input } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { RoomsSocket } from 'src/app/types';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent {

  @Input() itemRoom: RoomsSocket;

  textButton = ACTIONS_BUTTON.CREATE_ROOM;

}
