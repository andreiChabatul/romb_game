import { Action } from '@ngrx/store';
import { chatMessage, InfoRoom, Player, ResponseAuth, UpdatePlayer, gameCell, infoCellTurn, modal, updateCellCompany, offersPerson, offerInfo } from 'src/app/types';
import { insideBoardState } from 'src/app/types/state';
import { turnPayload } from 'src/app/types/webSocket';

export enum AppActionTypes {
    CloseModal = '[CLOSE MODAL] CloseModal',
    ChangeModal = '[CHANGE MODAL] ChangeModal',
    AddModalError = '[ADD MODAL ERROR] AddModalError',
    ClearModalError = '[CLEAR MODAL ERROR] ClearModalError',
    UpdateRooms = '[UPDATE ROOMS] UpdateRooms',
    LoginUser = '[LOGIN USER] LoginUser',
    OpenInfoCell = '[OPEN INFO CELL] OpenInfoCell',
    ControlInsideBoard = '[CONTROL INSIDE BOARD] ControlInsideBoard',
    InfoCellTurn = '[INFO CELL TURN] InfoCellTurn',
    UpdateChatRoom = '[UPDATE CHAT ROOM] UpdateChatRoom',
    EndTurn = '[END TURN] EndTurn',
    UpdateCell = '[UPDATE CELL] UpdateCell',
    UpdateInfoPlayer = '[UPDATE Player] UpdateInfoPlayer',
    StartGame = '[START GAME] StartGame',
    InitPlayer = '[INIT Player] InitPlayer',
    InitBoard = '[INIT BOARD] InitBoard',
    UpdateTurn = '[UPDATE TURN] UpdateTurn',
    PrisonAttempt = '[PRISON ATTEMPT] PrisonAttempt',
    SetValueSellProfit = '[SET VALUE SELL PROFIT] SetValueSellProfit',
    SetOfferDeal = '[SET OFFER DEAL] SetOfferDeal',
};

export class InfoCellTurnAdd implements Action {
    readonly type = AppActionTypes.InfoCellTurn;
    constructor(public payload: infoCellTurn) { }
}

export class SetOfferDeal implements Action {
    readonly type = AppActionTypes.SetOfferDeal;
    constructor(public payload: { offersPerson: offersPerson, offerInfo: offerInfo }) { }
}

export class SetValueSellProfit implements Action {
    readonly type = AppActionTypes.SetValueSellProfit;
    constructor(public payload: number) { }
}

export class PrisonAttempt implements Action {
    readonly type = AppActionTypes.PrisonAttempt;
    constructor(public payload: number) { }
}

export class InitBoard implements Action {
    readonly type = AppActionTypes.InitBoard;
    constructor(public payload: gameCell[]) { }
}

export class UpdateTurn implements Action {
    readonly type = AppActionTypes.UpdateTurn;
    constructor(public payload: turnPayload) { }
}

export class UpdateInfoPlayer implements Action {
    readonly type = AppActionTypes.UpdateInfoPlayer;
    constructor(public payload: UpdatePlayer) { }
}

export class InitPlayer implements Action {
    readonly type = AppActionTypes.InitPlayer;
    constructor(public payload: Player) { }
}

export class UpdateCell implements Action {
    readonly type = AppActionTypes.UpdateCell;
    constructor(public payload: updateCellCompany) { }
}

export class StartGame implements Action {
    readonly type = AppActionTypes.StartGame;
    constructor(public payload: string) { }
}

export class EndTurn implements Action {
    readonly type = AppActionTypes.EndTurn;
}

export class ControlInsideBoard implements Action {
    readonly type = AppActionTypes.ControlInsideBoard;
    constructor(public payload: insideBoardState) { }
}

export class UpdateChatRoom implements Action {
    readonly type = AppActionTypes.UpdateChatRoom;
    constructor(public payload: chatMessage) { }
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
    CloseModal |
    ChangeModal |
    AddModalError |
    ClearModalError |
    UpdateRooms |
    LoginUser |
    OpenInfoCell |
    ControlInsideBoard |
    InfoCellTurnAdd |
    UpdateChatRoom |
    UpdateCell |
    StartGame |
    UpdateInfoPlayer |
    InitPlayer |
    UpdateTurn |
    InitBoard |
    PrisonAttempt |
    SetValueSellProfit |
    SetOfferDeal |
    EndTurn;