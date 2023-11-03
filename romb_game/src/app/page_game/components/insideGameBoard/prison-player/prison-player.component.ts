import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectInsideBoard } from 'src/store/selectors';

@Component({
  selector: 'app-prison-player',
  templateUrl: './prison-player.component.html',
  styleUrls: ['./prison-player.component.scss']
})
export class PrisonPlayerComponent {

  insideBoard$ = this.store.select(selectInsideBoard);

  buttons: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.DICE_ROLL, width: '11vw', height: '6vh', show: this.checkButtons() },
    { action: ACTIONS_BUTTON.PAY_PRISON, width: '11vw', height: '6vh', show: true },
    { action: ACTIONS_BUTTON.SELL_STOCK, width: '11vw', height: '6vh', show: true },
    { action: ACTIONS_BUTTON.MORTGAGE, width: '11vw', height: '6vh', show: true }
  ]

  constructor(private store: Store<AppStore>) { }

  checkButtons(): boolean {
    let result = false;
      this.insideBoard$.subscribe((
        (insideBoard) => (insideBoard.prisonAttempt && insideBoard.prisonAttempt > 0) ? result = true : result = false
      ))
    return result;
  }

}
