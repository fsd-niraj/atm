"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtmDemo = void 0;
const atm_1 = require("./atm");
const bankingService_1 = require("./bankingService");
const card_1 = require("./card");
const cashDispenser_1 = require("./cashDispenser");
class AtmDemo {
    show() {
        const bankingService = new bankingService_1.BankingService();
        const atmMachine = new cashDispenser_1.CashDispenser(10000);
        const atm = new atm_1.Atm(bankingService, atmMachine);
        bankingService.createAccount("1234567890", 3000);
        bankingService.createAccount("0987654321", 2200);
        const card = new card_1.Card("1234567890", "1234");
        atm.authenticateUser(card);
        let balance = atm.checkBalance("1234567890");
        console.log(`Current balance is ${balance}`);
        atm.withdrawCash("1234567890", 350);
        atm.depositCash("0987654321", 199);
        balance = atm.checkBalance("1234567890");
        console.log(`Current balance after withdrawal is ${balance}`);
    }
}
exports.AtmDemo = AtmDemo;
