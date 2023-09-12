import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, map, mergeMap } from 'rxjs';
import { AppStore } from 'src/app/types/state';
import { selectAllPlayer, selectBoard, selectIdUser, selectSellCompany } from 'src/store/selectors';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, OnDestroy {

  board$ = this.store.select(selectBoard);
  players$ = this.store.select(selectAllPlayer);
  userId$ = this.store.select(selectIdUser);
  sellCompany$ = this.store.select(selectSellCompany);
  isTurn: boolean;
  subscription$: Subscription;


  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.players$.pipe(
      mergeMap((players) => this.userId$.pipe(
        map((userId) => {
          const turnId = players.filter(player => player.isTurn)[0];
          console.log(turnId)
          if (turnId) {
            userId === turnId.id ? this.isTurn = true : this.isTurn = false;
          }
        })
      )
      )).subscribe();
  }


  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}


