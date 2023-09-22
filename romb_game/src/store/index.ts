import { AppStore, State } from 'src/app/types/state';
import { ActionReducerMap } from '@ngrx/store';
import { Reducers } from './reducers';

export const stateApp: State = {
    gameRoom: {
        idRoom: '',
        board: [],
        players: [],
        chat: []
    },
    gameCellState: {
        isDiceRoll: false,
        isBuyOutCompany: false,
        isBuyStock: false,
        isSellStock: false,
        isPledgeCompany: false,
    },
    user: {
        idUser: '',
        isLogin: false,
        nickname: ''
    },
    rooms: [],
    modal: {
        type: 'none',
        modalError: ''
    }
};

export const initalState: AppStore = {
    state: stateApp,
};

export function getInitalState(): AppStore {
    return initalState;
}

export const appReducers: ActionReducerMap<AppStore, any> = {
    state: Reducers,
};