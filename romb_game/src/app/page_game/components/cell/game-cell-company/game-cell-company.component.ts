import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, mergeMap } from 'rxjs';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { CompanyInfo, cellDirections, gameCell } from 'src/app/types';
import { AppStore, controlCompanyState } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { selectGamePLayer, selectInsideBoard } from 'src/store/selectors';

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
  insideBoard$ = this.store.select(selectInsideBoard);

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
    return this.insideBoard$.pipe(
      mergeMap((insideBoard => this.gamePlayer$.pipe(
        map((player) =>
          Boolean(player && insideBoard?.controlCompany === 'buyStock' &&
            player.id === this.gameCell.company?.owned &&
            this.gameCell.company.shares < 5 &&
            this.gameCell.company?.isMonopoly &&
            player.total >= this.gameCell.company?.priceStock &&
            this.gameCell.company?.priceStock))
      )))
    )
  }

  checkMortage(): Observable<boolean> {
    return this.insideBoard$.pipe(
      mergeMap((insideBoard => this.gamePlayer$.pipe(
        map((player) =>
          player && insideBoard?.controlCompany === 'pledgeCompany' &&
          player.id === this.gameCell.company?.owned &&
          !this.gameCell.company?.isPledge)
      )))
    )
  }

  checkBuyOut(): Observable<boolean> {
    return this.insideBoard$.pipe(
      mergeMap((insideBoard => this.gamePlayer$.pipe(
        map((player) =>
          player && insideBoard?.controlCompany === 'buyOutCompany' &&
          player.id === this.gameCell.company?.owned &&
          player.total >= this.gameCell.company.buyBackCompany &&
          this.gameCell.company?.isPledge)
      )))
    )
  }

  checkSellStock(): Observable<boolean> {
    return this.insideBoard$.pipe(
      mergeMap((insideBoard => this.gamePlayer$.pipe(
        map((player) =>
          Boolean(player && insideBoard?.controlCompany === 'sellStock' &&
            player.id === this.gameCell.company?.owned &&
            this.gameCell.company.countryCompany !== 'japan' &&
            this.gameCell.company.countryCompany !== 'ukraine' &&
            this.gameCell?.company?.shares > 0))
      )))
    )
  }

}
