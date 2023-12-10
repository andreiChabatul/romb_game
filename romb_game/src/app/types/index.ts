export type modal = 'none' | 'login' | 'register' | 'infoCell' | 'exitGame' | 'createGame' | 'joinGame';
export type cellDirections = 'top' | 'bottom' | 'left' | 'right';
export type infoCellButtons = 'pay' | 'buy' | 'none' | 'bankrupt';
export type controlAuction = 'startAuction' | 'leaveAuction' | 'stepAuction' | 'endAuction';
export type cellType = 'company' | 'empty' | 'tax' | 'profit' | 'loss';
export type dealPerson = 'offerPerson' | 'receivePerson';
export type statePlayer = 'active' | 'wait' | 'inactive';
export type typeLoading = 'cell' | 'auction' | 'startGame' | 'endGame';
export type endGameAction = 'leave' | 'stay' | 'endGame' | 'endTime';
export type fullPlayer = mainPlayer & updatePlayer;
export type offerInfo = {
    indexCompany: number[];
    valueMoney: number;
    idPerson: string;
}

export type offerDealInfo = {
    [key in dealPerson]: offerInfo;
}

export type mainPlayer = {
    nickName: string;
    image: string;
    color: string;
    numberGame: number;
    numberWin: number;
}

export type updatePlayer = {
    id: string;
    total: number;
    capital: number;
    cellPosition: number;
    prison: prisonPlayer;
    bankrupt: boolean;
    online: boolean;
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

export interface gameRoom {
    chat: chatMessage[];
    idRoom: string;
    players: playersGame;
    board: gameCell[];
    turnId: string;
    timeTurn: number;
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
    [key: string]: fullPlayer
}

export type chatRoomPayload = { chat: chatMessage };
export type endGamePayload = { winUser: string };

export type chatMessage = {
    message?: string;
    senderId?: string;
    idUser?: string;
    cellId?: number;
    valueroll?: number;
    action?: string
}

export type createUserDto = {
    nickName: string;
    password: string;
}

export type infoRoom = {
    maxPlayers: number,
    idRoom: string,
    roomName: string,
    players: fullPlayer[],
}

export interface ResponseAuth {
    accessToken: string;
}

export interface JwtPayload {
    id: string;
    nickName: string;
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
