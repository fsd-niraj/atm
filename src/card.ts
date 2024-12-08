export class Card {
  private readonly cardNumber: string;
  private readonly pin: string;

  constructor(cardNumber: string, pin: string) {
    this.cardNumber = cardNumber;
    this.pin = pin;
  }

  getCardNumber() {
    return this.cardNumber;
  }
  getPin() {
    return this.pin;
  }
}
