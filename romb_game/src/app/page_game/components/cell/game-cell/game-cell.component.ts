import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, gameCell } from 'src/app/types';
import { OpenInfoCell } from 'src/store/actions';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent {

  @Input() gameCellInfo: gameCell;

  constructor(private store: Store<AppStore>) { }

  clickCellInfo() {
    this.store.dispatch(new OpenInfoCell(this.gameCellInfo.indexCell));
  }

}
