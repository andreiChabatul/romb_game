import { Component, Input } from '@angular/core';
import { Cell, side, stateCell } from '../types';
import { game } from '../app.component';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() cell: Cell

  clickLine(side: side) {
    game.clickLine(side, this.cell.indexCell, 'playerOne')
  }





}
