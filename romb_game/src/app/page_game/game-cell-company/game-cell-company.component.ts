import { Component, Input, OnInit } from '@angular/core';
import { GameCellCompanyInfo } from 'src/app/types';

@Component({
  selector: 'app-game-cell-company',
  templateUrl: './game-cell-company.component.html',
  styleUrls: ['./game-cell-company.component.scss']
})
export class GameCellCompanyComponent implements OnInit {

  @Input() cellCompany: GameCellCompanyInfo;
  nameCompany: string;
  countryCompany: string;

  tepArr = [1];


  ngOnInit(): void {
    this.countryCompany = `./../../../assets/industry/${this.cellCompany.countryCompany}.png`;
    this.nameCompany = `./../../../assets/logo/${this.cellCompany.nameCompany}.png`;
 
  }



}
