import { Atm } from "./atm";
import { BankingService } from "./bankingService";
import { Card } from "./card";
import { CashDispenser } from "./cashDispenser";

export class AtmDemo {
  show() {
    const bankingService: BankingService = new BankingService();
    const atmMachine: CashDispenser = new CashDispenser(10000);
    const atm: Atm = new Atm(bankingService, atmMachine);

    bankingService.createAccount("1234567890", 3000);
    bankingService.createAccount("0987654321", 2200);

    const card: Card = new Card("1234567890", "1234");
    atm.authenticateUser(card);

    let balance = atm.checkBalance("1234567890");
    console.log(`Current balance is ${balance}`);

    atm.withdrawCash("1234567890", 350);
    atm.depositCash("0987654321", 199);

    balance = atm.checkBalance("1234567890");
    console.log(`Current balance after withdrawal is ${balance}`);
  }
}
