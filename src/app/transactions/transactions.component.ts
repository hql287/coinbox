import { Component, OnInit } from '@angular/core';

// Fake Data
import { transactionData } from '../../assets/transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  formData;
  formVisible: boolean;
  transactions;

  constructor() { }

  ngOnInit() {
    this.formVisible = true;
    this.transactions = transactionData;
  }

  onToggleForm(isVisible: boolean) {
    this.formVisible = isVisible;
  }

  onFormSubmitted(formData: any) {
    this.transactions.push(formData);
  }

  onCancelled(cancelled: boolean) {
    this.formVisible = false;
  }
}
