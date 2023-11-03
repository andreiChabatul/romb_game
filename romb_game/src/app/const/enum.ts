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
    PAY_PRISON = 'payPrison',
    SELL_STOCK = 'Sell stock',
    MORTGAGE = 'Mortgage',
    START_AUCTION = 'startAuctionButton',
    AUCTION_STEP = 'Make bid',
    AUCTION_LEAVE = 'Leave',
    END_CONTROL = 'Finish',
    SEND_DEAL = 'sendDealButton'
}

export enum EACTION_WEBSOCKET {
    CREATE_GAME = 'create game',
    JOIN_GAME = 'join game',
    LIST_ROOM = 'list room',
    MESSAGE_CHAT = 'message chat',
    INIT_PLAYER = 'init player',
    INIT_BOARD = 'init board',
    UPDATE_CHAT = 'update chat',
    UPDATE_CELL = 'update cell',
    UPDATE_PLAYER = 'update player',
    UPDATE_TURN = 'update turn',
    DICE_ROLL = 'dice roll',
    INFO_CELL_TURN = 'info cell turn',
    END_TURN = 'end turn',
    CALC_VALUE_LS = 'calc value ls',
    START_GAME = 'start game',
    CONTROL_COMPANY = 'control company',
    PRISON = 'prison'
}

export enum ENDPOINT {
    REG = 'auth/registration'
}