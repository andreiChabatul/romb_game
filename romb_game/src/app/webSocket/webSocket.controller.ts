import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { infoRoom, chatRoomPayload, infoAuction, infoCellTurn, offerDealInfo, updateCellCompany, gameRoom, endGamePayload, updatePlayer } from '../types';
import { Store } from '@ngrx/store';
import { EndGame, EndTurn, InfoAuction, InfoCellTurnAdd, SetOfferDealInfo, StartGame, UpdateCell, UpdateChatRoom, UpdateInfoPlayer, UpdateRooms, UpdateTurn } from 'src/store/actions';
import { selectIdRoom, selectInfoUser, selectUser } from 'src/store/selectors';
import { EACTION_WEBSOCKET } from '../const/enum';
import { AppStore } from '../types/state';
import { payloadSocket, turnPayload } from '../types/webSocket';

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
    this.idRoom$.subscribe((id) => this.idRoom = id);
    this.handleMessage();
  }

  private handleMessage(): void {
    this.wsSocket.on("message", (mess: string) => {
      const wsMessage = JSON.parse(mess) as payloadSocket;

      switch (wsMessage.action) {

        case EACTION_WEBSOCKET.LIST_ROOM:
          const rooms = wsMessage.payload as infoRoom[];
          console.log(rooms)
          this.store.dispatch(new UpdateRooms(rooms));
          break;

        case EACTION_WEBSOCKET.INFO_CELL_TURN:
          const InfoCellTurn = wsMessage.payload as infoCellTurn;
          this.store.dispatch(new InfoCellTurnAdd(InfoCellTurn));
          break;

        case EACTION_WEBSOCKET.END_TURN:
          this.store.dispatch(new EndTurn());
          break;

        case EACTION_WEBSOCKET.START_GAME:
          const gameRoom = wsMessage.payload as gameRoom;
          this.store.dispatch(new StartGame(gameRoom));
          break;

        case EACTION_WEBSOCKET.UPDATE_CELL:
          const infoCell = wsMessage.payload as updateCellCompany;
          this.store.dispatch(new UpdateCell(infoCell));
          break;

        case EACTION_WEBSOCKET.UPDATE_CHAT:
          const chatRoomPayload = wsMessage.payload as chatRoomPayload;
          this.store.dispatch(new UpdateChatRoom(chatRoomPayload.chat));
          break;

        case EACTION_WEBSOCKET.UPDATE_TURN:
          const turnPayload = wsMessage.payload as turnPayload;
          this.store.dispatch(new UpdateTurn(turnPayload));
          break;

        case EACTION_WEBSOCKET.UPDATE_PLAYER:
          const updatePlayerPayload = wsMessage.payload as updatePlayer;
          this.store.dispatch(new UpdateInfoPlayer(updatePlayerPayload));
          break;

        case EACTION_WEBSOCKET.CONTROL_DEAL:
          const offerDealInfo = wsMessage.payload as offerDealInfo;
          this.store.dispatch(new SetOfferDealInfo(offerDealInfo));
          break;

        case EACTION_WEBSOCKET.AUCTION:
          const infoAuction = wsMessage.payload as infoAuction;
          this.store.dispatch(new InfoAuction(infoAuction));
          break;

        case EACTION_WEBSOCKET.END_GAME:
          const endGamePayload = wsMessage.payload as endGamePayload;
          this.store.dispatch(new EndGame(endGamePayload.winUser));
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
          ...payload,
          idUser: this.idUser,
          idRoom: this.idRoom
        }
      );
    }
  }

}
