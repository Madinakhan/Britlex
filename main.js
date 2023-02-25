"use strict";
/* ----------- 18.02.23(65) ------------ */
// console.log("Lesson-65");

/** __PROTO__ */

// const str = "arslonbek";
// console.log(str.__proto__);
// console.log(str.__proto__.__proto__);
// console.log(str.__proto__.__proto__.__proto__);

/* ------REFERENCE---- */
// const a = {
// 	name: "arslonbek",
// 	age: 20,
// };
// const b = a;
// b.age = 60;
// console.log(a);
// console.log(b);

/** this keyword */

/**
 * HM_0001 = {
 *  	name: "Arslonbek",
 *   age: 20,
 *   run: HM_0002
 * }
 *
 * HM_0002 = function () {
 *   console.log("this = ", this)
 * }
 *
 *
 */
// const person = {
// 	name: "Arslonbek",
// 	age: 20,
// 	run() {
// 		console.log("this = ", this);
// 	},
// }; // SM_person_001 = HM_0001

// person.run(); // HM_0001.HM_0002()
// const myRun = person.run; // SM_001_myRun = HM_0002
// myRun(); // HM_0002

/* ----------- 25.02.23(66) ------------ */
// console.log("Lesson-66");

// const person = {
// 	name: "Kent",
// 	age: 20,
// 	run() {
// 		console.log(this);
// 		console.log(`${this.name} is running...`);
// 	},
// };

// person.run();

/**
 * HM_0001 = {
 *  name: "Box-1",
 *  color: "black",
 *  eat: HM_0002
 *
 * }
 *
 * HM_0002 = function () {
 *  console.log(`${this.name} is eating...`)
 * }
 */

// const box = {
// 	name: "Box-1",
// 	color: "black",
// 	eat() {
// 		console.log(`${this.name} is eating...`);
// 	},
// }; // SM_box_001 = HM_0001

// box.eat(); // HM_0001.HM_0002()
// function run() {
// 	console.log(`${this.name} is running...`);
// }
// const person = {
// 	name: "Mark",
// 	age: 20,
// };

// const person2 = {
// 	name: "Jon",
// 	age: 20,
// };

// run.call(person);
// run.call(person2);

// const person = {
// 	name: "Kent",
// 	birthYear: 1990,
// 	currentYear: 2030,
// };
// const person1 = {
// 	name: "Mark",
// 	birthYear: 2010,
// 	currentYear: 2040,
// };

// function showData() {
// 	console.log(`${this.name} age(${this.currentYear} - ${this.birthYear}) : ${calcAge.call(this)}`);
// 	// Kent age(2030-1990) : 40
// }
// function calcAge() {
// 	return this.currentYear - this.birthYear;
// }

// showData.call(person);
// showData.call(person1);

/**Primitive type vs Reference type */
// HM_0001 = { value: 100 }
// let number = { value: 100 }; // SM_number_001 = HM_0001

// function app(obj) {
// 	// SM_obj_002 = HM_0001
// 	obj.value += 100; // HM_0001.value
// 	console.log("obj = ", obj); //  HM_0001
// }

// app(number); // app(HM_0001)
// console.log("number = ", number); // HM_0001

/** Factory function */
// function createBox(name, color = "White") {
// 	return {
// 		name,
// 		color,
// 		run() {
// 			console.log(`${this.name} is running...`);
// 		},
// 	};
// }

// const box1 = createBox("Box-1", "Black");
// const box2 = createBox("Box-2", "Yellow");

// console.log(box1);
// console.log(box2);

// const str = "PDP-G-7"; // new String()

/**
 *  camel case : createBox
 *  pascal case : CreateBox
 */

/**Constructor Function */

// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;
// 	this.run = function () {
// 		console.log(`${this.name} is running...`);
// 	};
// }

// const box = new Box("Box-1", "Black");
// box.run();

// console.log(Node.DOCUMENT_NODE === document.nodeType);
