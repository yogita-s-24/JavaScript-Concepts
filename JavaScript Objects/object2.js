const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

console.log(course.courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);

//JSON

const JsonObj = [
  {
    name: "yogita",
    age: 23,
    address: "Pune",
  },
  {
    name: "sanket",
    age: 28,
    address: "Pune",
  },
];

console.log(JsonObj)