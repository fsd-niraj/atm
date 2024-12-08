import { Account } from "./account";
import { BankingService } from "./bankingService";
import { CashDispenser } from "./cashDispenser";
import { DepositTransaction } from "./depositTransaction";
import { Transaction } from "./transaction";
import { WithdrawalTransaction } from "./withdrawlTransaction";

export class Atm {
  private readonly bankingService: BankingService;
  private readonly cashDispenser: CashDispenser;
  private static transactionCounter: number;

  constructor(bankingService: BankingService, cashDispenser: any) {
    this.bankingService = bankingService;
    this.cashDispenser = cashDispenser;
  }

  authenticateUser(card: any) {
    // authentication logic...
  }

  checkBalance(accountNumber: string) {
    const account = this.bankingService.getAccount(accountNumber);
    if (!account) throw new Error("Account not found");
    return account.getBalance();
  }

  withdrawCash(accountNumber: string, amount: number) {
    const account = this.bankingService.getAccount(accountNumber);
    if (!account) throw new Error("Account not found");
    const transaction: Transaction = new WithdrawalTransaction(
      this.generateTransactionId(),
      account,
      amount
    );
    this.bankingService.processTransaction(transaction);
    this.cashDispenser.dispenseCash(amount);
  }

  depositCash(accountNumber: string, amount: number) {
    const account = this.bankingService.getAccount(accountNumber);
    if (!account) throw new Error("Account not found");
    const transaction: Transaction = new DepositTransaction(
      this.generateTransactionId(),
      account,
      amount
    );
    this.bankingService.processTransaction(transaction);
    this.cashDispenser.acceptCash(amount);
  }

  private generateTransactionId(): string {
    Atm.transactionCounter++;
    const timeStamp = new Date()
      .toISOString()
      .replace(/[-T:.Z]/g, "")
      .slice(0, 14);
    const transNumber = Atm.transactionCounter.toString().padStart(10, "0");
    return `TRNX${timeStamp}${transNumber}`;
  }
}
