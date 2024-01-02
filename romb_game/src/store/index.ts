import { AppStore, State } from 'src/app/types/state';
import { ActionReducerMap } from '@ngrx/store';
import { Reducers } from './reducers';
import { EMPTY_GAME_ROOM, EMPTY_USER } from 'src/app/const';

export const stateApp: State = {
    gameRoom: EMPTY_GAME_ROOM,
    user: {
        isLogin: false,
        infoUser: EMPTY_USER //temp
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