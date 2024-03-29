import {Transaction} from '../../models/transaction';
import * as TransactionActions from '../actions/transactions';
import * as TransactionTypes from '../constants';

const initialState = {
  formVisible: true,
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
    case TransactionTypes.TRANSACTION_FORM_TOGGLE:
      return Object.assign({}, state, {
        formVisible: !state.formVisible,
      });

    // Good place to try out @ngrx/effects
    case TransactionTypes.TRANSACTION_MARK_CLEAR:
      return Object.assign({}, state, {
        data: state.data.map(item => {
                if (item.id === action.payload) {
                  return Object.assign({}, item, {
                    clear: !item.clear
                  });
                }
                return item;
              })
      });
    default:
      return state;
  }
}
