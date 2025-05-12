var compose = function(functions) {
    
    return function(x) {
       
        for(let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x)
            
        }
        return x;
    }
};

// const fn = compose([x => x + 1, x => x * x, x => 2 * x])
// console.log(fn(4)) 


// const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
// console.log(fn(1)) 

const fn = compose([])
console.log(fn(42)) 