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
      cellDirections: 'top',
      cellSquare: {
        imageCell: 'start',
        textCell: 'Sallary 200'
      }
    },
    {
      gridArea: '1/3/3/4',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'britania',
        nameCompany: 'hsbc',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/4/3/5',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'japan',
        nameCompany: 'fujitsu',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/5/3/6',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'britania',
        nameCompany: 'rr',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/6/3/7',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'britania',
        nameCompany: 'bp',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/7/3/8',
      cellDirections: 'top',
      cellSquare: {
        imageCell: 'chance',
        textCell: 'Chance'
      }
    },
    {
      gridArea: '1/8/3/9',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'ukraine',
        nameCompany: 'uia',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/9/3/10',
      cellDirections: 'top',
      cellSquare: {
        imageCell: 'mysteryBox',
        textCell: 'Mystery'
      }
    },
    {
      gridArea: '1/10/3/11',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'sweden',
        nameCompany: 'ericsson',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/11/3/12',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'japan',
        nameCompany: 'mitsubishi',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/12/3/13',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'sweden',
        nameCompany: 'volvo',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/13/3/14',
      cellDirections: 'top',
      cellCompany: {
        countryCompany: 'sweden',
        nameCompany: 'essity',
        priceCompany: 120
      }
    },
    {
      gridArea: '1/14/3/15',
      cellDirections: 'top',
      cellSquare: {
        imageCell: 'security',
        textCell: 'Go to jail'
      }
    },
    {
      gridArea: '3/14/4/15',
      cellDirections: 'right',
      cellCompany: {
        countryCompany: 'canada',
        nameCompany: 'rbc',
        priceCompany: 120
      }
    },
    {
      gridArea: '4/14/5/15',
      cellDirections: 'right',
      cellCompany: {
        countryCompany: 'canada',
        nameCompany: 'telus',
        priceCompany: 120
      }
    },
    {
      gridArea: '5/14/6/15',
      cellDirections: 'right',
      cellCompany: {
        countryCompany: 'kazah',
        nameCompany: 'ttc',
        priceCompany: 120
      }
    },
    {
      gridArea: '6/14/7/15',
      cellDirections: 'right',
      cellSquare: {
        imageCell: 'tax',
        textCell: 'Tax 5%'
      }

    },
    {
      gridArea: '7/14/8/15',
      cellDirections: 'right',
      cellCompany: {
        countryCompany: 'kazah',
        nameCompany: 'kaz',
        priceCompany: 120
      }
    },
    {
      gridArea: '8/14/9/15',
      cellDirections: 'right',
      cellCompany: {
        countryCompany: 'kazah',
        nameCompany: 'kazAzot',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/14/11/15',
      cellDirections: 'bottom',
      cellSquare: {
        imageCell: 'parking',
        textCell: 'Rest zone'
      }
    },
    {
      gridArea: '9/13/11/14',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'ferrari',
        priceCompany: 100
      },
    },
    {
      gridArea: '9/12/11/13',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'japan',
        nameCompany: 'canon',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/11/11/12',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'uniCredit',
        priceCompany: 120
      },
    },
    {
      gridArea: '9/10/11/11',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'italia',
        nameCompany: 'posteItaliane',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/9/11/10',
      cellDirections: 'bottom',
      cellSquare: {
        imageCell: 'chance',
        textCell: 'Chance'
      }
    },
    {
      gridArea: '9/8/11/9',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'ukraine',
        nameCompany: 'ukranafta',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/7/11/8',
      cellDirections: 'bottom',
      cellSquare: {
        imageCell: 'mysteryBox',
        textCell: 'Mystery'
      }
    },
    {
      gridArea: '9/6/11/7',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'volkswagen',
        priceCompany: 111
      },
    },
    {
      gridArea: '9/5/11/6',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'allianz',
        priceCompany: 111
      },
    },
    {
      gridArea: '9/4/11/5',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'japan',
        nameCompany: 'honda',
        priceCompany: 120
      }
    },
    {
      gridArea: '9/3/11/4',
      cellDirections: 'bottom',
      cellCompany: {
        countryCompany: 'germany',
        nameCompany: 'continental',
        priceCompany: 111
      },
    },
    {
      gridArea: '9/3/11/1',
      cellDirections: 'bottom',
      cellSquare: {
        imageCell: 'inJail',
        textCell: 'In jail'
      }
    },
    {
      gridArea: '9/1/8/3',
      cellDirections: 'left',
      cellCompany: {
        countryCompany: 'china',
        nameCompany: 'aliexpress',
        priceCompany: 111
      }
    },
    {
      gridArea: '8/1/7/3',
      cellDirections: 'left',
      cellCompany: {
        countryCompany: 'china',
        nameCompany: 'xiaomi',
        priceCompany: 111
      }
    },
    {
      gridArea: '7/1/6/3',
      cellDirections: 'left',
      cellCompany: {
        countryCompany: 'usa',
        nameCompany: 'google',
        priceCompany: 111
      }
    },
    {
      gridArea: '6/1/5/3',
      cellDirections: 'left',
      cellSquare: {
        imageCell: 'tax',
        textCell: 'Tax 10%'
      }
    },
    {
      gridArea: '5/1/4/3',
      cellDirections: 'left',
      cellCompany: {
        countryCompany: 'usa',
        nameCompany: 'WD',
        priceCompany: 111
      }
    },
    {
      gridArea: '3/1/3/3',
      cellDirections: 'left',
      cellCompany: {
        countryCompany: 'usa',
        nameCompany: 'ibm',
        priceCompany: 111
      }
    }

  ]


}
