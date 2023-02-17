console.log("-------WATCH------");

/**
 * @param {number[][]} nums
 * @return {number[]}
 */

function watch(nums) {}

console.log(watch([1, 2, 3], [8, 9, 4], [7, 6, 5])); // [1,2,3,4,5,6,7,8,9]
console.log(watch([1, 2], [3, 4], [5, 6])); // [1,2,4,6,5,3]
console.log(watch([1], [3], [5])); // [1,3,5]
console.log(watch([], [], [])); // []
console.log(watch([1, 2, 3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7])); // [1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8]
