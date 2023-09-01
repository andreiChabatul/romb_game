import { Component, Input, OnInit } from '@angular/core';
import { gameCell } from 'src/app/types';

@Component({
  selector: 'app-game-cell-company',
  templateUrl: './game-cell-company.component.html',
  styleUrls: ['./game-cell-company.component.scss']
})
export class GameCellCompanyComponent implements OnInit {

  @Input() gameCell: gameCell;
  nameCompany: string;
  countryCompany: string;
  ownerShadow: string;
  imgStock: string;

  ngOnInit(): void {
    if (this.gameCell.cellCompany) {
      this.countryCompany = `./../../../assets/industry/${this.gameCell.cellCompany.countryCompany}.png`;
      this.nameCompany = `./../../../assets/logo/${this.gameCell.cellCompany.nameCompany}.png`;
      this.ownerShadow =
        `inset 0px 0px 81px 17px ${this.gameCell.owned ? this.gameCell.owned : "rgb(168, 166, 166)"}, 0px 0px 20px 4px ${this.gameCell.owned ? this.gameCell.owned : "rgb(168, 166, 166)"}`;
      if (this.gameCell.cellCompany.shares)
        this.imgStock = `./../../../assets/industry/${this.gameCell.cellCompany.shares[0]}.png`;
    }
  }
}
