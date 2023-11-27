import { statUser } from "./state";

export type modal = 'none' | 'login' | 'register' | 'infoCell' | 'exitGame' ;
export type cellDirections = 'top' | 'bottom' | 'left' | 'right';
export type infoCellButtons = 'pay' | 'buy' | 'none' | 'bankrupt';
export type controlAuction = 'startAuction' | 'leaveAuction' | 'stepAuction' | 'endAuction';
export type cellType = 'company' | 'empty' | 'tax' | 'profit' | 'loss';
export type dealPerson = 'offerPerson' | 'receivePerson';
export type statePlayer = 'active' | 'wait' | 'inactive';
export type typeLoading = 'cell' | 'auction' | 'startGame';
export type endGameAction = 'leave' | 'stay';
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
    shares: number;
    isPledge: boolean;
    owned: string;
    isMonopoly: boolean;
    rentCompany: number;
}

export type gameRoom = {
    chat: chatMessage[];
    idRoom: string;
    players: playersGame;
    board: gameCell[];
    turnId: string;
    offerDealInfo?: offerDealInfo;
    infoAuction?: infoAuction;
    winner?: string;
}

export type gameCell = {
    type: cellType;
    location: location;
    indexCell: number;
    nameCell: string;
    company?: CompanyInfo;
}

export type updateCellCompany = {
    indexCell: number,
    company: {
        shares: number;
        isPledge: boolean;
        isMonopoly: boolean;
        owned?: string;
        rentCompany: number;
    }
}

export type playersGame = {
    [key: string]: Player
}

export type chatRoomPayload = { chat: chatMessage };
export type endGamePayload = { winUser: string };

export type chatMessage = {
    message?: string;
    senderName?: string;
    senderColor?: string;
    idUser?: string;
    cellId?: number;
    valueroll?: number;
    action?: string
}

export interface Profile {
    nickname: string;
    password: string;
}

export type infoRoom = {
    maxPLayers: number,
    idRoom: string,
    roomName: string,
    players: Player[],
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

export type infoAuction = {
    currentPrice: number;
    currentPlayer: string;
    action: controlAuction;
    statePlayer: statePlayer;
    indexCompany: number;
}
