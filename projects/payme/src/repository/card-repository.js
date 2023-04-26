"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepository = void 0;
var CardRepository = /** @class */ (function () {
    function CardRepository() {
        this.list = [];
        this.counter = 0;
    }
    CardRepository.prototype.create = function (card) {
        if (this.isExist(card.number)) {
            throw new Error("card already exists");
        }
        card.setId(++this.counter);
        this.list.push(card);
    };
    CardRepository.prototype.isExist = function (cardNumber) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.number === cardNumber)
                return true;
        }
        return false;
    };
    CardRepository.prototype.getById = function (cardID) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.getId() === cardID) {
                return card;
            }
        }
        throw new Error("card not found");
    };
    CardRepository.prototype.getList = function () {
        return this.list;
    };
    return CardRepository;
}());
exports.CardRepository = CardRepository;
