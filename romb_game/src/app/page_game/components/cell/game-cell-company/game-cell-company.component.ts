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
  imgStock: string;

  ngOnInit(): void {
    if (this.gameCell.cellCompany) {
      this.countryCompany = `./../../../assets/industry/${this.gameCell.cellCompany.countryCompany}.png`;
      this.nameCompany = `./../../../assets/logo/${this.gameCell.cellCompany.nameCompany}.png`;
      if (this.gameCell.cellCompany.shares)
        this.imgStock = `./../../../assets/industry/${this.gameCell.cellCompany.shares[0]}.png`;
    }
  }
}
