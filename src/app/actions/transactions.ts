import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Transaction} from '../models/transaction';

import {
  TRANSACTION_ADD,
  TRANSACTION_GENERATE,
  TRANSACTION_REMOVE,
  TRANSACTION_UPDATE,
}
from '../constants';

export class AddTransaction implements Action {
  readonly type = TRANSACTION_ADD;
  constructor(public payload: Transaction) { }
}

export class RemoveTransaction implements Action {
  readonly type = TRANSACTION_REMOVE;
  constructor(public payload: string) { }
}

export type Actions = AddTransaction | RemoveTransaction ;
