// Libs
import {Injectable} from '@angular/core';
import { v4 as uuid } from 'uuid';

// Effects
import {Actions, Effect, ofType} from '@ngrx/effects';

// Actions
import {Store, Action} from '@ngrx/store';
import { AppState } from '../app.state';

// Operators
import {Observable, of} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';

// Store
import {TRANSACTION_ADD} from '../constants';
import * as NotificationActions from '../actions/notifications';

@Injectable()
export class TransactionEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
  ) {}

  // Listen to the AddTransaction action
  @Effect({ dispatch: false })
  newTransactions$: Observable<Action> = this.actions$
    .pipe(
      ofType('TRANSACTION_ADD'),
      tap(action => {
        const newNotification = new NotificationActions.AddNotification({
          id: uuid(),
          type: 'success',
          title: 'New Transaction',
          description: 'A New transaction has been added successfully',
        });
        this.store.dispatch(newNotification);
      }),
    );

  @Effect({ dispatch: false })
  updatedTransactions$: Observable<Action> = this.actions$
    .pipe(
      ofType('TRANSACTION_MARK_CLEAR'),
      tap(action => {
        const newNotification = new NotificationActions.AddNotification({
          id: uuid(),
          type: 'success',
          title: 'Transaction Marked Clear',
          description: 'A New transaction has been marked as clear successfully',
        });
        this.store.dispatch(newNotification);
      }),
    );
}
