import { Component, Input,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { gameCell } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { OpenInfoCell } from 'src/store/actions';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent  {

  @Input() gameCellInfo: gameCell;
  @Input() numberPlayers: number;

  constructor(private store: Store<AppStore>) { }

  clickCellInfo() {
    this.store.dispatch(new OpenInfoCell(this.gameCellInfo.indexCell));
  }

}
