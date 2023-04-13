"use strict";

/* EXPRESSION and STATEMENT */
// const isPaid = true;
// const status = isPaid ? "success" : "failure";

// function calc(a, b) {
// 	a = a ** 2;
// 	b = b ** 2;
// 	return a + b;
// }

// const result = calc(2, 3);

// const person = {
// 	firstName: "Jamshidbek",
// 	age: 21,
// 	job: "teacher",
// 	run() {
// 		console.log(`${this?.firstName} is moving...`);
// 	}, // 0002.0001()
// };

// const box = {
// 	firstName: "Box-1",
// 	jump: person.run, // 0003.0001
// };
// const fruit = {
// 	firstName: "Box-1",
// 	jump: box.run, // 0003.0001
// };

// person.run();
// box.jump();

/** coding challenge */

// ✅ bitta funksiya yarating
// ✅ bir nechta object yarating (car, animal, fruit)

/* 13.04.23(85) */

// function String1(value) {
// 	this.value = value;
// }

// String1.prototype.repeat = function (count) {
// 	let result = "";
// 	for (let i = 0; i < count; i++) {
// 		result += this.value;
// 	}

// 	return "Hello World";
// };

// const str = new String("arslonbek");
// console.log(str.repeat());

// const str1 = new String1("Boburbek");
// console.log(str1);

// const num = new Number(20);
// console.log(num);

// const bool = new Boolean(false);
// console.log(bool);

function createFilm(name, price, createdDate, description) {
	return {
		name,
		price,
		createdDate,
		description,
		play() {
			console.log(`${this.name} is playing...`);
		},
	};
}

const film = createFilm("Sherlock Holmes", 220, "10.03.2003", "Detective Film");
console.log(film);
film.play();

function Film(name, price, createdDate, description) {
	this.name = name;
	this.price = price;
	this.createdDate = createdDate;
	this.description = description;
	this.play = function () {
		console.log(`${this.name} is playing...`);
	};
}

const film1 = new Film("Forsage", 2000, "10.11.2013", "Speed film");
console.log(film1);
film1.play();
