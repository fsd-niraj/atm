import { Account } from "./account";

export abstract class Transaction {
  protected readonly transactionId: string;
  protected readonly account: Account;
  protected readonly amount: number;

  constructor(transactionId: string, account: Account, amount: number) {
    this.transactionId = transactionId;
    this.account = account;
    this.amount = amount;
  }

  abstract execute(): void;
}
