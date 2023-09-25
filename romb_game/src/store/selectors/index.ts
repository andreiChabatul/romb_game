import { createSelector } from "@ngrx/store";
import { AppStore, State } from "src/app/types/state";

const select = (state: AppStore) => state.state;

export const selectAllPlayer = createSelector(select, (state: State) => state.gameRoom.players);
export const selectBoard = createSelector(select, (state: State) => state.gameRoom.board);
export const selectChat = createSelector(select, (state: State) => state.gameRoom.chat);
export const selectIdRoom = createSelector(select, (state: State) => state.gameRoom.idRoom);
export const selectIsLogin = createSelector(select, (state: State) => state.user.isLogin);
export const selectIdUser = createSelector(select, (state: State) => state.user.idUser);
export const selectUserName = createSelector(select, (state: State) => state.user.nickname);
export const selectModal = createSelector(select, (state: State) => state.modal.type);
export const selectModalError = createSelector(select, (state: State) => state.modal.modalError);
export const selectRooms = createSelector(select, (state: State) => state.rooms);
export const selectIndexCell = createSelector(select, (state: State) => state.modal.payload);
export const selectSellCompany = createSelector(select, (state: State) => state.sellCompany);
export const selectCellGameState = createSelector(select, (state: State) => state.gameCellState);
export const selectInsideBoardState = createSelector(select, (state: State) => state.insideBoardState);
export const selectInfoCellTurn = createSelector(select, (state: State) => state.infoCellTurn);