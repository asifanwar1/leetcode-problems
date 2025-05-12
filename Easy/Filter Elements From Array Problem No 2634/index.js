const filter = (arr, fn) =>{
    let result = [];

    for(let i = 0; i < arr.length; i++){
     
        // let x = fn(arr[i], i);
        // console.log(x);
        if(fn(arr[i], i)){
            result.push(arr[i]);
        }
    }

    return result;
}

let fn = function greaterThan10(n) { return n > 10; };
let arr = [0,10,20,30];


// let fn = function firstIndex(n, i) { return i === 0; }
// let arr = [1,2,3];


// let fn = function plusOne(n) { return n + 1 }
// let arr = [-2,-1,0,1,2];



console.log(filter(arr, fn)); 
