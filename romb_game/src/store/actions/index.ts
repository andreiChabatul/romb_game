import { Action } from '@ngrx/store';
import { ChatMessage, GameRoom, InfoRoom, ResponseAuth, UpdateRoom, infoCellTurn, modal } from 'src/app/types';

export enum AppActionTypes {
    UpdateGameRoom = '[UPDATE GAME ROOM] UpdateGameRoom',
    CloseModal = '[CLOSE MODAL] CloseModal',
    ChangeModal = '[CHANGE MODAL] ChangeModal',
    AddModalError = '[ADD MODAL ERROR] AddModalError',
    ClearModalError = '[CLEAR MODAL ERROR] ClearModalError',
    UpdateRooms = '[UPDATE ROOMS] UpdateRooms',
    LoginUser = '[LOGIN USER] LoginUser',
    OpenInfoCell = '[OPEN INFO CELL] OpenInfoCell',
    AuctionCompany = '[AUCTION COMPANY] AuctionCompany',
    ClearSellCompany = '[CLEAR SELL COMPANY] ClearSellCompany',
    UpdateAuctionCompany = '[UPDATE AUCTION COMPANY] UpdateAuctionCompany',
    DiceRool = '[DICE ROLL] DiceRool',
    ControlStock = '[CONTROL STOCK] ControlStock',
    InfoCellTurn = '[INFO CELL TURN] InfoCellTurn',
    UpdateChatRoom = '[UPDATE CHAT ROOM] UpdateChatRoom',
    EndTurn = '[END TURN] EndTurn',
};

export class InfoCellTurnAdd implements Action {
    readonly type = AppActionTypes.InfoCellTurn;
    constructor(public payload: infoCellTurn) { }
}

export class EndTurn implements Action {
    readonly type = AppActionTypes.EndTurn;
}

export class DiceRool implements Action {
    readonly type = AppActionTypes.DiceRool;
    constructor(public payload: boolean) { }
}

export class ControlStock implements Action {
    readonly type = AppActionTypes.ControlStock;
    constructor(public payload: boolean) { }
}

export class UpdateGameRoom implements Action {
    readonly type = AppActionTypes.UpdateGameRoom;
    constructor(public payload: UpdateRoom) { }
}

export class UpdateChatRoom implements Action {
    readonly type = AppActionTypes.UpdateChatRoom;
    constructor(public payload: ChatMessage[]) { }
}

export class CloseModal implements Action {
    readonly type = AppActionTypes.CloseModal;
}

export class ChangeModal implements Action {
    readonly type = AppActionTypes.ChangeModal;
    constructor(public payload: modal) { }
}

export class AddModalError implements Action {
    readonly type = AppActionTypes.AddModalError;
    constructor(public payload: string) { }
}

export class ClearModalError implements Action {
    readonly type = AppActionTypes.ClearModalError;
}

export class UpdateRooms implements Action {
    readonly type = AppActionTypes.UpdateRooms;
    constructor(public payload: InfoRoom[]) { }
}

export class LoginUser implements Action {
    readonly type = AppActionTypes.LoginUser;
    constructor(public payload: Partial<ResponseAuth>) { }
}

export class OpenInfoCell implements Action {
    readonly type = AppActionTypes.OpenInfoCell
    constructor(public payload: number) { }
}

export type ActionUnion =
    UpdateGameRoom |
    CloseModal |
    ChangeModal |
    AddModalError |
    ClearModalError |
    UpdateRooms |
    LoginUser |
    OpenInfoCell |
    DiceRool |
    ControlStock |
    InfoCellTurnAdd |
    UpdateChatRoom |
    EndTurn;