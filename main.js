// "use strict";
// const clg = console.log;
// // // HM_0001 = [10,20,30], HM_0002 = [10,30,30]
// // let a = [10, 20, 30]; // SM_a_001 = HM_0001
// // let b = [10, 30, 20]; // SM_b_002 = HM_0002
// // a[1] = b[2]; // HM_0001[1] = 20
// // b[2] = a[2]; // HM_0002[2] = 30

// // console.log(a); // [10,20,30]
// // console.log(b); // [10,30,30]

// //// Callback Function
// // let str = "arslonbek-alimbayev";
// // function fullName() {
// // 	const names = str.split("-"); // ['arslonbek','alimbaev'];
// // 	const firstName = names[0].toUpperCase();
// // 	const lastName = names[1].toUpperCase();
// // 	return `${firstName} ${lastName}`;
// // } // ARSLONBEK ALIMBAEV

// // function firstName() {
// // 	const names = str.split("-"); // ['arslonbek','alimbaev'];
// // 	const firstName = names[0].toUpperCase();
// // 	return firstName;
// // } // ARSLONBEK

// // function lastName() {
// // 	const names = str.split("-"); // ['arslonbek','alimbaev'];
// // 	const lastName = names[1].toUpperCase();
// // 	return lastName;
// // } // ALIMBAEV

// // function hi(fun) {
// // 	const name = fun();
// // 	console.log(`Hello ${name}`);
// // }

// // hi(fullName);
// // hi(firstName);
// // hi(lastName);

// /**
//  * Array Methods
//  *
//  *  */

// // forEach
// // let names = ["arslonbek", "Nurbek", "Amirxon"];

// // function forEach(fun) {
// // 	for (let index = 0; index < names.length; index++) {
// // 		fun(names[index], index);
// // 	}
// // }

// // forEach(prefix);

// // function prefix(name, index) {
// // 	console.log(`${index + 1} 🎁 Hello ${name}`);
// // }

// // let names = ["arslonbek", "Nurbek", "Amirxon"];

// // function show(name, idx) {
// // 	console.log(`${idx + 1} 🎁 ${name}`);
// // }

// // names.forEach(show);

// // let list = ["arslonbek", "20", "b10", "22", "a", "123a"];

// // function find() {
// // 	let maxIdx = 0;
// // 	let max = 0;

// // 	list.forEach(function (item, idx) {
// // 		let isNumber = Number(item);
// // 		let value = isNumber ? +item : item.length;

// // 		if (value >= max) {
// // 			max = value;
// // 			maxIdx = idx;
// // 		}
// // 	});

// // 	return list[maxIdx];
// // }

// // console.log(find());

// // HM_0001 = [10,50,40], HM_0002 = [10,20,50]
// // let a = [10, 20, 40]; // SM_a_001 = HM_0001
// // let b = a; // SM_b_002 = HM_0001
// // b[1] = 50; // HM_0001[1] = 50
// // b = [10, 20, 40]; // SM_b_002 = HM_0002
// // b[2] = 50; // HM_0002[2] = 50
// // console.log(a); // [10,50,40]
// // console.log(b); // [10,20,50]

// // console.log([] !== []);

// // Array Methods
// /**
//  * ✅ push -> array oxiridan element qoshish
//  *
//  */

// // // -------PUSH METHOD
// // let groups = ["pdp-g-8", "pdp-g-7"];
// // console.log(groups);
// //   groups.push("pdp-g-6", "pdp-g-5");
// // console.log(groups);

// // // -------POP METHOD
// // let groups = ["pdp-g-8", "pdp-g-7"];
// // console.log(groups);
// // const result = groups.pop();
// // console.log("result = ", result);

// // console.log(groups);

// // // -------SHIFT METHOD
// // let groups = ["pdp-g-8", "pdp-g-7"];
// // console.log(groups);
// // const result = groups.shift();
// // console.log("result = ", result);
// // console.log(groups);

// // -------UNSHIFT METHOD
// // let groups = ["pdp-g-8", "pdp-g-7"];
// // console.log(groups);
// // const result = groups.unshift("pdp-g-9");
// // console.log("result = ", result);
// // console.log(groups);

// // custom unshift function

// // const list = ["item-1", "item-2", "item-3", "item-4"];
// // function unshift(item) {
// // 	for (let i = list.length; i > 0; i--) {
// // 		list[i] = list[i - 1];
// // 	}

// // 	list[0] = item;

// // 	return list.length;
// // }

// // const result = unshift("item-0");
// // console.log(result);
// // console.log(list);

// // const nums = [10, 20, 30, 40];

// // nums.forEach(function (num, index) {
// // 	console.log(`call ${index + 1} -> num = ${num}`);
// // });

// // // Define a function that takes a function as an argument.
// // function getCapture(camera) {
// // 	// Invoke the passed function
// // 	camera();
// // }

// // // Invoke the function by passing a function as an argument
// // getCapture(function () {
// // 	console.log("Canon");
// // });

// // // Define a function that returns a function
// // function returnFunc() {
// // 	return function () {
// // 		console.log("Hi");
// // 	};
// // }

// // // Take the returned function in a variable.
// // const fn = returnFunc();
// // // Now invoke the returned function.
// // fn(); // logs 'Hi' in the console

// // // Alternatively - A bit odd syntax but good to know
// // returnFunc()(); // logs 'Hi' in the console

// // let str = "arslon"; // SM_str_001 = 'arslon'
// // console.log(str + "bek");
// // str = str + "bek";
// // console.log(str);
// // let list = [1, 2, 3];
// // list.push(20);

// // console.log(list);

// // let list = [1, 2, 3];
// // list.forEach(function (num, idx) {
// // 	console.log(`${idx} 🎁 ${num}`);
// // });

