import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { CompanyInfoBuy, GameRoom, InfoRoom, infoCellTurn } from '../types';
import { Store } from '@ngrx/store';
import { InfoCellTurnAdd, SellCompany, UpdateAuctionCompany, UpdateGameRoom, UpdateRooms } from 'src/store/actions';
import { selectIdRoom, selectIdUser } from 'src/store/selectors';
import { EACTION_WEBSOCKET } from '../const/enum';
import { AppStore } from '../types/state';
import { SendPayloadSocket, payloadSocket } from '../types/webSocket';


@Injectable({
  providedIn: 'root'
})
export class WebSocketController {

  private wsSocket = io("http://localhost:3100/");
  private idUser$ = this.store.select(selectIdUser);
  private idRoom$ = this.store.select(selectIdRoom);
  private idUser: string;
  private idRoom: string;

  constructor(private store: Store<AppStore>) {
    this.idUser$.subscribe((id) => this.idUser = id);
    this.idRoom$.subscribe((id) => this.idRoom = id);
    this.handleMessage();
  }

  private handleMessage(): void {
    this.wsSocket.on("message", (mess: string) => {
      const wsMessage = JSON.parse(mess) as payloadSocket;
      switch (wsMessage.action) {

        case EACTION_WEBSOCKET.LIST_ROOM:
          const rooms = wsMessage.payload as InfoRoom[];
          this.store.dispatch(new UpdateRooms(rooms));
          break;

        case EACTION_WEBSOCKET.UPDATE_ROOM:
          const updateRoom = wsMessage.payload as GameRoom;
          this.store.dispatch(new UpdateGameRoom(updateRoom))
          break;

        case EACTION_WEBSOCKET.SELL_COMPANY: {
          const auctionCompany = wsMessage.payload as CompanyInfoBuy;
          this.store.dispatch(new SellCompany(auctionCompany));
          break;
        }

        case EACTION_WEBSOCKET.INFO_CELL_TURN: {
          const InfoCellTurn = wsMessage.payload as infoCellTurn;
          this.store.dispatch(new InfoCellTurnAdd(InfoCellTurn));
          break;
        }

        default:
          break;
      }
    });
  }

  sendMessage(action: EACTION_WEBSOCKET, payload: SendPayloadSocket = {}): void {
    this.wsSocket.send(JSON.stringify(
      {
        action,
        payload:
        {
          ...payload,
          idUser: this.idUser,
          idRoom: this.idRoom
        }
      }
    ));
  }

}
