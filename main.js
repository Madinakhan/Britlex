// function app(message) {
// 	return message;
// 	console.log("Hello World");
// }

// const result = app("arslonbek");
// console.log(result);

// // function _app(message) {
// // 	console.log("Hello World;");
// // }

// // const _result = _app();
// // console.log(_result);

// // function first() {
// // 	function second() {
// // 		return 20;
// // 		console.log("hello second");
// // 	}

// // 	second();
// // 	console.log("hello first");
// // }

// // first();

// const result = (true && "arslonbek") || ("false" && false) || "boburbek";
// console.log(result);

function test(str, size) {
	if (str.length >= size) {
		return str.substring(str.length - size);
	} else {
		return "Hello World";
	}
}

/**
 * test("ar", 3) -> "Hello World"
 * test("ars", 3) -> "ars"
 * test("arslonbek", 3) -> "bek"
 * test("", 1) -> "Hello World"
 *
 */

console.log(test("", 3));

const first = !!"arslonbek";
