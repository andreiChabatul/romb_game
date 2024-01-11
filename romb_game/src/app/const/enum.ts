export enum ACTIONS_BUTTON {
    NEW_GAME = 'newGameButton',
    JOIN_GAME = 'joinGameButton',
    JOIN_ITEM_GAME = 'joinGame',
    CREATE_GAME = 'createGame',
    REGISTER = 'register',
    LOGIN = 'logInProfile',
    UPDATE_ROOM = 'sync',
    ADD_ROOM = 'add',
    BUY_COMPANY = 'buyCompanyButton',
    DICE_ROLL = 'diceRollButton',
    OFFER_DEAL = 'offerDealButton',
    BUY_STOCK = 'buyStockButton',
    BUY_OUT_COMPANY = 'buyOutButton',
    PAY = 'payButton',
    SELL_STOCK = 'sellStockButton',
    MORTGAGE = 'mortgageButton',
    START_AUCTION = 'startAuctionButton',
    AUCTION_STEP = 'makeBidButton',
    AUCTION_LEAVE = 'leaveButton',
    END_CONTROL = 'finishButton',
    SEND_DEAL = 'sendDealButton',
    ACCEPT_DEAL = 'acceptDealButton',
    REFUSE_DEAL = 'refuseDealButton',
    CANSEL_DEAL = 'canselDealButton',
    LEAVE_GAME = 'leaveGame',
    STAY_GAME = 'stayGameButton',
    RECONNECT_GAME = 'reconnectGame',
    EDIT_PROFILE ='editProfile',
    DELETE_PROFILE ='deleteProfile'
}

export enum EACTION_WEBSOCKET {
    RECONNECT = 'reconnect',
    CONTROL_ROOM = 'control room',
    UPDATE_CHAT = 'update chat',
    UPDATE_CELL = 'update cell',
    UPDATE_PLAYER = 'update player',
    UPDATE_TURN = 'update turn',
    DICE_ROLL = 'dice roll',
    INFO_CELL_TURN = 'info cell turn',
    START_GAME = 'start game',
    CONTROL_COMPANY = 'control company',
    CONTROL_DEAL = 'control deal',
    ACTIVE_CELL = 'active cell',
    AUCTION = 'auction',
    END_GAME = 'end game'
}

export enum ENDPOINT {
    REG = 'auth/registration',
    LOGIN = 'auth/login',
    LOGOUT = 'auth/logout',
    GOOGLE = 'auth/google',
    REFRESH = 'auth/refresh-tokens',
    USER = 'user',
    ROOMS_RECONNECT = 'rooms/reconnect',
    ROOMS = 'rooms/'
}