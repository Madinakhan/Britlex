console.log("-------FIND POINT------");

/**
 * @param {number[]} nums
 * @param {number[]} points
 * @return {number}
 */
function findPoint(nums, points) {}

console.log(findPoint([1, 3, 4, 11, 13, 55, 31, 42], [2, 5]) === 1);
console.log(findPoint([1, 10, 1, 25, 4, 17], [2, 3, 4]) === 1);
console.log(findPoint([6, 4, 2, 1], [1, 3]) === -1);
console.log(findPoint([], [2, 3, 2]) === -1);
console.log(findPoint([13, 17, 3, 19, 31, 39], [13, 17]) === 3);
console.log(findPoint([2, 4, 4, 3, 5, 1, 2, 4], [2]) === 3);
console.log(findPoint([2, 4, 4, 3, 5, 1, 2, 4], []) === -1);