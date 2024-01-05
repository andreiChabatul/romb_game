import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map, mergeMap } from 'rxjs';
import { AudioServices } from 'src/app/shared/services/audio.services';
import { AppStore } from 'src/app/types/state';
import { selectGameRoom, selectInfoUser } from 'src/store/selectors';

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
  isWinner: boolean;
  subscription$: Subscription;

  constructor(private store: Store<AppStore>, private audioServices: AudioServices) { }

  ngOnInit(): void {
    this.subscription$ = this.gameRoom$.pipe(
      mergeMap((gameRoom) => this.infoUser$.pipe(
        map((infoUser) => {
          if (gameRoom.winner) {
            this.isWinner = (infoUser?.id === gameRoom.winner);
            const player = gameRoom.players[gameRoom.winner];
            this.nameWinner = player.nickName;
            this.photoWinner = player.image;
          }
        })))).subscribe();
    if (this.isWinner) {
      this.audioServices.playAudioSpec('winner');
    };
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
