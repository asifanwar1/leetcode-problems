var fibGenerator = function* () {
    let index = 0;
    let fib = [0, 1];

    while (true) {
        if (index >= fib.length) {
            fib.push(fib[index - 1] + fib[index - 2]);
        }
        yield fib[index];

        index++;
    }
};

let callCount = 5;

const gen = fibGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
