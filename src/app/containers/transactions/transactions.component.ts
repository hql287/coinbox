import {Component, OnInit} from '@angular/core';

// Interface
import {Transaction} from '../../models/transaction';
import {Store, select} from '@ngrx/store';

// Observable
import {Observable, pipe} from 'rxjs';
import {reduce, map} from 'rxjs/operators';

// App State
import {AppState} from '../../store/app.state';

// Actions
import {GenerateTransactions} from '../../store/actions/transactions';

// Services
import {TransactionServices} from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  netWorth: number;
  transactions$: Observable<Transaction>;

  constructor(
    private transactionServices: TransactionServices,
    private store: Store<AppState>,
  ) {
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

  ngOnInit() {
    const newTransactions = new GenerateTransactions(
      this.transactionServices.genTransactions(3),
    );
    this.store.dispatch(newTransactions);
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
