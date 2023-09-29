import { Component, Input } from '@angular/core';
import { GameCellSquare, cellDirections } from 'src/app/types';

@Component({
  selector: 'app-game-cell-square',
  templateUrl: './game-cell-square.component.html',
  styleUrls: ['./game-cell-square.component.scss']
})
export class GameCellSquareComponent {

  @Input() cellSquare: GameCellSquare;
  @Input() directions: cellDirections;

}
