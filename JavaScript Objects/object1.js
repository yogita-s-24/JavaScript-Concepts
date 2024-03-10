// const tinderUser = new Object()

// console.log(tinderUser);

const tinderUser = {};

tinderUser.id = "123dcf"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Yogii",
            lastName : "Shete"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1 : "a" ,  2 : "b"}
const obj2 = {3 : "v" ,  2 : "r"}
const obj3 = {5 : "r" ,  2 : "e"}
// console.log(obj1, obj2)

const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

obj5 = {...obj1, ...obj2, ...obj3 }
// console.log(obj5)

const users = [
    {
        id : 1,
        email : "y1@gmail.com"
    },
    {
        id : 2,
        email : "y2@gmail.com"
    },
    {
        id : 3,
        email : "y3@gmail.com"
    },
    
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'))