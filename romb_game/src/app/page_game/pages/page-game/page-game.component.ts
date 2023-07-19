import { Component } from '@angular/core';
import { Player } from 'src/app/types';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.scss']
})
export class PageGameComponent {

  tempPlayer: Player[] = [
    { id: 1, name: "Andrei", total: 625, isTurn: false, type: 'playerOne' },
    { id: 2, name: "Maks", total: 25, isTurn: false, type: 'playerTwo' },
    { id: 3, name: "Oleg", total: 12, isTurn: true, type: 'playerThree' },
    { id: 4, name: "Polina", total: 32, isTurn: false, type: 'playerFour' }
  ]

}
