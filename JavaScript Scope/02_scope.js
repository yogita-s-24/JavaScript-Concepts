function one() {
  const userName = "Yogita";

  function two() {
    const website = "Youtube";
    console.log(userName);
    console.log(website);
  }
  two();
  // console.log(website);  we cannot access here bcz its a block scope variable
}
one(); //it's must to call the 1st function



if(true){
    const userName = "Yogita";

    if(userName==="Yogita"){
        const website = "YOUTUBE";
        console.log(userName+website);
    }
    // console.log(website);
}
// console.log(userName);

//Both console statements are in global scope that's why both can't print their values when we console the our printed part in block scope then it will print their values


//functions -  In this case its accepted hosting. It means we can used then we can declared it.

//Example: 1
console.log(addone(5))
function addone(num){
    return num + 1
}

//Example: 2
addTwo(5)
const addTwo = function(num){
  return num + 2
}

//Expressions
// In this case its not accepted hosting