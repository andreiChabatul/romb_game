import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectCellGameState } from 'src/store/selectors';

@Component({
  selector: 'app-info-cell-turn',
  templateUrl: './info-cell-turn.component.html',
  styleUrls: ['./info-cell-turn.component.scss']
})
export class InfoCellTurnComponent {

  cellGameState$ = this.store.select(selectCellGameState);

  constructor(private store: Store<AppStore>) { }

}
