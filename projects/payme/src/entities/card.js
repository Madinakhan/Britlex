"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(number, expiry, type, balance, ownerId, bankName) {
        this.number = number;
        this.expiry = expiry;
        this.type = type;
        this.balance = balance;
        this.ownerId = ownerId;
        this.bankName = bankName;
    }
    Card.prototype.setId = function (cardID) {
        this.id = cardID;
    };
    Card.prototype.getId = function () {
        return this.id;
    };
    return Card;
}());
exports.Card = Card;
