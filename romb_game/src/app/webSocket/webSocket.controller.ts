import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { ChatRoom, InfoRoom, Player, gameCell, infoCellTurn, startGame } from '../types';
import { Store } from '@ngrx/store';
import { EndTurn, InfoCellTurnAdd, InitPlayer, StartGame, UpdateCell, UpdateChatRoom, UpdatePlayer, UpdateRooms } from 'src/store/actions';
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

        case EACTION_WEBSOCKET.UPDATE_CHAT:
          const updateChat = wsMessage.payload as ChatRoom;
          this.store.dispatch(new UpdateChatRoom(updateChat.chat));
          break;

        case EACTION_WEBSOCKET.INFO_CELL_TURN: {
          const InfoCellTurn = wsMessage.payload as infoCellTurn;
          this.store.dispatch(new InfoCellTurnAdd(InfoCellTurn));
          break;
        }

        case EACTION_WEBSOCKET.END_TURN: {
          this.store.dispatch(new EndTurn());
          break;
        }

        case EACTION_WEBSOCKET.UPDATE_CELL: {
          const infoCell = wsMessage.payload as gameCell;
          this.store.dispatch(new UpdateCell(infoCell));
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
