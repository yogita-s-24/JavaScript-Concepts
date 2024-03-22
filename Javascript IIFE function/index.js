//Immediately invoked function
// Note : When we write 2 IIFE functions then we want to write semicolon at th end of the 1st function
(function chai() {
  console.log("1st DB connected.");
})();

((name) => {
  console.log("2nd DB connected.");
})("Sona");

((str1, str2) =>{
  return console.log("Both are combine together =", str1, str2)
})("Hii...", "How are u?");