"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankingService = void 0;
const account_1 = require("./account");
class BankingService {
    constructor() {
        this.accounts = new Map();
    }
    createAccount(accountNumber, initialBalance) {
        this.accounts.set(accountNumber, new account_1.Account(accountNumber, initialBalance));
    }
    getAccount(accountNumber) {
        return this.accounts.get(accountNumber);
    }
    processTransaction(transaction) {
        transaction.execute();
    }
}
exports.BankingService = BankingService;
