import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON, EACTION_WEBSOCKET } from 'src/app/const/enum';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { DiceRool } from 'src/store/actions';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss'],
  animations: [
    trigger('animationTriggerName', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('0.4s', style({
          opacity: 1,
        })),
      ])
    ])
  ]
})
export class DiceRollComponent implements OnInit {

  diceOne = 0;
  diceTwo = 0;
  isDouble: boolean;
  actionButton = ACTIONS_BUTTON.DICE_ROLL;
  result: number | string = '...';
  @Input() cheatNumbers: number[];

  constructor(private webSocketController: WebSocketController, private store: Store<AppStore>) { }

  ngOnInit(): void {
    setTimeout(() => this.roolDice(), 0);
  }

  roolDice() {
    this.result = '...'
    if (this.cheatNumbers.length > 1) {
      this.diceOne = this.cheatNumbers[0];
      this.diceTwo = this.cheatNumbers[1];
    } else {
      this.diceOne = this.randomrool(this.diceOne);
      this.diceTwo = this.randomrool(this.diceTwo);
    }

    this.diceOne === this.diceTwo ? this.isDouble = true : this.isDouble = false;

    setTimeout(() => {
      this.result = this.diceOne + this.diceTwo;
      this.webSocketController.sendMessage(EACTION_WEBSOCKET.DICE_ROLL, {
        value: this.result,
        isDouble: this.isDouble
      });
    }, 1000
    );

    setTimeout(() => this.store.dispatch(new DiceRool(false)), 2000);

  }

  randomrool(dice: number): number {
    let result = Math.floor((Math.random() * 6) + 1);
    if (dice === result) {
      return this.randomrool(result);
    }
    return result;
  }
}
