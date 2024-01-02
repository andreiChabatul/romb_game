import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map, switchMap } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { gameCell, infoCellButtons } from 'src/app/types';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectGamePLayer, selectGameRoom } from 'src/store/selectors';

const buttons: ButtonStandart[] = [
  { action: ACTIONS_BUTTON.PAY, width: '13vw', height: '6vh' },
  { action: ACTIONS_BUTTON.SELL_STOCK, width: '13vw', height: '6vh' },
  { action: ACTIONS_BUTTON.MORTGAGE, width: '13vw', height: '6vh' },
  { action: ACTIONS_BUTTON.BUY_COMPANY, width: '13vw', height: '6vh' },
  { action: ACTIONS_BUTTON.START_AUCTION, width: '13vw', height: '6vh' },
  { action: ACTIONS_BUTTON.LEAVE_GAME, width: '13vw', height: '6vh' },
  { action: ACTIONS_BUTTON.STAY_GAME, width: '13vw', height: '6vh' },
]

@Component({
  selector: 'app-info-cell-turn',
  templateUrl: './info-cell-turn.component.html',
  styleUrls: ['./info-cell-turn.component.scss'],
  animations: [
    trigger('animationTriggerName', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ])
    ])
  ]
})
export class InfoCellTurnComponent implements OnInit, OnDestroy {

  buttonsResult: ButtonStandart[] = [];
  gameRoom$ = this.store.select(selectGameRoom);
  gamePlayer$ = this.store.select(selectGamePLayer);
  cell: gameCell;
  subscription$: Subscription;
  isPay: boolean;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {

    this.subscription$ = this.gameRoom$.pipe(
      switchMap((gameRoom) => this.gamePlayer$.pipe(
        map((player) => {
          return { gameRoom, player };
        })))).subscribe(value => {
          const infoCellTurn = value.gameRoom.infoCellTurn;
          if (infoCellTurn) {
            this.cell = value.gameRoom.board[infoCellTurn.indexCompany];
            this.buttonsResult = this.updateButtons(infoCellTurn.buttons);
            this.isPay = value.player.total < Number(infoCellTurn.value);
          }
        });
  }

  private updateButtons(type: infoCellButtons): ButtonStandart[] {
    switch (type) {
      case 'none':
        return [];
      case 'pay':
        return [0, 1, 2].map((index) => buttons[index]);
      case 'buy':
        return [3, 4].map((index) => buttons[index]);
      case 'bankrupt':
        return [5, 6].map((index) => buttons[index]);
      default:
        return [];
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
