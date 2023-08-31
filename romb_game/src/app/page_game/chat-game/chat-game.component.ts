import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore, chatMessage } from 'src/app/types';
import { selectMessageChat } from 'src/store/selectors';

@Component({
  selector: 'app-chat-game',
  templateUrl: './chat-game.component.html',
  styleUrls: ['./chat-game.component.scss']
})
export class ChatGameComponent {

  chat$: Observable<chatMessage[]> = this.store.select(selectMessageChat);

  constructor(private store: Store<AppStore>) { }
}

