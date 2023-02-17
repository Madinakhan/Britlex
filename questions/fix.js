console.log("-------FIX------");

/**
 * @param {string[]} words
 * @param {string} ref
 * @return {number}
 */
function fix(words, ref) {}

console.log(fix(["pay", "attention", "practice", "attend"], "at") === 2);
console.log(fix(["word", "era", "words", "counter", "tester", "enter"], "er") === 4);
console.log(fix(["pdp-app-8", "pdp-8", "apple-pdp-uz", "case-pdp"], "pdp") === 4);
console.log(fix(["app", "case", "php"], "p") === 2);
console.log(fix(["js", "python", "php"], "a") === 0);
console.log(fix([], "a") === 0);
