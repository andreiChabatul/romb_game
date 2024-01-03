import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { infoRoom, chatRoomPayload, infoAuction, infoCellTurn, offerDealInfo, updateCellCompany, updatePlayer } from '../types';
import { Store } from '@ngrx/store';
import { selectIdRoom, selectInfoUser } from 'src/store/selectors';
import { EACTION_WEBSOCKET } from '../const/enum';
import { AppStore, gameRoom } from '../types/state';
import { payloadSocket } from '../types/webSocket';
import { UpdateRooms } from 'src/store/actions/roomsActions';
import { EndGame, EndTurn, InfoAuction, SetOfferDealInfo, StartGame, UpdateCell, UpdateChatRoom, UpdateInfoCellTurn, UpdateInfoPlayer, UpdateTurn } from 'src/store/actions/gameActions';

@Injectable({
  providedIn: 'root'
})
export class WebSocketController {

  private wsSocket = io("127.0.0.1:3001");
  private infoUser$ = this.store.select(selectInfoUser);
  private idRoom$ = this.store.select(selectIdRoom);
  private idUser: string | undefined;
  private idRoom: string;

  constructor(private store: Store<AppStore>) {
    this.infoUser$.subscribe((infoUser) => this.idUser = infoUser?.id);
    this.idRoom$.subscribe((id) => this.idRoom = String(id));
    this.handleMessage();
  }

  private handleMessage(): void {
    this.wsSocket.on("message", (mess: string) => {
      const wsMessage = JSON.parse(mess) as payloadSocket;

      switch (wsMessage.action) {

        case EACTION_WEBSOCKET.CONTROL_ROOM:
          const infoRoom = wsMessage.payload as infoRoom[];
          console.log(infoRoom)
          this.store.dispatch(UpdateRooms({ infoRoom }));
          break;

        case EACTION_WEBSOCKET.INFO_CELL_TURN:
          const infoCellTurn = wsMessage.payload as infoCellTurn;
          this.store.dispatch(UpdateInfoCellTurn({ infoCellTurn }));
          break;

        case EACTION_WEBSOCKET.END_TURN:
          this.store.dispatch(EndTurn());
          break;

        case EACTION_WEBSOCKET.START_GAME:
          const gameRoom = wsMessage.payload as gameRoom;
          this.store.dispatch(StartGame({ gameRoom }));
          break;

        case EACTION_WEBSOCKET.UPDATE_CELL:
          const updateCell = wsMessage.payload as updateCellCompany;
          this.store.dispatch(UpdateCell({ updateCell }));
          break;

        case EACTION_WEBSOCKET.UPDATE_CHAT:
          const chatRoomPayload = wsMessage.payload as chatRoomPayload;
          this.store.dispatch(UpdateChatRoom({ chatMessage: chatRoomPayload.chat }));
          break;

        case EACTION_WEBSOCKET.UPDATE_TURN:
          const turnId = wsMessage.payload as string;
          this.store.dispatch(UpdateTurn({ turnId }));
          break;

        case EACTION_WEBSOCKET.UPDATE_PLAYER:
          const updatePlayer = wsMessage.payload as updatePlayer;
          this.store.dispatch(UpdateInfoPlayer({ updatePlayer }));
          break;

        case EACTION_WEBSOCKET.CONTROL_DEAL:
          const offerDealInfo = wsMessage.payload as offerDealInfo;
          this.store.dispatch(SetOfferDealInfo({ offerDealInfo }));
          break;

        case EACTION_WEBSOCKET.AUCTION:
          const infoAuction = wsMessage.payload as infoAuction;
          this.store.dispatch(InfoAuction({ infoAuction }));
          break;

        case EACTION_WEBSOCKET.END_GAME:
          const winner = wsMessage.payload as string;
          this.store.dispatch(EndGame({ winner }));
          break;

        default:
          break;
      }
    });
  }

  sendMessage(action: EACTION_WEBSOCKET, payload?: {}): void {
    if (this.idUser) {
      this.wsSocket.send(action,
        {
          idUser: this.idUser,
          idRoom: this.idRoom,
          ...payload,
        }
      );
    }
  }

}
