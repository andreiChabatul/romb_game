import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map, mergeMap } from 'rxjs';
import { Player } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { selectIdUser, selectPlayerTurnId } from 'src/store/selectors';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.scss']
})
export class InfoPlayerComponent implements OnInit, OnDestroy {
  @Input() player: Player;
  srcImg: string;
  isTurn: boolean;
  playerTurnId$ = this.store.select(selectPlayerTurnId);
  userId$ = this.store.select(selectIdUser);
  subscription$: Subscription;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.userId$.pipe(
      mergeMap(userId => this.playerTurnId$.pipe(
        map((turnId) => userId === turnId ? this.isTurn = true : this.isTurn = false)
      ))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
