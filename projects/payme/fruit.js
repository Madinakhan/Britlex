"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = void 0;
var Fruit = /** @class */ (function () {
    function Fruit(name, price, weight, brand) {
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.brand = brand;
    }
    Fruit.prototype.setId = function (id) {
        this.id = id;
    };
    Fruit.prototype.getId = function () {
        return this.id;
    };
    return Fruit;
}());
exports.Fruit = Fruit;
