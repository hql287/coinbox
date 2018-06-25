import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Transaction} from '../models/transaction';

import * as TransactionTypes from '../constants';

export class GenerateTransactions implements Action {
  readonly type = TransactionTypes.TRANSACTION_GENERATE;
  constructor(public payload: Transaction[]) {}
}

export class AddTransaction implements Action {
  readonly type = TransactionTypes.TRANSACTION_ADD;
  constructor(public payload: Transaction) {}
}

export class RemoveAllTransactions implements Action {
  readonly type = TransactionTypes.TRANSACTION_REMOVE_ALL;
  constructor() {}
}

export class RemoveTransaction implements Action {
  readonly type = TransactionTypes.TRANSACTION_REMOVE;
  constructor(public payload: string) {}
}

export class ToggleTransactionForm implements Action {
  readonly type = TransactionTypes.TRANSACTION_FORM_TOGGLE;
  constructor() {}
}

export type Actions =
  | AddTransaction
  | RemoveTransaction
  | RemoveAllTransactions
  | GenerateTransactions
  | ToggleTransactionForm
