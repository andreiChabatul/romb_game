import { Component } from '@angular/core';
import { Player } from 'src/app/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllPlayer } from 'src/store/selectors';
import { AppStore } from 'src/app/types/state';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.scss']
})
export class PageGameComponent {

  players$: Observable<Player[]> = this.store.select(selectAllPlayer);

  constructor(private store: Store<AppStore>) { }

}
