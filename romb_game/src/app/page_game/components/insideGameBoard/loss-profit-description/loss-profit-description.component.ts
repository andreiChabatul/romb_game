import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap } from 'rxjs';
import { TIME_TURN_DEFAULT, VALUE_CELL } from 'src/app/const';
import { TAX_10, TAX_5 } from 'src/app/const';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { gameCell } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { SetValueSellProfit } from 'src/store/actions';
import { selectGameRoom } from 'src/store/selectors';

@Component({
  selector: 'app-loss-profit-description',
  templateUrl: './loss-profit-description.component.html',
  styleUrls: ['./loss-profit-description.component.scss']
})
export class LossProfitDescriptionComponent implements OnInit {

  @Input() cell: gameCell;
  gameRoom$ = this.store.select(selectGameRoom);
  change: number = 0;
  isSend = true;

  constructor(private store: Store<AppStore>,
    private webSocketController: WebSocketController) { }

  ngOnInit(): void {
    if (this.cell.nameCell === 'loss' || this.cell.nameCell === 'profit') {
      this.change = Math.floor(Math.random() * VALUE_CELL.length);
    }
  }

  calcDebt(): Observable<number> {
    return this.gameRoom$.pipe(
      map((gameRoom) => {
        const nameCell = this.cell.nameCell;
        let debtValue: number;
        if (nameCell === 'tax5' || nameCell === 'tax10') {
          const valueTax = (nameCell === 'tax5' ? TAX_5 : TAX_10);
          debtValue = gameRoom.players[gameRoom.turnId].total * valueTax;
        } else {
          debtValue = VALUE_CELL[this.change];
        }
        this.store.dispatch(new SetValueSellProfit(debtValue));
        if (this.cell.nameCell === 'profit' && this.isSend) {
          this.isSend = false;
          setTimeout(() => this.webSocketController.sendMessage(EACTION_WEBSOCKET.CALC_VALUE_LS, {
            debtValue,
            action: 'profit',
          }), TIME_TURN_DEFAULT);
        }
        return debtValue;
      })
    )
  }

  checkEnoughMoney(): Observable<boolean> {
    return this.gameRoom$.pipe(
      mergeMap((gameRoom) => this.calcDebt().pipe(
        map((debt) => gameRoom.players[gameRoom.turnId].total > debt)
      ))
    );
  }

}
