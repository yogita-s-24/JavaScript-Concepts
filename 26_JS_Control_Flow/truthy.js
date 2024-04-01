const userEmail = "yogii@gmail.com"

if(userEmail){
    console.log("Got user email.")
}
else{
    console.log("Don't have user email.")
}

//falsy values 

//false, 0, -0, BigInt On, " ", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}
//How to check array is empty or not?
const userEmailId = []
if(userEmailId.length === 0){
    console.log("Array is empty.")
}

//How to check object is empty or not?
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty.")
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// Terary operator
// condition ? true : false
const iceTeaPrice = 50
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


