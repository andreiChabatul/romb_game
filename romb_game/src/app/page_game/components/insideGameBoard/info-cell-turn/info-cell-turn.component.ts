import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACTIONS_BUTTON } from 'src/app/const/enum';
import { ButtonStandart, infoCellButtons } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { selectInfoCellTurn } from 'src/store/selectors';

const buttons: ButtonStandart[] = [
  { action: ACTIONS_BUTTON.PAY, width: '12vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.SELL_STOCK, width: '12vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.MORTGAGE, width: '12vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.BUY_COMPANY, width: '12vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.START_AUCTION, width: '12vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.AUCTION_STEP, width: '12vw', height: '6vh', show: true },
  { action: ACTIONS_BUTTON.AUCTION_LEAVE, width: '12vw', height: '6vh', show: true }
]

@Component({
  selector: 'app-info-cell-turn',
  templateUrl: './info-cell-turn.component.html',
  styleUrls: ['./info-cell-turn.component.scss'],
  animations: [
    trigger('animationTriggerName', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ])
    ])
  ]
})
export class InfoCellTurnComponent implements OnInit {

  buttonsResult: ButtonStandart[] = [];
  infoCellTurn$ = this.store.select(selectInfoCellTurn);
  typeButtons: infoCellButtons;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.infoCellTurn$.subscribe((value) => {
      value?.buttons ? this.typeButtons = value.buttons : '';
      this.buttonsResult = this.updateButtons();
    });

  }

  private updateButtons(): ButtonStandart[] {
    switch (this.typeButtons) {
      case 'none':
        return [];
      case 'pay':
        return [0, 1, 2].map((index) => buttons[index]);
      case 'buy':
        return [3, 4].map((index) => buttons[index]);
      case 'auction':
        return [5, 6].map((index) => buttons[index]);
      default:
        return [];
    }

  }
}
