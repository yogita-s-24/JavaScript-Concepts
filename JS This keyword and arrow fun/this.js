const user = {
  userName: "Yogita",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to website.`);
    // console.log(this);
  },
};
user.welcomeMessage();
user.userName = "Samy";
user.welcomeMessage();

// console.log(this);
function chai() {
    const username = "Yogita"
    // console.log(this);
}

chai()

const addTwo = (num1, num2) =>{
  return num1+num2 
}
console.log(addTwo(1,45));

// const addTwoNo = (num1, num2) => num1+num2 

console.log(addTwo(45,45))

const addTwoString = (str1, str2) => str1 + " " + str2 
console.log(addTwoString("Hii","Nikhil"))

// When we cannot pass parenthesis around the object, never print any object - output is undefined
// When we can pass parenthesis around the object, we can print object - output is { userName: 'Yogii' }

const addTwoNo = (num1, num2) => {userName : "Yogii"}
 
console.log(addTwoNo());

// Today, I learned about the "this" keyword in JavaScript. The behavior of the "this" keyword in functions is unique compared to other programming languages. It depends on how the function is called and can change each time the function is used. It is not possible to change the value of "this" directly while the function is running. However, we can use the "bind()" method to set the value of "this" for a function, regardless of how it is called. Arrow functions maintain the value of "this" from where they are defined, instead of creating their own context.