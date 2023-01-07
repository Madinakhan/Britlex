// ## Type conversion
// let num = 22;

// let str = "23322";

// console.log(String(num));
// console.log(Number(str));

// ## Type coercion
// let first = 20;
// let second = "23";

// console.log(typeof first === "number");
// console.log(typeof second === "string");

// console.log(first + +second);

// const result = prompt("Son kirit");

// console.log(result);

/// Statements and Expressions

/**
 * Expression
 *
 */
// let age = 20;
// let result = age > 20 ? "katta" : "kichik";

// if (age > 20) {
// 	result = true;
// } else {
// 	result = false;
// }

// function calc() {
// 	for (let i = 0; i < 1000000; i++) {}
// 	return "hello world";
// }

// const result = calc();
const title = document.getElementById("title");
console.log(title.getAttributeNode("id").nodeType);
console.log(document.nodeType);
