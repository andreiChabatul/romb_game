import { ACTIONS_BUTTON } from "../const/enum";

export type modal = 'none' | 'login' | 'register' | 'infoCell';

export interface Player extends UpdatePlayer {
    color: string;
    name: string;
    image: string;
}

export interface UpdatePlayer {
    id: string;
    total: number;
    capital: number;
    cellPosition: number;
}

export interface CompanyInfo {
    countryCompany: countryCompany;
    nameCompany: nameCompany;
    priceCompany: number;
    rentCompany: number;
    priceStock?: number;
}

export interface GameCellCompanyInfo extends CompanyInfo {
    shares: number;
    isPledge: boolean;
    isMonopoly?: boolean;
    owned?: string;
}

export interface GameRoom {
    chat: ChatMessage[];
    idRoom: string;
    players: gamePlayer;
    board: gameCell[];
    turnId: string;
}

export type gameCell = {
    location: location;
    indexCell: number;
    cellCompany?: GameCellCompanyInfo;
    cellSquare?: GameCellSquare;
}


export type startGame = {
    idRoom: string;
}

export type gamePlayer = {
    [key: string]: Player
}

export type ChatRoom = { chat: ChatMessage[] };


export interface ChatMessage {
    name: string;
    color: string;
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

export type location = {
    gridArea: string,
    cellDirections: cellDirections,
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
export type cellDirections = 'top' | 'bottom' | 'left' | 'right';
export type stockTypeCell = 'stock' | 'stamp' | 'bag';
export type cellType = 'company' | 'empty';
export type typeSquareImage = 'inJail' | 'parking' | 'security' | 'start' | 'profit' | 'loss' | 'tax' | 'ukraine';
export type infoCellButtons = 'auction' | 'pay' | 'buy' | 'none';

export type infoCellTurn = {
    nameCell: nameCompany | typeSquareImage;
    titleCell: string;
    description: string;
    indexCompany?: number;
    descriptionTwo?: string;
    buttons: infoCellButtons;
    dept?: number;
    receiverId?: string;
}

export type ButtonStandart = {
    action: ACTIONS_BUTTON;
    width: string;
    height: string;
    show: boolean;
}