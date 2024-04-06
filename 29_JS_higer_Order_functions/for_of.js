//forof loop in js
// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
//  console.log(num);
}

const greeting = "Hello world!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
}

//Map 
const map = new Map()
map.set('In', "India")
map.set('USA', "United State of Ameria")
map.set('Fr', "France")
map.set('In', "India")
console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// In this example for of loop is not working here its object is not iterable
const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTAVICT',
}
for (const [key,value] of myObject) {
    console.log(key, ':-', value);   
}