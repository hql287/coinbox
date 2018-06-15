import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

// Get Fake Data
import {payeeData} from '../../../assets/payees';
import {categoryData} from '../../../assets/categories';

@Component({
  selector: 'transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  // Data
  payees: any;
  categories: any;
  // Form
  formData: FormGroup;
  // Form Controls
  description: FormControl;
  amount:      FormControl;
  payeeID:     FormControl;
  catID:       FormControl;
  income:      FormControl;

  @Input() isFormVisible: boolean;
  @Output() submitted = new EventEmitter<object>();
  @Output() cancelled = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    // Populate categories & payees data
    this.categories = categoryData;
    this.payees = payeeData;
    // Setup form model
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.formData = new FormGroup({
      description: this.description,
      amount:      this.amount,
      payeeID:     this.payeeID,
      catID:       this.catID,
      income:      this.income,
    });
  }

  createFormControls() {
    this.description = new FormControl('', Validators.required);
    this.amount      = new FormControl(null, [Validators.required, amountValidator]);
    this.payeeID     = new FormControl(null, Validators.required);
    this.catID       = new FormControl(null, Validators.required);
    this.income      = new FormControl(false, Validators.required);
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
