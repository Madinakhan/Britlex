/**
 *
 * @param {string} char
 * @returns {boolean}
 */
function isLetter(char) {
	return char.length === 1 && char.match(/[a-z]/i);
}

/**
 *
 * @param {string} str
 * @returns {string}
 */

function find(str) {}

/**
 * Cases :
 *
 * find("a2bc10d22bc-23avv-2") -> 9
 * find("bca2-2b2") -> 2
 * find("dbcc10b100-200b200") -> 110
 * find("") -> 0
 * find("-10-10-10a10-20b10-10") -> 40
 */
