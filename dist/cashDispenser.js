"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashDispenser = void 0;
class CashDispenser {
    constructor(initialCash) {
        this.cashAvailable = initialCash;
    }
    dispenseCash(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            if (amount > this.cashAvailable) {
                throw new Error("Insufficient cash available in the ATM.");
            }
            this.cashAvailable -= amount;
            return console.log(`${amount} debited`);
        });
    }
    acceptCash(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cashAvailable += amount;
            return console.log(`Deposited ${amount} successfully`);
        });
    }
}
exports.CashDispenser = CashDispenser;
