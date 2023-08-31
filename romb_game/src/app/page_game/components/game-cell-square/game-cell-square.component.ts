import { Component, Input, OnInit } from '@angular/core';
import { GameCellSquare, cellDirections } from 'src/app/types';

@Component({
  selector: 'app-game-cell-square',
  templateUrl: './game-cell-square.component.html',
  styleUrls: ['./game-cell-square.component.scss']
})
export class GameCellSquareComponent implements OnInit {

  @Input() cellSquare: GameCellSquare;
  @Input() directions: cellDirections;
  imageCell: string;

  ngOnInit(): void {
    this.imageCell = `./../../../assets/board/${this.cellSquare.imageCell}.png`;
  }

}
