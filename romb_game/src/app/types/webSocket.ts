import { EACTION_WEBSOCKET } from "../const/enum"

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
}

export interface BuyCompanyPayload {
    indexCompany: number;
}

export type SendPayloadSocket = {}
    | JoinGamePayload
    | PayloadCreateGame
    | MessageChatGamePayload
    | DiceRoolGamePayload
    | BuyCompanyPayload;

export interface payloadSocket {
    action: EACTION_WEBSOCKET,
    payload: SendPayloadSocket
}