// Libs
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Store
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';

// Interface
import { Notification } from '../models/notification';

// Actions
import {
  RemoveNotification
} from '../actions/notifications';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications$: Observable<Notification[]>;

  constructor(private store: Store<AppState>) {
    this.notifications$ = store.select('notifications');
  }

  ngOnInit() { }

  removeNotification(notiID: string) {
    this.store.dispatch(new RemoveNotification(notiID));
  }

}
