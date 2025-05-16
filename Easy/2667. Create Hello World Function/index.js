var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    };
};

let args = [];
const f = createHelloWorld();
console.log(f());
