"use strict";

/* 20.04.23(88) */

/* Prototype */
// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Box.prototype.run = () => {
// 	console.log(`${this.name} is running...`);
// };

// for (let i = 1; i <= 10; i++) {
// 	const box = new Box(`Box-${i}`, `Black-${i}`);
// 	console.log(box);
// }

/* __proto__ */
// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;
// } // new Function

// const str = "ars"; // new String
// const person = {}; // new Object
// Box.prototype.run = () => {
// 	console.log(`${this.name} is running...`);
// };

// const box = new Box("Black Box", "Black");
// console.log(box.__proto__ === Box.prototype);

// console.log(box.__proto__.__proto__ === Object.prototype);
// console.log(Box.__proto__ === Function.prototype);
// console.log(String.__proto__ === Function.prototype);
// console.log(Boolean.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Object.__proto__ === Function.prototype);

// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Box.prototype.run = () => {
// 	console.log(`${this.name} is running...`);
// };

// const box = new Box("Black Box", "Black");

// Object.prototype.__proto__ === Object.__proto__;

// console.log(Object.prototype.__proto__);

Function.prototype.myOwnBind = function (whoIsCallingMe) {
	if (typeof this !== "function") {
		throw new Error(this + "cannot be bound as it's not callable");
	}
	const boundTargetFunction = this;
	return function (a, b) {
		console.log(arguments);
		boundTargetFunction.call(whoIsCallingMe, a, b);
	};
};

function app(...args) {
	console.log(args);
} // new Function

const person = { age: 20 };
const test = app.myOwnBind(person);
test("arslonbek", "boburbek");
