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
console.log("Lesson-66");
