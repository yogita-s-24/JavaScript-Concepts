console.log(document.body.firstChild)
a = document.body.firstChild               //o/p is #text
console.log(a.parentNode)                  //It's return parent node it is <body>
console.log(a.parentElement)              //It's also return parent element it is <body>




//not working on vs code
console.log(a.firstChild.nextSibling)

//It's O/p is <div class="Second">Second</div>