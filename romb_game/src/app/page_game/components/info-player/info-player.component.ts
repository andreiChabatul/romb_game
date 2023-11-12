import { Component, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { selectPlayerTurnId } from 'src/store/selectors';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.scss']
})
export class InfoPlayerComponent implements OnChanges {

  @Input() player: Player;
  prevValue: number;

  playerTurnId$ = this.store.select(selectPlayerTurnId);

  constructor(private store: Store<AppStore>) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      const chng = changes[propName];
      this.prevValue = chng.previousValue ? chng.previousValue.total : 0;
    }
  }





}
