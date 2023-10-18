import { ACTIONS_BUTTON } from "../const/enum";
import { controlCompanyState } from "./state";

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
    prison?: boolean;
}

export interface CompanyInfo {
    countryCompany: string;
    priceCompany: number;
    collateralCompany: number;
    buyBackCompany: number;
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
    chat: chatMessage[];
    idRoom: string;
    players: gamePlayer;
    board: gameCell[];
    turnId: string;
    prisonAttempt?: number;
}

export type gameCell = {
    location: location;
    indexCell: number;
    nameCell: string;
    cellCompany?: GameCellCompanyInfo;
}

export type updateCellCompany = {
    indexCell: number,
    cellCompany: {
        shares: number;
        isPledge: boolean;
        isMonopoly?: boolean;
        owned?: string;
        rentCompany: number;
    }
}

export type startGame = {
    idRoom: string;
}

export type gamePlayer = {
    [key: string]: Player
}

export type ChatRoom = { chat: chatMessage[] };

export type chatMessage = {
    message?: string;
    senderName?: string;
    senderColor?: string;
    playerId?: string;
    cellId?: number;
    valueroll?: number;
    action?: string
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

export type textControl = {
    [key in controlCompanyState]: string
} //then delete, after translate

export type cellDirections = 'top' | 'bottom' | 'left' | 'right';
export type infoCellButtons = 'auction' | 'pay' | 'buy' | 'none';

export type infoCellTurn = {
    nameCell: string;
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