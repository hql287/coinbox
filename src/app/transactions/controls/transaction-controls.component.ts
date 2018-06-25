// Libs
import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

// Services
import {TransactionServices} from '../../services/transaction.service';

// Store
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';

// Actions
import {
  ToggleTransactionForm,
  GenerateTransactions,
  RemoveAllTransactions,
} from '../../actions/transactions';

@Component({
  selector: 'transaction-controls',
  templateUrl: './transaction-controls.component.html',
  styleUrls: ['./transaction-controls.component.css'],
})
export class TransactionControlsComponent implements OnInit {
  constructor(
    private transactionServices: TransactionServices,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {}

  toggleForm() {
    this.store.dispatch(new ToggleTransactionForm());
  }

  generateTransactions() {
    const newTransactions = new GenerateTransactions(
      this.transactionServices.genTransactions(3),
    );
    this.store.dispatch(newTransactions);
  }

  removeAllTransactions() {
    this.store.dispatch(new RemoveAllTransactions());
  }
}
