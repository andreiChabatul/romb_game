import { State } from "src/app/types/state";
import { stateApp } from "..";
import { ActionUnion, AppActionTypes } from "../actions";


export const Reducers = (state = stateApp, action: ActionUnion): State => {
    switch (action.type) {
        case AppActionTypes.CloseModal:
            return { ...state, modal: { ...state.modal, type: 'none' } };

        case AppActionTypes.ChangeModal:
            return { ...state, modal: { ...state.modal, modalError: '', type: action.payload } };

        case AppActionTypes.AddModalError:
            return { ...state, modal: { ...state.modal, modalError: action.payload } };

        case AppActionTypes.ClearModalError:
            return { ...state, modal: { ...state.modal, modalError: '' } };

        case AppActionTypes.UpdateRooms:
            return { ...state, rooms: action.payload };

        case AppActionTypes.InitBoard: {
            return { ...state, gameRoom: { ...state.gameRoom, board: action.payload } };
        }

        case AppActionTypes.UpdateTurn: {
            return { ...state, gameRoom: { ...state.gameRoom, turnId: action.payload.turnId } };
        }

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

        case AppActionTypes.StartGame: {
            return { ...state, gameRoom: { ...state.gameRoom, board: [], idRoom: action.payload } };
        }

        case AppActionTypes.SetOfferDeal: {
            return action.payload.offersPerson === 'offerPerson'
                ? {
                    ...state, gameRoom: {
                        ...state.gameRoom, offerDealInfo: {
                            ...state.gameRoom.offerDealInfo,
                            offerPerson: action.payload.offerInfo
                        }
                    }
                }
                : {
                    ...state, gameRoom: {
                        ...state.gameRoom, offerDealInfo: {
                            ...state.gameRoom.offerDealInfo,
                            receivePerson: action.payload.offerInfo
                        }
                    }
                }
        }

        case AppActionTypes.InitPlayer: {
            const players = { ...state.gameRoom.players };
            players[action.payload.id] = action.payload;
            return { ...state, gameRoom: { ...state.gameRoom, players: { ...players } } };
        }

        case AppActionTypes.UpdateCell: {
            const newBoard = [...state.gameRoom.board];
            let cell = newBoard[action.payload.indexCell];
            if (cell.cellCompany) {
                cell = { ...cell, cellCompany: { ...cell.cellCompany, ...action.payload.cellCompany } };
                newBoard[action.payload.indexCell] = cell;
            };

            return {
                ...state, gameRoom: { ...state.gameRoom, board: newBoard }
            };
        }

        case AppActionTypes.ControlInsideBoard: {
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom,
                    offerDealInfo: undefined
                },
                insideBoard: {
                    state: action.payload
                }
            };
        }

        case AppActionTypes.SetOfferDealInfo: {
            return {
                ...state,
                gameRoom: {
                    ...state.gameRoom,
                    offerDealInfo: action.payload
                },
                insideBoard: {
                    state: 'receiveDeal'
                }
            }
        }

        case AppActionTypes.OpenInfoCell: {
            return { ...state, modal: { ...state.modal, type: 'infoCell', payload: action.payload } };
        }

        case AppActionTypes.SetValueSellProfit: {
            return {
                ...state,
                insideBoard: {
                    ...state.insideBoard,
                    valueSellProfit: action.payload
                }
            }
        };

        case AppActionTypes.EndTurn: {
            return {
                ...state,
                insideBoard: {
                    infoCellTurn: undefined,
                    state: 'playerInfo'
                }
            };
        }

        case AppActionTypes.UpdateChatRoom: {
            return { ...state, gameRoom: { ...state.gameRoom, chat: [...state.gameRoom.chat, action.payload] } };
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