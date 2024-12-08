import { Account } from "./account";
import { Transaction } from "./transaction";

export class DepositTransaction extends Transaction {
  constructor(transactionId: string, account: Account, amount: number) {
    super(transactionId, account, amount);
  }

  execute(): void {
    this.account.credit(this.amount);
  }
}
