import { Component, HostListener, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, gameRoom } from 'src/app/types/state';
import { selectGameRoom, selectInfoUser } from 'src/store/selectors';

@Component({
  selector: 'app-game-board-turn',
  templateUrl: './game-board-turn.component.html',
  styleUrls: ['./game-board-turn.component.scss'],

})
export class GameBoardTurnComponent implements OnInit {

  @Input() gameRoom: gameRoom;
  gameRoom$ = this.store.select(selectGameRoom);
  infoUser$ = this.store.select(selectInfoUser);
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
