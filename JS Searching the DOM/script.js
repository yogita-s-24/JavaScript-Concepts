//1.getElementById 
//change font color by id 

const ctitile = document.getElementById("card-clr")

ctitile.style.color = "red";


//2.getElementClass
//const cdescription = document.getElementsByClassName("card-text")
//cdescription.style.color = "blue"

//3.querySelectorAll -  for select class or id at a time
//take a . for classname and # for id
let ctitiles = document.querySelectorAll(".card-title")
ctitiles[0].style.color = "blue" 
ctitiles[1].style.color = "red" 
ctitiles[2].style.color = "green"
console.log(ctitiles) 

//4.querySelector - for select single id or class
document.querySelector(".this").style.color = "red";
document.querySelector(".bgcolor").style.background = "yellow";
document.querySelector(".bgcolor").style.color = "black";

//5.combine querySeklector and Tagname selector
console.log(document.querySelector(".card").getElementsByTagName("a"));

//6.getElementByTagName
console.log(document.getElementsByTagName("a"));

//7.getElementByName
console.log(document.getElementsByName("search"));
