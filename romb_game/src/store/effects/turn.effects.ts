import { Injectable } from "@angular/core";
import { Actions, ofType } from '@ngrx/effects';
import { ActionUnion, AppActionTypes } from "../actions";
import { Subscription, map, mergeMap, } from 'rxjs';

@Injectable()
export class TurnEffects {
    const turn$ = createEffect(() => )
    loadArticles$ = this.actionUnion$.pipe(
        ofType(appActionTypes.),
        mergeMap(() =>
            this.articlesService.getArticles().pipe(
                map(
                    (articles) =>
                        new ArticlesLoadedSuccess({
                            articles: articles,
                        })
                ),
                catchError(() =>
                    of(new ArticlesLoadedError())
                )
            )
        )
    );

    constructor(
        private actionUnion$: ActionUnion,
        private appActionTypes: AppActionTypes
    ) {}
}