import { Component } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';

@Component({
  selector: 'app-start-turn-buttons',
  templateUrl: './start-turn-buttons.component.html',
  styleUrls: ['./start-turn-buttons.component.scss']
})
export class StartTurnButtonsComponent {

  buttons = [
    { action: ACTIONS_BUTTON.DICE_ROLL, width: '19vw', height: '7vh', show: true },
    { action: ACTIONS_BUTTON.OFFER_DEAL, width: '19vw', height: '7vh', show: true },
    { action: ACTIONS_BUTTON.BUY_STOCK, width: '19vw', height: '7vh', show: this.checkBuyStock() },
    { action: ACTIONS_BUTTON.BUY_OUT_COMPANY, width: '19vw', height: '7vh', show: true },
  ]


  checkBuyStock(): boolean {


    return true;
  }

}
