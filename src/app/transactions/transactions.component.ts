import { Component, OnInit } from '@angular/core';
import { TransactionServices } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  formVisible: boolean;
  transactions: object[];

  constructor(private transactionServices: TransactionServices) { }

  ngOnInit() {
    this.formVisible = true;
    this.transactions = this.transactionServices.getAllTransactions();
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
