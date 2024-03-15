let numbers = [1, 2, 7, 3, 8];
let numbers2 = [ 9, 4, 5, 6];
// numbers.push(7,8);
// numbers.unshift(-1, 0);
// numbers.sort();
// numbers.reverse();

let newList = numbers.concat(numbers2);
// let sortedArray = newList.sort();
// let reversedAray = sortedArray.reverse();
// console.log(reversedAray);

// Includes()

const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(4));

// indexOf()

console.log(arr.indexOf(2));

// lastIndexOf()

console.log(arr.lastIndexOf(6));

// join()

const greeting = ['Good', 'morning'];
const joinedString = greeting.join(' ');
console.log(joinedString);

// slice()

const arr1 = [1, 2, 3, 4, 5];
const slicedArray = arr1.slice(3);
console.log(slicedArray);

// toString()

const arr2 = [1, 2, 3, 4, 5];
const stringArray = arr2.toString();
console.log(typeof stringArray);

// forEach()

const arr3 = [1, 2, 3, 4, 5];
arr3.forEach(element => console.log(element));

const fruits = ['banana', 'apple', 'lemon'];
console.log(fruits);
fruits.forEach(fruit => console.log(fruit));

function square(number) {
    console.log(number * number);
}

const numbers3 = [1, 2, 7, 3, 8];
numbers3.forEach(square);

// map()

const numbers4 = [1, 2, 7, 3, 8];

const mappedArray = numbers4.map(element => element * 2);
console.log(mappedArray);

// filter()

const arr4 = [1, 2, 3, 4, 5];

const filteredArray = arr4.filter(element => element > 3);
console.log(filteredArray);

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers5.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

const words = ['banana', 'apple', 'lemon', 'orange', 'grape', 'watermelon'];

const longWords = words.filter(word => word.length > 5);
console.log(longWords);