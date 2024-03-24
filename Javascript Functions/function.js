function sayHello() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("S");
  console.log("H");
}

// sayHello();
// sayHello();

// function additionOfTwo(num1, num2){
//   console.log(num1 + num2)
// }
// additionOfTwo(3, 4);

// function additionofTwo(num1, num2){
//   console.log(num1 + num2)
// }

function additionofTwoNum(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}
const result = additionofTwoNum(3, 8);
// console.log("Result : ", result);

function loginedInUser(username) {
  return `Hey! ${username} just logged.`;
}
// console.log(loginedInUser("Sona"));

function loginedInUser(username) {
  return `Hey! ${username} just logged.`;
}
// console.log(loginedInUser("Sona"));

// function calculateCardPrice(num1){
//   return num1

// }
// console.log(calculateCardPrice(200,300,344));

//op : 200

function calculateCardPrice(...num2) {
  return num2;
}
// console.log(calculateCardPrice(200, 300, 400));

//op : [200, 300, 400]

function calculateCardPrice(val1, val2, ...num3) {
  // return num3
  // return val1
  return val2;
}
// console.log(calculateCardPrice(200, 300, 400, 900, 1000));

//op : [200, 300, 400]

const user = {
  userName: "Yogii",
  price: 199,
};


function handleObject(associtedObj) {
  // console.log(
  //   `Username is ${associtedObj.userName} and price the product is ${associtedObj.price}.`
  // );
}

// handleObject(user);
handleObject({
  userName: "Yogii",
  price: 199,
});


const newArray = [200, 400, 600, 800];

function returnSecondArray(getArray){
  return getArray[3]
}

// console.log(returnSecondArray(newArray));
console.log(returnSecondArray([200, 400, 600, 800]));


// instead of using a variable to store the return value of a function:

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";