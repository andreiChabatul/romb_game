import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectInfoCellTurn } from 'src/store/selectors';

@Component({
  selector: 'app-cell-loss',
  templateUrl: './cell-loss.component.html',
  styleUrls: ['./cell-loss.component.scss']
})
export class CellLossComponent {

  infoCellTurn$ = this.store.select(selectInfoCellTurn);

  constructor(private store: Store<AppStore>) { }

}