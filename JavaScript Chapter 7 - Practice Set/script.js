// Qu1:Create a navbar and change color of first element 

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// Que 3:change first and last color of element
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";


//Que 4:Change bgcolor of list
Array.from(document.getElementsByTagName("li")).forEach(element => {
    
    element.style.background = "cyan";
});
