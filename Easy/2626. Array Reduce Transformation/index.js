/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let value = init;
    for (let i = 0; i < nums.length; i++) {
        value = fn(value, nums[i]);
    }
    return value;
};

// let nums = [1, 2, 3, 4];
// let fn = function sum(accum, curr) {
//     return accum + curr;
// };
// let init = 0;

// let nums = [1, 2, 3, 4];
// let fn = function sum(accum, curr) {
//     return accum + curr * curr;
// };
// let init = 100;

let nums = [];
let fn = function sum(accum, curr) {
    return 0;
};
let init = 25;

console.log(reduce(nums, fn, init));
