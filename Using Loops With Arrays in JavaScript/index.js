let num = [3, 4, 1, 2, 4];

//(1)Simple for loop -

// for(let i=0; i<num.length; i++){
//     console.log(num[i]);
// }

//o/p=>
//3
//4
//1
//2
//4

//-----------------------------------------------------------------

//(2)forEach loop -

num.forEach((element) => {
    console.log(element * element)
})

//o/p=>
            //9
            //16
            //1
            //4
            //16

//------------------------------------------------------

//(3)Array.from -
let name = "Yogii";
let arr = Array.from(name);
console.log(arr);

//o/p=>[ 'Y', 'o', 'g', 'i', 'i' ]

//------------------------------------------------------------

//(4)for...of -
for(let item of num){
    console.log(item)
}

//o/p=>
//3
//4
//1
//2
//4

//------------------------------------------------------------------

//(5)for...in -
for(let i in num){
    console.log(num [i])
}

//o/p=>
//3
//4
//1
//2
//4