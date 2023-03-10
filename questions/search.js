console.log("-------SEARCH------");

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
function search(products, searchWord) {} // mouse

console.log(search(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"));
/**
 * [
 *  ["mobile","mouse","moneypot"],
 *  ["mobile","mouse","moneypot"],
 *  ["mouse","mousepad"],
 *  ["mouse","mousepad"],
 *  ["mouse","mousepad"]
 * ]
 */

console.log(search(["pdp-a-15", "pdp-g-7", "pdp-g-8","pdp-b-8", "pdp-b-11"], "pdp-b-8"));
/**
 *  [
 *   ["pdp-a-15", "pdp-g-7", "pdp-g-8"], // p
 *   ["pdp-a-15", "pdp-g-7", "pdp-g-8"], // pd
 *   ["pdp-a-15", "pdp-g-7", "pdp-g-8"], // pdp
 *   ["pdp-a-15", "pdp-g-7", "pdp-g-8"], // pdp-
 *   ["pdp-b-8","pdp-b-11"], // pdp-b
 *   ["pdp-b-8","pdp-b-11"], // pdp-b-
 *   ["pdp-b-8"], // pdp-b-8 // pdp-b-8
 *  ]
 *
 */
console.log(search(["arslon"], "arslon"));
/**
 *  [
 *   ["arslon"], // a
 *   ["arslon"], // ar
 *   ["arslon"], // ars
 *   ["arslon"], // arsl
 *   ["arslon"], // arslo
 *   ["arslon"], // arslon
 *  ]
 *
 */

console.log(search(["pdp"], "")); // []
console.log(search([], "pdp")); // []
