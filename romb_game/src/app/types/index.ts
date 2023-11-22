import { statUser } from "./state";

export type modal = 'none' | 'login' | 'register' | 'infoCell' | 'exitGame';
export type cellDirections = 'top' | 'bottom' | 'left' | 'right';
export type infoCellButtons = 'auction' | 'pay' | 'buy' | 'none' | 'bankrupt';
export type cellType = 'company' | 'empty' | 'tax' | 'profit' | 'loss';
export type dealPerson = 'offerPerson' | 'receivePerson';
export type offerInfo = {
    indexCompany: number[];
    valueMoney: number;
    idPerson: string;
}

export type offerDealInfo = {
    [key in dealPerson]: offerInfo;
}

export interface Player extends UpdatePlayerPayload {
    color: string;
    name: string;
    image: string;
}

export interface UpdatePlayerPayload {
    id: string;
    total: number;
    capital: number;
    cellPosition: number;
    prison: prisonPlayer;
    bankrupt: boolean;
}

export type prisonPlayer = {
    state: boolean;
    attempt: number;
}

export interface CompanyInfo {
    countryCompany: string;
    priceCompany: number;
    collateralCompany: number;
    buyBackCompany: number;
    priceStock: number;
}

export interface GameCellCompanyInfo {
    companyInfo: CompanyInfo;
    shares: number;
    isPledge: boolean;
    owned: string;
    isMonopoly: boolean;
    rentCompany: number;
}

export interface GameRoom {
    chat: chatMessage[];
    idRoom: string;
    players: gamePlayer;
    board: gameCell[];
    turnId: string;
    offerDealInfo?: offerDealInfo;
}

export type gameCell = {
    type: cellType;
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
        isMonopoly: boolean;
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

export type chatRoomPayload = { chat: chatMessage };

export type chatMessage = {
    message?: string;
    senderName?: string;
    senderColor?: string;
    playerId?: string;
    cellId?: number;
    valueroll?: number;
    action?: string
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
    statUser: statUser;
}

export type location = {
    gridArea: string,
    cellDirections: cellDirections,
}

export type infoCellTurn = {
    indexCompany: number;
    buttons: infoCellButtons;
    description: string;
    value?: number;
}

