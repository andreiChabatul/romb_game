import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { fullPlayer } from 'src/app/types';
import { ButtonStandart } from 'src/app/types/components';
import { AppStore } from 'src/app/types/state';
import { selectGamePlayer, selectGameRoom } from 'src/store/selectors';

@Component({
  selector: 'app-player-info-inside',
  templateUrl: './player-info-inside.component.html',
  styleUrls: ['./player-info-inside.component.scss']
})
export class PlayerInfoInsideComponent implements OnInit, OnDestroy {

  player$ = this.store.select(selectGamePlayer);
  player: fullPlayer | null;
  gameRoom$ = this.store.select(selectGameRoom);
  subscription$: Subscription;
  leaveGameButton: ButtonStandart = { action: ACTIONS_BUTTON.LEAVE_GAME, width: '15vw', height: '3vw' };

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.player$.subscribe((player) => this.player = player)
  }

  amountCompany(): Observable<number> {
    return this.gameRoom$.pipe(
      map((gameRoom) =>
        gameRoom?.board?.reduce((res, cell) =>
          res + ((cell.company && cell.company.owned === this.player?.id) ? 1 : 0), 0))
    )
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
