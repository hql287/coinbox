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

  constructor() {
    this.transactions = transactionData;
  }

  ngOnInit() { }

  onNewTransactionAdded(data) {
    this.transactions.push(data);
  }
}
