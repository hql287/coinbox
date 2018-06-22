import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'transaction-controls',
  templateUrl: './transaction-controls.component.html',
  styleUrls: ['./transaction-controls.component.css'],
})
export class TransactionControlsComponent implements OnInit {
  @Input() isFormVisible: boolean;
  @Output() toggle = new EventEmitter<boolean>();
  @Output() generate = new EventEmitter<number>();
  @Output() clear = new EventEmitter<void>();


  constructor() {}

  ngOnInit() {}

  toggleForm() {
    this.toggle .emit(!this.isFormVisible);
    this.isFormVisible = !this.isFormVisible;
  }

  generateTransactions() {
    this.generate.emit(5);
  }

  clearTransactions() {
    this.clear.emit();
  }
}
