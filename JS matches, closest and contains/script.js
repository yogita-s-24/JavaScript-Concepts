let id1 = document.getElementById("id1");
//let sp1 = document.getElementById("sp1");
console.log(id1);


//1.elem.matches()-it checks the classes are same or not

//In this case .class is not selector
console.log(id1.matches(".class"))
//o/p is false

console.log(id1.matches(".box"))
//o/p is true

//2.elem.closest()-it checks the nearest element of css selector
//o/P - IT return the span tag which id is #sp1
console.log(sp1.closest("#sp1"))

console.log(id1.contains(sp1))  //o/p - true
console.log(sp1.contains(sp1))  //o/p - true
console.log(sp1.contains(id1))  //o/p - false




