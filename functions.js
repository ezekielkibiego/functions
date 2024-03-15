function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('John');
greet('Jane');

function sum(a, b){
    return a + b;
}

const add = sum(3, 4);
console.log(add)
// console.log(sum(3, 4));
// console.log(sum(2, 3));


const multiply = (num1, num2) => num1 * num2;

console.log(multiply(4, 5));

let x = 3;
let y = 4;

let z = x + y;
console.log(z);

const evenNumbers = [];

function listEvenNumbers(start, end){

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

console.log(listEvenNumbers(1, 20));

console.log(evenNumbers);




const globalVar = 'I am global';

function globalScopeFunction() {
    console.log(globalVar);
}

globalScopeFunction();


function localScopeFunction() {
    const localVar = 'I am local';
    console.log(localVar);
    console.log(globalVar);

}

localScopeFunction();

let date = new Date();
console.log(date.toLocaleDateString());