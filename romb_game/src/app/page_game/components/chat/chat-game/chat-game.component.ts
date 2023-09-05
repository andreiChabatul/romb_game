import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore, ChatMessage } from 'src/app/types';
import { selectChat } from 'src/store/selectors';

@Component({
  selector: 'app-chat-game',
  templateUrl: './chat-game.component.html',
  styleUrls: ['./chat-game.component.scss']
})
export class ChatGameComponent {

  chat$: Observable<ChatMessage[]> = this.store.select(selectChat);

  constructor(private store: Store<AppStore>) { }
}

