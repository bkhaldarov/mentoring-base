import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersApiService } from '../../users-api.service';
import { UsersActions } from './user.actions';


export const usersLength$ = createEffect(() => {
  const actions$ = inject(Actions);
  const usersApiService = inject(UsersApiService);

  return actions$.pipe(
    ofType(UsersActions.initCounterByUsersLength),
    switchMap(() => usersApiService.getUsers()),
        map(users => UsersActions.initCounterByUsersLengthSuccess({ users })),
        catchError((error: HttpErrorResponse) => {
          console.log('err:', error);
          return of(
            UsersActions.initCounterByUsersLengthFailure({
              error: error.error?.message ?? 'Произошла непредвиденная ошибка',
            })
          );
        })
      )
},
{ functional: true });

