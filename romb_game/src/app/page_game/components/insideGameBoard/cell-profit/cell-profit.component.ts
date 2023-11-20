import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectInfoCellTurn } from 'src/store/selectors';

@Component({
  selector: 'app-cell-profit',
  templateUrl: './cell-profit.component.html',
  styleUrls: ['./cell-profit.component.scss']
})
export class CellProfitComponent {

  infoCellTurn$ = this.store.select(selectInfoCellTurn);

  constructor(private store: Store<AppStore>) { }

}