import { Component, Input } from '@angular/core';
import { gameCell } from 'src/app/types';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent {

  @Input() gameCellInfo: gameCell;

}
