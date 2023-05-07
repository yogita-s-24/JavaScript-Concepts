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