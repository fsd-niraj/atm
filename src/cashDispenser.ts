export class CashDispenser {
  private cashAvailable: number;

  constructor(initialCash: number) {
    this.cashAvailable = initialCash;
  }

  async dispenseCash(amount: number) {
    if (amount > this.cashAvailable) {
      throw new Error("Insufficient cash available in the ATM.");
    }
    this.cashAvailable -= amount;
    return console.log(`${amount} debited`);
  }

  async acceptCash(amount: number) {
    this.cashAvailable += amount;
    return console.log(`Deposited ${amount} successfully`);
  }
}
