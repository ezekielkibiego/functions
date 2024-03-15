// let count = 0;
// while (count < 10) {
//     console.log(`Count: ${count}`);
//     count++;
// } 
let i = 0;
while (i <= 20){
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}

let sum = 0;
let num = 1;
while (num <= 20){
    if(num % 2 === 0){
        console.log(num);
        sum += num;
    }
    num++;
}
console.log(sum);
