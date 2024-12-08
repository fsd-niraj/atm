"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atm = void 0;
const depositTransaction_1 = require("./depositTransaction");
const withdrawlTransaction_1 = require("./withdrawlTransaction");
class Atm {
    constructor(bankingService, cashDispenser) {
        this.bankingService = bankingService;
        this.cashDispenser = cashDispenser;
    }
    authenticateUser(card) {
        // authentication logic...
    }
    checkBalance(accountNumber) {
        const account = this.bankingService.getAccount(accountNumber);
        if (!account)
            throw new Error("Account not found");
        return account.getBalance();
    }
    withdrawCash(accountNumber, amount) {
        const account = this.bankingService.getAccount(accountNumber);
        if (!account)
            throw new Error("Account not found");
        const transaction = new withdrawlTransaction_1.WithdrawalTransaction(this.generateTransactionId(), account, amount);
        this.bankingService.processTransaction(transaction);
        this.cashDispenser.dispenseCash(amount);
    }
    depositCash(accountNumber, amount) {
        const account = this.bankingService.getAccount(accountNumber);
        if (!account)
            throw new Error("Account not found");
        const transaction = new depositTransaction_1.DepositTransaction(this.generateTransactionId(), account, amount);
        this.bankingService.processTransaction(transaction);
        this.cashDispenser.acceptCash(amount);
    }
    generateTransactionId() {
        Atm.transactionCounter++;
        const timeStamp = new Date()
            .toISOString()
            .replace(/[-T:.Z]/g, "")
            .slice(0, 14);
        const transNumber = Atm.transactionCounter.toString().padStart(10, "0");
        return `TRNX${timeStamp}${transNumber}`;
    }
}
exports.Atm = Atm;
