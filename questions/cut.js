console.log("-------CUT------");

/**
 * @param {string} str
 * @param {number} k  -> 1 <= k < 500
 * @return {string}
 */
function cut(str, k) {}

console.log(cut("Hello how are", 3) === "Hello how are");
console.log(cut("What is the solution to this problem", 4) === "What is the solution");
console.log(cut("Google best of the best", 3) === "Google best of");
console.log(cut("Arslonbek Good Boy", 1) === "Arslonbek");
console.log(cut("The end", 2) === "The end");
console.log(cut("Avatar Two good film", 2) === "Avatar Two");

/**
 * Constraints
 *   ✅ 1 <= str.length <= 500
 *   ✅ k o'zgaruvchi [1, str.length] oralig'ida.
 *   ✅ str faqat kichik va katta inglizcha harflar va bo'shliqlardan iborat.
 *   ✅ str ozgaruvchidagi so'zlar faqat bitta bo'sh joy bilan ajratiladi.
 *   ✅ Oldingi yoki orqadagi bo'shliqlar yo'q
 *
 */
