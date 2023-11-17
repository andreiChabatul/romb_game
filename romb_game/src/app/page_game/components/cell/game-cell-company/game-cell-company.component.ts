import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap } from 'rxjs';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { cellDirections, gameCell } from 'src/app/types';
import { AppStore, controlCompanyState } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { selectIdUser, selectControlCompanyState } from 'src/store/selectors';

@Component({
  selector: 'app-game-cell-company',
  templateUrl: './game-cell-company.component.html',
  styleUrls: ['./game-cell-company.component.scss']
})
export class GameCellCompanyComponent implements OnInit {

  @Input() gameCell: gameCell;
  cellDirections: cellDirections;
  userId$ = this.store.select(selectIdUser);
  controlCompanyState$ = this.store.select(selectControlCompanyState);

  constructor(private webSocketController: WebSocketController, private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.cellDirections = this.gameCell.location.cellDirections;
  }

  controlCompany(event: MouseEvent, action: controlCompanyState) {
    this.webSocketController.sendMessage(EACTION_WEBSOCKET.CONTROL_COMPANY, {
      indexCompany: this.gameCell.indexCell,
      action
    });
    event.stopPropagation();
  }

  checkBuyStock(): Observable<boolean> {
    return this.controlCompanyState$.pipe(
      mergeMap((action => this.userId$.pipe(
        map((userId) =>
          Boolean(userId && action === 'buyStock' &&
            userId === this.gameCell.cellCompany?.owned &&
            this.gameCell.cellCompany.shares < 5 &&
            this.gameCell.cellCompany?.isMonopoly &&
            this.gameCell.cellCompany?.priceStock))
      )))
    )
  }

  checkMortage(): Observable<boolean> {
    return this.controlCompanyState$.pipe(
      mergeMap((action => this.userId$.pipe(
        map((userId) =>
          Boolean(action === 'pledgeCompany' &&
            userId === this.gameCell.cellCompany?.owned &&
            !this.gameCell.cellCompany?.isPledge))
      )))
    )
  }

  checkBuyOut(): Observable<boolean> {
    return this.controlCompanyState$.pipe(
      mergeMap((action => this.userId$.pipe(
        map((userId) =>
          Boolean(action === 'buyOutCompany' &&
            userId === this.gameCell.cellCompany?.owned &&
            this.gameCell.cellCompany?.isPledge))
      )))
    )
  }

  checkSellStock(): Observable<boolean> {
    return this.controlCompanyState$.pipe(
      mergeMap((action => this.userId$.pipe(
        map((userId) =>
          Boolean(userId && action === 'sellStock' &&
            userId === this.gameCell.cellCompany?.owned &&
            this.gameCell.cellCompany.countryCompany !== 'japan' &&
            this.gameCell.cellCompany.countryCompany !== 'ukraine' &&
            this.gameCell.cellCompany?.shares > 0))
      )))
    )
  }

}
