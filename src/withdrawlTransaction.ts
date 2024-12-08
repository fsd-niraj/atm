import { Account } from "./account";
import { Transaction } from "./transaction";

export class WithdrawalTransaction extends Transaction {
  constructor(transactionId: string, account: Account, amount: number) {
    super(transactionId, account, amount);
  }

  execute(): void {
    this.account.debit(this.amount);
  }
}
