import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeMap, map, Subscription } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectGamePLayer, selectGameRoom, selectIdUser } from 'src/store/selectors';


@Component({
  selector: 'app-start-turn-buttons',
  templateUrl: './start-turn-buttons.component.html',
  styleUrls: ['./start-turn-buttons.component.scss']
})
export class StartTurnButtonsComponent implements OnDestroy {

  isBuyStock: boolean = false;
  isBuyCompany: boolean = false;;
  userId$ = this.store.select(selectIdUser);
  selectGameRoom$ = this.store.select(selectGameRoom);
  player$ = this.store.select(selectGamePLayer);
  subscription$: Subscription;

  buttons: ButtonStandart[] = [
    { action: ACTIONS_BUTTON.DICE_ROLL, width: '18vw', height: '7vh', show: true },
    { action: ACTIONS_BUTTON.OFFER_DEAL, width: '18vw', height: '7vh', show: true },
    { action: ACTIONS_BUTTON.BUY_STOCK, width: '18vw', height: '7vh', show: this.checkButtonState()[0] },
    { action: ACTIONS_BUTTON.BUY_OUT_COMPANY, width: '18vw', height: '7vh', show: this.checkButtonState()[1] },
  ]

  constructor(private store: Store<AppStore>) { }

  checkButtonState(): boolean[] {
    const result: boolean[] = [false, false];
    this.subscription$ = this.userId$.pipe(
      mergeMap((userId => this.selectGameRoom$.pipe(
        map((gameRoom) => {
          gameRoom.board.forEach((cell) => {
            if (cell.cellCompany?.owned === userId) {
              cell.cellCompany?.isMonopoly ? result[0] = true : '';
              cell.cellCompany?.isPledge ? result[1] = true : '';
            }
          });
        }
        )
      )))
    ).subscribe();
    return result;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
