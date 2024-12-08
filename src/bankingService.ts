import { Account } from "./account";
import { Transaction } from "./transaction";

export class BankingService {
  private readonly accounts: Map<string, Account> = new Map<string, Account>();

  createAccount(accountNumber: string, initialBalance: number) {
    this.accounts.set(
      accountNumber,
      new Account(accountNumber, initialBalance)
    );
  }

  getAccount(accountNumber: string) {
    return this.accounts.get(accountNumber);
  }

  processTransaction(transaction: Transaction) {
    transaction.execute();
  }
}
