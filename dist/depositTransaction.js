"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositTransaction = void 0;
const transaction_1 = require("./transaction");
class DepositTransaction extends transaction_1.Transaction {
    constructor(transactionId, account, amount) {
        super(transactionId, account, amount);
    }
    execute() {
        this.account.credit(this.amount);
    }
}
exports.DepositTransaction = DepositTransaction;
