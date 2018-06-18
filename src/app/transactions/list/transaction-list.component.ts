import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransactionServices } from '../../services/transaction.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @Input() transactionsList;
  @Output() markedClear = new EventEmitter<object>();

  constructor(private transactionServices: TransactionServices) { }

  ngOnInit() { }

  markClear(transactionID: string, clear: boolean) {
    this.markedClear.emit({ transactionID, clear });
  }

}
