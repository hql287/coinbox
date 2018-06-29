// Libs
import { Component } from '@angular/core';
import { TransactionServices } from '../../../services/transaction.service';
import { Observable } from 'rxjs';
// Intefaces
import { Transaction } from '../../../models/transaction';
// Store
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
// Actions
import { MarkTransactionClear } from '../../../store/actions/transactions';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {

  transactions$: Observable<Transaction[]>;

  constructor(
    private transactionServices: TransactionServices,
    private store: Store<AppState>
  ) {
    this.transactions$ = store.select(state => state.transactions.data);
  }

  markClear(transactionID: string) {
    this.store.dispatch(new MarkTransactionClear(transactionID));
  }
}
