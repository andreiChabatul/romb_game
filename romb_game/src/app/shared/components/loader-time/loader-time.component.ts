import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { TIME_TURN_DEFAULT } from 'src/app/const';
import { EACTION_WEBSOCKET } from 'src/app/const/enum';
import { typeLoading } from 'src/app/types';
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
  @Input() typeLoading: typeLoading;

  constructor(private webSocketController: WebSocketController) { }

  ngOnInit(): void {
    this.isSend = true;
  }

  loadingEnd(): void {
    if (this.isSend) {
      this.typeLoading === 'cell'
        ? this.webSocketController.sendMessage(EACTION_WEBSOCKET.ACTIVE_CELL)
        : this.webSocketController.sendMessage(EACTION_WEBSOCKET.AUCTION, { action: 'endAuction' })
      this.isSend = false;
    }
  }

}
