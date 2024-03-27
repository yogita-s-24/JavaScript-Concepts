//if

//syntax
// if(condition){
//     //statement
// }


// const isUserloggedIn = true;
// if (isUserloggedIn) {
//   console.log("Executed...");
// }


// const temperature = 41;
// if (temperature === 45) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than than 50");
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==


//scope example

// const score = 200;
// if(score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);


// const balance =1000;
// if(balance >500) console.log("Test"),console.log("Test");

// if(balance<500){
//     console.log("Balance is less than 500");
// }
// else if(balance < 750){
//     console.log("Balance is less than 750");
// }
// else if(balance < 850){
//     console.log("Balance is less than 850");
// }
// else if(balance < 950){
//     console.log("Balance is less than 950");
// }
// else{
//     console.log("Balance is less than 1200");
// }


const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course.")
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in.");
}