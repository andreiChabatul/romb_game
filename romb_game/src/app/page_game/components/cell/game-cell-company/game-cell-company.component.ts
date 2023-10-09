import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap } from 'rxjs';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { cellDirections, gameCell } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { selectIdUser, selectInsideBoardState } from 'src/store/selectors';

@Component({
  selector: 'app-game-cell-company',
  templateUrl: './game-cell-company.component.html',
  styleUrls: ['./game-cell-company.component.scss']
})
export class GameCellCompanyComponent implements OnInit {

  @Input() gameCell: gameCell;
  stockArray: null[];
  cellDirections: cellDirections;
  userId$ = this.store.select(selectIdUser);
  insideBoardState$ = this.store.select(selectInsideBoardState);

  constructor(private webSocketController: WebSocketController, private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.stockArray = new Array(this.gameCell.cellCompany?.shares);
    this.cellDirections = this.gameCell.location.cellDirections;
  }

  buyStock(event: MouseEvent) {
    this.webSocketController.sendMessage(EACTION_WEBSOCKET.BUY_STOCK, { indexCompany: this.gameCell.indexCell });
    event.stopPropagation();
  }

  checkBuyStock(): Observable<boolean> {

    return this.insideBoardState$.pipe(
      mergeMap((action => this.userId$.pipe(
        map((userId) =>
          Boolean(action === 'buyStock' &&
            userId === this.gameCell.cellCompany?.owned &&
            this.stockArray.length < 5 &&
            this.gameCell.cellCompany?.isMonopoly &&
            this.gameCell.cellCompany?.priceStock))
      )))
    )
  }

}
