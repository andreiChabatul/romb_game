import { State } from "src/app/types";
import { stateApp } from "..";
import { ActionUnion } from "../actions";


export const Reducers = (state = stateApp, action: ActionUnion): State => {
    return state;
};