const user = {
  userName: "Yogita",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to website.`);
    // console.log(this);
  },
};
// user.welcomeMessage();
// user.userName = "Samy";
// user.welcomeMessage();

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
