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

// /* ----------- 12.02.23(62) ------------ */
// console.log("Lesson-62");

// const input = [2, 3, 4, 5];
// /**
//  *------ MAP METHOD ------
//  * powTwo:    output = [4,6,8,10]
//  * powThree:  output = [6,9,12,15]
//  * addPrefix: output = ['pdp-g-2','pdp-g-3','pdp-g-4','pdp-g-5']
//  * addPrefixIdx: output = ['pdp-g-20','pdp-g-31','pdp-g-42','pdp-g-53']
//  */

// function powTwo(item) {
// 	return 2 * item;
// }
// function powThree(item) {
// 	return 3 * item;
// }
// function addPrefix(item) {
// 	return `pdp-g-${item}`;
// }
// function addPrefixIdx(item, idx) {
// 	return `pdp-g-${item}${idx}`;
// }
// const output = input.map(addPrefixIdx);
// console.log(output);

// const input = [2, 10, 22, 23, 11, 17, 19];

// /**
//  *------ FILTER METHOD ------
//  * juft:   output = [2,10,22]
//  * toq:    output = [23,11,17,19]
//  * big20:  output = [22,23]
//  * small20:  output = [2,10,11,17,19]
//  */

// const juft = (item) => item % 2 === 0;
// const toq = (item) => item % 2 === 1;
// const big20 = (item) => item > 20;
// const small20 = (item) => item < 20;

// const output = input.filter(small20);
// console.log(output);

// const input = [20, 40, 13, 22, 2, 8, 15, 77];

// /**
//  * REDUCE METHOD
//  *  summa:   output = 197
//  *  findMax: output = 77
//  *  findMin: output = 2
//  *
//  */
// // function customFindMax() {
// // 	let max = 0;

// // 	for (let item of input) {
// // 		if (item > max) max = item;
// // 	}

// // 	return max;
// // }

// function summa(acc, curr) {
// 	return acc + curr;
// }

// const findMax = (max, curr) => (curr > max ? curr : max);
// const findMin = (min, curr) => (curr < min ? curr : min);

// const output = input.reduce(findMin);
// console.log(output);

// const input = ["pdp", "google", "apple", "arslonbek"];

/**
 * SPLICE METHOD
 * removeTwo: output = ['pdp', 'microsoft', 'amazon', 'arslonbek']
 * removePDP: output = ['napa', 'google', 'apple', 'arslonbek']
 * removeApple: output = ['pdp','google', 'amazon', 'amazon', 'arslonbek']
 *
 */

/* removeTwo */
// const output = input.splice(1, 2, "microsoft", "amazon");
// console.log(output);
// console.log(input);

/* removePDP */
// const output = input.splice(0, 1, "napa");
// console.log(output);
// console.log(input);

/* removeApple */
// const output = input.splice(2, 1, "amazon", "amazon");
// console.log(output);
// console.log(input);

// const input = [10, 20, 30, 20];

// console.log(input.at(-1));
// console.log(input.at(-2));
// console.log(input.at(-3));
// console.log(input.at(-4));
// console.log(input.at(0));
// console.log(input.at(1));
// console.log(input.at(2));
// console.log(input.at(3));
// console.log(input.at(-0));

// const input = ["arslonbek", "--pdp-g-8", "google", "pdp-apple", "arslonbek", "pdp-apple"];

/** IndexOf */
// const idx = input.indexOf("pdp-g-8");
// console.log(idx);

/** lastIndexOf */
// const lastIdx = input.lastIndexOf("pdp-apple");
// console.log(lastIdx);

/** findIndex */
// const idx = input.findIndex(function (item) {
// 	if (item.includes("pdp")) return true;
// 	else return false;
// });
// console.log(idx);

/** findIndex */
// const lastIdx = input.findLastIndex(function (item) {
// 	if (item.includes("pdp")) return true;
// 	else return false;
// });
// console.log(lastIdx);

// /** SOME METHOD */
// const input = [10, 20, 22, 11, 33, 76, 77];

// const output = input.some((item) => item % 3 === 0);
// console.log(output);

/** EVERY METHOD */
// const input = [12, 21, 21, 12, 33, 78, 72];

// const output = input.every((item) => item % 3 === 0);
// console.log(output);

/* ----------- 14.02.23(63) ------------ */
// console.log("Lesson-63");

