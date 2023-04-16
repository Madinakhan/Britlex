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

// function createFilm(name, price, createdDate, description) {
// 	return {
// 		name,
// 		price,
// 		createdDate,
// 		description,
// 		play() {
// 			console.log(`${this.name} is playing...`);
// 		},
// 	};
// }

// const film = createFilm("Sherlock Holmes", 220, "10.03.2003", "Detective Film");
// console.log(film);
// film.play();

// function Film(name, price, createdDate, description) {
// 	this.name = name;
// 	this.price = price;
// 	this.createdDate = createdDate;
// 	this.description = description;
// 	this.play = function () {
// 		console.log(`${this.name} is playing...`);
// 	};
// }

// const film1 = new Film("Forsage", 2000, "10.11.2013", "Speed film");
// console.log(film1);
// film1.play();

/** 16.04.23(86) */

/** Factory Function */
// function createBox(name, color) {
// 	return {
// 		name,
// 		color,
// 		run() {
// 			console.log(`${this.name} is running...`);
// 		},
// 	};
// }

// const blackBox = createBox("Black Box", "black");
// console.log(blackBox);

/* Constructor Function */
/**
 * ✅ pascal case da yoziladi
 * ✅ new Box()
 */

// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;

// 	this.run = function () {
// 		console.log(`${this.name} is running...`);
// 	};
// }

// const whiteBox = new Box("White Box", "White");
// console.log(whiteBox);

/** CALL | BIND | APPLY -> function methods */

/** CALL METHOD */
// const person = {
// 	name: "Kent",
// 	age: 20,
// 	salary: 2000,
// 	run() {
// 		console.log(`${this?.name} is running...`);

// 		function jump() {
// 			console.log(`${this?.name} is jumping...`);
// 		}

// 		jump.call(this);
// 	},
// };

// const book = {
// 	name: "Sherlock Holmes",
// };

// person.run();

// HOF (Higher Order Function)

// const items = [10, 15, 25].filter((num) => num % 2 === 1);
// console.log(items);

// function createIncrement() {
// 	let counter = 0;
// 	return function () {
// 		console.log("counter = ", ++counter);
// 	};
// }

// const increment = createIncrement();
// increment();
// increment();
// increment();
// increment();
// increment();

/** BIND METHOD */

// const person = {
// 	name: "Kent",
// 	run() {
// 		console.log(`${this?.name} is running...`);
// 	},
// };

// const book = { name: "Sherlock Holmes" };

/** Custom bind function */
// function bind(fun, obj) {
// 	return function () {
// 		fun.call(obj);
// 	};
// }

// const fn = person.run.bind(book);
// fn();

// const car = {
// 	name: "MBW",
// 	run() {
// 		console.log(`${this.name} is running...`);
// 		this.jump.apply(car, ["CAR", "CAR-SUFFIX"]);
// 		this.jump.call(car, "CAR", "CAR-SUFFIX");
// 		this.jump();
// 		//   2
// 	},
// };

// const fruit = {
// 	name: "Banana",
// 	jump(prefix = "FRUIT", suffix = "FRUIT") {
// 		console.log(`${prefix} : ${this.name} is jumping... ${suffix}`);
// 	},
// };

// car.run.call(fruit);

// Banana is running...
// BMW is jumping...
// Banana is jumping...

// function createIncrement() {
// 	let counter = 0;
// 	return function () {
// 		console.log("counter = ", ++counter);
// 	};
// }

// const increment = createIncrement();
// increment();
// increment();
// increment();
// increment();
// increment();

// function Watch() {
// 	let isStart = false;
// 	this.start = function () {
// 		if (isStart) {
// 			console.error("❌ watch already started");
// 		} else {
// 			isStart = true;
// 			console.log("✅ watch started");
// 		}
// 	};
// 	this.stop = function () {
// 		if (isStart) {
// 			isStart = false;
// 			console.log("✅ watch stopped");
// 		} else {
// 			console.error("❌ watch already stopped");
// 		}
// 	};
// }

// const watch = new Watch();
// watch.start(); // ✅ watch started
// watch.stop(); //  ✅ watch stopped
// watch.stop(); //  ❌ watch already stopped
// watch.stop(); //  ❌ watch already stopped
// watch.start(); // ✅ watch started
// watch.start(); // ❌ watch already started

/** Private Properties and Methods */

// function Person() {
// 	let firstName = "Kent";
// 	let lastName = "John";

// 	this.getFullName = function () {
// 		return firstName + " " + lastName;
// 	};

// 	this.setFullName = function (value) {
// 		const items = value.split(" ");
// 		firstName = items[0];
// 		lastName = items[1];
// 	};
// }

// const person = new Person();
// console.log(person.getFullName());
// person.setFullName("Mark Twin");
// console.log(person.getFullName());

const person = {
	firstName: "Kent",
	lastName: "Mark",
	get fullName() {
		console.log("calling getter ");
		return this.firstName + " " + this.lastName;
	},
	set fullName(value) {
		console.log("calling setter ");
		const [firstName, lastName] = value.split(" ");
		this.firstName = firstName;
		this.lastName = lastName;
	},
};

function Person(firstName, lastName) {}
// const person = new Person("Kent", "Mark");
// console.log(person.fullName);
// person.fullName = "Arslonbek Alimbaev";
// console.log(person.fullName);

let str = { key: "hellow" };
const chars = [...str];
console.log(chars);
