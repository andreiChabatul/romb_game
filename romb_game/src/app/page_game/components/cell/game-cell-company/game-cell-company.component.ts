import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap } from 'rxjs';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { CompanyInfo, cellDirections, gameCell } from 'src/app/types';
import { AppStore, controlCompanyState } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { selectControlCompanyState, selectGamePLayer } from 'src/store/selectors';

@Component({
  selector: 'app-game-cell-company',
  templateUrl: './game-cell-company.component.html',
  styleUrls: ['./game-cell-company.component.scss']
})
export class GameCellCompanyComponent implements OnChanges, OnInit {

  @Input() gameCell: gameCell;
  companyInfo: CompanyInfo | undefined;
  cellDirections: cellDirections;
  gamePlayer$ = this.store.select(selectGamePLayer);
  controlCompanyState$ = this.store.select(selectControlCompanyState);

  constructor(private webSocketController: WebSocketController, private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.cellDirections = this.gameCell.location.cellDirections;
  }

  ngOnChanges(): void {
    this.companyInfo = this.gameCell.company;
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
      mergeMap((action => this.gamePlayer$.pipe(
        map((player) =>
          Boolean(player && action === 'buyStock' &&
            player.id === this.gameCell.company?.owned &&
            this.gameCell.company.shares < 5 &&
            this.gameCell.company?.isMonopoly &&
            player.total >= this.gameCell.company?.priceStock &&
            this.gameCell.company?.priceStock))
      )))
    )
  }

  checkMortage(): Observable<boolean> {
    return this.controlCompanyState$.pipe(
      mergeMap((action => this.gamePlayer$.pipe(
        map((player) =>
          player && action === 'pledgeCompany' &&
          player.id === this.gameCell.company?.owned &&
          !this.gameCell.company?.isPledge)
      )))
    )
  }

  checkBuyOut(): Observable<boolean> {
    return this.controlCompanyState$.pipe(
      mergeMap((action => this.gamePlayer$.pipe(
        map((player) =>
          player && action === 'buyOutCompany' &&
          player.id === this.gameCell.company?.owned &&
          player.total >= this.gameCell.company.buyBackCompany &&
          this.gameCell.company?.isPledge)
      )))
    )
  }

  checkSellStock(): Observable<boolean> {
    return this.controlCompanyState$.pipe(
      mergeMap((action => this.gamePlayer$.pipe(
        map((player) =>
          Boolean(player && action === 'sellStock' &&
            player.id === this.gameCell.company?.owned &&
            this.gameCell.company.countryCompany !== 'japan' &&
            this.gameCell.company.countryCompany !== 'ukraine' &&
            this.gameCell?.company?.shares > 0))
      )))
    )
  }

}
