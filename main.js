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

const person = {
	firstName: "Jamshidbek",
	age: 21,
	job: "teacher",
	run() {
		console.log(`${this?.firstName} is moving...`);
	}, // 0002.0001()
};

const box = {
	firstName: "Box-1",
	jump: person.run, // 0003.0001
};
const fruit = {
	firstName: "Box-1",
	jump: box.run, // 0003.0001
};

person.run();
box.jump();

/** coding challenge */

// ✅ bitta funksiya yarating
// ✅ bir nechta object yarating (car, animal, fruit)
