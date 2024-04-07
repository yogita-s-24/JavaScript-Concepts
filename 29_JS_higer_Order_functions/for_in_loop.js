const myObject ={
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift"
}

for (const key in myObject) {
    // console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "c", "c++"]
for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}
