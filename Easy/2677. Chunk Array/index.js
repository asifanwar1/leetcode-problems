/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function (arr, size) {
    let x = [];

    for (let i = 0; i < arr.length; i += size) {
        x.push(arr.slice(i, i + size));
    }

    return x;
};

let arr = [];
let size = 1;

// let arr = [1, 2, 3, 4, 5];
// let size = 1;

// let arr = [8, 5, 3, 2, 6];
// let size = 6;

// let arr = [1, 9, 6, 3, 2];
// let size = 3;

// let arr = ["1", "2", "3", "4", "5"];
// let size = 2;

console.log(chunk(arr, size));
