"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    getAccuntNumber() {
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    debit(amount) {
        this.balance -= amount;
    }
    credit(amount) {
        this.balance += amount;
    }
}
exports.Account = Account;
