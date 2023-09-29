import { State } from "src/app/types/state";
import { stateApp } from "..";
import { ActionUnion, AppActionTypes } from "../actions";


export const Reducers = (state = stateApp, action: ActionUnion): State => {
    switch (action.type) {
        case AppActionTypes.CloseModal:
            return { ...state, modal: { ...state.modal, type: 'none' } };

        case AppActionTypes.UpdateGameRoom:
            return { ...state, gameRoom: { ...action.payload, chat: state.gameRoom.chat } };

        case AppActionTypes.ChangeModal:
            return { ...state, modal: { ...state.modal, modalError: '', type: action.payload } };

        case AppActionTypes.AddModalError:
            return { ...state, modal: { ...state.modal, modalError: action.payload } };

        case AppActionTypes.ClearModalError:
            return { ...state, modal: { ...state.modal, modalError: '' } };

        case AppActionTypes.UpdateRooms:
            return { ...state, rooms: action.payload };

        case AppActionTypes.DiceRool: {
            return { ...state, insideBoardState: { isDiceRoll: action.payload, isButtons: false } };
        }

        case AppActionTypes.InfoCellTurn: {
            return { ...state, infoCellTurn: action.payload };
        }

        case AppActionTypes.ControlStock: {
            return { ...state, gameCellState: { ...state.gameCellState, isBuyStock: action.payload } };
        }

        case AppActionTypes.OpenInfoCell: {
            return { ...state, modal: { ...state.modal, type: 'infoCell', payload: action.payload } };
        }

        case AppActionTypes.EndTurn: {
            return { ...state, infoCellTurn: undefined, insideBoardState: { ...state.insideBoardState, isButtons: true } }
        }

        case AppActionTypes.UpdateChatRoom: {
            return { ...state, gameRoom: { ...state.gameRoom, chat: action.payload } };
        }

        case AppActionTypes.LoginUser:
            return {
                ...state,
                modal: { ...state.modal, type: 'none' },
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