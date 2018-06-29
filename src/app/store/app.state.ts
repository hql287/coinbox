// import { Transaction } from './models/transaction';
import { Notification } from '../models/notification';

export interface AppState {
  readonly transactions;
  readonly notifications: Notification[];
}
