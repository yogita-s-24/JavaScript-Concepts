// You will be given an array a and a value x. 
// All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
    // your code here
    return a.includes(x)
  }
  

//  Numbers
let a1 = [1, 2, 3, 4, 5];
let x1 = 3;
console.log(check(a1, x1));  

//  Strings
let a2 = ['apple', 'banana', 'cherry'];
let x2 = 'banana';
console.log(check(a2, x2));  

// Mixed
let a3 = [1, 'apple', 3.14, 'banana'];
let x3 = 3.14;
console.log(check(a3, x3));  

// Not Present
let a4 = [1, 2, 3];
let x4 = 4;
console.log(check("New",a4, x4));  
