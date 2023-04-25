//Que.1 Which whether you can drive the car or not
const canDrive = (age) => {
 return age > 18 ? true : false
}
const age = parseInt(prompt("Enter the value of age"));
if(canDrive(age)){
    alert("Yes u can drive the car.");
}
else{

    alert("No  u cannot drive the car.");
}

