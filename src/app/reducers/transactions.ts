import {Transaction} from '../models/transaction';
import * as TransactionActions from '../actions/transactions';
import * as TransactionTypes from '../constants';

const initialState = {
  formVisible: false,
  data: [],
};

export function TransactionsReducer(
  state: any = initialState,
  action: TransactionActions.Actions,
) {
  switch (action.type) {
    case TransactionTypes.TRANSACTION_GENERATE:
      return Object.assign({}, state, {
        data: [...state.data, ...action.payload],
      });
    case TransactionTypes.TRANSACTION_ADD:
      return Object.assign({}, state, {
        data: [...state.data, action.payload],
      });
    case TransactionTypes.TRANSACTION_REMOVE_ALL:
      return Object.assign({}, state, {
        data: [],
      });
    default:
      return state;
  }
}
