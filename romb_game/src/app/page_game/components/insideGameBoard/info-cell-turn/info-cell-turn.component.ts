import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map, mergeMap } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { gameCell, infoCellButtons } from 'src/app/types';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectGameRoom, selectInfoCellTurn } from 'src/store/selectors';

const buttons: ButtonStandart[] = [
  { action: ACTIONS_BUTTON.PAY_RENT, width: '13vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.PAY, width: '13vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.SELL_STOCK, width: '13vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.MORTGAGE, width: '13vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.BUY_COMPANY, width: '13vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.START_AUCTION, width: '13vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.AUCTION_STEP, width: '13vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.AUCTION_LEAVE, width: '13vw', height: '6vh', show: true },
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
  infoCellTurn$ = this.store.select(selectInfoCellTurn);
  gameRoom$ = this.store.select(selectGameRoom);
  cell: gameCell;
  subscription$: Subscription;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
   
    this.subscription$ = this.infoCellTurn$.pipe(
      mergeMap((infoCell) => this.gameRoom$.pipe(
        map((gameBoard) => {
          if (infoCell) {
            this.cell = gameBoard.board[infoCell?.indexCompany];
            this.buttonsResult = this.updateButtons(infoCell.buttons);
          }
        })
      ))
    ).subscribe();
  }

  private updateButtons(type: infoCellButtons): ButtonStandart[] {
    switch (type) {
      case 'none':
        return [];
      case 'payRent':
        return [0, 2, 3].map((index) => buttons[index]);
      case 'pay':
        return [1, 2, 3].map((index) => buttons[index]);
      case 'buy':
        return [4, 5].map((index) => buttons[index]);
      case 'auction':
        return [6, 7].map((index) => buttons[index]);
      default:
        return [];
    }

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }



}
