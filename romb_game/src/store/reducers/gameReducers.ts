import { createReducer, on } from "@ngrx/store";
import * as gameActions from '../actions/gameActions';
import { gameRoom } from "src/app/types/state";
import { EMPTY_GAME_ROOM } from "src/app/const";

const initalState: gameRoom = EMPTY_GAME_ROOM;

export const gameReducers = createReducer(initalState,
    on(gameActions.EndTurn, (state) => ({ ...state, infoCellTurn: undefined })),
    on(gameActions.EndGame, (state, { winner }) => ({ ...state, winner })),
    on(gameActions.ControlInsideBoard, (state, { insideBoardState }) => ({ ...state, insideBoardState })),
    on(gameActions.ControlCompany, (state, { controlCompany }) => ({ ...state, controlCompany })),
    on(gameActions.StartGame, (_, { gameRoom }) => ({ ...gameRoom })),
    on(gameActions.UpdateChatRoom, (state, { chatMessage }) => ({ ...state, chat: [...state.chat, chatMessage] })),
    on(gameActions.InfoAuction, (state, { infoAuction }) => ({ ...state, infoAuction })),
    on(gameActions.SetOfferDealInfo, (state, { offerDealInfo }) => ({ ...state, offerDealInfo })),
    on(gameActions.UpdateInfoCellTurn, (state, { infoCellTurn }) => ({ ...state, infoCellTurn })),
    on(gameActions.UpdateTurn, (state, { turnId }) => ({ ...state, turnId })),
    on(gameActions.UpdateInfoPlayer, (state, { updatePlayer }) => ({
        ...state, players: {
            ...state.players,
            [updatePlayer.id]: { ...state.players[updatePlayer.id], ...updatePlayer }
        }
    })),
    on(gameActions.UpdateCell, (state, { updateCell }) => {
        const newBoard = state.board.map((cell, index) =>
            (index === updateCell.indexCell && cell.company)
                ? { ...cell, company: { ...cell.company, ...updateCell.company } }
                : cell);
        return { ...state, board: newBoard }
    })
);
