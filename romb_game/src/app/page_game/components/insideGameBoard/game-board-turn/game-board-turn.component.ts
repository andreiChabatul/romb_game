import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { AppStore } from 'src/app/types/state';
import { selectCellGameState } from 'src/store/selectors';

@Component({
  selector: 'app-game-board-turn',
  templateUrl: './game-board-turn.component.html',
  styleUrls: ['./game-board-turn.component.scss']
})
export class GameBoardTurnComponent implements OnInit {

  minute: number;
  seconds: number;
  fontColor: string;
  cellGameState$ = this.store.select(selectCellGameState);
  cheatNumbers: number[];

  buttons = [
    { action: ACTIONS_BUTTON.DICE_ROLL, width: '19vw', height: '7vh', show: true },
    { action: ACTIONS_BUTTON.OFFER_DEAL, width: '19vw', height: '7vh', show: true },
    { action: ACTIONS_BUTTON.BUY_STOCK, width: '19vw', height: '7vh', show: false },
    { action: ACTIONS_BUTTON.BUY_OUT_COMPANY, width: '19vw', height: '7vh', show: true },
  ]

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.cheatNumbers = [];
    this.timer();
  }

  timer(): void {
    this.minute = 1;
    this.seconds = 59;
    const timer = setInterval(() => {
      this.seconds -= 1
      if (this.seconds === 0) {
        this.seconds = 59;
        this.minute = 0;
      } else if (this.minute === 0) {
        this.fontColor = '#FF6E07';
      }
      else if (this.minute === 0 && this.seconds < 30) {
        this.fontColor = '#B20000';
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      console.log('bankrot');

    }, 120000);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    const value = Number(event.key);
    if (0 < value && value < 7) {
      this.cheatNumbers.push(value)
    };
  }

}
