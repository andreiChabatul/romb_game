import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map, mergeMap } from 'rxjs';
import { AppStore } from 'src/app/types/state';
import { selectGameRoom, selectInfoUser, selectUser } from 'src/store/selectors';

@Component({
  selector: 'app-winner-game',
  templateUrl: './winner-game.component.html',
  styleUrls: ['./winner-game.component.scss']
})
export class WinnerGameComponent implements OnInit, OnDestroy {

  gameRoom$ = this.store.select(selectGameRoom);
  infoUser$ = this.store.select(selectInfoUser);
  nameWinner: string;
  photoWinner: string;
  subscription$: Subscription;
  isWinner: boolean;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.gameRoom$.pipe(
      mergeMap((gameRoom) => this.infoUser$.pipe(
        map((infoUser) => {
          this.isWinner = (infoUser?.id === gameRoom.winner);
          return gameRoom;
        })))).subscribe((gameRoom) => {
          if (gameRoom.winner) {
            this.nameWinner = gameRoom.players[gameRoom.winner].nickName;
          };
        });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
