import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { DEBT_PRISON } from 'src/app/const';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectGamePLayer } from 'src/store/selectors';

@Component({
  selector: 'app-prison-player',
  templateUrl: './prison-player.component.html',
  styleUrls: ['./prison-player.component.scss']
})
export class PrisonPlayerComponent {

  gamePLayer$ = this.store.select(selectGamePLayer);

  buttons: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.DICE_ROLL, width: '12vw', height: '6vh', show: this.checkAttempt() },
    { action: ACTIONS_BUTTON.PAY, width: '12vw', height: '6vh', show: true },
    { action: ACTIONS_BUTTON.SELL_STOCK, width: '12vw', height: '6vh', show: true },
    { action: ACTIONS_BUTTON.MORTGAGE, width: '12vw', height: '6vh', show: true }
  ]

  constructor(private store: Store<AppStore>) { }

  checkAttempt(): Observable<boolean> {
    return this.gamePLayer$.pipe(
      map((player) => player.prison.attempt > 0));
  }

  checkMoney(): Observable<boolean> {
    return this.gamePLayer$.pipe(
      map((player) => player.total > DEBT_PRISON)
    )
  }
}
