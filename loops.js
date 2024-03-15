for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 100; i++) {
    // console.log(`Count ${i}`);
    if (i == 50) {
        break;
    }
}

for (let i = 0; i <= 100; i++) {
    if (i == 50) {
        continue;
    }
    // console.log(`Count ${i}`);

}

for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
        console.log(`i: ${i}, j: ${j}`)
    }
}

let str = 'JavaScript'
for (let i = 0; i < str.length; i++) {
    console.log(`Character at index ${i}: ${str[i]}`)
}

let sum = 0;
for (let i = 1; i <= 10; i++){
    if (i % 2 != 0) {
        sum += i;
    }
}
console.log(`Sum of odd numbers is ${sum}`);