import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { AppStore } from 'src/app/types/state';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';
import { selectGameRoom } from 'src/store/selectors';

@Component({
  selector: 'app-turn-timer',
  templateUrl: './turn-timer.component.html',
  styleUrls: ['./turn-timer.component.scss'],
  animations: [
    trigger('timerAnimation',
      [
        transition('void => *', [
          style({
            width: '100%'
          }),
          animate('{{time}}ms', style({
            width: '0'
          })),
        ], { params: { time: '0' } })
      ],)
  ]
})

export class TurnTimerComponent implements OnInit, OnDestroy {

  gameRoom$ = this.store.select(selectGameRoom);
  turnTime: number;
  isActive: boolean;

  constructor(private store: Store<AppStore>, private webSocketConroller: WebSocketController) { }

  turnEnd(): void {
    (this.isActive)
      ? this.webSocketConroller.sendMessage(EACTION_WEBSOCKET.END_GAME, { action: 'endTime' })
      : '';
  }

  ngOnInit(): void {
    this.isActive = true;
  }

  ngOnDestroy(): void {
    this.isActive = false;
  }

}
