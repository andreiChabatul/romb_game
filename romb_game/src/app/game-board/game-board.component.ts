import { Component } from '@angular/core';
import { Cell } from '../types';
import { DoneBoard } from 'server_temp/done_board';
import { game } from '../app.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
  board = game.getBoard();
  // board: Cell[] = [
  //   { indexCell: 0, rightState: 'border', leftState: 'none', topState: 'none', bottomState: 'none', occupied: '1' },
  //   { indexCell: 1, rightState: 'none', leftState: 'none', topState: 'none', bottomState: 'none', occupied: '' },
  //   { indexCell: 2, rightState: 'none', leftState: 'none', topState: 'none', bottomState: 'none', occupied: '' },
  //   { indexCell: 3, rightState: 'none', leftState: 'playerOne', topState: 'none', bottomState: 'none', occupied: '2' },
  //   { indexCell: 4, rightState: 'none', leftState: 'none', topState: 'none', bottomState: 'none', occupied: '1' },
  //   { indexCell: 5, rightState: 'none', leftState: 'none', topState: 'none', bottomState: 'none', occupied: '2' },
  //   { indexCell: 6, rightState: 'none', leftState: 'none', topState: 'none', bottomState: 'none', occupied: '1' },
  //   { indexCell: 7, rightState: 'none', leftState: 'none', topState: 'playerTwo', bottomState: 'none', occupied: '2' },
  // ]

}
