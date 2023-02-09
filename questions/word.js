console.log("-------WORD------");

/**
 * @param {string} str
 * @return {string}
 */
function word(str) {}

console.log(word("hello world!") === "world! hello");
console.log(word("yoda speak like this") === "this like speak yoda");
console.log(word("foobar") === "foobar");
console.log(word("pdp g-8") === "g-8 pdp");
console.log(word("thanks boy") === "boy thanks");
console.log(word("app test use") === "use test app");
console.log(word("test test test") === "test test test");
console.log(word("") === ""); //

/**
 * Constraints
 *   ✅ 0 <= str.length <= 1000
 *   ✅ str ozgaruvchidagi so'zlar faqat bitta bo'sh joy bilan ajratiladi.
 *   ✅ Oldingi yoki orqadagi bo'shliqlar yo'q
 */
