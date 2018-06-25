// Libs
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransactionServices } from '../../services/transaction.service';
import { Observable } from 'rxjs';
// Intefaces
import { Transaction } from '../../models/transaction';
// Store
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions$: Observable<Transaction[]>;

  @Output() markedClear = new EventEmitter<object>();

  constructor(
    private transactionServices: TransactionServices,
    private store: Store<AppState>
  ) {
    this.transactions$ = store.select('transactions');
  }

  ngOnInit() { }

  markClear(transactionID: string, clear: boolean) {
    this.markedClear.emit({ transactionID, clear });
  }
}
