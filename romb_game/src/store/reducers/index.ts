import { State } from "src/app/types/state";
import { stateApp } from "..";
import { ActionUnion, AppActionTypes } from "../actions";
import { EMPTY_GAME_ROOM, EMPTY_USER } from "src/app/const";

export const Reducers = (state = stateApp, action: ActionUnion): State => {
    switch (action.type) {
        case AppActionTypes.CloseModal:
            return { ...state, modal: { type: 'none' } };

        case AppActionTypes.OpenModal:
            return { ...state, modal: action.payload };

        case AppActionTypes.AddModalError:
            return { ...state, modal: { ...state.modal, modalError: action.payload } };

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
                gameRoom: {
                    ...state.gameRoom,
                    insideBoard: {
                        infoCellTurn: action.payload,
                        state: 'infoCellTurn'
                    }
                }
            };
        }

        case AppActionTypes.StartGame:
            return { ...state, gameRoom: action.payload };

        case AppActionTypes.SetIdRoom:
            return {
                ...state,
                gameRoom: { ...EMPTY_GAME_ROOM, idRoom: action.payload },
                modal: { type: 'reconnectGame' }
            };

        case AppActionTypes.EndGame:
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom, winner: action.payload, insideBoard: { state: 'winner' }
                }
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
                gameRoom: {
                    ...state.gameRoom,
                    insideBoard: {
                        ...state.gameRoom.insideBoard,
                        controlCompany: action.payload
                    }
                }
            };

        case AppActionTypes.ControlInsideBoard:
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom,
                    insideBoard: {
                        ...state.gameRoom.insideBoard,
                        state: action.payload
                    }
                }
            };

        case AppActionTypes.InfoAuction:
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom,
                    infoAuction: action.payload,
                    insideBoard: {
                        state: 'auction',
                    }
                },
            };

        case AppActionTypes.SetOfferDealInfo:
            return {
                ...state,
                gameRoom: { ...state.gameRoom, offerDealInfo: action.payload, insideBoard: { state: 'receiveDeal' } },

            };

        case AppActionTypes.OpenInfoCell:
            return { ...state, modal: { ...state.modal, type: 'infoCell', payload: action.payload } };

        case AppActionTypes.EndTurn:
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom,
                    insideBoard: {
                        infoCellTurn: undefined,
                        state: 'playerInfo'
                    }
                }
            };

        case AppActionTypes.UpdateChatRoom:
            return { ...state, gameRoom: { ...state.gameRoom, chat: [...state.gameRoom.chat, action.payload] } };

        case AppActionTypes.LoginUser:
            return {
                ...state,
                modal: { type: 'none' },
                user: {
                    isLogin: true,
                    infoUser: { ...EMPTY_USER, ...action.payload }
                }
            };

        case AppActionTypes.LogoutUser:
            return {
                ...state,
                modal: { type: 'none' },
                user: {
                    isLogin: false
                }
            }

        default:
            return state;
    }
};