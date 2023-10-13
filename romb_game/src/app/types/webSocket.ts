import { gameCell } from "."
import { EACTION_WEBSOCKET } from "../const/enum"
import { controlCompanyState } from "./state"

export interface PayloadCreateGame {
    roomName: string
    players: string
    size: string
    typeGame: string
    visibility: string
}

export interface JoinGamePayload {
    idRoom: string;
}

export interface MessageChatGamePayload {
    message: string;
}

export interface DiceRoolGamePayload {
    value: number;
    isDouble: boolean;
}

export interface ControlCompanyPayload {
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

export type controlCompany = 'buyCompany' | 'startAuction' | 'leaveAuction' | 'stepAuction' | controlCompanyState;

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