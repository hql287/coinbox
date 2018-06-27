import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {TransactionServices} from '../../services/transaction.service';
import { v4 as uuid } from 'uuid';
import { Observable } from 'rxjs';

// Interface
import { Transaction } from '../../models/transaction';

// Store
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

// Actions
import {
  ToggleTransactionForm,
  AddTransaction,
  RemoveTransaction
} from '../../actions/transactions';

@Component({
  selector: 'transaction-form-inline',
  templateUrl: './transaction-form-inline.component.html',
  styleUrls: ['./transaction-form-inline.component.css'],
})
export class TransactionFormInlineComponent implements OnInit {
  // Fake Data
  payees: any[];
  accounts: any[];
  categories: any[];
  // Form
  formData: FormGroup;
  // Form Controls
  description: FormControl;
  inflow: FormControl;
  outflow: FormControl;
  payeeID: FormControl;
  catID: FormControl;
  accountID: FormControl;
  clear: FormControl;
  // Form Visibility
  isFormVisible$: Observable<boolean>;

  constructor(
    private transactionServices: TransactionServices,
    private store: Store<AppState>,
  ) {
    this.isFormVisible$ = store.select(state => state.transactions.formVisible);
  }

  clearInflow() {
    if (this.outflow.value !== '' && this.inflow.value !== '') {
      this.inflow.reset('');
    }
  }

  clearOutflow() {
    if (this.inflow.value !== '' && this.outflow.value !== '') {
      this.outflow.reset('');
    }
  }

  ngOnInit() {
    // Populate data holders
    this.payees = this.transactionServices.getAllPayees();
    this.accounts = this.transactionServices.getAllAccounts();
    this.categories = this.transactionServices.getAllCategories();
    // Setup form model
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.formData = new FormGroup({
      description: this.description,
      inflow: this.inflow,
      outflow: this.outflow,
      payeeID: this.payeeID,
      catID: this.catID,
      accountID: this.accountID,
      clear: this.clear,
    });
  }

  createFormControls() {
    this.description = new FormControl('', Validators.required);
    this.inflow = new FormControl('', amountValidator);
    this.outflow = new FormControl('', amountValidator);
    this.payeeID = new FormControl(this.payees[0].id, Validators.required);
    this.catID = new FormControl(this.categories[0].id, Validators.required);
    this.accountID = new FormControl(this.accounts[0].id, Validators.required);
    this.clear = new FormControl(false);
  }

  closeForm() {
    this.formData.reset();
    this.store.dispatch(new ToggleTransactionForm());
  }

  submitData() {
    if (this.formData.valid) {
      // Add TransactionID
      const TransactionData = Object.assign({}, this.formData.value, {
        id: uuid(),
      });
      // Create Payload
        const newTransaction = new AddTransaction(TransactionData);
      // Dispatch
      this.store.dispatch(newTransaction);
      // Reset Form Data
      this.formData.reset();
    }
  }

  submitAndClose() {
    this.submitData();
    this.closeForm();
  }
}

// Custom Validators
function amountValidator(control: FormControl) {
  if (control.value === 0 || control.value < 0) {
    return {
      invalidAmount: true,
    };
  }
  return null;
}
