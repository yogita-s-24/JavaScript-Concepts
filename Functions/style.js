console.log("this is new journy.");

//eg.(1)
let name1 = "Shubham";
let name2 = "Mukesh";
let name3 = "Harshal";
let name4 = "Mayur";
let name5 = "Harry";
let greetText = "Good Morning";

function greet(name,greetText){

    // let name1 = "Name1";  // It is local scope variable its not working out of the block
    console.log(greetText+ " "+name);
    console.log(name + " is a good boy");
}
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4,greetText);
greet(name5,greetText);



//eg(2)

function sum(a,b,c){
    let d = a+b+c;
    return d;
}

let returnval = sum(1,4,5);
console.log(returnval);


//eg(3)

function division(x ,y){
    let z = x/y;
    return z;
}

let result = division(12,90);
console.log(result);