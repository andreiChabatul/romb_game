import { Component, Input, OnInit } from '@angular/core';
import { gameCell } from 'src/app/types';

@Component({
  selector: 'app-game-cell-company',
  templateUrl: './game-cell-company.component.html',
  styleUrls: ['./game-cell-company.component.scss']
})
export class GameCellCompanyComponent implements OnInit {

  @Input() gameCell: gameCell;
  imgStock: string;

  ngOnInit(): void {

    if (this.gameCell.cellCompany?.shares)
      this.imgStock = `./../../../assets/industry/${this.gameCell.cellCompany?.shares[0]}.png`;
  }

}
