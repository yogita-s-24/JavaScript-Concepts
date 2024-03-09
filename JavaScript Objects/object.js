// Define a symbol for a unique key
const mySym = Symbol("Key1");

// Create an object literal representing a JavaScript student with various properties
const JS_Student = {
  name: "Yogita", // Student's name
  fullName: "Yogita Shete", // Student's full name (using string key)
  [mySym]: "myKey1", // Using a symbol key
  age: 23, // Student's age
  location: "Pune", // Student's location
  email: "yogita@gmail.com", // Student's email address
  isLoggedIn: false, // Boolean indicating if the student is logged in
  lastLoginDays: ["Monday", "Saturday"], // Array representing days of last login
};

// console.log(JS_Student.email)
// console.log(JS_Student["email"])
// console.log(JS_Student["fullName"])
// console.log(JS_Student[mySym]);


// Change the email address of the student
JS_Student.email = "sona@gmail.com";
// console.log(JS_Student);

//It will freez the object we cannot change any value
// Object.freeze(JS_Student);
// console.log(JS_Student);

// Attempt to change the email address again (which should not reflect due to object being frozen later)
JS_Student.email = "mona@gmail.com";
// console.log(JS_Student);


// Define a method 'greeting' for the student object
JS_Student.greeting = function () {
  console.log("Hello Js User");
};

// Define another method 'greetingOne' for the student object, using 'this' to refer to the student's name
JS_Student.greetingOne = function () {
  console.log(`Hello Js User ${this.name}`);
};

// Print the result of calling the 'greeting' method
console.log(JS_Student.greeting());

// Print the result of calling the 'greetingOne' method
console.log(JS_Student.greetingOne());

// No return value is assigned to the console.log calls, so they will print 'undefined' to the console.
