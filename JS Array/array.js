const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(fruits);
console.log(size);

const newArr = fruits.pop();
console.log(newArr);
console.log(fruits);


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(numbers);

console.log(first);