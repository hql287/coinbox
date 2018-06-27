// Modules
import {Injectable, OnInit} from '@angular/core';
import * as faker from 'faker';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TransactionServices {
  payees: any[];
  accounts: any[];
  categories: any[];
  transactions: any[];

  constructor() {
    this.seedData();
  }

  seedData() {
    this.payees = this.genPayees(10);
    this.accounts = this.genAccounts(3);
    this.categories = this.genCategories(10);
    this.transactions = this.genTransactions(5);
  }

  // GENERATE DATA
  genPayees(qty: number) {
    const payees = [];
    for (let i = 0; i < qty; i++) {
      const payee = {
        id: i + 1,
        title: faker.name.findName(),
      };
      payees.push(payee);
    }
    return payees;
  }

  genAccounts(qty: number) {
    const accounts = [];
    for (let i = 0; i < qty; i++) {
      const acc = {
        id: i + 1,
        title: faker.finance.accountName(),
      };
      accounts.push(acc);
    }
    return accounts;
  }

  genCategories(qty: number) {
    const categories = [];
    for (let i = 0; i < qty; i++) {
      const cat = {
        id: i + 1,
        title: faker.commerce.department(),
      };
      categories.push(cat);
    }
    return categories;
  }

  genTransactions(qty: number) {
    const incomes = [];
    const expenses = [];
    const incomes_qty = Math.floor(qty/2);
    const expenses_qty = qty - incomes_qty;
    // Create incomes
    for (let i = 0; i < incomes_qty; i++) {
      const item = {
        inflow: faker.commerce.price(),
        outflow: 0,
      };
      incomes.push(item);
    }
    // Create expenses
    for (let i = 0; i < expenses_qty; i++) {
      const item = {
        outflow: faker.commerce.price(),
        inflow: 0,
      };
      expenses.push(item);
    }
    // Merge & shuffle items
    const transactions = this.shuffle([...expenses, ...incomes]);
    // Add other properties
    return transactions.map(item => {
      return Object.assign({}, item, {
        id: uuid(),
        catID: this.getRandomInt(1, this.categories.length),
        payeeID: this.getRandomInt(1, this.payees.length),
        accountID: this.getRandomInt(1, this.accounts.length),
        description: faker.commerce.productName(),
        clear: faker.random.boolean(),
      });
    });
  }

  // GET DATA
  getAllTransactions() {
    return this.transactions;
  }

  getAllCategories() {
    return this.categories;
  }

  getAllPayees() {
    return this.payees;
  }

  getAllAccounts() {
    return this.accounts;
  }

  // DISPLAY DATA
  displayCategory(catID: string) {
    const fiteredCategories = this.categories.filter(cat => cat.id == catID);
    return fiteredCategories[0].title;
  }

  displayPayee(payeeID: string) {
    const filteredPayees = this.payees.filter(payee => payee.id == payeeID);
    return filteredPayees[0].title;
  }

  displayAccount(accID: string) {
    const filteredAccounts = this.accounts.filter(acc => acc.id == accID);
    return filteredAccounts[0].title;
  }

  // CHANGING DATE
  updateClearState(currentTransactions, {transactionID, clear}) {
    const filteredTransaction = currentTransactions.filter(
      transaction => transaction.id == transactionID,
    )[0];
    const newTransaction = Object.assign({}, filteredTransaction, {
      clear: !clear,
    });
    return currentTransactions.map(transaction => {
      if (transaction.id == transactionID) {
        return newTransaction;
      } else {
        return transaction;
      }
    });
  }

  // Helper
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Credit https://bost.ocks.org/mike/shuffle/
  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
