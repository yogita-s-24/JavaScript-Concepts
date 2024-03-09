// const array = [1,2,3,45,5];
// console.log(array)


const newArray = new Array(1,4,3,23,21,2);
console.log(newArray);


//methods of arrays
// newArray.push(333)
// newArray.pop()

// console.log(newArray.indexOf(21));
// console.log(newArray.includes(21));

// const arr1 = newArray.join('_')

// console.log(arr1);


//Slice method 

const num = [0,1,2,3,4,5,6,7]

console.log("Original Array :", num);

const myn1 = num.slice(1,3)
console.log("After applying slice method :", myn1);

//When we can used splice method 
const myn2 = num.splice(1,3)
console.log("After applying splice method :", myn2);
console.log("Original Array :", num);






// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(fruits);
// console.log(size);

// const newArr = fruits.pop();
// console.log(newArr);
// console.log(fruits);


// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(numbers);

// console.log(first);