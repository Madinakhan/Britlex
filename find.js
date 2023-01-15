// /**
//  *
//  * @param {string} char
//  * @returns {boolean}
//  */
// function isLetter(char) {
// 	return char.length === 1 && char.match(/[a-z]/i);
// }

// /**
//  *
//  * @param {string} str
//  * @returns {string}
//  */

// function find(str) {
// 	let result = 0;
// 	let temp = "";
// 	for (let idx = 0; idx < str.length; idx++) {
// 		const char = str[idx];
// 		const isMinus = char === "-";
// 		const isNumber = !isLetter(char) && !isMinus;

// 		if (isNumber) {
// 			temp += char;
// 			if (idx === str.length - 1) result += +temp;
// 		} else {
// 			result += +temp;
// 			temp = isMinus ? "-" : "";
// 		}
// 	}

// 	console.log("result = ", result);
// }

// find("a2bc10d22bc-23avv-2");
// find("bca2-2b2");
// find("dbcc10b100-200b200");
// find("");
// find("-10-10-10a10-20b10-10");

// /**
//  * Cases :
//  *
//  * find("a2bc10d22bc-23avv-2") -> 9
//  * find("bca2-2b2") -> 2
//  * find("dbcc10b100-200b200") -> 110
//  * find("") -> 0
//  * find("-10-10-10a10-20b10-10") -> -40
//  */
