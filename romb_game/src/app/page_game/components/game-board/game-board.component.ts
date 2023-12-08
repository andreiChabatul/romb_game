import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fullPlayer, gameCell } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { selectAllPlayerArr, selectGameRoom } from 'src/store/selectors';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {

  gameRoom$ = this.store.select(selectGameRoom);
  allPlayerArr$ = this.store.select(selectAllPlayerArr)
  
  constructor(private store: Store<AppStore>) { }

  trackByFunction(index: number, item: gameCell) {
    return item ? item.indexCell : undefined;
  }

  trackByPlayer(index: number, item: fullPlayer) {
    return item ? item.id : undefined;
  }
}
