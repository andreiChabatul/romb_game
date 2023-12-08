import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { chatMessage, fullPlayer } from 'src/app/types';
import { AppStore } from 'src/app/types/state';
import { selectAllPlayer } from 'src/store/selectors';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit, OnDestroy {

  @Input() message: chatMessage;
  players$ = this.store.select(selectAllPlayer);
  subscription$: Subscription;
  player: fullPlayer;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.players$.subscribe((players) =>
      this.message.senderId
        ? this.player = players[this.message.senderId]
        : ''
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
