import { createReducer, on } from "@ngrx/store";
import * as roomsActions from '../actions/roomsActions';
import { infoRoom } from "src/app/types";

const initalState: infoRoom[] = [];

export const roomsReducers = createReducer(initalState,
    on(roomsActions.UpdateRooms, (state, {infoRoom}) => (infoRoom)),
)
