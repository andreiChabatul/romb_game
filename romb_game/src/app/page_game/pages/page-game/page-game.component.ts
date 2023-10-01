import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllPlayer } from 'src/store/selectors';
import { AppStore } from 'src/app/types/state';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.scss']
})
export class PageGameComponent implements OnInit {

  players$ = this.store.select(selectAllPlayer);
  players: Player[] = [];

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.players$.subscribe(
      (value) => this.players = Object.values(value));

  }

}
