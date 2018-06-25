// Libs
import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

// Services
import {TransactionServices} from '../../services/transaction.service';

// Store
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';

// Actions
import {
  GenerateTransactions,
  RemoveAllTransactions,
} from '../../actions/transactions';

@Component({
  selector: 'transaction-controls',
  templateUrl: './transaction-controls.component.html',
  styleUrls: ['./transaction-controls.component.css'],
})
export class TransactionControlsComponent implements OnInit {
  @Input() isFormVisible: boolean;
  @Output() toggle = new EventEmitter<boolean>();

  constructor(
    private transactionServices: TransactionServices,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {}

  toggleForm() {
    this.toggle.emit(!this.isFormVisible);
    this.isFormVisible = !this.isFormVisible;
  }

  generateTransactions() {
    const newTransactions = new GenerateTransactions(
      this.transactionServices.genTransactions(3),
    );
    this.store.dispatch(newTransactions)
  }

  removeAllTransactions() {
    this.store.dispatch(new RemoveAllTransactions());
  }
}
