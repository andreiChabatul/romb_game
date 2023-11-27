export enum ACTIONS_BUTTON {
    NEW_GAME = 'newGameButton',
    JOIN_GAME = 'Join game',
    SETTING = 'settings',
    CREATE_ROOM = 'Create Room',
    LOG_OUT = 'person_2',
    LOG_IN = 'login',
    HELP = 'quiz',
    INFO = 'info_i',
    REGISTER = 'Create Player',
    LOGIN = 'Log in profile',
    UPDATE_ROOM = 'sync',
    SEARCH_ROOM = 'search',
    ADD_ROOM = 'add',
    SHADOW_ROOM = 'shadow_add',
    BUY_COMPANY = 'buyCompanyButton',
    DICE_ROLL = 'diceRollButton',
    OFFER_DEAL = 'offerDealButton',
    BUY_STOCK = 'Buy stock',
    BUY_OUT_COMPANY = 'Buy out company',
    PAY = 'payButton',
    PAY_RENT = 'payRentButton',
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
    LEAVE_GAME = 'leaveGameButton',
    STAY_GAME = 'stayGameButton'
}

export enum EACTION_WEBSOCKET {
    LIST_ROOM = 'list room',
    CONTROL_ROOM = 'control room',
    UPDATE_CHAT = 'update chat',
    UPDATE_CELL = 'update cell',
    UPDATE_PLAYER = 'update player',
    UPDATE_TURN = 'update turn',
    DICE_ROLL = 'dice roll',
    INFO_CELL_TURN = 'info cell turn',
    END_TURN = 'end turn',
    START_GAME = 'start game',
    CONTROL_COMPANY = 'control company',
    CONTROL_DEAL = 'control deal',
    BANKRUPT = 'bankrupt',
    ACTIVE_CELL = 'active cell',
    AUCTION = 'auction',
    END_GAME = 'end game'
}

export enum ENDPOINT {
    REG = 'auth/registration'
}