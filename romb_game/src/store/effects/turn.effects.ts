import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppActionTypes, ControlInsideBoard, } from "../actions";
import { map, switchMap } from 'rxjs';
import { Store } from "@ngrx/store";
import { AppStore } from 'src/app/types/state';
import { selectIdUser } from "../selectors";

@Injectable()
export class TurnEffects {
    turn$ = createEffect(
        () => this.actionUnion$.pipe(
            ofType(AppActionTypes.UpdateTurn),
            switchMap((action) => this.userId$.pipe(
                map((userId) =>
                    (userId === action['payload'])
                        ? new ControlInsideBoard('startButtons')
                        : new ControlInsideBoard('playerInfo')
                )
            ))
        )
    );

    constructor(private actionUnion$: Actions, private store: Store<AppStore>) { }
    userId$ = this.store.select(selectIdUser);
}