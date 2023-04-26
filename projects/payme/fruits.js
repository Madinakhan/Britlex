"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruits = void 0;
var Fruits = /** @class */ (function () {
    function Fruits() {
        this.list = [];
        this.counter = 0;
    }
    Fruits.prototype.add = function (fruit) {
        if (this.isExist(fruit.brand))
            throw new Error("Fruit(".concat(fruit.name, ", ").concat(fruit.brand, ") already exists"));
        fruit.setId(++this.counter);
        this.list.push(fruit);
    };
    Fruits.prototype.isExist = function (brand) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var fruit = _a[_i];
            if (fruit.brand === brand)
                return true;
        }
        return false;
    };
    Fruits.prototype.getList = function () {
        return this.list;
    };
    return Fruits;
}());
exports.Fruits = Fruits;
