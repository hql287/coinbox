// Modules
import {Injectable} from '@angular/core';

// Data
import {transactionData} from '../../assets/transactions';
import {accountsData} from '../../assets/accounts';
import {categoryData} from '../../assets/categories';
import {payeeData} from '../../assets/payees';

@Injectable()
export class TransactionServices {
  constructor() {}

  getAllTransactions() {
    return transactionData;
  }

  getAllCategories() {
    return categoryData;
  }

  getAllPayees() {
    return payeeData;
  }

  displayCategory(catID: string) {
    const fiteredCategories = categoryData.filter(cat => cat.id == catID);
    return fiteredCategories[0].title;
  }

  displayPayee(payeeID: string) {
    const filteredPayees = payeeData.filter(payee => payee.id == payeeID);
    return filteredPayees[0].title;
  }

  displayAccount(accID: string) {
    const filteredAccounts = accountsData.filter(acc => acc.id == accID);
    return filteredAccounts[0].title;
  }

  updateClearState(currentTransactions, { transactionID, clear }) {
    const filteredTransaction = currentTransactions.filter(transaction => transaction.id == transactionID)[0];
    const newTransaction = Object.assign({}, filteredTransaction, { clear: !clear });
    return currentTransactions.map(transaction => {
      if (transaction.id == transactionID) {
        return newTransaction;
      } else {
        return transaction;
      }
    })

  }
}
