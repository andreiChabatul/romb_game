export type modal = 'none' | 'login' | 'register' | 'infoCell';
export type companyType = 'company' | 'lossProfit' | 'empty';
export type cellDirections = 'top' | 'bottom' | 'left' | 'right';
export type infoCellButtons = 'auction' | 'pay' | 'buy' | 'none' | 'payRent';
export type offersPerson = 'offerPerson' | 'receivePerson';
export type offerInfo = {
    indexCompany: number[];
    valueMoney: number;
    idPerson: string;
}

export type offerDealInfo = {
    offerPerson?: offerInfo,
    receivePerson?: offerInfo,
}

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
    offerDealInfo: offerDealInfo;
}

export type gameCell = {
    type: companyType;
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

export type ChatRoom = { chat: chatMessage };

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
}

export type location = {
    gridArea: string,
    cellDirections: cellDirections,
}

export type infoCellTurn = {
    indexCompany: number;
    buttons: infoCellButtons;
    description?: string;
}

