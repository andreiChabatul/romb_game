import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectInfoCellTurn } from 'src/store/selectors';

@Component({
  selector: 'app-cell-tax',
  templateUrl: './cell-tax.component.html',
  styleUrls: ['./cell-tax.component.scss']
})
export class CellTaxComponent {

  infoCellTurn$ = this.store.select(selectInfoCellTurn);

  constructor(private store: Store<AppStore>) { }

}
