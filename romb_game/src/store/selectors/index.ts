import { createSelector } from "@ngrx/store";
import { AppStore, State } from "src/app/types/state";

const select = (state: AppStore) => state.state;

export const selectAllPlayer = createSelector(select, (state: State) => state.gameRoom.players);
export const selectAllPlayerArr = createSelector(select, (state: State) => Object.values(state.gameRoom.players));
export const selectGamePLayer = createSelector(select, (state: State) => state.gameRoom.players[state.user.idUser]);
export const selectGameRoom = createSelector(select, (state: State) => state.gameRoom);
export const selectChat = createSelector(select, (state: State) => state.gameRoom.chat);
export const selectPlayerTurnId = createSelector(select, (state: State) => state.gameRoom.turnId);
export const selectIdRoom = createSelector(select, (state: State) => state.gameRoom.idRoom);
export const selectIsLogin = createSelector(select, (state: State) => state.user.isLogin);
export const selectIdUser = createSelector(select, (state: State) => state.user.idUser);
export const selectUserName = createSelector(select, (state: State) => state.user.nickname);
export const selectModal = createSelector(select, (state: State) => state.modal.type);
export const selectModalError = createSelector(select, (state: State) => state.modal.modalError);
export const selectRooms = createSelector(select, (state: State) => state.rooms);
export const selectIndexCell = createSelector(select, (state: State) => state.modal.payload);
export const selectInsideBoardState = createSelector(select, (state: State) => state.insideBoard.state);
export const selectControlCompanyState = createSelector(select, (state: State) => state.insideBoard.controlCompany);
export const selectInfoCellTurn = createSelector(select, (state: State) => state.insideBoard.infoCellTurn);
export const selectOfferDealInfo = createSelector(select, (state: State) => state.gameRoom.offerDealInfo);
export const selectInsideBoard = createSelector(select, (state: State) => state.insideBoard);