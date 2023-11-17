import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/types/state';
import { selectInfoUser } from 'src/store/selectors';

@Component({
  selector: 'app-player-info-inside',
  templateUrl: './player-info-inside.component.html',
  styleUrls: ['./player-info-inside.component.scss']
})
export class PlayerInfoInsideComponent {

  infoUser$ = this.store.select(selectInfoUser);

  constructor(private store: Store<AppStore>) { }



}
