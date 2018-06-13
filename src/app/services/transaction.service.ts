// Modules
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionServices {
  // Holders
  // transactions;
  // categories;
  // payees;
  // categories;

  constructor() {
  }

  getAllTransactions() {
    return [
      {
        payeeID: 5,
        amount: 10,
        catID: 2,
        note: 'Coffee Mug',
        type: 'inflow',
      },
      {
        payeeID: 2,
        amount: 35,
        catID: 2,
        note: 'IKEA Blanket',
        type: 'inflow',
      },
      {
        payeeID: 2,
        amount: 35,
        catID: 2,
        note: 'IKEA Blanket',
        type: 'inflow',
      }
    ]
  }

  getAllCategories() {

  }

  getAllPayees() {

  }

  displayCategory() {

  }

  displayPayee() {

  }
}


