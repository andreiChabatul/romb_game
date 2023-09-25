export enum ACTIONS_BUTTON {
    NEW_GAME = 'New game',
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
    BUY_COMPANY = 'Buy',
    AUCTION_STEP = 'Make bid',
    DICE_ROLL = 'Dice roll',
    OFFER_DEAL = 'Offer deal',
    BUY_STOCK = 'Buy stock',
    BUY_OUT_COMPANY = 'Buy out company',
    PAY = 'Pay',
    SELL_STOCK = 'Sell stock',
    MORTGAGE = 'Mortgage',
    START_AUCTION = 'Start auction'
}

export enum EACTION_WEBSOCKET {
    CREATE_GAME = 'create game',
    LIST_ROOM = 'list room',
    JOIN_GAME = 'join game',
    MESSAGE_CHAT = 'message chat',
    UPDATE_ROOM = 'update room',
    DICE_ROLL = 'dice roll',
    SELL_COMPANY = 'sell company',
    BUY_COMPANY = 'buy company',
    START_AUCTION = 'Start auction',
    AUCTION_STEP = 'auction step',
    AUCTION_END = 'auction end',
    BUY_STOCK = 'buy stock',
    INFO_CELL_TURN = 'info cell turn'
}

export enum ENDPOINT {
    REG = 'auth/registration'
}