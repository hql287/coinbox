import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

// Get Fake Data
import {payeeData} from '../../../../assets/payees.js';
import {accountsData} from '../../../../assets/accounts';
import {categoryData} from '../../../../assets/categories';

@Component({
  selector: 'transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  // Fake Data
  payees: any;
  accounts: any;
  categories: any;
  // Form
  formData: FormGroup;
  // Form Controls
  description: FormControl;
  amount: FormControl;
  payeeID: FormControl;
  catID: FormControl;
  accountID: FormControl;
  income: FormControl;
  clear: FormControl;

  @Input() isFormVisible: boolean;
  @Output() submitted = new EventEmitter<object>();
  @Output() cancelled = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    // Populate data holders
    this.payees = payeeData;
    this.accounts = accountsData;
    this.categories = categoryData;
    // Setup form model
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.formData = new FormGroup({
      description: this.description,
      amount: this.amount,
      payeeID: this.payeeID,
      catID: this.catID,
      accountID: this.accountID,
      income: this.income,
      clear: this.clear,
    });
  }

  createFormControls() {
    this.description = new FormControl('Something', Validators.required);
    this.amount = new FormControl(20, [Validators.required, amountValidator]);
    this.payeeID = new FormControl(this.payees[0].id, Validators.required);
    this.catID = new FormControl(this.categories[0].id, Validators.required);
    this.accountID = new FormControl(this.accounts[0].id, Validators.required);
    this.income = new FormControl(false, Validators.required);
    this.clear = new FormControl(false, Validators.required);
  }

  closeForm() {
    this.cancelled.emit(true);
    this.formData.reset();
  }

  submitData() {
    if (this.formData.valid) {
      this.submitted.emit(this.formData.value);
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
  let amount = control.value;
  if (amount === 0 || amount < 0) {
    return {
      invalidAmount: true,
    };
  }
  // If the amount is valid
  return null;
}
