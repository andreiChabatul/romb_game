import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppActionTypes, ControlInsideBoard, } from "../actions";
import { map, switchMap } from 'rxjs';
import { Store } from "@ngrx/store";
import { AppStore } from 'src/app/types/state';
import { turnPayload } from "src/app/types/webSocket";
import { selectUser } from "../selectors";

@Injectable()
export class TurnEffects {
    turn$ = createEffect(
        () => this.actionUnion$.pipe(
            ofType(AppActionTypes.UpdateTurn),
            switchMap((action) => this.user$.pipe(
                map((user) => {
                    const payload = action['payload'] as turnPayload;
                    return (user.infoUser?.id === payload.turnId)
                        ? new ControlInsideBoard('startButtons')
                        : new ControlInsideBoard('playerInfo');
                })
            ))
        )
    );

    constructor(private actionUnion$: Actions, private store: Store<AppStore>) { }
    user$ = this.store.select(selectUser);
}