import { AnimationEvent, animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TIME_TURN_DEFAULT } from 'src/app/const';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { WebSocketController } from 'src/app/webSocket/webSocket.controller';

@Component({
  selector: 'app-loader-time',
  templateUrl: './loader-time.component.html',
  styleUrls: ['./loader-time.component.scss'],
  animations: [
    trigger('loaderAnimation', [
      transition('void => *', [
        style({
          width: '0'
        }),
        animate(TIME_TURN_DEFAULT, style({
          width: '100%'
        })),
      ])
    ])
  ]
})
export class LoaderTimeComponent implements OnInit {

  isSend: boolean;

  constructor(private webSocketController: WebSocketController) { }

  ngOnInit(): void {
    this.isSend = true;
  }

  loadingEnd(): void {
    if (this.isSend) {
      this.webSocketController.sendMessage(EACTION_WEBSOCKET.ACTIVE_CELL);
      this.isSend = false;
    }
  }

}
