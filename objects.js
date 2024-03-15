// state and behavior(properties and methods) eg. car, chair, tabe, laptop
// store data in form of key, value pair

// object literal

// object = {property1: value1, property2: value2, property3: value3 ... propertyN: valueN}

// const person = {
//     name: 'John',
//     age: 37,
//     city: 'Nairobi',
//     isStudent: false
// };

// console.log(person);

// const car = {
//     brand: 'Mercedes',
//     model: 'W205',
//     year: 2020,
//     color: 'white'
// };

// console.log(car);


// let objectName = new Object()

// const person = new Object();
// person.name = 'John';
// person.age = 38;
// person.city = 'Nairobi';

// console.log(person);

// class Person {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
// }

// const person = new Person('John', 38, 'Nairobi');
// const person1= new Person('John', 38, 'Nairobi');

// const person2 = new Person('John', 38, 'Nairobi');

// console.log(person, person1, person2);


// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
// }

// const book1 = new Book('Killshot', 'Elmore Leonard', 2006 );
// // console.log(book1.author);


// class Person {
//     constructor(name, age, city){
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
// }

// const person = new Person('John', 38, 'Nairobi');
// const person1= new Person('John', 38, 'Nairobi');

// const person2 = new Person('John', 38, 'Nairobi');

// const people = [person, person1, person2];
// console.log(people);


// const people = [
//     {name: 'John', age: 30, city: 'Nairobi'},
//     {name: 'Jane', age: 25, city: 'Nairobi'},
//     {name: 'Vane', age: 30, city: 'Nairobi'},
//     {name: 'Jack', age: 21, city: 'Nairobi'}
// ]

// console.log(people[3].age);

// const cars = [
//     {make: 'BMW',  model:'3 Series', year: 2019, color: 'Black'},
//     { make: 'Audi', model: 'A8', year: 2020,color: 'Red'},
//     {make: 'Mercedes', model: 'W205', year: 2018, color: 'White' }
  
// ]
// console.log(cars[0].year);

// const cars = [
//     {brand: "Mercedes", model: "E350", year:2012},
//     {brand:"Toyota", model:'Prado VX.L', year: 2016, fuel:"Diesel"},
//     {brand: "BMW", model:  "3 Series", color: "Blue"},
// ]

// console.log(cars[2].model);

// const cars = [
//     {brand: 'Nissan', model: 'GTR', year: 2017},
//     {brand: 'Jeep', model: 'TrackHawk', year: 2019},
//     {brand: 'Dodge', model: 'Demon', year: 2018},
//     {brand: 'Tesla', model: 'CyberTruck', year: 2023},
//   ]
  
// console.log(cars[3].model);

// const cars = [
//     {brand:'Bentley', model:'Bentega', year:2023},
//     {brand:'Maybach', model:'Truck', year:2024},
//     {brand:'Suzuki', model:'Jimny', year:2022},
//     {brand:'Jeep', model:'wrangler', year:2021}
// ]
// console.log(cars);



// const cars = [
//     {make: 'Audi', model: 'Q7', year: 2022},
//     {make: 'Porsche', model: 'Panamera', year: 2018},
//     {make: 'Mercedes', model: 'GLS 350D', year: 2018}
// ]
// console.log(cars);

// const cars = [
//     {brand: "Mercedes", model: "c200", year:2008},
//     {brand:"Volkswagen", model:'Beetle', year: 1975},
//     {brand: "BMW", model:  "X3", year:2018},
// ]

// console.log(cars[1].model);

const cars =[
    {make:'audi', type:'Q5', year:2020, color:'grey'},
    {make:'mercedes', type:'c200', year:2017, color:'white'},

 ]
console.log(cars[1].make);



class Person {
    constructor(firstName, lastName, age, isStudent) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isStudent = isStudent;

    }
}

const person1 = new Person('John', 'Doe', 30, false);
console.log(person1);