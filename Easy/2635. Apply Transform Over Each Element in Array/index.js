/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
};

let arr = [1, 2, 3];
let fn = function plusone(n) {
    return n + 1;
};

// let arr = [1, 2, 3];
// let fn = function plusI(n, i) {
//     return n + i;
// };

// let arr = [10, 20, 30];
// let fn = function constant() {
//     return 42;
// };

console.log(map(arr, fn));
