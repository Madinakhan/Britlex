"use strict";
// console.log("Lesson-57");
// // HM_0001 = [10,20,30], HM_0002 = [10,30,30]
// let a = [10, 20, 30]; // SM_a_001 = HM_0001
// let b = [10, 30, 20]; // SM_b_002 = HM_0002
// a[1] = b[2]; // HM_0001[1] = 20
// b[2] = a[2]; // HM_0002[2] = 30

// console.log(a); // [10,20,30]
// console.log(b); // [10,30,30]

//// Callback Function
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
// 	const name = fun();
// 	console.log(`Hello ${name}`);
// }

// hi(fullName);
// hi(firstName);
// hi(lastName);

/**
 * Array Methods
 *
 *  */

// forEach
// let names = ["arslonbek", "Nurbek", "Amirxon"];

// function forEach(fun) {
// 	for (let index = 0; index < names.length; index++) {
// 		fun(names[index], index);
// 	}
// }

// forEach(prefix);

// function prefix(name, index) {
// 	console.log(`${index + 1} 🎁 Hello ${name}`);
// }

// let names = ["arslonbek", "Nurbek", "Amirxon"];

// function show(name, idx) {
// 	console.log(`${idx + 1} 🎁 ${name}`);
// }

// names.forEach(show);

// let list = ["arslonbek", "20", "b10", "22", "a", "123a"];

// function find() {
// 	let maxIdx = 0;
// 	let max = 0;

// 	list.forEach(function (item, idx) {
// 		let isNumber = Number(item);
// 		let value = isNumber ? +item : item.length;

// 		if (value >= max) {
// 			max = value;
// 			maxIdx = idx;
// 		}
// 	});

// 	return list[maxIdx];
// }

// console.log(find());
