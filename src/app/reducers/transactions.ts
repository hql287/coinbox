import {Transaction} from '../models/transaction';
import * as TransactionActions from '../actions/transactions';
import * as TransactionTypes from '../constants';

const initialState = [];

export function TransactionsReducer(
  state: Transaction[] = [...initialState],
  action: TransactionActions.Actions
) {
  switch (action.type) {
    case TransactionTypes.TRANSACTION_GENERATE:
      console.log('action.payload: ', action.payload);
      return [...state, ...action.payload];
    case TransactionTypes.TRANSACTION_ADD:
      return [...state, action.payload];
    case TransactionTypes.TRANSACTION_REMOVE_ALL:
      return [];
    default:
      return state;
  }
}
