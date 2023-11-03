import { Component, Input, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Player } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { selectPlayerTurnId } from 'src/store/selectors';

@Component({
  selector: 'app-info-player',
  templateUrl: './info-player.component.html',
  styleUrls: ['./info-player.component.scss']
})
export class InfoPlayerComponent   {

  @Input() player: Player;
 
  playerTurnId$ = this.store.select(selectPlayerTurnId);

  constructor(private store: Store<AppStore>) { }



}
