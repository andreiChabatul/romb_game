import { State, statUser } from "src/app/types/state";
import { stateApp } from "..";
import { ActionUnion, AppActionTypes } from "../actions";


export const Reducers = (state = stateApp, action: ActionUnion): State => {
    switch (action.type) {
        case AppActionTypes.CloseModal:
            return { ...state, modal: { type: 'none' } };

        case AppActionTypes.OpenModal:
            return { ...state, modal: action.payload };

        case AppActionTypes.AddModalError:
            return { ...state, modal: { ...state.modal, modalError: action.payload } };

        case AppActionTypes.ChangeLanguage:
            return { ...state, lang: action.payload };

        case AppActionTypes.ClearModalError:
            return { ...state, modal: { ...state.modal, modalError: '' } };

        case AppActionTypes.UpdateRooms:
            return { ...state, rooms: action.payload };

        case AppActionTypes.UpdateTurn:
            return state.gameRoom
                ? { ...state, gameRoom: { ...state.gameRoom, turnId: action.payload.turnId } }
                : state;

        case AppActionTypes.UpdateInfoPlayer: {
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom,
                    players: {
                        ...state.gameRoom.players,
                        [action.payload.id]: { ...state.gameRoom.players[action.payload.id], ...action.payload }
                    }
                }
            }
        }

        case AppActionTypes.InfoCellTurn: {
            return {
                ...state,
                insideBoard: {
                    infoCellTurn: action.payload,
                    state: 'infoCellTurn'
                }
            };
        }

        case AppActionTypes.StartGame:
            return { ...state, gameRoom: action.payload, insideBoard: { state: 'none' } };

        case AppActionTypes.EndGame:
            return {
                ...state,
                insideBoard: { state: 'winner' },
                gameRoom: { ...state.gameRoom, winner: action.payload }
            }


        case AppActionTypes.UpdateCell:
            const newBoard = state.gameRoom.board.map((cell, index) =>
                (index === action.payload.indexCell && cell.company)
                    ? { ...cell, company: { ...cell.company, ...action.payload.company } }
                    : cell
            );
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom,
                    board: newBoard
                }
            };

        case AppActionTypes.ControlCompany:
            return {
                ...state,
                insideBoard: {
                    ...state.insideBoard,
                    controlCompany: action.payload
                }
            };

        case AppActionTypes.ControlInsideBoard:
            return {
                ...state,
                insideBoard: {
                    ...state.insideBoard,
                    state: action.payload
                }
            };

        case AppActionTypes.InfoAuction:
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom,
                    infoAuction: action.payload,
                },
                insideBoard: {
                    state: 'auction',
                }
            };

        case AppActionTypes.SetOfferDealInfo:
            return {
                ...state,
                gameRoom: { ...state.gameRoom, offerDealInfo: action.payload },
                insideBoard: { state: 'receiveDeal' }
            };

        case AppActionTypes.OpenInfoCell: {
            return { ...state, modal: { ...state.modal, type: 'infoCell', payload: action.payload } };
        }

        case AppActionTypes.EndTurn: {
            return {
                ...state,
                insideBoard: {
                    infoCellTurn: undefined,
                    state: 'playerInfo'
                }
            };
        }

        case AppActionTypes.UpdateChatRoom:
            return { ...state, gameRoom: { ...state.gameRoom, chat: [...state.gameRoom.chat, action.payload] } };

        case AppActionTypes.LoginUser:
            return {
                ...state,
                modal: { ...state.modal, type: 'none' },
                user: {
                    ...state.user,
                    isLogin: true,
                    infoUser: {
                        nickname: action.payload.nickname ? action.payload.nickname : '',
                        idUser: action.payload.idUser ? action.payload.idUser : '',
                        statUser: action.payload.statUser ? action.payload.statUser : {} as statUser,
                    }
                }
            };

        default:
            return state;
    }
};