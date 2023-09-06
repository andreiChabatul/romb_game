import { ACTIONS_BUTTON } from "../const/enum";

export type modal = 'none' | 'login' | 'register' | 'infoCell';

export interface Player {
    id: number;
    name: string;
    image: string;
    total: number;
    capital: number;
    isTurn: boolean;
    numberPlayer: number;
}

export interface State {

    modal: {
        type: modal,
        modalError: string;
        payload?: number
    };
    rooms: InfoRoom[];
    user: {
        isLogin: boolean;
        nickname: string;
        idUser: string;
    };
    gameRoom: GameRoom
}

export interface GameRoom {
    idRoom: string;
    players: Player[];
    board: gameCell[];
    chat: ChatMessage[];
}

export interface AppStore {
    state: State;
}

export interface ChatMessage {
    name: string;
    numberPlayer: number;
    message: string;
}

export interface SelectFormOption {
    nameForm: string;
    namelabel: string;
    optionSelect: OptionSelect[];
}

export interface OptionSelect {
    value: number | string;
    option: string;
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

export enum EACTION_WEBSOCKET {
    CREATE_GAME = 'create game',
    LIST_ROOM = 'list room',
    JOIN_GAME = 'join game',
    MESSAGE_CHAT = 'message chat',
    UPDATE_ROOM = 'update room',
    DICE_ROLL = 'dice roll'
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

export type SendPayloadSocket = {} | JoinGamePayload | PayloadCreateGame | MessageChatGamePayload | DiceRoolGamePayload;

export interface payloadSocket {
    action: EACTION_WEBSOCKET,
    payload: {}
}

export interface InfoRoom {
    maxPLayers: number,
    players: Player[],
    idRoom: string,
    isVisiblity: boolean,
    roomName: string
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
export type cellType = 'company' | 'empty';


export interface InfoCell {
    typeCell: cellType,
    nameCell: nameCompany,
    country: countryCompany,
    imageCell: string;
    description: string;
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