// // let list = [1, 2, 3];

// // function forEach(fun) {
// // 	for (let i = 0; i < list.length; i++) {
// // 		fun(list[i], i, list);
// // 	}
// // }

// // forEach(function (num, idx) {
// // 	console.log(`${idx} 🎁 ${num}`);
// // });

// /**
//  *
//  * @param {number[]} list
//  * @param {number} find
//  * @returns
//  */
// // function findMax(list, find) {
// // 	for (let item of list) {
// // 		if (item === find) return true;
// // 	}

// // 	return false;
// // }

// // console.log(findMax([10, 20, 30, 10, 55], 30));

// // function summa(a, b, c) {
// // 	return a + b + c;
// // }

// // const numbers = [10, 20, 30, 40, 50, 60];

// // // const result = summa(numbers[0], numbers[1], numbers[2]);
// // const result = summa(...numbers); // spread operation
// // console.log(result);

// // const powNums = nums.map(funct);

// // const nums = [1, 2, 3, 4, 15];

// // function map(fun) {
// // 	const result = [];

// // 	for (let i = 0; i < nums.length; i++) {
// // 		const value = fun(nums[i], i);
// // 		result[i] = value;
// // 	}

// // 	return result;
// // }

// // const powNums = nums.map(function (num) {
// // 	return num ** 2;
// // });

// // console.log(nums);
// // console.log(powNums);

// // const names = ["arslonbek-alimbayev", "odilbek-alimbayev", "boburbek-jamshidov"];
// // const newNames = names.map(function (name) {
// // 	return name.split("-");
// // });

// // console.log(newNames);

// /* ----------- 07.02.23(59) ------------ */
// // console.log("Lesson-59");

// // const nums = [1, 2, 3];

// // console.log(nums[(0, 1, 2)]);

// // const age = 20;
// // const isAccess = age > 16;

// // const message = isAccess ? "Mumkin" : "Mumkin emas";

// // console.log(message);
// // Nullish Operation
// // let userName;
// // let b = userName ?? "arslonbek";

// // console.log(userName);
// // console.log(b);

// // function a() {}

// // function b(callback) {
// // }

// // b(a)

// // let groups = ["g-7", "g-8", "g-9"];
// // result = ["pdp-g-7", "pdp-g-8", "pdp-g-9"]

// // function test(group) {
// // 	return "pdp-" + group;
// // }
// // const result = groups.map(test);

// // clg(result);

// // function foo(fn) {
// // 	fn();
// // }

// // function bar() {
// // 	return "I AM BAR FUNCTION";
// // }

// // foo(bar);

// const list = [
// 	["i am a teacher", "i am a doctor"],
// 	["word fly", "word test fly"],
// 	["pdp is big", "pdp is small", "pdp"],
// ];

// // const result = [
// // 	["teacher a am i", "doctor a am i"],
// // 	["fly word", "fly test word"],
// // 	["pdp is big", "pdp is small", "pdp"],
// // ];

// const result = list.map(function (sub) {
// 	return sub.map(function (item) {
// 		return item.split(" ").reverse().join(" ");
// 	});
// });
// clg(result);

// // clg("1-2-3".split("-"));
// // clg([1, 2, 3].reverse());
// // clg([1, 2, 3].join("-"));

/* ----------- 07.02.23(61) ------------ */
// console.log("Lesson-61");

// Reduce method
// const nums = [10, 50, 20, 30];

// const result = nums.reduce((a, c, idx) => {
// 	console.log("a = ", a);
// 	console.log("c = ", c);
// 	return a + c;
// });

// const nums = [10, 50, 20, 30];

// function reduce(fn) {
// 	let a = nums[0];
// 	for (let i = 1; i < nums.length; i++) {
// 		a = fn(a, nums[i]);
// 	}

// 	return a;
// }

// const result = reduce(function (a, c) {
// 	return a + c;
// });

// console.log(result);

// const names = ["arslonbek alimbayev", "odilbek alimbayev", "jamshidbek boburov"];

// function fn(acc, cur) {
// 	cur = cur.split(" ");
// 	console.log("acc = ", acc);
// 	console.log("cur = ", cur);

// 	return [...acc, ...cur];
// }

// const result = names.reduce(fn, []);

// console.log(result);

// const names = ["arslonbek alimbayev", "odilbek alimbayev", "jamshidbek boburov"];

// function reduce(callback, init) {
// 	let acc = init || names[0];

// 	for (let i = init ? 0 : 1; i < names.length; i++) {
// 		const cur = names[i];
// 		acc = callback(acc, cur);
// 	}

// 	return acc;
// }

// function fn(acc, cur) {
// 	cur = cur.split(" ");
// 	console.log("acc = ", acc);
// 	console.log("cur = ", cur);
// 	return acc.concat(cur);
// }

// const result = reduce(fn, []);

// i = 0 => acc = [], cur = "arslonbek alimbayev" => fn([],'arslonbek alimbayev') => cur: ['arslonbek','alimbayev'] -> acc: ['arslonbek','alimbayev']
// i = 1 => acc = ['arslonbek','alimbayev'],
// console.log(result);

// let a = [20, 30, 40];
// let b = [70, 60, 50];
// let c = [...b, ...a, ...a, ...a];

// console.log(c);

// HM_0001 = [20,30,40];
// let a = [20, 30, 40]; // SM_a_001 = HM_0001
// let b = [...a]; // SM_b_002 = HM_0002
// b[1] = 50;6
// console.log(a);
// console.log(b);

// let result = ["ab", "d", "a", "c"];

// result.sort();

// console.log(result);

/* ----------- 12.02.23(62) ------------ */
console.log("Lesson-62");
