//for

// for(let index=1; index<=10; i++){
//     const element = i;
//     console.log(element)
// }


for(let i=1; i<=10; i++){
    const element = i;
    console.log(element)
}


for (let i = 0; i < 10; i++) {
  console.log(`Outer loop value : ${i}`);
  for(let j=0; j<=10; j++){
    console.log(`Inner loop value ${j} and inner loop ${i}`);
  } 
  
}

// for (let i = 1; i < array.length; i++) {
//   console.log(`Outer loop value : ${i}`);
//   for(let j=0; j<=10; j++){
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//   } 
// }

for (let i = 1; i < 10; i++) {
  console.log(`Outer loop value : ${i}`);
  for(let j=1; j<=10; j++){
    console.log(` ${i} * ${j} = ${i * j}`);
  } 
}


const myArray = ['Sonu', 'Aaru', 'Ira'] 
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

for (let i = 1; i <= 20; i++) {
  if(i == 5){
    console.log(`Detected 5`);
    break
  }
  console.log(`Value of i is ${i}`);
  
}
for (let i = 1; i <= 20; i++) {
  if(i == 5){
    console.log(`Detected 5`);
    continue
  }
  console.log(`Value of i is ${i}`);
  
}