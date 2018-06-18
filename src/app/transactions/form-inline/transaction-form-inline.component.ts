import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

// Get Fake Data
import {payeeData} from '../../../assets/payees';
import {accountsData} from '../../../assets/accounts';
import {categoryData} from '../../../assets/categories';

@Component({
  selector: 'transaction-form-inline',
  templateUrl: './transaction-form-inline.component.html',
  styleUrls: ['./transaction-form-inline.component.css'],
})
export class TransactionFormInlineComponent implements OnInit {
  // Fake Data
  payees: any;
  accounts: any;
  categories: any;
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
  // Input & Output
  @Input() isFormVisible: boolean;
  @Output() submitted = new EventEmitter<object>();
  @Output() cancelled = new EventEmitter<boolean>();

  constructor() {}

  clearInflow() {
    if ( this.outflow.value !== '' && this.inflow.value !== '' ) {
      this.inflow.reset('');
    }
  }

  clearOutflow() {
    if ( this.inflow.value !== '' && this.outflow.value !== '' ) {
      this.outflow.reset('');
    }
  }

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
    this.inflow      = new FormControl('', amountValidator);
    this.outflow     = new FormControl('', amountValidator);
    this.payeeID     = new FormControl(this.payees[0].id, Validators.required);
    this.catID       = new FormControl(this.categories[0].id, Validators.required);
    this.accountID   = new FormControl(this.accounts[0].id, Validators.required);
    this.clear       = new FormControl(false);
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
  if (control.value === 0 || control.value < 0) {
    return {
      invalidAmount: true,
    };
  }
  return null;
}

