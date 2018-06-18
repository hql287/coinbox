import { Component, OnInit, Input } from '@angular/core';
import { TransactionServices } from '../../services/transaction.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @Input() transactionsList;

  constructor(private transactionServices: TransactionServices) { }

  ngOnInit() {
  }

}
