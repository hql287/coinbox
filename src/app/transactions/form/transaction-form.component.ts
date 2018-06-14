import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// Get Fake Data
import { payeeData } from '../../../assets/payees';
import { categoryData } from '../../../assets/categories';

@Component({
  selector: 'transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  @Output()
  submitted = new EventEmitter();

  payees: any;
  categories: any;
  formData: FormGroup;

  constructor() { }

  ngOnInit() {
    // Populate categories & payees data
    this.categories = categoryData;
    this.payees = payeeData;
    // Setup form model
    this.formData = new FormGroup({
      description: new FormControl();
      amount:      new FormControl();
      payeeID:     new FormControl();
      catID:       new FormControl();
      type:        new FormControl();
    })
  }

  // TODO
  validateForm() {
    return true;
  }

  submitData() {
    if (this.validateForm()) {
      this.submitted.emit(this.formData.value);
      this.formData.reset();
    }
  }
}
