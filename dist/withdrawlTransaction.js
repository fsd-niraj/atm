"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawalTransaction = void 0;
const transaction_1 = require("./transaction");
class WithdrawalTransaction extends transaction_1.Transaction {
    constructor(transactionId, account, amount) {
        super(transactionId, account, amount);
    }
    execute() {
        this.account.debit(this.amount);
    }
}
exports.WithdrawalTransaction = WithdrawalTransaction;
