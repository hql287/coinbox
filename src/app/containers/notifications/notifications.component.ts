// Libs
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Store
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.state';

// Interface
import { Notification } from '../../models/notification';

// Actions
import {
  RemoveNotification
} from '../../store/actions/notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications$: Observable<Notification[]>;

  constructor(private store: Store<AppState>) {
    this.notifications$ = store.select('notifications');
  }

  ngOnInit() { }

  removeNotification(notiID: string) {
    this.store.dispatch(new RemoveNotification(notiID));
  }

}
