//Que.2
let runAgain = true;

const canDrive = (age) => {
    return age > 18 ? true : false
}
while(runAgain){
    const age = parseInt(prompt("Enter the value of age"));

    
    if(canDrive(age)){
        alert("Yes u can drive the car.");
    }
    else{
        
        alert("No u cannot drive the car.");
    }
    runAgain=(confirm("Do u want to play again??"))
}