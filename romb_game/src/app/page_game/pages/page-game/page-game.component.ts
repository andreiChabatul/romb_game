import { Component } from '@angular/core';
import { AppStore, Player } from 'src/app/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllPlayer } from 'src/store/selectors';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.scss']
})
export class PageGameComponent {

  players$: Observable<Player[]> = this.store.select(selectAllPlayer);

  constructor(private store: Store<AppStore>) { }

}
