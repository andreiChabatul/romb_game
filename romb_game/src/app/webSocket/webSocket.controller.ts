import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { infoRoom, Player, UpdatePlayerPayload, chatRoomPayload, infoAuction, infoCellTurn, offerDealInfo, startGame, updateCellCompany } from '../types';
import { Store } from '@ngrx/store';
import { EndTurn, InfoAuction, InfoCellTurnAdd, InitBoard, InitPlayer, SetOfferDealInfo, StartGame, UpdateCell, UpdateChatRoom, UpdateInfoPlayer, UpdateRooms, UpdateTurn } from 'src/store/actions';
import { selectIdRoom, selectIdUser, selectInfoCellTurn } from 'src/store/selectors';
import { EACTION_WEBSOCKET } from '../const/enum';
import { AppStore } from '../types/state';
import { SendPayloadSocket, initBoardPayload, payloadSocket, turnPayload } from '../types/webSocket';


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
    this.idUser$.subscribe((id) => this.idUser = String(id));
    this.idRoom$.subscribe((id) => this.idRoom = id);
    this.handleMessage();
  }

  private handleMessage(): void {
    this.wsSocket.on("message", (mess: string) => {
      const wsMessage = JSON.parse(mess) as payloadSocket;

      switch (wsMessage.action) {

        case EACTION_WEBSOCKET.LIST_ROOM: {
          const rooms = wsMessage.payload as infoRoom[];
          this.store.dispatch(new UpdateRooms(rooms));
          break;
        }

        case EACTION_WEBSOCKET.INFO_CELL_TURN: {
          const InfoCellTurn = wsMessage.payload as infoCellTurn;
          this.store.dispatch(new InfoCellTurnAdd(InfoCellTurn));
          break;
        }

        case EACTION_WEBSOCKET.END_TURN: {
          this.store.dispatch(new EndTurn());
          break;
        }

        case EACTION_WEBSOCKET.START_GAME: {
          const startGame = wsMessage.payload as startGame;
          this.store.dispatch(new StartGame(startGame.idRoom));
          break;
        }

        case EACTION_WEBSOCKET.INIT_PLAYER: {
          const player = wsMessage.payload as Player;
          this.store.dispatch(new InitPlayer(player));
          break;
        }

        case EACTION_WEBSOCKET.UPDATE_CELL: {
          const infoCell = wsMessage.payload as updateCellCompany;
          this.store.dispatch(new UpdateCell(infoCell));
          break;
        }

        case EACTION_WEBSOCKET.UPDATE_CHAT: {
          const chatRoomPayload = wsMessage.payload as chatRoomPayload;
          this.store.dispatch(new UpdateChatRoom(chatRoomPayload.chat));
          break;
        }

        case EACTION_WEBSOCKET.UPDATE_TURN: {
          const turnPayload = wsMessage.payload as turnPayload;
          this.store.dispatch(new UpdateTurn(turnPayload));
          break;
        }

        case EACTION_WEBSOCKET.UPDATE_PLAYER: {
          const updatePlayerPayload = wsMessage.payload as UpdatePlayerPayload;
          this.store.dispatch(new UpdateInfoPlayer(updatePlayerPayload));
          break;
        }

        case EACTION_WEBSOCKET.INIT_BOARD: {
          const boardPayload = wsMessage.payload as initBoardPayload;
          this.store.dispatch(new InitBoard(boardPayload.board));
          break;
        }

        case EACTION_WEBSOCKET.CONTROL_DEAL: {
          const offerDealInfo = wsMessage.payload as offerDealInfo;
          this.store.dispatch(new SetOfferDealInfo(offerDealInfo));
          break;
        }

        case EACTION_WEBSOCKET.AUCTION: {
          const infoAuction = wsMessage.payload as infoAuction;
          this.store.dispatch(new InfoAuction(infoAuction));
          break;
        }

        default:
          break;
      }
    });
  }

  sendMessage(action: EACTION_WEBSOCKET, payload?: SendPayloadSocket): void {
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
