import { Component, Input } from '@angular/core';
import { Cell, side, stateCell } from '../types';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() cell: Cell

  clickLine(side: side) {
    console.log(this.cell.indexCell, side)
  }





}
