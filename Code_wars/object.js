let object = {
    name: "Sanket",
    problems: ["Garden", "Flower", "Books", "Snaps", "Wallet"],
    notLike: {
        behaviour1: "I don't like",
        behaviour2: "This is wrong behaviour",
        behaviour3: "Dare",
        behaviour4: "What's the truth"
    }
};

// Accessing each value directly
console.log("Name:", object.name);

// Accessing problems
console.log("Problem 1:", object.problems[0]);
console.log("Problem 2:", object.problems[1]);
console.log("Problem 3:", object.problems[2]);
console.log("Problem 4:", object.problems[3]);
console.log("Problem 5:", object.problems[4]);

// Accessing notLike behaviours
console.log("Behaviour 1:", object.notLike.behaviour1);
console.log("Behaviour 2:", object.notLike.behaviour2);
console.log("Behaviour 3:", object.notLike.behaviour3);
console.log("Behaviour 4:", object.notLike.behaviour4);

// Accessing with for of loop

// Accessing each value directly
console.log("Name:", object.name);

console.log("Problems:");

for (let problem of object.problems) {
    console.log(problem);
}

console.log("NotLike Behaviours:");

for (let key in object.notLike) {
    console.log(`${key}: ${object.notLike[key]}`);
}
