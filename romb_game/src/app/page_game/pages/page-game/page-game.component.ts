import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGameRoom } from 'src/store/selectors';
import { AppStore, gameRoom } from 'src/app/types/state';
import { fullPlayer } from 'src/app/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.scss']
})
export class PageGameComponent implements OnInit, OnDestroy {

  gameRoom$ = this.store.select(selectGameRoom);
  gameRoom: gameRoom;
  players: fullPlayer[];
  subscription$: Subscription

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.gameRoom$.subscribe((gameRoom) => this.gameRoom = gameRoom);
    this.players = Object.values(this.gameRoom.players);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();

  }

  trackByFunction(index: number, item: fullPlayer) {
    return item ? item.id : undefined;
  }

}
