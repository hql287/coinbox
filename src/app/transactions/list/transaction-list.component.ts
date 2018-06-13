import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @Input() transactionsList;

  constructor() { }

  ngOnInit() {
  }

}
