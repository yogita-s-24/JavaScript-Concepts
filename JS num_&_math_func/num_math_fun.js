// const score = 400;

// console.log(score);

// const data = "Yogita";

// console.log(data);

// const balance = new Number(100);
// console.log(balance); //[Number: 100]

// const bal = new String("Hello");
// console.log(bal); //[String: 'Hello']

// console.log(balance.toString().length); //3

// console.log(bal.toString().length); //5

// console.log(balance.toFixed(1)); //100.0

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); //123.9

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString("em-IN")); //10,000,000

//++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.5)); //4
console.log(Math.min(4, 5, 6, 1)); //1
console.log(Math.max(4, 5, 6, 9)); //9

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * max - min + 1) + min);
