"use strict";
// console.log("Lesson-56");

// let a = 20; // 001 = 20
// let b = a; //  002 =
// b += 20;
// console.log(a) // 20
// console.log(b) // 40

/**
 * --------Primitive-----
 * Stack Memory
 * ----------------------
 * address    |    value
 *  a(001)          20
 *  b(002)          20
 *
 */

// let a = [10, 20, 30]; // a(001) = H(0001)
// let b = a;            // b(002) = H(0001)
// b[1] = 40; //  H(0001)[1] = 40
// console.log(a) // H(0001) -> [10,40,30]
// console.log(b) // H(0001) -> [10,40,30]

// /**
//  * * --------Reference-----
//  * Stack Memory
//  * ----------------------
//  * address    |    value
//  *  a(001)        H(0001)
//  *  b(002)        H(0001)
//  *
//  * Heap Memory
//  * ----------------------
//  * address    |     value
//  *  0001      |  [10, 40, 30]
//  *
//  */

//---------Primitive---------
// function showData(a) {
// 	a += 20; // 60

// 	console.log(a === b); // false

// 	return a; // 60
// }

// const b = 40;
// const result = showData(b); // 60

// console.log(b === result); // false

//---------Reference---------
// function showData(numbers) { // SM_numbers(002) = HM(0001)
// 	numbers[1] = 10; // HM(0001)[1] = 10;
// 	numbers[2] = 50; // HM(0001)[2] = 50;

// 	console.log(numbers === nums); // true

// 	return numbers; // HM(0001)
// }

// // HM(0001) = [1,10, 50, 4, 5]
// const nums = [1, 2, 3, 4, 5]; // SM_nums(001) = HM(0001)
// const result = showData(nums); // SM_result(003)  = HM(0001)

// console.log(nums === result); // true

/**
 * HEAP MEMORY
 * -----------
 * address    |     value
 *  0001             [3]
 *  0002             [3]
 *
//  */
// let a = 20; // SM_a(001) = 20
// let b = 20; // SM_b(002) = 20
// console.log(20 === 20); // true

// let str = "arslonbek-alimbayev";

// function fullName() {
// 	const names = str.split("-"); // ['arslonbek','alimbaev'];
// 	const firstName = names[0].toUpperCase();
// 	const lastName = names[1].toUpperCase();
// 	return `${firstName} ${lastName}`;
// } // ARSLONBEK ALIMBAEV

// function firstName() {
// 	const names = str.split("-"); // ['arslonbek','alimbaev'];
// 	const firstName = names[0].toUpperCase();
// 	return firstName;
// } // ARSLONBEK

// function lastName() {
// 	const names = str.split("-"); // ['arslonbek','alimbaev'];
// 	const lastName = names[1].toUpperCase();
// 	return lastName;
// } // ALIMBAEV

// function hi(fun) {
// 	const data = fun(); // data = 'ALIMBAEV'
// 	console.log(`Hello ${data}`);
// }

// hi(fullName);
// hi(firstName);
// hi(lastName);

// const str = "arslonbek";
// str.substring(0, 10);

const list = [
	["Tashkent", "Yunusobod", "Olmazor"],
	["Xorazm", "Xiva", "Gurlan"],
	["Navoiy", "Zarafshon", "Qiziltepa"],
	["Buxoro", "Gijdivon", "Vobkent", "shofirkon"],
];

for (let i = 0; i < list.length; i++) {
	const sub = list[i];
	const city = sub[0];
	console.log(`#${city}`);
	for (let j = 1; j < sub.length; j++) {
		console.log(`---${sub[j]}`);
	}
}
// // RESULT :
// #Tashkent
// ---Yunusobod
// ---Olmazor
// #Xorazm
// ---Xiva
// ---Gurlan
// #Navoiy
// ---Zarafshon
// ---QizilTepa
// #Buxoro
// ---Gijdivon
// ---Vobkent
// ---shofirkon
