var name = "Johny";

let obj = {
  name: "Yogii",
  first() {
    console.log(`${this.name} is a doctor.`);
  },
  second: () => {
    console.log(`${this.name} is a plumber.`);
  },
};
obj.first();
obj.second();

// JavaScript Object Notation

// JSON is used in many languages like php , java , ruby,etc;
//JSON is language independent.

//1.Key should be in string formate
//e.g "name" : "saurbh"

//2.object key must be unique
//e.g
//    const student={
//     "name": "suraj",
//     "name":"anand"
//    };
//    console.log(student);

//e.g
const student = {
  name: "harshii",
  course: ["Icp", "datascience", "php", "Python"],
  address: {
    name: "vaishii",
    city: "nagar",
    pin: 12323,
    dist: "nagar",
  },
};
console.log(student.course);
// console.log(student.course[3]);
// console.log(student.address);
// console.log(student.address.dist);

const emp = {
  a: {
    age: 20,
    name: "saurbh",
  },

  b: {
    age: 21,
    name: "Harsh",
  },
};
console.log(emp);

//e.g

const stud2 = {
  name: "Suraj",
};
console.log(stud2);

stud2["tal"] = "rahuri";

console.log(stud2);

//e.g
const city = {
  pune: ["Saras Bag", "Shanivarvada", "Dagdushet ganapati"],
  Nagpur: ["Futala", "Ganesh Tekdi"],
  Patana: ["Eco Parl", "Patna Zoo"],
  Banglore: ["Cubban Park"],
};

//to print specific key and value
//  console.log(city.pune);

//To print specific index
//  console.log(city.pune[0]);

//At a time we will print two value
// console.log(city.pune.slice(0,2).join(","));
