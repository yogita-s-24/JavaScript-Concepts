// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]


// Answer : 

function snail(array) {
    const result = [];
    
    while (array.length) {
        // Step 1: Take the first row
        result.push(...array.shift());
        
        // Step 2: Take the last element of each remaining row
        for (let i = 0; i < array.length; i++) {
            if (array[i].length) {
                result.push(array[i].pop());
            }
        }
        
        // Step 3: Take the last row in reverse order
        if (array.length) {
            result.push(...array.pop().reverse());
        }
        
        // Step 4: Take the first element of each remaining row in reverse order
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].length) {
                result.push(array[i].shift());
            }
        }
    }
    
    return result;
}

const array1 = [[1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]];
console.log(snail(array1)); //=> [1, 2, 3, 6, 9, 8, 7, 4, 5]

const array2 = [[1, 2, 3],
               [8, 9, 4],
               [7, 6, 5]];
console.log(snail(array2)); //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
