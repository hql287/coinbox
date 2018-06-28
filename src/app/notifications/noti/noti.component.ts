import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {Notification} from '../../models/notification';

@Component({
  selector: 'notification',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.scss'],
})
export class NotiComponent implements OnInit, OnDestroy {
  timeout: any;
  @Input() noti: Notification;
  @Output() removed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    // Use arrow fn to make "this" works.
    this.timeout = setTimeout(() => this.removeNotification(), 4000);
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  removeNotification() {
    this.removed.emit(this.noti.id);
  }
}
