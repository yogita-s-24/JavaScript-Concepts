const hero = ["salman", "ritesh", "amir", "varun"];

// console.log(hero);

const dc_heroins = ["jineliya", "kajal", "shilpa", "Pooja"];

// console.log(dc_heroins);

// console.log(hero.push(dc_heroins)); //not correct way to print combine array

// console.log("New Array : ", hero.concat(dc_heroins)); //used concat method to join two arrays its the coorect

// const all_Heros = [...hero, ...dc_heroins];
// console.log(all_Heros);


// const another_array = [1,2, [3,4], [5,6, [7,8], 9,[0,1]]]

// console.log("Original Array :", another_array);
// const wholeArray = another_array.flat(Infinity);   //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(wholeArray);


console.log(Array.isArray("Yogita"));
console.log(Array.from("Yogita"));
console.log(Array.from({name : "Yogita"}));   //its return a empty array


const score1  = 100;
const score2  = 300;
const score3  = 400;

console.log(Array.of(score1, score2, score3));
