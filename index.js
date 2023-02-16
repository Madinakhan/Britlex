"use strict";

/**Object */

/**
 * Coding Challenge #2 :
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
 *
 * BMI = weight/ (height * height)
 * Task-1 : Print a nice output to the console, saying who has the higher BMI.
 * The message is either "Mark's BMI is higher than Kent's!" or "Kent's BMI is higher than Mark's!"
 *
 * Task-2 : Use a template literal to include the BMI values in the outputs.
 * Example: "Mark's BMI (28.3) is higher than Kent's (23.9)!"
 * Example: "Kent's BMI (28.3) is higher than Mark's (23.9)!"
 *
 * Bonus-1: Name change
 *
 */
// Coding Challenge (BMI)
// const person1 = {
// 	name: "Mark",
// 	weight: 200,
// 	height: 2,
// 	bmi: null,
// };
// const person2 = {
// 	name: "Kent",
// 	weight: 150,
// 	height: 2.5,
// 	bmi: null,
// };

// person1.bmi = person1.weight / (person1.height * 2);
// person2.bmi = person2.weight / (person2.height * 2);

// console.log(person1);
// console.log(person2);

/**Object Methods */
const person = {
	name: "Boburbek",
	job: "teacher",
	age: 20,
	run() {
		console.log(`${this.name} is running...`);
	},
	jump() {
		console.log(`${this.name} is jumping...`);
	},
};

console.log(person.job);
person.run();
person.jump();

const person1 = {
	name: "Jamshidbek",
	job: "developer",
	age: 20,
	run() {
		console.log(`${this.name} is running...`);
	},
	jump() {
		console.log(`${this.name} is jumping...`);
	},
};

console.log(person1.job);
person1.run();
person1.jump();
