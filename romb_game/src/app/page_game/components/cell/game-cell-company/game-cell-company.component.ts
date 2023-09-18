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
  imgStock: string;


  constructor(private webSocketController: WebSocketController) { }

  ngOnInit(): void {

    if (this.gameCell.cellCompany?.shares)
      this.imgStock = `./../../../assets/${this.gameCell.cellCompany?.shares[0]}.png`;
      console.log(this.numberPlayers)
  }

  buyStock(event: MouseEvent) {
    this.webSocketController.sendMessage(EACTION_WEBSOCKET.BUY_STOCK, { indexCompany: this.gameCell.indexCell });
    event.stopPropagation();

  }

}
