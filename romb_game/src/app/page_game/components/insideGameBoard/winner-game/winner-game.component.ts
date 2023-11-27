import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map, mergeMap } from 'rxjs';
import { AppStore } from 'src/app/types/state';
import { selectGameRoom, selectIdUser } from 'src/store/selectors';

@Component({
  selector: 'app-winner-game',
  templateUrl: './winner-game.component.html',
  styleUrls: ['./winner-game.component.scss']
})
export class WinnerGameComponent implements OnInit, OnDestroy {

  gameRoom$ = this.store.select(selectGameRoom);
  userId$ = this.store.select(selectIdUser);
  nameWinner: string;
  photoWinner: string;
  subscription$: Subscription;
  isWinner: boolean;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.gameRoom$.pipe(
      mergeMap((gameRoom) => this.userId$.pipe(
        map((userId) => {
          this.isWinner = userId === gameRoom.winner;
          return gameRoom;
        })))).subscribe((gameRoom) => {
          if (gameRoom.winner) {
            this.nameWinner = gameRoom.players[gameRoom.winner].name;
          };
        });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
