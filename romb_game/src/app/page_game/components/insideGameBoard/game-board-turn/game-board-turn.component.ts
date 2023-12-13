import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectInfoCellTurn, selectInfoUser, selectInsideBoard, selectPlayerTurnId } from 'src/store/selectors';

@Component({
  selector: 'app-game-board-turn',
  templateUrl: './game-board-turn.component.html',
  styleUrls: ['./game-board-turn.component.scss'],

})
export class GameBoardTurnComponent implements OnInit {


  insideBoard$ = this.store.select(selectInsideBoard);
  playerTurnId$ = this.store.select(selectPlayerTurnId);
  infoUser$ = this.store.select(selectInfoUser);
  infoCellTurn$ = this.store.select(selectInfoCellTurn);
  cheatNumbers: number[];

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.cheatNumbers = [];
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    const value = Number(event.key);
    if (0 < value && value < 7) {
      this.cheatNumbers = [value, ...this.cheatNumbers];
    };
  }

  resetCheat(): void {
    this.cheatNumbers = [];
  }

  

}
