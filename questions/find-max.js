console.log("-------FIND MAX------");
/**
 *
 * @param {string} char
 * @returns {boolean}
 */
function isLetter(char) {
	return char.length === 1 && char.match(/[a-z]/i);
}

/**
 * @param {string[]} list
 * @return {number}
 */
function findMax(list) {}

console.log(findMax(["alic3", "bob", "3", "4", "0000"]) === 5);
console.log(findMax(["bobur", "22", "15", "arslonbek good boy"]) === 22);
console.log(findMax(["pdp", "pdp22", "14"]) === 14);
console.log(findMax(["03", "02", "pdp8"]) === 4);
console.log(findMax(["abc", "cccc", "6"]) === 6);
console.log(findMax(["abc", "bbb", "cccc"]) === 4);
console.log(findMax(["0000", "01", "10"]) === 10);

/**
 * Constraints
 *   ✅ 1 <= list.length <= 100
 *   ✅ 1 <= list[i].length <= 100
 *   ✅ list[i] faqat inglizcha kichik harflar va raqamlardan iborat
 */
