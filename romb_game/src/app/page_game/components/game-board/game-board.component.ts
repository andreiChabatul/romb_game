import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map, mergeMap } from 'rxjs';
import { AppStore } from 'src/app/types/state';
import { selectAllPlayer, selectBoard, selectIdUser, selectInfoCellTurn } from 'src/store/selectors';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {

  board$ = this.store.select(selectBoard);
  players$ = this.store.select(selectAllPlayer);
  userId$ = this.store.select(selectIdUser);
  infoCellTurn$ = this.store.select(selectInfoCellTurn);
  numberPlayer: number;
  isTurn: boolean;
  subscription$: Subscription;
  minute: number = 1;
  seconds: number = 1;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.players$.pipe(
      mergeMap((players) => this.userId$.pipe(
        map((userId) => {
          const turnId = players.filter(player => player.isTurn)[0];
          const numberPlayers = players.filter((player) => player.id === userId);
          if (turnId) {
            userId === turnId.id ? this.isTurn = true : this.isTurn = false;
          } else {
            this.isTurn = false;
          }
          numberPlayers[0] ? this.numberPlayer = numberPlayers[0].numberPlayer : '';
        })
      )
      )).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
