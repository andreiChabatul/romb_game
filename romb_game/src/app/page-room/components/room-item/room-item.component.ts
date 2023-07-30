import { Component } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent {

  textButton = ACTIONS_BUTTON.CREATE_ROOM;

}
