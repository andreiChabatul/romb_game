import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectIdUser, selectInfoCellTurn, selectInsideBoard, selectPlayerTurnId } from 'src/store/selectors';

@Component({
  selector: 'app-game-board-turn',
  templateUrl: './game-board-turn.component.html',
  styleUrls: ['./game-board-turn.component.scss'],
  animations: [
    trigger('animationTriggerName', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0)',
        }),
        animate('0.3s', style({
          opacity: 1,
          transform: 'scale(1)'
        })),
      ])
    ])
  ]
})
export class GameBoardTurnComponent implements OnInit {

  minute: number;
  seconds: number;
  fontColor: string;
  insideBoard$ = this.store.select(selectInsideBoard);
  playerTurnId$ = this.store.select(selectPlayerTurnId);
  userId$ = this.store.select(selectIdUser);
  infoCellTurn$ = this.store.select(selectInfoCellTurn);
  cheatNumbers: number[];

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
      this.cheatNumbers = [value, ...this.cheatNumbers];
    };
  }

  resetCheat(): void {
    this.cheatNumbers = [];
  }

}
