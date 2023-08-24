import { State } from "src/app/types";
import { stateApp } from "..";
import { ActionUnion, AppActionTypes } from "../actions";


export const Reducers = (state = stateApp, action: ActionUnion): State => {
    switch (action.type) {
        case AppActionTypes.CloseModal:
            return { ...state, modal: 'none' };
        case AppActionTypes.ChangeModal:
            return { ...state, modal: action.payload, modalError: '' };
        case AppActionTypes.AddModalError:
            return { ...state, modalError: action.payload };
        case AppActionTypes.ClearModalError:
            return { ...state, modalError: '' };
        case AppActionTypes.UpdateRooms:
            return { ...state, rooms: action.payload };
        case AppActionTypes.LoginUser:
            return {
                ...state,
                modal: 'none',
                user: {
                    ...state.user,
                    isLogin: true,
                    nickname: action.payload.nickname ? action.payload.nickname : '',
                    idUser: action.payload.idUser ? action.payload.idUser : ''
                }
            };
        default:
            return state;
    }
};