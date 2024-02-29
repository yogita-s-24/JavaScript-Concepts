const userName = "Sona"

console.log(userName)

const gameName = new String('Yogita')

console.log(gameName[0])
console.log(gameName.__proto__);  //it returns the object

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// 1.substring
// it is always start from 0th index
const newString = gameName.substring(0,4);
console.log(newString);

// 2.slice 
// bt its start from user provided index 
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// 3.trim()  = it remove the all white spaces
const newStringTwo  = "m     Sanket    "
console.log(newStringTwo);
console.log(newStringTwo.trim());


const url = 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/'

//4.replace() - it is used to replace the another string
console.log(url.replace('US', 'Amearika'))

//5.include - it is used to check the string is included or not
console.log(url.includes('developer'));   
console.log(url.includes('yogita'));   

console.log(gameName.split('-'));

const sentence = 'The quick brown fox jumps over the lazy dog.';


//6.at() 
let index = 10;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"