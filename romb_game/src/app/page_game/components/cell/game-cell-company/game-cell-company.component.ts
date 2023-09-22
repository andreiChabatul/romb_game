import { Component, Input, OnInit } from '@angular/core';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { gameCell } from 'src/app/types';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';

@Component({
  selector: 'app-game-cell-company',
  templateUrl: './game-cell-company.component.html',
  styleUrls: ['./game-cell-company.component.scss']
})
export class GameCellCompanyComponent implements OnInit {

  @Input() gameCell: gameCell;
  @Input() numberPlayers: number;
  stockArray: null[];
  isBuyStock: boolean;
  constructor(private webSocketController: WebSocketController) { }

  ngOnInit(): void {
    this.isBuyStock = false;
    this.stockArray = new Array(this.gameCell.cellCompany?.shares);
    this.checkBuyStock();
  }

  buyStock(event: MouseEvent) {
    this.webSocketController.sendMessage(EACTION_WEBSOCKET.BUY_STOCK, { indexCompany: this.gameCell.indexCell });
    event.stopPropagation();
  }


  private checkBuyStock(): void {
    if (Number(this.gameCell.cellCompany?.shares) < 5
      && this.gameCell.cellCompany?.owned === this.numberPlayers
      && this.gameCell.cellCompany?.isMonopoly
      && this.gameCell.cellCompany?.priceStock) {
      this.isBuyStock = true;
    }
  }

}
