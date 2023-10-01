import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { gameCell } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { OpenInfoCell } from 'src/store/actions';
import { selectAllPlayer } from 'src/store/selectors';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent implements OnInit {

  @Input() gameCellInfo: gameCell;
  players$ = this.store.select(selectAllPlayer);
  playersPosition: number[];

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.players$.subscribe((players) => {
      this.playersPosition = [];
      Object.values(players).forEach((player) => {
        player.cellPosition === this.gameCellInfo.indexCell
          ? this.playersPosition.push(player.numberPlayer) : '';
      })
    }
    )
  }

  clickCellInfo() {
    this.store.dispatch(new OpenInfoCell(this.gameCellInfo.indexCell));
  }

}
