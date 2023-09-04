import { ACTIONS_BUTTON } from "../const/enum";

export type stateCell = 'border' | playerType;
export type playerType = 'playerOne' | 'playerTwo' | 'playerThree' | 'playerFour' | 'none';
export type modal = 'none' | 'login' | 'register' | 'infoCell';

export interface Player {
    id: number;
    name: string;
    total: number;
    isTurn: boolean;
    type: playerType;
}

export interface State {

    modal: {
        type: modal,
        modalError: string;
        payload?: number
    };
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
    indexCell: number;
    gridArea: string;
    isPledge?: boolean;
    players: string[];
    owned?: string;
    cellDirections: cellDirections;
    cellCompany?: GameCellCompanyInfo;
    cellSquare?: GameCellSquare;
}

export interface GameCellCompanyInfo {
    countryCompany: countryCompany;
    nameCompany: nameCompany;
    priceCompany: number;
    shares?: stockTypeCell[];
}

export interface GameCellSquare {
    imageCell: typeSquareImage;
    textCell: string;
}


export type nameCompany =
    'volkswagen' | 'allianz' | 'continental'
    | 'ferrari' | 'posteItaliane' | 'uniCredit'
    | 'ukranafta' | 'uia'
    | 'honda' | 'canon' | 'fujitsu' | 'mitsubishi'
    | 'ibm' | 'WD' | 'google'
    | 'rbc' | 'telus'
    | 'xiaomi' | 'aliexpress'
    | 'kaz' | 'kazAzot' | 'ttc'
    | 'volvo' | 'essity' | 'ericsson'
    | 'hsbc' | 'rr' | 'bp';

export type countryCompany = 'germany' | 'ukraine' | 'japan' | 'italia' | 'britania' | 'sweden' | 'canada' | 'kazah' | 'china' | 'usa';
export type typeSquareImage = 'inJail' | 'parking' | 'security' | 'start' | 'chance' | 'mysteryBox' | 'tax';
export type cellDirections = 'top' | 'bottom' | 'left' | 'right';
export type stockTypeCell = 'stock' | 'stamp' | 'moneta';


export interface InfoCellCompany {
    name: nameCompany,
    country: countryCompany,
    initalCost: number;
    collateralValue: number;
    sharePrice: number;
    companyProfit: NoShare | Share;

}

export interface NoShare {
    type: stockTypeCell;
    quallity: number[];
}

export interface Share {
    type: stockTypeCell;
    defaultPrice: number;
    monopolyPrice: number;
    quallity: number[];
}