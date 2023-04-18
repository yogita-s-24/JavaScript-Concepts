//Map , Filter and Reduce methods in arrays

//1.Array map Methods - create the new array by performing some operations on each array elements.

let arr = [45, 5, 4, 3]
//console.log(arr);

//o/p=> [ 45, 5, 4, 3 ]

let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a);

//o/p=>
// 45 0 [ 45, 5, 4, 3 ]
// 5 1 [ 45, 5, 4, 3 ]
// 4 2 [ 45, 5, 4, 3 ]
// 3 3 [ 45, 5, 4, 3 ]
// [ 45, 6, 6, 6 ]

//........................................................................

//2.Array Filter Method - filter an array with value that passes the condition and its creates a new array.

let array = [5, 2, 4, 31, 21]
let a2 = array.filter((a) => {
    return a < 10
})
console.log(a2, array);

//o/p=>  [ 5, 2, 4 ]                  [ 5, 2, 4, 31, 21 ]
//if condition is true    and       its given array   

//------------------------------------------------------------------------------------------------------------------

//3.Array reduce Method-reduce an array in a single value
// Its added all given numbers in one value (means addition of all given numbers)
//1 + 2 + 3 + 4 + 5 + 6 + 7 = 57

let arr1 = [1,2,3,4,5,6,7];
let newarr = arr.reduce((h1 , h2) =>{
    return h1 + h2
})
console.log(newarr);

//o/p=>  57 