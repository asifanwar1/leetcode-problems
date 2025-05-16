/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let calls = 0;
    return function (...args) {
        if (calls > 0) {
            return undefined;
        }
        calls++;
        return fn(...args);
    };
};

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);

// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

let fn = (a, b, c) => a * b * c;
let calls = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
];
let onceFn = once(fn);

console.log(onceFn(5, 7, 4)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
console.log(onceFn(4, 6, 8)); // returns undefined without calling fn
