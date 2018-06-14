import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'transaction-controls',
  templateUrl: './transaction-controls.component.html',
  styleUrls: ['./transaction-controls.component.css'],
})
export class TransactionControlsComponent implements OnInit {
  @Input() isFormVisible: boolean;
  @Output() toggled = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggleForm() {
    this.toggled.emit(!this.isFormVisible);
    this.isFormVisible = !this.isFormVisible;
  }
}
