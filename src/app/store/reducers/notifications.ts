import {Notification} from '../../models/notification';
import * as NotificationActions from '../actions/notifications';
import * as ActionTypes from '../constants';

const initialState = [];

export function NotificationsReducer(
  state: Notification[] = initialState,
  action: NotificationActions.Actions,
) {
  switch (action.type) {
    case ActionTypes.NOTI_ADD:
      return [...state, action.payload];
    case ActionTypes.NOTI_REMOVE:
      return state.filter(noti => noti.id !== action.payload);
    default:
      return state;
  }
}
