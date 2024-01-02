import { Component, Input } from '@angular/core';
import { gameRoom } from 'src/app/types/state';

@Component({
  selector: 'app-chat-game',
  templateUrl: './chat-game.component.html',
  styleUrls: ['./chat-game.component.scss']
})
export class ChatGameComponent {

  @Input() gameRoom: gameRoom;

}

