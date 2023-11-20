import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map, switchMap, take } from 'rxjs';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { Player, gameCell, infoCellButtons } from 'src/app/types';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { selectGamePLayer, selectGameRoom, selectInsideBoard } from 'src/store/selectors';

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
  insideBoard$ = this.store.select(selectInsideBoard);
  gameRoom$ = this.store.select(selectGameRoom);
  gamePlayer$ = this.store.select(selectGamePLayer);
  player: Player;
  debtAmount: number;
  cell: gameCell;
  subscription$: Subscription;
  isPay: boolean;

  constructor(private store: Store<AppStore>, private webSocketController: WebSocketController) { }

  ngOnInit(): void {

    this.subscription$ = this.insideBoard$.pipe(
      switchMap((insideBoard) => this.gameRoom$.pipe(
        switchMap((gameBoard) => this.gamePlayer$.pipe(
          map((player) => {
            return { insideBoard, gameBoard, player };
          })))))).subscribe(value => {
            if (value.insideBoard.infoCellTurn) {
              this.cell = value.gameBoard.board[value.insideBoard.infoCellTurn.indexCompany];
              this.buttonsResult = this.updateButtons(value.insideBoard.infoCellTurn.buttons);
              this.debtAmount = this.cell.cellCompany ? this.cell.cellCompany.rentCompany : Number(value.insideBoard.valueSellProfit);
              this.isPay = value.player.total < this.debtAmount;
              this.player = value.player;
            }
          });
    // .player.capital < this.debtAmount ? this.webSocketController.sendMessage(EACTION_WEBSOCKET.BANKRUPT) : '';
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
