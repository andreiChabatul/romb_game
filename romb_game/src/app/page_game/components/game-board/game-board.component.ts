import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectBoard } from 'src/store/selectors';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {

  board$ = this.store.select(selectBoard);
  
  constructor(private store: Store<AppStore>) { }

}
