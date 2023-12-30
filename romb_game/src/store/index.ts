import { AppStore, State } from 'src/app/types/state';
import { ActionReducerMap } from '@ngrx/store';
import { Reducers } from './reducers';
import { EMPTY_GAME_ROOM } from 'src/app/const';

export const stateApp: State = {
    insideBoard: {
        state: 'none',
    },
    gameRoom: EMPTY_GAME_ROOM,
    user: {
        isLogin: false
    },
    rooms: [],
    modal: {
        type: 'editProfile',
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