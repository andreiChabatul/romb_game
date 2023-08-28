import { ACTIONS_BUTTON } from "../const/enum";

export type stateCell = 'border' | playerType;
export type typeCell = 'vertical' | 'horisontal';
export type playerType = 'playerOne' | 'playerTwo' | 'playerThree' | 'playerFour' | 'none';
export type side = 'left' | 'top';
export type modal = 'none' | 'login' | 'register';

export interface Player {
    id: number;
    name: string;
    total: number;
    isTurn: boolean;
    type: playerType;
}

export interface Cell {
    indexCell: number;
    left: stateCell;
    top: stateCell;
    occupied: stateCell;
}

export interface CellClick {
    side: side,
    indexCell: number,
}


export interface State {

    modal: modal;
    modalError: string;
    rooms: RoomsSocket[];
    user: {
        isLogin: boolean;
        nickname: string;
        idUser: string;
    };
    gameRoom: {
        idRoom: string;
        players: Player[];
        chat: chatMessage[];
    }
}

export interface AppStore {
    state: State;
}

export interface chatMessage {
    name: string;
    playerType: playerType;
    message: string;
}


export interface SelectFormOption {
    nameForm: string;
    namelabel: string;
    optionSelect: string[];
}

export interface InputTextFormOption {
    nameForm: string;
    namelabel: string;
    type: string;
}

export interface ButtonMaterialOption {
    action: ACTIONS_BUTTON;
    width: string;
    text: string;
}


export interface Profile {
    nickname: string;
    password: string;
}

export interface PayloadCreateGame {
    roomName: string
    players: string
    size: string
    typeGame: string
    visibility: string
}

export interface Room extends PayloadCreateGame {
    playerRoom: string;
}

export enum EACTION_WEBSOCKET {
    CREATE_GAME = 'create game',
    LIST_ROOM = 'list room',
    JOIN_GAME = 'join game',
    MESSAGE_CHAT = 'message chat'
}

export interface JoinGamePayload {
    idRoom: string;
}

export interface MessageChatGamePayload {
    idGame: string;
    message: string;
}

export type SendPayloadSocket = {} | JoinGamePayload | PayloadCreateGame | MessageChatGamePayload;

export interface payloadSocket {
    action: EACTION_WEBSOCKET,
    payload: {}
}


export interface RoomsSocket {
    id: number;
    room: {
        gameSetting: PayloadCreateGame
    };
    players: number;
}

export interface ResponseAuth {
    accessToken: string;
    nickname: string;
    idUser: string;
}

export interface gameCell {
    gridArea: string;
    cellCompany?: GameCellCompanyInfo;
}

export interface GameCellCompanyInfo {
    countryCompany: countryCompany;
    nameCompany: nameCompany;
    priceCompany: number;
}

export type countryCompany = 'germany' | 'italia';
export type nameCompany = 'volkswagen' | 'ferrari' | 'posteItaliane';
