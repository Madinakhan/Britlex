"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fruit_1 = require("./fruit");
var fruits_1 = require("./fruits");
var fruit1 = new fruit_1.Fruit("Banana", 26000, 1, "BANANZA");
var fruit2 = new fruit_1.Fruit("Apple", 30000, 3, "JESCO");
var fruit3 = new fruit_1.Fruit("Orange", 90000, 2, "DENA");
var fruit4 = new fruit_1.Fruit("Lemon", 40000, 1, "DENA");
var fruits = new fruits_1.Fruits();
try {
    fruits.add(fruit1);
    fruits.add(fruit2);
    fruits.add(fruit3);
    fruits.add(fruit4);
    console.log(fruits.getList());
}
catch (err) {
    console.error(err.message);
}
