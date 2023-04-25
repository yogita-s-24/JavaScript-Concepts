//Que.3
let runAgain = true;

const canDrive = (age) => {
    return age > 18 ? true : false
}
while(runAgain){
    const age = parseInt(prompt("Enter the value of age"));
    if(age>0){
        console.error("Please enter valid age");           //erroe show in console i.e Please enter valid age
    
        break;
    }
    
    if(canDrive(age)){
        alert("Yes u can drive the car.");
    }
    else{
        
        alert("No u cannot drive the car.");
    }
    runAgain=(confirm("Do u want to play again??"))
}