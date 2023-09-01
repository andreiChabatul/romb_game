import { Component } from '@angular/core';
import { ACTIONS_BUTTON } from 'src/app/const/enum';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent {

  diceOne = 0;
  diceTwo = 0;
  actionButton = ACTIONS_BUTTON.DICE_ROLL;
  result: number | string = '...';

  roolDice() {
    this.result = '...'
    this.diceOne = this.randomrool(this.diceOne);
    this.diceTwo = this.randomrool(this.diceTwo);
    setTimeout(() => this.result = this.diceOne + this.diceTwo, 1000);
  }

  randomrool(dice: number): number {
    let result = Math.floor((Math.random() * 6) + 1);
    console.log(result, 'result', dice)
    if (dice === result) {
      return this.randomrool(result);
    }
    return result;
  }
}
