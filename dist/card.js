"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(cardNumber, pin) {
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
exports.Card = Card;
