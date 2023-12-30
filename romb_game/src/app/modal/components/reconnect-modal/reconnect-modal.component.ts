import { Component } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';

@Component({
  selector: 'app-reconnect-modal',
  templateUrl: './reconnect-modal.component.html',
  styleUrls: ['./reconnect-modal.component.scss']
})
export class ReconnectModalComponent {

  buttons: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.RECONNECT_GAME, width: '12vw', height: '6vh' },
    { action: ACTIONS_BUTTON.LEAVE_GAME, width: '12vw', height: '6vh' }
  ];
  isReconnect: boolean;

  reconnectAccess(action: ACTIONS_BUTTON): void {
    this.isReconnect = (action === ACTIONS_BUTTON.RECONNECT_GAME);
  }

}