// function squareUp(n) {
// 	const result = new Array(n).fill(0);
// 	return result.reduce((a, c, i) => {
// 		let counter = 0;
// 		return a.concat(new Array(n).fill(0).map((item, idx) => idx + 1));
// 	}, []);
// }

// console.log([1, 2, 3, 4, 1, 2, 3, 0, 1, 2, 0, 0, 1, 0, 0, 0].reverse());
// console.log(squareUp(4));

//
/**
 *------ squareUp(4)------
 * n = 4, result = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
 *
 * first loop:
 *   i = 3
 *    second loop:
 *    j = 3, 3 > 2.25 -> result = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
 *   i = 7
 *    second loop:
 *    j = 7, 3 > 0.25 -> result = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
 *
 */

// function find(n, idx) {}

//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//  [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2,  1,  4,   3,  2,  1]

// function maxMirror(nums) {
// 	let a = nums.join("");
// 	let b = nums.reverse().join("");
// 	console.log(a);
// 	console.log(b);
// }

// maxMirror([1, 2, 3, 8, 9, 3, 2, 1]);

// Object
/* ------ Introduction Object ----- */
// const person = [
//   "arslonbek",
//   "alimbayev",
//   2023-2001,
//   'teacher',
// ]
// console.log(person[0]);

// const _person = {
//  name: "arslonbek",
//  last: "alimbayev",
//  age: 2023-2001,
//  job: 'teacher',
//  isAccess: true
// }
// console.log(_person['name']);

// Tushunarli bolishi

// const person1 = {
// 	name: "arslonbek",
// 	last: "alimbayev",
// 	age: 2023 - 2001,
// 	job: "teacher",
// 	isAccess: true,
// };
// const person2 = {
// 	name: "jamshidbek",
// 	last: "alimbayev",
// 	age: 2023 - 2001,
// 	job: "teacher",
// 	isAccess: true,
// };

// let name = "arslonbek";
// let last = "alimbayev";
// let age = 2023 - 2001;
// let job = "teacher";
// let isAccess = true;

// let name2 = "jamshidbek";
// let last2 = "alimbayev";
// let age2 = 2023 - 2001;
// let job2 = "teacher";
// let isAccess2 = true;

// let name3 = "boburbek";
// let last3 = "alimbayev";
// let age3 = 2023 - 2001;
// let job3 = "teacher";
// let isAccess3 = true;

/* ------ Dot vs. Bracket Notation ----- */
// const person = {
// 	name: "arslonbek",
// 	last: "alimbayev",
// 	20: 21,
// 	"my-job": "Teacher",
// 	bos: "123",
// 	isAccess: true,
// 	key: "person-key",
// };

// const nums = [10, "arslonbek", false];
// /** Dot Notation */
// let key = "age";
// const output = person.key;
// console.log(output);

/** Bracket Notation */
// let key1 = "my";
// let key2 = "job";
// let output = person[`${key1}-${key2}`];
// console.log(output);

// person.any = "my any value";
// person["my-any"] = "my any value bracket";

// console.log(person);
// console.log(person["20"]);

/* Explain HEAP and STACK memories for JS Objects */

/**
 * HM_0001 = {
               name: { first: "arslonbek", last: "alimbayev" },
               job: "developer",
             }
 *
 *
 *
 */
// const a = {
// 	name: {
// 		first: "arslonbek",
// 		last: "alimbayev",
// 	},
// 	job: "teacher",
// }; // SM_a_001 = HM_0001

// const b = a; // SM_b_002 = HM_0001

// b.job = "developer"; // HM_0001.job = developer
// a.name.first = "jamshidbek"; // HM_0001.name.first = jamshidbek

// console.log(a);
// console.log(b);

// /**
//  * HM_0001 = [10, HM_0002, 30]
//  * HM_0002 = [20,40]
//  * HM_0003 = [10, HM_0004, 30]
//  * HM_0004 = [20,40]
//  */

// const a = [10, [20, 40], 30]; // HM_0001
// const b = [...a]; //  HM_0003
// b[1] = [20, 40];
// b[1][0] = 50;
// console.log(a);
// console.log(b);

const person = {
	name: "arslonbek",
	age: 21,
}; 

function app(obj) {
	if (obj === person) console.log("👍🏻 like 👍🏻");

	obj.job = "teacher";

 return obj
}

const myPerson = person;
myPerson.job = "developer";

// const result = app(myPerson)
console.log(result === person);
console.log(result === myPerson);
console.log(person);
