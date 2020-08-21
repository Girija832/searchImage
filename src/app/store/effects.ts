import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { SearchService } from '../search.service';

@Injectable()
export class SearchImageEffects {
    constructor(
        private actions$: Actions,
        private searchService: SearchService
    ) { }

    @Effect()
    loadImages$ = this.actions$.pipe(
        ofType(ActionTypes.LoadItems),
        mergeMap(() =>
            this.searchService.receiveData().pipe(
                map(images => {
                    return { type: ActionTypes.LoadSuccess, payload: images };
                }),
                catchError(() => EMPTY)
            )
        )
    );
}