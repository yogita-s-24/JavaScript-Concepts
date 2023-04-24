//1.assert()-
// console.asserts();     //Output:  Assertion failed:console.assert
// console.asserts("q");     //Output:undefined


//2.clear()-for clear the console
//console.clear();    


//3.log()-for printing the output
console.log('yogii');


//4.table()-for printing the output in table format
console.table({a:23,b:32,c:45,d:56,e:87 });


//5.warn()-for show the warnings
console.warn("Hey is this warning");


//6.error()- It shows the error 
console.error("This is error.");


//7.info()-
console.info("It shows the info.");


//8.time()-
console.time("forloop");
for(let i=0; i<10; i++){
    console.log("Hello")
}
console.timeEnd("forloop");

//8.time()-
console.time("whileloop");
let i=0;
while(i>500){
    console.log(233)
}
console.timeEnd("whileloop");