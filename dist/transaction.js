"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(transactionId, account, amount) {
        this.transactionId = transactionId;
        this.account = account;
        this.amount = amount;
    }
}
exports.Transaction = Transaction;
