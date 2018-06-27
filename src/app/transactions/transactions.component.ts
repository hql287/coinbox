import { Component } from '@angular/core';

// Interface
import {Transaction} from '../models/transaction';
import {Store, select} from '@ngrx/store';

// Observable
import {Observable, pipe} from 'rxjs';
import {reduce, map} from 'rxjs/operators';

// App State
import {AppState} from '../app.state';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {
  netWorth: number;
  transactions$: Observable<Transaction>;

  constructor(store: Store<AppState>) {
    this.netWorth = 0;
    this.transactions$ = store.select(state => state.transactions.data);
    this.transactions$
      .pipe(
        getTransactions,
        getSum,
      )
      .subscribe(val => {
        this.netWorth = val;
      });
  }
}

// Helpers
const getTransactions = map(items => {
  return items.map(transaction => {
    if (transaction.inflow) {
      return parseFloat(transaction.inflow);
    }
    if (transaction.outflow) {
      return 0 - parseFloat(transaction.outflow);
    }
    return 0;
  });
});

const getSum = map(items => {
  return items.reduce((currentValue, nextItem) => currentValue + nextItem, 0);
});

