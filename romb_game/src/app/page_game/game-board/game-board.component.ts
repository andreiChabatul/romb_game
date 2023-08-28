import { Component } from '@angular/core';
import { gameCell } from 'src/app/types';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {



  gameCells: gameCell[] = [
    { gridArea: '1/1/3/3' },
    { gridArea: '1/3/3/4' },
    { gridArea: '1/4/3/5' },
    { gridArea: '1/5/3/6' },
    { gridArea: '1/6/3/7' },
    { gridArea: '1/7/3/8' },
    { gridArea: '1/8/3/9' },
    { gridArea: '1/9/3/10' },
    { gridArea: '1/10/3/11' },
    { gridArea: '1/11/3/12' },
    { gridArea: '1/12/3/14' },
    { gridArea: '3/12/4/14' },
    { gridArea: '4/12/5/14' },
    { gridArea: '5/12/6/14' },
    { gridArea: '6/12/7/14' },
    { gridArea: '7/12/8/14' },
    { gridArea: '8/12/9/14' },
    { gridArea: '9/12/10/14' },
    { gridArea: '10/12/11/14' },
    { gridArea: '11/12/12/14', },
    { gridArea: '12/12/14/14' },
    {
      gridArea: '12/11/14/12',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'ferrari',
        priceCompany: 100
      },
    },
    { gridArea: '12/10/14/11', },
    {
      gridArea: '12/9/14/10',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'posteItaliane',
        priceCompany: 120
      },
    },
    { gridArea: '12/8/14/9' },
    { gridArea: '12/7/14/8' },
    {
      gridArea: '12/6/14/7',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'volkswagen',
        priceCompany: 111
      },
    },
    {
      gridArea: '12/5/14/6',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'volkswagen',
        priceCompany: 111
      },
    },
    { gridArea: '12/4/14/5' },
    {
      gridArea: '12/3/14/4',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'volkswagen',
        priceCompany: 111
      },
    },
    { gridArea: '12/1/14/3' },
    {
      gridArea: '12/1/11/3'
    },
    { gridArea: '11/1/10/3' },
    { gridArea: '10/1/9/3' },
    { gridArea: '9/1/8/3' },
    { gridArea: '8/1/7/3' },
    { gridArea: '7/1/6/3' },
    { gridArea: '6/1/5/3' },
    { gridArea: '5/1/4/3' },
    { gridArea: '3/1/3/3' }

  ]


}
