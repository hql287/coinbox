// NgRx/Store
import {Action} from '@ngrx/store';

// Interface
import {Notification} from '../../models/notification';

import {
  NOTI_ADD,
  NOTI_REMOVE,
} from '../constants';

export class AddNotification implements Action {
  readonly type = NOTI_ADD;
  constructor(public payload: Notification) {}
}

export class RemoveNotification implements Action {
  readonly type = NOTI_REMOVE;
  constructor(public payload: string) {}
}

export type Actions =
  | AddNotification
  | RemoveNotification;
