let x = document.getElementsByTagName('span')[0]
console.log(x)

let y = document.getElementsByTagName('span')[0]
console.dir(y)

//This property returns the span tag and their elements
console.log(document.getElementsByTagName('span')[0])


//It returns the object and show the all properties
console.dir(document.getElementsByTagName('span')[0])


console.log(document.body.firstChild.nodeName);
//o/p-  '#text'


console.log(document.body.firstElementChild.nodeName);
//o/p-  'H1'


//1.first.innerHTML - it is shoe the all innerHtml Content - o/p -  <i>Hey I am Itallic</i>
console.log(first.innerHTML = "<i>Hey I am Itallic</i>")

//2.first.outerHTML - o/p - <div>Hey, She is Oggy</div>
console.log(first.outerHTML = "<div>Hey, She is Oggy</div>")


//3.text content- it shows the all text content
console.log(document.body.textContent)

//o/p-   hello world
   //    Hey, She is Oggy


