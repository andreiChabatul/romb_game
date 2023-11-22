import { gameCell, } from "."
import { EACTION_WEBSOCKET } from "../const/enum"
import { controlCompanyState } from "./state"

export type PayloadCreateGame = {
    roomName: string
    players: string
    size: string
    typeGame: string
    visibility: string
}

export type JoinGamePayload = {
    idRoom: string;
}

export type MessageChatGamePayload = {
    message: string;
}

export type DiceRoolGamePayload = {
    value: number;
    isDouble: boolean;
}

export type ControlCompanyPayload = {
    indexCompany: number;
    action: controlCompany
}


export type turnPayload = {
    turnId: string;
}

export type attemptPayload = {
    attemp: number;
}

export type initBoardPayload = {
    board: gameCell[]
}

export type controlCompany = 'buyStock' | 'sellStock' | 'pledgeCompany' | 'buyOutCompany';
export type controlAuction = 'startAuction' | 'leaveAuction' | 'stepAuction';

export type SendPayloadSocket = {}
    | JoinGamePayload
    | PayloadCreateGame
    | MessageChatGamePayload
    | DiceRoolGamePayload
    | ControlCompanyPayload;

export interface payloadSocket {
    action: EACTION_WEBSOCKET,
    payload: SendPayloadSocket
}