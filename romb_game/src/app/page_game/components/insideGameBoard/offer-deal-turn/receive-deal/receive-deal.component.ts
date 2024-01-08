import { Component, Input } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';
import { gameRoom } from 'src/app/types/state';

@Component({
  selector: 'app-receive-deal',
  templateUrl: './receive-deal.component.html',
  styleUrls: ['./receive-deal.component.scss']
})
export class ReceiveDealComponent {

  @Input() gameRoom: gameRoom;
  buttonDeal: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.ACCEPT_DEAL, width: '12vw', height: '5vh', show: true },
    { action: ACTIONS_BUTTON.REFUSE_DEAL, width: '12vw', height: '5vh', show: true }];

}
