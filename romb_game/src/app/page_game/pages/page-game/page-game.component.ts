import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPlayerArr } from 'src/store/selectors';
import { AppStore } from 'src/app/types/state';
import { Player } from 'src/app/types';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.scss']
})
export class PageGameComponent {

  players$ = this.store.select(selectAllPlayerArr);


  constructor(private store: Store<AppStore>) { }

  trackByFunction(index: number, item: Player) {
    return item ? item.id : undefined;
  }

}
