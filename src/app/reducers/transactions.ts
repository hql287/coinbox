import {Transaction} from '../models/transaction';
import * as TransactionActions from '../actions/transactions';
import {
  TRANSACTION_ADD,
  TRANSACTION_GENERATE,
  TRANSACTION_REMOVE,
  TRANSACTION_UPDATE,
} from '../constants';

const initialState = [];

export function TransactionsReducer(
  state: Transaction[] = [...initialState],
  action: TransactionActions.Actions
) {
  switch (action.type) {
    case TRANSACTION_ADD:
      console.log('Payload: ', action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}
