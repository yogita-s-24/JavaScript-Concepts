// A closure in JavaScript is a function that has access to its own scope, the scope of the outer function, and the global scope. This allows a function to retain access to variables from an outer function even after that outer function has completed execution.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const newFunction = outerFunction('Hello');

// Even though outerFunction has completed, innerFunction still has access to 'outerVariable'.
newFunction('World');
