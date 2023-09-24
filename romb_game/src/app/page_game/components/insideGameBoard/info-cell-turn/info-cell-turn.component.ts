import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectCellGameState } from 'src/store/selectors';

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
export class InfoCellTurnComponent {

  cellGameState$ = this.store.select(selectCellGameState);

  constructor(private store: Store<AppStore>) { }

}
