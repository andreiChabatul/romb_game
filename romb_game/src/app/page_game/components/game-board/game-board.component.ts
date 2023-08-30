import { Component } from '@angular/core';
import { gameCell } from 'src/app/types';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {



  gameCells: gameCell[] = [
    {
      gridArea: '1/1/3/3',
      cellSquare: {
        imageCell: 'start',
        textCell: 'Sallary 200'
      }
    },
    {
      gridArea: '1/3/3/4',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'posteItaliane',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/4/3/5',
      cellCompany: {
        countryCompany: 'ukraine',
        nameCompany: 'ukranafta',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/5/3/6',
      cellSquare: {
        imageCell: 'chance',
        textCell: 'Chance'
      }
    },
    { gridArea: '1/6/3/7' },
    { gridArea: '1/7/3/8' },
    { gridArea: '1/8/3/9' },
    { gridArea: '1/9/3/10' },
    { gridArea: '1/10/3/11' },
    { gridArea: '1/11/3/12' },
    { gridArea: '1/12/3/13' },
    { gridArea: '1/13/3/14', },
    {
      gridArea: '1/14/3/15',
      cellSquare: {
        imageCell: 'security',
        textCell: 'Go to jail'
      }
    },
    { gridArea: '3/14/4/15' },
    { gridArea: '4/14/5/15' },
    { gridArea: '5/14/6/15' },
    { gridArea: '6/14/7/15' },
    { gridArea: '7/14/8/15' },
    { gridArea: '8/14/9/15' },
    {
      gridArea: '9/14/11/15',
      cellSquare: {
        imageCell: 'parking',
        textCell: 'Rest zone'
      }
    },
    {
      gridArea: '9/13/11/14',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'ferrari',
        priceCompany: 100
      },
    },
    {
      gridArea: '9/12/11/13',
      cellCompany: {
        countryCompany: 'japan',
        nameCompany: 'canon',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/11/11/12',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'uniCredit',
        priceCompany: 120
      },
    },
    {
      gridArea: '9/10/11/11',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'posteItaliane',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/9/11/10',
      cellSquare: {
        imageCell: 'chance',
        textCell: 'Chance'
      }
    },
    {
      gridArea: '9/8/11/9',
      cellCompany: {
        countryCompany: 'ukraine',
        nameCompany: 'ukranafta',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/7/11/8',
      cellSquare: {
        imageCell: 'mysteryBox',
        textCell: 'Mystery'
      }
    },
    {
      gridArea: '9/6/11/7',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'volkswagen',
        priceCompany: 111
      },
    },
    {
      gridArea: '9/5/11/6',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'allianz',
        priceCompany: 111
      },
    },
    {
      gridArea: '9/4/11/5',
      cellCompany: {
        countryCompany: 'japan',
        nameCompany: 'honda',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/3/11/4',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'continental',
        priceCompany: 111
      },
    },
    {
      gridArea: '9/3/11/1',
      cellSquare: {
        imageCell: 'inJail',
        textCell: 'In jail'
      }
    },
    { gridArea: '9/1/8/3' },
    { gridArea: '8/1/7/3' },
    {
      gridArea: '7/1/6/3',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'allianz',
        priceCompany: 111
      }
    },
    {
      gridArea: '6/1/5/3',
      cellSquare: {
        imageCell: 'chance',
        textCell: 'Chance'
      }
    },
    { gridArea: '5/1/4/3' },
    { gridArea: '3/1/3/3' }

  ]


}
