import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'transaction-controls',
  templateUrl: './transaction-controls.component.html',
  styleUrls: ['./transaction-controls.component.css']
})
export class TransactionControlsComponent implements OnInit {

  @Output()
  newTransactionAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTransaction() {
    this.newTransactionAdded.emit({
      payeeID: 5,
      catID: 9,
      amount: 23,
      note: 'Fantastic Rubber Chicken',
      type: 'outflow',
    });
  }

}
