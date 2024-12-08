export class Account {
  private readonly accountNumber: string;
  private balance: number;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  getAccuntNumber() {
    return this.accountNumber;
  }

  getBalance() {
    return this.balance;
  }

  debit(amount: number) {
    this.balance -= amount;
  }

  credit(amount: number) {
    this.balance += amount;
  }
}
